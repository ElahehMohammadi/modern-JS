# modern-JS

This repository contains modules and configurations for converting ES6 code to ES5 for broader browser compatibility. I used Babel for this task, but you can also use Parcel.

## Table of Contents

- [Introduction](#introduction)
- [Setup](#setup)
- [File Structure](#file-structure)
- [Functional Programming](#functional-programming)
- [Contributing](#contributing)
- [License](#license)

## Introduction

The purpose of this project is to demonstrate how to convert ES6 code to ES5, ensuring compatibility with all browsers. Additionally, this project explores the concepts of functional programming, including pure functions, immutability, and side effects.

## Setup

To set up the project, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/project-name.git
    cd project-name
    ```

2. Install dependencies:
    ```bash
    npm install
    ```


## File Structure

- `index.html`: The main HTML file.
- `src/script.js`: Contains the Babel and ES6 to ES5 conversion code.
- `src/clean.js`: Contains examples of functional programming, pure functions, immutability, and handling side effects.

### Connecting JS Files

The `index.html` file is currently connected to `clean.js`. If you want to use `script.js` instead, follow these steps:

1. Open `index.html`.
2. Uncomment the script tag for `script.js` and comment out the `clean.js` script tag.

```html
<!-- <script src="src/script.js" type="module"></script> -->
<script src="src/clean.js" type="module"></script>
```

## Functional Programming

The project includes examples of functional programming paradigms, such as:

- **Pure Functions**: Functions that have no side effects and return the same output for the same input.
- **Immutability**: Ensuring that objects and data structures are not modified after they are created.
- **Side Effects**: Managing and reducing side effects in the code to maintain predictability and reliability.

These concepts are primarily demonstrated in the `src/clean.js` file.

