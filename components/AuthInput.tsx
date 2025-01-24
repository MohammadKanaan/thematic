import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Control, Controller } from "react-hook-form";
import { Colors } from "react-native-ui-lib";

interface AuthInputProps {
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
  secureTextEntry?: boolean;
  error?: string;
}

const AuthInput: React.FC<AuthInputProps> = ({
  control,
  name,
  label,
  placeholder,
  secureTextEntry,
  error,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Controller
        control={control}
        name={name}
        render={({ field: { onChange, value } }) => (
          <TextInput
            style={styles.input}
            onChangeText={onChange}
            value={value}
            placeholder={placeholder}
            placeholderTextColor={Colors.grey40}
            secureTextEntry={secureTextEntry}
          />
        )}
      />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    marginBottom: 5,
    fontSize: 16,
    fontWeight: "500",
    color: "black",
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.grey10,
    borderRadius: 5,
    padding: 10,
    fontSize: 16,
    color: Colors.grey1,
  },
  error: {
    color: "red",
    fontSize: 14,
    marginTop: 5,
  },
});

export default AuthInput;
