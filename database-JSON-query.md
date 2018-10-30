## JSON query

How do we Query in the JSON file ? There are many libraries out there, but it seems they 
either can't handle nested object arrays, or they return the child object, and not the 
top level object that matches the query.

### - LinqJS
One way is Using lingjs, this is linq in javascritpt, as this is like querybuilder, 

```sh
var queryResult = Enumerable.From(jsonArray)
    .Where(function (query) { return query.user.id < 1044 })
    .OrderBy(function (query) { return query.user.first_name })
    .Select(function (query) { return query.user.first_name + ':' + query.text })
    .ToArray();

```
### - Using Vnilla js 
```sh
var queryResult = jsonArray.
     filter(function (query) { return query.user.id < 200; }).
     sort(function(query) { return query.user.first_name; }).
     map(function (query) { return query.user.first_name + ':' + query.text; });
```
