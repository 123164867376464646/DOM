// window.dom = {
//   find(selector, scope) {
//     return (scope || document).querySelectorAll(selector)
//   }
// };
window.dom = {
    find (selector, scope) {
        return (scope || document).querySelectorAll(selector);
    },
    style (node, name, value) {
        if (arguments.length === 3) //dom.style(div, 'color', 'red')
        node.style[name] = value;
        else if (arguments.length === 2) {
            //dom.style(div,'color')
            if (typeof name === 'string') return node.style[name];
            else if (name instanceof Object) {
                //dom.style(div, {color: 'red'})
                const object = name;
                for(let key in object)// key: border / color
                // node.style.border = ...
                // node.style.color = ...
                node.style[key] = object[key];
            }
        }
    },
    each (nodeList, fn) {
        for(let i = 0; i < nodeList.length; i++)fn.call(null, nodeList[i]);
    }
};

//# sourceMappingURL=index.755bdb92.js.map
