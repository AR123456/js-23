async function getAlDataWithFetch() {
  const moviesRes = await fetch("./movies.json");
  const movies = await moviesRes.json();
  const actorsRes = await fetch("./actors.json");
  const actors = await actorsRes.json();
  const directorsRes = await fetch("./directors.json");
  const directors = await directorsRes.json();
  console.log(movies, actors, directors);
}
async function getAllDataPromiseAll() {
  const [moviesRes, actorsRes, directorsRes] = await Promise.all([
    fetch("./movies.json"),
    fetch("./actors.json"),
    fetch("./directors.json"),
  ]);
  const movies = await moviesRes.json();
  const actors = await actorsRes.json();
  const directors = await directorsRes.json();
  console.log(movies, actors, directors);
}

// getAlDataWithFetch();

getAllDataPromiseAll();
