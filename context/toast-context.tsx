import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState
} from "react"
import { LayoutAnimation } from "react-native"

type ToastType = "success" | "error" | "info"

type Toast = {
  id: number
  message: string
  type: ToastType
}

type ToastContextData = {
  showToast: (message: string, type?: ToastType) => void
}

const ToastContext = createContext<ToastContextData | undefined>(undefined)

type ToastProviderProps = {
  children: React.ReactNode
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<Toast[]>([])

  const removeToast = useCallback((id: number) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)
    setToasts((current) => current.filter((toast) => toast.id !== id))
  }, [])

  const showToast = useCallback(
    (message: string, type: ToastType = "info") => {
      const id = Date.now()

      LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut)

      setToasts((current) => [
        ...current,
        {
          id,
          message,
          type
        }
      ])

      setTimeout(() => removeToast(id), 2500)
    },
    [removeToast]
  )

  const value = useMemo(
    () => ({
      showToast
    }),
    [showToast]
  )

  return (
    <ToastContext.Provider value={value}>
      {children}
      <ToastContainer toasts={toasts} />
    </ToastContext.Provider>
  )
}

type ToastContainerProps = {
  toasts: Toast[]
}

const ToastContainer = ({ toasts }: ToastContainerProps) => {
  if (!toasts.length) return null

  return (
    <React.Fragment>
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </React.Fragment>
  )
}

import { Colors, Radius, Spacing, FontSizes } from "../constants/theme"
import { useColorScheme } from "../hooks/use-color-scheme"
import { StyleSheet, Text, View } from "react-native"

type ToastItemProps = {
  toast: Toast
}

const ToastItem = ({ toast }: ToastItemProps) => {
  const colorScheme = useColorScheme() ?? "light"
  const palette = Colors[colorScheme]

  const backgroundByType: Record<ToastType, string> = {
    success: "#22C55E",
    error: Colors.light.danger,
    info: palette.primary
  }

  return (
    <View pointerEvents="none" style={StyleSheet.absoluteFill}>
      <View style={styles.container} pointerEvents="box-none">
        <View
          style={[
            styles.toast,
            {
              backgroundColor: backgroundByType[toast.type]
            }
          ]}
        >
          <Text style={styles.message}>{toast.message}</Text>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingTop: 60
  },
  toast: {
    paddingHorizontal: Spacing.lg,
    paddingVertical: Spacing.md,
    borderRadius: Radius.lg,
    shadowColor: "#000",
    shadowOpacity: 0.15,
    shadowRadius: 12,
    shadowOffset: {
      width: 0,
      height: 6
    },
    elevation: 6,
    maxWidth: "90%"
  },
  message: {
    color: "#FFFFFF",
    fontSize: FontSizes.md,
    fontWeight: "600"
  }
})

export const useToast = () => {
  const context = useContext(ToastContext)

  if (!context) {
    throw new Error("useToast deve ser usado dentro de ToastProvider")
  }

  return context
}

