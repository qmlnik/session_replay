$(document).ready(function(){
  let allAction = JSON.parse($(".js-all-action").val());
  let currentActionId = 1;
  let clickPuffer = [];
  let lastClick;
  let intervalMS = allAction.intervalMS, cursorTransitionSec;

  doAllAction();

  function doAllAction(){
    if(currentActionId == 1){
      cursorTransitionSec = intervalMS / 1000;
      $(".js-cursor-img").css({"transition": cursorTransitionSec + "s", "display": "block"});
    }

    clickPuffer = allAction[currentActionId]["click"];

    for(let i = 0; i < clickPuffer.length; i++){
      $("body").append("<div class='click-dot' style='left: " + clickPuffer[i][0] + "px; top: " + clickPuffer[i][1] + "px;'></div>");
    }

    $(".js-cursor-img").css({
      "left": allAction[currentActionId]["cursorPosition"][0] + "px",
      "top": allAction[currentActionId]["cursorPosition"][1] + "px"
    });

    window.scrollTo(0, allAction[currentActionId]["scroll"]);

    $(".js-input-text-1").val(allAction[currentActionId]["inputText1"]);
    $(".js-input-text-2").val(allAction[currentActionId]["inputText2"]);
    $("#radio-button-" + allAction[currentActionId]["radio"]).prop("checked", true);

    currentActionId++;

    if(currentActionId <= parseInt(allAction.lastActionId)){
      setTimeout(doAllAction, intervalMS);
    }
  }
});
