function Player(name, lvl, points) {
  this.name = name;
  this.lvl = lvl;
  this.points = points;
  this.gainXp = function () {
    return points++;
  };
  this.describe = function () {
    console.log(name);
    console.log(lvl);
    console.log(points);
  };
}
let player1 = new Player("Bob");
let player2 = new Player("Alice");
player1.gainXp(5);
player1.describe();
