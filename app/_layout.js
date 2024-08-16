import { Stack } from "expo-router";
import { Provider } from "react-redux";
import store from "../store";

export default function _layout() {
  return (
    <Provider store={store}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
      </Stack>
    </Provider>
  );
}
