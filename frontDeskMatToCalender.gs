function desk_material_to_g_cal_Transfer(year, month_num) {
  //console.time("time");
  let ss = SpreadsheetApp.openById('Spread Sheet Key');
  let activesheet = ss.getSheetByName("実行ボタン");
  //更新したい月:sheet_info[0][0],その月の西暦:sheet_info[0][1]
  //先月フロントシート名:sheet_info[1][1],今月団体カレンダー名:sheet_info[1][2]
  //先月団体カレンダー名:sheet_info[2][1],今月フロントシート名:sheet_info[2][2]
  let front_sheet = ss.getSheetByName(month_num+"月_フロントシート");
  let calendar_sheet = ss.getSheetByName(month_num+"月_団体カレンダー");
  //console.log(sheet_info);
  //console.log(calendar_sheet.getSheetName());

  const lastRow = front_sheet.getLastRow();
  let group_info = front_sheet.getRange(3,1,lastRow,5).getValues();
  //団体名, チェックイン日,　チェックアウト日,　人数, アレルギー
  //console.log(group_info);

  let i,j,k;
  let new_group_info = [];
  let check_in_month;
  let check_out_month;
  let check_in_date;
  let check_out_date;
  let num_of_group;
  for (i = 0; group_info[i][0]!=""; i++){
    check_in_month = group_info[i][1].getMonth();
    check_out_month = group_info[i][2].getMonth();
    check_in_date = group_info[i][1].getDate();
    check_out_date = group_info[i][2].getDate();
    if(check_in_month != check_out_month){
      check_out_date = (new Date(year,check_out_month, 0)).getDate();
      //チェックイン月の次の月初日の前の日
    }
    new_group_info.push(
      [group_info[i][0], true],
      [check_in_date, check_out_date],
      [group_info[i][3]+"人", "アレルギー"+group_info[i][4]]
    )
  }
  num_of_group = i;
  //console.log(new_group_info);
  const row_i = 3 * (calendar_sheet.getRange('D1').getValue())+ 5;
  calendar_sheet.getRange(row_i,2,lastRow*3,3).clearContent();
  calendar_sheet.getRange(row_i,2,num_of_group*3,2).setValues(new_group_info);
  //console.timeEnd("time");
}
