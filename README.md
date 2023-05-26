# Group-Reservation-Information-Management-System-for-Accommodation

## Summary
At the time of receiving the reservation of the group, the meal information of the group is appropriately changed in format and compiled as a "calendar" or added to the "shift table". If there is a change, change one place and everything will be updated. Furthermore, since the execution time of all GAS code exceeds two minutes, the execution time of all gas is reduced by about 26 times by speeding up.

## Required Environment
The formad used for the work should be the following three spreadsheets.

- [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758) (For customers to enter reservation information)
- [Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357) (For employees to manage their organizations.)
- [Shift Sheet](https://docs.google.com/spreadsheets/d/1UAnPwGwvtmEpA_Lh_RjVc5R0XhRrI5_wB_CGNRZQb8Y/edit#gid=1166032143) (For employees to manage their work hours.)

Copy them to your own Google Drive and embed the GAS program into ***Group Progress Spread Sheet***. (you will need to put the spreadsheet key in the designated place in the code).

Currently, access is restricted and not all of them are available for viewing. If necessary, some of them will be introduced in the descriptions below.

## Procedure
1. After a group reservation is made, you will be asked to enter the information of the group guests in a formad like the spreadsheet → [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758).

<p align="center">
  <img width="800" alt="groupInput_1" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/3b649e89-e3a1-499d-a87b-acc50f5f167b">
</p>
<p align="center">
  ↑ Notes to customers, etc ↑
</p>
<p align="center">
  <img width="800" alt="groupInput_2" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/938356a3-cc4a-4727-a506-4c56f2d67f70">
</p>
<p align="center">
  ↑ Customer enters meal times and their number ↑
</p>
<p align="center">
  <img width="800" alt="groupInput_3_emp" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/28f85a3b-938a-4bf7-9a92-126b398a851e">
</p>
<p align="center">
  ↑ Important information such as meal times, number of meals, etc., is collected here. (Referenced by spreadsheet functions like " ' = Sheet name'! $A$1 ") ↑
</p>

The above is a partial reference to [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758).


2. The system is designed to automatically consolidate important information entered by group guests, such as the number of meals and their times, into a single sheet. (This is implemented using only functions in the spreadsheet.)
This sheet is named "従業員使用欄" in this case, and this sheet in the [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758).

(従業員使用欄が埋まっている写真を張る)

From now on, this sheet will be referred to as the Employee Use Sheet.(the Employee Use Sheet is one of several sheets existing in [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758).)


3. Copy this sheet (named "従業員使用欄) into the spreadsheet ([Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357).) that controls all associations. This copied sheet will be the source of data to be posted, and will be the sheet to be changed when the number of members changes in the future.


<img width="250" alt="従業員使用欄(Employee Use Sheet)" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/28f85a3b-938a-4bf7-9a92-126b398a851e"> 従業員使用欄 (Employee Use Sheet)--(copy)-→ [Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357).


4. Press the "Update" button on the "実行ボタン" sheet in the [Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357).

<img width="800" alt="groupManage_bottun" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/09122e72-b19e-4004-b311-eae2510bcc81">

The above is a partial reference to [Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357).


If a new group makes a reservation, perform step (1), and if the number of people in an existing group changes, perform step (4) only.

# Other fine features
