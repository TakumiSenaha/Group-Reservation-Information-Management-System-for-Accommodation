function maintenance_send_msg() {
  let activespreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let ss = SpreadsheetApp.openById('Spread Sheet Key');
  let activesheet = SpreadsheetApp.getActiveSheet();
  const token = 'TOKEN';//チャットワークのトークン
  const room_id = 'ID';//送信したいルームのID
  
  let activeCell = activesheet.getActiveCell();
  let selectedRow = activeCell.getRow();
  let selectedColumn = activeCell.getColumn();
  //チャットワークに送信する文章の作成
  //[info][title]...[/title]...[/info]
  let today = new Date();
  let today_ = Utilities.formatDate( today, 'Asia/Tokyo', 'yyyy/MM/dd hh:mm:ss');
  let message = '[toall]\n';
  message += '[info][title]チェックイン日を追加[/title]';
  message += '[お知らせ]' + today_ + '\n';
  message += '[hr]団体名(シート名)：タカオネ\n';
  let check_in = activesheet.getRange('B1').getValue();
  check_in = Utilities.formatDate(check_in, 'JST', 'yyyy年M月d日(E)');
  message += 'チェックイン日   ：'+ check_in;
  message += '[hr]変更点[info]\n-';
  let changes = Browser.inputBox("変更点","変更点を入力してください(中断する場合は右上のxを押す)", Browser.Buttons.OK);
  message += changes;
  message += '[/info]\n';
  message += Browser.inputBox("補足説明","何か補足説明があれば...", Browser.Buttons.OK);
  message += '\n' + '[hr]変更者：';
  message += Browser.inputBox("変更者", Browser.Buttons.OK);
  message += '\n[/info]';
 //チャットワークに送信する
 var client = ChatWorkClient.factory({token:token})
 client.sendMessage({room_id: room_id, body: message});
 //update_from_each()
 Browser.msgBox("団体共有チャットにメッセージを送りました");
}


