import React from "react";

const myElement = <h1> I Love JSX! </h1>;
const myElement2 = React.createElement('h1', {}, 'I do not use JSX!');
const myElement3 = <h1> React is {5+5} times better with JSX </h1>
const myElement4 = (
    <ul>
        <li> Apples </li>
        <li> Bananas </li>
        <li> Cherries </li>
    </ul>
);

const myElement5 = (
    <div>
        <p> I am a paragraph. </p>
        <p> I am a paragraph too. </p>
    </div>
);

const myElement6 = <input type="text" />
const myElement7 = <h1 className="myClass"> Hello World </h1>
const myElement8 = <h1> Hello {/* Wonderful */} World</h1>
function Car() {
    return (
        <>
        <h2> My Car </h2>
        <p> It is a Ford Mustang. </p>
        </>
    );
}

function Car2() {
    const brand ="Ford";
    const model ="Mustang";
    return (
        <>
        <h2> My Car </h2>
        <p> It is a {brand} {model} </p>
        </>
    );
}

function Intro() {
    return(
        <>
        {myElement}
        {myElement2}
        {myElement3}
        {myElement4}
        {myElement5}    
        {myElement6}
        {myElement7}
        {myElement8}
        <Car />
        <Car2 />
        </>
    );
}

export default Intro;