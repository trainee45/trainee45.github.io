//TableNotesVer19.js derived from
//latestTableNotesVer19.js Feb 14 2021
//WORKING ON EDITdate in table and preserving in notes Feb13.Fixed So far works Feb 14 2021
//TableNotesVer19.js
////trying to erase record rows for editing new table Feb12
//still testing..think it works OK FEB 12
//while (rows.firstChild) {
  // rows.removeChild(rows.firstChild);
//}//end while
//REMOVE ABOVE IF MESSED UP FEB 12
//FIXED: showExtraField Btn label in preferences now is correct for initial load.
//DatemessWithTableNotesVer18.js DATE: FEB 9 2021 fixed edit table DATE-TIME
//fixed edit table being messed up after a call to deleteField because numberOfAdditionalFields is saved in OtherVariablesArray. For this reason future testing requires use of dB dated Feb 5 or later as otherwise the numberOdAdditionalFields variable will not have been adjusted properly after a deleteFImelda!!
//fixingDeleteFieldmessWithTableNotesVer18.js
//messWithTableNotesVer18.js Feb 2 2021Jan30 2021 This version has deleteField!
//working on deleteField ALL CHANGES HERE MUST BE ADDED TO TableNotesVer18.js
//Jan25.Added space after >in tableTitle and now works for search and delete. Keep trouble shooting. Start ver18 with ability to delete fields!
//FIXED CASE SENSITIVE AND REPEAT REGISTERING OF addEventListener in search!! Jan24
//been working on repeat registration of addEventListener which I am trying to stop. Keep resultList.appendChild(addP); for asthetics reasons left off here Jan 22
//Things to work on:1.Try changing addEventListener to object.ondblclick in displayTable edit TD cell to avoid repeating alerts..As of Jan 18 issue ?fixed? But I DON't think I did anything???NOT FIXED..look at removeEventHandler method 2.Increase height and width of add new note screen and table display screen to look better in Safari 3.In edit table recode to avoid appearance of scrambled table during input of changes to tableJan18 Fixed 3!and fixed issue of non-responding search screen when coming from first view of table
//Still to do: 1. In EDIT, remove field. 2. Investigate remove addEventListener method to prevent repeats of alerts3. Adjust height of add new record window 4. Fix double tap bug that repeats input screen if you dbl tap twice 5. Add option for case sensitive search...to lowerCase()
//noteIDSearchTableNotesVer16 derived from
//Copy of SearchTableNotesVer16.js Jan 8 2020 Dec29 fixed delete record and table record bug by adding noteId to each record
//Creates a found record list as history. Double tap on list item to see full view of record notes. Next work on highlight entry in table Jan 9 2020 DONE! Jan 9 Jan10 when trying to preload searchRecordInput from title in viewFullItem I get a crash of program..just stops running FIXED JAN11 2021 UPDATED Table if notes edited Jan12
//fudgeFactor to unworkable try appendinG noteID to tableTitle!!! Jan7 
//in refreshBtn.onclick code I added:refreshed = 0; //ADDED JAN 2 2021
//derived from .. in Taio tryThisdeleteRecordTableNotesVer15
//add note deleted indicator and option not to delete record from table and continue deburging edit etc
////if refreshed not set to 1 then field headings will repeat when going to display table, but if at 0 a rerun will recreate the field headings which is what you want. So maybe add line refresh = 0 on return from displayTable .see below. Changed NoteId-2 to counter in displayData, and used tableTitle.indexOf in deleteItem for record table delete to properly find record in tableTitle array. Left off here Dec 18 FIND WHERE DISPLAYDATA NEEDED AFTER RETURN TO HOME SCREEN,!! I put a call to preferences window in code after saveVariables call from displayTable. There would sometimes be a blanK screen when returning to Home Screen after a savETable Btn press when viewing the table after a deleteRecord
//deleteRecordTable toes er15.js
//experiment2TableNotesVer15.js
//this version successfully deletes a record and then recreates the table..but then if adding a new record after that it screws up!
//TableNotesVer15.js
//in delete record frame add option to delete record in table if table exists.try just going to refreshTable()?
//fixDisplayTableOnTableNotesVer14.js
//added title secondField Nov 25 2020

//write a function to edit first and second data field contents to make suitable for table display working on this now Nov 28 DONE! Uses : to demarcate the default table entry. Nov 29 2020
//refine the input for edit table to add additional fields..DONE NOV 26
//getThisToWorkingOnTableNotesVer14.js and fall back to: THIS CODE SAVED AS fallBackNov15TableNotesVer14.js
//fixed displayTable to show fields correctly  after an edit table Nov 15
//workingOnTableNotesVer14.js
//makeChanges WORKS! So make edit follow the makeChanges code path.. If tappinG on createTableWindow.onclick make two paths depending on tableExists
//fixed adjustment of tableArray to allow creating any number of records from the start
//this version requires 3 records entered first then a refreshTable call redefines the tableArray for adding additional records. Ver12 fixes this!Now need to save originalNumberRecords variable so if you rerun and add a record table gets updated properly
//from :buildRecordRowsExperimentrefreshTableNotesVer11.js Date: Oct 28 2020
//dataVfromWorks!Oct18TableNotesVer10 copied from:
//fallBackKeep2Oct24TableNotesVer10.js
//derived from:
//dataVfromWorks!Oct18TableNotesVer10.js
//this version works for rerun prexisting db; onupgradeneeded not tested. tableDisplay code after a rerun not written yet in this version
//the one I am working on
//going to duplicate variables2 with dataV and put in notes_os. note have changed dataV to dataVobj to distinguish from dataV: in objectStore setup
//dataVobj compares to variable2Array, and dataV: compares to variable2:
//Copy of Works!Oct18TableNotesVer10.js
//this works..but dataV not put into notes_oss admin record yet. USE THIS FILEc TO FALL BACK ON IF HAVING TO START AGAIN FROM SCRATCH,!!!?,?,?!!!!!!

//getThisToWorkTableNotesVer10.js
//based on Use!ThisExperimentTableNotesVer10.js
//now trying to correct tableTitle.length is undefined in function buildRecordRows () 
//Use!ThisExperimentTableNotesVer10.js
// Create needed constants

//for testing in Textastic, ifnthe db is new and does not previously exist, then onupgradeneeded will run to set up a new db
//set the testing variable to true, otherwise false
//However if db-notes already exists, but an object store is missing (a version created before I wrote code for the notesVariables_os,) then set variable os to 0 to create both _os; set os = 1 to create just the notes_os; set os = 2 to create just the notesVariables_os

//All theories above dn't work. If lost, force onupgradeneeded by changing the db name to something else. I have changed notes_db to notes_dbx. use search and replace
let testing = false; 
let os = 2; 
let noteNumber;
let deleteRecord = 0;//flag to indicate a record has been deleted so as to avoid going to buildRecordRows in refeshTable() Dec 6
const main = document.querySelector('main')
const list = document.querySelector('ul');
const cvValues = document.querySelector('#cvValues');//ul for settings screen
const record = document.querySelector('section.note-display');
const editWindow = document.querySelector('#editWin');
//reference the xtraFied window for editing

//+reference the deleteWindow here
const deleteWindow = document.querySelector('#deleteWin');
//reference the search window
const searchWindow = document.querySelector('#searchWin');
const displayFullNote = document.querySelector('#displayFullNote');
const settingsScreen = document.querySelector('#settingsScreen');
const addNoteWindow = document.querySelector('#new-note');

const titleInput = document.querySelector('#title');
const bodyInput = document.querySelector('#body');
//the form element in the new note section of the HTML which contains 2 input elements
const form = document.querySelector('form');
//the button titled Create new note is the only button without id in the form section of the HTML and so the submitBtn references the Create new note button. but not used because form.onsubmit does its job
// const submitBtn is mentioned twice must be a conflict. submitBtn.onclick only occurs in the create table section.
//!!!!!!!!!
//const submitBtn = document.querySelector('form button');
//!!!!!!!!!!
const notifyP = document.createElement('p');//declared here so variable is recognized by clear preferences function=
notifyP.setAttribute('class', 'attentionBtn');
//instruction p in create new note for the xtraField..see section.form new-note HTML
//const dateP = document.createElement('p.date');//made global so recognized in preferences dateColorBtn..but now does not show in each instance of displayData..only the last iteration!!
const instructionPxtraFieldData = document.querySelector('#instructionP');
const inputXtraFieldData = document.createElement('input');

const creationDateBtn = document.querySelector('#creationDate');
creationDateBtn.setAttribute('class', 'attentionBtn');
const dateColorBtn = document.createElement('button');//see function viewCreationDate
//references for new, tables, manage, search
const newDBBtn = document.querySelector('#new');//HTML button in menu
	newDBBtn.disabled = true;
	
const tableScreenBtn = document.querySelector('#tableScreenBtn');//HTML button in menu to go to tableScreen window
const tableScreen = document.querySelector('#tableScrn');//reference the create a table window
const showTable = document.querySelector('#tableWin');//div HTML section id="tableWin" should this be referenced earlier because clearTableWin useS it at line 3003
const manageBtn = document.querySelector('#manage');//HTML button in menu to go to manage window
	manageBtn.disabled = true;
const searchBtn = document.querySelector('#search');//HTML button in menu to go to search window
//SyntaxError: Cannot declare a let variable twice: 'searchBtn'. so I removed let
	//searchBtn.disabled = false;
const searchTitleInput = document.querySelector('#inputSearchRecord');//input for what record to search for in searchRecord function
let caseSensitive = false;	//make global
let searchCaseSensitive = 0;	//make global
let tableDateTime=true;//flag show time in DATE cell of table
let dbName;//global variable for database name..currently notes_dbx
let noteListItemColour;
let noteTitleColour;
let bodyColour;
let xtraFieldColour;
let fontColour;
let toggle = 0;
let boggle = true;//used instead of toggle in viewCreationDate because it messed up fontColor (I had toggle changing from NUM to Boolean)
let togglex = 0;
let toggley = false;//only works everyothertime
let showExtraField = 0;//in options to hide or show extra field
//let counter = 0;
let counter;
let date;
let noteDate = false;
let viewDateWritten = false;
let dateShade = "black";//see viewCreationDate and displayData
let newField = false;//not sure this is used?
let newFieldCounter = 0;
let xtraField = 0;//might this just have to be let xtraField so all is controlled by having run addField section..otherwise starts from scratch if reloading db???
let newFieldName;
let ver = 1; //changed version variable from 1 to 2 to trigger onupgradeneeded event in order to create the 'notesVariables_os' object store
let newItem;
let xtraFieldData;
let setup = 0;//in displayData if no first note for admin. used to hide display of first note
let viewedThis = 0;//to show on first run notice only once .. line 327
let doneOnce = 0;//in viewCreationDate to remove extra dateColorBtn
let upgraded;//for first run of notes db guide on upgrade needed and save and get database name
let renewed = 0;//variable in refreshTable()to create header row in displayTable when coming from refrehTable
let editNote = false;//flag to force update table if notes edited
let numberOfCVtoList=5;//view settings
//if further trouble, REMOVE THE LINE BELOW !! it causes 'attempting to assign to a readonly property error!!'.OR remove line below and replace instances of dbTableName.value or .textContent with simply dbTableName!!???..but then I don't know where dbTableName variable is declared? i forgot ;
let tableExists = 0;//to enable or disable display table button .. TO TEMPORARILY DISABLE THE tableExist variable remove it from the variable2Array. changed tableExists variable to disabledTableExists in load and get dataBaseName so Add3TableNotesVer9.5 would run correctly. Change back when needed

let 
   	variable2Array = [setup,noteListItemColour, noteTitleColour, bodyColour, xtraFieldColour, fontColour, tableExists];
	let disabledTableExists = 0;//remove when needed!!!!!!
	
	//THESE VARIABLES FOR TABLE SECTION

	//ReferenceError: Can't find variable: nextFieldName
	//bring these variables upfront to declare
	
	//let newFieldName;//title of 2nd field
	let nextFieldName;//title of subsequent fields as determined by input in a for loop
	let numberOfFields;//the counter to use in the for loop
	let numberOfAdditionalFields;//number of new required fields
	let moreFields = 0;//add more dynamic fields in edit table
// 	let tableTitle;
// let paraBody;
// let displayXtraFieldData;
// 	//ReferenceError: Cannot access uninitialized variable.
// let otherVariablesArray = [tableExists,showExtraField,nextFieldName,numberOfFields,numberOfAdditionalFields,tableTitle,paraBody,displayXtraFieldData];
// let variable3 = "more variables here";
//TABLE SECTION VARIABLES
let recordCounter = 50;//to declare tableArray with a fixed number of records. Hoping to correct error in buildRecordRows re tableArray[][] undefined is not an object??
let tableTitle = [];
let searchedRecordTitle = [];
//let tableTitle = ['CN6035', 'CN3205', 'CN6700'];//tableTitle array needs to be created in dbNotes?
	let XtableTitle;//remove when tables fixed!!!!
//let paraBody;
//let XparaBody;
//let displayXtraFieldData;
//let XdisplayXtraFieldData;
let paraBody = [];

//let paraBody = ['Y2Trk2','Y3Trk2','Y3Trk8'];
let displayXtraFieldData = [];
//let displayXtraFieldData = ['TSU-1100','Econami-PNP','TSU-1100'];
	//all above will be variables from IndexedDBNotes
	//create the 2D array tableArray
	var tableArray = new Array(recordCounter);

//for (var i = 0; i < recordCounter; i++) {
	
for (var i = 0; i < recordCounter; i++) {

tableArray[i] = new Array(numberOfFields);

}//number of fields means all fields

//create fieldNamesArray
let fieldNamesArray = [];
	//ReferenceError: Cannot access uninitialized variable.
let fieldOption = [];	
let fieldDeleted = false;//flag to make displayTable show the field header with the field removed Feb 2 2021
let buildingTableArrays = 0;//this variable enables displayData to construct the tableTitle and paraBody and displayXtraFieldData arrays ? May not need???
let dateTable = [];//date array used in creating table. Note how this array is declared variable array name = []
let originalNumberRecords;//used to give option of refreshTable

//variables used in refreshTable	
let	originalNumberOfFields = numberOfFields;
let	addedNumberOfRecords = tableTitle.length-originalNumberRecords;
let	currentNumberOfFields = fieldNamesArray.length;
let fromMakeTable = 0;//to prevent warning in displayData from popping up if displayTable btn tapped after a table has been creates..see displayTable
let displayedTable = 0;//to prevent fieldNames repeating after repeat calls to displayTable via displayTableBtn
let tableConstructed = 0;
let DTBtnTappedOnce = 0;//flag to disable or enable edit and deleteField buttons also used in displayTable
let editCurrentTable = 0;//so displayTable workS correctly when editing a table that pre-exists
let deleteTableRecord = 0;

let otherVariablesArray = [tableExists,originalNumberRecords,nextFieldName,numberOfFields,numberOfAdditionalFields,tableTitle,paraBody,displayXtraFieldData];
let variable3 = showExtraField;
let key;//can remove if myKey works
let myKey = 1;
let keyPath;
let searchNote = 0;//searchRecord code
let fromSearchRecord = false;
let noteId;
let fudgeFactor = 1;//to correct for adding record after a delete when doing search may not need MiGht eraseh
let matchedRecordIndex;
let fromFullViewItem = false;//used for proper creation of table view after a fullItemView
let fromDeleteField = false;//to add field headers back on if going to displayTable from deleteField
//add tableArray here

//dataVobj will compare to variable2Array, and dataV: will compare to variable2:

//tableArray = [["CN7035", "Oct 20 2020 22:21","Y2Trk2","TSU-1100","5","128","255"],["CN3205", "Oct 20 2020 22:21","Y3Trk2","Econami PNP","15","128","255"],["CN6700","Oct 20 2020 22:21","Y3Trk8","TSU-1100","77","130","190"]];	
	
let	dataVobj = {
  tableArray: tableArray,
  fieldNamesArray: fieldNamesArray,
  otherVariables: otherVariablesArray,
  variable3: variable3
};//end declaration of dataV object
//THESE VARIABLES ABOVE FOR TABLE SECTION	
	//THESE VARIABLES ABOVE FOR TABLE SECTION	
	
const dbTableName = document.querySelector('#dbTableName');//global variable for database table name title..currently NOTES references h2 in note-display section of main HTML

dbTableName.value = "Notes";
//preferences section. preferences.onclick takes you to the preferences function that in turn contains functions for each option

//the menu section nav element above main

const settingsBtn = document.querySelector('#settings');
	const aboutDBWindow = document.querySelector('#aboutDBWin');//see line 631 for aboutDBWindow code
const prefWindow = document.querySelector('#prefWin');
//see 535 lines for continuation of preferences code
//add note code
const addNoteBtn = document.querySelector('#add');
//addNoteBtn.onclick references the Add Note button in the NAV menu, which takes you to the create note screen. the create note button is referenced by the form button in html, this being the only button in the html form section. so tapping create new note button means form.onsubmit which takes you to add data function.
const aboutDBBtn = document.querySelector('#aboutDB');

//load and save

const loadBtn = document.querySelector('#loadDB');
const saveBtn = document.querySelector('#saveDatabase');//see line 631 for aboutDBWindow code
//loadBtn.disabled = false;
//saveBtn.disabled = true;//change back to false if messed up
addNoteBtn.setAttribute('class','attentionBtn');
let today = new Date();
let todayS = today.toString();
let todayString = todayS.slice(3, 21);
//alert('todayString = ' + todayString);
//let todayDate = today.slice(1,20);

//variables for TABLE SECTION
//let tableExists = 0;//to enable or disable display table button. this variable is declared ahead of otherVariable array to be recognized in otherVariables so can remove it here?


//determine which db to load
//leave this line in ?

//document.getElementById("dbTableName").innerHTML = dbTableName;//there was a } here why.??

if (!window.indexedDB) {
    console.log("Your browser doesn't support a stable version of IndexedDB. Such and such feature will not be available.");
}

if (window.indexedDB) {
    console.log("Your browser supports a stable version of IndexedDB. Should work.");
}

// Create an instance of a db object for us to store the open database in. A variable called db will be used to store an object representing our database. We will use this in a few places, so we've declared it globally here to make things easier.
let db; //global variables
let data;//I added this during testing? may not need ?
let tableNeedsUpdate = false;//flag to prevent error if returnToNotes Btn is tapped in create table window
//let dataV;//see above
//let dbName;//global variable for database name..currently notes_dbx


//write all of our subsequent code inside this window.onload event handler function, called when the window's load event fires, to make sure we don't try to use IndexedDB functionality before the app has completely finished loading



window.onload = function() {
	editWindow.setAttribute('class','hidden');
  deleteWindow.setAttribute('class','hidden');
displayFullNote.setAttribute('class','hidden');
prefWindow.setAttribute('class','hidden');
tableScreen.setAttribute('class','hidden');
tableScreen.setAttribute('style','background-color: red');
searchWindow.setAttribute('class','hidden');

	

// Open our database; it is created if it doesn't already exist
	//window.indexedDB.open('NAME OF DATABASE', version #);
// (see onupgradeneeded below)
//a request to open version 1 of a database called notes_dbx. The version number is important. If you want to upgrade your database. If this doesn't already exist, it will be created for you by subsequent code. Database operations are asynchronous.
//The call to the open() function returns an IDBOpenDBRequest object with a result (success) or error value that you handle as an event. Create a request object (which can be called anything you like — we called it request so it is obvious what it is for). You then use event handlers to run code when the request completes, fails, etc.
//code could look like this: const dbName = "the_name";  var request = indexedDB.open(dbName, 2);
//code for xtraField adds ver instead of 1


//TO RESET DATABASE!!!!!!!!!!!?,?,!
//deleteDataBase();

//code to run to delete database..so can reset?


function deleteDataBase () {
var DBDeleteRequest = window.indexedDB.deleteDatabase("notes_dbx");

DBDeleteRequest.onerror = function(event) {
  console.log("Error deleting database.");
};
 
DBDeleteRequest.onsuccess = function(event) {
  console.log("Database deleted successfully");
    
  console.log(event.result); // should be undefined
};
}//end function deleteDataBase


alert('version = ' + ver);
let request = window.indexedDB.open('notes_dbx', ver);
//The result (meaning success) for the open function is an instance of an IDBDatabase.
//The second parameter to the open method is the version of the database. The version of the database determines the database schema — the object stores in the database and their structure. If the database doesn't already exist, it is created by the open operation, then an onupgradeneeded event is triggered and you create the database schema in the handler for this event. If the database does exist but you are specifying an upgraded version number, an onupgradeneeded event is triggered straight away, allowing you to provide an updated schema in its handler



//event handlers
// onerror handler signifies that the database didn't open successfully. The request.onerror handler will run if the system comes back saying that the request failed.
request.onerror = function() {
  console.log('Database failed to open');
};
//the handler function code acts on the target of the event listener which in this case is the request object.
// onsuccess handler signifies that the database opened successfully
request.onsuccess = function() {
  console.log('Database opened notes_dbx successfully. request.onsuccess of first request open db. setup variable = ' + setup);
//probably come here after addField??
  // Store the opened database€ object in the db variable. This is used a lot below. an object representing the opened database becomes available in the request.result property, allowing us to manipulate the database. store this in the db variable .
  db = request.result;//result (the database) is a member of the requst object

  //if testing 
  
//   if (testing) {
	
//  if (os === 0 | os === 1) {
//   let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });
  
// //the method to use to delete an objectstore is : 'deleteObjectStore(name);'
// //to close an objectstore 'close() - close object store'
//   //can I use this section to save vatiables xtraField and newFieldName?? do I need separate objectstore lines?
//   	/*	xtraField: 'xtraField',
// 		newFieldName: 'newFieldName', */
		
//   objectStore.createIndex('title', 'title', { unique: false });
  
//   //addind date of note creation
//   objectStore.createIndex('created', 'created', { unique: false });
//   //end code for adding date created
//   objectStore.createIndex('body', 'body', { unique: false });
//   //CODE FOR xtraField basically substituting xtraField for body
  
// 	  objectStore.createIndex('xtraField', 'xtraField', { unique: false });
//   objectStore.createIndex('variable1', 'variable1', { unique: false });
//   objectStore.createIndex('variable2', 'variable2', { unique: false });
  
// }//end if os === 0 | os === 1

//  //code for saving table variables
//   //this won't run unless .onupgradeneeded
//  if (os === 0 | os === 2) {
//  let objectStoreV = db.createObjectStore('notesVariables_os', { keyPath: 'id', autoIncrement:true });
// //should autoIncrement be false???!!!!!..no because that gave an can't resolve id pat Higgins for us error. if true I can use get(1) to open the _os.
//   objectStoreV.createIndex('tableArray', 'tableArray', { unique: false });
  
//  //field names
//   objectStoreV.createIndex('fieldNamesArray', 'fieldNamesArray', { unique: false });
//   //other variables
//   objectStoreV.createIndex('otherVariables', 'otherVariables', { unique: false });
// //if you need another section
// objectStoreV.createIndex('variable3', 'variable3', { unique: false });
// //maybe variable3 should be added to notes-os and all variables put in it?..think not so all this data is not saved with every record?
//  //end code for saving table variables
 
//    console.log('In onupgradeneeded. Database setup complete. Now returning to .onsuccess handler of open database event? upgraded variable about to be set to 1. ');
// }//end if os === 0 | os === 2

//   //If the onupgradeneeded event exits successfully, the onsuccess handler of the open database request will then be triggered.Next run of program should run without triggering onupgradeneeded. but note that ver will have to be 9 because otherwise can't find db and on error is triggered
//   //after onupgrade needed code goes back to open db!! line 117
 

	
// }//end if testing



 //moved getDataBaseName before the saveVariable segment to restore database to saved version otherwise it starts afresh
	console.log('setup = ' + setup + '  going to getDataBaseName to see if there is a prexisting database!');
	getDataBaseName();
//get dbTableName
//if (setup === 1) {
	
	//code below moved to end of getDataBaseName so that saveVariables does not reset all variables to initial values after loading in a pre-existing db
	
/*
	if (setup===0) {
		console.log('At setup = 0. just added brackets to the function call. If upgraded === 1 or setup === 0 should go to saveVariables. If saveVariables not done then first addNote fails because first child has not been created by saveVariables and first addNote is not displayed! upgraded = ' + upgraded + '. setup = ' + setup);
		//remove line below if screw up
		//displayData below is not the answer because this makes 2 iterations of the first (really the second) note.
		//displayData();
		//!!! no brackets after saveVariables function so it didn't go there? ?ok not to have brackets if variable = function call, but NOT if just calling the function????!!! Yes now works after adding brackets to function call!
		//TOOK OUT SAVEVARIABLES HERE !!!!
	if (upgraded === 1 | setup === 0) {
		saveVariables();
		}//end if upgraded
		
	}//end if setup=0 
*/	


	
//came back here from saveVariables before saveVariables changed setup to 1. (setup still 0)	
//  }//end if setup ===1
console.log('At end of request open notes_dbx');
  
//!!!!!!!!!!! might need to replace displayData here and remove it from saveVariables???or just put it in getDataBaseName? what happens when returning from addField..does data display?
  //displayData();
  //getDataBaseName();
//!!!!!!!!
};//end request.onsuccess handler function .. a success event has triggered the success callback; 


request.onupgradeneeded = function(e) {
 //onupgradeneeded is the event, and the request object is the target of the event handlers function code.
//onupgradeneeded is the only place where you can alter the structure |of the database. In it, you can create and delete object stores and build and remove indices.
	// Grab a reference to the opened database from the event target's result property which is the request object.(request.result)
  let db = e.target.result;
  
  //ConstraintError: Failed to execute 'createObjectStore' on 'IDBDatabase': An object store with the specified name already exists.
  //createObjectStore won't execute if the os already exists
  
  // instead of commenting out the original I put the original in an if statement that runs if ver =1, and the code to create the notesVariables_os in an if ver = 2 section
  
  //maybe should be if (ver = 1 | 0) (OR) and the second create os if (ver === 2| 0) so that a newdb will create both os??
  //this won't run unless .onupgradeneeded and if the _os already exists it won't overwrite..will produce an error and program stops. therefore in this case of ver9 db I put the if ver ===1 statement here to skip this code and moveon to creating the notesVariable_os .. see below. 
 //if (ver === 0) {
  let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });
  
//the method to use to delete an objectstore is : 'deleteObjectStore(name);'
//to close an objectstore 'close() - close object store'
  //can I use this section to save vatiables xtraField and newFieldName?? do I need separate objectstore lines?
  	/*	xtraField: 'xtraField',
		newFieldName: 'newFieldName', */
		
  objectStore.createIndex('title', 'title', { unique: false });
  
  //addind date of note creation
  objectStore.createIndex('created', 'created', { unique: false });
  //end code for adding date created
  objectStore.createIndex('body', 'body', { unique: false });
  //CODE FOR xtraField basically substituting xtraField for body
  
	  objectStore.createIndex('xtraField', 'xtraField', { unique: false });
  objectStore.createIndex('variable1', 'variable1', { unique: false });
  objectStore.createIndex('variable2', 'variable2', { unique: false });
  objectStore.createIndex('dataV', 'dataV', { unique: false });
   //createIndex() takes an optional options object that refines the type of index that you want to create
   //Additionally, indexes have the ability to enforce simple constraints on the stored data. By setting the unique flag when creating the index, the index ensures that no two objects are stored with both having the same value for the index's key path. So, for example, if you have an object store which holds a set of people, and you want to ensure that no two people have the same email address, you can use an index with the unique flag set to enforce this.
   
   //PLAN FOR XTRA FIELD: Create xtraField (body), xtraField (body). use if xtraField true create a string with first line fieldName rtn then data input from entry. version number will be set to 2 to trigger onupgradeneeded
//}//end if ver === 1

 //code for saving table variables
  //this won't run unless .onupgradeneeded
 //if (ver === 0) {
//  let objectStoreV = db.createObjectStore('notesVariables_os', { keyPath: 'id', autoIncrement:true });
// //should autoIncrement be false???!!!!!..no because that gave an can't resolve id pat Higgins for us error. if true I can use get(1) to open the _os.
//   objectStoreV.createIndex('tableArray', 'tableArray', { unique: false });
  
//  //field names
//   objectStoreV.createIndex('fieldNamesArray', 'fieldNamesArray', { unique: false });
//   //other variables
//     //should this read 'otherVariables', 'otherVariablesArray' and declare otherVariablesArray at top??
//   objectStoreV.createIndex('otherVariables', 'otherVariables', { unique: false });
// //if you need another section
// objectStoreV.createIndex('variable3', 'variable3', { unique: false });
// //maybe variable3 should be added to notes-os and all variables put in it?..think not so all this data is not saved with every record?
//  //end code for saving table variables
 
   console.log('In onupgradeneeded. This means db_name not found and a new database is being created. (volatile memory of Trpextastic cache?. The ver # was not changed..still ver= ' + ver + '. Database setup complete. Now returning to .onsuccess handler of open database event? upgraded variable about to be set to 1. ');
