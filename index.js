const drivers = [
    {
        name: 'Bobby',
        hometown: 'Pittsburg',
    },
    {
        name: 'Sammy',
        hometown: 'New York',
    },
    {
        name: 'Sally',
        hometown: 'Cleveland',
    },
    {
        name: 'Annette',
        hometown: 'Los Angeles',
    },
    {
        name: 'Bobby',
        hometown: 'Tampa Bay'
    }
];

function findMatching(source, sought) {
    return source.filter(
      (possibleMatch) => possibleMatch.toLowerCase() === sought.toLowerCase()
    );
  }
  
  function fuzzyMatch(source, testString) {
    return source.filter(
      (possibleMatch) =>
        possibleMatch.toLowerCase().indexOf(testString.toLowerCase()) === 0
    );
  }
  
  function matchName(source, soughtName) {
    return source.filter((record) => record.name === soughtName);
  }



