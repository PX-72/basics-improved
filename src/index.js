import { createContext } from './context.js';
import { getContext } from './api/api-service.js';
import { build, append } from './utils/dom-helper.js';

const app = append( 
    document.querySelector('#app'), 
    build('p', { text: 'Loading...' })
);

const init = async (simulatedDelay = 1_000) => {
    const { context } = await getContext(simulatedDelay);
    app.querySelector('p').remove();
    append(app, createContext(context));
};

await init();
