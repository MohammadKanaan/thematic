import { login } from "@/actions/auth";
import AuthInput from "@/components/AuthInput";
import { queryClient } from "@/lib/react-query";
import { loginSchema } from "@/types/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import React from "react";
import { useForm } from "react-hook-form";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import View from "react-native-ui-lib/view";

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      auth_token: "",
    },
  });

  const mutation = useMutation({
    mutationFn: (data: { auth_token: string }) => login(data.auth_token),
    onSuccess: (data) => {
      queryClient.setQueryData(["currentUser"], data);
      router.push("/");
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Welcome back!</Text>
        <AuthInput
          control={control}
          name="auth_token"
          label="Auth Token"
          placeholder="Enter your auth token"
          error={errors.auth_token?.message?.toString()}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit((data) =>
            mutation.mutate({
              auth_token: data.auth_token,
            })
          )}
        >
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.linkContainer}
          onPress={() => router.push("/auth/signup")}
        >
          <Text style={styles.linkText}>
            Don't have an account yet? Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  formContainer: {
    justifyContent: "center",
    width: "100%",
    maxWidth: 400,
  },
  title: {
    alignSelf: "center",
    fontSize: 34,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "black",
    fontSize: 16,
    fontWeight: "bold",
  },
  linkContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  linkText: {
    color: "black",
    fontSize: 14,
  },
});

export default LoginScreen;
