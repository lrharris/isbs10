document.addEventListener("DOMContentLoaded", function () {

  const eventDate = new Date("2027-06-20");
  const today = new Date();
  today.setHours(0,0,0,0);

  const days = Math.ceil((eventDate - today) / (1000*60*60*24));

  const navbar = document.querySelector(".navbar-nav.ms-auto");

  if (!navbar) return;

  const li = document.createElement("li");
  li.className = "nav-item";

  const span = document.createElement("span");
  span.className = "nav-link countdown-pill";
  span.textContent = `📅 ${days} days to ISBS10`;

  li.appendChild(span);

  navbar.prepend(li);

});