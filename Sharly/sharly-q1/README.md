Overview -
This component allows users to upload PDF or text files to Firebase Storage. It includes file type and size validation to ensure only files of 5 MB or less are uploaded.

Approach -
File Selection and Validation:
Used HTML <input> element to allow users to select files.
Validated file type (PDF or text) and size (max 5 MB) before proceeding with the upload.

Uploading to Firebase Storage:
Integrated Firebase Storage SDK to handle file uploads.
Displayed a progress bar that updates based on the upload progress.

Saving URL to Firestore:
After the upload is successful, the file URL is stored in Firebase Firestore to keep track of uploaded documents.

Bonus (Design & Success Message)-
Styled the form using [Material-UI/Tailwind CSS] to make the UI responsive and visually appealing.
Added a success message once the file is uploaded and saved in Firestore.

Technologies Used-
ReactJS for the component.
Firebase Storage and Firestore.
Material-UI/Tailwind CSS for styling.

Output:

![Screenshot from 2024-10-12 01-47-02](https://github.com/user-attachments/assets/5127964c-21c7-4309-90b9-4f6972b19b9f)

![Screenshot from 2024-10-12 01-47-16](https://github.com/user-attachments/assets/51de6c85-61b0-4234-9363-166d19f6d772)
