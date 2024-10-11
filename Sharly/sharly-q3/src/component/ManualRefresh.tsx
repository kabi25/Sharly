/** @format */

import { getDocs, collection } from "firebase/firestore";
import { useDocumentStore } from "../store/useDocumentStore";
import { db } from "../firebaseConfig";

interface Document {
  id: string;
  name: string;
  [key: string]: any;
}

const ManualRefresh: React.FC = () => {
  const setDocuments = useDocumentStore((state) => state.setDocuments);

  const handleRefresh = async () => {
    const querySnapshot = await getDocs(collection(db, "documents"));
    const docs = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as Document[];
    setDocuments(docs);
  };

  return <button onClick={handleRefresh}>Refresh List</button>;
};

export default ManualRefresh;
