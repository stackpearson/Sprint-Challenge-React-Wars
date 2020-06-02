# Answers

1. What is React JS and what problems does it solve? Support your answer with concepts introduced in class and from your personal research on the web.

ReactJs is a library that helps us to develop scaled applications in an efficent manner. Building individual portions of the site in components allows the flexibility to have a tem develop different sections of an app simultaneously. Additionally, utilizing component state and props allows us to add (and share) data between components to get the most of of our UI.

1. Describe component state.

component state simply refers to the data that lievs withi nthe component. It can be updated from this `state` to another and this typically reflects some sort of visual change in the UI.

1. Describe props.

Props are a vehicle for passing state (or pieces of it) from one component to another in a read-only state.

1. What are side effects, and how do you sync effects in a React component to changes of certain state or props?

If running a section of code has an impact on another section of code (that is outside the first sections scope) it's called a side effect. You can sync these side effects by using the `useEffect` hook.