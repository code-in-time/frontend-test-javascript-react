import React from 'react';
import renderer from 'react-test-renderer';
import WinnerBanner from './WinnerBanner';

it('Should test the WinnerBanner.js snapshot', () => {
  const tree = renderer.create(<WinnerBanner />).toJSON()
  expect(tree).toMatchSnapshot();
})
