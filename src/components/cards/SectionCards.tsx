import * as React from "react";
import SectionCard from "./card/SectionCard";
import {
  ISectionCardsProps,
  ISectionCardsState
} from "./SectionCards.interface";
import { ICardData } from "./card/SectionCard.interface";

/* 
  Section cards component returns fragment of Section card Material-UI components.
*/
export default class SectionCards extends React.Component<
  ISectionCardsProps,
  ISectionCardsState
> {
  constructor(props: any) {
    super(props);
    this.generateCards = this.generateCards.bind(this);
    this.state = {
      title: "test"
    };
  }

  public generateCards(cardData: ICardData[] = []) {
    return cardData.map(({ id, title, description, url, type }) => (
      <SectionCard
        id={id}
        key={id}
        url={url}
        type={type}
        title={title}
        description={description}
      />
    ));
  }

  public render() {
    const { data } = this.props;
    if (!data) {
      return <div />;
    }
    return this.generateCards(data);
  }
}
