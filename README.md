- What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
👉 **getElementById:** Finds an element by its id.
👉 **getElementsByClassName:** Returns all elements that have that className together as an HTMLCollection.
👉 **querySelector:** Search for elements using CSS selectors. It only returns the first matching element.
👉 **querySelectorAll:** Returns all elements searched for with a CSS selector together, in the form of a NodeList.

---

- How do you create and insert a new element into the DOM?
👉 A new element is created with document.createElement("div")
👉 Then write something inside using **element.innerText** or **element.innerHTML**
👉 Finally **appendChild()** is used to insert it into any parent element in the DOM

--- 

- What is Event Bubbling and how does it work?
👉 **Event Bubbling** means that when an event occurs in a child element, it is first captured in that child element, then it continues to rise up to its parent → grandparent → document.

---

- What is Event Delegation in JavaScript? Why is it useful?
👉 **Event Delegation** is the process of placing an event listener on the parent element, so that even if an event occurs on a child element, it can be caught from the parent.