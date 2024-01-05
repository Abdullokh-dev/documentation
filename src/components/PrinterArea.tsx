import Type2 from "./areas/Type2";
import Type1 from "./areas/Type1";
import Type3 from "./areas/Type3";
import TypeDefault from "./areas/TypeDefault";
import areaTypes from "../models/areaTypes";
import React from "react";

interface Props {
  type: typeof areaTypes[number];
}

const printerAreaComponents: Record<typeof areaTypes[number], React.FC> = {
  'Type 1': <Type2 />,
  'Type 2': <Type1 />,
  'Type 3': <Type3 />,
}

function PrinterArea({type}: Props) {
  return printerAreaComponents[type] ?? <TypeDefault />
}

export default PrinterArea
