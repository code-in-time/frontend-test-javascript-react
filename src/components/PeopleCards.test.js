import React from 'react';
import renderer from 'react-test-renderer';
import PeopleCards from './PeopleCards';

it('Should test the PeopleCards.js snapshot', () => {
  const tree = renderer.create(<PeopleCards />).toJSON()
  expect(tree).toMatchSnapshot();
})
