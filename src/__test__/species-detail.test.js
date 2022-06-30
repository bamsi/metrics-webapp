import React from "react";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../redux/configureStore";
import SpeciesDetail from "../components/fish/species-detail";
import { shallow } from "enzyme";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/species",
    state: { species: "White Hook" },
  }),
}));

describe("Testing rendering of the mission page", () => {
  it("", () => {
    const { container } = render(
      <Provider store={store}>
        <Router>
          shallow(
          <SpeciesDetail />)
        </Router>
      </Provider>
    );
    expect(container).toMatchSnapshot();
  });
});
