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

type Issue = {
  key: string;
  rule: string;
  severity: string;
  component: string;
  project: string;
  line: number;
  hash: string;
  textRange: TextRange;
  flows: any[];
  status: string;
  message: string;
  effort: string;
  debt: string;
  author: string;
  tags: any[];
  creationDate: string;
  updateDate: string;
  type: string;
  scope: string;
  quickFixAvailable: boolean;
  messageFormattings: any[];
  codeVariants: any[];
  cleanCodeAttribute: string;
  cleanCodeAttributeCategory: string;
  impacts: Impact[];
  issueStatus: string;
  prioritizedRule: boolean;
};

type TextRange = {
  startLine: number;
  endLine: number;
  startOffset: number;
  endOffset: number;
};

type Impact = {
  softwareQuality: string;
  severity: string;
};

type DetailsIssuesResponse = {
  total: number;
  p: number;
  ps: number;
  paging: Paging;
  effortTotal: number;
  issues: Issue[];
  components: any[];
  facets: any[];
};

export type {
  ComponentToShow,
  ResultResponse,
  Component,
  Measure,
  MetricValue,
  Issue,
  DetailsIssuesResponse,
};
