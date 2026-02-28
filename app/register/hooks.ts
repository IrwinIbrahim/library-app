import { useState } from "react";
import { IRegisterBody } from "./type";
import { api } from "@/services/api";

export const useRegister = () => {
  const [data, setData] = useState();
  const [isPending, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");

  const doRegister = async (body: IRegisterBody) => {
    try {
      setIsLoading(true);
      const response = await api.post("/auth/register", body);

      if (response.status === 201) {
        setData(response.data);
      }
      setIsError(false);
      setError("");
    } catch (error) {
      setIsError(true);
      setError("Register failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return {
    mutate: doRegister,
    data: data,
    isPending: isPending,
    isError: isError,
    error: error,
  };
};
