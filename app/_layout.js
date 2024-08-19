import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";
import { KeyboardAvoidingView, Platform } from "react-native";

export default function _layout() {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <Stack
          screenOptions={{ headerShown: false, animation: "slide_from_right" }}
        >
          <Stack.Screen name="index" />
        </Stack>
      </KeyboardAvoidingView>
    </Provider>
  );
}
