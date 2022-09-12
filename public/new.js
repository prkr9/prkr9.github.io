fetch("news.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    apppendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function apppendData(data) {
  var mainContainer = document.getElementById("news");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("li");
    
    div.innerHTML =
      "<a href=https://imadejptr.glitch.me/" +
      data[i].url +
      "?sys=" +
      data[i].sys +
      "&g=" +
      data[i].g +
      "&id=" +
      data[i].id +
      ' class="box"><img src="https://cdn.glitch.me/e1a1b20d-32e3-4f36-bb67-ce78664ba8bd/' +
      data[i].id +
      '.jpg" data-loaded="true"><div class="badge">' +
      data[i].badge +
      '</div><div class="plays-span"><span id="' +
      data[i].id +
      '-display">0</span><span> plays</span></div><span class="box-title">' +
      data[i].name +
      "</span></a>";
    mainContainer.appendChild(div);
    const count02 = document.getElementById(data[i].id + "-display");

    displayVisitCount02();

    function displayVisitCount02() {
      fetch("https://api.countapi.xyz/get/00" + data[i].id + "/imadejptr/")
        .then((res) => res.json())
        .then((res) => {
          count02.innerHTML = res.value;
        });
    }
  }
}
