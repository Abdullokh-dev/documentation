import { FC } from "react";
import Migration from "./area/areas/Migration";
import Contract from "./area/areas/Contract";
import areaTypes from "../models/areaTypes";
import Print from "./DocCreateAction";

interface Props {
  type: typeof areaTypes[number];
}

const printerAreaComponents: Record<typeof areaTypes[number], FC> = {
  'Contract': () => <Contract onSubmit={(contract) => Print(contract)} />,
  'Migration': () => <Migration />,
}

function DocProduceAreaController({ type }: Props) {
  const Component = printerAreaComponents[type];

  if (Component) {
    return <Component />;
  }

  // Default to Contract if the type is not found
  return <Contract onSubmit={contract => Print(contract)} />;
}

export default DocProduceAreaController;
