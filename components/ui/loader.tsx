import React from "react"
import { ActivityIndicator, StyleSheet, View } from "react-native"
import { Colors, Spacing } from "../../constants/theme"
import { useColorScheme } from "../../hooks/use-color-scheme"

export const Loader = () => {
  const colorScheme = useColorScheme() ?? "light"
  const palette = Colors[colorScheme]

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={palette.primary} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: Spacing.lg
  }
})

