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

// ✅ Fetch Dev.to Articles
async function loadArticles() {
  try {
    let response = await fetch("https://dev.to/api/articles?username=thepracticaldev"); 
    let articles = await response.json();

    let list = document.getElementById("articles-list");
    list.innerHTML = "";

    articles.slice(0, 5).forEach(article => {
      let li = document.createElement("li");
      li.innerHTML = `<a href="${article.url}" target="_blank">${article.title}</a>`;
      list.appendChild(li);
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    document.getElementById("articles-list").innerHTML = "<li>⚠️ Failed to load articles.</li>";
  }
}

// ✅ Run Functions
window.onload = function() {
  showGreeting();
  loadArticles();
};