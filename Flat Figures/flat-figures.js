/*

Equations for Perimeter/Circumference and Area of Flat Figures

*/

//area and perimeter of a square:
const sqArea = (iLength) => {
  return iLength * iLength;
};
const sqPerimeter = (iLength) => {
  return 4 * iLength;
};

//area and perimeter of a rectangle:
const recArea = (iWidth, iLength) => {
  return iWidth * iLength;
};
const recPerimeter = (iWidth, iLength) => {
  return (parseInt(iWidth) + parseInt(iLength)) * 2;
};

//area and circumference of a circle:
const cirArea = (iRadius) => {
  return (Math.PI * iRadius) ^ 2;
};
const cirCircumference = (iRadius) => {
  return 2 * Math.PI * iRadius;
};

//area and perimeter of a triangle:
const triArea = (iBase, iHeight) => {
  return (parseInt(iBase) * parseInt(iHeight)) / 2;
};
const triPerimeter = (iSideA, iSideB, iSideC) => {
  return parseInt(iSideA) + parseInt(iSideB) + parseInt(iSideC);
};

/* 

Functionality to Change form when user changes the type of shape

*/
//inputs for different shapes
const circleInputs = document.body.querySelector("#inputs_circle");
const squareInputs = document.body.querySelector("#inputs_square");
const rectangleInputs = document.body.querySelector("#inputs_rectangle");
const triangleInputs = document.body.querySelector("#inputs_triangle");

const updateForm = () => {
  //hide all inputs:
  circleInputs.hidden = true;
  squareInputs.hidden = true;
  rectangleInputs.hidden = true;
  triangleInputs.hidden = true;

  const shape = document.body.querySelector("#shape_input").value;

  switch (shape) {
    case "circle":
      circleInputs.hidden = false;
      break;
    case "square":
      squareInputs.hidden = false;
      break;
    case "rectangle":
      rectangleInputs.hidden = false;
      break;
    case "triangle":
      triangleInputs.hidden = false;
      break;
  }
};

const form = document.body.querySelector("form");

form.addEventListener("change", updateForm);

const calculate = () => {
  const shape = document.body.querySelector("#shape_input").value;

  let iArea = 0;
  let iPerimeter = 0;
  switch (shape) {
    case "circle":
      const iRadius = document.body.querySelector("#cir_radius").value;
      if (iRadius > 0) {
        iArea = cirArea(iRadius);
        iPerimeter = cirCircumference(iRadius);
      }
      break;
    case "square":
      const iSqLength = document.body.querySelector("#sq_length").value;
      if (iSqLength > 0) {
        iArea = sqArea(iSqLength);
        iPerimeter = sqPerimeter(iSqLength);
      }
      break;
    case "rectangle":
      const iRecWidth = document.body.querySelector("#rec_width").value;
      const iRecLength = document.body.querySelector("#rec_length").value;
      if (iRecLength > 0 && iRecWidth > 0) {
        iArea = recArea(iRecWidth, iRecLength);
        iPerimeter = recPerimeter(iRecWidth, iRecLength);
      }
      break;
    case "triangle":
      const iTriSideA = document.body.querySelector("#tri_sideA").value;
      const iTriSideB = document.body.querySelector("#tri_sideB").value;
      const iTriSideC = document.body.querySelector("#tri_sideC").value;
      const iTriHeight = document.body.querySelector("#tri_height").value;

      if (iTriSideA > 0 && iTriSideB > 0 && iTriSideC > 0) {
        iPerimeter = triPerimeter(iTriSideA, iTriSideB, iTriSideC);
      }
      if (iTriHeight > 0) {
        iArea = triArea(iTriSideC, iTriHeight);
      }
      break;
  }
  const resultField = document.body.querySelector("#result_box");
  const resultInfoContainer = document.createElement("p");
  resultInfoContainer.innerHTML =
    resultField.innerHTML = `The perimeter is ${iPerimeter} and the area is ${iArea}.`;

};

const calculateBtn = document.body.querySelector("button");


