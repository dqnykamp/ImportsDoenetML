import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { DoenetML } from "@doenet/doenetml";
import "./DoenetML.css";
import "@doenet/doenetml/style.css";

let doenetML = `Hi Duane <graph><regularPolygon center="($s, 0)"/></graph><mathinput name='f'/>$f<spreadsheet />
  <video youtube='ZZ5LpwO-An4' name='v'/><callaction target='v' actionName='playVideo' />
  <subsetOfRealsInput /><orbitalDiagramInput /><slider name="s"/><matrixInput />
  <codeEditor showResults/><booleanInput asToggleButton="$bool" name="bool"/><booleanInput />
  <textInput /> <textInput expanded /><choiceInput><choice>dog</choice><choice>not dog</choice></choiceInput>
  <choiceInput inline><choice>dog</choice><choice>not dog</choice></choiceInput>
  <ref />
  `;

ReactDOM.createRoot(document.getElementById("root")).render(
  <DoenetML doenetML={doenetML} />
);
