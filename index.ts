import { getSonarResult, getSonarShowComponent } from "./request/controller.ts";
import { generatePDFResult, getFormattedDate } from "./helpers/helpers.ts";

const SONAR_PROJECTS = ["everbeat-api", "grektek.mobile"];

for (let i = 0; i < SONAR_PROJECTS.length; i++) {
  const project = SONAR_PROJECTS[i];
  const showComponent = await getSonarShowComponent(project);
  const formattedDate = getFormattedDate(showComponent.component.analysisDate);
  const result = await getSonarResult(project);
  generatePDFResult(result, formattedDate, formattedDate);
}
