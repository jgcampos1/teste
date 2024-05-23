import { useEffect } from "react";
import { toast } from "../ui/use-toast";

interface ApiStatusResponse {
  error?: unknown;
  isError?: unknown;
  isSuccess?: unknown;
  successMessage?: string;
  onError?: () => void;
  onSuccess?: () => void;
}

export const useToastAlert = ({
  error,
  isError,
  isSuccess,
  onError,
  onSuccess,
  successMessage,
}: ApiStatusResponse) => {
  useEffect(() => {
    console.log({ das: "useAlert", error: error, isError });
    if (!isError || !error) return;

    toast({
      variant: "destructive",
      description: error as string,
    });

    if (onError) onError?.();
  }, [isError, error]);

  useEffect(() => {
    if (!isSuccess || !successMessage) return;

    toast({
      variant: "default",
      description: successMessage as string,
    });

    if (onSuccess) onSuccess?.();
  }, [isSuccess, successMessage]);
};
