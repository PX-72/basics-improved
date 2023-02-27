import { createPosition } from './position.js';
import { build, append } from './utils/dom-helper.js';

export const createPositionList = positionListData => append(
    build('div'),
    build('h4', { text: 'Positions:' }),
    ...positionListData.map(position => createPosition(position))
);
