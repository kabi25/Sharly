/** @format */

// store/useDocumentStore.ts
import { onSnapshot, collection } from "firebase/firestore";
import { create } from "zustand";
import { db } from "../firebaseConfig";

interface DocumentState {
  documents: any[];
  fetchDocuments: () => void;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  documents: [],
  fetchDocuments: () => {
    const docRef = collection(db, "documents");
    onSnapshot(
      docRef,
      (snapshot) => {
        const docs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        console.log("Fetched Documents: ", docs);
        set({ documents: docs });
      },
      (error) => {
        console.error("Error fetching documents: ", error);
      }
    );
  },
}));
