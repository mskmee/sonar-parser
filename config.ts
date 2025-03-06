type Config = {
  TOKEN: string;
  BASE_URL: string;
  FULL_PARSE: boolean;
};

const config: Config = {
  TOKEN: process.env.SONAR_TOKEN ?? "",
  BASE_URL: process.env.BASE_URL ?? "",
  FULL_PARSE: process.env.IS_FULL_PARSE === "True",
};

export { config };
