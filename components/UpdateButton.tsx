"use client";

import { useDispatch } from "react-redux";
import { AppDispatch } from "../store/store";
import { fetchUserSuccess, fetchUserError } from "../store/actions";
import { fetchUserData } from "@/apis/userApi";


export default function UpdateButton() {
  const dispatch: AppDispatch = useDispatch();

  const handleClick = async () => {
    try {
      const data = await fetchUserData();
      dispatch(fetchUserSuccess(data));
    } catch (error) {
      dispatch(fetchUserError("Failed to fetch user data"));
    }
  };

  return <button onClick={handleClick}>Fetch User Data</button>;
}
