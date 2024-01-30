import { useLoadAssets } from "@/hooks/use-load-assets";
import "../global.css";
import { Slot } from "expo-router";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "index",
};

export default function Layout() {
  const { success } = useLoadAssets();

  if (!success) return null;

  return (
    <SafeAreaProvider>
      <GestureHandlerRootView className="bg-background flex-1">
        <BottomSheetModalProvider>
          <Slot />
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}
