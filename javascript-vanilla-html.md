This is snippet -- 

#### Add button on the fly with js

First create the element using the DOM APIs:
```javascript
    var button = document.createElement('button');
```
Next, set its attributes:

```javascript
    button.addEventListener('click', function (e) {...});
    button.appendChild(document.createTextNode('Button Test'));
```
Finally, add it to the document:

```javascript
    someParentElement.appendChild(button);
```
## Challenges
#### Nature : Needed to change the div element back-ground image on click event from button
while implementing this doesn't work

```javascript 
const toggleBg = document.getElementById('toggle-background');
        toggleBg.setAttribute('data-setbg', 'img/slider/slider-1.jpg')

```
html
```html
<div id='toggle-background' class="hs-item set-bg" data-setbg="img/slider/slider-1.jpg">
... ... ... 
</div>
```
