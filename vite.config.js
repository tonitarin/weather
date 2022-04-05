import { defineConfig, loadEnv } from 'vite';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd());

  const envWithProcessPrefix = Object.entries(env).reduce(
    (prev, [key, val]) => ({
      ...prev,
      [`process.env.${key}`]: `"${val}"`,
    }),
    {},
  );

  return {
    define: envWithProcessPrefix,
  };
});
