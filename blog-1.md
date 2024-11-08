
# The Significance of Union and Intersection Types in TypeScript

TypeScript is a powerful tool that adds reliability to JavaScript by allowing us to define variable types clearly. Two useful TypeScript features, union types and intersection types, make it easier to handle different kinds of data and create well-structured code. Let’s explore how these types work and why they matter.

## What Are Union Types?
Union types let a variable hold multiple types of values, giving flexibility to your code. You create a union type by using the `|` symbol. For example:
```typescript
let data: string | number;
```
Here, data can be either a string or a number. This is helpful in situations where you may receive data in more than one form, like user inputs or API responses. For example, a function that can handle both numbers and strings would look like this:
```typescript
function display(value: string | number) {
    console.log(value);
}
```
With union types, **display** can work with both text and numbers, making it versatile.
## What Are Intersection Types?
Intersection types combine multiple types into a single type. This means the new type must have all the properties of each combined type. You use the `&` symbol to create an intersection type. Here’s an example:
```typescript
interface User {
    name: string;
    age: number;
}

interface Admin {
    level: string;
}

type AdminUser = User & Admin;
```
In this example, **AdminUser** must include **name**, **age**, and **level**—all the properties from User and Admin. Intersection types are handy when you need an object to fulfill multiple roles, like when a user is both a regular user and an admin.
## When to Use Union vs. Intersection Types
The main difference is in how they handle flexibility and structure. Use union types when you need a variable to handle multiple possible types, like allowing either a number or a string. Use intersection types when you want to combine roles or properties from multiple types into one, ensuring all required information is there.
## Type Guards: Extra Safety with Unions
Type guards help TypeScript handle union types safely by checking the type before using it. For example:
```typescript
function handle(value: string | number) {
    if (typeof value === 'string') {
        console.log(value.toUpperCase());
    } else {
        console.log(value.toFixed(2));
    }
}
```
This way, TypeScript knows whether **value** is a string or a number and can apply the correct methods to each type.
## Conclusion
Union and intersection types in TypeScript make your code flexible, safe, and organized. Union types allow a variable to hold multiple types, while intersection types make sure all properties are included in a complex object. Together, they help you build clean, reliable TypeScript applications.