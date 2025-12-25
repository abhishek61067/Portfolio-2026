import React from "react";
import {
  Box,
  Flex,
  Image,
  Button,
  HStack,
  Container,
  Badge,
  Text,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router";
import { useAuthStore } from "./../store/authStore";
import { AxiosInstance } from "./../services/auth/AxiosInstance";
import Logo from "../assets/ecommerce-logo.svg";

export const Navbar = () => {
  const { accessToken, clearTokens } = useAuthStore();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      await AxiosInstance.post("users/logout");
      clearTokens();
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return "";
};
