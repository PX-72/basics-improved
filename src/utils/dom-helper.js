export const build = ({
    type, 
    text = '',
    style = '', 
    eventType = null,
    eventCallback = () => {}}) => {
        if (type == null) {
            return;
        }
        
        const element = document.createElement(type);
        if (text) element.innerText = text;
        if (style) element.style = style;
        if (eventCallback && eventCallback) element.addEventListener(eventType, () => eventCallback(element));

        return element;
};

export const append = (parent, ...children) => {
    for (const childElement of children) {
        parent.appendChild(childElement);
    }

    return parent;
} 