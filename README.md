<a id='top'></a>

# Introduction

*Job Hound* is an app that will allow users who are conducting an active job search to collect information about jobs they have applied to and to plan their process for and organize data about follow-up activities related to their job applications.  [Click here to see the live app!](https://jobhound-1-mhs.herokuapp.com)

I am creating this app as a Unit 2 assessment from General Assembly's Software Engineering Immersive-Remote program.  For more information about the specifications of this assignment, please reference [Appendix A: Unit 1 Project Assignment from General Assembly](#appendix-a-assignment).

# Table of Contents
1. [Instructions for Use](#instructions)
2. [Version Notes](#version-notes)
3. [Tech Framework](#tech-framework)
4. [Future Plans](#future-plans)
5. [Contribute](#contribute)
6. [Special Thanks](#special-thanks)
7. [Appendices](#appendices)
   1. [Appendix A: Unit 1 Project Assignment from General Assembly](#appendix-a-assignment)
   2. [Appendix B: Project Pre-Planning](#appendix-b-planning)
   3. [Appendix B: Product Screenshots & Images](#appendix-c-pictures)

[Back to Top](#top)
<a id='instructions'></a>

# Instructions for Use

[Back to Top](#top)
<a id='version-notes'></a>

# Version Notes

The **1.0.4** version of this app is currently uploaded.  In cases where I update the README without any updates to the website itself I do not update the version number or use branches for my work.  Each version number will lack a commit number until the next version is uploaded.  The current commit number is always added retroactively.  In general, for version number format X.Y.Z:

* X: increases in this number represent a complete overhaul of some section of the website, source code, or UI
* Y: increases in this number represent a major functional change/aesthetic change or addition to the app
* Z: increases in this number represent changes that are relatively minor but still warrant a new commit

Version XXXXXXX is the first version with the full range of intended functions successfully implemented.  Version 1.0.0 is the first to be both full functional and styled with optimized coding.

#### v 0.0.1 | 27 March 2021 | commit c89c5eadc31db4d90354b8af756593698eb16ea1 | Initial Commit
* Created boilerplate app files by cloning from template repository
  * Set view engine to EJS
  * Installed dependencies
* Initialized GitHub repository and set as remote repo in `.git`

#### v 0.0.2 | 28 March 2021 | commit ed8121dfb51c71deda99df7418b82872597e421e
* Set up a new app in Google to allow for OAuth 2.0 user verification.
  * Configured `.env` file with necessary data for OAuth and to connect to the MongoDB server.

#### v 0.0.3 | 29 March 2021 | commit 533b18e7f34017acbd4ee345e7bb3cea857f3ab3
* Sectioned code in `server.js` with comment syntax.
* Made controllers directory.
* Rendering `/applications` index page (no data).
* Rendering `/applications/new` form creation page.
* Passing information successfully for partial rendering `<head>` and `<nav>`.

#### v 0.0.4 | 29 March 2021 | commit 21013a70d312ce4fdb81732c15db1e521fd29413
* Data entered into the form at `/applications/new` being posted to database.

#### v 0.0.5 | 30 March 2021 | commit 2c3e67b5c7f61909ad137c9d6760f06196c5e874
* Set up a new remote origin with Heroku for product deployment.

#### v 0.1.0 | 30 March 2021 | commit 05c198061267855b92d3a446fd37c827180dd04f
* Rendering details page for individual job applications.

#### v 0.1.1 | 31 March 2021 | commit de57380bdfd8ec98db467e5a722003dae147110e
* Refactored existing controller functions to use `.then()` syntax.
* Job apps `show` page has a working delete button.

#### v 0.1.2 | 30 March 2021 | commit de57380bdfd8ec98db467e5a722003dae147110e
* Button to delete job application works.

#### v 0.1.3 | 31 March 2021 | commit b7f9156c2fd67258cac3bb412f5667681d9c2ec4
* Controller function `getIndex()` in `/controllers/applications` only returns data for the logged-in user.

#### v 0.1.4 | 01 April 2021 | commit 3a0f8a2850b64ccdc3ac47a22623aef04bf3954e
* Refactored `models/application.js` and `views/applications/new.ejs` to require fields properly.
* Added routing and empty controller for new Follow-Up creation form.
* On OAuth login, app redirects to `'/'` instead of `/applications`.
* Rendering link to `/follows` directory in `/`.  Renders successfully but no data yet.
* Rendering form for creating a new Follow-Up in `/applications/:id/noew-follow-up`.

#### v 0.1.5 | 01 April 2021 | commit c034cdb3b8a34af97c3660df8d5afb50a831639a
* Corrected action on Follow-Up create form from `/applications` to `/follows`.
* Refactored `Follow` model in `/models/follow.js` so keys indicate they are in the `Follow` database.
* Form to create a new `Follow` is sending data to proper database with reference to the parent job application.
* Follow-Ups in database are rendering in `/follows` directory.

#### v 0.1.6 | 01 April 2021 | commit 164c443d44fbe5f04ac1e5b8526ea872beb3444d
* Rendering a view for individual Follow-Ups clickable from entries in the `/follows` directory.
* Index view for `/follows` truncates `follow_detail` value to a snippet if over a specified length.
* Function `getIndex()` in `controllers/follows.js` will only return Follow-Ups for the logged-in user.
* Refactored `Application` model in `/models/application.js` so keys indicate they are in the `Application` database.

#### v 0.1.7 | 02 April 2021 | commit e2c84db3f2befc1d8fde4bc30a8bff19a53469de
* Creating a new Follow-Up creates two-way referencing between `Follow` and `Application` databases.
* Follow-up update page is rendering properly.

#### v 0.1.8 | 02 April 2021 | commit 4a15c9fa5e3552b12a0e8b2e7001a79470bb1af4
* Delete function is working for Follow-Up documents.
  * Also removes references to Follow-Ups inside Applications.
* Implement CSS for `<header>` and `<nav>`.

#### v 0.2.0 | 02 April 2021 | commit 71f0c5e0084689f5e3a777e9bfc006b03ebfb458
* Styled `/applications` index page.

#### v 0.2.1 | 02 April 2021 | commit c912dc538beddbd1eff56f7607ebbcadc5c55941
* Styled `/applications` show page.

#### v 0.2.2 | 02 April 2021 | commit 395c36847ba4890e51e701fb110f5b82e31980e7
* Styled `/follows` show page.

#### v 0.2.3 | 02 April 2021 | commit 386f163bc06e261c5b8f4567e438afbd3dea8ea3
* Fixed issue editing `follow_done` status on Follow-Up detail view.
* Removed `console.log()` statements leftover from testing.

#### v 0.2.4 | 02 April 2021 | commit 9c18a2a9a5e681163779f48e5edc491fff403916
* Resized buttons in `/application` show view.

#### v 0.2.5 | 02 April 2021 | commit df57a67980fae7ab41c8fd6d8408b6b4e52317fd
* Additions to `README.md` file.

#### v 1.0.0 | 06 April 2021 | commit 680599913bfe2acfcc5deae773dde02f59aadd74
* Fixed `.populate()` function in `applications/show.ejs` file.
* MVP reached.

#### v 1.0.0.1 | 26 May 2021 | commit bb31f5f2cee601e2fce3e886e3b992cf0b58847c
* Removed *APIs* section from `README.md` *Table of Contents*.  This project does not query any APIs in its current form.

#### v 1.0.1 | 28 May 2021 | commit 4a3002739cdd22c68d9e4316e4cf33dc70e24b0a
* Added items to list of icebox features/future plans.
* Added styling to `applications/index.ejs` for spacing, container shape, and colors.

#### v 1.0.2  | 28 May 2021 | commit acd4b1db3c6dbf5c540d62bad5069c76dc801fe6
* Remove raw data from rendering in `applications/show.ejs` view.
* Cleaned up display in `applications/show.ejs` view and added styling.
  * Refactored `<fieldset>` as a `<section>` and removed an unnecessary wrapper.
* Added a footer with relevant information and links and styled consistently with header.
  * Includes a size breakpoint to reformat for small screens and mobile devices.

#### v 1.0.3 | 28 May 2021 | commit 06c6f1c7fbfb607d15094762d4b8a9bf2890b162
* Adjust container styling for `applications/index.ejs` view.
* Created CSS pseudoclasses for link colors.

#### v 1.0.4 | 01 June 2021 | commit 3f32cb4b54ba2057b6b328b715c4b0f1a64425fe
* Made multiple changes to the `/views/applications/new.ejs` file.
  * Added significant CSS styling to the form.
  * Wrote code to let a user enable/disable optional fields.
  * Added fields for salary offered in a job listing.
* Added fonts *Suez One* and *Montserrat*.
* Fixed an issue where `<header>` was opened above `<body>` in the `/views/partials/header.ejs` file.  Oddly enough this seems to have never broken anything previously, or on fixing it.

#### v 1.0.4.1 | 20 June 2021 | commit 63d8467e23c5c67cc3a45baaf6ac9b73e74b14ca
* Added a link to the live app at the top of the README.md file.

#### BRANCH split-header-for-local-stylesheets | 20 July 2021 | commit ba3f13f6062f9b316a41f878f78aef4b67568c91
* Initialized new files `header-top.ejs` and `header-bottom.ejs` in the `/views/partials` directory.
* Copy/pasted code from `header.ejs` from the top through to and including the link to `style.css` to the new `header-top.ejs` file.
* Copy/pasted code from `header.ejs` starting immediately after the `style.css` link through to the end into `header-bottom.ejs` file.
* Refactored every view that called `header.ejs` to call both the `header-top.ejs` and `header-bottom.ejs` files.
* Deleted the `header.ejs` file after a search confirmed no other files are calling it.
* Renamed `style.css` as `global.css` and updated import statements as appropriate (only called in `header-top.ejs`).

#### v 1.1.0.0 | 20 July 2021 | commit 0dd01d0809be06dbbba3a4600c172c0fbc31a618 | Current Version
* Merge PR on GH to to incorporate branch `split-header-for-local-stylesheets` into main.

#### BRANCH display-followups-on-job-app-show-page | 20 July 2021 | commit 5cf89e0630bba68dea9719ae6c803ea1fc803544
* In `global.css` I changed `margin: 10px;` to `padding: 10px;` in the under selector for `main`.
  * Made some changes to `global.css` to be able to separate local CSS into 
* Linked the file at `/applications/show.css` in the relevant `.ejs` view template.
* Refactored `/applications/show.ejs` template to use CSS Grid.

#### BRANCH display-followups-on-job-app-show-page | 20 July 2021 | commit --
* Successfully rendering raw data for job application follow-ups in the correct `<div>` in the `/applications/show.ejs` view.
* Created containers for individual follow-ups displayed in the `/applications/show.ejs` view.
* Refactored CSS for `<footer>` element in `global.css` so that it will be pushed below the bottom of the screen if enough content is present to require scrolling.
* Moved additional CSS from `global.css` to `/public/stylesheets/applications/show.css`.

[Back to Top](#top)
<a id='tech-framework'></a>

# Tech Framework

### This app uses:
* HTML5 and CSS3
* JavaScript ES6
* MongoDB and Mongoose
* Node.js/Express
* EJS

### I built this app with:
* [VSCode](https://code.visualstudio.com/) version 
* [Google Chrome](https://www.google.com/chrome/) version 
* [Homebrew](https://brew.sh/) version
* Zsh version with [Oh My Zsh](https://ohmyz.sh/)
* [GitHub](https://github.com/) (online, not desktop)
* macOS Big Sur version 11.4, Apple M1 chip

### This app is hosted at:
* [GitHub Repo](https://github.com/mhsmith321/GA-project-2-job-hound)
* [Heroku Repo](https://git.heroku.com/jobhound-1-mhs.git)
* [Heroku Hosted Site](https://jobhound-1-mhs.herokuapp.com/)

[Back to Top](#top)
<a id='future-plans'></a>

# Future Plans
### Strategic
* Currently I'm styling this app with a mobile-first design based on user stories.  I still need a design that also makes sense for a desktop application.
* My click handlers are being coded in `.ejs` files in `<script>` containers.  I need to find out if there's a better way to code click handlers.

### Tactical
* Add a new section to the `README.md` file containing guides to re-use interesting sections of code (eg, `<switch>` event handlers).
* Allow user to alter basic user data (name, etc) after Mongoose automatically creates a user in the user database.
  * Will need to branch the login process to not overwrite data if the user already exists per a matched `req.user.GoogleId` value.
* Use `.catch(err => [stuff])` to refactor error handling on controller functions.
* Make sure that deleting a job application also deletes scheduled Follow-Ups.
  * Add a warning prompt about this too.
* Add code to correct dates entered on Job Apps and Follow-Ups and to display in a more accessible format.
* When deleting a Follow-Up, reference embedded in Job Applications will be deleted.
  * Apparently `.post` middleware can accomplish this?
* When deleting a Job Application, Follow-Ups referenced will be deleted.

[Back to Top](#top)
<a id='contribute'></a>

# Contribute

Although I'm always interested in meeting new collaborators I prefer to keep this an individual project as a skills demonstrator.

I'm happy to let anyone reuse my code so long as you contact me for advance permission and give attribution where appropriate.  Some materials are specified in this README as proprietary material from General Assembly and should only be used with the direct permission of General Assembly.

If you'd like to learn more about the developer, please visit [my website](https://martysmith.tech/), [GitHub](https://github.com/mhsmith321), and [LinkedIn](https://www.linkedin.com/in/the-marty-smith/).  Anyone interested in my work is invited to network with me.

[Back to Top](#top)
<a id='special-thanks'></a>

# Special Thanks

* Instructors and peers from the General Assembly SEIR-EC-2-22 cohort for collaboration in developing this app. While this app represents my own original work we gave each other assistance in developing our own versions thereof.
* Formatting this `README.md` file was easy with the help of the [Markdown Live Preview](https://markdownlivepreview.com/) tool and GitHub Guide's [Mastering Markdown](https://guides.github.com/features/mastering-markdown/) page.
* Developing a color pallate involved the extensive use of [Coolors](https://coolors.co/), a free resource created by [Fabrizio Bianchi](http://fabrizio.io/) and checked with [ColorSafe](http://colorsafe.co/) for WCAG-compliant contrast ratios to ensure accessibility.
* The [Suez One](https://fonts.google.com/specimen/Suez+One) font was created by [Michal Sahar](https://github.com/MichalSahar) and made available through Google Fonts under the [SIL Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).
* The [Montserrat](https://fonts.google.com/specimen/Montserrat) font was principally designed by [Julieta Ulanovsky](https://twitter.com/julietulanovsky?lang=en) and made available through Google Fonts under the [SIL Open Font License](https://scripts.sil.org/cms/scripts/page.php?site_id=nrsi&id=OFL).

[Back to Top](#top)
<a id='appendices'></a>

# Appendices

<a id='appendix-a-assignment'></a>

## Appendix A: Unit 2 Project Assignment from General Assembly

[Back to Top](#top)
<a id='appendix-b-planning'></a>

## Appendix B: Project Pre-Planning

### User Expectations
As a User:
1. I should be able to list jobs I've applied for.
2. I should be able to enter key details, parameters, and custom details about jobs I've applied for.
3. I should be able to schedule follow-up events related to jobs I've applied for on a calendar.
4. I should be able to attach current statuses to jobs I've applied for.
5. I should be able to access a centralized listing of all upcoming follow-up activities.
6. I should be able to view key metrics of my job application process.
7. I should be able to update job follow-ups when complete.
8. I should be able to prioritize job applications on a hot/warm/cold basis.
9. I should be able to view individual job applications and events related to that application.
10. I should be able to apply relevant filters to my centralized view of all applications (date, status, etc).
11. I should be able to log in securely to my own job tracker system.
12. I should be able to upload and view application materials I've submitted for each job (resume, cover letter, etc).
13. I should be able to collect and organize contact information for key people about each job.
14. I should be able to archive job applications which are cold, staledated, or conclude without an offer.
15. I should be alerted if I enter an application for a job I've previously applied for.
16. I should be able to export data in a file format accessible to other programs.

### User Stories
1. Adam is a recent college graduate in a highly competitive field where 200-300 job applications in a cycle are not uncommon.  He's concerned about filling out so many job applications while being able to keep them organized for follow-up, review prior to interviews, and looking for common trends among applications that get advanced in the application process.  He downloads Job Hound to keep track of all his applications and organize data about each efficiently.
2. Michelle received multiple job offers and accepted one from the company offering the best compensation and career advancement opportunities.  However, during her orientation, she was shown a sheet with her compensation in writing that was substantially different from what she verbally agreed to and her new supervisor responded with a sexist remark when she pointed this out.  When orientation breaks for lunch, she opens Job Hound to review details on two other offers she received, finds contact information for her main contact with both, and learns when calling that one is still willing to honor the offer.  She informs the current company she no longer wishes to work for them and picks up paperwork from her new employer in the afternoon.
3. Joseph is being evaluated for a position as a senior developer with software company and is going through multiple rounds of technical and non-technical interviews.  He's striking up a significant rapport with all the people he meets with and several have told him that even if they don't hire him now, they're extremely impressed want to know if he'd be interested in any other open positions or future opportunities.  Joseph is very interested in this company and wants to retain contact information for the people he interviews with in relation to the current interview process.  He keeps everyone's contact information to enter into Job Hound which he then syncs with Outlook and LinkedIn.  He also uses the embedded data to schedule follow-ups with individual people.

### Databases

[Back to Top](#top)
<a id='appendix-c-pictures'></a>

## Appendix C: Product Screenshots & Images