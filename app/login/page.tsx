"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { TextField, Button, Typography, Box } from "@mui/material";
import { logIn } from "../../apis/auth";
import { useDispatch } from "react-redux";
import { login } from "../../store/actions";
import { AppDispatch } from "../../store/store";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const router = useRouter();
  const dispatch: AppDispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const userCredential = await logIn(email, password);
      const { user } = userCredential;

      dispatch(login({ uid: user.uid, email: user.email || "" }));
      router.push("/main"); // Redirect to the main page after login
    } catch (err) {
      setError("Failed to login. Please check your credentials.");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
      <Typography variant="h4" gutterBottom>Login</Typography>
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
      <Button variant="contained" color="primary" onClick={handleLogin} fullWidth sx={{ mt: 2 }}>
        Log In
      </Button>
      <Button color="secondary" onClick={() => router.push("/signup")} fullWidth sx={{ mt: 1 }}>
        Don't have an account? Sign Up
      </Button>
    </Box>
  );
}
