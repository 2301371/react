import React from "react";

function Fruit() {
  const x = 5;
  let y = "Apple";
  if (x < 10) {
    y = "Banana";
  }

  return (
    <h1>{y}</h1>
  );
}

function Fruit2() {
  const x = 5;
  return (
    <h1>{(x) < 10 ? "Banana" : "Apple"}</h1>
  );
}
function Ifstatement() {
    return (        
        <>
        <Fruit />
        <Fruit2 />
        </>
    );
}
export default Ifstatement;