//}//end if ver === 9

  //If the onupgradeneeded event exits successfully, the onsuccess handler of the open database request will then be triggered.Next run of program should run without triggering onupgradeneeded. but note that ver will have to be 9 because otherwise can't find db and on error is triggered
  //after onupgrade needed code goes back to open db!! line 117
  upgraded = 1;
 // saveVariables();//firstDifference from fallBack
};//end request.onupgradeneeded handler

//if (setup === 1) {getDataBaseName();}

form.onsubmit = addData;//from addNote window
saveBtn.onclick = saveVariables;
loadBtn.onclick = load;
tableScreenBtn.onclick = tableScreenOptions;
searchBtn.onclick = searchRecords;
//now what happens when no notes and we go to add note btn returning to addData function??

// Define the addData() function
function addData(e) {
	console.log('At addData');
//maybe setup = 1 should be here. Otherwise you can add a new note to a new db but not be able to see its variables
//!!!!!!!REMOVE setup=1 if not working!!!!!!
//setup = 1;
//!!!!!!
addNoteWindow.setAttribute('class','hidden');
//is above line needed?? YES. THIS CLEARS THE ADD NOTE WINDOW FROM addNoteBtn.onclick line 815?
  // prevent default - we don't want the form to submit in the conventional way
  //e.preventDefault triggers undefined error if addData runs without form.onsubmit so put it in a conditional e is the event of the event handler form.onsubmit in this case so undefined if not comming from the form.onsubmit handler.
  
  
  //do I need if setup = 0? and to declare dataV again. I don't think so??
  
   
//  if (setup === 0) {
// 	 //construuct dataV object
// 	otherVariablesArray = [tableExists,showExtraField,nextFieldName,numberOfFields,numberOfAdditionalFields,tableTitle,paraBody,displayXtraFieldData];
// 	otherVariablesArray[1] = showExtraField; 
	 
// 		dataV = {
//   tableArray: tableArray,
//   fieldNamesArray: fieldNamesArray,
//   otherVariables: otherVariablesArray,
//   variable3: variable3
// };//end declaration of dataV object 

 if (counter > 1) {
	  e.preventDefault();
 }
 
today = new Date();
todayS = today.toString();
todayString = todayS.slice(3, 21);
alert('todayString = ' + todayString);
  //code to add date to title.input
  if (noteDate) {
	  titleInput.value = titleInput.value + ' ' + date;
	  noteDate = false;
	  addDateBtn.disabled = false;//enable addDateBtn so it is ready to accept a date for next use of addNote
  }//end if noteDate
  
  // grab the values entered into the form fields and store them in an object ready for being inserted into the DB
  
  //new code for xtraField
 // alert('value of xtraField = ' + xtraField);
/*  if (xtraField) {
	  xtraFieldInput.value = newFieldName + ': \n' + xtraFieldInput.value;
	 let newItem = { title: titleInput.value,
		 created: new Date(), body: bodyInput.value, xtraField: xtraFieldInput.value}; 
  }//end if xtraField*/
  
  //if xtraField does not get set then make xtraField = 0. otherwise at line add new Item generates an insufficient data error
  
  if (xtraField !==1) {//was>1
	  xtraField = 0;
	  
  }//end if xtraField !=1 or 0
  
  if (xtraField === 0) {
	  //necessary because if at start there is no extra field then new Item provides insufficient data
	  //DataError: Provided data is inadequate.line 277
	  xtraFieldData = ' ';
	  xtraField = 0;
	  newFieldName = ' ';
	//  alert('here we are at !xtraField');
	//let removed !
	//changed created: new Date to todayString
	//if coming here from else code of displayData..setup = 0, no cursor on first run of program, titleInput.value will have been set to value of xtraField variable ..we are creating the admin first record
	     newItem = { title: titleInput.value,
		  created: todayString, body: bodyInput.value, xtraField: xtraFieldData, variable1: dbTableName.value, variable2: variable2Array, dataV: dataVobj};
		  //changed variable2: setup to variable2Array
		  
		  //dataVobj will compare to variable2Array, and dataV: will compare to variable2:
		//  alert('newItem title reads: ' + newItem.title);

  }//end if
  //end of code for xtraField
  
 
 
 //xtraFieldData = inputExtraFieldData.value;
// alert('value of xtraField = ' + xtraField);
 
	//  alert('here we are at !xtraField');
	
		//  alert('newItem title reads: ' + newItem.title);

else if (xtraField === 1) {
	//for the sake of table appearance I replaced line below with: Nov 25 2020
	xtraFieldData = inputXtraFieldData.value;

	//xtraFieldData = newFieldName + ': \n' + inputXtraFieldData.value;//+ xtraFieldData maybe should be + inputExtraFieldData.value;
	//changed created: new Date to todayString
	  newItem = { title: titleInput.value,
		 created: todayString, body: bodyInput.value, xtraField: xtraFieldData, variable1: dbTableName.value, variable2: variable2Array, dataV: dataVobj}; 
		 	  //changed variable2: setup to variable2Array
		 //in displayData if xtraFieldData != "" append hild listItem
	//should this be xtraFieldData
	
}//end else if xtraField ===1


 // alert(newItem);
  let transaction = db.transaction(['notes_os'], 'readwrite');
  
  let objectStore = transaction.objectStore('notes_os');

  // Make a request to add our newItem object to the object store. Add the new record to the database. This creates a request object, 
 // alert('about to add newItem');
 //when coming here from addNote without setting anything in preferences and starting with no notes this error is generated..DataError: Provided data is inadequate.
 
 //DataError: Provided data is inadequate.
 
 //??????I think changing xtraField variable to 1 in preferences then saving fixed this error???????
// alert(newItem);
  let request = objectStore.add(newItem);
  
//Other methods: Methods returning IDBResult (range may be used instead of key where applicable):

/*add(value [, key]) – adds a new record into database put(value [, key]) – updates/adds a record delete(key) – remove entries, clear() – removes all entries count([key]) – number of records in object store get(key) – retrieves data from object store openCursor([range] [,direction]) – creates cursor to iterate read-only transaction → all changes cause ReadOnlyError

Methods working with indexes:

parameters – object may set unique or multiEntry true

idx = index(name), deleteIndex(name) */
  //The result of a request generated from a call to add() is the key of the value that was added.
   //look uo 'for each' the code might be useful here?:
  /*customerData.forEach(function(customer) {
	  var request = objectStore.add(customer);*/
  request.onsuccess = function() {
    // Clear the form inputs from the addNote window to be ready for adding the next entry in addNote
	console.log('At request.onsuccess of addData after adding newItem');
    titleInput.value = '';
    bodyInput.value = '';
	if (xtraField === 1) {
		inputXtraFieldData.value = '';
	}//end if
  };//end request.onsuccess

  // Report on the success of the transaction completing, when everything is done
  //IDBTransaction.oncomplete was fired only when all data was guaranteed to have been .value 

  // Report on the success of the transaction completing, when everything is done
  //IDBTransaction.oncomplete was fired only when all data was guaranteed to have been flushed to disk.
  transaction.oncomplete = function() {
    console.log('Transaction completed: database modification finished.');
	//show notice below only once .. at first run of app when there are no notes
	if (viewedThis === 0) {
		viewedThis = 1;
	alert('In addData. Create first note by tapping the Add Note button. You may also set settings for creating and naming the extra field, or do this at a later time. (Tap Preferences button, then Add Field.) .. extra field must be set to showing.   Tap OK to continue.');
	 
		
	}//end if viewedThis = 0

    // update the display of data to show the newly added item, by running displayData() again...if here from setting up admin record, cursor will now exist in displayData so the setup admin record code should not run again, and the setup variable should be set to 1.
    displayData();
  };
//the default behavior of an error is to abort the transaction in which it occurred. Unless you handle the error by first calling stopPropagation() on the error event 
  transaction.onerror = function() {
    console.log('Transaction not opened due to error');
  };
  
 
}//end addData function

//left off here Dec 122020

// Define the displayData() function
function displayData() {
	//alert('dateShade = ' + dateShade);
	//alert('viewDateWritten =  ' + viewDateWritten);
	//on last run Oct 5 2020 console.log says setup=0, but viewsettings says setup=1?
	console.log('at DisplayData. The setup variable = ' + setup);
	counter = 0;
	loadBtn.disabled = false;
	saveBtn.disabled = false;
	/*if (setup === 0) {counter = 0;
	} else {
		counter = 1;
	}//end if elsesetup counter = 0; */
	
  // Here we empty the contents of the list element each time the display is updated
  // If you didn't do this, you'd get duplicates listed each time a new note is added
    //this says while there is a list item remove it until there are no more list items.while loops through all the li items removing them until no more left...the ul is now empty ready for the renewed display data. When the top li is removed, the next one becomes the first child and it is removed. We do not want to remove the ul elements as they are needed for the updated display.
  while (list.firstChild) {
    list.removeChild(list.firstChild);
  }

  // Open our object store and then get a cursor - which iterates through all the
  // different data items in the store Next, we get a reference to the notes_os object store using IDBDatabase.transaction() and IDBTransaction.objectStore() +like we did in addData(), except here we are chaining them together in one line.(shorthand)
  let objectStore = db.transaction('notes_os').objectStore('notes_os');
   //if you don't specify the transaction mode, then defaults to read only. Calling transaction() with no mode specified gives you a "readonly" transaction.Only specify a readwrite transaction mode when necessary. You can concurrently run multiple readonly transactions with overlapping scopes, but you can have only one readwrite transaction for an object store.  Note that if deleting using the delete button, the tansaction method in the delete function does specify readwrite as the mode.
  //The next step is to use IDBObjectStore.openCursor() method to open a request for a cursor — this is a construct that can be used to iterate over the records in an object store. We chain an onsuccess handler on to the end of this line to make the code more concise — when the cursor is successfully returned, the handler is run.
  objectStore.openCursor().onsuccess = function(e) {
    // Get a reference to the cursor. Get a reference to the cursor itself (an IDBCursor object)
    let cursor = e.target.result;
	//The cursor object itself is the result of the request (above we're using the shorthand, so it's event.target.result). Then the actual key and value can be found on the key and value properties of the cursor object. If you want to keep going, then you have to call continue() on the cursor. 
//One common pattern with cursors is to retrieve all objects in an object store and add them to an array, .. see MDN web docs UsingIndexedDB
    // If there is still another data item to iterate through, keep running this code. Check to see if the cursor contains a record from the datastore
    if(cursor) {
		
		console.log('There is a cursor so setup =1; depends on which dbx is found by Textastic when loading a fresh run of code.');
		
		setup=1;//added this Oct 5 2020 might be wrong thing to do????!!!!!
		//if so, we create a DOM fragment, populate it with the data from the record, 
      // Create a list item, h3, and p to put each data item inside when displaying it
      // structure the HTML fragment, and append it inside the list..insert it into the page (inside the <ul> element)
	 // the ListItem is the note that contains the note title..h3.. and the body text para
	 //alert('cursor.value.created = ' + cursor.value.created);
      const listItem = document.createElement('li');
      const h3 = document.createElement('h3');
	//  if (viewDateWritten) {const dateP = document.createElement('p');}//end if viewDateWritten
	const secondDataH4 = document.createElement('h4');//title of second field data
      const para = document.createElement('p');
	  const dateP = document.createElement('p.date');
	 // const dateP = document.createElement('p.date');//was h3 h5 does not work NOTE when this was removed to top code so dateP was recognized in viewCreationDate, it would not shoe date in each instance,only the last!
	  const displayXtraField = document.createElement('p');
	  dateP.setAttribute('class','date');
	  //set colours
	  
	  if (dateShade === "black") {
		 dateP.style.color = "black" ;
	  
     } else if (dateShade === "white") {
		dateP.style.color = "white" ;
	//dateP.setAttribute('class','dateWhite');
	 }//end elde if dateColor
	// alert('dateP.style.color = ' + dateP.style.color);
	  listItem.style.backgroundColor = noteListItemColour;
	  h3.style.backgroundColor = noteTitleColour;
	  para.style.backgroundColor = bodyColour;
	  displayXtraField.style.backgroundColor = xtraFieldColour;
	//font colour  
	  	  listItem.style.color = fontColour;//style color inhereits so only need to change listItem
	 /*REMOVE h3.style.fontColor = "white";
	  para.style.textColor = "white";
	  para.setAttribute('color', 'white');*/
//const para2 = document.createElement('p');
      listItem.appendChild(h3);//put h3 inside the li
	  //alert('viewDateWritten variable = ' + viewDateWritten);
	  if (viewDateWritten) {listItem.appendChild(dateP);}//put h5 inside the li}//end if viewDateWritten
      listItem.appendChild(para);//put p inside the h3 inside the li
//	  listItem.appendChild(para2);
//alert('contents of extraField = ' + cursor.value.xtraField);
if (showExtraField===1 & cursor.value.xtraField !== " ") {
	
	listItem.appendChild(secondDataH4);//title of secondField dataNov 25 2020
	listItem.appendChild(displayXtraField);
	//above line was : if (showExtraField===1) {listItem.appendChild(displayXtraField);
		//the idea is to not display the extra field if it is empty
}//end if xtraField

//display all but first note
//perhaps should use cursor range here. 
/*Methods (all returning IDBRequest):

openCursor([range] [,direction]) openKeyCursor([range] [,direction]) – organized by index count([key]), get(key) getKey(key) – gets the key from referenced entry */
if (cursor.value.id  != 1) {
      list.appendChild(listItem);//add the li to the ul
	  //if buildingTableArrays switch is on create the table arrays but don't include (admin) record 1. Because arrays start at 0 use -2 to bring the array index down to 0 at start
	 //works without buildingTableArrays switch so will leave to see if needed If deleting a record cursor.value.id 3 gets deleted so cursor.value 4 contains CN4700...I WANT TO MAKE tableTitle [1]=CN4700..so when cursor.value.id is 4 go -3 to make tableTitle[1] = CN4700 AND YOU WANT tableTitle[2]to = cursor.value.id 5 -3 OR TRY USING COUNTER?
	 //if (deleteTableRecord === 1) {
	//	offset = -2 -1 
		 
	// }//end if deleteTableRecord = 1
	  // tableTitle[cursor.value.id - 2] = cursor.value.title;//locomotive 
	  // dateTable[cursor.value.id-2] = cursor.value.created;//date record created
	  // paraBody[cursor.value.id -2] = cursor.value.body;//location
	  // displayXtraFieldData[cursor.value.id -2] = cursor.value.xtraField;//(decoder) maybe should just use newFieldName?
	  
	  // console.log('In displayData, iterating through notes_os with cursor. tableTitle[' + Number(cursor.value.id -2) +'] = ' + tableTitle[cursor.value.id -2]);
	//LEFT OFF HERE DEC 14  !!
	//LEFT OFF HERE JAN 7 + cursor.value.id
	//THESE ARE TABLE ARRAYS..TO DISPLAY DATA IN TABLE..NOT USED FOR NOTES
	//ADDED SPACE AFTER > REMOVE IF MESSES UP!!!!!!!Jan24so in search use +2 instead of +1
	 tableTitle[counter - 1] = cursor.value.id + '> ' + cursor.value.title;//locomotive 
	  dateTable[counter-1] = cursor.value.created;//date record created
	  paraBody[counter-1] = cursor.value.body;//location
	  displayXtraFieldData[counter-1] = cursor.value.xtraField;//(decoder) maybe should just use newFieldName?
	  
	  console.log('In displayData, iterating through notes_os with cursor. tableTitle[' + Number(counter-1) +'] = ' + tableTitle[counter-1]);
	  //In displayData, iterating through notes_os with cursor. tableTitle[0] = CN3205..after deleting record
	  //In displayData, iterating through notes_os with cursor. tableTitle[2] = CN4700
	  //go to function to formulate contents% of paraBody[] to = everything up to a colon
	 setTable(cursor,counter);
	
	  
	  }//end if cursor.value.id != 1
      // Put the data from the cursor inside the h3 and para
      h3.textContent = cursor.value.title;
if (viewDateWritten) {dateP.textContent = cursor.value.created;}	//end if viewDateWritten  
      para.textContent = cursor.value.body;
	  secondDataH4.textContent = newFieldName;
	  displayXtraField.textContent = cursor.value.xtraField;
//para2.textContent = caches.keys();
      // Store the ID of the data item inside an attribute on the listItem, so we know
      // which item it corresponds to. This will be useful later when we want to delete items. Is data-note-id an attribute type like 'class', 'style' etc. specified in the IDB API?
      listItem.setAttribute('data-note-id', cursor.value.id);
	  
	  //this occurs everytime display data is run. the id comes from the note creation createIndex 'id' when the write to the object store is creared. setting the attribute in displayData gets the id from cursor.value.id. So putting it as an attribute saves having to run a cursor everytime you want to edit or delete a specific note.

      // Create a button and place it inside each listItem
	  //here you could add an edit button, and editBTN.onclick go to editItem function..(Doug D.)
      const deleteBtn = document.createElement('button');
      listItem.appendChild(deleteBtn);
      deleteBtn.textContent = 'Delete';

      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      deleteBtn.onclick = deleteItem;
	  
	  //set up Edit button
	  const editBtn = document.createElement('button');
      listItem.appendChild(editBtn);
      editBtn.textContent = 'Edit';
//was let noteNumber..now declared up top because variable not found error in if !listItem & setup===0
     noteNumber = listItem.getAttribute('data-note-id'); // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      editBtn.onclick = editItem;
	  //set up Full Note View button
	  
	  
	  const fullViewBtn = document.createElement('button');
      listItem.appendChild(fullViewBtn);
      fullViewBtn.textContent = 'View Entire Note - Record#: '+ noteNumber;

      // Set an event handler so that when the button is clicked, the deleteItem()
      // function is run
      fullViewBtn.onclick = fullViewItem;

      // Iterate to the next item in the cursor. use the IDBCursor.continue() method to advance the cursor to the next record in the datastore, and run the content of the if block again. If there is another record to iterate to, this causes it to be inserted into the page, and then continue() is run again, and so on.
	  
	  // const noteNumberP = document.createElement('button');
      // listItem.appendChild(noteNumberP);
      // noteNumberP.textContent = 'Record # :  '+noteNumber;
	  
	 // alert("noteNumber = " +noteNumber);
	  counter = counter + 1;
	/*  if (setup === 1 & noteNumber ===1) {
			list.removeChild(listItem);//remove the 1st note from view the li to the ul providedg setup is done. otherwise setup will keep repeating
		}//end if cursor.value.id===1 */
		
      cursor.continue();
	  //When there are no more records to iterate over, cursor will return undefined, and therefore the else block will run instead of the if block. This block checks whether any notes were inserted into the <ul> — if not, it inserts a message to say no note was stored.
	  //when starting afesh there is no cursor so code jumps to else statement..setup will still be =0
    } else {
      // Again, if list item is empty, display a 'No notes stored' message
      
      // if there are no more cursor items to iterate through, say so
//code below added to create first note as administration	
//my thinking: Here we are talking about the display screen, NOT the actual files in the database? because code above in displayData did not create the first note if cursor = 1 then here firstChild should be the second 'note' and if it does not exist then there are no notes entered yet in the database.
//ReferenceError: Can't find variable: noteNumber
//code below creates first record as admin record by going to addData to 'write the newItem set up as an admin record?'
if(!list.firstChild & setup ===0) {
        const listItem = document.createElement('li');
        listItem.textContent = 'This is noteNumber : ' + noteNumber + '. No notes stored. Setting up database. Create first note by tapping the Add Note button. You may also set settings for creating and naming the extra field, or do this at a later time. (Tap Preferences button, then Add Field. .... Added a note. Then preferences and add Field.. If extra field not set can’t keep data if added to extra field extra field must be set to 1 I.e. xtraField = 1)';
        list.appendChild(listItem);
		
		
		//if no notes yet automatically create the first note for variables!!!!..otherwise error generated because data. is undefined in load and save operations
		//disable load and save until after the first note is created
		loadBtn.disabled = true;
		saveBtn.disabled = true;
xtraField = 0;//was xtraField = 1 why?Date July 29 2020
xtraFieldData = ' ';	
newFieldName = " ";
titleInput.value = xtraField;
bodyInput.value = newFieldName;

inputXtraFieldData.value = ' ';
setup = 1;
console.log('Now going to addData from the code that ran after the else statement because there was no cursor on initial set up. now setup = 1');

	addData();	//going to 218 error undefined evaluating e.preventDefault should I make setup = 1 here?
ver = 2;//don't think I need to set ver = 2 because I came here via onupgradeneeded already? set it to 2 to force an onupgradeneeded
console.log('..now back from addData and going to open dbx again. ver is set = 2. will go to displayData again? recursive???');
let request = window.indexedDB.open('notes_dbx', ver); //seems to then go to start of code ? to onupgradeneeded??

request.onsuccess = function() {
  console.log('Database opened after addField successfully');
 
db = request.result;
//trying to prevent repeat display of records REMOVE IF MESSED UP!!!!! |
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
//remove above if it messes up!
displayData();
};//end request.onsuccess handler function .. a success event has triggered the success callback; 

request.onupgradeneeded = function(e) {

let db = e.target.result;
let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });
objectStore.createIndex('title', 'title', { unique: false });
  
  //addind date of note creation
  objectStore.createIndex('created', 'created', { unique: false });
  //end code for adding date created
  objectStore.createIndex('body', 'body', { unique: false });
  //CODE FOR xtraField basically substituting xtraField for body
  if (xtraField===1) {
	  objectStore.createIndex('xtraField', 'xtraField', { unique: false });
  }//end if xtraField
  //createIndex() takes an optional options object that refines the 
   //PLAN FOR XTRA FIELD: Create xtraField (body), xtraField (body). use if xtraField true create a string with first line fieldName rtn then data input from entry. version number will be set to 2 to trigger onupgradeneeded

  console.log('Database setup after addField complete and onupgradeneeded');
  //trying to prevent repeat display of records REMOVE IF MESSED UP!!!!! |
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
//remove above if it messes up!
  displayData();
};//end request.onupgradeneeded handler

console.log('Now going to saveVariables after addData');
saveVariables;

loadBtn.disabled = false;
		saveBtn.disabled = false;
setup = 1;
	}//end if not list first child
	

counter = counter-1;//number of visible records
//remove all code above if screw up
//after deleteItem, record deleted, the index key is not removed so an iteration of the cursor shows 4 records instead of 2
      console.log('Notes all displayed. Number of notes = ' + counter);
	  //should I add here tableTitle.length = counter to cut off extra element after a displayData() call at end of saveVariables which is called by deleteItem(delete record?...)
	 tableTitle.length = counter;
	 paraBody.length = counter;
	 displayXtraFieldData.length = counter;
	 console.log('At end of displayData()..tableTitle = ' + tableTitle);
	  //because js is asynchronous does code re-iterate through here while at the same time deleteItem code is running, and has not yet deleted the designated record, so tableTitle[] ends up with a 0 in its last instance making tableTitle array length one more than it should be?? Note after saving tableArray following deletion of a record from 4 record list + admin record, tableArray[4][0] = 0. so table.length = 4 instead of 3? So this is why tableTitle.length = counter statement in experiment2TableNotesVer15.js fixes the problem that occurs if going back to table from a previous run of deleteItem code?
	  
	//  Left off here Dec 9
    }//end else
  };//end opencursor.onsuccess
  console.log('At end of displayData: tableTitle = ' + tableTitle + '. tableTitle.length = ' + tableTitle.length);
 	
			console.log('after displayData, paraBody = '+ paraBody);
			console.log('after displayData, displayXtraFieldData = '+ displayXtraFieldData);
  //note originalNumberRecords is NOT set here.
}//end displayData function

