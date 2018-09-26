# React Immersive Code Challenge

## Instructions

React appthat displays list of recent bank transactions.


component `<AccountContainer />` imports transactions from `src/transactionsData`
Use this data to get the functionality of the app working

Once that is complete, you can replace that initial state with data you fetch from [this provided API endpoint](https://boiling-brook-94902.herokuapp.com/transactions).


 ## Deliverables

**Please implement the following user stories:**
- see a table of transactions.
- enter text into input field & dynamically filter list of transactions by either description or category as you type

![example project](https://s3-us-west-2.amazonaws.com/curriculum-content/immersive_assessments/react-challenge.gif)

Use the above gif as an example of how the app should function.


If you are unfamiliar with HTML tables, take a look at the [docs with an example here](https://www.w3schools.com/html/html_tables.asp)

1) Get list of Transactions to display on page given the transactions data being imported
2) After that is working, replace that data with the JSON you fetch from this url [https://boiling-brook-94902.herokuapp.com/transactions](https://boiling-brook-94902.herokuapp.com/transactions). It will be in the same format as the  default data.


3) Now that you are using the real data, ensure that the user typing into the input field can appropriately update the state

4) Using the state of the user input and the list of transactions, figure out how to render only the transactions that include the entered text in either the *description* or *category*


## Criteria

We’ll be evaluating your code based on the following criteria:
- **React Components:** Does the app reasonably separate responsibilities into components and a have a component hierarchy?
- **Props:** Does the app have at least one presentational component that receives props? Does the app pass props down from a higher-level component to a lower one? Does the app make use of passing a functional prop?
- **State:** Does the app have a search input that responds to changes and calls this.setState?
- **Lifecycle Methods & API:** Does the app make an AJAX request to the API and return data? Does it set the state of the component within the app with that data within a lifecycle method?
- **Feature:** Does the app filter the list of transactions?
- Does the app follow best practices regarding state and component composition?


Good luck!

<!---[Backend Rails API](https://github.com/learn-co-curriculum/immersive-assessment-react-backend)-->
