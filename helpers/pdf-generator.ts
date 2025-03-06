import PDFDocument from "pdfkit";
import fs from "fs";
import type { ResultResponse, Component } from "../request/types/types.ts";
import { baseComponentTitleMapper } from "./result-title-mappers.ts";
import { metricToMapper } from "./metric-mapper.ts";

const INFO_METRICS = ["coverage", "ncloc", "duplicated_lines_density"];
const IGNORED_METRICS = ["code_smells"];

type MetricValues = {
  title: string;
  value: string;
};
const getMetricValues = (
  component: Component
): Record<string, MetricValues> => {
  const result: Record<string, MetricValues> = {};
  for (const { value, metric } of component.measures) {
    if (IGNORED_METRICS.includes(metric)) {
      continue;
    }
    const { title, mapper } = metricToMapper(metric);
    result[metric] = { title, value: mapper(value) };
  }
  return result;
};

const generatePDFResult = (
  data: ResultResponse,
  outputPath: string,
  createdAt: string
) => {
  const doc = new PDFDocument();
  const componentTitle = baseComponentTitleMapper(data.baseComponent.key);
  doc.pipe(fs.createWriteStream(`${outputPath}-${componentTitle}.pdf`));
  doc.fontSize(30).text(componentTitle, { align: "center" }).moveDown(1);
  doc
    .fontSize(20)
    .text(`Scanned at: ${createdAt}`, { align: "center" })
    .moveDown(1);
  const metricValues = getMetricValues(data.baseComponent);
  doc.fontSize(16).text("General report:", { align: "center" }).moveDown();
  const issues: MetricValues[] = [];
  Object.entries(metricValues).forEach(([key, { title, value }]) => {
    if (!INFO_METRICS.includes(key)) {
      issues.push({ title, value });
      return;
    }
    doc
      .fontSize(14)
      .text(`${title}: `, { continued: true })
      .text(value)
      .moveDown(0.5);
  });
  doc
    .fontSize(16)
    .text("Technical Issues Report:", { align: "center" })
    .moveDown();
  issues.forEach(({ title, value }) => {
    doc
      .fontSize(14)
      .text(`${title}: `, { continued: true })
      .text(value)
      .moveDown(0.5);
  });
  doc.end();
};

export { generatePDFResult };
