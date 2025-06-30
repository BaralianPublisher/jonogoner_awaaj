import { database } from './firebase-config.js';
import { ref, push } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

window.uploadNews = function () {
  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const details = document.getElementById("details").value;

  if (title && image && details) {
    push(ref(database, 'news'), { title, image, details, time: Date.now() })
      .then(() => alert("নিউজ আপলোড হয়েছে ✅"))
      .catch(err => alert("❌ আপলোড ব্যর্থ: " + err.message));
  } else {
    alert("সব ফিল্ড পূরণ করুন 🔔");
  }
}