// Define the deleteItem() function
function deleteItem(e) {
	console.log('At function deleteItem');
//	deleteRecord = 1; //flag used in refreshTable()
//make delete window appear	!!!!
deleteWindow.setAttribute('class','showing');

  // retrieve the name of the task we want to delete. We retrieve the ID of the record to be deleted. We need
  // to convert it to a number before trying it use it with IDB; IDB key
  // values are type-sensitive. Recall that the ID of the record was saved in a data-note-id attribute on the <li> when it was first displayed. See this code line in display function....'listItem.setAttribute('data-note-id', cursor.value.id);'The <li> list item is the parentnode of the event (e) targetted item..the button. We do however need to pass the attribute through the global built-in Number() object as it is of datatype string, and therefore wouldn't be recognized by the database, which expects a number.
 
  let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

  // open a database transaction and delete the task, finding it using the id we retrieved above. First Activate the notes-os for readwrite actions.
  let transaction = db.transaction(['notes_os'], 'readwrite');
  //reference/put the activated 'notes-os' object store into the variable objectStore
  let objectStore = transaction.objectStore('notes_os');
 console.log('noteId = ' + noteId);
 let request = objectStore.get(noteId);
//var request = objectStore.get();
request.onerror = function(event) {
  // Handle errors!
  console.log("delete failed");
};//end request.onerror
request.onsuccess = function(event) {
	//original note in data variable
	var data = event.target.result;
	//create the tools for warning re delete
	console.log('Will delete item # ' + data.id + ' ' + data.body);
 
 const deleteBanner = document.querySelector('h2.deleteBan');
const textToBeDeletedP = document.querySelector('#deleteTxt');
const deleteInputP = document.querySelector('p.deleteInstruction');
const deleteTableBanner = document.createElement('p');
const deleteTableRecordBtn =  document.createElement('button');
const deleteNotice = document.createElement('p');


 deleteBanner.textContent = 'Delete the Existing Record with Title:' + '  ' + data.title;
textToBeDeletedP.textContent = data.body;
deleteInputP.textContent = 'Tap the OK DELETE button to erase this record. Tap CANCEL to escape.';
 
 deleteButton = document.querySelector('#okDelete');
 cancelDelBtn = document.querySelector('#cancelDelete');
 alert('Scroll up or down if data is not on screen!');
 deleteWindow.setAttribute('class','showing');
 
if (tableExists) {
 deleteWindow.appendChild(deleteTableBanner);
 deleteWindow.appendChild(deleteTableRecordBtn);
 // const deleteTableBanner = document.createElement('p');
		 deleteTableBanner.setAttribute('class','simulator');
		 deleteTableBanner.textContent = 'Do you wish to also delete record from the Table?';
		 // // const deleteTableRecordBtn =  document.createElement('button');
		 deleteTableRecordBtn.textContent = 'Delete from Table';
		// deleteWindow.appendChild(deleteTableBanner);
		// deleteWindow.appendChild(deleteTableRecordBtn);
 
 
}//end if tableExist
 
 cancelDelBtn.onclick = function () {
	deleteWindow.removeChild(deleteTableBanner);
	deleteWindow.removeChild(deleteTableRecordBtn);
	deleteWindow.setAttribute('class','hidden');
	};//end cancelDelBtn.onclick
	
	
 deleteButton.onclick = function () {
	 //reactivate the transaction
	 counter = counter - 1;
	 let transaction = db.transaction(['notes_os'], 'readwrite');
  //reference/put the activated 'notes-os' object store into the variable objectStore
  let objectStore = transaction.objectStore('notes_os');
  //create a request to delete the object store identified with noteId.
	 
	 let request = objectStore.delete(noteId);
	 //Methods returning IDBResult (range may be used instead of key where applicable):delete(key) – remove entries, clear() – removes all entries 
	 //Methods working with indexes: ? use for removing and adding Fields in a database?

/*parameters – object may set unique or multiEntry true

idx = index(name), deleteIndex(name)

idx = createIndex(name, keyPath[, parameters])
*/
  // report that the data item has been deleted
  transaction.oncomplete = function() {
	  deleteNotice.textContent = 'Note ' + noteId + ' deleted.';
   deleteWindow.appendChild(deleteNotice); e.target.parentNode.parentNode.removeChild(e.target.parentNode);
    console.log('Note ' + noteId + ' deleted.');
//add code here to put record deleted on screen
    // Again, if list item is empty, display a 'No notes stored' message
    if(!list.firstChild) {
      let listItem = document.createElement('li');
      listItem.textContent = 'No notes stored.';
      list.appendChild(listItem);
  }	
	
  if (tableExists) {
		 // const deleteTableBanner = document.createElement('p');
		 // deleteTableBanner.setAttribute('class','simulator');
		 // deleteTableBanner.textContent = 'Do you wish to also delete record from the Table?';
		 // // const deleteTableRecordBtn =  document.createElement('button');
		 // deleteTableRecordBtn.textContent = 'Delete from Table';
		// deleteWindow.appendChild(deleteTableBanner);
		// deleteWindow.appendChild(deleteTableRecordBtn);
		deleteTableRecordBtn.onclick = function () {
			console.log('Before displayData...tableTitle[] = ' + tableTitle);
			deleteTableRecord = 1;//flag used to try and fix tableArray by preventing concurrent running of displayData
			
		//	LEFT OFF HERE DEC 12
			
		tableConstructed = 0;	//deleteWindow.setAttribute('class','hidden');
		//added Dec 10
	//	deleteTableRecord = 1;//to prevent displayData running again from saveVariables in aid of avoiding a repeat last element after a deleted table record
		
		//may not need to set refreshed=1 here as I am no longer going to refreshTable() from this code!!! Dec 7 .. so maybe should REMOVE??
		refreshed = 1;//to prevent repeat of field headers in refreshTable() Dec6
		//should I REMOVE above?
		//also if going back to notes screen, then returning to TABLE, you have added a new record sinCe last creation of table appears because originalNumberRecords variable has changed (-1) ..so look at code to fix!!!!Dec 7
		
		console.log('noteId = ' + noteId);
		//var a = fruits.indexOf("Apple");
		//let arrayIndex = Number(noteId-2);
		//need to do indexOf because notesID keePs increasing as records are dealTed because in js the record keys are not deleted, just kept and new ones added.
		//create complete target title to match to identify record to delete
		//added space after > for correct compareJan 25
		let targetTitle = data.id + '> ' + data.title;
		console.log('targetTitle = ' + targetTitle);
		let arrayIndex = tableTitle.indexOf(targetTitle);
		//data.title = CN4700
		//console.log('noteId -2 arrayIndex = ' + arrayIndex);
		console.log('data.title = ' + data.title);
		console.log('arrayIndex = ' + arrayIndex);
		//arrayIndex = -1
		
		console.log('tableTitle[arrayIndex] = ' + tableTitle[arrayIndex]);
		
	//	let removedArrayElement = tableTitle.splice(arrayIndex, 1);
	//	console.log('removedArrayElement = ' + removedArrayElement);
	
//if removing tableTitle[0] before removedTableRecordElements, I =think this causes a blank entry in the tableArray, so let’s not remove tableTitle[0] and just remove the whole record, then set originalNumber Records to tableTitle.length see experiment2TableNotesVer15.js

//from stack overflow
let removedRecord = tableArray.splice(arrayIndex,1);
console.log('removedRecord = ' + removedRecord);
//removedRecord = 
console.log('tableArray = ' + tableArray);

//tableArray = 2>CN3205, Jan 08 2021 16:56,Yard3 Track 2,Econami PNP  ,5,128,255,3>CN4800, Jan 08 2021 16:59,Yard3 Track12 ,Tsunami2 TSU-1100,15,128,255,4>CN4700, Jan 08 2021 17:00,Yard2 Roundhouse Track 2,TSUNAMI2 TSU-1100,77,130,190,5>CN5502, Jan 08 2021 17:01,Ogden Point Yard Track 4,NCE DW13SR ,10,20,30,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,


//ADDED DEC 13 2020
tableArray.length = counter;
//CODE TO REBUILD tableArray after deleting record


// let removedRecordFields = Number(numberOfFields);
// 		let removedTableRecordElements = tableArray[arrayIndex].splice(0,removedRecordFields);


// 		console.log('removedTableRecordElements = ' + removedTableRecordElements);
	//if removedArrayElement tableTitle not done then tableTitle.length remains unchanged! Dec 6	
		let removedArrayElementparaBody = paraBody.splice(arrayIndex, 1);
		//removedArrayElementparaBody = Ogden Point Yard Track 4
		console.log('removedArrayElementparaBody = ' + removedArrayElementparaBody);
		
		let removedArrayElement = tableTitle.splice(arrayIndex, 1);
		console.log('removedArrayElement = ' + removedArrayElement);
	//removedArrayElement = 5>CN5502
		
		let removedArrayElementdisplayXtraFieldData = displayXtraFieldData.splice(arrayIndex, 1);
		console.log('removedArrayElementdisplayXtraFieldData = ' + removedArrayElementdisplayXtraFieldData);
		//removedArrayElementdisplayXtraFieldData = NCE DW13SR 
		
		
		console.log('tableTitle array now = ' + tableTitle);
		//tableTitle array now = 2>CN3205,3>CN4800,4>CN4700
		
		console.log('tableTitle.length = ' + tableTitle.length);
		//tableTitle.length = 3 essentially it removed the last element because arrayIndex was -1
		originalNumberRecords = tableTitle.length;//update record number so table  redisplays correctly in buildRecordRows
		//save changes to variables, in particular originalNumberRecords so a re-run will show the proper number of records? originalNumberRecords is initially set to tableTitle.length in newBtn.onclick, and in refreshTable after a table reconstruct post adding a new record, and in deleteItem, and is saved as a variable so it loads in with getDataBaseName(). It is compared with tableTitle.length to determine if table needs updating after adding a record
		saveVariables();
	//	deleteTableRecord = 0;
		//saveVariables goes to displayData and so maybe you are doing this twice??!!!!!!BUT IT STILL SEEMS TO WORK IF GOING BACK TO NOTES AND RETURNING TO TABLE AND VICE VERSA.????
		 //Dec 11 2020:because js is asynchronous does code re-iterate through here while at the same time deleteItem code is running, and has not yet deleted the designated record, so tableTitle[] ends up with a 0 in its last instance making tableTitle array length one more than it should be?? Note after saving tableArray following deletion of a record from 4 record list + admin record, tableArray[4][0] = 0. so table.length = 4 instead of 3? So this is why tableTitle.length = counter statement in experiment2TableNotesVer15.js fixes the problem that occurs if going back to table from a previous run of deleteItem code?
	//	Left off here Dec 10 see line 2185.. in saveVariables
		//tableTitle[noteId] = '' ;
		tableArray.length = counter;//ADDED DEC13
			displayData();
			console.log('after displayData, tableTitle = '+ tableTitle);
			console.log('after displayData, paraBody = '+ paraBody);
			console.log('after displayData, displayXtraFieldData = '+ displayXtraFieldData);
			deleteWindow.setAttribute('class','showing');
			clearTableRows();
		//	refreshTable();
//instead of going to refreshTable go to displayTable so tableArray is not messed up by redefineTableArray in buildRecordRows
addFieldHeaders();
	displayTable();//Dec 6
	//go to refreshTable but use deleteRecord flag to avoid buildRecordRows

deleteWindow.removeChild(deleteTableBanner);
	deleteWindow.removeChild(deleteTableRecordBtn);
//deleteWindow.removeChild(deleteNotice);

deleteWindow.setAttribute('class','hidden');
//left off here Dec 7
			//tableScreen.setAttribute('class','showing');
			
		}//end deleteTableRecordBtn.onclick
		
	}//end if tableExists
	
	//now hide delete window again
	
};//end transaction.oncomplete
};//end deleteButton.onclick function
 
};//end of request.onsuccess
  //create a request to delete the object store identified with noteId.
//deleteWindow.setAttribute('class','hidden');
deleteRecord = 0; //flag used in refreshTable()
}//end of deleteItem function

//show full item view function
// Define the fullViewItem() function
function fullViewItem(e) {
//make full view window appear	!!!!
displayFullNote.setAttribute('class','showing');

//TypeError: undefined is not an object (evaluating 'e.target')
  

if (fromSearchRecord) {
	noteId = Number(searchNote);
	fromSearchRecord = false;
	}//end if fromSearching
		else {
			noteId = Number(e.target.parentNode.getAttribute('data-note-id'));
		}//end if from searching
		
  // open a database transaction and delete the task, finding it using the id we retrieved above. First Activate the notes-os for readwrite actions.
  let transaction = db.transaction(['notes_os'], 'readwrite');
  //reference/put the activated 'notes-os' object store into the variable objectStore
  let objectStore = transaction.objectStore('notes_os');
 
 let request = objectStore.get(noteId);
//var request = objectStore.get();
request.onerror = function(event) {
  // Handle errors!
  console.log("delete failed");
};//end request.onerror
request.onsuccess = function(event) {
	//original note in data variable
	var data = event.target.result;
	//create the tools for warning re delete
	//TypeError: undefined is not an object (evaluating 'data.id')
console.log('Will display item # ' + data.id + ' ' + data.body);
 
 const fullViewBanner = document.querySelector('h2.fullView');
const textToBeCompletelyViewed = document.querySelector('#fullTxt');
const finishedReading = document.querySelector('#finishedReading');
const fullViewP = document.querySelector('p.fullViewInstruction'); //removed this because button off screen if note title >3 lines
textToBeCompletelyViewed.textContent = data.body;

//textToBeCompletelyViewed.addEventListener('click', function () { doesn't work after a repeat view so had to use an .onclick event!
	
	textToBeCompletelyViewed.onclick = function () {
	if (!toggley) {
		toggley = true;
		textToBeCompletelyViewed.textContent = data.xtraField;
	} else if (toggley) {
		toggley = false;
		textToBeCompletelyViewed.textContent = data.body;
	}//end else if toggllex
};//end function textToBeCompletelyViewed.onclick


if(xtraField === 0) {
	fullViewBanner.textContent = 'Complete view of the Existing Record with Title:' + '  ' + data.title;
} else if (xtraField === 1) {
 fullViewBanner.textContent = 'Complete view of the Existing Record with Title:' + '  ' + data.title ;
 fullViewP.textContent = ' Tap window to see contents of extra Field named: ' + newFieldName;
}//end else if

 finishedReading.setAttribute('class', 'showing');
//textToBeCompletelyViewed.textContent = data.body;
//fullViewP.textContent = 'Tap the OK RETURN button after viewing this record.';
 
 
doneReadingButton = document.querySelector('#okReturn');
goToSearchBtn = document.querySelector('#goToSearch');
 
 doneReadingButton.onclick = function () {
	toggley = false;//so on return to fullView function there is no 'stall' on viewing after tap
	//textToBeCompletelyViewed.textContent = "";
	finishedReading.setAttribute('class','hidden'); displayFullNote.setAttribute('class','hidden');
	};//end doneReadingButton.onclick
	
goToSearchBtn.onclick = function() {
//in aid of preventing repeat registering of addEventListener in searchRecords() REMOVE IF MESSES UP,!!Jan22 2021

searchWindow.setAttribute('class','showing');
	//pre-load search record input field with current full view record
	// searchTitleInput.value = "";
	console.log('data.title = ' + data.title);
	searchTitleInput.value = data.title;
	// console.log('searchTitleInput.value' = searchTitleInput.value);
	
finishedReading.setAttribute('class','hidden'); displayFullNote.setAttribute('class','hidden');
	searchRecords();//to help asthetics of search screen..extra p element won't appear otherwise
};//end function goToSearchBtn.onclick


	alert('Scroll up or down if RETURN TO NOTES Button is not on screen! (Move scroll bar on right to bottom of screen.)');

};//end of request.onsuccess
  // a request to view the object store identified with noteId.

}//end of fullItemView function

//view settings window (the first note)
function viewSettings(e) {
	aboutDBWindow.setAttribute('class','hidden');
//make full view window appear	!!!!
settingsScreen.setAttribute('class','showing');

  // retrieve the name of the task we want to view. We retrieve the ID of the record to be viewed. We need
  // to convert it to a number before trying it use it with IDB; IDB key
  // values are type-sensitive. Recall that the ID of the record was saved in a data-note-id attribute on the <li> when it was first displayed. See this code line in display function....'listItem.setAttribute('data-note-id', cursor.value.id);'The <li> list item is the parentnode of the event (e) targetted item..the button. We do however need to pass the attribute through the global built-in Number() object as it is of datatype string, and therefore wouldn't be recognized by the database, which expects a number.
 // let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));
let noteId = 1;
  // open ai database transaction and delete the task, finding it using the id we retrieved above. First Activate the notes-os for readwrite actions.
  let transaction = db.transaction(['notes_os'], 'readwrite');
  //reference/put the activated 'notes-os' object store into the variable objectStore
  let objectStore = transaction.objectStore('notes_os');
 
 let request = objectStore.get(noteId);
//var request = objectStore.get();
request.onerror = function(event) {
  // Handle errors!
  console.log("view Settings failed");
};//end request.onerror
request.onsuccess = function(event) {
	//original note in data variable
	//to prevent reload of program wii an e.prevent.default propacation work here
	var data = event.target.result;
	//create the tools for warning re delete
	console.log('Will display settings screen item # ' + data.id + ' ' + data.body);
 
 const viewSettingsBanner = document.querySelector('h2.viewSettings');
const variablesViewed = document.querySelector('#variables');
const theListHeading = document.querySelector('#theListHeading');

const theList = document.querySelector('#theList');

const finishedReadingSettings = document.querySelector('#finishedReadingSettings');
//references below for new code to list variables

let cvString1 = 'xtraField: = '+ xtraField;
let cvString2 = 'Extra Field Label: = ' + newFieldName;
let cvString3 = 'Database Table Name is: '+ dbTableName.value;
let cvString4 = 'Database setup completed? = '+ setup;
let cvString5 = 'A table has been created for this database? = '+ tableExists +'Enabled';
let cvArray = [cvString1,cvString2,cvString3,cvString4,cvString5];
let cvItem = document.createElement('li');

//above for new code to list variables
//const fullViewP = document.querySelector('p.fullViewInstruction'); removed this because button off screen if note title >3 lines
 viewSettingsBanner.textContent = 'The Settings screen reveals the values of variables as currently set.';
 //trying to get title light pink
/* let pinkTitle = document.createElement('p.yellowonly');
 
 document.fullViewBanner.appendChild(pinkTitle);
 */
 finishedReadingSettings.setAttribute('class', 'showing');
  variablesViewed.textContent = 'The  extraField is enabled if xtraField set to 1 and not enabled if set to 0. Value of xtraField variable = ' + xtraField +'. ' + 'The previous label of the Extra Field =  ' + data.body + '.   The current label is ' + newFieldName + '. This Database Table is named = ' + dbTableName.value + '.The database setup is completed if setup = 1 and not done if = 0. setup = ' + setup + 
	'. A table has been created if = 1. To restore the previous Field Label tap LOAD. To keep current field label for subsequent reboots of database tap the SAVE button in main menu. The database was created/last modified on : ' + data.created + '.';
//fullViewP.textContent = 'Tap the OK RETURN button after viewing this record.';
 //the variable list
 
//re-writing code for listing variables. the original is marked off with /**/so it can be restored if needed


for(let i = 0; i < numberOfCVtoList; i++) {
	cvItem = document.createElement('li');
 	cvItem.textContent = cvArray[i];
	cvValues.appendChild(cvItem);
	
}//end of for loop

 
doneSettingsButton = document.querySelector('#okSettingsViewed');

 
 doneSettingsButton.onclick = function () {
	//clear cv list in case running again
	while (cvValues.firstChild) {
    cvValues.removeChild(cvValues.firstChild);
}//end while*/
	finishedReadingSettings.setAttribute('class','hidden');
	settingsScreen.setAttribute('class','hidden');
	aboutDBWindow.setAttribute('class','showing');
	};//end doneSettingsButton.onclick

	alert('Scroll up or down if RETURN TO NOTES Button is not on screen! (Move scroll bar on right to bottom of screen.)');

//remove up to here


};//end of request.onsuccess
  // a request to view the object store identified with noteId.

}//end of viewSettings function

//the editItem function could look something like this
//define the editItem function
//you should combine the clear and the write into a single transaction

function editItem(e) {
	
	//make edit window appear
	editWindow.setAttribute('class','showing');
	
	
	//from updating an entry in the database
	let noteId = Number(e.target.parentNode.getAttribute('data-note-id'));

  // open a database transaction and delete the task, finding it using the id we retrieved above. First Activate the notes-os for readwrite actions.
  let transaction = db.transaction(['notes_os'], 'readwrite');
  //reference/put the activated 'notes-os' object store into the variable objectStore
  let objectStore = transaction.objectStore('notes_os');
  //create a request to get the object store identified with noteId.
  let request = objectStore.get(noteId);
//var request = objectStore.get();
request.onerror = function(event) {
  // Handle errors!
  console.log("edit failed");
};
request.onsuccess = function(event) {
	//original note in data variable
	var data = event.target.result;
	//create the tools for doing the edit
	console.log('Will edit item # ' + data.id + ' ' + data.body);
	//reference editTitle input this works even if spelled Tile??!!!?why?
	const editTitle = document.querySelector('#editTitle');
	const editInput = document.querySelector('#changes');
	//put input element visible on screen
	//first clear screen
	//  while (list.firstChild) {
    //list.removeChild(list.firstChild);
//}//end while statement


/*main.removeChild(main.firstChild);
console.log('cleared note display'); */
//put input on screen
const editBanner = document.querySelector('h2.edBan');
const originalBodyTextP = document.querySelector('#originalTxt')
const editInputP = document.querySelector('p.editInstruction');
/*record.appendChild(editBanner);
record.appendChild(originalBodyTextP);
record.appendChild(editInputP);
record.appendChild(editInput); */
//set up edit for extra field
const xtraFieldBtn = document.createElement('button');
//references for edit newField
const editNewFieldBanner = document.querySelector('h2.edNewFieldBan');
const originalNewFieldTextP = document.querySelector('#originalNewFieldTxt')
const editNewFieldInputP = document.querySelector('p.editNewFieldInstruction');

// Set an event handler so that when the button is clicked, the editXtraField() is run
// only set this up if xtraField === 1;
if (xtraField === 1) {
      editWindow.appendChild(xtraFieldBtn);
      xtraFieldBtn.textContent = 'Edit field: ' + newFieldName;

      
      xtraFieldBtn.onclick = editFieldWindow;
  }//end if xtraField === 1

editBanner.textContent = 'Edit the Existing Record with Title:' + '  ' + data.title;
originalBodyTextP.textContent = data.body;
editInputP.textContent = 'Type changes into the Input Window below.';
 // alert('');
 
//to keep title unchanged I probably need to set value of editTitle.value = data.title Same for body text.
editTitle.value = data.title;//fix reference to editTitle const
editInput.value = data.body;

//edit xtraField code here
function editFieldWindow () {
	const editNewFieldWindow = document.querySelector('#editNewFieldWin');
	const editNewFieldInput = document.querySelector('#editNewFieldChanges');
	//editXtraField window set class 'showing'
	//make editXtraField window appear
	//make edit window appear
//remove the editXtraFieldBtn otherwise it accumulates!
editWindow.removeChild(xtraFieldBtn);
editNewFieldWindow.setAttribute('class','showing');
	
	editNewFieldBanner.textContent = 'Edit the Current Data of the ' + newFieldName + ' Field.';
originalNewFieldTextP.textContent = data.xtraField;

//LEFT OFF HERE!!!!!!
editNewFieldInputP.textContent = 'Type changes into the Input Window below.';
	
editNewFieldInput.value = data.xtraField;	

commitButton = document.querySelector('#commit');

clearEditNewFieldBtn = document.querySelector('#clearEditNewField');

cancelCommitBtn = document.querySelector('#cancelCommit');
 // enterButton.addEventListener('click', makeChanges); Use button.onclick because the eventListener registers all clicks and causes makeChanges to re-iterate twice or more?
  commitButton.onclick = function () {
	 data.xtraField = editNewFieldInput.value;
//	editWindow.removeChild(xtraFieldBtn); 
	editNewFieldWindow.setAttribute('class','hidden');
  };//end commitBtn.onclick
 //LEFT OFF HERE JULY 25 2020 
  cancelCommitBtn.onclick = cancelEditNewField;
  function cancelEditNewField () {
//editWindow.removeChild(xtraFieldBtn);//Jan 11 
editNewFieldWindow.setAttribute('class','hidden');
	
}//end cancelEditNewField function

//clear edit ewFieldInput
clearEditNewFieldBtn.onclick = function () {
	editNewFieldInput.value = '';
	}//end clearEditNewFieldBtn.onclick
}//end function editNewField
 



//alert('I am at editInput submit');
//a variables called submitBtn previously
enterButton = document.querySelector('#submit');

clearBtn = document.querySelector('#clear');
clearTitleBtn = document.querySelector('#clearTitle');
cancelBtn = document.querySelector('#cancel');
 // enterButton.addEventListener('click', makeChanges); Use button.onclick because the eventListener registers all clicks and causes makeChanges to re-iterate twice or more?
  enterButton.onclick = makeChanges;
  cancelBtn.onclick = cancel;
 //need end request.onsuccess get note 
 clearTitleBtn.onclick = clearTitle;
	clearBtn.onclick = clear;
	
alert('Scroll up or down if data is not on screen!');

//editInput.onclick = function() {}
function makeChanges () {
	//flag to force update of table if edit note done but make sure table exists first otherwise table is not created properly on an initial run Jan 12
	if (tableExists) {
		editNote = true;
	}//end if tableExists
	
	//let editItem = {title: data.title, body: editInput.value};
	//alert('I am at editInput after changes submit');
	let transaction = db.transaction(['notes_os'], 'readwrite');
  //reference/put the activated 'notes-os' object store into the variable objectStore
  let objectStore = transaction.objectStore('notes_os');
  //getting any title change
    data.title = editTitle.value;
	data.body = editInput.value;
	editBanner.textContent = 'Record with Title:' + '  ' + data.title + ' changed to: ';
	originalBodyTextP.textContent = data.body;
	
	
	console.log('new data edited! Data.body now = '+ data.body);
	// Put this updated object back into the database.
  //the object can not be cloned!!!!
  
  //create a request to put the object store identified with noteId.
  var requestUpdate = objectStore.put(data);
   requestUpdate.onerror = function(event) {
     // Do something with the error
	 editBanner.textContent = 'Whoops! ERROR! Transaction now inactive!'
   };
   requestUpdate.onsuccess = function(event) {
     // Success - the data is updated!
	 console.log("The record is updated!");
	//remove EDIT WINDOW
	editWindow.setAttribute('class','hidden');
	/*main.removeChild(main.firstChild);
	console.log('cleared note display'); */
	//alert('got to end requestUpdate.onsuccess');
	
	///*
	editInput.value = data.body; //"";
	//should I clear previous screen here to?
	//clearTitleBtn.onclick = clearTitle;
	//clearBtn.onclick = clear;
	
	while (list.firstChild) {
    list.removeChild(list.firstChild);
}
	displayData();
     };//end requestUpdate.onsuccess
	//force tableUpdate if notes edited Jan11 
	
	 // if(tableExists) {
		//  refreshTable();
	 // }//end if tableExists
	 
	  }//end makeChanges function. !!!!
	 //clear editTitle input
	 function clearTitle () {editTitle.value = " ";}//end clearTitle function
	function clear () {editInput.value = " ";}//end clear function
//was here }//end makeChanges function
};//end request.onsuccess getNoteId
//redisplay the screen
//alert('got to redisplay the screen);')
//displayData();
function cancel () {
	editWindow.setAttribute('class','hidden');
	editWindow.removeChild(xtraFieldBtn);//Jan11
}//end cancel function


 }//end function editItem


 

document.getElementById("percent").value = '(Service Worker disabled in this testing version...Not running in Safari so not able to return )';

//preferences window section code for rename title, addField, changeColour

settingsBtn.onclick = options;


function options () {
	const renameBtn = document.querySelector('#renameDB');
	const workDiv = document.querySelector('#workDiv');
	const reNameWin = document.querySelector('#reNameWin');
	const dbTitle = document.querySelector('#dbTitle');
	const newTitle = document.querySelector('#newTitle');
	const prefWindow = document.querySelector('#prefWin');//'div id="prefWin"
	const clearPrefWindow = document.querySelector('#clearPrefWindow');
	const changeColoursBtn = document.querySelector('#background');
	const addFieldBtn = document.querySelector('#newField');
	const addFieldWin = document.querySelector('#newFieldWin');
	const changeColoursWin = document.querySelector('#changeColoursWin');
	const displayDataBtn = document.querySelector('#displayData')
	const showExtraFieldBtn = document.querySelector('#resetNewField');
//REMOVE IF SCREW UP DATE FEB 11 2021 this code is to fix show extra field on load when extra field is already set and showing!
if (showExtraField ===1) {
	showExtraFieldBtn.textContent = "Hide extra field";
	togglex = 1;
}//end if showExtraField =1
//remove above if screw up


addFieldBtn.setAttribute('class','attentionBtn');
	if(saveBtn.textContent === 'SAVED') {
		saveBtn.textContent ='SAVE';
	}//end if saveBtn.textContent

	const tableDateTimeBtn = document.querySelector('#tableTime');
	tableDateTimeBtn.setAttribute('class', 'attentionBtn');
	const timeDateFlagP = document.querySelector('#timeDateFlag');
	const timeIndicator = document.querySelector('#timeIndicator');
	let timeIndicatorStr = "";
	
	//TypeError: null is not an object (evaluating 'timeIndicator.setAttribute')
	//timeIndicator.setAttribute('class','attentionBtn');
	
	tableDateTimeBtn.onclick = function () {
	
	
			
		if (tableDateTime) {
			//prefWindow.removeChild(timeDateFlagP);
		tableDateTime = false;
		//TypeError: null is not an object (evaluating 'timeIndicator.textContent = " plus "')
		//timeIndicator.textContent = " plus ";
			timeIndicatorStr = " PLUS ";
			
		//TypeError: null is not an object (evaluating 'timeIndicator.setAttribute')	timeIndicator.setAttribute('class','attentionBtn');
			
		tableDateTimeBtn.textContent = "TableDate" + timeIndicatorStr + "time";
		timeDateFlagP.textContent = "The edit DATE in table will NOT include the time.";
		//prefWindow.appendChild(timeDateFlagP);
		
		}
		else {
			//prefWindow.removeChild(timeDateFlagP);
			tableDateTime = true;
			timeIndicatorStr = " WITHOUT ";
			//TypeError: null is not an object (evaluating 'timeIndicator.textContent = " without "')
			//timeIndicator.textContent = " without ";
			//timeIndicator.setAttribute('style','background-color: red');
			//timeIndicator.setAttribute('class','attentionBtn');
			//for some reason I can’t set attribute of timeIndicator ?span HTML?
			tableDateTimeBtn.textContent = 'TableDate' + timeIndicatorStr +'time';
			timeDateFlagP.textContent = "The edit DATE in table will now  INCLUDE the time.";
			//prefWindow.appendChild(timeDateFlagP);
		}//end tableDateTime
	}//end tableTimeBtn.onclick
	
	//let notifyP = document.createElement('p');//declared here so variable is recognized by clear preferences function
	
	
	//workDiv.setAttribute('class','showing');

	prefWindow.setAttribute('class','showing');
	
	//put search case sensitive stuff here???
	
	//Left off here Jan 24
	
	const caseSensitiveSwitch = document.querySelector('#caseSensitive');
	const no = document.querySelector('#no');
	const yes = document.querySelector('#yes');
	//let searchCaseSensitive;	//make global
	caseSensitiveSwitch.onchange = function(){
		searchCaseSensitive = caseSensitiveSwitch.value;
		console.log('searchCaseSensitive = ' + searchCaseSensitive);
	//NOTE! caseSensitiveSwitch.value returns a number as type string so conditional below must use quotes around the number!!	
	//}//end function caseSenseSitive.onchange
	
	//console.log('caseSensitive = ' + caseSensitive);
	if (searchCaseSensitive === "1") {
		caseSensitive = true;
		console.log('caseSensitive = ' + caseSensitive);
		yes.setAttribute('class', 'colorBtn');
		no.setAttribute('class', 'normalBtn');
		
	} //end if searchCaseSensitive === 1
	else if (searchCaseSensitive === "0") {
	
		caseSensitive = false;
		console.log('caseSensitive = ' + caseSensitive);
		yes.setAttribute('class', 'normalBtn');
		no.setAttribute('class', 'colorBtn');
		
	}//end if searchCaseSensitive === 0
	console.log('caseSensitive = ' + caseSensitive);
	};//end function caseSenseSitive.onchange
	//}//end function caseSenseSitive.onchange
	//search case sensitive code above
	
	clearPrefWindow.onclick = function () {
		//Tap here to return to notes
	/*prefWindow.removeChild(notifyP);*/
   displayDataBtn.setAttribute('class', 'normalBtn');	prefWindow.setAttribute('class','hidden');}; //end clearPrefWindow.onclick
	
	//decorate buttons
	if (xtraField === 0) {
		
		showExtraFieldBtn.disabled = true;
	addFieldBtn.setAttribute('class','attentionBtn');
	}//end if xtraField =0
	else if (xtraField === 1) {
		//why did I disable showExtraField Btn here? Is this a mistake? Date: Aug 6 2020
	showExtraFieldBtn.disabled = true;	showExtraFieldBtn.setAttribute('class','colorBtn');
	addFieldBtn.setAttribute('class','colorBtn');
	addFieldBtn.textContent = 'Relabel Field';
		
}//end if xtraField =1

	renameBtn.onclick = renameTitle;
	changeColoursBtn.onclick = changeColours;
	addFieldBtn.onclick = addField;
	creationDateBtn.onclick = function () {
		//alert('doneOnce = ' + doneOnce);
		if (doneOnce === 1) {
		 doneOnce = 0; prefWindow.removeChild(dateColorBtn);
				}//end if doneOnce
		
		viewCreationDate();//referenced at top of code;
		
	};//end creationDateBtn.onclick
	/*function handleDate () { 
		//if(prefWindow.dateColorBtn){ prefWindow.removeChild(dateColorBtn);
		//}//end if dateColorBtn
		viewCreationDate;//referenced at top of code
	}//end function handleDate */
	
	displayDataBtn.onclick = function () {
		prefWindow.setAttribute('class','hidden');
		displayData();
	};//end displayDataBtn.onclick
	
	//reset newField
	//disable show extra field btn until setup complete
	if(setup===0) {
		showExtraFieldBtn.disabled = true;
		addFieldBtn.disabled = true;
	}//end if setup =0
	else if (xtraField === 1) {
		showExtraFieldBtn.disabled = false;
		addFieldBtn.disabled = false;
	}//end else
	showExtraFieldBtn.onclick = function () {
	if (!togglex) {
		togglex = 1;
		showExtraFieldBtn.textContent = 'Hide ExtraField';
		showExtraField = 1;
	}//end if togglex
	else if (togglex) {
		togglex = 0;
		showExtraFieldBtn.textContent = 'Show ExtraField';
		showExtraField = 0;
	}//end else if toggllex
	prefWindow.setAttribute('class','hidden');
		
		displayData();
	};//end showExtraField.onclick
	
	//function renameTitle
	function renameTitle () {
		saveBtn.setAttribute('class', 'colorBtn');
		prefWindow.setAttribute('class','hidden');
	 reNameWin.setAttribute('class','showing');
	 //dbTableName.value set to 'Notes' at top of code
	dbTitle.textContent = dbTableName.value;
	
	// dbTitle.textContent = 'Notes';
	 let newTitlePara = document.createElement('p');
	 //get new title
	 newTitle.addEventListener('input', function () {dbTitle.textContent = newTitle.value;
		 //dbTableName variable declared as global on line 16? removed this line 16 because it caused error: 'attempting to assign to a readonly property? then code worked. so where is this variable declared?'maybe getElementByID takes care of it??
		 
		// !!!REMOVE .textContent fron dbTableName
	 dbTableName.value = newTitle.value;
	 newTitlePara.textContent = 'The database table is now named : ' + dbTitle.textContent; 
	 });//end newTitle.addEventListener CHANGED dbTableName to dbTitle.textContent
	 
	// alert(dbTitle.textContent);
	 //dbTitleName = newTitle.value;
	 
	 reNameWin.appendChild(newTitlePara);
	 
	 
	 let doneBtn = document.createElement('button');
      doneBtn.textContent = 'DONE';
      reNameWin.appendChild(doneBtn);
	  doneBtn.onclick = function () {
		 document.getElementById("dbTableName").innerHTML = dbTableName.value;
		//get ready for next instance of rename dbTablName
		reNameWin.removeChild(newTitlePara);
        reNameWin.removeChild(doneBtn);	reNameWin.setAttribute('class','hidden');
	  prefWindow.setAttribute('class','showing');
  };//end doneBtn.onclick
	 
	}//end function renameTitle
	
	//start function changeColours()
function changeColours () {
	
	const changeColourListItem = document.querySelector('#changeColourListItem');
	const changeColourNoteTitle = document.querySelector('#changeColourNoteTitle');
	const changeColourBody = document.querySelector('#changeColourBody');
	let xtraFieldPara = document.createElement('p');
	prefWindow.setAttribute('class','hidden');
		changeColoursWin.setAttribute('class','showing');

		//js code for change colours here
		changeColourListItem.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  changeColourListItem.style.backgroundColor = rndCol;
  //set global variable
  noteListItemColour = rndCol;
});//end brace bracket for changeColourListItem.addEventListener
		
		changeColourNoteTitle.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  changeColourNoteTitle.style.backgroundColor = rndCol;
  //set global variable
  noteTitleColour = rndCol;
  });//end brace bracket for changeColourNote.addEventListener
  
  changeColourBody.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  changeColourBody.style.backgroundColor = rndCol;
  
  //set global variable
  bodyColour = rndCol;
});//end brace bracket for changeColourNote.addEventListener

