"use client";

import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { Typography, Box } from "@mui/material";

export default function MainPage() {
  const user = useSelector((state: RootState) => state.user);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/login"); // Redirect to login if no user
    }
  }, [user, router]);

  return (
    <Box sx={{ mt: 5, textAlign: "center" }}>
      <Typography variant="h4">Welcome to the Main Page</Typography>
      <Typography variant="body1">User Email: {user?.email}</Typography>
    </Box>
  );
}
