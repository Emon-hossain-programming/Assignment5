

 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

getElementById("id")

   শুধুমাত্র একটি element return করে।
   id সবসময় unique হওয়া উচিত।
   

 getElementsByClassName("className")

 একটি HTMLCollection return করে 
 একাধিক element থাকলে সবগুলো return করে।


querySelector("css-selector")

   CSS selector ব্যবহার করে প্রথম matching element return করে।

 querySelectorAll("css-selector")

 CSS selector ব্যবহার করে NodeList return করে 


---

 2 How do you create and insert a new element into the DOM?

Step 1:document.createElement("tagName") দিয়ে element তৈরি ।  
Step 2: innerText বা innerHTML ব্যবহার করে content যোগ ।  
Step 3: কোনো parent element-এ append ।  

3 What is Event Bubbling and how does it work?

Event Bubbling হলো একটা process যেখানে event প্রথমে inner element-এ trigger হয় এবং তারপর ধাপে ধাপে তার parent element পর্যন্ত propagate করে।

5 What is the difference between preventDefault() and stopPropagation() methods?

.preventDefault()

Browser-এর default behavior বন্ধ করে।

Example: Form submit করলে page reload হওয়া prevent করা।


.stopPropagation()

Event bubbling বা capturing বন্ধ করে।

Parent element এ event propagate হতে দেয় না।