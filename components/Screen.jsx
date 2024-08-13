import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Screen({ children }) {
  const insets = useSafeAreaInsets();
  return (
    <View style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}>
      {children}
    </View>
  );
}
