import { createPositionList } from './position-list.js';
import { subscribeToPositionUpdates } from './state/state-service.js';
import { build, append } from './utils/dom-helper.js';

let sumPartDomRef = {};
const sumPositionQty = (positions = []) => positions.reduce((sum, position) => sum + position.quantity, 0);

subscribeToPositionUpdates((positions = []) => {
    sumPartDomRef.text = sumPositionQty(positions);
});

const SUM_STYLE = {
    fontWeight: 'bold',
    color: 'red'
};

export const createPortfolio = ({ code, currency, positions }) => append(
    build('div'),
    build('p', { text: `Portfolio code: ${code}` }),
    build('p', { text: `Portfolio CCY: ${currency}` }),
    append(
        build('p', { text: 'Position qty total: ' }),
        build('span', { text: sumPositionQty(positions), style: SUM_STYLE })
    ),
    createPositionList(positions)
);
