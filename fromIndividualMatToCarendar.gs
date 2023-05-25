function i_g_mat_to_g_cal_Transfer(year, month_num) {
  //console.time("time");
  //使用するスプレッドシートを指定
  let ss = SpreadsheetApp.openById('Spread Sheet Key');
  let activesheet = ss.getSheetByName("実行ボタン");
  //更新したい月:sheet_info[0][0],その月の西暦:sheet_info[0][1]
  //先月フロントシート名:sheet_info[1][1],今月団体カレンダー名:sheet_info[1][2]
  //先月団体カレンダー名:sheet_info[2][1],今月フロントシート名:sheet_info[2][2]
  let calendar_sheet = ss.getSheetByName(month_num+"月_団体カレンダー");
  //console.log(sheet_info);
  //console.log(calendar_sheet.getSheetName());
  
  const row_i = 3 * (calendar_sheet.getRange('D1').getValue()) + 5;
  const lastRow = calendar_sheet.getLastRow();
  //console.log(lastRow);
    //行数を所得

  //更新する月の団体名を取得
  let group_list = calendar_sheet.getRange(row_i,2,lastRow,2).getValues();
  //console.log(group_list);

  //------各団体の食事情報を団体カレンダーに移動させるための変数宣言-----------
  let i,j,k;
  let check_in_date;
  let check_out_date;
  let num_of_days_to_stay;//滞在日数（3日～5日なら，345→三日）
  let group_name;
  let individual_sheet;
  let dietary_info = [];
  let new_dietary_info_1 = [];
  let new_dietary_info_2 = [];
  let new_dietary_info = [];
  //------------------------------------------------------------------

  //------団体名リストの行を動かし，その団体のシートを探索し------------------
  //------食事情報を配列で取得した後，団体カレンダーに張り付けるための配列------
  //------（2行×(滞在日数×朝昼夕)）に変換---------------------------------
  for (i = 0; group_list[i][0] != ""; i+=3){
    //個別資料にアクセスし，配列として食事情報を取得し，カレンダーに合う形でフォーマット
    if(ss.getSheetByName(group_list[i][0]) == null){
      continue;
    }
    individual_sheet = ss.getSheetByName(group_list[i][0]);
    num_of_days_to_stay = group_list[i+1][1] - group_list[i+1][0] + 1;
    dietary_info = individual_sheet.getRange(18, 2, num_of_days_to_stay,12).getValues();
    //初期化
    new_dietary_info_1 = [];
    new_dietary_info_2 = [];
    new_dietary_info = [];
    //console.log(dietary_info);
    //滞在日数だけ行を動かす
    for(j = 0; j < num_of_days_to_stay; j++){
      //朝食，昼食，夕食の情報がそれぞれ4列並んでいる
      for(k = 0; k < 12; k+=4){
        if(dietary_info[j][k] == ""){
          new_dietary_info_1.push("");
          new_dietary_info_2.push("");
        }
        else{
          new_dietary_info_1.push(dietary_info[j][k]);
          new_dietary_info_2.push(dietary_info[j][k+1] + "@" + dietary_info[j][k+2] + "("+dietary_info[j][k+3] + ")");
        }
      }
    }
    new_dietary_info.push(new_dietary_info_1,new_dietary_info_2);
    //console.log(new_dietary_info_1);
    //console.log(new_dietary_info_2);
    calendar_sheet.getRange(row_i+1 + i, 5, 2, 93).clearContent();
    calendar_sheet.getRange(row_i+1 + i, group_list[i+1][0]*3 + 2, 2, num_of_days_to_stay*3).setValues(new_dietary_info);
  }
  //------------------------------------------------------------------

  //console.timeEnd("time");
}