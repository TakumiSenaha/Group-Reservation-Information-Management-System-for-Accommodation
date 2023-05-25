# Group-Reservation-Information-Management-System-for-Accommodation

## Summary
At the time of receiving the reservation of the group, the meal information of the group is appropriately changed in format and compiled as a "calendar" or added to the "shift table". If there is a change, change one place and everything will be updated. Furthermore, since the execution time of all GAS code exceeds two minutes, the execution time of all gas is reduced by about 26 times by speeding up.

## Procedure
1. After a group reservation is made, you will be asked to enter the information of the group guests in a formad like the spreadsheet below.

From now on, this will be referred to as the Group Customer Input Spreadsheet.

2. The system is designed to automatically consolidate important information entered by group guests, such as the number of meals and their times, into a single sheet. (This is implemented using only functions in the spreadsheet.)
This sheet is named "従業員使用欄" in this case, and this sheet in the Group Customer Input Spreadsheet.

From now on, this will be referred to as the Employee Use Sheet.

3. Copy this sheet (named "従業員使用欄) into the spreadsheet (sample spreadsheet is shown below) that controls all associations. This copied sheet will be the source of data to be posted, and will be the sheet to be changed when the number of members changes in the future.


From now on, this will be referred to as a Group Progress Spread Sheet.



4. Press the "Update" button on the "実行ボタン" sheet in the Group Progress Spread Sheet sheet.



If a new group makes a reservation, perform step (1), and if the number of people in an existing group changes, perform step (4) only.