if (xtraField === 1) {
	changeColourListItem.appendChild(xtraFieldPara);
	xtraFieldPara.textContent = 'Tap here to change current background colour of the ( ' + newFieldName + ' ) extra field.'
	xtraFieldPara.addEventListener('click', function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  xtraFieldPara.style.backgroundColor = rndCol;
  
  //set global variable
  xtraFieldColour = rndCol;
});//end brace bracket for xtraFieldPara.addEventListener
}//end if xtraField === 1

let fontColourBtn = document.createElement('button');
      fontColourBtn.textContent = 'Text - WHITE/BLACK';
      changeColoursWin.appendChild(fontColourBtn);	  

let defaultBtn = document.createElement('button');
      defaultBtn.textContent = 'DEFAULT COLOURS';
      changeColoursWin.appendChild(defaultBtn);

let doneBtn = document.createElement('button');
      doneBtn.textContent = 'DONE';
      changeColoursWin.appendChild(doneBtn);

	fontColourBtn.onclick = function () {
		if (toggle === 0) {
			toggle = 1;
		changeColourListItem.style.color = "white";
	//changeColourNoteTitle.style.color = "white";
  //set global variable 
	//changeColourBody.style.color = "white";
   //set global variable
   fontColour = "white";
   fontColourBtn.textContent = 'Text - BLACK';
  // displayData(); 
 		}//end if !toggle
		
	else if (toggle === 1) {
		toggle = 0;
		changeColourListItem.style.color = "black";
	//changeColourNoteTitle.style.color = "black";
  //set global variable 
	//changeColourBody.style.color = "black";
   //set global variable
   fontColour = "black";
   fontColourBtn.textContent = 'Text - WHITE';
 //  displayData(); 
	}//end if toggle=1
	
	
  };//end fontColourBtn.onclick  
	  
	  defaultBtn.onclick = function () {
		  saveBtn.setAttribute('class', 'colorBtn');
	changeColourListItem.style.backgroundColor = "yellow";
		  noteListItemColour = "yellow";	
	changeColourNoteTitle.style.backgroundColor = "yellow";
  //set global variable
          noteTitleColour = "yellow";  
	changeColourBody.style.backgroundColor = "yellow";
   //set global variable
          bodyColour = "yellow";
		  
	if (xtraField === 1) {
	xtraFieldPara.style.backgroundColor = "yellow";
  
  //set global variable
  xtraFieldColour = "yellow";	
		
	}//end if xtraField = 1
	//set font colour to default black
changeColourListItem.style.color = "black";
fontColour = "black";
fontColourBtn.textContent = 'Text - WHITE';

	changeColoursWin.removeChild(doneBtn);
	changeColoursWin.removeChild(defaultBtn);
  changeColoursWin.removeChild(fontColourBtn);
  
  if (xtraField === 1) {
	  changeColourListItem.removeChild(xtraFieldPara);
  }//end if (xtraField ===1)
   changeColoursWin.setAttribute('class','hidden');
	  prefWindow.setAttribute('class','showing');
	  displayData();  
		  
	  };//end defaultBtn.onclick
	  
	  
		  //code for done here
		
		  
	  doneBtn.onclick = function () {
		  saveBtn.setAttribute('class', 'colorBtn');
		//code for done here
		changeColoursWin.removeChild(doneBtn);
	changeColoursWin.removeChild(defaultBtn);
  changeColoursWin.removeChild(fontColourBtn);
  
  if (xtraField === 1) {
	  changeColourListItem.removeChild(xtraFieldPara);
  }//end if (xtraField ===1)
  changeColoursWin.setAttribute('class','hidden');
	  prefWindow.setAttribute('class','showing');
	  displayData();
  };//end doneBtn.onclick
  //need random function in the change colour section
  function random(number) {
        return Math.floor(Math.random()*number);
	}//end curly brace of function random
	
}//end curly bracket function changeColours
		//end function changeColours
	
	//start function addField from addFieldBtn.onclick via settings.preferences window
	function addField () {
		const enterNewFieldName = document.querySelector('#newFieldName');
		const confirmNewFieldName = document.querySelector('#confirm');
	//color save btn yellow so user knows to save xtraField variable now = 1	prefWindow.setAttribute('class','hidden');
	saveBtn.setAttribute('class', 'colorBtn');
		addFieldWin.setAttribute('class','showing');
		//js code for addField here
		
	//	const enterNewFieldName = document.querySelector('#newFieldName');
	//	const enterNewFieldData = document.querySelector('#newFieldData');
		enterNewFieldName.addEventListener('input', function () {
			//alert('in addField newFieldName = ' + enterNewFieldName.value);
			newFieldName = enterNewFieldName.value;
		confirmNewFieldName.textContent = 'New Field name entered is ' + newFieldName;
			//alert('newFieldName = ' + newFieldName);
	 });//end enterNewFieldName.onsubmit
	/*	enterNewFieldData.onsubmit = function () {
			xtraFieldData = enterNewFieldData.value;
		};//end enterNewFieldData.onsubmit */
		//finished with addField
		let doneBtn = document.createElement('button');
      doneBtn.textContent = 'DONE';
      addFieldWin.appendChild(doneBtn);
	  
	 const rerunNotice = document.querySelector('#resetAddField');
	  rerunNotice.textContent = 'Now close app and rerun code to add the extra field. This is a one-time event!!';
	  doneBtn.onclick = function () {
		  //code for done here
		//get app code to rerun?!!
	//	alert('newFieldName = ' + newFieldName);
	xtraField = 1;
	ver = 2;
		  addFieldWin.removeChild(doneBtn);	addFieldWin.setAttribute('class','hidden');//change back to hidden!!!
	  prefWindow.setAttribute('class','hidden');//change back to hidden
	  
	  
	  //code to reset database with new field
	  let request = window.indexedDB.open('notes_dbx', ver); //seems to then go to start of code ? to onupgradeneeded??
	  request.onerror = function() {
  console.log('Database failed to open');
};
request.onsuccess = function() {
  console.log('Database opened after addField successfully');
   
db = request.result;
//why do I need displayData below. does it cause a repeat display of record 1?.?
displayData();
};//end request.onsuccess handler function .. a success event has triggered the success callback; 
request.onupgradeneeded = function(e) {
	 
let db = e.target.result;
let objectStore = db.createObjectStore('notes_os', { keyPath: 'id', autoIncrement:true });
objectStore.createIndex('title', 'title', { unique: false });
  
  //addind date of note creation
  objectStore.createIndex('created', 'created', { unique: false });
  //end code for adding date created
  objectStore.createIndex('body', 'body', { unique: false });
  //CODE FOR xtraField basically substituting xtraField for body
  if (xtraField===1) {
	  objectStore.createIndex('xtraField', 'xtraField', { unique: false });
  }//end if xtraField
   //createIndex() takes an optional options object that refines the type of index that you want to create
 
   
   //PLAN FOR XTRA FIELD: Create xtraField (body), xtraField (body). use if xtraField true create a string with first line fieldName rtn then data input from entry. version number will be set to 2 to trigger onupgradeneeded

  console.log('Database setup after addField complete');
  //why do I need displayData here?
  displayData();
};//end request.onupgradeneeded handler

//addData;//creates newItem object
  };//end doneBtn.onclick
		
}//end curly bracket function addField
		//end function addField
		
//view creation date option set
function viewCreationDate () {
	//dateP.style.color = 'black';
	//alert('in viewCreationDate after creationDateBtn.onclick');
	//dateColorBtn declared at top of code
	//const dateColorBtn = document.createElement('button');
	//if (dateColorBtn) {prefWindow.removeChild(dateColorBtn);}
dateColorBtn.textContent = 'Toggle Date Colour';
//notifyP.appendChild(dateColorBtn);
	if (!viewDateWritten) {
	viewDateWritten = true;//tell dateP to display in displayData()
	creationDateBtn.textContent = 'Hide Creation Date';
	//let notifyP = document.createElement('p');
	notifyP.textContent = "Creation dates will now be visible..Choose colour.";
	prefWindow.appendChild(notifyP);
	prefWindow.appendChild(dateColorBtn);
	doneOnce = 1;
	}//end if !viewDataWritten
	else if (viewDateWritten) {
		viewDateWritten = false;
		creationDateBtn.textContent = 'Show Creation Date';
	
	notifyP.textContent = "Creation dates will now be hidden";
	displayData();
	//line below gives error object can not be found here but program still works with it here. also works after removing it!
	//prefWindow.removeChild(dateColorBtn);
	
	/*This code to change color of creation date*/
		prefWindow.appendChild(notifyP);
	/*	if (doneOnce === 1) {
		prefWindow.removeChild(dateColorBtn);
	}//end if doneOnce */
		//prefWindow.removeChild(dateColorBtn);
	}//end else if
	
	dateColorBtn.onclick = dateColor;
	
		function dateColor () {
		
		if (boggle) {
			dateShade = "white";//dateP inWHITE displayData
			
			dateColorBtn.textContent = 'Date Colour -> Black';
			boggle = false;
			notifyP.textContent = "Creation dates will now be visible in white.";
			displayData();
		} else if (!boggle) {
			dateShade = "black";//BLACK
		
			dateColorBtn.textContent = 'Date Colour -> White';
			boggle = true;
			notifyP.textContent = "Creation dates will now be visible in black.";
			displayData();
		}//end else if
		
		displayDataBtn.setAttribute('class', 'colorBtn');
	}//end function dateColor
	//prefWindow.removeChild(dateColorBtn);
	//if remove btn here it never appears!
	//put code to redisplay notes here after choosing view creation date or not-- NOT; see line 634

  }//end function viewCreationDate
	
}//end options function ...  all code using const variables including change colour and addField has to be included in the pref options function so variables are identified

//end preferences window section

//add note section variables declared in menu section ..from main menu
addNoteBtn.onclick = function () {
//saveBtn.disabled = false;//change back to false remove if messed up
	counter = counter + 1;

console.log('at addNoteBtn.onclick'); addNoteWindow.setAttribute('class','showing');
 //add date button here?
 addDateBtn = document.querySelector('#addDate');
	addDateBtn.onclick = function (e) {
		addDateBtn.disabled = true;
//had to add let for let date = to avoid assign to read only error
//date already declared
	// let date = new Date();
/*	 //add code to remove GMT PDT from date here remove this section if messed up
	 let string =
	 alert(string);
	  //remove this section if messed up
	*/ 
	 
	 noteDate = true;
	 alert(date);
};//end addDateBtn.onclickBtn.onclick
/**/
 //CODE FOR XTRA FIELD INPUT FOR NEW NOTE

 if (xtraField===1) {

addNoteWindow.appendChild(inputXtraFieldData);
	instructionPxtraFieldData.textContent = 'Add data for ' +  newFieldName + ' here:';
	inputXtraFieldData.onsubmit = function () {
		xtraFieldData = inputXtraFieldData.value;
		//form.onsubmit (createnote button should now take you to addData()
	};//end inputXtraFieldData.onsubmit
 }//end if xtraField
 
 //END CODE FOR XTRA FIELD INPUT NEW NOTE
	cancelNewNoteBtn = document.querySelector('#cancelNewNote');
	cancelNewNoteBtn.onclick = function (e) {
	 //added preventDefault to prevent keyboard from appearing after pressing cancel button.
		e.preventDefault();
	addNoteWindow.setAttribute('class','hidden');
		};//end cancelNewNoteBtn.onclick
		
};//end addNoteBtn.onclick

//About Database section
aboutDBBtn.onclick = choices;

function choices () {
	aboutDBBtn.disabled = true;
	const getMemoryBtn = document.querySelector('#getMemory');
	const getDocumentationBtn = document.querySelector('#documentation');
	const viewSettingsBtn = document.querySelector('#viewSettings');

	const clearAboutDBWindow = document.querySelector('#clearAboutDBWindow');
	const numberNotes = document.createElement('p');
//disable aboutDatabase button so that it can't be clicked again while showing the about database window

aboutDBWindow.setAttribute('class','showing');
	getMemoryBtn.onclick = getMemory;//this function is in script section of main html file
	getDocumentationBtn.onclick = documentation;
	//view settings prior to setup causes blank page and error
	//alert('at view settings button..setup = ' + setup);
	if(setup===0) {viewSettingsBtn.disabled = true;
	} else if (setup===1) {
		viewSettingsBtn.disabled === false;
	}//end if setup
	
	viewSettingsBtn.onclick = viewSettings;
	
	numberNotes.textContent = 'Number of notes in Database = ' + counter;
	aboutDBWindow.appendChild(numberNotes);
	
	clearAboutDBWindow.onclick = function () {
		aboutDBWindow.removeChild(numberNotes);
	aboutDBBtn.disabled = false;	aboutDBWindow.setAttribute('class','hidden');}; //end clearAboutDBWindow.onclick
	}//end function choices

function documentation () {
	const documentationWindow = document.querySelector('#documentationWin');	documentationWindow.setAttribute('class','showing');
	let doneBtn = document.createElement('button');
      doneBtn.textContent = 'DONE';
      documentationWin.appendChild(doneBtn);
	  doneBtn.onclick = function () {
		 
		//get ready for next instance of viewing documentation
		documentationWin.removeChild(doneBtn);
      	documentationWin.setAttribute('class','hidden');
	  aboutDBWindow.setAttribute('class','showing');
  };//end doneBtn.onclick
	//documentation manual code goes here
}//end documentation function

//addDate function keep here until deciding if needed in edit note section
function addDate () {
	addDateBtn.disabled = true;
	date = new Date();
	noteDate = true;
	alert(date);
}//end date function


//probably can remove function saveUpdate
//end function saveUpdate

//second try saveVariables

function saveVariables () {
	//setup = 1;
	//aboutDBBtn.disabled = false;
	//ReferenceError: Can't find variable: viewSettingsBtn
	//viewSettingsBtn.disabled === false;
	console.log('In saveVariables .. ')
	saveBtn.setAttribute('class', 'normalBtn');
	saveBtn.textContent = 'SAVED';
	
	alert('Saving Variables. Tap OK to continue.');
	//newItem might not have to be here??
	newItem = { title: xtraField,
		created: todayString, body: newFieldName };
	//keyPath.value = Number('variables');
 //created: new Date() changed to todayString
	//cursor.value.id = Number('variables');
//or try keyPath: 'variables'	
//or keyPath: Number('variables');

//FIRST activating then saving to 1st record of notes-variables

//repeat code to SAVE TABLE VARIABLES
//start one transaction to work on both _os..otherwise you get errors about transaction inactive etc
	
let transaction = db.transaction(['notes_os'], 'readwrite');
//  let objectStoreV = transaction.objectStore('notesVariables_os');
  
  // requestV = objectStoreV.get(1);
  // requestV.onsuccess = function(event) {
	//   console.log('Now in onsuccess of saveTableVariables');
	otherVariablesArray = [tableExists,originalNumberRecords,nextFieldName,numberOfFields,numberOfAdditionalFields,tableTitle,paraBody,displayXtraFieldData];
	variable3 = showExtraField;
	
//	var dataV = event.target.result;
//	ReferenceError: Can't find variable: variable3
//use if setup===0 so these object members are initialized to "0" only if this is a new db never setup before. Otherwise these variables will always be reset to initial values rather than the values you want to keep stored.
//if(setup===0) {//need to declare datav otherwise you get this error:TypeError: undefined is not an object (evaluating 'dataV.tableArray = tableArray')
	dataVobj = {
  tableArray: tableArray,
  fieldNamesArray: fieldNamesArray,
  otherVariables: otherVariablesArray,
  variable3: variable3
 };//end declaration of dataV object
// }//end if setup===0
//assign data to the dataV object members prior to saving
//maybe need if gotName =1 make assignments below?
dataVobj.tableArray = tableArray;
	dataVobj.fieldNamesArray = fieldNamesArray;
	//save dbtable name
	dataVobj.otherVariables = otherVariablesArray;
	dataVobj.variable3 = variable3;
	
	console.log('Tablevariables edited! dataVobj.tableArray now = '+ dataVobj.tableArray);
	//TransactionInactiveError: Failed to store record in an IDBObjectStore: The transaction is inactive or finished.
	//so I will repeat setting up transaction again here
	
	
	//ReferenceError: Can't find variable: requestUpdateV
	//I THINK THIS SHOULD READ 'var requestUpdateV = objectStoreV.put (dataV);' !!!!!!!	might this be the cause of the added admin records?before was objectStore not objectStoreV
	// var requestUpdateV = objectStoreV.put(dataV);
	  
	
 //   requestUpdateV.onerror = function(event) {
 //     // Do something with the error
	//  console.log('Whoops! ERROR! saving Table variables. Transaction now inactive!');
 //   };//end requestupdate.onerror
 //   requestUpdateV.onsuccess = function(event) {
 //     // Success - the data is updated!
	//  console.log("In requestUpdate.onsuccess of save TABLE Variables after put data in requestUpdate. The record is updated! showExtraField = " + showExtraField + " otherVariablesArray[1] = " + otherVariablesArray[1]);
 // }//end requestUpdate.onsuccess
	//  transaction.oncomplete = function() {
	// 	 console.log('Transaction completed: database TABLE variables modification finished. In saveVariables function..now opening notes_os');
	// 	 }//end transaction.oncomplete
	// }//end request.onsuccess
	// 	 //end code to SAVE TABLE VARIABLES



//now carrying on to activate and then save to 1st record of notes_os 

  
  let objectStore = transaction.objectStore('notes_os');
  
   request = objectStore.get(1);
   //above is asynchronous so it appears code returns to top and then getDatabaseNameeven though setup has not yet been set to 0 by saveVariables?
  request.onsuccess = function(event) {
	  console.log('Now in onsuccess of saveVariables');
	//original note in data variable
	var data = event.target.result;
	//create the tools for doing the edit
	//console.log('Will edit item # ' + data.id + ' ' + data.body);
	
		//setup = 1; moved to after data object assigned values if setup = 0 !!!!

	//setup = 1;
//variable2Array now declared at start ? should remove this??
   	variable2Array = [setup,noteListItemColour, noteTitleColour, bodyColour, xtraFieldColour, fontColour, tableExists];
	
	// if(data.title === undefined) {
	// 	alert('Database is initializing!' + data.title);
	// 	data.title = 'initialize';
	// 	data.created = 'initialize';
	// 	data.body = 'initialize';
	// 	data.variable1 = 'initialize';
	// 	data.variable2 = 'initialize';
	// 	var requestInitialize = objectStore.put(data);
	// 	requestInitialize.onsuccess = function () {alert('Database is initializing');}
	// }//end if data.title = undefined
	
	// 	const objectName = {
//   member1Name: member1Value,
//   member2Name: member2Value,
//   member3Name: member3Value
// };

// !!!!!code below if left without 0 condition,  causes save to add an extra administion window to bottom of display after each tap of the save button. 0 condition is added so it only runs if new uninitialized database.(setup = 0) Not tested. This is to avoid Type Error: data.body is not an object when evaluating data.body undefined!!!!
if (setup === 0) {
data = {
  title: xtraField,
  created: todayString,
  body: newFieldName,
  variable1: dbTableName.value,
  variable2: variable2Array,
  dataV: dataVobj
  };//end declaration of data object
}//end if setup =0
	
    data.title = xtraField;
	data.body = newFieldName;
	//save dbtable name
	data.variable1 = dbTableName.value;
	//data. arianle2
	
	//line below was ..  data.variable2t = setup;
	//to save setup variable as 1 you have to make variable2Array[0] = 1 prior to assigning new values to data.variable2
	variable2Array[0] = 1;//setup variable
	data.variable2 = variable2Array;
	data.dataV = dataVobj;
	setup = 1; //moved to after data object assigned values if setup = 0 !!!!
	console.log('notes_os variables edited! About to put (data) in next line of code. variables edited! Data.body (should be newFieldName) now = '+ data.body+ ' tableArray (data.dataV.tableArray) = ' + data.dataV.tableArray + ' variable3 (data.dataV.variable3) = ' + data.dataV.variable3);
	//variables edited! Data.body now = undefined
	
	//adding put statement because before an admin note was added to display after tap of save btn
	//request = objectStore.get(1);
	  var requestUpdate = objectStore.put(data);
	  
	
   requestUpdate.onerror = function(event) {
     // Do something with the error
	 console.log('Whoops! ERROR! Transaction now inactive!');
   };//end request.onerror
   requestUpdate.onsuccess = function(event) {
     // Success - the data is updated!
	 console.log("In requestUpdate.onsuccess of saveVariables .. notes_os, after put data in requestUpdate. The record is updated!");
	//displayData();
	 titleInput.value = '';
	 bodyInput.value = '';
	 inputXtraFieldData.value = '';
	 newTitle.value = '';//clear newTitle input 
 		};//end requestUpdate.onsuccess #2
			
//		}//end function changeVariables
	
	
  transaction.oncomplete = function() {
    console.log('Transaction completed: database variables and Table variables modification finished. This instance of transaction.oncomplete is after put (data) to notes_os. Transaction completed: database variables in notes_os, and Table variables in dataVobj. Modification finished. In saveVariables function..going to displayData. If comming from onupgradeneeded, after saveVariables, the first (admin) record will have been created, so there will be a cursor, so setup will be = 1. Note however that setup = 1 in the saveVariables code after assigning all the variables.');

	
	
	
	//trying to prevent repeat display of records REMOVE IF MESSED UP!!!!! |
while (list.firstChild) {
    list.removeChild(list.firstChild);
}
//remove above if it messes up!

//maybe need to make displayData below conditional on not having had a record deleted????Date: Dec 9 2020 see line 1066
//Left off here Dec 10 FIND WHERE DISPLAYDATA NEEDED AFTER RETURN TO HOME SCREEN,!!
if (!deleteTableRecord) {
	displayData();
}//end if !deleteTableRecord..to prevent repeat of end element if displayData runs concurrently twice?Date:Dec19 NEED THIS TO PREVENT REPEAT LISTING OF RECORDS IN displayData and increasing tableTitle.length after displayTable post a deleteItem..deleted table record

	};//end transaction oncomplete
	transaction.onerror = function() {
		console.log('Transaction not opened due to error');
	};//end transaction onerror
	
};//end request.onsuccess #1  
 
}//end saveVariables

//search records code section

