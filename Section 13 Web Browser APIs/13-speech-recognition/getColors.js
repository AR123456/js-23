// JS function that gets named colors

function getNamedColors() {
  // Create a dummy element
  const dummyElement = document.createElement("div");
  // Hide the element
  dummyElement.style.display = "none";
  // Append the element to the document
  document.body.appendChild(dummyElement);
  // Get the computed style of the dummy element
  const computedStyle = window.getComputedStyle(dummyElement);

  // List of known CSS color properties
  const colorProperties = [
    "color",
    "background-color",
    "border-color",
    "outline-color",
    "text-decoration-color",
    "text-emphasis-color",
    "column-rule-color",
    "fill",
    "stroke",
    "stop-color",
    "lighting-color",
  ];

  // Filter out color properties from computed style
  const colorNames = colorProperties.filter((propertyName) =>
    computedStyle.getPropertyValue(propertyName).match(/^rgb|hsl|#/)
  );

  // Remove the dummy element
  document.body.removeChild(dummyElement);

  return colorNames;
}

// Example usage:
const namedColors = getNamedColors();
console.log(namedColors);
