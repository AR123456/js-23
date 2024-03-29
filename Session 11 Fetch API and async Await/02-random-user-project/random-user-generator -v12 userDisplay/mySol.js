document.body.style.backgroundColor = "purple";
const generate = document.getElementById("generate");
const spinner = document.querySelector(".spinner");
const getUser = () => {
  spinner.toggleAttribute("hidden");
  // fetch data
  fetch("https://randomuser.me/api/")
    .then((response) => response.json())

    .then((data) => {
      spinner.toggleAttribute("hidden");
      console.log(data.results[0]);
      if (data.results[0].gender === "female") {
        document.body.style.backgroundColor = "purple";
      } else if (data.results[0].gender === "male") {
        document.body.style.backgroundColor = "blue";
      }
      document.querySelector(".flex").innerHTML = `
      <div class="flex">
      <img
        class="w-48 h-48 rounded-full mr-8"
        src= ${data.results[0].picture.large}
      />
      <div class="space-y-3">
        <p class="text-xl">
          <span class="font-bold">Name: </span>${data.results[0].name.first} ${data.results[0].name.last} 
        </p>
        <p class="text-xl">
          <span class="font-bold">Email: </span> ${data.results[0].email}
        </p>
        <p class="text-xl">
          <span class="font-bold">Phone: </span> ${data.results[0].phone}
        </p>
        <p class="text-xl">
          <span class="font-bold">Location: </span> ${data.results[0].location.city},${data.results[0].location.state}
        </p>
        <p class="text-xl"><span class="font-bold">Age: </span>${data.results[0].dob.age}</p>
      </div>
    </div>
    
    
    
    `;
    });
  spinner.toggleAttribute("hidden");
};
generate.addEventListener("click", getUser);