function searchRecords () {
//should I add a count to find record clicks to force clearing of resultList after so many elements appear to not allow btns to disappear off screen? Jan 22

searchWindow.setAttribute('class','showing');
	const cancelSearchBtn = document.querySelector("#cancelSearch");
	cancelSearchBtn.onclick = function (){
		searchWindow.setAttribute('class','hidden');
		//THIS CODE WILL CLEAR HIGHLIGHT IF CANCEL NOT TRIED YET,!!!!!Feb 7 2021 maybe should be separate button on table screen?
	// 	refreshed = 1;
	// 	renewed = 1;
		
	// 	showTable.setAttribute('class', 'hidden');
	// 	while (STrows.firstChild) {
   // STrows.removeChild(STrows.firstChild);
	// 	}//end while

	// 	displayTable();
	// 	renewed = 0;
	// 	refreshed = 0;
		
	}//end cancelSearchBtn.onclick
	
	const clearSearchTitleBtn = document.querySelector("#clearSearchTitle");
	const searchTitleInput = document.querySelector('#inputSearchRecord'); //should this variable be  made global (at top of code) so it can be used br fullItemView major crash program stops running here????
	const searchForRecordBtn = document.querySelector('#searchForRecord');
	clearSearchTitleBtn.onclick = function () {
		searchTitleInput.value = "";
		searchRecords();//REMOVE IF MESSED UP JAN24 fixes repeat registration of addEventListener!
			}//end clearSearchTitleBtn.onclick
			
	const highLightTableBtn = document.querySelector('#viewRecordTable');
	highLightTableBtn.onclick = highlightTable;
		
	//}//end highLightTableBtn.onclick
	
	let resultList = document.querySelector("#result-list");		
//clear found records list
	const clearRecordListBtn = document.querySelector('#clearFoundList');
		
	const liMatchedRecord = document.querySelector('#matchedRecord');
	const matchedRecord = document.createElement('li');
	const addP = document.createElement('p');
	//let caseSensitive = false;	//make global
	const caseIndicator = document.querySelector('#caseIndicator');
	if (caseSensitive) {
		caseIndicator.textContent = "Search is CASE SENSITIVE! (Change in Preferences)";
	} else if (!caseSensitive) {
		caseIndicator.textContent = "Search is NOT CASE SENSITIVE (Change in Preferences)";
	}//end if caseSensitive

//LEFT OFF HERE JAN22 now need to make caseSensitive Btn!!	
console.log('caseSensitive = ' + caseSensitive);
	searchForRecordBtn.onclick = function () {
		//remove if screw up..trying to prevent repeaT alerts after addEventListener registers more than once on target element. addP does help but not alwaysthe trick because a new element is created each time? Will keep for aesthetics. I think what happens is if you just clear the input and then enter another record for search, the record title is put in the same li element as before and a second addEventListener is added to this element. BUT if after entering the record title as input AND THEN go to table to see highlight OR go to view full record, the next record title that is searched for is put in a new addP and no extra addEventListener is registered. I think because searchRecord() is called afresh when coming from table or viewFullNote. n So how to avoid clearing the input without going to table or viewFullWindow??Suggest disable clearInput Btn after a tap and Renable after tapping all the other btns
		
		resultList.appendChild(addP);
		//remove above if screw up Jan 22 2021
	console.log('searchTitleInput = ' + searchTitleInput);
		let searchFor = searchTitleInput.value;
		//let searchedRecordTitle = [];
		if (!caseSensitive) {
			query = searchFor.toLowerCase();
		} else {
			query = searchFor;
		}//end if !caseSensitive
	console.log('query = ' + query);
	// let resultList = document.querySelector("#result-list");
	resultList.innerHTML.textContent = "";
	//TypeError: null is not an object (evaluating 'resultList.innerHTML = ""')
	// tableTitle.map(function(algo){
   //      query.split(",").map(function (word){
   // //Everytime the ‘if’ condition passes, we need to add the ‘algo’ to the result list in the html page. For this, we can create a DOM object of the list and update its ‘innerHTML’.  
   //WILL HAVE TO EXTRACT ARRAY TO BE SEARCHED AFTER cursor.value.I’d is extracted
   
   // console.log('tableTitle[1] = ' + tableTitle[1]);
   // let stringToSearch = tableTitle[1].toString();
   // console.log('stringToSearch = ' + stringToSearch);
   // let position = stringToSearch.indexOf('>');
   // console.log('position = ' + position);
   // searchedRecordTitle[1] = tableTitle[1].slice(position+1);
   // console.log('searchedRecordTitle[1] = ' + searchedRecordTitle[1]);
   // alert('stop here');
   //trim tableTitle of recordId so search entry at input will match
   for(let i = 0; i < tableTitle.length; ++i) {
	 //strip off noteId so search will match query Use +1 because otherwise the < is included. If you add a space this should be 2?
	   searchedRecordTitle[i] = tableTitle[i].slice(tableTitle[i].indexOf('>')+2);
	   if (!caseSensitive) {
		   searchedRecordTitle[i] = searchedRecordTitle[i].toLowerCase(); 
	   }//end if !caseSensitive
   }//end for i
   
  // let matchedRecordIndex = searchedRecordTitle.indexOf(query);
  // if (caseSensitive) {
	  
  
  //  	matchedRecordIndex = searchedRecordTitle.indexOf(query);
  //  console.log('matchedRecordIndex = ' + matchedRecordIndex);
   
	// } //end if caseSensitive

	
	 
	matchedRecordIndex = searchedRecordTitle.indexOf(query);
	console.log('matchedRecordIndex = ' + matchedRecordIndex);


   //if(algo.toLowerCase().indexOf(word.toLowerCase()) != -1){
	  // resultList.innerHTML.textContent = tableTitle[matchedRecordIndex];
	  //  resultList.innerHTML += `<li class="list-group-item">tableTitle[matchedRecordIndex]</li>`;
	  if (matchedRecordIndex === -1) {
	//changed query to searchTitleInput.value so the actual search input is shown..not the corrected lowercase input Date: Feb 11	  
		  liMatchedRecord.textContent = searchTitleInput.value + " .. Record not found";
	//NotFoundError: The object can not be found here.	  resultList.removeChild(matchedRecord);
	  }//end if matchedRecordIndex = -1
	  // liMatchedRecord.textContent = tableTitle[matchedRecordIndex];
	   let findRecord = tableTitle[matchedRecordIndex];
	  console.log("findRecord = " + findRecord);
		matchedRecord.textContent = tableTitle[matchedRecordIndex];
		
		//trying to prevent repeat alerts from repeat registering of addEventListener which happens if not found event occurs as first search
		//remove if (matchedRecordIndex !== -1) if screw up This prevents matchedRecord from appearing empty as record not found msg appears in matchedRecordLi
	if (matchedRecordIndex !== -1) {
		resultList.appendChild(matchedRecord);
		}//end if (matchedRecordIndex !== -1)
		//searchWindow.appendChild('matchedRecord');
		//TypeError: Argument 1 ('node') to Node.appendChild must be an instance of Node
		//ReferenceError: Can't find variable: $algo
		//experiment change resultList to matchedRecord
		matchedRecord.addEventListener('dblclick', function (e) {
			//remove if messes up tdying to prevent repeat registration of addEventListener
			resultList.appendChild(addP);
			//let once = true;
  // for (let i = 0;i < tableTitle.length; ++i) {
	//   if (searchedRecordTitle[i] === query) {
	//	   searchNote = tableTitle[i].splice(0,indexOf('<'));
			searchNote = findRecord.slice( 0,findRecord.indexOf('>'));
	console.log('searchNote = ' + searchNote);
		   fromSearchRecord = true;
		   fullViewItem();
		   //highlight in table in case you go to table after search
		   
		   searchWindow.setAttribute('class','hidden');
		   
	  //match table highlight to double clicked item REMOVE IF MESSED UP
	  matchedRecordIndex = tableTitle.indexOf(findRecord);
 //  }//end for loop
 
 //code to prevent repeat alerts makes no difference
 console.log(this.className)           // logs the className of my_element
 console.log(e.currentTarget === this) // logs `true
 if (e.currentTarget) {
	 matchedRecord.removeEventListener('dblclick', function (e) {
	 	
	 });
 }//end if e.currentTarget
 //end code to prevent repeat alerts
   },true);//end function addEventListener
   //true did not do anything
	   //remove if screws up!
	searchRecords();//REMOVE IF MESSED UP JAN24 fixes repeat registration of addEventListener! If re-entering query into input without any action on previous item in recordList   
	
}////end searchForRecoedBtn.onclick function

clearRecordListBtn.onclick = function() {
	console.log('At clearRecordListBtn.onclick');
	while (resultList.firstChild) {
    resultList.removeChild(resultList.firstChild);
}//end while
liMatchedRecord.textContent = "If record found it will appear below: Double tap to view its notes";
}//end clearFoundRecordLizt




//functions used in searchRecords function

//This will keep adding items to the list as the function is called. The items will keep stacking up. To avoid this, we need to truncate the list at beginningning of the function itself. So, finally your code should look like this.
}//END FUNCTION SEARCHRECORDS
	
	// Iterate through the array to linearly check each element if the entered words match the array elements. To check if it matches, you can use the Array.indexOf() function. If it returns -1 it doesn’t match. We need to call the indexOf() function f or each of the words the user enters. We can do that by using the split() and map() functions. Don’t forget to use String.toLowerCase() to ignore case sensitivity.

//  Don’t forget to use String.toLowerCase() to ignore case sensitivity.

function highlightTable () {
		fromSearchRecord = true;
	
		refreshed = 1;//to keep field titles from repeating use refresh=1 (same for if edit = 1)
		
		renewed = 1;//variable in refreshTable()to create header row in displayTable when coming from refrehTable ?? Might not need this
		searchWindow.setAttribute('class','hidden');
		showTable.setAttribute('class', 'showing');
		while (STrows.firstChild) {
   STrows.removeChild(STrows.firstChild);
}//end while

		displayTable();
		renewed = 0;
		refreshed = 0;
	}//end function highlightTable


//end search records code section



function load () {  
	if(saveBtn.textContent === 'SAVED') {
		saveBtn.textContent ='SAVE';
	}//end if saveBtn.textContent
//let noteId = Number('variables');

let transaction = db.transaction(['notes_os'], 'readwrite');
  //reference/put the activated 'notes-os' object store into the variable objectStore
  let objectStore = transaction.objectStore('notes_os');
 
let request = objectStore.get(1);
request.onsuccess = function(event) {
	//original note in data variable
	var data = event.target.result;
console.log('at request.onsucces in load function');
console.log('In LOAD...get(1) data.body = '+ data.body + 'newFieldName = ' + newFieldName);

xtraField = data.title;
newFieldName = data.body;

console.log('In LOAD...get(1) after assigment.. data.body = '+ data.body + 'newFieldName = ' + newFieldName);
//alert('newFieldName = ' + newFieldName + ' . The value of variable xtraField = ' + xtraField);
//get dbTableName

dbTableName.value = data.variable1;
variable2Array = data.variable2;
//alert(variable2Array);
setup = variable2Array[0];
noteListItemColour = variable2Array[1];
noteTitleColour = variable2Array[2];
bodyColour = variable2Array[3];
xtraFieldColour = variable2Array[4];
fontColour = variable2Array[5];
tableExists = variable2Array[6];//change to tableExists when needed!!!!!!
//unpack dataVobj

dataVobj = data.dataV;
tableArray = dataVobj.tableArray;
 fieldNamesArray = dataVobj.fieldNamesArray;
 otherVariablesArray = dataVobj.otherVariables;
 variable3 = dataVobj.variable3;
 //remove line below if doesn't work
 showExtraField = variable3;
 
 tableExists = otherVariablesArray[0];
 originalNumberRecords = otherVariablesArray[1];
 
 console.log('In LOAD dataVobj...get(1) otherVariablesArray[1] = '+ otherVariablesArray[1] + ' newFieldName = ' + newFieldName + ' showExtraField (dataVobj.variable3) now = ' + dataVobj.variable3);
 
 nextFieldName = otherVariablesArray[2];
 numberOfFields = otherVariablesArray[3];
 numberOfAdditionalFields = otherVariablesArray[4];
 tableTitle = otherVariablesArray[5];
 paraBody = otherVariablesArray[6];
 displayXtraFieldData = otherVariablesArray[7];
 
 //END OF LOAD IN TABLE VARIABLES


//can't find variable load error caused by curly brackett below!?!????..therefore commented out because its extra and should not be here..its further down

//};//end request.onsuccess !!!!!Lof objectstore get 1

//LOAD IN TABLE VARIABLES
//repeat code to LOAD TABLE VARIABLES
	
// 	let transactionV = db.transaction(['notesVariables_os'], 'readwrite');
//   let objectStoreV = transactionV.objectStore('notesVariables_os');
  
//   requestV = objectStoreV.get(1);
//   requestV.onsuccess = function(event) {
// 	  console.log('Now in onsuccess of getTableVariables in LOAD function');
// 	  //still have to create tableTitle, paraBody, and displayExtraFieldData arrays
// 	  //may not need to declare otherVariablesArray here because I did at start???!!!!
// 	otherVariablesArray = [tableExists,showExtraField,nextFieldName,numberOfFields,numberOfAdditionalFields,tableTitle,paraBody,displayXtraFieldData];
// 	variable3 = "more variables here";
	
// 	var dataV = event.target.result;
// //I DON'T THINK I NEED TO DECLARE dataV variable here?	
// 	dataV = {
//   tableArray: tableArray,
//   fieldNamesArray: fieldNamesArray,
//   otherVariables: otherVariablesArray,
//   variable3: variable3
//  };//end declaration of dataV object
 
//  tableArray = dataV.tableArray;
//  fieldNamesArray = dataV.fieldNamesArray;
//  otherVariablesArray = dataV.otherVariables;
//  variable3 = dataV.variable3;
//  //assign data to the dataV object members prior to saving
//   //assign values to individual variables in from the otherVariablesArray
//  // otherVariablesArray = [tableExists,newFieldName,nextFieldName,numberOfFields,numberOfAdditionalFields,tableTitle,paraBody,displayXtraFieldData,];
 
 
//  tableExists = otherVariablesArray[0];
//  showExtraField = otherVariablesArray[1];
 
//  console.log('In LOAD dataV...get(1) otherVariablesArray[1] = '+ otherVariablesArray[1] + 'newFieldName = ' + newFieldName);
 
//  nextFieldName = otherVariablesArray[2];
//  numberOfFields = otherVariablesArray[3];
//  numberOfAdditionalFields = otherVariablesArray[4];
//  tableTitle = otherVariablesArray[5];
//  paraBody = otherVariablesArray[6];
//  displayXtraFieldData = otherVariablesArray[7];
 
//  //END OF LOAD IN TABLE VARIABLES
//END OF LOAD IN TABLE VARIABLES


//get saved dbTableName from previous Save by tapping the LOADbutton
document.getElementById("dbTableName").innerHTML = dbTableName.value;
displayData();
	};//end request.onsuccess of load in table Variables ?right place?
}//end load function

//build variable2 array
/*let 
   	variable2Array = [setup,noteListItemColour, noteTitleColour, bodyColour, xtraFieldColour, fontColour];
    */
//get database name
//getDataBaseNamefunctionfunction
function getDataBaseName () {  
	console.log('Arrived at getDataBaseName..did I come from first run of openDB?.About to make request objectStore.get[1]..setup = ' +setup);
//let noteId = Number('variables');

let transaction = db.transaction(['notes_os'], 'readwrite');
  //reference/put the activated 'notes-os' object store into the variable objectStore
  let objectStore = transaction.objectStore('notes_os');
 
let request = objectStore.get(1);

request.onsuccess = function(event) {
	//original note in data variable
	var data = event.target.result;
console.log('at request.onsuccess getting database name');

//alert('about to leave notes code...dbTableName.value = ' + dbTableName.value);
//get dbTableName
//running first run of db gives this error: TypeError: undefined is not an object (evaluating 'data.variable1')
//if (data.variable1.textContent === undefined) { 
//	dbTableName.value = "Unnamed";
//} else {dbTableName.value = data.variable1.textContent;}
//was dbTableName.value = data.variable1.textContent;
//get saved dbTableName from previous Save by tapping the LOADbutton}//end if data.variableName =

if (setup === 0) {
	dbTableName.value = 'Creating new Database. Tap SAVE to continue. Then rename Database in Preferences.';
	document.getElementById("dbTableName").innerHTML = dbTableName.value;
}//end if setup=0
dbTableName.value = data.variable1;

//at this point the program stops because of undefined is not an object in evaluating data.variable1 and I tap SAVE ..then go to saveVariables

document.getElementById("dbTableName").innerHTML = dbTableName.value;

//alert('now leaving notes code..just after dbTableName.value set to data.variable1.  data.variable1 = ' + data.variable1 +' dbTableName.value = ' + dbTableName.value);
//getsecond field name
console.log('In getDataBaseName...get(1) data.body = '+ data.body + 'newFieldName = ' + newFieldName);

newFieldName = data.body;

console.log('In getDataBaseName...get(1) after assignment to data.body = '+ data.body + 'newFieldName = ' + newFieldName);

xtraField = data.title;
//setup = data.variable2;
//load in values of data.variable2
variable2Array = data.variable2;
//alert(variable2Array);
//error msg on opening an ."old" db
//TypeError: undefined is not an object (evaluating 'variable2Array[0]')
setup = variable2Array[0];
console.log('Unpacking variable2Array .. variable2Array[0] = ' + variable2Array[0] + ' setup = '+setup);
if (setup === undefined) {setup = 0;}//end if setup = undefined
noteListItemColour = variable2Array[1];
noteTitleColour = variable2Array[2];
bodyColour = variable2Array[3];
xtraFieldColour = variable2Array[4];
fontColour = variable2Array[5];
tableExists = variable2Array[6];// hange to tableExists when needed
//unpack dataVobj
//undefined is not an object when evaluating dataVobj = data.dataV...so I declared dataVobj

//if comming from updateneeded, data.varable2Array will be undefined, so how will setup ever be made 0 when data.variable2 is undefined?
if (setup === 0) {
	console.log('In setup = 0 of getDataBaseName')
	// tableArray = "CN7035", "Oct 20 2020 22:21","Y2Trk2","TSU-1100","5","128","255","CN3205", "Oct 20 2020 22:21","Y3Trk2","Econami-PNP","15","128","255","CN6700","Oct 20 2020 22:21","Y3Trk8","TSU-1100","77","130","190";
	//should this line be here???!!!!?,?,?,
	redefineTableArray();
	//tableArray = [["CN7035", "Oct 20 2020 22:21","Y2Trk2","TSU-1100","5","128","255"],["CN3205", "Oct 20 2020 22:21","Y3Trk2","Econami PNP","15","128","255"],["CN6700","Oct 20 2020 22:21","Y3Trk8","TSU-1100","77","130","190"]];	
	//dataVobj = { difference with faalBack
		//dataVobj should be data.dataV .. if in getDataBaseName from onupgtadeneeded, data.dataV is empty and thus will produce undefined errors unless declared thus
data.dataV = {
  tableArray: tableArray,
  fieldNamesArray: fieldNamesArray,
  otherVariables: otherVariablesArray,
  variable3: variable3
};//end declaration of dataV object
 console.log('In if setup=0;before dataVobj = data.dataV {}  dataVobj.tableArray = ' +dataVobj.tableArray);
}//end if setup ===0
 
 
dataVobj = data.dataV;
//TypeError: undefined is not an object (evaluating 'dataVobj.tableArray')
 console.log('After dataVobj = data.dataV ..  dataVobj.tableArray = ' +dataVobj.tableArray);
tableArray = dataVobj.tableArray;
 fieldNamesArray = dataVobj.fieldNamesArray;
 otherVariablesArray = dataVobj.otherVariables;
 variable3 = dataVobj.variable3;
 //remove line below if doesn't work
 showExtraField = variable3;
 
 tableExists = otherVariablesArray[0];
 originalNumberRecords = otherVariablesArray[1];
 
 console.log('In getDataBaseName  dataVobj...get(1) originalNumberRecords = otherVariablesArray[1] = '+ otherVariablesArray[1] + ' newFieldName = ' + newFieldName + ' showExtraField (dataVobj.variable3) now = ' + dataVobj.variable3);
 
 nextFieldName = otherVariablesArray[2];
 numberOfFields = otherVariablesArray[3];
 numberOfAdditionalFields = otherVariablesArray[4];
 tableTitle = otherVariablesArray[5];
 paraBody = otherVariablesArray[6];
 displayXtraFieldData = otherVariablesArray[7];
 
 //END OF LOAD IN TABLE VARIABLES
 if (setup === 0) {
	data.variable1 = 'Creating new Database';
}//end if setup=0
console.log('data.variable1 = ' +data.variable1);
dbTableName.value = data.variable1;
document.getElementById("dbTableName").innerHTML = dbTableName.value;
//displayData();
while (list.firstChild) {
  list.removeChild(list.firstChild);
}
//remove above if it messes up!
displayData();

	};//end request.onsuccess
	
	
	//REPEAT CODE TO LOAD IN TABLE VARIABLES
	//LOAD IN TABLE VARIABLES
//repeat code to LOAD TABLE VARIABLES
//NotFoundError: Failed to execute 'transaction' on 'IDBDatabase': One of the specified object stores was not found.	
// 	let transactionV = db.transaction(['notesVariables_os'], 'readwrite');
//   let objectStoreV = transactionV.objectStore('notesVariables_os');
  
//   requestV = objectStoreV.get(1);
//   requestV.onsuccess = function(event) {
// 	  console.log('Now in onsuccess of getDataBaseName objectStoreV.get(1) of notesVariables_os');
// 	  //still have to create tableTitle, paraBody, and displayExtraFieldData arrays
// 	  //may not need to declare otherVariablesArray here because I did at start???!!!!
// 	  //will replace newFieldName with showExtraField
	  
// 	 //THE CODE HERE SHOULD READ:
// 	  tableExists = otherVariablesArray[0];
// 	  showExtraField = otherVariablesArray[1];
// 	  nextFieldName = otherVariablesArray[2];
// 	  numberOfFields = otherVariablesArray[3];
// 	  numberOfAdditionalFields = otherVariablesArray[4];
// 	  tableTitle = otherVariablesArray[5];
// 	  paraBody = otherVariablesArray[6];
// 	  displayXtraFieldData = otherVariablesArray[7];
// 	  //LEFT OFF HERE REPLACE CODE BELOW WITH ABOVE IN USE!experimentNotesTableVer10  
	  
// 	// otherVariablesArray = [tableExists,showExtraField,nextFieldName,numberOfFields,numberOfAdditionalFields,tableTitle,paraBody,displayXtraFieldData];
	
	
	
// 	variable3 = "more variables here";
	
// 	var dataV = event.target.result;
// //I DON'T THINK I NEED TO DECLARE dataV variable here?	

// //TypeError: undefined is not an object (evaluating 'dataV.tableArray')
// //console.log('tableArray = ' + tableArray);
// //console.log(' Before dataV declared...dataV.tableArray = ' +dataV.tableArray + 'tableArray =  ' +tableArray);
// //commenting out the above console.log avioded this error and program continued to run showing first record(which should be the second record) as a title of 0, in otherwords showing the admin record?
// console.log('tableArray = ' +tableArray);
// //if (setup === 0) {
// dataV = {
//   tableArray: tableArray,
//   fieldNamesArray: fieldNamesArray,
//   otherVariables: otherVariablesArray,
//   variable3: variable3
// };//end declaration of dataV object
//  console.log('after dataV = {}  dataV.tableArray = ' +dataV.tableArray);
// //}//end if setup ===0

//  tableArray = dataV.tableArray;
//  fieldNamesArray = dataV.fieldNamesArray;
//  otherVariablesArray = dataV.otherVariables;
//  variable3 = dataV.variable3;
 
//  //assign values to individual variables in from the otherVariablesArray
//  // otherVariablesArray = [tableExists,newFieldName,nextFieldName,numberOfFields,numberOfAdditionalFields,tableTitle,paraBody,displayXtraFieldData,];
//  console.log(' After dataV declared...tableArray = ' +tableArray + 'otherVariablesArray[1] = '+ otherVariablesArray[1] + ' otherVariablesArray[6] = ' + otherVariablesArray[6]);
 
//  tableExists = otherVariablesArray[0];
//  showExtraField = otherVariablesArray[1];
//  nextFieldName = otherVariablesArray[2];
//  numberOfFields = otherVariablesArray[3];
//  numberOfAdditionalFields = otherVariablesArray[4];
//  tableTitle = otherVariablesArray[5];
//  paraBody = otherVariablesArray[6];
//  displayXtraFieldData = otherVariablesArray[7];
//  //maybe put this line here so savevariables doesn't overwrite values on rerun
//  //gotName = 1;
//  	while (list.firstChild) {
//     list.removeChild(list.firstChild);
// 	}
// //remove above if it messes up!
// displayData();
// };//end requestV.onsuccess of objectStoreV get 1
 

// requestV.onerror = function(event) {
//  if (setup===0 | upgraded === 1) {
// 		console.log('requestV.onerror of getDataBaseName: At setup = 0. If upgraded === 1 or setup === 0 should go to saveVariables. If saveVariables not done then first addNote fails because first child has not been created by saveVariables and first addNote is not displayed! upgraded = ' + upgraded + '. setup = ' + setup);
// 		//remove line below if screw up
// 		//displayData below is not the answer because this makes 2 iterations of the first (really the second) note.
// 		//displayData();
// 		//!!! no brackets after saveVariables function so it didn't go there? ?ok not to have brackets if variable = function call, but NOT if just calling the function????!!! Yes now works after adding brackets to function call!
	
	
// 		saveVariables();
	
// 	}//end if setup=0
	
// 	else {
// 		//trying to prevent repeat display of records REMOVE IF MESSED UP!!!!! |
// 		while (list.firstChild) {
//     list.removeChild(list.firstChild);
// 	}
// //remove above if it messes up!
// displayData();
// 	}//end else
// }//end request.onerror (if record 1 does not yet exist)
//  //END OF LOAD IN TABLE VARIABLES
//  //go to saveVariables if new db so that first record for admin purposes is created
//  //(if record 1 does not yet exist)
 request.onerror = function(event) {
 if (setup===0 | upgraded === 1) {
		console.log('request.onerror of getDataBaseName: At setup = 0. If upgraded === 1 or setup === 0 should go to saveVariables. If saveVariables not done then first addNote fails because first child has not been created by saveVariables and first addNote is not displayed! upgraded = ' + upgraded + '. setup = ' + setup);
		//remove line below if screw up
		//displayData below is not the answer because this makes 2 iterations of the first (really the second) note.
		//displayData();
		//!!! no brackets after saveVariables function so it didn't go there? ?ok not to have brackets if variable = function call, but NOT if just calling the function????!!! Yes now works after adding brackets to function call!
	
	
		saveVariables();
	
	}//end if setup=0
	
	else {
		//trying to prevent repeat display of records REMOVE IF MESSED UP!!!!! |
		while (list.firstChild) {
    list.removeChild(list.firstChild);
	}
//remove above if it messes up!
displayData();
	}//end else
}//end request.onerror (if record 1 does not yet exist)
}//end getDataBaseName functionfunction


