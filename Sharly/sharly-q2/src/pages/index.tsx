/** @format */

// pages/index.tsx
import { useAuthStore } from "../store/useAuthStore";
import { signOut } from "firebase/auth";
import { auth } from "/home/fpt007/Desktop/Sharly GitHub/Sharly/Sharly/sharly-q2/src/firebaseConfig.js";
import { Button } from "@chakra-ui/react";

export default function Home() {
  const user = useAuthStore((state) => state.user);
  const logout = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    await signOut(auth);
    logout();
  };

  if (!user) {
    return <p>Please log in.</p>;
  }

  return (
    <div>
      <p>Welcome, {user.email}</p>
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}
