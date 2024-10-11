/** @format */
import React from "react";
import { Button, Card, Typography } from "@mui/material";
import { useDocumentStore } from "../store/useDocumentStore";

const DocumentList: React.FC = () => {
  const documents = useDocumentStore((state) => state.documents);

  return (
    <div>
      {documents.map((doc) => (
        <Card key={doc.id} style={{ margin: "1rem", padding: "1rem" }}>
          <Typography>{doc.name}</Typography>
        </Card>
      ))}
      <Button>Refresh List</Button>
    </div>
  );
};

export default DocumentList;
