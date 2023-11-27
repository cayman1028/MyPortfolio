'use strict';

{
function check() {

}

const timer = document.getElementById('timer');
const btn = document.getElementById('btn');

// 終了時刻を求める
btn.addEventListner('click', () => {
const endTime = new Date().getTime() +3 * 1000;

//残り時間を求める
setInterval(check);

});


}