// creating the customRender Function:
function customRender(reactElement, mainContainer) {
    /*
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    domElement.setAttribute('href', reactElement.props.href);
    domElement.setAttribute('target', reactElement.props.target);
    mainContainer.appendChild(domElement);
    */


    // creating a modular code for the reactElements of any type:
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;

    for (const prop in reactElement.props) {
        if (prop == "children") continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);

}




// Now rendering the <a></a> tag as the react sees to it:
const reactElement = {
    type: 'a',
    props: {
        href: 'https://www.google.com',
        target: '_blank'
    },
    children: 'Click to visit Google'
}


// Grabing the root from the index.html file:
const mainContainer = document.querySelector('#root');


// Creating a method that renders the above created a tag into the root DOM
// injecting the <a></a> tag into the root dom
// The injector function expects two things:
// 1. What to inject and
// 2. Where to inject
customRender(reactElement, mainContainer)




