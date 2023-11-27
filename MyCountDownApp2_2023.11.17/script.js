/* body要素のスタイル設定 */
body {
  display: flex; /* flexboxを使用し、子要素を横並びに配置 */
  flex-direction: column; /* 子要素を縦に配置 */
  align-items: center; /* 子要素を中央に配置 */
  justify-content: center; /* 子要素を中央に配置 */
  height: 100vh; /* 画面の高さいっぱいにbody要素を広げる */
  margin: 0; /* ページのマージンを0に設定 */
}

/* タイマーとボタンを囲むコンテナのスタイル設定 */
#timer-container {
  border: 2px solid #333; /* 枠のスタイルを設定 */
  padding: 20px; /* 内側の余白を設定 */
  border-radius: 30px; /* 枠の角を丸める */
  text-align: center; /* 子要素を中央に配置 */
  margin-top: 20px; /* 画面真ん中より上に配置 */
}

/* タイマーのスタイル設定 */
#timer {
  font-size: 36px; /* フォントサイズを設定 */
  font-weight: bold; /* 太字に設定 */
  margin-bottom: 20px; /* 下部のマージンを設定 */
}

/* スタートボタンのスタイル設定 */
#startBtn {
  padding: 10px; /* パディングを設定 */
  font-size: 16px; /* フォントサイズを設定 */
  cursor: pointer; /* ホバー時にポインターを表示 */
}