//MAKE TABLE CODE HERE
function tableScreenOptions () {
	editCurrentTable = 0;
	console.log('At tableScreenOptions...tableExists = ' + tableExists + '. edit =  ' + edit);
//clearTableWindow precedes  createTableWindow!! Create table window has the new and edit btns at top
	const clearTableWindow = document.querySelector('#clearTableWindow'); 
 const displayTableBtn = document.querySelector('#displayTable');
 const returnToNotesBtn = document.querySelector('#returnToNotes');
 const refreshTableP = document.createElement('p');//infoP to give option of refresh table
 refreshTableP.setAttribute('class','simulator');
 const refreshTableBtn = document.createElement('button');
 refreshTableBtn.textContent = "Update Table";
 refreshTableBtn.setAttribute('class','attentionBtn');
 //from newBtn.onclick..originalNumberRecords = undefined tableTitle.length = 3
 
 //ADDED THIS LINE DEC 29 so originalNumberRecords gets a value from load or getDataBaseName?
 originalNumberRecords = otherVariablesArray[1];
 if(!tableExists) {
	 originalNumberRecords = tableTitle.length;
 }//end if tableExists
 console.log('originalNumberRecords = '+ originalNumberRecords + ' otherVariablesArray[1] = ' + otherVariablesArray[1] + ' tableTitle.length = ' + tableTitle.length);
 console.log('editNote = ' + editNote + '  tableExists = ' + tableExists)
 console.log('at tableScreenOptions.  tableTitle = '+ tableTitle);
 //WHY IS tableTitle.length = 4 after comming from delete recordItem?when originalNumberFields = 3 ????!!Dec 7
 //at tableScreenOptions. If here after a delete record why does tableTitle.length be greater than originalNumberRecords? tableTitle = CN3205,CN4800,CN5502,CN5502..this after saving variables after a delete record!!INVESTIGATE,!!!Dec7How did the extra CN5502 get there?
 //added editNote = true to force table update if notes edited Jan11
 if (tableExists & tableTitle.length>originalNumberRecords || editNote) {
	 tableScreen.appendChild(refreshTableP);
	 displayTableBtn.disabled = true;//Nov 22 so a tap of displayTableBtn doesn't cause a false display and also preverts a repeat display of the refresh notification. Also have to disable the create table option bar Feb 12 .. but doesn't do it!!
	 clearTableWindow.disabled = true;
	 clearTableWindow.textContent = "You must Update Table FIRST!";
	 tableScreen.appendChild(refreshTableBtn);
	 displayTableBtn.textContent = "disabled";
	 
	 tableNeedsUpdate = true;//flag so that if removing after returnHomeBtn tapped does not produce an error Dec 29
	 }//end if tableTitle.length>originalNumberRecords
	 refreshTableP.textContent = "You have added a new Record since last creation of Table, OR you have edited a note. To update tap UPDATE TABLE button.";
	 refreshTableBtn.onclick = function () {
		 
		// originalNumberRecords = tableTitle.length;//reset originalNumberRecords to reflect updated table
		//tableScreen referenced at top of code
		tableScreen.removeChild(refreshTableP);
		 tableScreen.removeChild(refreshTableBtn);
		 displayTableBtn.textContent = "DISPLAY TABLE";
		 displayTableBtn.disabled = false;
		 clearTableWindow.disabled = false;//Feb 12
		 clearTableWindow.textContent = "TAP HERE TO CREATE TABLE or to EDIT an existing one."
		 refreshTable();
	 }//end refreshTableBtn.o click

tableScreen.setAttribute('class','showing');//referenced at top of code reference the create a table window has options for create new or edit, instructions for table creation, display table btn and refresh table if needed

if(!tableExists) {
	displayTableBtn.disabled = true;
	// } else {
	// 	displayTableBtn.disabled = false;
	}//end if !tableExists
	
//added & !tableNeedsUpdate here to make disable work for a needed table update Feb 12
if(tableExists & !tableNeedsUpdate) {
	displayTableBtn.disabled = false;//Nov26 new dB from seRatch displayTableBtn was disabled even though table was created
}//end if tableExists
	
	clearTableWindow.onclick = function () {
		//Tap here to create table or edit an existing one .. see HTML
	/*prefWindow.removeChild(notifyP);*/
	console.log('At clearTableWindow.onclick. Bringing up createTableWindow...tableExists = ' + tableExists + '. edit =  ' + edit + 'displayedTable = ' + displayedTable);
	tableScreen.setAttribute('class','hidden');
	createTableWindow.setAttribute('class', 'showing');	
	//remove code below if messes needs to be here so neworedit element can process it before seReen is shown
	if(!tableExists) {
	newBtn.disabled = false;
	newBtn.setAttribute('class', 'attentionBtn');
	
	} else {
		newBtn.disabled = true;
		newBtn.setAttribute('class', 'normalBtn');
	}//end if !tableExists
//LEFT OFF HERE NOV 11 !!!!!!! Fix this!	
editBtn.textContent = 'EDIT';
deleteFieldBtn.textContent = 'DELETE FIELD';
if(!tableExists) {
	editBtn.disabled = true;
	editBtn.setAttribute('class', 'normalBtn');
	deleteFieldBtn.disabled = true;
	deleteFieldBtn.setAttribute('class','normalBtn');
	} else {
		//IF THE TABLE HAS NOT YET BEEN INITIATED BY HAVING VISITED DISPLAY TABLE AT LEAST ONCE DISABLE THE EDIT AND DELETE FIELD BTNS..OTHERWISE DISPLAY ETC GETS MESSED UP!
//trying to erase record rows for editing new table Feb12
//still testing..think it works OK FEB 12
while (rows.firstChild) {
   rows.removeChild(rows.firstChild);
}//end while
//REMOVE ABOVE IF MESSED UP FEB 12
		if(DTBtnTappedOnce ===1){deleteFieldBtn.disabled = false;
			editBtn.disabled = false;
		}else if (DTBtnTappedOnce === 0) {
			deleteFieldBtn.disabled = true;
			editBtn.disabled = true;
			//REMOVE IF SCREW UP FEB11
			alert('You need to initialize the table first by tapping DISPLAY TABLE at least once!');
		}
editBtn.setAttribute('class', 'attentionBtn');
deleteFieldBtn.setAttribute('class','attentionBtn');
showTable.setAttribute('class','hidden');
	}//end if !tableExists..else moved line showTable hidden above close bracket of !tableExists for the 'edit screen to work look better Jan30'
//REMOVE IF IT BLOWS IT JAN 18
//works for edit..check ok for new
//Jan27. Seems to work now but not if using an older dB. WorKs if I load in Jan25 dB! DOES showTable need to be referenced as global variable? It doesn’t get referenced until line 3125?
	//showTable.setAttribute('class', 'hidden');
	}; //end clearTableWindow.onclick
	
  displayTableBtn.onclick = function () {
	//added Dec 7 ,remove if messes up if tableTitle.length>originalNumberFields	tableScreen.removeChild(refreshTableP);
	//if new record not added then refreshTableBtn will not be seen here.
//NotFoundError: The object can not be found here.
//tableScreen.removeChild(refreshTableBtn);
	//	 displayTableBtn.disabled = false;
		DTBtnTappedOnce = 1;
	//make displayedTable variable =1 here so that the prexisting table(..the displatTableBtn IS enabled) so the tanble will show without alterations or added fields
//displayedTable = 1;//see above NOT TESTED NOV 6 2020
console.log('At start displayTableBtn.onclick. This means a table exists..rerun or not.: displayedTable = ' + displayedTable + '. tableConstructed = ' + tableConstructed + '. renewed (added record) = ' + renewed + '. refreshed (data cell edit) = ' + refreshed + '. edit = ' + edit + '. DTBtnTappedOnce = ' + DTBtnTappedOnce + '.');

//Dec 29 probably need to clear refreshTableP here to prevent its appearance twice if returning to createTable after viewing notes and not having updated the table
if (tableNeedsUpdate) {
		tableScreen.removeChild(refreshTableP);
		 tableScreen.removeChild(refreshTableBtn);
		 displayTableBtn.disabled = false;
	 }//end if (tableNeedsUpdate) ..ADDED DEC29

tableScreen.setAttribute('class','hidden');
	console.log('displayTableBtn has been tapped. displayedTable variable = ' + displayedTable + '. (If displayedTable = 1, this means a virgin run of the table has been completed by a previous displayTable function.) If 1, the extra added fields will have been tacked on to the end of STHeadRow,  then showTable screen is showing but buildRecordRows has not needed to run. displayedTable could also be set to 0 by a previous instance of displayTableBtn.onclick and tableConstructed = 1.	If displayedTable is 0 and tableConstructed is 0, the else part of if tableConstructed === 1 runs and then showTable screen is cleared after the displayTableBtn.onclick, and table header and field header row are ADDED to STRows, then in displayTable() because displayedTable and refreshed are 0, the extra fields are tacked on to STHeader. STHeader has been added to STRows in the else part of the displayTableBtn.onclick code?? ');
	console.log('At displayTableBtn.onclick: The refreshed variable is controlled by the REFRESH Btn in the edit phase of the showTable data cell, and is also set to 1 in refreshTable function. refreshed is set to 0 in showBtn.onclick (DISPLAY TABLE) Btn, and also from a rerun..initialized to 0. The renewed variable is controlled by the refreshTable function. refreshed = ' + refreshed + ' renewed = ' + renewed);
	console.log('tableConstructed variable = ' + tableConstructed + ' displayedTable variable = ' + displayedTable + ' tableConstructed variable and displayedTable will be 0 if comming from a rerun.');
	
	//not sure yet if this code below is needed..maybe for a rerun? Rerun not tested as of Nov7 2020. Currently doesn't run because DTBtnTappedOnce = 1 at line 2466
	if (!DTBtnTappedOnce) {
		console.log('At if (!DTBtnTappedOnce in displayTableBtn.onclick and about to add STHeader): displayedTable = ' + displayedTable + '. tableConstructed = ' + tableConstructed + '. renewed (added record) = ' + renewed + '. refreshed (data cell edit) = ' + refreshed + '. edit = ' + edit + '. DTBtnTappedOnce = ' + DTBtnTappedOnce + '.');
		STtableHeader.setAttribute('class','attentionBtn');
STrows.appendChild(STtableHeader);
STrows.appendChild(STheadRow);
	}//end if !DTBtnTappedOnve
	
		if (tableConstructed === 1) {
			console.log('At tableConstructed = 1. fromDeleteField = ' + fromDeleteField);
			//to correct for missing fieldHeadres when coming from deleteField
			if (fromDeleteField) {
	console.log('in displayTableBtn.onclick fromDeleteField: fromeDeleteField = ' + fromDeleteField);
	clearTableRows ();
	trimHeadRow ();//would displayedTable = 1 accomplish the same thing?
	displayTable();
	//fromDeleteField = false;
	//addFieldHeaders();
	}//end if fromDeleteField
			showTable.setAttribute('class', 'showing');
		displayedTable = 0;//why set this to 0? It will be 1 if comming from a previous virgin run of displayTable and it will be 0 along with tableConstructed,  if this is a rerun. If displayedTable =1 the added extra fields will not be added to the STHeadRow in next run of displayTable. If you add a record you want to make sure displayedTable = 0 so added fields are added. If displayedTable = 1 added fields don't repeat after display of upgraded tableable
		console.log('DTBtn has been clicked. In if tableConstructed ===1): If HERE AFTER A recent RERUN and tableConstructed must now = 1, meaning that DTB.ONCLIK the first time previous to this ran code through virgin run! If tableConstructed =1, then displayedTable will have been made = 0) 	and table has already been constructed so showTable is revealed without buildingTableRows... tableConstructed variable = ' + tableConstructed + ' displayedTable variable = ' + displayedTable + '. edit = ' + edit +'.');
		}//end if tableConstructed  === 1
		//else happens if tableConstructed = 0, in other words if comming from a rerun! In which case displayedTable should also be 0.
		else {
	showTable.setAttribute('class', 'showing');
	console.log('At displayTableBtn.onclick..else (tableConstructed is 0, not 1, and table screen is about to be cleared!: displayedTable = ' + displayedTable + '. tableConstructed = ' + tableConstructed + '. renewed (added record) = ' + renewed + '. refreshed (data cell edit) = ' + refreshed + '. edit = ' + edit + '. DTBtnTappedOnce = ' + DTBtnTappedOnce + '.');
	
	//next code clears the table display and then rebuilds it, including the field headers
	while (STrows.firstChild) {
   STrows.removeChild(STrows.firstChild);
}//end while
//to show field headings .. if there is a rerun you have to recobpnstruct the headings and rows on the first displayTableBtn press
//if rerun, after first time through displayed Table is set to 1 so second tap of displayTableBtn.onclick won't create the header row??
if (!displayedTable) {
	console.log('At if(!displayedTable) in the else part of displayTableBtn.onclick function, and tableConstructed is currently set to 0. displayedTable set to 0 means ..(A) if tableConstructed is 1, then displayedTable gets set to 0 after displayBtn.onclick, and code runs through tableConstructed = 1. (B) there has been no virgin run of creating a table, (i .e. code is first run, or code is running after rerun, so displayedTable and tableConstructed variables have been set to 0 at initialization.) AND this means STHeadRow has not yet had the extra fields titles added to it!! ? (C) First click of displayTableBtn.onclick after rerun? If AFTER RERUN!! after tapping Display Table Btn!  displayedTable will currently be set to 0 if comming from a rerun, OR if a virgin run of constructing records for the STShow screen has not yet been done..i.e. after newBtn.onclick to construct table for first time. Will now ADD table header and field header row to STRows, after table was cleared by code above.. displayedTable variable is now 0 so in displayTable() the added fields should be added to STHeadRow. Now going to displayTable() which constructs the record rows, and will tack on the extra fields if displayedTable and refreshed are 0.');
STrows.appendChild(STtableHeader);
STrows.appendChild(STheadRow);
//MAY NEED IF DTBtnTappedOnce = 1 then displayedTable = 1???
//displayedTable = 1;
}//end if !displayedTable
//refreshed = 1;
//above code clears the table display and then rebuilds it, including the field headers

	displayTable();
  }//end else .. if displayedTable = 1
 }; //end displayTableBtn.onclick
	
	
	tableInstructions = document.querySelector('#tableInstructions');
	tableInstructions.textContent = "Instructions for creating the table will start here.";

	returnToNotesBtn.onclick = function () {
		//added these lines Dec 6 !!!!
	//ADDED DEC 29...if there is no refreshTableP you can't remove what was never there!		
	if (tableNeedsUpdate) {
		tableScreen.removeChild(refreshTableP);
		 tableScreen.removeChild(refreshTableBtn);
		 displayTableBtn.disabled = false;
		}//end if (tableNeedsUpdate) ..ADDED DEC29
		 tableScreen.setAttribute('class','hidden');
	}//end returnToNotesBtn.onclick
	
}//end tableScreenOptions function




// javascript for createTable below
  //CREATE TABLE
	  
	  //when adding to IndexedDDNotes make all of this a function called createTable
	  //function createTable () {}//end function createTable
	  const createTableWindow = document.querySelector('#createTableWin');
		const tableName = document.querySelector('#databaseTableName');//h2 HTML
		const showTableName = document.querySelector('#showTableName');//h2 HTML of showTable section
		const saveTableBtn = document.querySelector('#saveTableBtn');//saveTableBtn declared as global variable because it is accessed in several places
		//alert('at start of table code...dbTableName.value = ' + dbTableName.value);
		const additionalFields = document.querySelector('#additionalFields');//number of new fields required input HTML
		const headNameFirstColumn = document.querySelector('#headNameFirstColumn');//input tag  HTML
		const headName = document.querySelector('#headName');//<td>first column HTML list name text I.e. Locomotive 
		//ST stands for ShowTable Window
		const STheadName = document.querySelector('#STheadName');//<td>first column HTML list name text in showTable window
		//Date: Feb 2 2021 reference for STcreationDate was commented out up until Feb 2. Not sure why but it is needed to put the DATE field label back in the STheadRow after cLearing the field labels after a call to deleteField so the field labels can be reconstructed
		const secondFieldName = document.querySelector('#STcreationDate');//<td> HTML reference. second field title is DATE .. in capitals because fieldArray[2] is assigned ' DATE' (see makeTable function). In HTML it is 'Date'. 
		const thirdFieldNameInput = document.querySelector('#nameDataField1');//i.e. location
		const fourthFieldNameInput = document.querySelector('#nameDataField2');//i.e. Decoder
		const firstDataNameTd = document.querySelector('#firstData');
		const secondDataNameTd = document.querySelector('#secondData');
		const headRow = document.querySelector('#headRow');//first row header section <tr>
		const STfirstDataNameTd = document.querySelector('#STfirstData');
		const STsecondDataNameTd = document.querySelector('#STsecondData');
		const STheadRow = document.querySelector('#STheadRow');//first row header section <tr>
		const nextFieldHeading = document.createElement('td');
		const STnextFieldHeading = document.createElement('td');
		
		const submitButton = document.createElement('button');//submit data in record cells of extra added fields
		const nextFieldHeadingInput = document.createElement('input');//get name of next additional required field
	 const submitBtn = document. querySelector('#submitBtn');//enter column heading titles..1 bin to submit headings
		const thirdFieldP = document.querySelector('#info');
		const fourthFieldP = document.querySelector('#info2');
		const createTable = document.querySelector('#createTable');//div HTML
		const STcreateTable = document.querySelector('#STcreateTable');//div HTML in showTable window
		const STthirdFieldP = document.querySelector('#STinfo');
		const STfourthFieldP = document.querySelector('#STinfo2');
		
		// const showTable = document.querySelector('#tableWin');//div HTML section id="tableWin" should this be referenced earlier because clearTableWin useS it at line 3003 put at top 
		const rows = document.querySelector('#forRows')//<Table>HTML
		const STrows = document.querySelector('#STforRows')//<Table>HTML
		const buildRecordsP = document.createElement('p');
		const saveTableP = document.createElement('p');
		const addFieldsDirectionP = document.createElement('h4');//make global so the text can be changed 
		
		const tdInput = document.createElement('input');//buildRecordRows function
		const submitTdInputBtn = document .createElement('button');//buildRecordRows function
		const recordTd=document.createElement('td');//add td cell to row.buildRecordRows function needs to be here so it is a global variable??code to make an edit function did not work!maybe need to comment out these const .. left in and still works
		
		//reference elements for edit dynamic fields and make available to required functions
		const addToDynamicFields = document.createElement('p');
		const moreFieldsInput = document.createElement('input');
		const fieldsBtn = document.createElement('button');
		
		//reference elements in showTable window
		
		const str =new Date();
	const d = str.toString();
	date = d.slice(3, 21);//was const date.gave error cannot declare a constant variable twice
	//headRow.setAttribute('class','border: 2px solid red;')
	//required variables
	// let h3.textConttent;//record item title
	// let dateP.textContent;//date created
	// let para.textContent;//text of record frst p ddata data
	// let displayXtraField.textContent;//data of extra field
/*	let newFieldName;//title of 2nd field
	let nextFieldName;//title of subsequent fields as determined by input in a for loop
	let numberOfFields;//the counter to use in the for loop
	let numberOfAdditionalFields;//number of new required fields
	let fieldContent;//the text of the td cell in the table row as determined in the for loop. */

//!!!!HERE I HAVE DECLARED dbTableName twice..first time in notes set up. might this be the problem??'dbTableName = undefined'
	//let dbTableName = "Locomotive Roster";//dbTableName variable from Notes program
	//let listName;
	const tableHeader = document.querySelector('#thheader');//thead HTML
	const STtableHeader = document.querySelector('#STthheader');//thead HTML
	//alert('in table code..dbTableName.value = ' + dbTableName.value);
	tableHeader.textContent = dbTableName.value;//was dbTableName which returned objectHTMLHeadingElement
	tableHeader.setAttribute('class','attentionBtn');
	STtableHeader.textContent = dbTableName.value;
	
	//global 2 dimensional array has to be built in displayData() tableArray has now been created. will save this in notesdb. not sure displayArray is needed!
	//let displayArray = ["primary", "primary"];
	//let tableArray = [[],[]];
	//let tableArray = [[],[]];
	
	
	//creating variables for tables that will be replaced with the variables in IndexedDBNotes
	//may not need let counter = 3?erroe can not declare a let variable twice
	//counter = 3;//the number of records-rows in the database..remember first record contains admin data and variables ..does not count!!
	//let tableTitle = ['CN6035', 'CN3205', 'CN6700'];//tableTitle array needs to be created in dbNotes?BECAUSE IT WAS DECLARED TWICE PRODUCED TABLETITLE.LENGTH UNDEFINED ERROR,!!!
	let dateP = date;
	let tappedOnce = 0; //for table creation p buildRecordsP.onclick = function
	let entered = 0;//for edit mechanism at buildRecordRows function probably can remove because edit function using entered did not work??
	let edit = 0;//use for creating edit version of createTable
	let refreshed;//in make changes to prevent field names being generated twice.. also used in update refreshTable section did not set to 0 so field headings are not repeated in displayTable
	//let dateP = new Date();//get from IndexedDBNotes
// 	let paraBody = ['Y2Trk2','Y3Trk2','Y3Trk8'];
// 	let displayXtraFieldData = ['TSU-1100','Econami-PNP','TSU-1100'];
// 	//all above will be variables from IndexedDBNotes
// 	//create the 2D array tableArray

//!!!!!!!!IF tableArray is not declared here, the table is not built. So somehow tableArray is being lost in spite of declaring it at top??
//the problem was counter made = 0 at top so declaration of tableArray did not occur because i <counter. solution was to create a new variable recordCounter = 3, use this to declare tableArray at top. this worked
//!!!!!!!!!!!!!!!
// 	var tableArray = new Array(counter);

// for (var i = 0; i < counter; i++) {

// tableArray[i] = new Array(numberOfFields);

// }//number of fields means all fields

// //create fieldNamesArray
// let fieldNamesArray = [];

// //option to create new or edit existing table
// //this code will have to be put on the Table menu of indexedDBNotes when incorporating code into DBNotes
const newOrEdit = document.querySelector('#newOrEdit');
newOrEdit.setAttribute('class', 'simulator');
//newBtn goes to makeTable function with edit=0
const newBtn = document.createElement('button');
newBtn.setAttribute('class', 'attentionBtn');
const editBtn = document.createElement('button');//are there 2 references for the edit Btn??Jan26
newBtn.textContent = 'NEW';

	
const goHomeBtn = document.createElement('button');//Home Screen bin in the NeworEditP on the CreateTable window
goHomeBtn.textContent = 'Return to HOME SCREEN';

//references for DELETE FIELD deleteField window etc
const deleteFieldBtn = document.createElement('button');
console.log('DTBtnTappedOnce = ' + DTBtnTappedOnce);
if (DTBtnTappedOnce === 0) {
	deleteFieldBtn.disabled=true;
	//do you have to do the same for the edit Btn?
	} else {
		deleteFieldBtn.disabled = false;
}//end if DTBtnTappedOnce = 1

const deleteFieldWindow = document.querySelector('#deleteFieldWin');
const deleteFieldTableName = document.querySelector('#deleteFieldTableName');
//fieldHeaders is a div in HTML that allows referencing to in orider to properly place the field headers
const fieldHeaders = document.querySelector('#fieldHeaders');
const backToEditBtn = document.querySelector('#backToEdit');
const cancelToNotesBtn = document.querySelector('#cancelToNotes');
const selectedFieldInput = document.querySelector('#myFields');
const dataList = document.querySelector('#fieldList');
const chosenFieldInfo = document.querySelector('#chosenField');
const submitFieldSelectionBtn =  document.querySelector('#submitFieldSelection');
//let copyOfTableArray = tableArray;
//const copyOfFieldNamesArray = fieldNamesArray;
//above code should be:Feb 11
let copyOfTableArray = tableArray.slice();
const copyOfFieldNamesArray = fieldNamesArray.slice();

//const fieldOption = document.createElement('option');
//const fieldOption = document.querySelector('#');


//end references for deleteFieldWindow
//DELETE FIELD HTML AND JS REFERENCES ABOVE See function deleteTableField() below

//newOrEdit.appendChild(nl);
newOrEdit.appendChild(newBtn);
newOrEdit.appendChild(editBtn);
newOrEdit.appendChild(deleteFieldBtn);
newOrEdit.appendChild(goHomeBtn);

newBtn.onclick = function() {
	console.log('At newBtn.onclick...tableExists = ' + tableExists + '. edit =  ' + edit);
	newBtn.setAttribute('class', 'normalBtn');
	editBtn.setAttribute('class','attentionBtn');
		editBtn.disabled = false;
		deleteFieldBtn.setAttribute('class','attentionBtn');
		deleteFieldBtn.disabled = false;
		newBtn.disabled = true;
	//alert('at newBtn.onclick...dbTableName.value = ' + dbTableName.value);
	tableHeader.textContent = dbTableName.value;//to refresh thheader in HTMLi.e. Locomotive Roster 
	tableExists = 1;
	edit = 0;
	// buildingTableArrays = 1;//this variable enables displayData to construct the tableTitle and paraBody arrays
	// displayData(); //createbarrays might not need this because arrays are created anyway??
	
	// // buildingTableArrays = 0;//turn off the switch so displayData doesn't create the arrays repeatedly may not need this switch????
	
	
	originalNumberRecords = tableTitle.length;//use to give refresh table option
	console.log('tableTitle[] = ' + tableTitle);
	console.log('paraBody[] = ' + paraBody);
	console.log('displayXtraFieldData[] = ' + displayXtraFieldData);
	makeTable();
}//end function newBtn.onclick
editBtn.onclick = function () {
	console.log('At editBtn.onclick...tableExists = ' + tableExists + '. edit =  ' + edit);
	
	tableHeader.textContent = dbTableName.value;//to refresh thheader in HTML
	editBtn.setAttribute('class', 'normalBtn');
	//edit = 0;//get to make changes and edit = 1
	edit = 1;
	editCurrentTable = 1;//so displayTable workS correctly when editing a table that pre-exists
	//clearTableWindow no difference if here or not?!
	// while (rows.firstChild) {
	// rows.removeChild(rows.firstChild);
	//  }//end while
	//Nov13 to restore STHeadRow to original prior to tacking on fields
	originalNumberOfFields = fieldNamesArray.length;
	console.log('At editBtn.onclick. numberOfAdditionalFields = ' + numberOfAdditionalFields);
	
	editMoreFields();
	//clear STShow screen
	// while (STrows.firstChild) {
	// 	STrows.removeChild(STrows.firstChild);
	// }//end while
	//AT EDIT BTN TOOK OUT APPEND STHEADROW NOV 14!,!,!,! NO DIFFERENCE IF HERE OR NOT!!!!!!
//STrows.appendChild(STtableHeader);
//STrows.appendChild(STheadRow);	
		//renewed = 1;//trying to make STShow display correctly after edit
// 	while (createTable.firstChild) {
//    createTable.removeChild(createTable.firstChild);
//
	makeTable();
}//end editBtn.onclick

deleteFieldBtn.onclick = function() {
	console.log('deleteFieldBtn has been clicked');

	deleteFieldWindow.setAttribute('class', 'showing');
	deleteFieldTableName.textContent = "DELETE a field\/column from the table in: " + dbTableName.value;
	deleteTableField ();
}//end deleteFieldBtn.onclick

goHomeBtn.onclick = function () {
		console.log('goHomeBtn clicked');	createTableWindow.setAttribute('class', 'hidden');
		//REMOVE IF SCREWED UP Jan 18
		if(edit ===1) {
		//remove how many more fields to you wish to edit...Dynamic fields input.....Do I have to remove the input and enter Btn as well? Or will they go with addToDynamicFields
	//LEFT OFF HERE JAN 18	createTableWindow.removeChild(addToDynamicFields)
	removeEditMoreFieldsElements();
		}//end if edit = 1
		}//end homeScreenBtn.onclick

