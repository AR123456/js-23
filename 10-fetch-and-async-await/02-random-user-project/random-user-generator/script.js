// fetch data
fetch("https://randomuser.me/api/")
  .then((response) => response.json())

  .then((data) => {
    console.log(data.results[0]);
    document.querySelector(".flex").innerHTML = `
    <div class="flex">
    <img
      class="w-48 h-48 rounded-full mr-8"
      src="https://randomuser.me/api/portraits/women/45.jpg"
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
        <span class="font-bold">Location: </span> ${data.results[0].address}
      </p>
      <p class="text-xl"><span class="font-bold">Age: </span>${data.results[0].age}</p>
    </div>
  </div>
  
  
  
  `;
  });
