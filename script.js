/*
rank item mockup
<div class="rank_item">
  <h1>Star Wars: The Last Jedi</h1>
  <img src="images/The_Last_Jedi.jpg" />
  <div class="rank_item_ranking_container">
    <div class="rank_item_ranking_description">
      <p> Characters<br>
        Dialogue<br>
        Imagery<br>
        Plot/Plots<br>
        Popularity<br>
        </p>
    </div>
    */

function generateBody(type) {
  generateNavBar();
  generateExplanation(type);
  generateCells(type);
  generateFooter();
}

function generateExplanation(page) {
  document.getElementById('description').innerHTML = "<h1>" + explanations[page].description + "</h1>";
  var listHtml = "<ul>";
  explanations[page].categories.forEach(function(cat) {
    listHtml += "<li>" + cat + "</li>";
  });
  listHtml += "</ul>";
  document.getElementById('categories').innerHTML = listHtml;
}

function generateNavBar() {
  document.getElementById('navbar').innerHTML = "<nav class='navbar navbar-expand-lg navbar-light bg-light'> <a class='navbar-brand' href='/index.html'></a><button class='navbar-toggler' type='button' data-toggle='collapse' data-target='#navbarNavDropdown' aria-controls='navbarNavDropdown' aria-expanded='false' aria-label='Toggle navigation'><span class='navbar-toggler-icon'></span></button><div class='collapse navbar-collapse' id='navbarNavDropdown'><ul class='navbar-nav'><li class='nav-item active'><a class='nav-link' href='index.html'>Home <span class='sr-only'>(current)</span></a></li><li class='nav-item'><a class='nav-link' href='books.html'>Books</a></li><li class='nav-item'><a class='nav-link' href='movies.html'>Movies</a></li><li class='nav-item dropdown'><a class='nav-link dropdown-toggle' href='#' id='navbarDropdownMenuLink' role='button' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Music</a><div class='dropdown-menu' aria-labelledby='navbarDropdownMenuLink'><a class='dropdown-item' href='music.html'>Movies</a></div></li></ul></div></nav>";
}

function generateFooter() {
  document.getElementById("footer").innerHTML = "<p class='footer'> <a style='color:black;text-decoration: none;' href='https://github.com/jcwhitenc/StoryProject'>GitHub</a> </p>";
}

function generateCells(type) {
  var gridHTML = "";

  //this is the list of categories
  var header = rankCells[type][0];
  //for each item in the list
  rankCells[type].forEach(cell => {
    if (cell === header) {
      return;
    }
    //rank item
    var cellHTML = "<div class='rank_item'>";
    //title
    cellHTML += "<h1>" + cell['title'] + "</h1>";
    //image
    cellHTML += "<a class='imageWrapper'><img src='" + cell['imagePath'] + "' name = \"" + cell['title'] + "\"/></a>";
    //container
    cellHTML += "<div class='rank_item_ranking_container'>";
    //description
    cellHTML += "<div class='rank_item_ranking_description'><p>";
    //list of header
    header.forEach(cat => {
      cellHTML += cat + "<br>";
    });
    cellHTML += "</p></div>"; //rank_item_ranking_description
    cellHTML += "<div class='rank_item_ranking_number'><p>";
    header.forEach(cat => {
      cellHTML += cell[cat] + "<br>";
    });
    cellHTML += "</p></div>"; //rank_item_ranking_number
    cellHTML += "</div>"; //rank_item_ranking_container
    cellHTML += "</div>"; //rank_item
    gridHTML += cellHTML;
  });
  gridHTML += "</div>"; //rank_grid
  document.getElementById('rank_grid').innerHTML = gridHTML;

  //add the onClickListener to the images
  if (type != 'music') {
    var images = document.getElementsByClassName('imageWrapper');
    for (let i = 0; i < images.length; i++) {
      images[i].addEventListener('click', m => {
        //fetch the info from tastedrive
        //https://tastedive.com/api/similar?info=1&q=Thor: Ragnarok&k=YOUR API-KEY
        //Access Key 356126-StoriesS-7W8ACTUO
        var url = 'https://cors-anywhere.herokuapp.com/' + 'https://tastedive.com/api/similar?info=1&q=' + m.srcElement.name + '&k=356126-StoriesS-7W8ACTUO&limit=5';
        fetch(url)
          .then(function(response) {
            // console.log(response);
            return response.json();
          }).then(function(json) {
            console.log(json);
            document.getElementById("similar_list").innerHTML = "";

            //create the similiar_list
            var listHTML = "";
            var clickedItem = json.Similar.Info[0];
            listHTML += "<h1>" + m.srcElement.name + "</h1>";
            listHTML += "<div class='similar_header_box'>";
            //create the image to display.
            listHTML += m.target.outerHTML;
            //if there is no info, don't put it
            if (clickedItem.wTeaser != null) {
              listHTML += "<p>" + clickedItem.wTeaser + "</p>";
            }
            listHTML += "</div>"; //similar_header_box
            var results = json.Similar.Results;
            //create the 5 items in the similiar list
            if(results == null){
              document.getElementById("similar_list").innerHTML = listHTML;
              return;
            }
            listHTML += "<h2> Similar Titles </h2>";
            results.forEach((result, i) => {
              //check for results
              if(result == null){
                return;
              }
              listHTML += "<div class='similar_list_item'>";
              //for each item create the title
              listHTML += "<h3>" + result.Name + "</h3>";
              //create the paragraph
              listHTML += "<p>" + result.wTeaser;
              //create the wikipedia hyperlink
              listHTML += "<a href='" + result.wUrl + "' > Wikipedia Article </a> </p>";
              listHTML += "</div>";

            });


            document.getElementById("similar_list").innerHTML = listHTML;
          });
      });
    }
  }
}
