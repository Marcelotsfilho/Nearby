import { StyleSheet } from "react-native";
import { colors } from "@/styles/theme" 

// constante s = abreviação de style
export const s = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray[100],
  }
})