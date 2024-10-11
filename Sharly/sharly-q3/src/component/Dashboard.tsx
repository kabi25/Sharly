/** @format */

// components/Dashboard.tsx
import { useEffect, useState } from "react";
import { useDocumentStore } from "../store/useDocumentStore";
import {
  Box,
  Button,
  CircularProgress,
  Container,
  Pagination,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import bgImg from "/home/fpt007/Desktop/Sharly GitHub/Sharly/Sharly/sharly-q3/src/asset/gradient-colors-blur-background.jpg";

const Dashboard = () => {
  const { documents, fetchDocuments } = useDocumentStore();
  const [currentPage, setCurrentPage] = useState(1);
  const [docsPerPage] = useState(10); // 10 docs per page

  // Fetch documents on mount
  useEffect(() => {
    fetchDocuments();
  }, [fetchDocuments]);

  // Get current documents for pagination
  const indexOfLastDoc = currentPage * docsPerPage;
  const indexOfFirstDoc = indexOfLastDoc - docsPerPage;
  const currentDocs = documents.slice(indexOfFirstDoc, indexOfLastDoc);

  // Change page
  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentPage(value);
  };
  console.log(documents);
  return (
    <div
      style={{
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container
        maxWidth="md"
        style={{
          marginTop: "50px",
          backgroundColor: "rgba(255, 255, 255, 0.5)",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h4" gutterBottom>
          Document Dashboard
        </Typography>

        {documents.length === 0 ? (
          <Box display="flex" justifyContent="center" my={4}>
            <CircularProgress />
          </Box>
        ) : (
          <List>
            {currentDocs.map((doc, index) => (
              <ListItem key={doc.id}>
                <ListItemText
                  primary={`${
                    (currentPage - 1) * docsPerPage + (index + 1)
                  }. Document ID: ${doc.id}`}
                  secondary={JSON.stringify(doc.data)}
                />
              </ListItem>
            ))}
          </List>
        )}

        <Box display="flex" justifyContent="center" my={4}>
          <Pagination
            count={Math.ceil(documents.length / docsPerPage)}
            page={currentPage}
            onChange={handlePageChange}
            color="primary"
          />
        </Box>

        <Button variant="contained" color="primary" onClick={fetchDocuments}>
          Refresh Documents
        </Button>
      </Container>
    </div>
  );
};

export default Dashboard;
