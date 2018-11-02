
## Rounding numbers A Better Solution
The rounding problem can be avoided by using numbers represented in exponential notation:

```sh
Number(Math.round(1.005+'e2')+'e-2'); // 1.01
```
And to abstract that into something more usable:

```sh
function round(value, decimals) {
  return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
}

round(1.005, 2); // 1.01
```
