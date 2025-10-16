import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function ButtonRounded({ title, onPress, isPrimary = true }) {

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.8}
      style={[ styles.button, isPrimary ? styles.primary : styles.secondary, ]}
    >
      <Text
      style={[ styles.text, isPrimary ? styles.textPrimary : styles.textSecondary, ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 8,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  primary: {
    backgroundColor: "#1ade34eb", 
  },
  secondary: {
    backgroundColor: "#c11010d4",
    borderWidth: 1.5,
    borderColor: "#090f1aff",
  },
  text: {
    fontSize: 16,
    fontWeight: "600",
  },
  textPrimary: {
    color: "#FFF",
  },
  textSecondary: {
    color: "#fff",
  },
});
