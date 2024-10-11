/** @format */

import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useAuthStore } from "@/store/useAuthStore";
import { auth } from "/home/fpt007/Desktop/Sharly GitHub/Sharly/Sharly/sharly-q2/src/firebaseConfig.js"; // Import your Firebase config
import { signOut } from "firebase/auth"; // Import signOut from Firebase
import { useRouter } from "next/router"; // Import useRouter

const Dashboard = () => {
  const user = useAuthStore((state) => state.user);
  const setUser = useAuthStore((state) => state.setUser); // Get the setUser function from state management
  const router = useRouter(); // Initialize the router

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out from Firebase
      setUser(null); // Clear user from state management
      router.push("/login"); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error); // Handle any errors
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bg="gray.100"
    >
      <Box textAlign="center">
        <Heading mb={4}>Welcome to Your Dashboard</Heading>
        <Text fontSize="lg">Hello, {user?.email}</Text>
        <Button mt={4} colorScheme="teal" onClick={handleLogout}>
          Logout
        </Button>
      </Box>
    </Box>
  );
};

export default Dashboard;
