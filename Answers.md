# Answers

1. What is React JS and what problems does it try and solve? Support your answer with concepts introduced in class and from your personal research on the web.

    ReactJS is a JS library that allows developers to create reusable UI components using something very similar to HTML and JS together in the same file (JSX).

1. What does it mean to think in react?

    It means thinking the whole application as hierarchical UI components and how its data will flow using props and state.

1. Describe state.

    State is a component's mutable piece of data.

1. Describe props.

    Props are static pieces of data passed to a new instance of a component.


1. What are side effects, and how do you sync effects in a React component to state or prop changes?

    A side effect is anything that affects something outside the scope of the function executed. We can sync a side effect to state or props changes passing in a dependency array as second argument in the useEffect hook.
