type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

type Shape = Circle | Rectangle;

const calculateShapeArea = (shapeData: Shape): number => {
  if (shapeData.shape === "circle") {
    const areaOfCircle = Math.PI * Math.pow(shapeData.radius, 2);
    return parseFloat(areaOfCircle.toFixed(2));
  } else if (shapeData.shape === "rectangle") {
    const areaOfRectangle = shapeData.width * shapeData.height;
    return areaOfRectangle;
  } else {
    throw new Error("Unknown shape type. Please provide rectangle or circle");
  }
};

calculateShapeArea({ shape: "circle", radius: 5 });

calculateShapeArea({
  shape: "rectangle",
  width: 4,
  height: 6,
});
