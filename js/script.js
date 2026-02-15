


async function getUser() {
  try {
  const response = await fetch('https://randomuser.me/api/');
  const data = await response.json();



  const user = date.results[0];

  const name = user.name.first + " " + user.name.last;
  const email = user.email;

  document.getElementById("name").innerText =
  "Nimi: " + name;

  document.getElementById("email").innerText =
  "Email: " + email;
} catch (error) {
  console.log("Viga:", error);
  }
}






 

 



