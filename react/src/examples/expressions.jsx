
import React from "react";

function Car() {
    return (
        <>
        <h1>My Car </h1>
        <p> It has {218 * 1.36} horsepower </p>
        </>
    );
}

function Car2() {
    const hp = 218 * 1.36;
    return (
        <>
        <h1> My Car </h1>
        <p> It has {hp} horsepower </p>
        </>
    );
}

function kwtohp(kw) {
    return kw * 1.36;
}

function Car3() {
    return (
        <>
        <h1> My Car </h1>
        <p> It has {kwtohp(218)} horsepower </p>
        </>
    );
}

function Car4() {
    const myobj = {
        name: "Fiat",
        model: "500",
        color: "white"
    };
    return (
        <>
        <h1> My car is a {myobj.color} {myobj.name} {myobj.model} </h1>
        </>
    )
}

function Expressions() {
    return (
        <>
        <Car />
        <Car2 />
        <Car3 />
        <Car4 />
        </>
    )

}


export default Expressions;
