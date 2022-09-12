fetch("gs.json")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    appendData(data);
  })
  .catch(function (err) {
    console.log("error: " + err);
  });

function appendData(data) {
  var mainContainer = document.getElementById("gs");
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
    const count01 = document.getElementById(data[i].id + "-display");

    displayVisitCount01();

    function displayVisitCount01() {
      fetch("https://api.countapi.xyz/get/00" + data[i].id + "/imadejptr/")
        .then((res) => res.json())
        .then((res) => {
          count01.innerHTML = res.value;
        });
    }
  }
}
