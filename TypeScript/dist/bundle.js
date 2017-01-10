(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";
function showHello(divName, name) {
    // const elt=document.getElementById(divName);
    // elt.innerTxt=sayHello(name);
    console.log(name);
}
showHello("greeting", "TypeScript");
},{}],2:[function(require,module,exports){
"use strict";
function showHello(divName, name) {
    // const elt=document.getElementById(divName);
    // elt.innerTxt=sayHello(name);
    console.log("main1" + name);
}
showHello("greeting", "TypeScript");
},{}]},{},[1,2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwL21haW4udHMiLCJzcmMvYXBwL21haW4xLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztBQ0VBLG1CQUFtQixPQUFjLEVBQUMsSUFBVztJQUN6Qyw4Q0FBOEM7SUFDOUMsK0JBQStCO0lBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7QUFDdEIsQ0FBQztBQUVELFNBQVMsQ0FBQyxVQUFVLEVBQUMsWUFBWSxDQUFDLENBQUM7OztBQ05uQyxtQkFBbUIsT0FBYyxFQUFDLElBQVc7SUFDekMsOENBQThDO0lBQzlDLCtCQUErQjtJQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sR0FBQyxJQUFJLENBQUMsQ0FBQztBQUM5QixDQUFDO0FBRUQsU0FBUyxDQUFDLFVBQVUsRUFBQyxZQUFZLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dyZWV0XCI7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTpzdHJpbmcsbmFtZTpzdHJpbmcpe1xyXG4gICAgLy8gY29uc3QgZWx0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xyXG4gICAgLy8gZWx0LmlubmVyVHh0PXNheUhlbGxvKG5hbWUpO1xyXG4gICAgY29uc29sZS5sb2cobmFtZSk7XHJcbn1cclxuXHJcbnNob3dIZWxsbyhcImdyZWV0aW5nXCIsXCJUeXBlU2NyaXB0XCIpO1xyXG4iLCJpbXBvcnQgeyBzYXlIZWxsbyB9IGZyb20gXCIuL2dyZWV0XCI7XHJcblxyXG5mdW5jdGlvbiBzaG93SGVsbG8oZGl2TmFtZTpzdHJpbmcsbmFtZTpzdHJpbmcpe1xyXG4gICAgLy8gY29uc3QgZWx0PWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGRpdk5hbWUpO1xyXG4gICAgLy8gZWx0LmlubmVyVHh0PXNheUhlbGxvKG5hbWUpO1xyXG4gICAgY29uc29sZS5sb2coXCJtYWluMVwiK25hbWUpO1xyXG59XHJcblxyXG5zaG93SGVsbG8oXCJncmVldGluZ1wiLFwiVHlwZVNjcmlwdFwiKTtcclxuIl19
