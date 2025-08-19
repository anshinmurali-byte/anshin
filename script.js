// ✅ Dynamic Greeting
function showGreeting() {
  let now = new Date();
  let hour = now.getHours();
  let greeting;

  if (hour < 12) {
    greeting = " Good Morning!";
  } else if (hour < 18) {
    greeting = " Good Afternoon!";
  } else {
    greeting = " Good Evening!";
  }

  document.getElementById("greeting").innerText = greeting;
}

// ✅ Run Functions
window.onload = function() {
  showGreeting();
 

};
