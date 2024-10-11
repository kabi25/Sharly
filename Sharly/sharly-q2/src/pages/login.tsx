/** @format */

// pages/login.tsx
import { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/home/fpt007/Desktop/Sharly GitHub/Sharly/Sharly/sharly-q2/src/firebaseConfig.js";
import { Button, Input } from "@chakra-ui/react";
import { useAuthStore } from "@/store/useAuthStore";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const setUser = useAuthStore((state) => state.setUser);

  const handleLogin = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
    } catch (error: any) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <Input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <Input
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <Button type="submit" isLoading={loading}>
        Login
      </Button>
    </form>
  );
}
