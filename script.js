const container = document.getElementById('container')
const colors = ['red', 'blue', 'yellow', 'green', 'pink', 'purple', 'orange']

const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div')
  square.classList.add('square')

  square.addEventListener('mouseover', () => setColor(square))
  square.addEventListener('mouseout', () => removeColor(square))

  container.appendChild(square)
}

function setColor(element) {
  const color = randomColor()
  element.style.backgroundColor = color
  element.style.boxShadow = '0 0 2px ${color}, 0 0 10px ${color}'
}

function removeColor(element) {
  element.style.backgroundColor = '#1d1d1d'
  element.style.boxShadow = '0 0 2px black'
}

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)]
}
