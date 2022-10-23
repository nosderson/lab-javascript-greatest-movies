// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    return moviesArray.map((element) => element.director);
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    return (spielbergMovies = moviesArray.filter(element => element.director === "Steven Spielberg" && element.genre.includes("Drama"))).length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (!moviesArray.length) return 0
    let media = moviesArray.reduce((result, element) => result + (element.score || 0), 0);
    return Math.round(media / moviesArray.length * 100) / 100
}
// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const moviesDramas = moviesArray.filter(element => element.genre.includes('Drama'))
    if (moviesDramas.length === 0) return 0
    const media = moviesDramas.reduce((result, element) => result + element.score, 0) / moviesDramas.length
    return (Math.round(media * 100)) / 100
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    return [...moviesArray].sort((a, b) => (a.year > b.year) * 2 - 1)
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return [...moviesArray].sort((a, b) => (a.title > b.title) * 2 - 1)
        .slice(0, 20).map((element) => element.title)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    let minutos;
    copia = [...moviesArray];

    copia.forEach((element) => {
        minutos = 1 * (element.duration[0] * 60)
        if (element.duration[4] === "m")
            minutos += 1 * (element.duration[3])
        if (element.duration[5] === "m")
            minutos += 1 * ((element.duration).substring(3, 5))
        element.duration = minutos
    })

    return copia;
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
    let mapYears = new Map()
    let vetorScore = []
    let max = 0
    if (!moviesArray.length) return null

    moviesArray.forEach((element, index) => mapYears.set(element.year))

    for (const [key, value] of mapYears) {
        vetorScore.push(moviesArray.filter(element => element.year === key))
    }

    vetorScore.forEach((element, index) => {
        mapYears.set(vetorScore[index][0].year, vetorScore[index].reduce((result, element) =>
            result + (element.score || 0), 0) / vetorScore[index].length
        )
    })

    for (const [key, value] of mapYears) {
        max = key;
        break;
    }

    for (const [key, value] of mapYears) {
        if (mapYears.get(key) > mapYears.get(max))
            max = key
        if (mapYears.get(key) === mapYears.get(max))
            max = Math.min(key, max)
    }

    return `The best year was ${max} with an average score of ${mapYears.get(max)}`
}