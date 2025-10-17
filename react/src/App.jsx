import React from "react";
import Intro from "./examples/intro.jsx";
import Expressions from "./examples/expressions.jsx";
import Attributes from "./examples/attributes.jsx";
import Ifstatement from "./examples/ifstatements.jsx";
import Components from "./examples/components.jsx";
import Props from "./examples/props.jsx"; 
import Destructuring from "./examples/destructuring.jsx";
import Children from "./examples/children.jsx";
import Event from "./examples/events.jsx";
import Conditional from "./examples/conditionals.jsx";
import List from "./examples/lits.jsx";
import Forms from "./examples/forms.jsx"; 
import Submit from "./examples/submit.jsx"; 
import Textarea from "./examples/textarea;.jsx";
import Select from "./examples/select.jsx";
import Multiple from "./examples/multipleinputs.jsx";
import Checkbox from "./examples/checkbox.jsx"; 
import Radio from "./examples/radio.jsx";
import Portal from "./examples/portals.jsx";

function App() {
  return (
    <> 
    <Intro/>
    <Expressions/>
    <Attributes/>
    <Ifstatement/>
    <Components/> /!--class also--/
    <Props/>
    <Destructuring/>
    <Children/>
    <Event/>
    <Conditional/>
    <List/>
    <Forms/>
    <Submit/>
    <Textarea/>
    <Select/>
    <Multiple/>
    <Checkbox/>
    <Radio/>
    <Portal/>
  
    </>
  );
}

export default App;

