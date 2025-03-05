# Book Search Web Page 

A web app that lets users search for books by Title, Author, or Genre. It merges book data from JSON and CSV files and displays it in a sortable, searchable format. The default sorting is by Author's name. The app is responsive and user-friendly.

### Features

- Search: 
    - Users can enter a query, and JavaScript filters results dynamically.

- Sorting:
    - Dropdown to sort books by Title, Author (default), or Genre.

- Responsive Design:
    - Works on desktop and mobile.

- Styling:
    - Uses Bootstrap for a modern UI.

- No Results Handling: 
    - Displays a 'No results found' message if no matches.

- Highlighting Matches:
    - Matching search terms appear bold and red.

- Data Merging:
    - Combines book data from books.json and books.csv via a unique id field.

## Technologies Used

- React 18+
- JavaScript
- Bootstrap
- JSON
- CSV

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/Bazzomir/book-search-app.git
   cd book-search-app
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm start
   ```

## Usage

- Use the search bar to filter books.
- Select sorting order from the dropdown.
- Results update dynamically.