import * as React from "react";
import SectionCard from "./card/SectionCard";
import {
  ISectionCardsProps,
  ISectionCardsState
} from "./SectionCards.interface";
import { ICardData } from "./card/SectionCard.interface";

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

  public generateCards(cardData: ICardData[]) {
    return cardData.map(({ id, title, description }) => (
      <SectionCard key={id} id={id} title={title} description={description} />
    ));
  }

  public render() {
    const { data } = this.props;
    if (!data) return <div />;
    return this.generateCards(data);
  }
}
