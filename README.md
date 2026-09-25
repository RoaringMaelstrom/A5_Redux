Project name: Dev Stack

The goal of this project is to help you visualize your ideal build stack, by allowing you to list the technologies you want to learn and allowing you analyze any gap you may have.

Technologies used: React, TypeScript, TailwindCSS, JSON, DaisyUI.

3 Features:
- You can add and remove technologies as desired;
- The UI has an element of responsiveness, the banner and the Selection Section adjusts to the screen size;
- When selected, the card highlights itself and the button becomes disabled.



i. JSX is an extension JavaScript, which allows HTLM to be treated as functions, called components. This allows for a more dynamic, responsive, and adaptive way to build a website as similar to functions, we can pass parameters to components to be used as needed.

ii. Props are the arguments passed to a component, whereas state is the internal memory of a component. Props are inherited from the parent component and state in declared locally.

iii. useState is a hook that allows the component to have internal memory to be used, without needing to add variables to the data.

iv. useEffect is a hook that allows the site to load and use fetched data, without needing to update the entire site.

v. A key is a unique identifier for each element in a collection. Key are used internally by react to speed up how the rendering is done.

vi. Conditional rendering is the rendering of an element in a component based on another value (state or prop). It uses the ternary operator to choose between 2 or more states while rendering a specific element. Example - the isSelected (boolean) prop is used to either render an active button or a disabled button.

vii. Data flows unidirectionally in React. A parent sends data to a child component through props. A child cannot 'send' data to the parent. To make sure the child and parent have the same data, a state or effect is declared in the parent and passed down to the child. This gives both components access to the same data, in-effect allowing them 'send' data to each other.