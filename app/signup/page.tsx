"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Typography, Box } from "@mui/material";
import { signUp } from "../../apis/auth";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const router = useRouter();

  const handleSignUp = async () => {
    try {
      await signUp(email, password);
      setSuccess("Account created successfully! Redirecting to login...");
      setTimeout(() => {
        router.push("/login"); // Redirect to login page after success
      }, 2000);
    } catch (err) {
      setError("Failed to create account. Please try again.");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>Sign Up</Typography>
      <TextField
        label="Email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      {error && <Typography color="error">{error}</Typography>}
      {success && <Typography color="primary">{success}</Typography>}
      <Button variant="contained" color="primary" onClick={handleSignUp} fullWidth sx={{ mt: 2 }}>
        Sign Up
      </Button>
      <Button color="secondary" onClick={() => router.push("/login")} fullWidth sx={{ mt: 1 }}>
        Already have an account? Log In
      </Button>
    </Box>
  );
}
