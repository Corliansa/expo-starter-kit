import { cn } from "@/utils/cn";
import {
  Text as DefaultText,
  View as DefaultView,
  Platform,
} from "react-native";
import { Link as DefaultLink } from "expo-router";
import * as WebBrowser from "expo-web-browser";
import { SafeAreaView as DefaultSafeAreaView } from "react-native-safe-area-context";

export function Text({ className, ...props }: DefaultText["props"]) {
  return (
    <DefaultText className={cn("text-foreground", className)} {...props} />
  );
}
export function View({ className, ...props }: DefaultView["props"]) {
  return <DefaultView className={cn("bg-background", className)} {...props} />;
}

export function Link({
  className,
  ...props
}: React.ComponentProps<typeof DefaultLink>) {
  return (
    <DefaultLink className={cn("text-foreground", className)} {...props} />
  );
}

export function ExternalLink(
  props: Omit<React.ComponentProps<typeof Link>, "href"> & { href: string }
) {
  return (
    <Link
      target="_blank"
      {...props}
      href={props.href}
      onPress={(e) => {
        if (Platform.OS !== "web") {
          // Prevent the default behavior of linking to the default browser on native.
          e.preventDefault();
          // Open the link in an in-app browser.
          WebBrowser.openBrowserAsync(props.href as string);
        }
      }}
    />
  );
}

export function SafeAreaView({
  className,
  ...props
}: React.ComponentProps<typeof DefaultSafeAreaView>) {
  return (
    <DefaultSafeAreaView
      className={cn("bg-background", className)}
      {...props}
    />
  );
}
