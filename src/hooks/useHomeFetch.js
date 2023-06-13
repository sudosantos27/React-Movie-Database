import { useState, useEffect } from "react";
// API
import API from '../API';

// Helpers
import { isPersistedState } from "../helpers";

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0
};

export const useHomeFetch = () => {
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const [state, setState] = useState(initialState); // State for movies data
  const [loading, setLoading] = useState(false); // State for loading status
  const [error, setError] = useState(false); // State for error status
  const [isLoadingMore, setIsLoadingMore] = useState(false); // State for loading more movies

  console.log(searchTerm);

  const fetchMovies = async (page, searchTerm = "") => {
    try {
      setError(false);
      setLoading(true);

      const movies = await API.fetchMovies(searchTerm, page); // Fetch movies from API

      setState((prev) => ({
        ...movies,
        results: page > 1 ? [...prev.results, ...movies.results] : [...movies.results]
      }));

    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  // Initial fetch and search fetch
  useEffect(() => {
    if (!searchTerm) {
      const sessionState = isPersistedState("homeState");

      if (sessionState) {
        setState(sessionState); // Set state from session storage if available
        return;
      }
    }
    console.log("Grabbing from API");
    setState(initialState);
    fetchMovies(1, searchTerm); // Fetch movies from API with page 1
  }, [searchTerm]);

  // Load more movies
  useEffect(() => {
    if (!isLoadingMore) return;

    fetchMovies(state.page + 1, searchTerm); // Fetch next page of movies
    setIsLoadingMore(false);
  }, [isLoadingMore, searchTerm, state.page]);

  // Write to sessionStorage
  useEffect(() => {
    if (!searchTerm) {
      sessionStorage.setItem("homeState", JSON.stringify(state)); // Save state to session storage
    }
  }, [searchTerm, state]);

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore };
};
