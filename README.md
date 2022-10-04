# Frontend Mentor - Interactive pricing component solution

This is a solution to the [Interactive pricing component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-pricing-component-t0m8PIyY8).

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use the slider and toggle to see prices for different page view numbers

### Screenshot

![](./design/desktop-design.jpg)

### Links

- Solution URL: [Github](https://github.com/jeremylloyd/Frontend-Mentor-Interactive-Pricing-Component)
- Live Site URL: [Github Pages](https://jeremylloyd.github.io/Frontend-Mentor-Interactive-Pricing-Component/)

## My process

### Built with

- HTML
- CSS (BEM)
- JS

### What I learned

- CSS
  - Range inputs (the slider) is styled differently depending on the browser. It's quite a pain to maintain and might change in the future for some browsers so for me it's probably safer to avoid those elements altogether
  - For certain elements, it's impossible to set a variable background colour. You can get around this by setting the `background-image` to be a piecewise `linear-gradient()`:
    ```
    background-image: linear-gradient(
        to right,
        var(--theme-lightcyan) 0%,
        var(--theme-lightcyan) 50%,
        var(--theme-lightergreyblue) 50%,
        var(--theme-lightergreyblue) 100%
    )
    ```
    - You can even use JS to animate the linear-gradient continuously, or when an event is triggered (e.g. when the user changes in the input value)
- Things I could have done better
  - Plan the layout around where things need to be on the page. For example, the design has the toggle switch positioned in the middle of the page, but I included it in a flex row which failed to keep it in the middle of the page
  - Start with the layout before getting my head too deep in the intracacies of scrollbar styling or creating the toggle switch

#### A switch in HTML & CSS

It's made by creating a checkbox with the default display hidden.

HTML
```
<label class="switch">
    <input type="checkbox" class="switch__checkbox">
    <span class="switch__slider"></span>
</label>
```

CSS
```
.switch {
  position: relative;
  display: inline-block;
	flex-shrink: 0;
  width: 40px;
  height: 22px;
	margin: 0 7px;
}

.switch__checkbox { 
  opacity: 0;
  width: 0;
  height: 0;
}

.switch__slider {
  position: absolute;
  cursor: pointer;
	border-radius: 40px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--theme-lightgreyblue);
  transition: .2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.switch__slider:before {
  position: absolute;
  content: "";
  height: 16px;
  width: 16px;
  left: 3px;
  bottom: 3px;
	border-radius: 50%;
  background-color: white;
  transition: .2s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.switch__checkbox:checked + .switch__slider {
  background-color: var(--theme-darkcyan);
}

.switch__checkbox:checked + .switch__slider:before {
  transform: translateX(16px);
}
```
