var incoming = parent.counter;


const countEl = document.getElementById('count');

displayVisitCount();

function displayVisitCount() {
	fetch('https://api.countapi.xyz/update/00' + incoming + '/imadejptr/?amount=1')
	.then(res => res.json())
	.then(res => {
		countEl.innerHTML = res.value;
	})
};

const count1 = document.getElementById(incoming +'-display');

displayVisitCount1();

function displayVisitCount1() {
	fetch('https://api.countapi.xyz/get/00'+ incoming +'/imadejptr/')
	.then(res => res.json())
	.then(res => {
		count1.innerHTML = res.value;
	})
};



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
    var mainContainer = document.getElementById("gr");
    var ix, ixLen, rand;
    for(ix = 42, ixLen = 62; ix < ixLen; ix++){
      rand = Math.ceil(Math.random() * ixLen) - 1;
      var div = document.createElement("li");
      div.innerHTML += "<a href=https://imadejptr.glitch.me/" +
      data[rand].url +
      "?sys=" +
      data[rand].sys +
      "&g=" +
      data[rand].g +
      "&id=" +
      data[rand].id +
      ' class="box"><img src="https://cdn.glitch.me/e1a1b20d-32e3-4f36-bb67-ce78664ba8bd/' +
      data[rand].id +
      '.jpg" data-loaded="true"><div class="badge">' +
      data[rand].badge +
      '</div><div class="plays-span"><span id="' +
      data[rand].id +
      '-display"></span><span> plays</span></div><span class="box-title">' +
      data[rand].name +
      "</span></a>";
      mainContainer.appendChild(div);
      const count2 = document.getElementById(data[rand].id + "-display");

      displayVisitCount2();

      function displayVisitCount2() {
        fetch("https://api.countapi.xyz/get/00" + data[rand].id + "/imadejptr/")
          .then((res) => res.json())
          .then((res) => {
            count2.innerHTML = res.value;
          });
      }
      data.splice(rand, 1);
      ixLen--;
    }
}

