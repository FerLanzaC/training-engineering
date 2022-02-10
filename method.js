async function sayJoke(apiUrl, jokeId) {
  const response = await fetch(apiUrl)
  const json = await response.json()
  const jokesChristmas = await json.jokes;
  if (!jokesChristmas) {
      throw new Error(`No jokes at url: ${apiUrl}`);
  } else {
    for(let joke of json.jokes) {
        if (joke.id == jokeId) {
          return {saySetup: () => joke.setup,
                 sayPunchLine: () => joke.punchLine
                };
     }
      throw new Error (`No jokes found id: ${jokeId}`);
    }
  }
};

   
