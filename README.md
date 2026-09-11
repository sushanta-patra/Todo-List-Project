# Wonderlust

Wonderlust is a beginner-friendly Airbnb-style listing project. It lets you create, view, edit, and delete property listings.

## Built with

- Node.js
- Express.js
- MongoDB and Mongoose
- EJS and EJS-Mate
- Method Override
- CSS

## Requirements

Before running the project, make sure these are installed:

- [Node.js](https://nodejs.org/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

MongoDB must be running locally because the project connects to:

```text
mongodb://127.0.0.1:27017/wonderlust
```

## Run the project

Open PowerShell, then move into the project folder:

```powershell
cd "C:\Users\User\Desktop\Woderlust AirBNB\Wonderlust-project"
```

Install dependencies if `node_modules` is not already present:

```powershell
npm install
```

Start the development server:

```powershell
npm run dev
```

Or start it without automatic restart:

```powershell
npm start
```

When the terminal shows `server listing` and `DB connect`, open this URL in your browser:

```text
http://localhost:8080/listings
```

To stop the server, press `Ctrl + C` in PowerShell.

## Add sample listings

The project includes sample listings in `init/data.js`.

Run this command **only when you want to reset the database with sample data**:

```powershell
node init/index.js
```

> Warning: this command deletes every existing listing in the `wonderlust` database before adding the sample listings.

## Routes

| Method | Route | Purpose |
| --- | --- | --- |
| GET | `/` | Simple home response |
| GET | `/listings` | View all listings |
| GET | `/listing/new` | Open the create-listing form |
| POST | `/listings` | Create a listing |
| GET | `/listings/:id` | View one listing |
| GET | `/listings/:id/edit` | Open the edit form |
| PUT | `/listings/:id` | Update a listing |
| DELETE | `/listings/:id` | Delete a listing |

## Project structure

```text
Wonderlust-project/
├── app.js              # Express server and application routes
├── models/
│   └── listing.js       # MongoDB listing schema
├── views/               # EJS templates
│   ├── includes/        # Shared page parts, such as the navbar
│   ├── layouts/         # Main page layout
│   └── listings/        # Listing pages
├── public/css/          # Static CSS files
├── init/
│   ├── data.js          # Sample listing data
│   └── index.js         # Database seed script
└── package.json         # Dependencies and commands
```

## Common problems

### MongoDB connection error

Make sure MongoDB is installed and running, then restart the server:

```powershell
npm run dev
```

### `npm` is not recognized

Install Node.js, close PowerShell, open it again, and run the command again.

### Port 8080 is already in use

Stop the other Node.js server using port 8080, or change the port number in `app.js`.
