import { createPosition } from './position.js';
import { build, append } from './utils/dom-helper.js';

export const createPositionList = positionListData => {
    return append(
        document.createElement('div'),
        build({ type: 'h4', text: 'Positions:' }),
        ...positionListData.map(position => createPosition(position))
    );
};
