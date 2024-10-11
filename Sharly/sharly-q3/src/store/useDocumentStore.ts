/** @format */

import { create } from "zustand";

interface Document {
  id: string;
  name: string;
}

interface DocumentState {
  documents: Document[];
  setDocuments: (newDocs: Document[]) => void;
}

export const useDocumentStore = create<DocumentState>((set) => ({
  documents: [],
  setDocuments: (newDocs) => set({ documents: newDocs }),
}));
