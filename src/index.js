import "./styles.css";

async function getData(content) {
  const url = "https://api.tvmaze.com/search/shows?q=";
  url.concat(content);
  console.log(url);
  const tvPromise = await fetch(url.concat(content));
  var tvJSON = await tvPromise.json();
  console.log(tvJSON);
  //var p = "";
  tvJSON.forEach((episode) => {
    const div1 = document.createElement("div");
    div1.setAttribute("class", "show-data");
    if (episode.show.image) {
      const img = document.createElement("img");
      img.setAttribute("src", episode.show.image.medium);
      div1.appendChild(img);
    }
    const div2 = document.createElement("div");
    div2.setAttribute("class", "show-info");
    const h1 = document.createElement("h1");

    h1.innerHTML = episode.show.name;
    //miten välttää tupla <p>
    const p = document.createElement("p");
    //episode.show.summary palauttaa <p> elementin
    //myös nav tehtävänä
    p.innerHTML = episode.show.summary;

    div1.appendChild(div2);
    div2.appendChild(h1);
    div2.appendChild(p);
    document.body.appendChild(div1);
  });

  /* 
  <div class="show-data"> 
    <img src="[show image medium]"> 
    <div class="show-info"> 
        <h1>[Show title]</h1> 
        <p>[Show summary]</p> 
    </div> 
</div> 
*/
}

const button = document.getElementById("submit-data");
button.addEventListener("click", function () {
  const content = document.getElementById("input-show").value;

  console.log(content);
  getData(content);
});
