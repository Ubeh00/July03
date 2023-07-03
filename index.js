// This is for Array Length:
const soup = ["Egusi", "Okro", "Onubu", "Oha"];
let size = soup.length;
document.getElementById("Ofe").innerHTML = size;

// This is for Array toString:
const cloth = ["Trouser", "Skirt", "Shirt", "Blouse"];
document.getElementById("Akwa").innerHTML = cloth.toString();

// This is for Array Slice:
const goodPoliticians = ["Ugwuanyi", "Obi", "Sullivan", "Obasanjo", "Yar'Adua"];
const Politicians = goodPoliticians.slice(1);
document.getElementById("Junk").innerHTML = goodPoliticians + "<br><br>" + Politicians;

// This is for Array Shift:
const london = ["Brentford", "Chelsea", "Arsenal", "Tottenham", "Fulham"];
document.getElementById("clubs").innerHTML = london;
london.shift();
document.getElementById("clubs2").innerHTML = london;

// This id for Array Unshift:
const champions = ["Barcelona", "Paris SG", "Bayern", "Napoli",];
document.getElementById("winners").innerHTML = champions;
champions.unshift("Man City");
document.getElementById("winners2").innerHTML = champions;

// This is for Array Length 2:
const Beer = ["Budweiser", "Hero", "Heineken", "Life",];
document.getElementById("Mmanya").innerHTML = Beer;
Beer[Beer.length] = "Gulder"
document.getElementById("Mmanya2").innerHTML = Beer;

// This is for Array Delete:
const Facilitator = ["Chimdi", "Sommy", "Adaeze", "Cynthia",];
document.getElementById("Staff").innerHTML = "The prettiest facilitator is: " + Facilitator[2];
delete Facilitator[2];
document.getElementById("Staff2").innerHTML = "The ugliest facilitator is: " + Facilitator[2];

// This is for Array Concatenate:
const Designer = ["Bvlgari", "Louis Vutton",];
const Designers = ["Hublot", "Calvin Klein",];
const topDesigners = Designer.concat(Designers);
document.getElementById("model").innerHTML = topDesigners;

// This is for Array Flat:
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
document.getElementById("digit").innerHTML = newArr;

// This is for Array Splice:
const Days = ["Monday", "Tuesday", "Friday", "Saturday", "Sunday"];
document.getElementById("week").innerHTML = Days;
Days.splice( 2,0,"Wednesday", "Thursday");
document.getElementById("week2").innerHTML = Days;