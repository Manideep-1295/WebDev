# Software Development Life Cycle

## Stages in SDLC

1. Planning
2. Analysis
3. Design
4. Implementation
5. Testing & Integration
6. Maintainance

## Stake Holders

If anything goes wrong in the product, these people are responsible

![Phases in SDLC](image-5.png)

### System Architect

Lays down the foundation required for the project. Like what tech stack should be used? How it should be build? etc. These things are managed by the SA.

### Burn Down Chart

This is used by managers to track the work progress

![Burn-down chart](image-6.png)

## Code Standards

For variables and function names, camelCase should be used and for Class PascalCase should be used.
These are meant to have uniformity through out your code base.

- Code Quality
- DRY

### Variable name

- camelCase

```js
let stud_name = "xyz"; //❌
let studentName = "abc";
```

- Understandable / Descriptive

```js
let a = 50; //❌
let age = 50;
```

- Choose 'let' over 'var', 'const' over 'let'

## Documentation
- Single Line Comments
```js
// single Line Comment
```
- Multiple Line Comments
```js
/**     2 star is for js doc comment
 * Multi
 * Line
 * Comment
 */
```