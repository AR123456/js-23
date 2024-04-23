function Player(name, lvl, points) {
  this.name = name;
  this.lvl = lvl;
  this.points = points;
  this.gainXp = function () {
    return points++;
  };
  this.describe = function () {
    console.log("name");
    console.log("lvl");
    console.log("points");
  };
}
