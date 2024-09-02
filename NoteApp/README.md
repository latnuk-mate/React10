
<!-- Write what i learnt throughout this project. -->
# What I Learn!
In this project,  I learnt so many things in React, like some new concepts such as split wrapper in React and implement a markdown Editor. While building this project there were many major issues; for instance, creating/updating notes in the editor and display this in the sidebar, and other stuffs like integrating firebase (firestore) to save or render notes in real time.
I used firebase firestore as my database to keep notes stored, Though, Firebase was completely new to me & was somewhat unintelligible to deal with the data. but I learnt firebase firestore several functions like,
create, read, update, delete data efficeiently.

<!-- explain every little things like, modules, effects and clean up function their usecases. -->
# Every little thing
This Project taught me some deep concepts in React' sideEffects. i.e:- using effects to process data effectively. Especially when updating or writing notes in real time, we use effect to manage this.
also experinced with sideEffect' clean-up functions, event cancellations when getting multiple request within the block time, and obviously importance of clean-up functions in React' sideEffecfs.

This project requirements were getting a Editor and also implement something new, so I chose react-split to create a split effect in the app which basically creates resizable window for the components.

react-mde for the markdown, "mde" is not fully compatable with latest version of react, so when installing the module I encountered several package related issues.

<!-- explain the debouncing logic. -->
Here, in my program, I used a debouncing technique, where to preventing memory leak issues caused by any unnecessary task or listeners those are working in the background even if the app is closed.
as an example, I used OnSnapshot function from firestore which is a listener that constantly watching data for change, each change will hit the database and run a query to perform CRUD operation, like using a cleanUp function in sideEffects we prevented memory leaking issue. This cleanup here will terminate  each onSnapshot event in this case that's basically a delay to update data, if another event is occured before the previous event is completed then it will remove the previous one and add a new event.

<!-- experience about using firebase(database), cloud store, firestore, real-time-updates. -->



<!-- some TODOs -->

<!-- 
finished writing the dashboard section, pick up some good color for the UI.

-->