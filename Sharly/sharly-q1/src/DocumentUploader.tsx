/** @format */

import React, { useState, ChangeEvent } from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { collection, addDoc } from "firebase/firestore";
import { storage, firestore } from "./firebaseConfig";
import { AiOutlineCloudUpload, AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorCircle } from "react-icons/bi";
import { ImSpinner2 } from "react-icons/im";
import { MdCancel } from "react-icons/md";

interface FileWithValidation extends File {
  validationError?: string;
}

const DocumentUploader: React.FC = () => {
  const [file, setFile] = useState<FileWithValidation | null>(null);
  const [error, setError] = useState<string>("");
  const [progress, setProgress] = useState<number>(0);
  const [success, setSuccess] = useState<boolean>(false);
  const [isUploading, setIsUploading] = useState<boolean>(false);
  const [uploadTask, setUploadTask] = useState<ReturnType<
    typeof uploadBytesResumable
  > | null>(null); // For cancellation

  // File validation
  const validateFile = (file: File): string => {
    const validTypes = ["application/pdf", "text/plain"];
    const maxSize = 5 * 1024 * 1024; // 5 MB
    if (!validTypes.includes(file.type))
      return "Only PDF or text files are allowed";
    if (file.size > maxSize) return "File size should not exceed 5MB";
    return "";
  };

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const selectedFile = e.target.files ? e.target.files[0] : null;
    if (selectedFile) {
      const validationError = validateFile(selectedFile);
      if (validationError) {
        setError(validationError);
        setFile(null);
      } else {
        setError("");
        setFile(selectedFile);
        setSuccess(false); // Reset success when a new file is selected
      }
    }
  };

  // Handle file upload
  const handleUpload = async (): Promise<void> => {
    if (!file) return;

    setIsUploading(true); // Show spinner
    const storageRef = ref(storage, `documents/${file.name}`);
    const task = uploadBytesResumable(storageRef, file);

    setUploadTask(task); // Save task for cancellation

    task.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setProgress(progress);
      },
      (error) => {
        setError("Upload failed");
        setIsUploading(false); // Stop spinner
        setUploadTask(null); // Reset task on failure
      },
      async () => {
        const downloadURL = await getDownloadURL(task.snapshot.ref);
        await addDoc(collection(firestore, "documents"), { url: downloadURL });
        setSuccess(true); // Show success message
        setFile(null); // Clear file
        setIsUploading(false); // Stop spinner
        setUploadTask(null); // Reset task
        setProgress(0); // Reset progress bar
      }
    );
  };

  // Handle cancel upload
  const handleCancelUpload = () => {
    if (uploadTask) {
      uploadTask.cancel();
      setIsUploading(false); // Stop spinner
      setProgress(0); // Reset progress
      setError("Upload cancelled");
      setUploadTask(null); // Reset task
    }
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 shadow-xl rounded-lg w-full max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">
        Upload a Document
      </h2>

      {/* File Input */}
      <div className="mb-4 w-full">
        <label className="w-full cursor-pointer">
          <input
            type="file"
            onChange={handleFileChange}
            accept=".pdf, .txt"
            className="hidden"
          />
          <div className="flex flex-col items-center justify-center bg-gray border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-all duration-300">
            <AiOutlineCloudUpload className="text-5xl text-blue-500 mb-2" />
            <p className="text-gray-600">
              Drag and drop, or click to select a file
            </p>
          </div>
        </label>
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center text-red-500 mb-4">
          <BiErrorCircle className="mr-2" />
          <p>{error}</p>
        </div>
      )}

      {/* File Preview */}
      {file && (
        <div className="text-gray-700 mb-4 flex items-center justify-between w-full">
          <div>
            <p className="font-semibold">Selected file:</p>
            <p>{file.name}</p>
          </div>
          <button
            className="text-red-500 hover:text-red-700"
            onClick={() => setFile(null)}
          >
            <MdCancel className="text-2xl" />
          </button>
        </div>
      )}

      {/* Upload Button */}
      <div className="flex space-x-4">
        <button
          onClick={handleUpload}
          disabled={isUploading || !file} // Disable if uploading or no file is selected
          className={`px-6 py-2 text-white font-semibold rounded-lg shadow-md 
  ${
    file && !isUploading
      ? "bg-blue-500 hover:bg-blue-600"
      : "bg-gray-400 cursor-not-allowed"
  }`}
        >
          {isUploading ? (
            <div className="flex items-center justify-center space-x-2">
              <ImSpinner2 className="animate-spin text-xl" />
              <span>Uploading...</span>
            </div>
          ) : (
            "Upload"
          )}
        </button>

        {/* Cancel Upload Button */}
        {isUploading && (
          <button
            onClick={handleCancelUpload}
            className="px-4 py-2 text-red-500 hover:text-red-700 font-semibold rounded-lg"
          >
            Cancel Upload
          </button>
        )}
      </div>

      {/* Progress Bar */}
      {progress > 0 && (
        <div className="w-full mt-4">
          <div className="bg-gray-300 h-2 rounded-full overflow-hidden">
            <div
              className="bg-blue-500 h-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <p className="text-gray-600 mt-2">{Math.round(progress)}% uploaded</p>
        </div>
      )}

      {/* Success Message */}
      {success && (
        <div className="flex items-center text-green-500 mt-4">
          <AiOutlineCheckCircle className="mr-2" />
          <p>File uploaded successfully!</p>
        </div>
      )}
    </div>
  );
};

export default DocumentUploader;
