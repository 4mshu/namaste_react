import React from "react";
import ReactDOM from "react-dom/client";

const elem = <span>React element</span>

const title = (
    <div>
        <h1 className="heading">this is a header using JSX</h1>
        <h2>hello</h2>
        {elem}
    </div>
)

const HeadingComponent = () => (
        <div>
            {title}
            <h1>This is a react component</h1>
        </div>
        
    )


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>)