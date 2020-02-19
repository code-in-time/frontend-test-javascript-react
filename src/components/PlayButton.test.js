import React from 'react';
import renderer from 'react-test-renderer';
import PlayButton from './PlayButton';

it('Should test the PlayButton.js snapshot', () => {
  const tree = renderer.create(<PlayButton />).toJSON()
  expect(tree).toMatchSnapshot();
})
