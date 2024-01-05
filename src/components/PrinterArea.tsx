import React from "react";
import Migration from "./areas/Migration";
import Contract from "./areas/Contract";
import areaTypes from "../models/areaTypes";
import Print from "./ContractPrinter";

interface Props {
  type: typeof areaTypes[number];
}

const printerAreaComponents: Record<typeof areaTypes[number], React.FC> = {
  'Contract': <Contract onSubmit={contract => Print(contract)} />,
  'Migration': <Migration />,
}

function PrinterArea({type}: Props) {
  return printerAreaComponents[type] ?? <Contract onSubmit={contract => Print(contract)} />
}

export default PrinterArea
