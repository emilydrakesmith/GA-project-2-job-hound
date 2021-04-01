<a id='top'></a>

# Introduction

*Job Hound* is an app that will allow users who are conducting an active job search to collect information about jobs they have applied to and to plan their process for and organize data about follow-up activities related to their job applications.

I am creating this app as a Unit 2 assessment from General Assembly's Software Engineering Immersive-Remote program.  For more information about the specifications of this assignment, please reference [Appendix A: Unit 1 Project Assignment from General Assembly](#appendix-a-assignment).

# Table of Contents
1. [Instructions for Use](#instructions)
2. [Version Notes](#version-notes)
3. [Tech Framework](#tech-framework)
4. [APIs](#apis) (will likely be unnecessary)
5. [Future Plans](#future-plans)
6. [Contribute](#contribute)
7. [Special Thanks](#special-thanks)
8. [Appendices](#appendices)
   1. [Appendix A: Unit 1 Project Assignment from General Assembly](#appendix-a-assignment)
   2. [Appendix B: Project Pre-Planning](#appendix-b-planning)
   3. [Appendix B: Product Screenshots & Images](#appendix-c-pictures)

[Back to Top](#top)
<a id='instructions'></a>

# Instructions for Use

[Back to Top](#top)
<a id='version-notes'></a>

# Version Notes

The **0.1.5** version of this app is currently uploaded.  In cases where I update the README without any updates to the website itself I do not update the version number or use branches for my work.  Each version number will lack a commit number until the next version is uploaded.  The current commit number is always added retroactively.  In general, for version number format X.Y.Z:

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

#### v 0.1.5 | 01 April 2021 | commit -- | Current Version
* Corrected action on Follow-Up create form from `/applications` to `/follows`.
* Refactored `Follow` model in `/models/follow.js` so keys indicate they are in the `Follow` database.
* Form to create a new `Follow` is sending data to proper database with reference to the parent job application.
* Follow-Ups in database are rendering in `/follows` directory.


[Back to Top](#top)
<a id='tech-framework'></a>

# Tech Framework

### This app uses:
* HTML5 and CSS
* JavaScript ES6

### I built this app with:
* [VSCode](https://code.visualstudio.com/) version 
* [Google Chrome](https://www.google.com/chrome/) version 
* [Homebrew](https://brew.sh/) version
* Zsh version with [Oh My Zsh](https://ohmyz.sh/)
* [GitHub](https://github.com/) (online, not desktop)
* macOS Big Sur version , Apple M1 chip

### This app has the following dependencies:

### This app is hosted at:
* [GitHub Repo](https://github.com/mhsmith321/GA-project-2-job-hound)
* [Heroku Repo](https://git.heroku.com/jobhound-1-mhs.git)
* [Heroku Hosted Site](https://jobhound-1-mhs.herokuapp.com/)

[Back to Top](#top)
<a id='apis'></a>

[Back to Top](#top)
# APIs

Note that there's a good chance this section will not be necessary.

[Back to Top](#top)
<a id='future-plans'></a>

# Future Plans
* Allow user to alter basic user data (name, etc) after Mongoose automatically creates a user in the user database.
  * Will need to branch the login process to not overwrite data if the user already exists per a matched `req.user.GoogleId` value.
* Use `.catch(err => [stuff])` to add error handling to controller functions.

[Back to Top](#top)
<a id='contribute'></a>

# Contribute

[Back to Top](#top)
<a id='special-thanks'></a>

# Special Thanks

[Back to Top](#top)
<a id='appendices'></a>

# Appendices

[Back to Top](#top)
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