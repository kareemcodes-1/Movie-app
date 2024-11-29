import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AllMovies from './movies/page.jsx';
import AllTVShows from './tv-shows/page.jsx';
import { MoviesProvider } from './providers/movies-provider.jsx';
import WatchList from './watchlist/page.jsx';
import SearchPage from './search/page.jsx';
import TVPage from './tv/[id]/page.jsx';
import MoviePage from './movie/[id]/page.jsx';
// import './index.css'

createRoot(document.getElementById('root')).render(
  <MoviesProvider>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/movies" element={<AllMovies />} />
      <Route path="/tv-shows" element={<AllTVShows />} />
      <Route path="/watchlist" element={<WatchList />} />
      <Route path="/search" element={<SearchPage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/tv/:id" element={<TVPage />} />
    </Routes>
  </BrowserRouter>
  </MoviesProvider>
);