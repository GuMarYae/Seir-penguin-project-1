# Project 1 My trivia quiz project 
## By Tony Daniels
## 4/13/21


## Introduction

This project is created to ask two players a series of questions about things specifically dealing with movies; This is a trivia quiz about movies. The goal is to get 10 points before the other player in order to win. I chose the points of 10 because there's a series of 20 questions total.

## Technologies Used

- HTML
- CSS
- JS
- jQuery

## Challenges
Challenges that were made was to create my own function that makes the players (starting by making player 1 the example) receive a point when they get a question right as well as their score incrementing by 1. Other challenges that were solved were to create a function that simply ends the game after one player gets to 10 first.
For css "choices section, had to add margin to add space outside the border and added more padding to the choices section to add space between the content and the border. that somehow put them in the center as they were all leaning to the right of the space that they were in.



#### I have trouble with 

One challenge that was absorbed was to make the random questions generate how the would if I took the .length function out and put * 20 instead of the length; for some reason, putting Math.floor(Math.random() * 20) generated less repetitive
questions in the array vs Math.floor(Math.random() * q.length) or maybe I'm seeing the same results and just don't notice that the results are the same.

my #answer has a width of width:90%; and inside of that which is #answer ul has a width of width:100%;  which was just odd to my knowledge of CSS so far. But that trial and error worked for the project.

```js
console.log("hello")
```
The way I figured out how the game should end was by finding out which variable name the points for each player was being stored in. So for my update score section (line 100) I console.log a string before and after the player 1 when they answer a question. I wanted to se their score increment by 1 every time they get a question correct and not if they get a question wrong. Once I saw that work, i knew that that was my variable name i needed to make in a new function with an if statement saying if the player score reaches 20, they win. invoking it was the easy part. 

Once that function was created, I duplicated it making the same function for player 2 so that the functions have respect to each other. So the console.log played a big big part of this all.

It was a giving me a problem... when it was fixed it looked like this:

```js
console.log("goodbye")
```
This part of ending was a bit hard until I was told to just reload the page by making something built into JS called location.reload(); This had to at the end of each function which lets a player know if they won the game. Once they click, the game resets.

