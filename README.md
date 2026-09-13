Project Name: DevStack


Description:
          A modern and responsive technology stack builder built with React and TypeScript.  
Explore popular web technologies, view their details, and add your favorite technologies to your personal stack.

 Technologies Used 

- ⚛️ React
- 📘 TypeScript
- 🎨 Tailwind CSS
- 🧩 DaisyUI
- ⚡ Vite
- 🎯 React Icons
- 📄 JSON

Features
1.  Explore Technologies
Browse different technologies with their name, category, description, difficulty level, rating, and badge.

2.  Build Your Stack
Add technologies to your personal stack and easily see which technologies you have selected.

 3.  Manage Your Stack
Remove individual technologies from your stack or remove all selected technologies at once.



1. What is JSX, and why is it used in React?

Ans. JSX lets us write HTML-like code inside JavaScript. It makes React UI easier to write and understand.

2. What is the difference between props and state?

Ans. Props are data passed from a parent to a child. State is data managed inside a component that can change.

3. What does the useState hook do, and where did you use it in this project?

Ans. useState stores changing data. I used it to store and manage the selected technologies.

4. What does the useEffect hook do, and why did you need it to load the JSON data?

Ans. useEffect is used for side effects like fetching data. In this project, I used use() with a Promise instead of useEffect to load the JSON data.

5. Why does every item in a .map() list need a unique key prop?

Ans. A unique key helps React identify each item and update the list efficiently.

6. What is conditional rendering? Show one place you used it.

Ans. Conditional rendering means showing UI based on a condition. I used it to show the empty stack message when no technology is selected.

7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

Ans. A parent passes data using props. A child can send something back by calling a function passed from the parent as a prop.

