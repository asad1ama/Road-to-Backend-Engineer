# Road to Backend Engineer 🚀

## Month 1 - JavaScript

# Day 01 - JavaScript Fundamentals

Today I started my Backend Engineering journey by learning the core fundamentals of JavaScript.

---

## 📚 Topics Covered

### 1. Variables
- var
- let
- const
- Block Scope
- Function Scope
- Why `let` and `const` are preferred over `var`

---

### 2. Data Types

Primitive Data Types

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt

Reference Type

- Object

---

### 3. Type Conversion

Explicit Conversion

```javascript
Number()
Boolean()
String()
```

Examples:

- `"33"` → `33`
- `"33abc"` → `NaN`
- `true` → `1`
- `false` → `0`

---

### 4. Operators

- Arithmetic Operators
- Unary Operators
- Increment (`++`)
- Decrement (`--`)
- String Concatenation

Interesting Examples:

```javascript
"1" + 2      // "12"
1 + "2"      // "12"
"1" + 2 + 2  // "122"
1 + 2 + "2"  // "32"
```

---

### 5. Comparison Operators

- >
- <
- >=
- <=
- ==
- ===
- !=

Learned why:

```javascript
null >= 0
```

returns `true` while

```javascript
null == 0
```

returns `false`.

---

### 6. Strict Equality

```javascript
===
```

Checks:

- Value
- Data Type

Example

```javascript
"2" === 2
```

returns

```javascript
false
```

---

### 7. Primitive Data Types

JavaScript has 7 Primitive Data Types

- Number
- String
- Boolean
- Null
- Undefined
- Symbol
- BigInt

---

### 8. Symbol

Learned that every Symbol is unique.

Example

```javascript
const id = Symbol("123");
const anotherId = Symbol("123");

console.log(id === anotherId); // false
```

---

## 💡 Key Learnings

- Prefer `const` whenever possible.
- Use `let` when the value needs to change.
- Avoid `var`.
- Understand the difference between `==` and `===`.
- JavaScript performs implicit type conversion in many situations.
- `null` behaves differently in equality and comparison operations.
- Symbols are always unique.

---

## 📂 Files

- variables.js
- datatypes.js
- conversion.js
- operators.js
- comparison.js

---

## 📅 Progress

- ✅ Variables
- ✅ Data Types
- ✅ Type Conversion
- ✅ Operators
- ✅ Comparison Operators
- ✅ Primitive Types

