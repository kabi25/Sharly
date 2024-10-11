/** @format */

import React, { MouseEvent, useState } from "react";
import { Box, Button, Flex, Heading } from "@chakra-ui/react";
import LoginForm from "./login-form";
import SignUpForm from "./sign-up-form";
import bgImg from "../assets/gradient-colors-blur-background.jpg";

import { motion } from "framer-motion";

const Login = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const flipVariants = {
    front: {
      rotateY: 0,
      transition: { duration: 0.6 },
      zIndex: 2,
    },
    back: {
      rotateY: 180,
      transition: { duration: 0.6 },
      zIndex: 1,
    },
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      height="100vh"
      bgSize="cover"
      bgPosition="center"
      bgGradient="linear(to-r, yellow.100, green.100)"
      p={4}
      css={{ perspective: "1000px" }}
    >
      <Box
        height="50%" // Ensure height is determined by content
        maxWidth="600px"
        width="100%"
        bg="#F4FAFC"
        borderRadius="lg"
        boxShadow="2xl"
        p={1}
        // bgImage={`url(${bgImg})`}
        position="relative"
        zIndex={1}
      >
        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
          }}
          initial={false}
          animate={isFlipped ? "back" : "front"}
          variants={flipVariants}
        >
          <Box width="90%" m="auto" pt="10">
            <Heading
              textAlign="center"
              mb={6}
              color="teal.500"
              fontFamily="heading"
            >
              Login
            </Heading>
            <LoginForm />
            <Button onClick={handleFlip} variant="link" mt={4} color="teal.500">
              Don't have an account? Sign Up
            </Button>
          </Box>
        </motion.div>

        <motion.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
          initial={false}
          animate={isFlipped ? "front" : "back"}
          variants={flipVariants}
        >
          <Box width="90%" m="auto" pt="10">
            <Heading
              textAlign="center"
              color="teal.500"
              fontFamily="heading"
              mb="10"
            >
              Sign Up
            </Heading>
            <SignUpForm setShowSignUp={setShowSignUp} />
            <Button onClick={handleFlip} variant="link" mt={4} color="teal.500">
              Already have an account? Login
            </Button>
          </Box>
        </motion.div>
      </Box>
    </Flex>
  );
};

export default Login;
