/** @format */

import React, { useEffect } from "react";
import { collection, onSnapshot, query } from "firebase/firestore";
import { useDocumentStore } from "../store/useDocumentStore";
import { db } from "../firebaseConfig";
import DocumentList from "./DocumentList";
import ManualRefresh from "./ManualRefresh";

interface MyDocument {
  id: string;
  name: string;
  [key: string]: any;
}

const Dashboard: React.FC = () => {
  const { documents, setDocuments } = useDocumentStore();

  useEffect(() => {
    const q = query(collection(db, "documents"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const docs = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      })) as MyDocument[];
      setDocuments(docs);
    });

    return () => unsubscribe();
  }, [setDocuments]);

  return (
    <div>
      <h1>Document Dashboard</h1>
      <DocumentList />
      <ManualRefresh />
    </div>
  );
};

export default Dashboard;
