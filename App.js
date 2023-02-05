// const heading =  document.createElement("h1");
// heading.innerHTML = "This is from JS";
// const root = document.getElementById('root');
// root.appendChild(heading);

// console.log(React.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED)

const root = ReactDOM.createRoot(document.getElementById('root'));
// const heading =  React.createElement("h1", {} , "Hellooooo");
// root.render(heading);

const heading1 = React.createElement("h1",
{
    id:"h1"
},
"Heading1");

const heading2 = React.createElement("h2",
{
    id:"h2"
},
"Heading2");

const container =  React.createElement("div",
{
    id: "container"
},
[heading1, heading2]);

root.render(container)
