import type { Measure, MetricValue } from "../request/types/types.ts";

type MetricMapper = {
  title: string;
  mapper: (value: string) => string;
};

const formatJSONString = (string: string) => {
  try {
    const data = JSON.parse(string);
    return Object.entries(data)
      .map(
        ([key, value]) =>
          `${
            key.charAt(0).toUpperCase() + key.slice(1).toLocaleLowerCase()
          }: ${value}`
      )
      .join("; ");
  } catch (error) {
    console.error("Invalid JSON format:", error);
    return "Invalid data";
  }
};

const metricToMapper = (metric: string): MetricMapper => {
  const map: Record<MetricValue, MetricMapper> = {
    coverage: {
      title: "Test coverage",
      mapper: (value) => `${value}%`,
    },
    bugs: {
      title: "Bugs",
      mapper: (value) => value,
    },
    maintainability_issues: {
      title: "Maintainability Issues",
      mapper: formatJSONString,
    },
    ncloc: {
      title: "Lines of code",
      mapper: (value) => value,
    },
    security_hotspots: {
      title: "Security Hotspots",
      mapper: (value) => value,
    },
    reliability_issues: {
      title: "Reliability",
      mapper: formatJSONString,
    },
    security_issues: {
      title: "Security issues",
      mapper: formatJSONString,
    },
    vulnerabilities: {
      title: "Vulnerabilities",
      mapper: (value) => value,
    },
    duplicated_lines_density: {
      title: "Duplications",
      mapper: (value) => `${value}%`,
    },
    code_smells: {
      title: "Maintainability code smells",
      mapper: (value) => value,
    },
  };
  return (
    map[metric] ?? { title: "Not handled value", mapper: (value) => value }
  );
};

export { metricToMapper };
