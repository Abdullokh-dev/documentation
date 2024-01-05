import React from "react";
import Type2 from "./areas/Type2";
import Contract88 from "./areas/Contract88";
import Type3 from "./areas/Type3";
import TypeDefault from "./areas/TypeDefault";
import areaTypes from "../models/areaTypes";
import Print from "./ContractPrinter";

interface Props {
  type: typeof areaTypes[number];
}

const printerAreaComponents: Record<typeof areaTypes[number], React.FC> = {
  'Contract 88': <Contract88 onSubmit={contract => Print(contract, 'Contract88')} />,
  'Type 2': <Type2 />,
  'Type 3': <Type3 />,
}

function PrinterArea({type}: Props) {
  return printerAreaComponents[type] ?? <TypeDefault />
}

export default PrinterArea
