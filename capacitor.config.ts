import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.culture_mp.app",
  appName: "Culture MP",
  webDir: "www",
  bundledWebRuntime: false,
  plugins: {
    SplashScreen: {
      launchAutoHide: false,
    },
  },
};

export default config;
