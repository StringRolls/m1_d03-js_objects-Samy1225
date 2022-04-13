![logo_ironhack_blue 7](https://user-images.githubusercontent.com/23629340/40541063-a07a0a8a-601a-11e8-91b5-2f13e4e6b441.png)
# Module 1 - Day 3
# JS Objects

## Contents
> JS | Objects basics:
>      Object expression
>      read and write into objects
>      Object .keys() and .values()


## Objects

- Literal notation objects are composed of `key: value` pairs.

- In relation to the `keys`:
  - We speak of a **property** instead of a `key` when its value is any data type except a function.
  - We talk about **method** instead of a `key` when its value is a function.
  
- The access to a `key` is done:
  - Through dot notation.
  - Through nominal access (square brackets).
  
- The operators applicable to objects are:
  - The `in` operator allows to know the existence of a property in an object.
  - The `delete` operator allows to remove a property from an object.
  
- The iterations applicable to objects are:
  - The `for...in` loop allows to loop through the _keys_ of an object.
  - `Object.keys(obj)` allows iterating over the _keys_ of an object.
  - `Object.values(obj)` allows to iterate over the values of an object.
  
 - Within an object's method the reserved word `this` refers to the object itself.
