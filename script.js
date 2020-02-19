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
    cellHTML += "<a><img src='" + cell['imagePath'] + "'/></a>";
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
    cellHTML += "</div>";//rank_item
    gridHTML += cellHTML;
  });
  gridHTML += "</div>"; //rank_grid
  document.getElementById('rank_grid').innerHTML = gridHTML;

  //add the onClickListener to the images
}
