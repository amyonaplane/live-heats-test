# About This App
This system is designed to manage race results.

## Use Cases
1. As a teacher, I want to add student information so I can register students for races.

2. As a teacher, I want to specify lane information so I can allocate students to lanes for races.

3. As a teacher, I want to create races so I can track who raced in which lane, and what race position they had.

4. As a teacher, I want to assign students to a lane so the race can be more organized.

5. As a teacher, I want to assign the finishing race position of each student so I can determine who the winner is.

## MVP
* Each race will involve at least 2 students
* Each race contains at least 2 lanes
* Each student can be assigned a finishing race position
* No more students can be added to the race once it has started
* Implement for Mobile

## Optional
* Implement for Desktop
* Nicer colors and styles
* No more place changes can be made to the race once it has been completed
* Each race has a maximum number of students
* Each race has a name and unique ID
* Implement scroll behaviour for large lists
* Animation
* All students need to be in a lane, but not all lanes have to have a student (uneven participant numbers, knock-out races, etc.)
* DNFs, no-shows
* Each place can only be assigned to one student
* Implement race timings
* Implement race history of each student
* Implement information for students to see

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
