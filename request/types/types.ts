type Paging = {
  pageIndex: number;
  pageSize: number;
  total: number;
};

type MetricValue =
  | "coverage"
  | "ncloc"
  | "security_hotspots"
  | "code_smells"
  | "duplicated_lines_density"
  | "vulnerabilities"
  | "security_issues"
  | "reliability_issues"
  | "bugs"
  | "maintainability_issues";

type Measure = {
  metric: MetricValue | string;
  value: string;
  bestValue?: unknown;
};

type Component = {
  key: string;
  name: string;
  qualifier: string;
  measures: Measure[];
};

type ResultResponse = {
  paging: Paging;
  baseComponent: Component;
  components: Component[];
};

type ShowComponent = {
  key: string;
  name: string;
  qualifier: string;
  analysisDate: string;
  tags: any[];
  visibility: string;
  leakPeriodDate: string;
  version: string;
  needIssueSync: boolean;
};

type ComponentToShow = {
  component: ShowComponent;
  ancestors: any[];
};

export type {
  ComponentToShow,
  ResultResponse,
  Component,
  Measure,
  MetricValue,
};
