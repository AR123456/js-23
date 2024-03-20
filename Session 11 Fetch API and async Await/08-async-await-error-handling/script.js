const getUsers = async () => {
  //   try {
  //     const response = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await response.json();
  //     console.log(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  try {
    // const response = await fetch("http://httpstat.us/404");
    const response = await fetch("http://httpstat.us/500");
    if (!response.ok) {
      throw new Error("Request Failed ");
    }
    const data = await response.text();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};
// getUsers();

const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/postss");
  if (!response.ok) {
    throw new Error("request failed");
  }
  const data = await response.text();
  console.log(data);
};
// can also handle error by adding error to the function call
getPosts().catch((error) => console.log(error));
