## Answers to Questions

### 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

ans(1): getElementbyid = to select only one id which exist in document.
getElementBYClassName = to select components class.

querySelector = it select id with '#id',class with '.class' and tag with 'tag'

querySelectorAll = to select all components which have same class or tag



### 2. How do you create and insert a new element into the DOM?
ans(2):step 1:first create element with creatElement('tag') function;

step 2: Select the dom which components are the parent.

step 3 : insert the new components into the selected dom using appendChild function

### 3. What is Event Bubbling? And how does it work?

ans(3):Bubbling means some object move upword from bottom to top. When we set addListenEvvener to a components and when we occurd the event ,it check where the event occour to check 
body to target .after find the target it again bubling to root element.

### 4. What is Event Delegation in JavaScript? Why is it useful?

ans(4):event delegation means we set only on even lister to the parent for boast performance the website . then we use different components using if else to find event target.Why this useful =>
1.it boast website performance
2.we don't need to much event listner
3.if we add new components  under the parent ,we didn't need to attach extra event listner to the new  components

### 5. What is the difference between preventDefault() and stopPropagation() methods?

ans (5):preventDefault() stops event deafult activity and stopPropagation() stop the event capture or bubling.



