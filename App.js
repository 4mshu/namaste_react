import React from "react";
import ReactDOM from "react-dom/client";

const heading = (
    <div>
        <h1 className="heading">this is a header using JSX</h1>
        <h2>hello</h2>
    </div>
    
)

const HeadingComponent = () => {
    return (
        <h1>This is a react component</h1>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(heading)

root.render(heading)