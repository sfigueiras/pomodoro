import React from 'react';
import getRandomInt from '../../utils/getRandomInt';

const suggestions = [
  'Take your head out the window, breath some fresh air',
  'Play an instrument, if you can',
  'Go to the bathroom get your head away from the screen for a bit',
  'Just hear you breath',
  'Take some time to be grateful for what you have',
];

const getSuggestion = () => {
  const index = getRandomInt(suggestions.length - 1);
  return suggestions[index];
};

const BreakSuggestions = () => <p>{getSuggestion()}</p>;

export default BreakSuggestions;
