import * as React from "react";
import { shallow } from "enzyme";
import * as renderer from "react-test-renderer";
import SectionCards from "./SectionCards";

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

/* Example Test */
describe("Hello, Enzyme!", () => {
  it("renders", () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>
    );
    expect(wrapper.find("h1").html()).toMatch(/Hello, Enzyme/);
  });

  it("renders snapshots, too", () => {
    const wrapper = shallow(
      <div>
        <h1>Hello, Enzyme!</h1>
      </div>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
