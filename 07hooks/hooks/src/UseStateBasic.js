
import React, { useState } from 'react';
import './index.css';

// NOTE: Code in this file matches the video up to about 11:15, then I will make a new file to complete
// the video where he talks about using an object as a value. Here is the timestamp:
// https://youtu.be/O6P86uwfdR0?list=PLZlA0Gpn_vH8EtggFGERCwMY5u5hOjf-h&t=675


function UseStateBasic() {
  // const [stateVariable, updaterFunction] = useState(initialValue);  // Example.
  // const useStateArray = useState(4);  // No. It is much better to destructure.
  //   const [count, setCount] = useState(4);  // This version runs every render. TODO: Confirm wording.
  //   const [count, setCount] = useState(test_initialCountValue());  // Show the test. RUNS EVERY TIME.
    const [count, setCount] = useState(() => {
        console.log('UseStateBasic: state value initialize inside anon func arg to useState');
        return 4;
    });
    // OBJECTS as state values .. they are REPLACED. (Unlike with classes, where they are merged.)

    // About EXPENSIVE INITIALIZATION - That value 4 is cheap to re-create, but this might need optimization.
    // This func is just to use temporarily to demonstrate how useState, which normally runs every time,
    // can be made to effectively run only on first load (can we say first render?) by passing it an
    // anonymous fuction instead of a value (or expression which evaluates to some value).
    function test_initialCountValue() {
        console.log('test_initialCountValue: returning initial value of 4 to useState()')
        return 4;
    }

    // Example of multiple:
    // const [age, setAge] = useState(42);
    // const [fruit, setFruit] = useState('banana');
    // const [todos, setTodos] = useState([{ text: 'Learn Hooks' }]);

    // function decrementCount() {  // Example of how NOT to do it. This won't work correctly.
    //     setCountFunc(count - 1);
    // }
    // If we are updating a value based on the previous value, we have to do it a different way.
    function decrementCount() {
        setCount(prevCount => prevCount - 1);  // Anonymous function which takes the previous value.
        // I guess the assumption is that internally, useState will call this with the PREVIOUS VALUE.
        // To me that is critical and clear, but the tutorial doesn't even really mention this point.
        // React docs hardly touch on updating at all. TODO: Find a good reference about the details of
        // how useState updates the value.
        // UPDATE: Kyle said "another version of this function allows you to pass a function instead of
        // a value. This does clarify. So this update-function provided by useState is overloaded and has
        // at least two signatures, one accepts a value and one accepts an anoymous function. Maybe we
        // could say that one accepts an object and one accepts just any function. I'm not sure.
        // Anyhow, point is, this updater function is overloaded and has multiple signatures, at least
        // the two just described here. So far no official docs or tuts found on this. Clarifying it as
        // best I can as I go along. Not a critical topic anyhow. We'll probably use the anon func update a lot.
        // Might often refer to an existing object (in previous/current state) and pick and choose updates within it,
        // all within the anonymous func we pass. That seems a likely strategy, but another might be to just use
        // lots of scalar useState variables when possible. Will have to look up the recommended patterns and use
        // cases.
    }

    function incrementCount() {
        setCount( prevCount => prevCount + 1);
    }

  return (
    <div className="container">
      <h2>UseStateBasic</h2>
      <hr />
      <br />
      <div>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <button onClick={incrementCount}>+</button>
      </div>
    </div>
  );
}

export default UseStateBasic;


// ##
// #
//
// https://www.youtube.com/watch?v=O6P86uwfdR0

// https://react-hooks-cheatsheet.com/usestate

// https://reactjs.org/docs/hooks-state.html

// OBSERVATION about return values for onClick and the PARENTHESES.
// This gives no warning. The IDE says it is correct:
// <button onClick={decrementCount}>-</button>
// BUT if I add the PARENTHESES, I get a warning. (Did not test or an actual error.)
// IDE WARNING: void function return value is used
// This comes when decrementCount() takes no arg and has a single statement, being: setCountFunc(count - 1);
// (That is an example of incorrect usage, by the way .. but that is a separate topic, which is explained
// in the tut moments after this note is being made. Not relevant here. Back to the point now ...)
// We don't know what this call returns .. sounds like it returns void, based on the warning, but I don't know.
// The MAIN POINT is .. the usage of the parentheses or the lack thereof on the method name withing the ONLCLICK,
// seems to be related to the use or non-use of a potential return value. OR is it only for void .. but still,
// the parentheses are triggering the warning.
// IN FACT IT IS AN ERROR. Page never renders. TOO MANY RE-RENDERS is the last error.
//
// * WARNING * This crashed the app with NO HELPFUL ERRORS IN EITHER CONSOLE.
// This would be EXTREMELY DIFFICULT TO DEBUG without the assistance of WebStorm Intellisense, aided possibly
// by other plugins. This is the first error I have seen that results in a total failure with no error-related
// feedback. (The infinite re-rendering killed after hitting a safety limit is not very helpful to isolate the problem.
// based on my current knowledge. One would hope it comes from only a very isolated set of circumstances as this
// would be one you would want to have a gameplan for beforehand. Of course, this is why we track code changes in git
// and test as much as possible before every commit. etc.)
//
// TODO: It is important to understand the above scenario and those parentheses on such method calls and
//   how to troubleshoot such infinite loops.
//
// Two threads with some clues. Explaining the exact cause in my case is still not crystal clear.
// These postings don't really explain exactly what is happening but are relevant.
// https://www.reddit.com/r/react/comments/ppkddy/passing_a_parameter_in_onclick_causing_too_many/
//
// https://stackoverflow.com/questions/71840695/why-react-throws-too-many-re-renders-if-we-try-to-change-state-on-a-on-click
//

