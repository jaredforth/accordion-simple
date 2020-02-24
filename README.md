[![Build Status](https://travis-ci.com/jaredforth/accordion.svg?token=mH2pScYxqRkBEzpBQAu6&branch=master)](https://travis-ci.com/jaredforth/accordion)
[![codecov](https://codecov.io/gh/jaredforth/accordion/branch/master/graph/badge.svg?token=SAKX0TVPH9)](https://codecov.io/gh/jaredforth/accordion)

# Simple Accordion 

## Usage

**Install package**

`npm install accordion-simple`

**Import Stylesheet**

In the `<head>`, add `<link rel="stylesheet" href="dist/styles.css"`

**Import JavaScript**

In the `<footer>`, add `<script src="dist/accordion.js"></script>`

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
        <a href="#">Accordion Two</a>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pretium eros non venenatis iaculis. Fusce
            finibus metus vel nulla fringilla convallis. Cras scelerisque pulvinar nisi. Vivamus id nibh magna</p>
    </li>
</ul>
```

## In Progress / Known Issues
 
- Add aria attributes dynamically
