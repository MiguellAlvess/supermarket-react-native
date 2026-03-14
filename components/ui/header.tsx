import { StyleSheet, Text, View } from "react-native";
import { Colors, FontSizes, Fonts, Spacing } from "../../constants/theme";
import { useColorScheme } from "../../hooks/use-color-scheme";

type HeaderProps = {
  title: string;
  subtitle?: string;
  centered?: boolean;
  titleSize?: number;
  subtitleSize?: number;
};

export const Header = ({
  title,
  subtitle,
  centered = false,
  titleSize,
  subtitleSize,
}: HeaderProps) => {
  const scheme = useColorScheme() === "dark" ? "dark" : "light";
  const palette = Colors[scheme];

  return (
    <View style={[styles.container, centered && styles.centered]}>
      <Text
        style={[
          styles.title,
          { color: palette.text, fontSize: titleSize ?? styles.title.fontSize },
        ]}
      >
        {title}
      </Text>

      {subtitle ? (
        <Text
          style={[
            styles.subtitle,
            {
              color: palette.muted,
              fontSize: subtitleSize ?? styles.subtitle.fontSize,
            },
          ]}
        >
          {subtitle}
        </Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: Spacing.sm,
  },

  centered: {
    alignItems: "center",
  },

  title: {
    fontSize: FontSizes["2xl"],
    fontFamily: Fonts?.sans,
    fontWeight: "700",
    textAlign: "center",
  },

  subtitle: {
    fontSize: FontSizes.md,
    fontFamily: Fonts?.sans,
    textAlign: "center",
  },
});
