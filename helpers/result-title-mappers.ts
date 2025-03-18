const baseComponentTitleMapper = (title: string): string => {
  const map = {
    "grektek.mobile": "Everbeat mobile Application",
    "everbeat-api": "Everbeat Backend",
    "grektek.web": "Everbeat Web Dashboard",
  };

  return map[title] ?? "Application result";
};

const childComponentsTitleMapper = (title: string): string => {
  const map = {
    "everbeat-api:backend": "Backend code",
    "everbeat-api:infra": "Backend deploy infrastructure",
    "grektek.mobile:android/app/src": "Mobile APP android related code",
    "grektek.mobile:e2e": "Mobile APP e2e tests code",
    "grektek.mobile:src": "Mobile APP code",
    "grektek.mobile:babel.config.js": "JavaScript compiler config",
    "grektek.mobile:jest.config.js": "Jest (unit test framework) config",
    "grektek.mobile:metro.config.js": "Metro config",
    "grektek.mobile:react-native.config.js": "React Native config",
  };

  return map[title] ?? "Unnamed Component";
};

export { childComponentsTitleMapper, baseComponentTitleMapper };
