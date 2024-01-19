const canvas = document.querySelector(".canvas");

const shapesData = [
  {
    type: "circle",
    size: Math.random() * 100 + 50,
    angle: 0,
    data: {
      /* データの入れ込み可能 */
      title: "Circle title",
      subtitle: "Circle sub-title",
      content: "こちらはCircleの内容です。こちらはCircleの内容です。こちらはCircleの内容です",
    },
  },
  {
    type: "square",
    size: Math.random() * 100 + 50,
    angle: Math.random() * 360,
    data: {
      /* データの入れ込み可能 */
      title: "Square title",
      subtitle: "Square sub-title",
      content: "こちらはSquareの内容です。こちらはSquareの内容です。こちらはSquareの内容です。",
    },
  },
  {
    type: "circle",
    size: Math.random() * 100 + 50,
    angle: 0,
    data: {
      /* データの入れ込み可能 */
      title: "Circle title2",
      subtitle: "Circle sub-title2",
      content: "こちらはCircle2の内容です。こちらはCircle2の内容です。こちらはCircle2の内容です",
    },
  },
  {
    type: "square",
    size: Math.random() * 100 + 50,
    angle: Math.random() * 360,
    data: {
      /* データの入れ込み可能 */
      title: "Square title2",
      subtitle: "Square sub-title2",
      content: "こちらはSquare2の内容です。こちらはSquare2の内容です。こちらはSquare2の内容です。",
    },
  },
  // 図形追加はこっちで追加する
];

shapesData.forEach((shapeData) => {
  const shape = document.createElement("div");
  shape.classList.add("shape", shapeData.type);
  shape.style.width = `${shapeData.size}px`;
  shape.style.height = `${shapeData.size}px`;
  shape.style.left = `${Math.random() * (170 - shapeData.size)}%`;
  shape.style.top = `${Math.random() * (130 - shapeData.size)}%`;
  shape.style.transform = `rotate(${shapeData.angle}deg)`;
  shape.dataset.type = shapeData.type;
  shape.dataset.size = shapeData.size;
  shape.dataset.angle = shapeData.angle;
  shape.dataset.additionalData = JSON.stringify(shapeData.data);

  shape.addEventListener("mouseover", handleShapeHover);

  canvas.appendChild(shape);
});

function handleShapeHover(event) {
  const shape = event.target;
  const type = shape.dataset.type;
  const size = shape.dataset.size;
  const angle = shape.dataset.angle;
  const additionalData = JSON.parse(shape.dataset.additionalData);

  console.log(`Type: ${type},Size: ${size}, Angle: ${angle}`);
  console.log("Additional Data:", additionalData);
  document.querySelector(".canvas-text-maintitle").textContent = `${additionalData.title}`;
  document.querySelector(".canvas-text-subtitle").textContent = `${additionalData.subtitle}`;
  document.querySelector(".canvas-text-explain").textContent = `${additionalData.content}`;
}
