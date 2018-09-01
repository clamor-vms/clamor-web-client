import * as React from "react";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import SectionCards from "./SectionCards";

/*
  Main focus of two tests, snapshot testing to ensure intended changes are made, and a react method test to make sure the method performs in the way we intend.
*/
describe("<SectionCards />", () => {
  const data = [{ id: 1, title: "test", description: "foobar" }];
  it("renders", () => {
    const sectionCards = shallow(<SectionCards data={data} />);
    const sectionInstance = sectionCards.instance() as SectionCards;
    const result = sectionInstance.generateCards(data)[0].key;
    expect(result).toEqual("1");
  });

  it("matches snapshot, as intended.", () => {
    const sectionCards = renderer.create(<SectionCards data={data} />).toJSON();
    expect(sectionCards).toMatchSnapshot();
  });
});
