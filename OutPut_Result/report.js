$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/khosruzzaman/FrameWork/AutomationSuitOfIndex/src/main/java/com/feature/component3.feature");
formatter.feature({
  "line": 1,
  "name": "On the index portal, as a user i can reach and see most of the table data properly placed",
  "description": "",
  "id": "on-the-index-portal,-as-a-user-i-can-reach-and-see-most-of-the-table-data-properly-placed",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "Different sets of table data can retrieve in different way",
  "description": "",
  "id": "on-the-index-portal,-as-a-user-i-can-reach-and-see-most-of-the-table-data-properly-placed;different-sets-of-table-data-can-retrieve-in-different-way",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "I am on HomePage where title is React App",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "I Click on Toggle Report Data Button, Hiden Table will Displayed",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "I can check total numbers of row and columns",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "I can check available data in the first row",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "I can check available data in the first column",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "I can close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "Component3.i_am_on_HomePage_where_title_is_React_App()"
});
formatter.result({
  "duration": 111112667,
  "error_message": "java.lang.NullPointerException\n\tat com.stepDefinitions.Component3.i_am_on_HomePage_where_title_is_React_App(Component3.java:41)\n\tat ✽.Given I am on HomePage where title is React App(/Users/khosruzzaman/FrameWork/AutomationSuitOfIndex/src/main/java/com/feature/component3.feature:5)\n",
  "status": "failed"
});
formatter.match({
  "location": "Component3.i_Click_on_Toggle_Report_Data_Button_Hiden_Table_will_Displayed()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Component3.i_can_check_total_numbers_of_row_and_columns()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Component3.i_can_check_available_data_in_the_first_row()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Component3.i_can_check_available_data_in_the_first_column()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "Component3.i_can_close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});