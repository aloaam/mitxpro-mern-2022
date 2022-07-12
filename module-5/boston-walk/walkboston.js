function renderPosts(boston, container) {
  const people = boston.data;
  const len = boston.data.length;
  let html = "";
  let r = [];

  people.sort((a, b) => {
    if (Number(a[11]) < Number(b[11])) {
      return 1;
    } else if (Number(a[11]) > Number(b[11])) {
      return -1;
    } else {
      return 0;
    }
  });

  // let r = people.filter(p => {
  //   console.log(p[11])
  //   if (Number(p[11]) > 200_000) {
  //     console.log("yeeeeeeeeeeeeeeeeees")
  //   }
  //   return Number(p[11]) > 200_000;
  // })

  let resultArray = people.slice(0, 5);

  for (let i = 0; i < resultArray.length; i++) {
    html +=
      '<li class="d">' +
      "<h2>" +
      resultArray[i][8] +
      "</h2>" +
      "<h3>" +
      Number(resultArray[i][11]) +
      "</h3>";
  }

  container.innerHTML = '<ul id = "topSalaries"> ' + html + "</ul>";

  // TODO: add code to display the html variable inside a ul element with id="data"
  // Hint: you can use the container parameter's innerHTML property to insert Html tags
}

renderPosts(boston, document.getElementById("container"));
