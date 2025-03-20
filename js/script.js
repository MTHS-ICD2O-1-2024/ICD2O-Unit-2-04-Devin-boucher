// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Mar 2025
// This file contains the JS functions for index.html

/**
 * Calculate Triangle Area
 */
function Calculate() {
  // Get input values
  const base = parseFloat(document.getElementById("Base-of-triangle").value);
  const height = parseFloat(document.getElementById("Height-of-triangle").value);
  const resultDisplay = document.getElementById("Answer");

  // Validate inputs
  if (isNaN(base) || isNaN(height)) {
    resultDisplay.innerHTML = "Please enter valid numbers for base and height.";
    resultDisplay.style.color = "Black";
    return;
  }

  // Calculate area of triangle: (1/2 * base * height)
  const area = (base * height) / 2;

  // Display the result
  resultDisplay.innerHTML = `The area of the triangle is: <strong>${area.toFixed(2)}</strong> cm²`;
  resultDisplay.style.color = "Black";
}
