/** @format */

// pages/login.tsx
import { useState, FormEvent } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "/home/fpt007/Desktop/Sharly GitHub/Sharly/Sharly/sharly-q2/src/firebaseConfig.js";
import {
  Button,
  Input,
  Box,
  Heading,
  Stack,
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  useToast,
} from "@chakra-ui/react";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useAuthStore } from "@/store/useAuthStore";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const setUser = useAuthStore((state) => state.setUser);
  const toast = useToast(); // Initialize Chakra UI toast for notifications

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
      toast({
        title: "Login Failed",
        description: error.message,
        status: "error",
        duration: 4000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgGradient="linear(to-r, teal.500, green.500)"
      p={4}
    >
      <Box
        maxWidth="500px" // Increased width for the login box
        width="100%"
        bg="white"
        borderRadius="lg"
        boxShadow="lg"
        p={8}
      >
        <Heading textAlign="center" mb={6}>
          Login
        </Heading>
        <form onSubmit={handleLogin}>
          <Stack spacing={4}>
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <EmailIcon color="teal.500" />
                </InputLeftElement>
                <Input
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  variant="outline"
                  borderColor="teal.300"
                  focusBorderColor="teal.500"
                />
              </InputGroup>
            </FormControl>
            <FormControl id="password" isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <LockIcon color="teal.500" />
                </InputLeftElement>
                <Input
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  variant="outline"
                  borderColor="teal.300"
                  focusBorderColor="teal.500"
                />
              </InputGroup>
            </FormControl>
            <Button
              type="submit"
              colorScheme="teal"
              isLoading={loading}
              width="full"
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
