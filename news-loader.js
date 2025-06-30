import { database } from './firebase-config.js';
import { ref, onValue } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

const newsContainer = document.getElementById("news-container");

onValue(ref(database, 'news'), (snapshot) => {
  const data = snapshot.val();
  newsContainer.innerHTML = '';
  const newsArray = data ? Object.values(data).sort((a, b) => b.time - a.time) : [];

  for (const news of newsArray) {
    const div = document.createElement("div");
    div.className = "news-item";
    div.innerHTML = `<h3>${news.title}</h3><img src="${news.image}"><p>${news.details}</p>`;
    newsContainer.appendChild(div);
  }
});