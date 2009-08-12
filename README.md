## Introduction

This is one of the best ways to place labels inside input fields.

This version works by placing the label behind the input field and making the input field transparent, so that the label will not intercept clicks. If you prefer to preserve the native styling of the controls, check the "master" branch for labels in front of the input field.

The solution is based on simple HTML markup, some CSS styling, and a jQuery plugin. The license is MIT. Feedback (bugs, suggestions, compatibility reports) on Twitter: @[steadicat](http://twitter.com/steadicat).

## How to use

All you need is labels.js and labels.css, plus jQuery. See index.html for more information.

## Rationale

Placing labels inside input fields is a new pattern that, in my user tests, yields better results. This pattern is used consistently, for example, in Facebook and throughout Apple’s products.

This solution has been harshly criticised, as it is said to confuse users who expect to have to select and delete the instruction text. This is indeed often the case. However, better implementations, such as this one, solve this problem, as well as maintaining accessibility and standards-compatibility.

[attardi.org/labels](http://attardi.org/labels)

@[steadicat](http://twitter.com/steadicat)