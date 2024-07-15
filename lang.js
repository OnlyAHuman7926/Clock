window.l = {
  "zh-CN": {
    "enter-start-time": "请输入考试开始时间",
    "enter-end-time": "请输入考试结束时间",
    "hour": "时",
    "minute": "分",
    "submit": "提交",
    "test-clock-title": "考试时钟",
    "time-now": "现在时间：{0}",
    "time-remaining": "剩余时间：{0}",
    "test-not-start": "考试未开始",
    "test-end": "考试已结束！",
    "start-time": "开始：{0}",
    "end-time": "结束：{0}",
    "new-site": "请收藏我们的新网址："
  },
  "zh-TW": {
    "enter-start-time": "請輸入考試開始時間",
    "enter-end-time": "請輸入考試結束時間",
    "hour": "時",
    "minute": "分",
    "submit": "提交",
    "test-clock-title": "考試時鐘",
    "time-now": "現在時間：{0}",
    "time-remaining": "剩餘時間：{0}",
    "test-not-start": "考試未開始",
    "test-end": "考試已結束！",
    "start-time": "開始：{0}",
    "end-time": "結束：{0}"
  },
  "en": {
    "enter-start-time": "Please enter the start time of the test",
    "enter-end-time": "Please enter the end time of the test",
    "hour": "hour",
    "minute": "minute",
    "submit": "Submit",
    "test-clock-title": "Test Clock",
    "time-now": "Now time: {0}",
    "time-remaining": "Remaining time: {0}",
    "test-not-start": "Test has not started",
    "test-end": "Test has ended!",
    "start-time": "Start time: {0}",
    "end-time": "End time: {0}",
    "new-site": "Please save our new website: "
  },
  "es": {
    "enter-start-time": "Por favor ingrese el tiempo de inicio del examen",
    "enter-end-time": "Por favor ingrese el tiempo de finalización del examen",
    "hour": "hora",
    "minute": "minuto",
    "submit": "Enviar",
    "test-clock-title": "Reloj de examen",
    "time-now": "Hora actual: {0}",
    "time-remaining": "Tiempo restante: {0}",
    "test-not-start": "El examen no ha comenzado",
    "test-end": "El examen ha finalizado!",
    "start-time": "Hora de inicio: {0}",
    "end-time": "Hora de finalización: {0}"
  },
  "fr": {
    "enter-start-time": "Veuillez entrer l'heure de début de l'examen",
    "enter-end-time": "Veuillez entrer l'heure de fin de l'examen",
    "hour": "heure",
    "minute": "minute",
    "submit": "Soumettre",
    "test-clock-title": "Horloge d'examen",
    "time-now": "Heure actuelle: {0}",
    "time-remaining": "Temps restant: {0}",
    "test-not-start": "L'examen n'a pas encore commencé",
    "test-end": "L'examen a terminé!",
    "start-time": "Heure de début: {0}",
    "end-time": "Heure de fin: {0}"
  },
  "ja": {
    "enter-start-time": "テストの開始時間を入力してください",
    "enter-end-time": "テストの終了時間を入力してください",
    "hour": "時間",
    "minute": "分",
    "submit": "送信",
    "test-clock-title": "テスト時計",
    "time-now": "現在時刻：{0}",
    "time-remaining": "残り時間：{0}",
    "test-not-start": "テストはまだ開始されていません",
    "test-end": "テストは終了しました！",
    "start-time": "開始時刻：{0}",
    "end-time": "終了時刻：{0}"
  },
  "de": {
    "enter-start-time": "Bitte geben Sie die Startzeit des Tests ein",
    "enter-end-time": "Bitte geben Sie die Endzeit des Tests ein",
    "hour": "Stunde",
    "minute": "Minute",
    "submit": "Absenden",
    "test-clock-title": "Testuhr",
    "time-now": "Aktuelle Uhrzeit: {0}",
    "time-remaining": "Verbleibende Zeit: {0}",
    "test-not-start": "Test hat noch nicht gestartet",
    "test-end": "Test hat beendet!",
    "start-time": "Startzeit: {0}",
    "end-time": "Endzeit: {0}"
  },
  "it": {
    "enter-start-time": "Inserisci l'ora di inizio del test",
    "enter-end-time": "Inserisci l'ora di fine del test",
    "hour": "ora",
    "minute": "minuto",
    "submit": "Invia",
    "test-clock-title": "Orologio del test",
    "time-now": "Ora attuale: {0}",
    "time-remaining": "Tempo rimanente: {0}",
    "test-not-start": "Il test non è ancora iniziato",
    "test-end": "Il test è terminato!",
    "start-time": "Ora di inizio: {0}",
    "end-time": "Ora di fine: {0}"
  },
  "ko": {
    "enter-start-time": "시험 시작 시간을 입력하세요",
    "enter-end-time": "시험 종료 시간을 입력하세요",
    "hour": "시간",
    "minute": "분",
    "submit": "제출",
    "test-clock-title": "시험 시계",
    "time-now": "현재 시간: {0}",
    "time-remaining": "남은 시간: {0}",
    "test-not-start": "시험이 아직 시작되지 않았습니다",
    "test-end": "시험이 종료되었습니다!",
    "start-time": "시작 시간: {0}",
    "end-time": "종료 시간: {0}"
  }
}
// Generated by DingTalk AI
if (!String.prototype.format) {
  String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };
}
let navLang = navigator.language;
console.log(navLang);
window.sl = l[navLang] || l["en"];

document.getElementsByTagName('title')[0].innerHTML = window.sl["test-clock-title"];