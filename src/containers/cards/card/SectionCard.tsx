import * as React from "react";
import { ICardData } from "./SectionCard.interface";

const SectionCard: React.SFC<ICardData> = ({ id, title, description }) => (
  <div>{`${id}  ${title} ${description}`}</div>
);

export default SectionCard;
