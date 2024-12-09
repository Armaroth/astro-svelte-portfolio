import { init, register, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("../locales/en.json"));
register("gr", () => import("../locales/gr.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator(),
});