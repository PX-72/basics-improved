import { createPortfolio } from './portfolio.js';
import { build, append } from './utils/dom-helper.js';

export const createContext = contextData => {
    return append(
        document.createElement('div'),
        build({ type: 'p', text: `Context ID: ${contextData.id}` }),
        build({ type: 'p', text: `Definition: ${contextData.definition}`}),
        build({ type: 'p', text: `Risk Default: ${contextData.isRiskDefault}` }),
        createPortfolio(contextData.portfolio)
    );
};
