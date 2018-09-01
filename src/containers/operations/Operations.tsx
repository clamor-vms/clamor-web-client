import * as React from "react";
import SectionCards from "@/containers/cards/SectionCards";
import "./operations.css";

/* Mock data for interactive mockup */
const data = [
  {
    id: 1,
    title: "Michigan Permanent Progressive Campaign",
    type: "Operation",
    description:
      "A multi-surfced campaign that translates to more progressive victories",
    url: "operations/1"
  }
];

export default class Operations extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  public render() {
    return (
      <div className="operations">
        <SectionCards data={data} />
      </div>
    );
  }
}
