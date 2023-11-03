# WAD - 301 - React Mid Term Project - Twootr

Twootr is a Social Media SPA built using React for _twoots_.

## Feature Requirements

-   ### Minimum: (8)

    1.  User must be able to sign in from the `users.json` list. If a user signs in, their details are store in the `Local Storage`.

    2.  User must be able to sign out of the application. `Local Storage` must be updated.

    3.  User must be able to read and browse _Twoots_.

    4.  User must be able to create new _Twoots_.

    5.  All the _twoots_ shown in the application, must come from the backend server.

    6.  Every new _twoot_ must be sent to the backend server to be saved.

    7.  User cannot post a new _twoot_ empty or with more than 140 characteres.

    8.  User must be able to change their name or other details (if bonus added).

-   ### Bonus: (4)

    1.  Modify the `users.json` file to accomodate more information like (Update the `Local Storage` accordingly):

        -   Profile Picture

        -   Joined Date

        -   Age

        -   etc.

    2.  While creating a new _twoot_ make a character counter that tracks the input and updates in real time.

    3.  User must be able to like, save or retwoot each twoot. No need to store this information in the server.

    4.  Display the time of any posted _twoot_ as `[NUMBER]` days ago. If it was posted 0 days ago, display `Today`.

## UI Requirements

-   ### Minimum: (5)

    1.  Responsiveness.

    2.  Shared & Re-Usable React Components.

    3.  Appropriate Index & 404 Routes.

    4.  Consistent Designs, Fonts, Icons and Color Schemes.

    5.  Display appropriate feedback to user based on actions. (Errors, Successes, Warnings, Loaders, etc).

-   ### Bonus: (2)

    1.  Theme Toggle (Light & Dark).

    2.  Inputs should be focussed whenever a form is displayed.

## Technology Requirements

-   ### Minimum: (1)

    1. Your app must use the following:

        - Props

        - `useState`

        - `useRef`

        - `useEffect`

        - React Router

-   ### Bonus: (1)

    1.  Use of `React Router v6` with:

        -   Layouts

        -   Elements

        -   Error Elements

        -   Loaders

## Project Management Requirements

-   ### Minimum: (2)

    1.  Create and Maintain Appropriate:

        -   Code Comments

        -   File & Directory Names

        -   Data Naming Conventions (Variables & Functions)

        -   Branch Names

        -   Git Commits

    2.  Create and Maintain a Plan (Create a `Readme File`):

        -   React Component Structure (Diagram)

        -   Data Map (Components and States)

        -   Design Documentation. (Fonts, Icons, Colors, etc).

-   ### Bonus: (1)

    1.  Create and Maintain a `Kanban Board / Notion Page` for project documentation.

    2.  Implement `PRs` to avoid merge conflicts.

    3.  Use Github Issues to track bugs and fixes with appropriate labels.

## Presentation Requirements

-   ### Minimum: (5)

    1.  Show `PLAN.md` file, explaining your decisions.

    2.  How was the project divided?

    3.  What you learned?

    4.  What you struggled the most?

    5.  What is the future scope?

-   ### Bonus: (2)

    1.  Present your `Kanban Board / Notion Page`.

    2.  Create Slides, Videos, Images or any other tool / method to present the project in a better way.

## Endpoints

-   GET:

    -   `/twoots` - Returns all the twoots saved in the backend server.

-   POST:

    -   `/twoot` - Post new twoot in the server and returns same data with ID.

    -   Minimum Expected data for creating a new _twoot_:

```js
{
    newTwoot: {
        author:"Henry David Thoreau",
        content:"An Apple a day, keeps the doctor away.!",
        authorSlug:"henry-david-thoreau",
        dateAdded:"2022-07-06"
    }
}
```

## Setup

1. Create at least 3 different users inside `users.json`.

2. Open a new terminal, go to the `backend` directory and run:

    - `npm i` - to install all the backend dependencies

    - `npm run server` - to run the backend server - `(http://localhost:8080)`

3. Create a React Project, clean the unwanted files and run with basic styling setup and push to Git as the first commit.

## DOs:

1.  Create your React project inside the `frontend` directory.

2.  Modify the `users.json` inside the `frontend` directory.

3.  Use `Fetch API / Axios` to get the data from the backend server.

4.  Divide the tasks efficiently & smartly to achieve all the requirements.

5.  Conduct `Code Review Sessions` & `Meetings` for efficiency.

## DONTs:

1.  Do not modify the code in the `backend` directory.

<h3 align="center">
  Good Luck 👍 .!
</h3>
