/** @format */

import React, { useState } from "react";
import { useDocumentStore } from "../store/useDocumentStore";

const PaginatedDocumentList: React.FC = () => {
  const documents = useDocumentStore((state) => state.documents);
  const [page, setPage] = useState<number>(1);
  const docsPerPage = 10;
  const startIndex = (page - 1) * docsPerPage;
  const paginatedDocs = documents.slice(startIndex, startIndex + docsPerPage);

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div>
      <ul>
        {paginatedDocs.map((doc) => (
          <li key={doc.id}>{doc.name}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={page === 1}>
        Previous
      </button>
      <button
        onClick={nextPage}
        disabled={startIndex + docsPerPage >= documents.length}
      >
        Next
      </button>
    </div>
  );
};

export default PaginatedDocumentList;
