import { View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function Screen({ children, flex = false, topSpacing = true }) {
  const insets = useSafeAreaInsets();
  let number = flex ? 1 : 0;
  let paddingTop = topSpacing ? insets.top : 0;
  return (
    <View
      style={{
        paddingTop: paddingTop,
        paddingBottom: insets.bottom,
        flex: number,
      }}
    >
      {children}
    </View>
  );
}
