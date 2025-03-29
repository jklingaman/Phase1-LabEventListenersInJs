document.addEventListener('DOMContentLoaded', () => {
  // Handle Button Clicks

// Function to change the background color when a button is clicked
function changeBackgroundColor() {
  // Implement the function to change background color
  const colorChange = document.getElementById('changeColorButton')
  colorChange.addEventListener('click', () => {
    document.querySelector('body').style.backgroundColor = 'red';
  });
}
changeBackgroundColor()

// Function to reset the background color when the body is double-clicked
function resetBackgroundColor() {
  const colorReset = document.getElementById('resetColorButton')
  colorReset.addEventListener('dblclick', () => {
    document.querySelector('body').style.backgroundColor = 'initial';
  });
}
resetBackgroundColor()

// Capture Keyboard Input

// Function to display the key pressed by the user
function displayKeyPress() {
  console.log('called')
  // Implement the function to display key pressed
  const p = document.getElementById('keyPressDisplay')
  console.log(p)
  console.log(p.innerText)
  document.addEventListener('keydown', (event) => {
    // console.log(event)
    // console.log('Key Pressed:', event.key)
    p.innerText =  event.key
  });
}
displayKeyPress()

// Process Text Input

// Function to display user input in real-time
function displayUserInput() {
  // Implement the function to display user input
  const input = document.getElementById('textInput');
  const display = document.getElementById('textInputDisplay');
  console.log(input)
  console.log(display)
  document.addEventListener('keydown', () => {
    const dinner = input.value 
    console.log(dinner)
    display.innerText = dinner
  })
}
displayUserInput()

function buttonColorChange() {
  const button = document.getElementById('hoverer');
  button.addEventListener('mouseover', () => {
    document.getElementById('hoverer').style.backgroundColor = 'gold';
    // console.log(but)
  })
}
buttonColorChange()

function resetButtonColor() {
  const button = document.getElementById('hoverer');
  button.addEventListener('mouseout', () => {
    document.getElementById('hoverer').style.backgroundColor = 'initial';
  })
}
resetButtonColor()

function createAlert() {
  document.querySelector('#alert').addEventListener('click', () => alert('I just wanted to say hello!'));
}
createAlert()

document.querySelector('#log').addEventListener('click', () => console.log('I bet you weren\'t expecting me to say hello again were you. :)' ))


});
