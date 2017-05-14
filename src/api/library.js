/*
 * Mocking server data
 */

const _movies = [
  {'id': 1, 'title': 'Doom', 'year': 2005, 'score': 4, 'link': 'http://www.imdb.com/title/tt0419706/'},
  {'id': 2, 'title': "Pan's Labyrinth", 'year': 2006, 'score': 4.6, 'link': 'http://www.imdb.com/title/tt0457430/'},
  {'id': 3, 'title': 'Die Hard', 'year': 1988, 'score': 5, 'link': 'http://www.imdb.com/title/tt0095016/'},
  {'id': 4, 'title': 'Hellraiser', 'year': 1987, 'score': 3.8, 'link': 'http://www.imdb.com/title/tt0093177/'}
]

const _tvSeries = [
  {'id': 1, 'title': 'Supernatural', 'seasons': 10}
]

export default {
  getMovies (cb) {
    setTimeout(() => cb(_movies), 100)
  },

  getTvSeries (cb) {
    setTimeout(() => cb(_tvSeries), 100)
  }
}
