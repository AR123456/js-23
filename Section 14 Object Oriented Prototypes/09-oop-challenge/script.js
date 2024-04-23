function Player(name, lvl, points) {
  this.name = name;
  this.lvl = lvl;
  this.points = points;
  this.gainXp = function (gain) {
    console.log(this.points, gain);
    return this.points + gain;
  };
  this.describe = function () {
    console.log(name);
    console.log(lvl);
    console.log(points);
  };
}
let player1 = new Player("Bob", 0, 1);
let player2 = new Player("Alice");
player1.gainXp(5);
player1.describe();
