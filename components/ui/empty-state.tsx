import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Colors, FontSizes, Radius, Spacing } from "../../constants/theme"
import { useColorScheme } from "../../hooks/use-color-scheme"

type EmptyStateProps = {
  title: string
  description?: string
}

export const EmptyState = ({ title, description }: EmptyStateProps) => {
  const colorScheme = useColorScheme() ?? "light"
  const palette = Colors[colorScheme]

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor: palette.primarySoft
        }
      ]}
    >
      <Text style={[styles.title, { color: palette.primary }]}>{title}</Text>
      {description ? (
        <Text style={[styles.description, { color: palette.muted }]}>
          {description}
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: Radius.lg,
    paddingVertical: Spacing.lg,
    paddingHorizontal: Spacing.lg,
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    fontSize: FontSizes.lg,
    fontWeight: "600",
    marginBottom: Spacing.xs,
    textAlign: "center"
  },
  description: {
    fontSize: FontSizes.sm,
    textAlign: "center"
  }
})

