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

## Demonstration
* When a reservation is made, enter the name of the group, check-in date, check-out date, etc. on the ~month_Front Desk Sheet in the **Group Progress Spread Sheet**.

![demo_putInFrontSheet](/images/demo_putInFrontSheet_gif.gif)

---

* After the client has submitted the Spreadsheet (**Group Customer Input Spreadsheet**) with his/her lodging information, copy the last page of the Spreadsheet, prepare a copy of the "Original Employee Use (従業員使用欄の原本)" sheet in the **Group Progress Spread Sheet** as a foundation, and stick it to it.

![demo_putInFrontSheet](/images/demo_copyToProgressSheet_gif.gif)

---

* If there is a new reservation, a change in the number of people, or a change in the number of meals, press the Update button, and the changes will be reflected in the Calendar in the **Group Progress Spread Sheet** and **shift Sheets**.

![demo_putInFrontSheet](/images/demo_update_gif.gif)

## Procedure (details of Demonstration Video)
1. After accepting the reservation, enter the name of the group, tentative number of people, etc. in the "○月_フロント用シート"("○month_Front Desk Sheet") in the [Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357). (The reservation month corresponds to ○.)

![front_sheet](/images/Nan_front_sheet.png)

※ If this is the first reservation for the month, copy and rename the master sheet.

---

2. After a group reservation is made, you will be asked to enter the information of the group guests in a formad like the spreadsheet → [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758).

<img width="800" alt="groupInput_1" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/3b649e89-e3a1-499d-a87b-acc50f5f167b">

* ↑ Notes to customers, etc ↑

---

<img width="800" alt="groupInput_2" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/938356a3-cc4a-4727-a506-4c56f2d67f70">

* ↑ Customer enters meal times and their number ↑

---

<img width="800" alt="groupInput_3_emp" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/28f85a3b-938a-4bf7-9a92-126b398a851e">

* Important information such as meal times, number of meals, etc., is collected here.
  (Referenced by spreadsheet functions like " ' = Sheet name'! $A$1 ") ↑

The above is a partial reference to [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758).

---

2. The system is designed to automatically consolidate important information entered by group guests, such as the number of meals and their times, into a single sheet. (This is implemented using only functions in the spreadsheet.)
This sheet is named "従業員使用欄" in this case, and this sheet in the [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758).

<img width="800" alt="groupInput_Group_A" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/01ad5f1e-cf7a-4871-ad30-4760bddf591d">

* **Example group (Group_A)**

From now on, this sheet will be referred to as the Employee Use Sheet.(the Employee Use Sheet is one of several sheets existing in [Group Customer Input Spreadsheet](https://docs.google.com/spreadsheets/d/1oHRdbQT32SkUCDo0EikGdgOeN_frALkVF9Me3fhdNWk/edit#gid=1777565758).)

---

3. Copy this sheet (named "従業員使用欄) into the spreadsheet ([Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357).) that controls all associations. This copied sheet will be the source of data to be posted, and will be the sheet to be changed when the number of members changes in the future.

<img width="250" alt="従業員使用欄(Employee Use Sheet)" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/01ad5f1e-cf7a-4871-ad30-4760bddf591d"> 従業員使用欄 (Employee Use Sheet) --(copy)--> [Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357).
  
---

4. Press the "Update" button on the "実行ボタン" sheet in the [Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357).
The below is a partial reference to [Group Progress Spread Sheet](https://docs.google.com/spreadsheets/d/1mvpnQwoCilJOkV8Fd38NQYfLjlWX19yup5-WdY80hgg/edit#gid=2139183357). ***The data is then formatted to fit the meal management calendar and employee shift schedules that will be captured later, and is automatically transcribed.***

<img width="800" alt="groupManage_bottun" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/09122e72-b19e-4004-b311-eae2510bcc81">

* **Above is a view of the sheet with the update button in Group Progress Spread Sheet**

---

<img width="590" alt="jan_front_sheet" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/b8e43596-8af3-4304-a792-975e433ed0fb">
<img width="590" alt="feb_front_sheet" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/08fcaee5-e90a-4686-8d8b-dce632159911">

* **Above is a sheet to manage reservation groups by month. (Four groups were demonstrated using January and February as examples)**

---

<img width="800" alt="jan_calendar_sheet" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/3e2cf2b2-2540-4307-bd87-09bad6c8aebd">

<img width="800" alt="feb_calendar_sheet" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/089e28a0-20e8-4848-8975-512d36290b75">

* **The above is a sheet for managing the meal information of a reserved group by date. By arranging them by date key in this way, the number of meals to be prepared by the staff on a given day becomes clear, and it is also easier to reflect this in the shifts of employees who are lined up by date. (Four groups were demonstrated using January and February as examples)**

---

<img width="354" alt="shift" src="https://github.com/TakumiSenaha/Group-Reservation-Information-Management-System-for-Accommodation/assets/117294735/65d716f1-9998-49ac-845f-614bad6f5e98">

* **The above captures the group information posted to the employee's shift schedule, which is posted from the calendar. This allows the user to check shifts while keeping track of the group's status.(Four groups were demonstrated using January as examples)**

---


If a new group makes a reservation, perform step (1), and if the number of people in an existing group changes, perform step (4) only.



# Other fine features