//start function makeTable
function makeTable () {
	console.log('At start makeTable()...tableExists = ' + tableExists + '. edit =  ' + edit);
	fromMakeTable = 1;//to keep warning to create a table first if displayTable btn tapped after a table has been created
	if(edit === 1) {
		additionalFields.value = numberOfAdditionalFields;
		headNameFirstColumn.value = fieldNamesArray[0] ;
		thirdFieldNameInput.value = fieldNamesArray[2] ;
		fourthFieldNameInput.value = fieldNamesArray[3] ;
		//editBtn.setAttribute('class', 'normalBtn');
		
	}//end if edit

	//show create table window
	createTableWindow.setAttribute('class', 'showing');	
	//window.onload = function() {
		//error 'the object can not be found here if comimg from edit make changes'
	// 	if (edit === 0) {
	// 		//leave new or edit option bar so it can be used for future edits
	// createTableWindow.removeChild(newOrEdit);
    // }//end if edit === 0
	submitBtn.setAttribute('class','attentionBtn');
	if(edit === 1) {
		submitBtn.setAttribute('class','normalBtn');
	}//end if edit = 1
	submitBtn.onclick = function () {
		console.log('At submitBtn.onclick. ..edit = '+ edit);
		if(edit === 1) {
		editBtn.setAttribute('class', 'attentionBtn');	
		}//end if edit = 1
		//e.stopPropagation();//remove if trouble 
	//alert('dbTableName.value = ' + dbTableName.value);
		tableName.textContent =  "Table for Database named : " + dbTableName.value;
	numberOfFields = Number(additionalFields.value) + 4;
	//alert('numberOfFields = ' + numberOfFields);
	// if(edit) {
	// 	additionalFields.value = numberOfAdditionalFields;
	// }//end if edit
	//numberOfFields is the total number of fields which includes the initial static 4 plus all other fields added to the initial 4...fieldNamesArray.length
	//originalNumberOfFields = fieldNamesArray.length before any edit!
	//numberOfAdditionalFields = THE NUMBER OF FIELDS BEYOND THE INITIAL STATIC 4. This number can keep increasing as you add more fields, so is a dynamic number. This currently is the number entered into the green input line 'number of additional fields. '
	numberOfAdditionalFields = additionalFields.value;
	//alert('numberOfAdditionalFields = ' + numberOfAdditionalFields);
	// if(edit) {
	// 	headNameFirstColumn.value = fieldNamesArray[0] ;
	// }//end if edit
	headName.textContent = headNameFirstColumn.value;//listName header first column..I.e. Locomotive
	//add headName to fieldNamesArray
	fieldNamesArray[0] = headName.textContent;
	tableHeader.setAttribute('style', 'colspan: numberOfFields', 'simulator','width: 100%');
	//alert('thirdFieldNameInput.value = ' + thirdFieldNameInput.value);
	//	firstDataNameTd.value =

	//thirdFieldNameInput.value;//3rd field name title info taken from cursor.body.value in cursor iteration of current database
	fieldNamesArray[1] = ' DATE ';
	// if(edit) {
	// 	thirdFieldNameInput.value = fieldNamesArray[2] ;
	// }//end if edit
	firstDataNameTd.textContent = thirdFieldNameInput.value;
	fieldNamesArray[2] = firstDataNameTd.textContent;//I.e. Location
	submitBtn.setAttribute('class','normalBtn ');
	//headRow.appendChild(firstDataNameTd);not needed because already appended in HTML????
	// if(edit) {
	// 	fourthFieldNameInput.value = fieldNamesArray[3] ;
	// }//end if edit
	secondDataNameTd.textContent = fourthFieldNameInput.value;
	fieldNamesArray[3] = secondDataNameTd.textContent;//I.e.Decoder 
	//headRow.appendChild(secondDataNameTd);this line not needed because secondDataNameTd is already in the HTML
	
	
//	thirdFieldP.textContent = thirdFieldNameInput.value;
	//	alert('firstDataNameTd.value = ' +firstDataNameTd.value);
//}//end submitBtn.onclick
// 	thirdFieldNameInput.onclick = function () {
		
// 	};
	
// 	thirdFieldNameInput.addEventListener('input', function () {
// 	secondDataNameTd.value = fourthFieldNameInput.value;//4th field name title info taken from cursor.body.value in cursor iteration of current database
// });
	//directions info P..h3 declared as global variable
//	const addFieldsDirectionP = document.createElement('h4');
if(edit === 1) {
	addFieldsDirectionP.textContent = 'Make changes to the added field titles below: ';
} else if (edit === 0) {
	addFieldsDirectionP.textContent = 'Enter the added field/column titles below: ';
}//end if else if edit construct
	createTable.appendChild(addFieldsDirectionP);
	//create the inputs for  added fields required
	for (let j = 1; j <= numberOfAdditionalFields; j++) {
	//alert('i = ' + i);
	let k = 3+j;//for fieldNamesArray
const nextFieldHeadingInput = document.createElement('input');//the headings for the added fielDs..I.e. the fieldNames Array
const submitButton = document.createElement('button');//small green filled red dot
createTable.appendChild(nextFieldHeadingInput);
createTable.appendChild(submitButton);
submitButton.setAttribute('class','attentionBtn ');
if(edit === 1) {
		
		nextFieldHeadingInput.value = fieldNamesArray[k] ;
	}//end if edit
		submitButton.onclick = function () {
			//alert('edit variable = '+ edit);
			//if the if statement is here the append to headRow does not happen. why??
		//	if (edit === 0) {
			//	alert('creating element nextFieldHeading td');
			const nextFieldHeading = document.createElement('td');
		//	}//end if !edit
			
			nextFieldHeading.textContent = nextFieldHeadingInput.value;
			fieldNamesArray[k] = nextFieldHeading.textContent;
			
			submitButton.setAttribute('class','normalBtn ');
		if (edit === 0) {
		//alert('About to append nextFieldHeading to headRow');
		headRow.appendChild(nextFieldHeading);
		
		}//end if edit = 0
		createTable.removeChild(nextFieldHeadingInput);
			createTable.removeChild(submitButton);
			
		}//end submitButton.onclick
	}//end of for loop
	
	//const buildRecordsP = document.createElement('p');//at top
	
createTable.appendChild(buildRecordsP);
buildRecordsP.setAttribute('class', 'simulator');
//buildRecordsP.disabled = false;
buildRecordsP.textContent = ' Enter titles of '+ numberOfAdditionalFields + ' additional fields (By tapping the green buttons). When satisfied with entries tap here to continue!';
	
	}//end submitBtn.onclick needs to be here instead of higher up

//create tableArray variable 2D array
// now create the vertical rows for records
//the number of row iterations will be = counter
//var additionalFieldsArray = Create2DArray(counter,numberOfAdditionalFields);

buildRecordsP.onclick = function () {
	console.log('At buildRecordsP.onclick');
	if (edit === 1) {
		addFieldsDirectionP.textContent = 'Make changes to labels of added fields below.';
		//removeChild(buildRecordsP if edit === 1??)
		buildRecordsP.textContent = 'Make changes to added field titles/labels! When finished tap here to SAVE TABLE';
		//might have to remove this line
		createTable.removeChild(buildRecordsP);
	} else {
	addFieldsDirectionP.textContent = 'Now enter data into the added fields.';
	buildRecordsP.textContent = 'Now enter data into the fields! When finished tap here to SAVE TABLE';
}//end if edit === 1
	//remove fieldName entry inputs
	//while (createTable.nextFieldHeadingInput) {
	//buildRecordsP.disabled = true;	//this does not disable the buildRecordsP why??
	//}//end while submitBtn
	if (tappedOnce) {saveTable();}//end if tappedOnce
	if (!tappedOnce) {
	buildRecordRows();
	}//end if !tappedOnce
	tappedOnce = 1;
	//Nov12
	if(edit === 1) {
		saveTable();
	}//end if edit = 1
	//Nov 12
}//end buildRecordsP.onclick
	


//}//end function createTable

function saveTable () {
	//save table variable values in some kind of array
	console.log('At start saveTable');
	saveTableP.setAttribute('class','simulator');
	saveTableP.textContent = 'Table is SAVED! Tap here to see results.';
	//may need to put line below in if (edit===0) statement
	createTable.appendChild(saveTableP);
	saveTableP.onclick = function () {
		if (edit === 1) {
			console.log('In makeTable()..edit is currently 1 and about to be set to 0. saveTableP(Table is saved Tap here to see results)  is about to be removed. If edit is made 0 here how does that effect displayTable later? tappedOnce = '+ tappedOnce);
			//might remove edit = 0 NOPE!!program stops running if you remove edit =0!line 2892  so displayTable works?
			edit = 0;//Nov12 necessary to have field label inputs to appear
			//may need to removeline below??
		createTable.removeChild(saveTableP);	
		}//end of if edit
		//change color of to make changes direction to green from pink
		saveTableP.setAttribute('class','edBan');
		saveTableP.textContent ='To make changes or add columns tap Make Changes button!'; 
		//tableArray[1][4] = ' + tableArray[1][4];
		// alert('255 .. tableArray[0][6] = ' + tableArray[0][6]);
		// alert('In SAVE table function : 190? tableArray[2][6] = ' + tableArray[2][6]);
		
	// for(let i = 0;i<counter;i++) {
	// 		for(let j=0;j<numberOfFields;j++) {
	// 			console.log('tableArray[' +i + '][' + j +'] = ' + tableArray[i][j]);
				
				
				
	// 			//statement above gave an undefined is not an object error when evaluating tableArray[i] [j] and resolved when I commented it out?? array worked after that??
	// 			//console.log('tableArray[' +i + '][' + j +'] = ' + tableArray[i][j]);
				
	// 		}//end for j =
			
			
	// 	}//end for i =
		
		//give option to make changes		

	const showOrEdit = document.createElement('p');
	const anl = document.createElement('br');
showOrEdit.setAttribute('class', 'simulator');
showOrEdit.textContent = 'Tap DISPLAY TABLE to show the finished Table or tap Make CHANGES  to edit this one.'
const showBtn = document.createElement('button');
const changesBtn = document.createElement('button');
//show tn goes to displayTable function
//changes button goes to makeTableFunction with edit=1
showBtn.textContent = 'DISPLAY TABLE';
changesBtn.textContent = 'Make CHANGES';
createTable.appendChild(showOrEdit);
showOrEdit.appendChild(anl);
showOrEdit.appendChild(showBtn);
showOrEdit.appendChild(changesBtn);
//showBtn from createTable goes to displayTable function
showBtn.onclick = function () {
	console.log('At showBtn.onclick..DISPLAY TABLE');
	createTable.removeChild(showOrEdit);
	//should I clear all rows be here if coming from edit? To prevent repeat of all records
	//!!!!!REMOVE CODE BELOW IF SCREW UP!
	//Nov 12
	if (editCurrentTable === 1){
		//removeFieldHeaders();//removed this line because'object not found here' error...this was after I added the add more dynamic fields code Nov 26. Now works. Not sure what the issue is?
	while (STrows.firstChild) {
    STrows.removeChild(STrows.firstChild);
	}//end while	
	
		//to force displayTable to recreate STHeadRow set displayedTable varial even to 0;if removing edit =0 at line 2902
		displayedTable = 0;//Nov12
		//not sure refreshed = 0 is necessary here Nov 15?
		refreshed = 0;//Nov 13 to make sure displayTable tacks on the extra fields in case an edit data cell was performed prior to being here.
		//why tableConstructed = 0 here? INitial intention to force a STHeadRow display? But tableConstructed set to 1 immediately in displayTable so not sure the line below does anything? REMOVED NOV 16 
		//tableConstructed = 0;
		edit = 0;
		STtableHeader.textContent = dbTableName.value;
		//STrows.removeChild(STheadRow);//NotFoundError: The object can not be found here.
// STtableHeader.setAttribute('class','attentionBtn');
// STrows.appendChild(STtableHeader);
// STrows.appendChild(STheadRow);
	}//end if editCurrentTable =1
	//!!!!!!!!REMOVE CODE ABOVE IF SCREW UP!
	//Nov 13
	//displayTable();
	dataVobj.tableArray = tableArray;
		console.log('At saving current table values! and going to saveVariables. dataVobj.tableArray = ' + dataVobj.tableArray);
	
	saveVariables();
	displayTable();
	//createTableWindow.setAttribute('class', 'hidden');
}//end showBtn.onclick?displayTable?
changesBtn.onclick = function () {
	createTable.removeChild(showOrEdit);
	createTable.removeChild(buildRecordsP);
	saveTableP.textContent = 'You can edit the Table Column Labels here, but not the data. To edit data go to DISPLAY TABLE and double tap the desired cell.';
	addFieldsDirectionP.textContent = 'Make changes to the added field Labels: ';
	
	edit = 1;
	makeTable();
}//end changesBtn.onclick	
		
	}//end saveTableP.onclick
}//end function saveTable

}//end function makeTable starts at line 232
//makeTable function basically just creates the fieldNames Array

//buildRecordRows function taken out of makeTable function so it can be found by refreshTable()

function buildRecordRows () {
	redefineTableArray();
	console.log('In buildRecordRows(). edit variable = ' + edit);
	//TAKE OUT CODE BETWEEN HERE !!!!!!!!!?,
	//set up tableArray to prevent undefined error
	//changed recordCounter to tableTitle.length
	// for (let i = 0; i < tableTitle.length; i++) {
		
	// 	for (let j = 0; j< numberOfFields; j++) {
	// 		//TypeError: undefined is not an object (evaluating 'tableArray[i][j] = " "')
	// 		tableArray[i][j] = " ";
	// 	}//end for j <= numberOfFields..
	// }//end for i = 0; i <= recordRows..
	//AND HERE !!!!!!!!!!!!!!
	
	if(testing) {
		console.log('In buildRecordRows from refreshTable!');
	testing = 0;//Dec 6	
	}//end if testing = 1
	//tableTitle.length can also be counter
	for(let i = 0; i< tableTitle.length; i++) {
	// 	if (i >counter) {
	// 		//ReferenceError: Can't find variable: e
	//   e.preventDefault();
  // }//end if counter e.prevent default
		//alert('at for i loop: i = ' +i + ' c = ');
	//if(edit === 0) {recordItem not found error if if statement is used
		const recordItem = document.createElement('tr');
		rows.appendChild(recordItem);//maybe not [i]
	//}//end if !edit
		//add field data for each td in the row
			for(let c=0;c<numberOfFields;c++){
				//alert('at for c loop: i = ' +i + ' c = '+c);
	
		const recordTd=document.createElement('td');//add td cell to row..left off here date:Aug 16 2020
		//!!!line below will be a problem if editing a prexisting table in IndexedDBNotes!
		if(edit === 0) {
		recordItem.appendChild(recordTd);
	}//end if !edit
		if (c === 0) {
			//recordTd.textContent = tableTitle[i].slice(indexOf('>'));//USE IF YOU DON'T WANT cursor.value.id from displayData to show
			recordTd.textContent = tableTitle[i];//tableTitle (global) array has to be constructed in displayData of indexedDBNotes
			// alert('tableArray 0,0 = '+ tableArray[[0],[0]] + 'tableTitle 0 (CN6035) =' +tableTitle[0] + 'tableTitle[' +i+'] ='+ tableTitle[i]);
		//this is where tableArray 0,0 gets over ridden..after i changes from 0 to 1 ..looks like array is overwritten!	
		//TypeError: undefined is not an object (evaluating 'tableArray[i][c] = tableTitle[i]')
		//TypeError: undefined is not an object (evaluating 'tableArray[i][c]')..so put console.log statement AFTER assignment
		//TypeError: undefined is not an object (evaluating 'tableArray[3][0]')..because I doesn't get to 3 yet if only 3 records (3rd record is i=2)
		// console.log('The 4th record title tableArray[3][0] = ' + tableArray[3][0]);
		console.log('originalNumberRecords = ' + originalNumberRecords + '. i = ' + i);
		console.log('tableTitle[3] = ' + tableTitle[3]);
		//remember i starts at 0 and numberOfRecords starts at 1
		if(i >= originalNumberRecords ) {
			console.log('i is > originalNumberRecords...tableTitle[' +i + '] = '+ tableTitle[i] + ' tableArray[' +i + ']['+ c + '] = ' + tableArray[i][c]);
			//to avoid error: TypeError: undefined is not an object (evaluating 'tableArray[i][c] = tableTitle[i]')
			//tableArray[i][c] = " ";
		}//end if i > originalNumberRecords 
		//TypeError: undefined is not an object (evaluating 'tableArray[i][c] = tableTitle[i]')
			tableArray[i][c] = tableTitle[i];
			//is tableArray[3][0] undefined because tableArray not declared to use more than 3 rows?suggest declaring tableArray to have 100 rows right at the start!
			//LEFT OFF HERE Oct30
			
			console.log('In buildRecordRows..tableTitle[i] = ' + tableTitle[i]+ '  tableArray[i][c] = ' + tableArray[i][c]);
		

		//TypeError: undefined is not an object (evaluating 'tableArray[i][c] = tableTitle[i]')	
			// if (tableArray[[0],[0]]!='CN6035') {alert('stop screw up here!');}
			// alert('tableArray[' +i + '],[' +c +'] ' + tableArray[[i],[c]] + 'and tableArray0,0 also = ' + tableArray[[0],[0]]);
		} else if (c === 1) {//recordTd.textContent = dateP;
			recordTd.textContent = dateTable[i];
			tableArray[i][c] = dateTable[i];
			// alert('tableArray[' +i + '],[' +c +'] ' + tableArray[[i],[c]]);
		}//end if c=1 first td (title) dateP has to come from a date array variable in notes
		
		else if (c === 2) {recordTd.textContent = paraBody[i];
			tableArray[i][c] = paraBody[i];
			// tableArray[[i],[c]] = paraBody[i];
			// alert('tableArray[' +i + '],[' +c +'] ' + tableArray[[i],[c]]);
		} else if (c === 3) {recordTd.textContent = displayXtraFieldData[i]; 
			tableArray[i][c] = displayXtraFieldData[i];
			// tableArray[[i],[c]] = displayXtraFieldData[i];
			// alert('tableArray[' +i + '],[' +c +'] ' + tableArray[[i],[c]]);}
		//for all the additional fields
		} else 
		{//alert('at else in for loop: i = ' +i + ' c = '+c);
		//for case where I is >= originalNumberRecords avoid adding inputs
		//add this if condition
//	if(!i >= originalNumberRecords)	{
			const tdInput = document.createElement('input');
		const submitTdInputBtn = document .createElement('button');
		recordTd.appendChild(tdInput);
		recordTd.appendChild(submitTdInputBtn);
//	}//end if !i>=originalNumberRecords 
		//let j = c-4;
		if(edit === 1) {
		tdInput.value = tableArray[i][c];
	}//end if edit
	
	// BEGINNING OF code to try and assign values to tableArray if added record
	if (i >= originalNumberRecords) {
		
		tdInput.value = " ";
		tableArray[i][c] = " ";
	}//end of if i > originalRecordNumber
	
	// END OF code to try and assign values to tableArray if added record
	
	
		submitTdInputBtn.onclick = function () {
			
			recordTd.textContent = tdInput.value;
			tableArray[i][c] = recordTd.textContent;//was tdInput.value
				//	alert(' At submitTdInput: tableArray[' +i + '][' + c  +'] = ' + tableArray[i][c]);
			}//end submitTdInputBtn.onclick
			//entered = 1;
			
		
		
		
		
		} //end of else construct
	// alert('At end of build record rows function : tableArray[' +i + '][' + c  +'] = ' + tableArray[i][c]);	
		
	}//end for c=numberof fields
	
/*	if (entered) {
		//create edit option
		recordTd.addEventListener('click', function () {
			recordTd.textContent = ' ';
			recordTd.appendChild(tdInput);
		recordTd.appendChild(submitTdInputBtn);
		
		submitTdInputBtn.onclick = function () {recordTd.textContent = tdInput.value;}
		entered = 0;
	});//end recordTd.addEventListener
}//end if entered
*///above code to make an edit option did not work		
	}//end for i counter all record rows
	tableConstructed = 1;
console.log('At end of buildRecordRows()...tableConstructed set to 1 in buildRecordRows. (tableExists variable is set to 1 way back in newBtn.onclick when first creating the table.');
}//end buildRecordRows.function
//buildRecordRows creates and assigns values to the tableArray..for added fields only after the submit Button (submitTDinput Btn.onclick) is tapped. This means for added records after the first table creation, the tableArray for the added 'i' will not be defined unless manually assigned or you go through the buildRecordRows process again?

