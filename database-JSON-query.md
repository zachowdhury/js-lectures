## JSON query

How do we Query in the JSON file ? There are many libraries out there, but it seems they 
either can't handle nested object arrays, or they return the child object, and not the 
top level object that matches the query.
### - LinqJS
One way is Using lingjs, this is linq in javascritpt, as this is like querybuilder, 
```sh
var queryResult = Enumerable.From(jsonArray)
    .Where(function (x) { return x.user.id < 200 })
    .OrderBy(function (x) { return x.user.screen_name })
    .Select(function (x) { return x.user.screen_name + ':' + x.text })
    .ToArray();

```
