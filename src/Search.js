import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <form className="Search">
      <input type="text" placeholder="City" />
      <button>Search</button>
    </form>
  );
}
