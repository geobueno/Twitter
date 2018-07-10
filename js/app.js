document.getElementById("input-box").addEventListener("keydown", keydownFunction);
document.getElementById("countChar").style.color = "#1da1f2";
document.getElementById("countChar").innerHTML = 140;

function keydownFunction() {
  var numChar = document.getElementById("input-box").value.length;
  if (numChar === 0 || numChar === "" || numChar > 140 || document.getElementById("input-box").value.match(/^[ \t\n\r\f\v]+$/)) {
    document.getElementById("tweetBtn").disabled = true;
    document.getElementById("tweetBtn").style.backgroundColor = "#a4d9f9";
  }
  else {
    document.getElementById("tweetBtn").disabled = false;
    document.getElementById("tweetBtn").style.backgroundColor = "#4AB3F4";
  }

  var count = new Number();
  count = 140 - numChar;
  document.getElementById("countChar").innerHTML = count;
  if (count >= 20) {
    document.getElementById("countChar").style.color = "#1da1f2";
  }
  if (count < 20 && count >= 10) {
    document.getElementById("countChar").style.color = "pink";
  }
  if (count < 10 && count >= 0) {
    document.getElementById("countChar").style.color = "orange";
  }
  if (count < 0) {
    document.getElementById("countChar").style.color = "red";
  }
}

function tweet() {
  var newDiv = document.createElement("SPAN");
  var newPost = document.createElement("ARTICLE");
  newPost.setAttribute('lang', 'pt');
  var newTime = document.createElement("ARTICLE");
  var tweetInput = document.createTextNode(document.getElementById("input-box").value);
  var tweetTime = document.createTextNode(moment().format('LT'));
  newPost.appendChild(tweetInput);
  newTime.appendChild(tweetTime);

  
  document.getElementsByTagName("SPAN");
  newDiv.appendChild(newPost);
  newDiv.appendChild(newTime);
  var tweetOutput = document.getElementById("output-box");
  tweetOutput.appendChild(newDiv);
  newDiv.insertBefore(newTime, newDiv.childNodes[0]);
  newDiv.insertBefore(newPost, newDiv.childNodes[0]);
  tweetOutput.insertBefore(newDiv, tweetOutput.childNodes[0]);
  

  newPost.style.width = "550px";
  newPost.style.marginLeft ="460px"
  newPost.style.borderBottom = "5px solid transparent";
  newPost.style.backgroundColor = "white";
  newTime.style.backgroundColor = "white";
  newTime.style.marginLeft = "460px"
  newPost.style.wordWrap = "break-word"

  document.getElementById("tweetForm").reset();
  document.getElementById("tweetBtn").disabled = true;
  document.getElementById("tweetBtn").style.backgroundColor = "#a4d9f9";
  document.getElementById("countChar").style.color = "#1da1f2";
  document.getElementById("countChar").innerHTML = 140;
}

function addEvent(type, el, callback) {
  if (window.addEventListener) {
    el.addEventListener(type, callback, false);
  } else if (window.attachEvent) {
    el.attachEvent("on" + type, callback);
  } else {
    el["on" + type] = callback;
  }
}

function resizeTextfield(el) {
  var timer;

  function trigger() {
    if (!el) { return ; }
    el.style.height = "auto";
    var height = el.scrollHeight;
    el.style.height = height + "px";
}
  function exec() {
    if (timer) {
      clearTimeout(timer);
    }
  timer = setTimeout(trigger, 10);
  }

addEvent("keyup", el, exec);
addEvent("input", el, exec);
}

window.onload = function () {
  var els = document.getElementsByClassName("increase");
  for (var i = els.length - 1; i >= 0; i--) {
    resizeTextfield(els[i]);
  }
}
