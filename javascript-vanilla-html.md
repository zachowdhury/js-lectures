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
