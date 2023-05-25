function calendar_to_shift(year, month_num) {
  //console.time("time");
  let ss = SpreadsheetApp.openById('Spread Sheet Key');
  let shift = SpreadsheetApp.openById('Spread Sheet Key (shift sheet)');

  let activesheet = ss.getSheetByName("実行ボタン");
  //更新したい月:sheet_info[0][0],その月の西暦:sheet_info[0][1]
  //先月フロントシート名:sheet_info[1][1],今月団体カレンダー名:sheet_info[1][2]
  //先月団体カレンダー名:sheet_info[2][1],今月フロントシート名:sheet_info[2][2]
  let calendar_sheet = ss.getSheetByName(month_num + "月_団体カレンダー");
  let shift_name = month_num + "月シフト";
  if(shift.getSheetByName(shift_name) == null){
    return;
  }
  let shiftsheet = shift.getSheetByName(shift_name);
  const lastRow = calendar_sheet.getLastRow();

  let i, j, k;
  let g_name = "";
  let morning = "朝食\n";
  let lunch = "昼食\n";
  let dinner = "夕食\n";
  let dietary_info = "";
  let g_name_array = [];
  let dietary_info_array = [];
  let shift_array = [];
  let data = calendar_sheet.getRange(5, 2, lastRow, 96).getValues();
  //団体名,true,    "",朝食,昼食,夕食
  //in   ,out     ,"",人数,人数,人数
  //人数  ,アレルギー,"",場所など,場所など,場所など
  for (i = 3; i < 95; i += 3) {
    g_name = "";
    morning = "朝食\n"; lunch = "昼食\n"; dinner = "夕食\n";
    for (j = 0; data[j][0] != ""; j += 3) {
      if (data[j][i] == true) {
        g_name += "・" + data[j][0];
        g_name += data[j + 2][2] + "\n";
        morning += "・" + data[j + 1][i] + "_" + data[j + 2][i] + "\n";
        lunch += "・" + data[j + 1][i + 1] + "_" + data[j + 2][i + 1] + "\n";
        dinner += "・" + data[j + 1][i + 2] + "_" + data[j + 2][i + 2] + "\n";
      }
    }
    dietary_info = morning + lunch + dinner;
    g_name_array.push(g_name);
    dietary_info_array.push(dietary_info);
  }
  shift_array.push(g_name_array, dietary_info_array);
  shiftsheet.getRange(8, 2, 2, 31).setValues(shift_array);
  //console.log(shift_array);
  //console.timeEnd("time");
}
