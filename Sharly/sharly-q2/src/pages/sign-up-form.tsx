/** @format */

import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
} from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { auth } from "/home/fpt007/Desktop/Sharly GitHub/Sharly/Sharly/sharly-q2/src/firebaseConfig.js";
import { createUserWithEmailAndPassword } from "firebase/auth";

// Sign Up Form Component
const SignUpForm = ({ setShowSignUp }: { setShowSignUp: any }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const toast = useToast(); // Initialize Chakra UI toast for notifications

  const handleSignUp = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Sign up logic with Firebase
      await createUserWithEmailAndPassword(auth, email, password);
      toast({
        title: "Account Created",
        description: "You have successfully signed up!",
        status: "success",
        duration: 4000,
        isClosable: true,
      });
      // Optionally, you can navigate to a different page or perform other actions after signup
    } catch (error: any) {
      toast({
        title: "Sign Up Failed",
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
    <form onSubmit={handleSignUp}>
      <Stack spacing={4}>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            variant="outline"
            borderColor="teal.300"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            variant="outline"
            borderColor="teal.300"
            focusBorderColor="teal.500"
          />
        </FormControl>
        <Button
          type="submit"
          colorScheme="teal"
          width="full"
          isLoading={loading}
        >
          Sign Up
        </Button>
      </Stack>
    </form>
  );
};

export default SignUpForm;
