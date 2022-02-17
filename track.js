$(document).ready(function(){
  let allAction = {};
  let currentActionId = 1;
  let clickPuffer = [];
  let cursorX = 0, cursorY = 0;
  const intervalMS = 200;

  $("body").on("mousemove", function(event){
    cursorX = event.pageX;
    cursorY = event.pageY;
  });

  $(document).on("click", function(event){
    let clickXY =[];
    clickXY.push(event.clientX);
    clickXY.push($("body")[0].scrollTop + event.clientY);
    clickPuffer.push(clickXY);
  });

  setInterval(function(){
    let currentAction = {};
    let copyClickPuffer = [];
    for(let i = 0; i < clickPuffer.length; i++){
      let copyClickXY = [];
      copyClickXY.push(clickPuffer[i][0]);
      copyClickXY.push(clickPuffer[i][1]);
      copyClickPuffer.push(copyClickXY);
    }
    currentAction.click = copyClickPuffer;
    clickPuffer = [];

    currentAction.cursorPosition = [cursorX, cursorY];

    currentAction.scroll = $("body")[0].scrollTop;

    currentAction.inputText1 = $(".js-input-text-1").val();
    currentAction.inputText2 = $(".js-input-text-2").val();

    currentAction.radio = $("input[name='radio-button']:checked").val();

    allAction[currentActionId] = currentAction;
    currentActionId++;
  }, intervalMS);

  $("form").on("submit", function(){
    allAction.lastActionId = currentActionId - 1;
    allAction.intervalMS = intervalMS;
    $(".js-all-action").val(JSON.stringify(allAction));
    return true;
  });
});
