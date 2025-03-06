import {
  getSonarResult,
  getSonarShowComponent,
  getDetailsIssues,
} from "./request/controller.ts";
import { generatePDFResult, getFormattedDate } from "./helpers/helpers.ts";
import { config } from "./config.ts";

const SONAR_PROJECTS = []; // add projects here
for (let i = 0; i < SONAR_PROJECTS.length; i++) {
  const project = SONAR_PROJECTS[i];
  const showComponent = await getSonarShowComponent(project);
  const formattedDate = getFormattedDate(showComponent.component.analysisDate);
  const fileName = `${formattedDate}${config.FULL_PARSE ? "-full" : ""}`;
  const result = await getSonarResult(project);
  const projectIssues = config.FULL_PARSE
    ? await getDetailsIssues(project)
    : null;

  generatePDFResult(result, fileName, formattedDate, projectIssues);
}
