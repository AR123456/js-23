function Player(name) {
  this.name = name;
  this.lvl = 1;
  this.points = 0;
  this.gainXp = function (gain) {
    console.log(this.points, gain);
    console.log(this.points + gain);
    return this.points + gain;
  };
  this.describe = function () {
    console.log(name);
    console.log(lvl);
    console.log(gainXp());
  };
}
let player1 = new Player("Bob", 0, 1);
let player2 = new Player("Alice");
player1.gainXp(5);
player1.describe();
