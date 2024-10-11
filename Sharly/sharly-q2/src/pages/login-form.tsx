/** @format */

import { useAuthStore } from "@/store/useAuthStore";
import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { FormEvent, useState } from "react";
import { auth } from "/home/fpt007/Desktop/Sharly GitHub/Sharly/Sharly/sharly-q2/src/firebaseConfig.js";
import { useRouter } from "next/router"; // Import useRouter from next/router

const LoginForm = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const setUser = useAuthStore((state) => state.setUser);
  const toast = useToast();
  const router = useRouter();

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
      toast({
        title: "Login Success",
        description: "Logged In",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      router.push("/dashboard");
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
  );
};

export default LoginForm;
