type Config = {
  TOKEN: string;
  BASE_URL: string;
};

const config: Config = {
  TOKEN: process.env.SONAR_TOKEN ?? "",
  BASE_URL: process.env.BASE_URL ?? "",
};

export { config };
