<<<<<<< HEAD
import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import UserProfile from "./components/UserProfile";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <UserProfile name="John" age="30" bio="Enjoys coding and traveling" />
      <Footer />
import RecipeList from './components/RecipeList';
import AddRecipeForm from './components/AddRecipeForm';

function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>🍲 Recipe Sharing App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;


=======
import SearchPage from "./components/SearchPage";

export default function App() {
  return (
    <div>
      <SearchPage />
    </div>
  );
}
>>>>>>> 72cc504 (Initial commit - GitHub User Search app)
