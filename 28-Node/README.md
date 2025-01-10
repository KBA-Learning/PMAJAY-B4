# 1. Movie Playlist Manager Exercise

## Exercise Questions

### 1. HTML Structure
- Create an HTML file with a basic structure.
- Include input fields for entering a movie name and priority.
- Add a button to add movies to the playlist.
- Use an unordered list to display the movies.

### 2. Styling (CSS,Tailwind)
- Style the unordered list to remove bullet points.
- Add margin to list items.
- Create classes for different priority levels:
  - `.priority-high` should have red text color.
  - `.priority-medium` should have yellow text color.
  - `.priority-low` should have green text color.
- Create a class for watched movies with a strikethrough and gray color.

### 3. JavaScript Functionality
- Initialize two arrays: one for movies and one for priorities.
- Create a function to add a movie:
- Validate that the movie name is not empty.
- Validate that the priority is a number between 1 and 3.
- Add the movie and its priority to their respective arrays.
- Create a list item (`<li>`) for the movie.
- Add the appropriate class based on the priority.
- Add buttons to mark the movie as watched, edit the movie, and remove the movie.
- Create a function to edit a movie:
  - Prompt the user to enter a new movie name and priority.
  - Validate the new inputs.
  - Update the movie and priority arrays.
  - Update the list item's text and class.
- Create a function to remove a movie:
  - Remove the list item from the DOM.
  - Remove the movie and its priority from the arrays.
- Ensure that the input fields are cleared after adding a movie.
- Display an alert if the movie name is empty or the priority is not between 1 and 3.




