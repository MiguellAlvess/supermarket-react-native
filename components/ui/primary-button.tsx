import React from "react"
import {
  ActivityIndicator,
  GestureResponderEvent,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle
} from "react-native"
import { Colors, FontSizes, Radius, Spacing } from "../../constants/theme"
import { useColorScheme } from "../../hooks/use-color-scheme"

type PrimaryButtonProps = {
  label: string
  onPress: (event: GestureResponderEvent) => void
  variant?: "primary" | "outline"
  loading?: boolean
  disabled?: boolean
  style?: ViewStyle
}

export const PrimaryButton = ({
  label,
  onPress,
  variant = "primary",
  loading = false,
  disabled = false,
  style
}: PrimaryButtonProps) => {
  const colorScheme = useColorScheme() ?? "light"
  const palette = Colors[colorScheme]

  const isDisabled = disabled || loading

  const isOutline = variant === "outline"

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      disabled={isDisabled}
      style={[
        styles.base,
        {
          backgroundColor: isOutline
            ? "transparent"
            : isDisabled
              ? palette.muted
              : palette.primary,
          borderColor: isOutline ? palette.primary : "transparent",
          opacity: isDisabled ? 0.7 : 1
        },
        style
      ]}
    >
      {loading ? (
        <ActivityIndicator color="#FFFFFF" />
      ) : (
        <Text
          style={[
            styles.label,
            {
              color: isOutline ? palette.primary : "#FFFFFF"
            }
          ]}
        >
          {label}
        </Text>
      )}
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  base: {
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: Radius.lg,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    flexDirection: "row"
  },
  label: {
    fontSize: FontSizes.md,
    fontWeight: "600"
  }
})

