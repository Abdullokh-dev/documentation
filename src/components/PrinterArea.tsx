import { FC } from "react";
import Migration from "./areas/Migration";
import Contract from "./areas/Contract";
import areaTypes from "../models/areaTypes";
import Print from "./ContractPrinter";

interface Props {
  type: typeof areaTypes[number];
}

const printerAreaComponents: Record<typeof areaTypes[number], FC> = {
  'Contract': () => <Contract onSubmit={(contract) => Print(contract)} />,
  'Migration': () => <Migration />,
}

function PrinterArea({ type }: Props) {
  const Component = printerAreaComponents[type];

  if (Component) {
    return <Component />;
  }

  // Default to Contract if the type is not found
  return <Contract onSubmit={contract => Print(contract)} />;
}

export default PrinterArea;
