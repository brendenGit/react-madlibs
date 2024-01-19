### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
  - React is a front-end framework that allows you to create small little components
    to resuse accross your application. You would use React if you are looking for a scalable solution to render many components.
- What is Babel?
  - Babel is a JavaScript compiler that transforms ECMAScript 2015+ code (ES6+) into a backwards-compatible version of JavaScript that can be run in older JavaScript engines.

- What is JSX?
  - JSX is the type of syntax extension for JavaScript written inside of React components.

- How is a Component created in React?
  - A Component is created by importing react into the file. Then by defining the component as a function (or a class). We then export that function which returns a React component

- What are some difference between state and props?
  - Props are handed down to a child component from a parent component and cannot change.
  - State is something that can change and is held in state for continuity. It is managed within the component itself

- What does "downward data flow" refer to in React?
  - Downard data flow refers to the process of having parent components hand data down to its child components. This ensures a process of parent components affecting child components and not vice versa as often.

- What is a controlled component?
  - A controlled component is one that controls its own state and props.

- What is an uncontrolled component?
  - The opposite of controlled component one that does not control its own state and props.

- What is the purpose of the `key` prop when rendering a list of components?
  - The `key` prop is used to assign a unique identifier to every component on the page. It helps React keep track of changes.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
  - An array index can change. We don't want the keys to ever change. 

- Describe useEffect.  What use cases is it used for in React components?
  - `useEffect()` specifies a specific side effect when something changes. We tell `useEffect()` what to watch to know when changes need to be made. There are many cases it can be used. At a high level we could use it to run a specific piece of code at a specific time to avoid calling that code unnesecarily. 

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
  - `useRef()` allows to reference a piece of HTML like a `<button>` in our react component. We can then refernce that item in our component for different use cases. A change in the `ref` object does not trigger a re-render of the component.

- When would you use a ref? When wouldn't you use one?
  - You might use a `ref` when you are looking to keep track of data without causing a rerender. Perhaps you are looking to to update a value but not rerender the entire component. This also allows you to access and interact with the DOM direclty in your component

- What is a custom hook in React? When would you want to write one?
  - A custom hook is a way of using state in a custom function, sometimes to reduce reptition of code. You might want to write one when you are performing the same/similar operation accross many components.