//above code is buildRecordRows function
//show the table previously created using the tableArray variable
function displayTable () {

	console.log('At function displayTable');
		//hide create table window
		//SHOULD THIS LINE BE REMOVED AND ADDED AT 
		//error here in that I had written tableConstructed === 1 instead of = 1!!!!!!!!!!!!!
		tableConstructed = 1//so table is viewed after a displayTableBtn.onclick repeat button tap?
		createTableWindow.setAttribute('class', 'hidden');
	showTable.setAttribute('class', 'showing');
	showTableName.textContent =  "Table for Database named : " + dbTableName.value;
	//STtableHeader.textContent = dbTableName;
	//showTable.appendChild(STtableHeader);
	//!fromDeleteField to stop this section running if from deleteField Jan 30 !!!! 
	console.log('Just entered displayTable! tableExists = ' + tableExists + ' fromMakeTable = ' + fromMakeTable + ' tappedOnce = ' + tappedOnce + ' fromDeleteField = ' + fromDeleteField);
	//should add !tableExists to conditions below Jan30 2021
	if (!tableExists & fromMakeTable & !tappedOnce & !fromDeleteField) {
	const backToCreateTableP = document.createElement('h4');
	backToCreateTableP.textContent = 'You must create a table first. Tap here to create a table. Tap twice to CANCEL!';
	showTable.appendChild(backToCreateTableP);
	backToCreateTableP.onclick = function (){alert('go to createTable function!');
		makeTable();
		}//end backToCreateTableP.onclick
	backToCreateTableP.ondblclick = function (){alert('Return to database home screen!');
		//makeTable(); appropriate function here
	}//end backToCreateTableP.ondblclick
	fromMakeTable = 0;	
	}//end if fromMakeTable & !tappedOnce
	
	console.log('In start displayTable function. edit = ' + edit);//demonstrate that fieldNamesArray is intacty
	for(let j=0;j<numberOfFields;j++) {
				console.log('fieldNamesArray[' +j+ '] = ' + fieldNamesArray[j]);
				
			}//end for j =
			
	console.log('In start displayTable function, and tableConstructed has just been set to 1 at line 3082, immediately after entering displayTable(). This line might get removed?!'); 
console.log('At displayTable: refreshed variable is set to 0 in showBtn.onclick (Display Table Btn) and set to 1 at end of displayTable if there is a cell edit. ..refreshed (edit data cell) = ' + refreshed + ' renewed (added record) = ' + renewed +'. displayedTable variable = ' + displayedTable + '. tableConstructed = ' + tableConstructed + '. edit = ' + edit + '. editCurrentTable = ' + editCurrentTable + '.');	
if(renewed ===1) {
	console.log('renewed = 1 which means I am in displayTable from refreshTable.');
}//end if renewed = 1
	
	//if (editCurrentTable === 1) {
		//clearTableRows();
		//trimHeadRow();
		
		 //IndexSizeError: The index is not in the allowed range.
		//TypeError: null is not an object (evaluating 'document.getElementById("STHeadRow").deleteRow')
		//let deleteRow = document.getElementById("STforRows").firstElementChild.remove(); 
		  //document.getElementById('#STforRows').detach(); 
		//STrows.removeChild(STtableHeader);
	// 	let showTableRows = document.getElementById('STforRows');
	// let dataCell = document.getElementsByTagName('td');
	// let showTableHeadRow = document.getElementById("STHeadRow");
	// 	showTableRows.removeChild(showTableRows.showTableHeadRow);
	//rankingsBody.firstElementChild.remove();
// 	removeHeadRow();	
// 	function removeHeadRow (){ document.getElementById('STheadRow').remove();
// }//end function remove STHeadRow


// 	while (showTableHeadRow.thirdChild) {
//     showTableHeadRow.removeChild(dataCell);
// }//end while
		//showTableRows.removeChild(showTableHeadRow);
	//NotFoundError: The object can not be found here.
	// }//end if editCurrentTable = 1
//reproduce the table using the+ fieldNamesArray and tableArray
	//ST = showTable need to make this different than createTable window HTML
	//first 4 ST fields all HTML
	STtableHeader.textContent = dbTableName.value;
	STtableHeader.setAttribute('class','attentionBtn');
	//STrows.appendChild(STtableHeader);
	STheadName.textContent = fieldNamesArray[0];//listName header first column
	STfirstDataNameTd.textContent = fieldNamesArray[2];
	STsecondDataNameTd.textContent = fieldNamesArray[3];
	//create the added fields required
	//AND displayedTable = 0 because otherwise buildRecordRows has reconstructed the header row
	
	//!editCurrentTable keeps edit code from entering this section so all the added field headers are not tagged on to STHeadRow
	console.log('At displayTable—editCurrentTable = ' + editCurrentTable);
	if (editCurrentTable === 1) {
		
		// while (STrows.firstChild) {
		// STrows.removeChild(STrows.firstChild);
		// }
		//clearHeadRow();
			//STrows.appendChild(STtableHeader);
			//STrows.appendChild(STheadRow);
			
			clearTableRows();
			addFieldHeaders();
			removeDynamicFields();
			// trimHeadRow();
			//removeDynamicFields();
			
			displayedTable = 0;
			refreshed = 0;
			
			
			//removeFieldHeaders();//error object can not be found here..at function
			//removeFieldHeaders();
			// alert('removeFieldHeaders');
			
			// clearTableRows();
			// alert('cleared table rows');
			// //trimHeadRow();
			// removeDynamicFields();
			// alert('trimHeadRow');
			showTable.setAttribute('class', 'showing');
			
		}//end if editCurrentTable =1
		
	// if (fieldDeleted) {
	// 	while (STrows.firstChild) {
    // STrows.removeChild(STrows.firstChild);
	// }//end while	
	//addFieldHeaders();
	//removeFieldHeaders();
	//removeDynamicFields();
	//}//end if fieldDeleted
		console.log('At displayTable..about to recreate field headers if !refreshed and !displayedTable: REFRESHED =  ' + refreshed + ' DISPLAYEDTABLE = ' + displayedTable);
		//remove !fromDeleteField if messes up Jan30
	//	Left off here Jan30
	if (!refreshed & !displayedTable & !fromDeleteField || editCurrentTable === 1 || fieldDeleted) {
		console.log('In displayTable.. and RECREATING FIELD HEADERS! virgin run! OR editCurrentTable = 1: refreshed currently set to 0 and displayedTable is 0, so displaying table from scratch, rebuilding field headers, via a k loop, appending the extra fields to the pre-existing field header row! ');
		console.log('tableConstructed variable is set to 1 immediately on entering displayTable(). tableConstructed = ' + tableConstructed + ' displayedTable variable = ' + displayedTable + '. editCurrentTable = ' + editCurrentTable + ' reconstructing STHeadRow..I.e. adding the extra fields, but not yet adding the row to the table! .?? Is Table Header and Head Row already here from the HTML...If comming from displayTableBtn.onclick after a rerun, STRows was cleared by that code and STHeader again ADDED to STRows in the displayTableBtn.onclick code, so now only additional dynamic fields are being tagged on. If in displayTable from renewed, the header row has to be reconstructed because all was erased in refreshTable prior to comming here! This will happen if renewed (updated added records) . Otherwise displayTable is only going to rebuild the record rows to display, and tag on the extra fields to the header row if a virgin run...or a rerun, ..displayedTable = 0 and refreshed = 0. DisplayedTable will be set to 1 in the if!refreshed & !displayedTable function, indicating code has run through displayTable() starting from scratch. Note if comming from a rerun..i.e. a table exists and displayTableBtn.onclick display table button was pressed, tableConstructed variable will = 0, code advances to else part, so that the tap of the displayTableBtn.onclick button will clear the STShow table screen, cause a run of code through displayTable which now recreates the STHeader, which was previously ADDED to STRows by the aforementioned code.? If the screen is not cleared is not the STHeader there already from HTML? so it does not need the append STHeader? However if coming from displayTableBtn.onclick after a rerun the STHeader has already been added to STRows or if refreshed is set to 1, the code does ADD the STHeader to STRows in the refreshedBtn.onclick section, because STRows was all cleared prior to comming to displayTable() from refreshTable(). A rerun so far works well after first tap of displayTableBtn.onclick.');
		
		//adding the extra dynamic  field names to the header row
		//if editing current table clear the old dynamic rowns so they can be replaced with the new ones
		if(fieldDeleted) {
			console.log('Am I here! At trying to trim fieldHeaders?')
			//removeFieldHeaders();
			//fromDeleteField = false;
			// fieldDeleted = false;//reset flag
			//removeDynamicFields();
		// 	while (STrows.firstChild) {
   	 // STrows.removeChild(STrows.firstChild);
		// }//end while	
	//STrows.removeChild(STheadRow);	
	//	STHeadRow.removeChild(STHeader);
			//trimHeadRow();
	//removeFieldHeaders

//remove dynamic fields from previous STheadRow 
console.log('Removing all fields ' + STheadRow);
// while (STheadRow.fithChild) {
//    STheadRow.removeChild(STheadRow.fithChild);
// }//end while
clearHeadRow();
console.log('Removed dynamic fields! ' + STheadRow);
STheadRow.appendChild(STheadName);
STheadRow.appendChild(secondFieldName);
STheadRow.appendChild(STfirstDataNameTd);
STheadRow.appendChild(STsecondDataNameTd);
//field labels of static fields now restored!

fromDeleteField = false;// turn off this flag so that addFields is not called again beloww
		// for (let k = 4; k < originalNumberOfFields; k++) {
		// 	STheadRow.removeChild(STnextFieldHeading);
//trimHeadRow();
		// }//end for loop
		}//end if fieldDeleted
	if(!fieldDeleted) {
		trimHeadRow();
	}//end if !fieldDeleted
		//removeFieldHeaders();
	for (let k = 4; k < numberOfFields; k++) {
	const STnextFieldHeading = document.createElement('td');
	STnextFieldHeading.textContent = fieldNamesArray[k];	
	STheadRow.appendChild(STnextFieldHeading);

		}//end for loop
		displayedTable = 1; ////MAY NEED IF DTBtnTappedOnce = 1 then displayedTable = 1??? at line 2493?
		
		//if (edit !== 1) {
		tableConstructed = 1;//so that subsequent tap of displayTableBtn.onclick (after the first tap immediately after a rerun) will allow going to the STTable screen without going through another virgin run. Remember from a displayTableBtn.onclick recap after a rerun, displayedTable will = 1 so that if another virgin rerun occurs the head row will not get reconstructed and will not get added to the STTable screen. Only the re-card rows get rebuilt so you won't see the Head Row
		//}//end if edit !== 1 to force a rebuild of STShow window after an edit and a reap of display table Btn
		//suspect line below does this add all the headers again?
		if(fieldDeleted) {
			STrows.appendChild(STtableHeader);
			STrows.appendChild(STheadRow);
		}//end ifFieldDeleted
		
		//for other cases other than deleted field
		if(!fieldDeleted) {
		addFieldHeaders();
		}//end if !fieldDeleted
		//reset field deleted flag to restore code flow to a normal flow without having had a call to fielDelete
		fieldDeleted=false;
	}//end if(!refreshed) & !displayedTable
	
	//if comming from refreShTable
	//all the records had to be cleared in refreshTable because we are adding a new record, so all the old ones must be cleared, necessitating rebuilding the Header Row prior to reconstructing the records
	//removed || editCurrentTable. Nov 14
	
	//tag on added field if there is an edit request
	if (editCurrentTable === 1) {
		//tagOnAddedField from edit request
		// let tagOnAddedFields = fieldNamesArray.length - originalNumberOfFields;
		// for (let k=originalNumberOfFields;k< fieldNamesArray.length ; k++) {
		// 	STnextFieldHeading.textContent = fieldNamesArray[k];	
		// 	STheadRow.appendChild(STnextFieldHeading);
		// }//end for k=tagOnAddedFields
		//because STRows erased back at edit table(showBtn.onclick if editCurrentTable = 1)
		// removeDynamicFields();
		//addFieldHeaders();
	}//end if editCurrentTable = 1
	
	if (renewed){
		console.log('At displayTable (if renewed || editCurrentVariable = 1) The STHeader will be added because refresh() or showBtn.onclick via editBtn? cleared the STShow table before comming to displayTable(): refreshed = ' + refreshed + ' renewed = ' + renewed +'. displayedTable variable = ' + displayedTable + ' If renewed is 1 then refreshed will also be 1 because it is set to 1 in refreshTable() in aid of preventing a repeat tag on of extra field headings if there is a rerun.. renewed =1 so I came here from refreshTable, and going to rebuild table header and field rows..' );	
		addFieldHeaders();
// 	STtableHeader.textContent = dbTableName.value;
// STtableHeader.setAttribute('class','attentionBtn');
// STrows.appendChild(STtableHeader);
// STrows.appendChild(STheadRow);
}//end if updated NEEDS TO BE MOVED TO LINE3111..maybe NOT!
console.log('In displayTable! fromDeleteField = ' + fromDeleteField);
if (fromDeleteField) {
	//if coming from deleteField but deleteField was cancelled
	console.log('in displayTable fromDeleteField: fromeDeleteField = ' + fromDeleteField);
	fromDeleteField = false;
	addFieldHeaders();
}//end if fromDeleteField

console.log('Now just creating records!');
	//iterate through all records
	//tableTitle.length can also be counter
	for(let i = 0; i< tableTitle.length; i++) {
	// 	if (i >counter) {
		//ReferenceError: Can't find variable: e
	//   e.preventDefault();
  // }//end if counter e.prevent default
		//alert('at for i loop: i = ' +i + ' c = ');
		
		const STrecordItem = document.createElement('tr');
		
		//highlight record row if target of search Jan8 THIS CHANGED THE FONT SIZE,!! and underlined IF A REFRESHTABLE OCCURRED AS IN A CELL EDIT! So maybe create the show record button to Reid’s play the table?
		if(i=== matchedRecordIndex & fromSearchRecord) {
			fromSearchRecord = false;
		STrecordItem.setAttribute('class','highlightgreen');
		}//end if i=matched record index
		
		STrows.appendChild(STrecordItem);//maybe not [i]
		//add field data for each td in the row
			for(let c=0;c<numberOfFields;c++){
				//alert('at for c loop: i = ' +i + ' c = '+c);
		const STrecordTd=document.createElement('td');//add td cell to row..left off here date:Aug 16 2020
		STrecordItem.appendChild(STrecordTd);
		
			
			STrecordTd.textContent = tableArray[i][c];//tableTitle (global) array has to be constructed in displayData of indexedDBNotes	
			
			//addEventListener to allow edit of td values
	STrecordTd.addEventListener('dblclick', function () {
	//	let dblTappedOnce = true;
		const editTD = document.createElement('p');
		const editTDInput = document.createElement('input');
		const editTDInputBtn = document.createElement('button');
		editTDInput.value = tableArray[i][c];
		editTD.textContent = 'Current value: '+ tableArray[i][c];
		STrecordTd.appendChild(editTD);
		if (c !== 1) {
		STrecordTd.appendChild(editTDInput);	
		}//end if c!==1
		
		
		//code to add date input to double click TD date cell
		if (c === 1) {
			//
			// var input = document.createElement("input");
			// input.setAttribute('type', 'text');
			//
		var dateSelect = document.createElement("input");
		//for just the date use type 'date' instead of date time-local
	if (tableDateTime) {
		dateSelect.setAttribute('type','datetime-local');
	}//end if tableDateTime
	if(!tableDateTime) {
		dateSelect.setAttribute('type','date');
	}//end if !tableDateTime
	
		//('input[type="date"]');
		STrecordTd.appendChild(dateSelect);
			
			
		}//end if c===1 -  STrecordTd.textContent = DATE
		
		//code above to add date input to double click TD date cell
		
		STrecordTd.appendChild(editTDInputBtn);
		editTDInputBtn.onclick = function (){
			
			//date inpuT code
			if (c === 1) {
		
		//STrecordTd.removeChild(dateSelect);
		
		//trim seconds off time if tableDateTime
		if (tableDateTime) {
			dateSelect.value = dateSelect.value.slice(0,16);
		}//end if tableDateTime
		tableArray[i][c] = dateSelect.value;
		let editedDate = dateSelect.value;	
		//put code to edit date in notes here
		//Feb 13
		//Get record I’d from tableTitle[i][0]
		let endIndex = tableArray[i][0].indexOf(">");
		let recordId = tableArray[i][0].slice(0,endIndex);
		console.log('calling function editNotesDate' + '. recordId = ' + recordId + '. endIndex = ' + endIndex);
		//pass recordId and the edited date to the editNoteDate function as parameters
		editNotesDate(recordId,editedDate);
		
		
		//put code to edit date in notes above  here
		
		}//end if c===1 -field  STrecordTd.textContent = DATE
		if (c !==1) {
		
		tableArray[i][c] = editTDInput.value;
	}//end if c !==1
			
		if (c !== 1) {
		STrecordTd.removeChild(editTDInput);
		}//end if c!==1
		STrecordTd.removeChild(editTDInputBtn);
		const refreshBtn = document.createElement('button');
		refreshBtn.textContent = 'REFRESH TABLE';
	//	if (dblTappedOnce) {
		STrecordTd.appendChild(refreshBtn);
	//	dblTappedOnce = false;
	//}//end if dblTapped
		
	refreshBtn.onclick = function () {
		//there is a glitch here somewhere. The STHeadRow can get messed up if refreshed = 1 after an edit of the current displayed table. Do I need editCurrentTable set to 0 here?????!!!!!
		
			refreshed = 1;//so added field name headings are not generated twice
			editCurrentTable = 0; //Nov 22 so added field name headings are not generated twice
			STrecordTd.removeChild(editTD);
			STrecordTd.removeChild(refreshBtn);
			//STRows or STHeadRow
	// 	while (STheadRow.firstChild) {
    // STheadRow.removeChild(STheadRow.firstChild);
	// 	}//end while
		//changed firstChild to secondChild
		while (STrows.firstChild) {
    STrows.removeChild(STrows.firstChild);
	}//end while
	
// 	//code to regenerate field headings prior to rebuilding Table
// 	STheadName.textContent = fieldNamesArray[0];//listName header first column
// 	STfirstDataNameTd.textContent = fieldNamesArray[2];
// 	STsecondDataNameTd.textContent = fieldNamesArray[3];
// 	//create the added fields required
// 	for (let k = 4; k < numberOfFields; k++) {
// 	const STnextFieldHeading = document.createElement('td');
// 	STnextFieldHeading.textContent = fieldNamesArray[k];	
// 	STheadRow.appendChild(STnextFieldHeading);
		
// }//end for loop

// 	//end code to regenerate Field Headings

//to maintain header after refresh
STtableHeader.textContent = dbTableName.value;
STtableHeader.setAttribute('class','attentionBtn');
STrows.appendChild(STtableHeader);
	STrows.appendChild(STheadRow);
	
	console.log('At refreshBtn.onclick..a data cell is being edited!: refreshed = ' + refreshed + ' renewed = ' + renewed +'. displayedTable variable = ' + displayedTable + '. The table is cleared, and table header and field header row reconstructed in the refreshBtn.onclick code, and ADDED to STRows..now going to displayTable with refreshed variable set to 1 by refreshBtn.onclick so that field headings will not duplicate or repeat.' );	
	
			displayTable();
			
			//!!!!!!!!!!!!MAYBE NEED refreshed = 0; statement here to fix field header problem?
			//Dec 28 so far without a rerun everything works?!
			refreshed = 0; //ADDED JAN 2 2021
			//!!!!!!!!!!!!!
			}//end refreshBtn.onclick
		}//end editTDInputBtn.onclick
		
	});//end addEventListener
			
		}//end for c =
			
		}//end for i = to show all records
		
		//should this code be near tableScreen section so you can return to home screen direct from displayTable??
		const homeScreenBtn = document.querySelector('#homeScreenBtn');
		homeScreenBtn.onclick = function () {
			console.log('homeScreenBtn clicked');
			
			showTable.setAttribute('class', 'hidden');
		// LEFT OFF HERE DEC 24 2020 have to figure out refreshed = 0 and refreshed = 1 so field headers are generated or not	deleteWindow.setAttribute('class','hidden');
		}//end homeScreenBtn.onclick
		
		// //return to search table window
		// 	const toSearchScreenBtn = document.querySelector('#toSearchScr');
		// toSearchScreenBtn.onclick = function () {
		// 	console.log('toSearchScreenBtn clicked');
			
		// 	showTable.setAttribute('class', 'hidden');
		// 	searchWindow.setAttribute('class','showing');
		// }//end toSearchScreenBtn.onclick
	//toScreenBtn clicked then program stops running no error message is elicited. Window taps are not responsive why???
//Any relation to addEventListener??	maybe should replace addEventListener with .ondbleclick??This happens if going to search screen directly from table display. If you return to Home Screen first and then go to search screen all is well!Seems to happen on first run of program after a re-run post DONE button, when going from notes to search screen DIRECT. After program has been running it seems I can go direct to search screen from notes without issue..at least when found record list is present. When this issue happens is it possible the first time a found record list item has not been created??
		//saveTableBtn declared as global variable at start of createTable code
		saveTableBtn.setAttribute('class','colorBtn');
		saveTableBtn.textContent = 'SAVE';
	//$$LEFT OFF HERE,!!!	
		saveTableBtn.onclick = function () {
			saveTableBtn.setAttribute('class', 'normalBtn');
			saveTableBtn.textContent = 'SAVED';
			//save all necessary arrays to notes_os
	for(let i = 0;i<tableTitle.length;i++) {
			for(let j=0;j<numberOfFields;j++) {
				console.log('tableArray[' +i + '][' + j +'] = ' + tableArray[i][j]);
				
			}//end for j =
			
			
		}//end for i =
		dataVobj.tableArray = tableArray;
		console.log('At saving current table values! and going to saveVariables. dataVobj.tableArray = ' + dataVobj.tableArray);
		saveVariables();
		//so that data appears after returning to Home Screen followiNg a displayTable function after having deleted a table record!!! Otherwise you have to reset tData in preferences.Date:Dec19g OR MAYBE IF DELETEDrecord Don't erase table rowas back in displayTable
		//prefWindow.setAttribute('class','showing');//instead of displayData whiCh repeats record list twice!
		options();//this seems to do the job!!
		//displayData();//might have to REMOVE if still repeating record list after a delete table record???THERE IS SOME ISSUE WITH CONCURRENT RUNNING OF TWO ITERATIONS OF DISPLAY DATA!!!!
		}//end saveTableBtn.onclick
	console.log('At END displayTable(). This means a table now exists..rerun or not.: displayedTable = ' + displayedTable + '. tableConstructed = ' + tableConstructed + '. renewed (added record) = ' + renewed + '. refreshed (data cell edit) = ' + refreshed + '. edit = ' + edit + '. DTBtnTappedOnce = ' + DTBtnTappedOnce + '. editCurrentTable = ' + editCurrentTable + '. editCurrentTable variable is set 0 every time tableScreenOptions is run.The refreshed variable is controlled by the REFRESH Btn in the edit phase of the showTable data cell, and is also set to 1 in refreshTable function. refreshed is set to 0 in showBtn.onclick (DISPLAY TABLE) Btn, and also from a rerun..initialized to 0. The renewed variable is controlled by the refreshTable function.' + '. originalNumberOfFields = ' + originalNumberOfFields + '. numberOfFields = ' + numberOfFields + '. numberOfAdditionalFields = ' + numberOfAdditionalFields + '. originalNumberRecords = ' + originalNumberRecords + '. addedNumberOfRecords = ' + addedNumberOfRecords + '. See refreshTable and editBtn.onclick');
	//moved goToSearchBtn.onclick here to see if this fixes program in limbo issue after first table appearance and then tapping goToSearchBtn???FIXED BY ADDING CALL TO SEARCH FUNCTION,!!
	//return to search table window
			const toSearchScreenBtn = document.querySelector('#toSearchScr');
		toSearchScreenBtn.onclick = function () {
			console.log('toSearchScreenBtn clicked');
			
			showTable.setAttribute('class', 'hidden');
			searchRecords();
		
			//searchWindow.setAttribute('class','showing');
		}//end toSearchScreenBtn.onclick
}//end function displayTable .. showTable
//when incorporating into IndexedDBNotes will have to have a mechanism to save the table and field arrays
function refreshTable () {
	//Left off here Oct 28
	//removed refresh=1 Nov 22 so that field headings will be geNerated after adding a record and update
	//if refreshed not set to 1 then field headings will repeat when going to display table, but if at 0 a rerun will recreate the field headings which is what you want. So maybe add line refresh = 0 on return from displayTable .see below
refreshed = 1;//to keep field titles from repeating (same for if edit = 1)
renewed = 1;//variable in refreshTable()to create header row in displayTable when coming from refrehTable
console.log('At refreshTable: refreshed = ' + refreshed + ' renewed = ' + renewed +'. refreshed variable gets set to 1 in the edit data cell section of the STshowTable code, as well as here in the refreshTable function. (Removed Nov 22 so field headings will again be generated? It is not returned to 0 in refreshTable function so that if there is a rerun, extra fields will not repeat in displayTable(). The renewed variable is set to 1 in refreshTable, and is returned to 0 after refreshTable() completes.');
tableScreen.setAttribute('class','hidden');
showTable.setAttribute('class', 'showing');
	//might you have to clear the previous showTable screen of all content first to prevent repeat display of table?
	//ReferenceError: Can't find variable: buildRecordRows IS THIS BECAUSE BUILDRECORDROWS FUNC IS WITHIN THE MAKETABLE FUNCTION.???? So will try placing buildRecordRows function outside of makeTable!!
	console.log('Going to buildRecordRows() from refreshTable. tableArray = ' + tableArray);
	//tableArray has not been updated
	console.log('tableTitle[] = ' + tableTitle);
	//tableTitle[] = CN3205,CN4800,CN4700,CP6700
	//tableTitle has been updated
	
	//trial code to define new tableArray
	originalNumberOfFields = numberOfFields;
	addedNumberOfRecords = tableTitle.length-originalNumberRecords;
	currentNumberOfFields = fieldNamesArray.length;
	
	//redefineTableArray();
	
	

	testing = true;
	
	//LEFT OFF HERE DEC 12
	
	//tableTitle[] = CN3205,CN4800,CN4700,EN102,EN102
	
	
	
	//if (!deleteRecord) {
		buildRecordRows();//buildRecordRows
		console.log('Back from buildRecordRows..clear the table before repopulating.')
		
//	}//end if !deleteRecord
	
	//clearing old header row prior to going back to displayTable to update% after adding the record. .??maybe the header clear not necessary here?, because you had to rebuild it in displayTable..Romberg you are only adding a record in refreshTable, not adding a field!
	while (STrows.firstChild) {
   STrows.removeChild(STrows.firstChild);
	 }//end while
	originalNumberRecords = tableTitle.length;//use to give refresh table option each time a record is added originally set in newBtn.onclick of CreateTable..Romberg new originalNumberRecords for next reboot
	console.log('Returning from buildRecordRows and going to displayTable after clearing table prior to repopulating in displayTable');
	console.log('In refreshTable(). tableTitle.length = ' + tableTitle.length);
	testing = false;
	displayTable();
//removed refreshed=0 because it is not used here and it causes repeat of extra fields in displayTable (Noc 5 2020)
//refreshed = 0;//NOTE ADDED IT BACK IN DEC 20 2020	
console.log('Back from displayTable. renewed is set back to 0, but refreshed = ' + refreshed + ' for run through displayTable, but is now going to be set to 0 again at end of refreshTable() function. If tapping Display Table again..which means added fields will not be repeated by displayTable if run through displayTable again, for example by a rerun.');
renewed = 0;
refreshed = 0;//see Nov 5 note above..not sure what that refers to..maybe in edit? But otherwise works for a refresh table call after adding a new record Dec20
tableNeedsUpdate = false;
editNote = false;//flag to refreshTable if notes edited
}//end refreshTable()

//function to redefine tableArray
function redefineTableArray () {
	//function to redefinetableArray
	
	var r = originalNumberRecords; //start from rows 3
var c = originalNumberOfFields; //start from col 5..if edit don't forget to increase the numberOfFields value

var rows = tableTitle.length;//current total number of rows after adding new ones will = tableTitle.length
var cols = currentNumberOfFields;

for (var i = 0; i < rows; i++) {
  var start;
  if (i < r) {
    start =  c;
  } else {
    start = 0;
    tableArray.push([]);
  }
  for (var j = start; j < cols; j++) {
        tableArray[i].push(0);
    }
}
return tableArray;
//above is trial code to define new tableArray
//PUTS 7 0's after each record ? How come?
}//end function redefineTableArray

// javascript for createTable above

//function to  add STHeader and STHeadRow
function addFieldHeaders () {
	console.log('Adding Field Headers');	STtableHeader.setAttribute('class','attentionBtn');
STrows.appendChild(STtableHeader);
STrows.appendChild(STheadRow);
	
}//end function addFieldHeaders

//function to remove fieldHeaders
//error:NotFoundError: The object can not be found here.
//NotFoundError: The object can not be found here.Jan30
function removeFieldHeaders () {
	console.log('Removing Field Headers (STHeadRow)');	//STtableHeader.setAttribute('class','attentionBtn');
//STrows.removeChild(STtableHeader);
STrows.removeChild(STheadRow);
}//end function to removeFieldHeaders

//function to clear table screen
function clearTableRows () {
	console.log('Clearing table rows in order to repopulate.');
	while (STrows.firstChild) {
   STrows.removeChild(STrows.firstChild);
	}//end while
}//end function clearTableRowns

//function trI’m STHeadRow to original four field headings
function trimHeadRow () {
	console.log('Trim Field Headers back to original 4 fields before tacking on extra fields.(STHeadRow.fithChild)');
	
	while (STheadRow.fourthChild) {
   STheadRow.removeChild(STheadRow.fourthChild);
	}//end while
}//end function trimHeadRow

function clearHeadRow () {
console.log('clearing head row');	document.getElementById("STheadRow").innerHTML = "";
}

function removeDynamicFields () {
	console.log('Removing Dynamic Fields');
  var row = document.getElementById("STheadRow");
  for (let i = originalNumberOfFields;i>4;i--) {
  row.deleteCell(-1);
  //TypeError: null is not an object (evaluating 'row.deleteCell')
}//end for i =
}//end 

//function below never called remove??
function deleteFirstRow() {
  document.getElementById("STforRows").deleteRow(0);
}

function myCreateFunction() {
  var table = document.getElementById("myTable");
  var row = table.insertRow(0);
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  cell1.innerHTML = "NEW CELL1";
  cell2.innerHTML = "NEW CELL2";
}

function myDeleteFunction() {
  document.getElementById("myTable").deleteRow(0);
}
//LEFT OFF HERE NOV 26
function editMoreFields () {
	
    //  const addToDynamicFields = document.createElement('p');//referenced with createTable elements above
	  addToDynamicFields.textContent = 'How many more fields do you wish to ADD to current number of Dynamic Fields?';
	//  const moreFieldsInput = document.createElement('input');
	//  const fieldsBtn = document.createElement('button');
	  fieldsBtn.setAttribute('class','attentionBtn');
	  fieldsBtn.textContent = 'ENTER!';
	 addToDynamicFields.appendChild(moreFieldsInput);
	 addToDynamicFields.appendChild(fieldsBtn);
	 createTableWindow.appendChild(addToDynamicFields);
	 
	 fieldsBtn.onclick =  function() {moreFields = moreFieldsInput.value;
		let addFields = Number(moreFields); 
		  console.log('addFields = ' + addFields);
		dynamicFieldTotal = Number(numberOfAdditionalFields) + Number(addFields);
console.log('dynamicFieldTotal = ' + dynamicFieldTotal);	
	 numberOfAdditionalFields = Number(numberOfAdditionalFields) + Number(moreFields);
	 console.log('At editMoreFields. numberOfAdditionalFields = '+ numberOfAdditionalFields);
	additionalFields.value = numberOfAdditionalFields;  
submitBtn.setAttribute('class','attentionBtn');	createTableWindow.removeChild(addToDynamicFields);
  }//end FieldsBtn.onclick
}//end editMoreFields function

//remove editMoreFieldsElements
function removeEditMoreFieldsElements () {
	addToDynamicFields.removeChild(moreFieldsInput);
	 addToDynamicFields.removeChild(fieldsBtn);
	 createTableWindow.removeChild(addToDynamicFields);
	
}//end removeEditMoreFieldsElements function
//setTable called from displayData() to trim table arrays
function setTable (cursor,counter) {
let colonB = paraBody[counter -1].indexOf(':');

if (colonB === -1) {
	paraBody[counter -1] = paraBody[counter -1];
} else {
	paraBody[counter -1] = paraBody[counter -1].slice(0,colonB);

}//end if colonB = -1

let colonD = displayXtraFieldData[counter -1].indexOf(':');
if (colonD === -1) {
	displayXtraFieldData[counter -1] = displayXtraFieldData[counter -1];
} else {
displayXtraFieldData[counter -1] = displayXtraFieldData[counter -1].slice(0,colonD);

	}//end if colonD = -1
	
	//Also, if you know that you want to extract all of the remaining characters in a string after a certain character, you don't have to include the second parameter! Instead, you only need to include the character position from where you want to extract the remaining characters in a string. Try the following:
	//browserType.slice(2);
	
	//let extractedTitle = tableTitle[counter-1].slice(indexOf('>'));

}//end function setTable

//code to delete fields in table
//see references above at 
function deleteTableField() {
	fromDeleteField = true;//flag to ensure field headings displayed correctly
	console.log('Now in deleteTableField function. fromDeleteField now = ' + fromDeleteField);
//fieldHeaders is the div referenced in HTML	
fieldHeaders.appendChild(STtableHeader);
fieldHeaders.appendChild(STheadRow);

backToEditBtn.onclick = function (){
	resetDataList();
	deleteFieldWindow.setAttribute('class', 'hidden');
	createTableWindow.setAttribute('class', 'showing');	
}//end backToEditBtn.onclick
cancelToNotesBtn.onclick = function () {
	resetDataList();
	deleteFieldWindow.setAttribute('class', 'hidden');
	createTableWindow.setAttribute('class', 'hidden');
	fromDeleteField = true;
	//trimHeadRow();
	removeFieldHeaders();//to keep dynamic fields from appending after a deleteField call
	//displayedTable=1;
	console.log('cancelToNotesBtn has been clicked. You should now see notes screen. fromDeleteField = ' + fromDeleteField);
}//end cancelToNotesBtn.onclick
//create list of fields
//so first field is not chosen set j=1 instead of 0 ..ONLY DYNAMIC FIELDS CAN BE REMOVED SO SET J=4!,!
for(let j=4;j<numberOfFields;j++) {
				console.log('fieldNamesArray[' +j+ '] = ' + fieldNamesArray[j]);
				const fieldOption = document.createElement('option');
	fieldOption.value = fieldNamesArray[j];	
	dataList.appendChild(fieldOption);
			}//end for j =
	submitFieldSelectionBtn.onclick = function() {
		chosenFieldInfo.textContent = 'You have selected the Field labelled: ' + myFields.value +' to REMOVE!';
		if (window.confirm("Do you really want to DELETE : " + myFields.value +  " ? CANCEL will UNDO")) {
			
			let chosenField = myFields.value;
  			editTableArray(chosenField);
			//put resetDataList after call to editTableArray to preserve value of myFields.value
			resetDataList();
			} else {
				//return to edit screen
				deleteFieldWindow.setAttribute('class', 'hidden');
					resetDataList();	createTableWindow.setAttribute('class', 'showing');	
			}//end if window.confirm else ...
	}//end submitFieldSelectionBtn.onclick
	
	function editTableArray (chosenField) {
	alert('code for editTableArray function goes here');
	console.log('tableArray prior to edit =  ' + tableArray);
	copyOfTableArray = tableArray;//date: Feb 5
	console.log('fieldNamesArray prior to edit = ' + fieldNamesArray);
	//remove selected field
	console.log('cleared alert.. in field deletion! chosenField = ' + chosenField);
	let fieldNamesArrayIndex = fieldNamesArray.indexOf(myFields.value);
	
console.log('myFields.value = ' + myFields.value);
console.log('fieldNamesArrayIndex = ' + fieldNamesArrayIndex);
//fieldNamesArrayIndex = -1
console.log('fieldNamesArray[fieldNamesArrayIndex] = ' + fieldNamesArray[fieldNamesArrayIndex]);

let removedField = fieldNamesArray.splice(fieldNamesArrayIndex,1);
console.log('removedField = ' + removedField);
//removedField= removedField = Deceleration 
console.log('fieldNamesArray = ' + fieldNamesArray);
for(let j=0;j<fieldNamesArray.length;j++) {
				console.log('fieldNamesArray[' +j+ '] = ' + fieldNamesArray[j]);
				
			}//end for j =
			
//edit tableArray
//copy Array if needed



for (let i = 0;i<tableTitle.length;++i) {

let removedItem = tableArray[i].splice(fieldNamesArrayIndex, 1) // this is how to remove an item

}//end for i

console.log('tableArray = ' + tableArray);
console.log('copy of original tableArray = ' + copyOfTableArray);
			
//end edit tableArray
//now recreate table
deleteFieldWindow.setAttribute('class', 'hidden');
numberOfFields = fieldNamesArray.length;
numberOfAdditionalFields = numberOfAdditionalFields - 1;
while (STrows.firstChild) {
    STrows.removeChild(STrows.firstChild);
	}//end while	

displayedTable = 0;
refreshed = 0;

STtableHeader.textContent = dbTableName.value;

dataVobj.tableArray = tableArray;
		console.log('At saving current table values! and going to saveVariables. dataVobj.tableArray = ' + dataVobj.tableArray);
	//WHILE TESTING DISABLED SAVEVARIABLES
//	saveVariables();//may not need because displayedTable also leads to saveVariables Feb 2 ?

//editCurrentTable === 1;
//removeFieldHeaders();
//NotFoundError: The object can not be found here.
fieldDeleted = true;
//refreshed=1;//flag REMOVE IF DOESN'T WORK
//while (STrows.firstChild) {
 //   STrows.removeChild(STrows.firstChild);
//	}//end while	
	
displayTable();



}//end function editTableArray


//function to cLear and reset dataList
	function resetDataList () {
		myFields.value = "";
		while (dataList.firstChild) {
   dataList.removeChild(dataList.firstChild);
		}//end while
	}//end function resetDataList


}//end function deleteTableField

//end of code to delete fields in table

function getDateString(n) {
 var d = new Date();
 //TypeError: d.toDateString is not a function. (In 'd.toDateString()', 'd.toDateString' is undefined)HAVE TO USE newDate function that rebuRns a date object!
  var n = d.toDateString();
 // document.getElementById("demo").innerHTML = n;
 return n;
}

//function to edit date in notes after editing date in table
function editNotesDate(recordId,editedDate) {
	console.log('In function editNotesDate')
let noteId = Number(recordId);
//let editedDate = dateSelect.value;
console.log('noteId = ' + noteId + '. editedDate = ' + editedDate);
//noteId = 3. editedDate = 1
let transaction = db.transaction(['notes_os'], 'readwrite');

let objectStore = transaction.objectStore('notes_os');

let request = objectStore.get(noteId);
//var request = objectStore.get();noteId = 3 and this was deleted in this dB. Have to parse tableArray[i][c] to get the date
request.onerror = function(event) {
  // Handle errors!
  console.log("edit failed");
};//end request.o error
request.onsuccess = function(event) {
	//original note in data variable
	var data = event.target.result;
	//create the tools for doing the edit
	console.log('Will edit item # ' + data.id + ' ' + data.created + ' , ' + data.body);
	//reference editTitle input this works

data.created = editedDate;

var requestUpdate = objectStore.put(data);
//};//end request.onsuccess ?might have to move to end of function?
   requestUpdate.onerror = function(event) {
     // Do something with the error
	 editBanner.textContent = 'Whoops! ERROR! Transaction now inactive!'
   };
   requestUpdate.onsuccess = function(event) {
     // Success - the data is updated!
	 console.log("The record is updated!");
	 };
	 
 };//end request.onsuccess ?might have to move to end of function?
 }//end function editNotesDate(i,c) 
 
 

/* DISABLED/ENABLED SERVICE WORKER CODE FOR TESTING NEW CODE IN THIS VERSION !!!!


  if('serviceWorker' in navigator) {
    navigator.serviceWorker
             .register('/web-projects/MDN Learning/JavaScript/ClientStorage/IndexedDB/TableNotesVer19/TableNotesVer19sw.js')
             .then(function() { console.log('Service Worker Registered'); });
			alert('Service Worker Registered!'); navigator.storage.estimate().then(function(estimate) {
  document.getElementById("percent").value =
      (estimate.usage / estimate.quota * 100).toFixed(2);
  });//end storageManagerEstimate	
  
		 }//end if service worker
	//StorageManager.estimate()..https://developer.mozilla.org/en-US/docs/Web/API/StorageManager/estimate
	
	if(!navigator.serviceWorker) {
	console.log('You are not running in Safari!');
	document.getElementById("percent").value = '(Not running in Safari so not able to return )';
}//end if not! service worker
	
	//what about the manifest file? triggered by oninstall? A2HS?	 
//If the service worker API is supported in the browser, it is registered against the site using the ServiceWorkerContainer.register() method. Its contents reside in the sw.js file, and can be executed after the registration is successful. It's the only piece of Service Worker code that sits inside the app.js file; everything else that is Service Worker-specific is written in the sw.js file itself.
//END OF DISABLED SERVICE WORKER !!!*/


};//end window.onload function
