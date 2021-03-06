import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter} from "react-router-dom";
import {Header} from "./header";

it(`Should Header render correctly`, () => {
  const tree = renderer
    .create(
        <BrowserRouter>
          <Header
            loggedIn={false}
            login={``}
          />
        </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
