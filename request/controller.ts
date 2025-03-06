import { requestInstance } from "./request.ts";
import type { ComponentToShow, ResultResponse } from "./types/types.ts";

const getSonarResult = async (component: string): Promise<ResultResponse> => {
  const path = `/api/measures/component_tree?ps=500&s=qualifier%2Cname&component=${component}&metricKeys=ncloc%2Csecurity_issues%2Creliability_issues%2Cmaintainability_issues%2Cvulnerabilities%2Cbugs%2Ccode_smells%2Csecurity_hotspots%2Ccoverage%2Cduplicated_lines_density&strategy=children`;
  return (await requestInstance.get<ResultResponse>(path)).data;
};

const getSonarShowComponent = async (
  component: string
): Promise<ComponentToShow> => {
  const path = `/api/components/show?component=${component}`;
  return (await requestInstance.get(path)).data;
};

export { getSonarResult, getSonarShowComponent };
