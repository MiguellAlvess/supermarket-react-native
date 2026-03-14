import React from "react"
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View
} from "react-native"
import {
  Colors,
  FontSizes,
  Radius,
  Spacing
} from "../../constants/theme"
import { useColorScheme } from "../../hooks/use-color-scheme"

type TextInputFieldProps = TextInputProps & {
  label?: string
  errorMessage?: string
}

export const TextInputField = ({
  label,
  errorMessage,
  style,
  ...inputProps
}: TextInputFieldProps) => {
  const colorScheme = useColorScheme() ?? "light"
  const palette = Colors[colorScheme]

  const hasError = Boolean(errorMessage)

  return (
    <View style={styles.container}>
      {label ? (
        <Text style={[styles.label, { color: palette.text }]}>{label}</Text>
      ) : null}

      <TextInput
        placeholderTextColor={palette.muted}
        style={[
          styles.input,
          {
            backgroundColor: palette.surface,
            borderColor: hasError ? palette.danger : palette.border,
            color: palette.text
          },
          style
        ]}
        {...inputProps}
      />

      {hasError ? (
        <Text style={[styles.error, { color: palette.danger }]}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: Spacing.md
  },
  label: {
    fontSize: FontSizes.sm,
    fontWeight: "500",
    marginBottom: Spacing.xs
  },
  input: {
    borderWidth: 1,
    borderRadius: Radius.md,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.sm
  },
  error: {
    marginTop: Spacing.xs,
    fontSize: FontSizes.xs
  }
})

