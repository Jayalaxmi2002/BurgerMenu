import { mergeConfig } from "vite";

export default {
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: {
          "@": "/src",
        },
      },
      server: {
        fs: {
          strict: false,
        },
      },
    });
  },
};
