import React from 'react';
import renderer from 'react-test-renderer';
import PlayingCard from './PlayingCard';

it('Should test the PlayingCard.js snapshot', () => {
  const tree = renderer.create(<PlayingCard />).toJSON()
  expect(tree).toMatchSnapshot();
})
