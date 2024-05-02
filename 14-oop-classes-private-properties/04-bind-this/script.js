class App {
  constructor() {
    this.serverName = "localhost";
    document
      .querySelector("button")
      // here this is the button
      .addEventListener("click", this.getServerName.bind(this));
  }
  getServerName() {
    console.log(this.serverName);
  }
}

const app = new App();
