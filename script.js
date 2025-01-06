const submitButton = document.getElementById('btn');

submitButton.addEventListener('click', () => {
  console.log('Form has been submitted')
  const Pin = prompt("Please enter the Pin!")
  
  const validPins = ["admin", "administrator", "McDonalds Drive Thru"]
  if (validPins.includes(Pin)) {
    alert('Correct Pin!')
    window.location.href = "roblox.com"
  } else {
    alert('Incorrect Pin')
  }
});
