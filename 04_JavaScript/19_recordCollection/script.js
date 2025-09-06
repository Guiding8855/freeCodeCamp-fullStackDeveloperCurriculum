const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};

function updateRecords(records, id, prop, value) {
  // US02. If value is an empty string, delete the given property from the album
  if (value === "") {
    delete records[id][prop];
  }
  // US03. If the prop isn't 'tracks' and 'value' is not empty, assign the value to that property
  else if (prop !== "tracks" && value !== "") {
    records[id][prop] = value;
  }
  // US04. If prop is 'tracks' and value is not empty, but the album doesn't have a tracks property, 
  // create an empty array and add the value to it
  else if (
    prop === "tracks" && 
    value !== "" && 
    records[id].hasOwnProperty("tracks") === false) {
      records[id][prop] = [value];
  }
  // US05. If prop is 'tracks' and value is not empty, 
  // add value to the end of the album's existing tracks array
  else if (
    prop === "tracks" && 
    value !== "" &&
    records[id].hasOwnProperty("tracks") === true) {
      records[id][prop].push(value);
  }

  // US01. Your function must always return the entire records object
  return records
};


//tests
let test1 = updateRecords(recordCollection, 5439, "artist", "ABBA");
console.log(test1);

let test2 = updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");
console.log(test2);

let test3 = updateRecords(recordCollection, 2548, "artist", "");
console.log(test3);

let test4 = updateRecords(recordCollection, 1245, "tracks", "Addicted to Love");
console.log(test4);

let test5 = updateRecords(recordCollection, 2468, "tracks", "Free");
console.log(test5);

let test6 = updateRecords(recordCollection, 2548, "tracks", "");
console.log(test6);

let test7 = updateRecords(recordCollection, 1245, "albumTitle", "Riptide");
console.log(test7);