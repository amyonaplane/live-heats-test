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
* Edit Student Name in Lane
* Remove Student from race
* Implement scroll behaviour for large lists
* Animation
* Remove dropdown and make RaceSpace drag-and-drop for Lanes
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

## Test For Production
### Manual Testing
Follow through the application with common user cases.
### Automated Testing
Add any tests that are relevant to the newly functionality the feature adds.
#### Unit Tests
Ensure that a a single function, method, or class of the application performs as intended.
#### Integration Tests
Ensure that individual parts of the application work as intended when integrated together into a complete system.
#### E2E Tests
Ensure that the entire application functions as a user would expect.

### Observability
Ensure a baseline to the application health is determined, and new changes do not degrade performance, reliability, or user expectations.
#### Monitoring
Track application perforance, and alert of any negative changes.
Ideally this could be passed into another application like DataDog.

#### Logging
To record user actions to understand their behaviours.
Ideally this could be passed into another application like Heap.

### Deployment Plan
1. Inform Stakeholders that feature is developed and tested
2. Determine release rollout based on feature risk and cost
3. Inform Stakeholders when feature is released.

### User Training
Ensure users know how to use the application. Ideally the application would have someting in-product to explain or be designed intuitively.

#### Documentation
Create a tangible record of what choices were made and the outcomes of these decisions for future developers, and also a set of updates and instructions for the users to understand.
#### Video Recordings
For users who prefer visual reference. These can be used for reference for users or announcement material.
#### In-Person/Zoom Demos
For users who want a customized run-through of the application.
This can be a premium feature or dedicated section for users to access.