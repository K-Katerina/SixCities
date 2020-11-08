import React from "react";
import renderer from "react-test-renderer";
import withComment from "./with-comment";
import PropTypes from "prop-types";
import {Provider} from "react-redux";
import {createStore} from "redux";
import rootReducer from "../../store/reducers/root-reducer";
import {BrowserRouter} from "react-router-dom";

const MockComponent = (props) => {
  const {children} = props;

  return (
    <div>
      {children}
    </div>
  );
};

MockComponent.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
};

const MockComponentWrapped = withComment(MockComponent);

it(`withComment is render correctly`, () => {
  const tree = renderer.create((
    <Provider store={createStore(rootReducer)}>
      <BrowserRouter>
        <MockComponentWrapped
          postReview={()=>{}}
          id={1}
        >
          <React.Fragment />
        </MockComponentWrapped>
      </BrowserRouter>
    </Provider>
  )).toJSON();
  expect(tree).toMatchSnapshot();
});