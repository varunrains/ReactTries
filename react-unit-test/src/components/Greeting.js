import { useState } from "react";
import Output from "./Output";

const Greeting = () => {
    const [changeText, setChangeText] = useState(false);

    const changeTextHandler = () => {
        setChangeText(true);
    };
    //Even now if we use the wrapper component the tests still passes
    //This is due to the "render" which we are using while testing ("Act") step
    //This could be called as a Integration test.
    return (
        <div>
            <h2>Hello World!</h2>
            {!changeText && <p>It's good to see you!</p>}
            
            {changeText && <Output>Changed! </Output>}
            <button onClick={changeTextHandler}>Change Text!</button>
        </div>
        );
}

export default Greeting;