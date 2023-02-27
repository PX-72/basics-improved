import { createPositionList } from './position-list.js';
import { subscribeToPositionUpdates } from './state/state-service.js';
import { build, append } from './utils/dom-helper.js';

let sumPartDomRef = {};

const sumPositionQty = (positions = []) => positions.reduce((sum, position) => sum + position.quantity, 0);

subscribeToPositionUpdates((positions = []) => {
    sumPartDomRef.text = sumPositionQty(positions);
});

const SUM_STYLE = `
    font-weight: bold;
    color: red;
`;

export const createPortfolio = portfolioData => {

    return append(
        document.createElement('div'),
        build({ type: 'p', text: `Portfolio code: ${portfolioData.code}` }),
        build({ type: 'p', text: `Portfolio CCY: ${portfolioData.currency}`}),

        append(
            build({ type: 'p', text: 'Position qty total: ' }),
            build({ type: 'span', text: sumPositionQty(portfolioData.positions), style: SUM_STYLE })
        ),

        createPositionList(portfolioData.positions)
    );
};
