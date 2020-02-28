[![npm](https://img.shields.io/npm/v/accordion-simple)](https://www.npmjs.com/package/accordion-simple)
[![Build Status](https://travis-ci.com/jaredforth/accordion-simple.svg?token=mH2pScYxqRkBEzpBQAu6&branch=master)](https://travis-ci.com/jaredforth/accordion-simple)
[![codecov](https://codecov.io/gh/jaredforth/accordion/branch/master/graph/badge.svg?token=SAKX0TVPH9)](https://codecov.io/gh/jaredforth/accordion)
[![npm](https://img.shields.io/npm/dm/accordion-simple)](https://www.npmjs.com/package/accordion-simple)

# Simple Accordion 

## Usage

**Install package**

`npm install accordion-simple`

**Import JavaScript**

In the `<footer>`, add `<script src="accordion-simple/dist/accordion.js"></script>`

**Optional Import Stylesheet**

If you want to use the boilerplate styles included, add `<link rel="stylesheet" href="accordion-simple/dist/styles.css"` in the `<head>`. 

This is optional, and if you want to write your own styles, the accordion functionality will work with just the JavaScript.

**Markup**

This package requires an `<ul>` with the `.accordion` class, with child `<li>` that contain an `<a>` element that toggles the visibility of the initially hidden `<p>` element on click. An example is below: 

```html
<ul class="accordion">
    <li>
        <a href="#">Accordion One</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium eros non venenatis iaculis.
            Fusce finibus metus vel nulla fringilla convallis. Cras scelerisque pulvinar nisi. Vivamus id nibh magna
        </p>
    </li>
    <li>
        <a href="#">Accordion Two</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium eros non venenatis iaculis.
            Fusce finibus metus vel nulla fringilla convallis. Cras scelerisque pulvinar nisi. Vivamus id nibh magna</p>
    </li>
    <li>
        <a href="#">Accordion Three</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium eros non venenatis iaculis. Fusce
            finibus metus vel nulla fringilla convallis. Cras scelerisque pulvinar nisi. Vivamus id nibh magna</p>
    </li>
</ul>
```

## In Progress / Known Issues
 
- Add aria attributes dynamically
- Add real tests
