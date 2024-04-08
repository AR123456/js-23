// JS function that gets named colors

function getNamedColors() {
  // Get all named colors from a dummy element's style object
  const dummyElement = document.createElement("div");
  const namedColors = [];

  // Set display to none to prevent it from affecting the layout
  dummyElement.style.display = "none";
  document.body.appendChild(dummyElement);

  const computedStyle = window.getComputedStyle(dummyElement);

  for (const colorName in computedStyle) {
    if (typeof computedStyle[colorName] === "string") {
      const colorValue = computedStyle[colorName];
      if (colorValue.match(/^(rgb|hsl|#[0-9a-fA-F]{3,6})/)) {
        namedColors.push({ name: colorName, value: colorValue });
      }
    }
  }

  // Remove the dummy element
  document.body.removeChild(dummyElement);

  return namedColors;
}

// Example usage:
const namedColors = getNamedColors();
console.log(namedColors[2]);
