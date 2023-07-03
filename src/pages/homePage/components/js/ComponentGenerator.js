import { seasonLines, stateLines, difficultyLines } from "./Lines";
import TrekCategoryGenerator from "./TrekCategoryGenerator";
import TrekListAPI from "../../../../apis/TrekListAPI";

const Treks = await TrekListAPI({});

const GenerateStateLine = (stateName) => {
  const index = Math.floor(Math.random() * stateLines.length);
  const sectionArray = Treks.filter((trek) => trek.state === stateName).slice(
    0,
    10
  );
  return {
    filterParameter: "state",
    filterValue: stateName,
    sectionHeadValue: stateLines[index] + stateName,
    sectionArrayValue: sectionArray,
  };
};

const GenerateSeasonLine = (seasonName) => {
  const index = Math.floor(Math.random() * seasonLines.length);
  const sectionArray = Treks.filter((trek) => trek.season === seasonName).slice(
    0,
    10
  );
  return {
    filterParameter: "season",
    filterValue: seasonName,
    sectionHeadValue: seasonLines[index] + seasonName,
    sectionArrayValue: sectionArray,
  };
};

const GenerateDifficultyLine = (difficultyName) => {
  const index = Math.floor(Math.random() * difficultyLines.length);
  const sectionArray = Treks.filter(
    (trek) => trek.difficulty === difficultyName
  ).slice(0, 10);
  return {
    filterParameter: "difficulty",
    filterValue: difficultyName,
    sectionHeadValue: difficultyLines[index] + difficultyName + " Treks",
    sectionArrayValue: sectionArray,
  };
};

const ComponentGenerator = () => {
  const trekCategory = TrekCategoryGenerator();

  const componentValue = [];

  trekCategory.forEach((trek) => {
    componentValue.push(
      Object.keys(trek)[0] === "state"
        ? GenerateStateLine(Object.values(trek)[0])
        : Object.keys(trek)[0] === "season"
        ? GenerateSeasonLine(Object.values(trek)[0])
        : GenerateDifficultyLine(Object.values(trek)[0])
    );
  });

  return componentValue;
};

export default ComponentGenerator;
