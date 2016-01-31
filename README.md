## DEPRECATED!

Consider using the [placeholder attribute](http://caniuse.com/#search=placeholder%20attribute) instead. It is now supported by most browsers. You can style it with the [`::placeholder`](http://caniuse.com/#search=%3A%3Aplaceholder) pseudoelement.

## Introduction

This is one of the best ways to place labels inside input fields.

This version works by placing the label in front of the input field, so that the native styling of the control can be preserved. If you prefer, check the "behind" branch for labels behind the input field.

The solution is based on simple HTML markup, some CSS styling, and a jQuery plugin. The license is MIT. Feedback (bugs, suggestions, compatibility reports) on Twitter: @[steadicat](http://twitter.com/steadicat).

## How to use

All you need is labels.js and labels.css, plus jQuery. See index.html for more information.

## Rationale

Placing labels inside input fields is a new pattern that, in my user tests, yields better results. This pattern is used consistently, for example, in Facebook and throughout Apple’s products.

This solution has been harshly criticised, as it is said to confuse users who expect to have to select and delete the instruction text. This is indeed often the case. However, better implementations, such as this one, solve this problem, as well as maintaining accessibility and standards-compatibility.

@[steadicat](http://twitter.com/steadicat)
