<html lang="hu">
  <head>
    <meta charset="utf-8" />
    <link href ="style.css" rel="stylesheet">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="replay.js"></script>
  </head>
  <body>
    <div class="page-title">Visszajátszás</div>
    <div class="section-container">
      <div class="section-element">
        <div class="section-input-title">Írj ide valamit</div>
        <input class="section-input-actual js-input-text-1" />
        <div class="section-input-title">Vagy ide</div>
        <input class="section-input-actual js-input-text-2" />
      </div>
    </div>
    <div class="section-container">
      <div class="section-element">
        <div class="section-input-title">Válaszd ki valamelyiket</div>
        <div class="radio-button-container">
          <div class="radio-button-element">
            <input type="radio" name="radio-button" id="radio-button-1" value="1" checked />
            <label class="radio-button-title" for="radio-button-1">Ezt</label>
          </div>
          <div class="radio-button-element">
            <input type="radio" name="radio-button" id="radio-button-2" value="2"/>
            <label class="radio-button-title" for="radio-button-2">Ezt</label>
          </div>
          <div class="radio-button-element">
            <input type="radio" name="radio-button" id="radio-button-3" value="3" />
            <label class="radio-button-title" for="radio-button-3">Vagy ezt</label>
          </div>
        </div>
      </div>
    </div>
    <div class="section-container">
      <div class="section-input-title">Egy jó nagy mező, hogy lehessen görgetni</div>
      <div class="section-scroll"></div>
    </div>
    <input class="js-all-action" type="hidden" name="all-action" value='<?php echo $_REQUEST["all-action"]; ?>'>
    <div class="section-container">
      <button class="section-button">Befejezés</button>
    </div>
    <div class="section-container">
      <a href="index.html">Újrakezdés</a>
    </div>
    <img class="cursor-img js-cursor-img" src="cursor.png">
  </body>
</html>
