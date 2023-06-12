//active link

$(document).on('click', '.header .right ul li a', function (){
    $(this).addClass('current').siblings().removeClass('current')
})

$(document).on('click', '#links li', function (){
    $(this).addClass('current').siblings().removeClass('current')
})

$(document).on('click', '.icons', function (){
    $(this).addClass('activeLink').siblings('div').removeClass('activeLink')
})

function activeGenre(){
    let el = document.getElementById("genre_");
    el.classList.add('activeLink');
}

//search button
function searchButton(){
    let input = document.getElementById("input");
    if(input.style.display === "none"){
        input.style.display = "inline-block";
    }
    else{
        input.style.display = "none";
    }
}

function hamburgerMenu(){
    let ham = document.getElementById('menu');
    ham.classList.toggle('nav-active');
}

//popup
function toggle(){
    let blur = document.getElementById('login');
    blur.classList.toggle('show');
    let popup = document.getElementById('popup');
    popup.classList.toggle('show');
}

//create account
function createAccount(){
    let b = document.getElementById('popup');
    b.classList.toggle('display');
    let acc = document.getElementById('createAccount');
    acc.classList.toggle('display');
}

//show password
function showPassword(){
    let x = document.getElementById("pwd");
    if(x.type === "password"){
        x.type = "text";
    } else{
        x.type = "password";
    }
}

//to top
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function displayLetters(){
    let el = document.getElementById("start");
    let aside = document.getElementById("artistLinks");
    if(el.style.display === "none"){
        el.style.display = "block";
        aside.style.height = "950px";
    }
    else{
        el.style.display = "none";
        aside.style.height = "250px";
    }
}

function getRecentlyReleased(){
    let artists = getArtists();
    let allAlbums = artists.map(a => a.albums).flat();
    let recAlbums = allAlbums.filter(a => a.year >= 2020);
    let newAlbums = [], index;

    while (newAlbums.length < 5){
        index = Math.floor(Math.random() * recAlbums.length);
        if(newAlbums.includes(recAlbums[index])){
            continue;
        }
        else{
            newAlbums.push(recAlbums[index]);
        }
    }

    newAlbums.sort((a, b) => (a.year > b.year) ? 1: -1);
    newAlbums.reverse();

    return newAlbums;
}

function showRecentlyReleased(){
    let tmpl = $.templates("#recentlyReleasedTemplate");
    tmpl.link("#recentlyReleasedContainer", getRecentlyReleased());
}

function getRecommendedArtists(){
    let artists = getArtists();
    let index, recommended = [];

    while (recommended.length < 5){
        index = Math.floor(Math.random() * artists.length);
        if(recommended.includes(artists[index])){
            continue;
        }
        else{
            recommended.push(artists[index]);
        }
    }

    return recommended;
}

function showRecommendedArtists(){
    let tmpl = $.templates("#recommendedTemplate");
    tmpl.link("#recommendedContainer", getRecommendedArtists());
}

function topAlbums(){
    let artists = getArtists();
    let allAlbums = artists.map(a => a.albums).flat();
    let topAlbums = allAlbums.filter(a => a.price >= 19);


    let tmpl = $.templates("#topAlbumsTemplate");
    tmpl.link("#topAlbumsContainer", topAlbums);
}

function GetTopSingles(){
    let artists = getArtists();

    for(let i = 0; i < artists.length; i++){
        for(let j = 0; j < artists[i].albums.length; j++){
            for(let k = 0; k < artists[i].albums[j].tracks.length; k++)
            artists[i].albums[j].tracks[k].songBy = artists[i].name;
        }

    }
    let allAlbums = artists.map(a => a.albums).flat();
    let allSingles = allAlbums.map(a => a.tracks).flat();

    let index, topSingles = [], i = 1;

    while (topSingles.length < 10){
        index = Math.floor(Math.random() * allSingles.length);
        if(topSingles.includes(allSingles[index])){
            continue;
        }
        else{
            allSingles[index].number = i;
            topSingles.push(allSingles[index]);
            i++;
        }
    }

    return topSingles;
}

function showTopSingles(){
    let tmpl = $.templates("#topSinglesTemplate");
    tmpl.link("#topSinglesContainer", GetTopSingles());
}

//show and hide text
function displayDiv1(artistCode){
    let box1 = document.getElementById("artistDescription_" + artistCode);
    if(box1.style.display === "none")
    {
        box1.style.display = "flex";
        box1.style.flexDirection = "column";
    }
    else
    {
        box1.style.display = "none";
    }
}
function displayDiv2(artistCode){
    let box1 = document.getElementById("displayAlbums_" + artistCode);
    let box2 = document.getElementById("more_" + artistCode);
    let box3 = document.getElementById("less_" + artistCode);
    if(box1.style.display === "none")
    {
        box1.style.display = "flex";
        box1.style.paddingTop = "15px";
        box1.style.paddingBottom = "15px";
        box1.style.justifyContent = "center";
        box1.style.flexWrap = "wrap";
        box2.style.display = "none";
        box3.style.display = "block";
    }
    else
    {
        box1.style.display = "none";
        box3.style.display = "none";
        box2.style.display = "block";
    }
}


function DisplayByGenre(genre){
    let albumsByGenre = filterByGenre(genre);
    let tmpl = $.templates("#albumsTemplate");
    tmpl.link("#albumsContainer", albumsByGenre);

    let box = document.getElementById("albumsContainer");
    if(box.style.display === "none"){
        box.style.display = "flex";
        box.style.paddingTop = "15px";
        box.style.paddingBottom = "15px";
        box.style.justifyContent = "center";
        box.style.flexWrap = "wrap";
    }
}

function filterArtists(letter){
    let artists = getArtists();
    let select = artists.filter(a => a.name.startsWith(letter));
    let box = document.getElementById("noArtist");
    if(select.length === 0){
        box.style.display = "block";
    }
    else{
        box.style.display = "none";
    }
    return select;
}

function showArtists(letter){
    let tmpl = $.templates("#artistsTemplate");
    tmpl.link("#artistContainer", filterArtists(letter));
}

//get value from URL
function getAlbumId(){
    let albumId = new URLSearchParams(window.location.search).get('albumCode');
    return albumId;
}
function getArtistId(){
    let artistId = new URLSearchParams(window.location.search).get('artistCode');
    return artistId;
}

function findArtist(){
    let id = getArtistId();
    let artists = getArtists();
    let select = artists.filter(a => a.code === id)[0];

    return select;
}

function filterAlbums(){
    let artist = findArtist();
    let id = getAlbumId();
    let select = artist.albums.filter(a => a.albumCode === id)[0];

    select.artistName = findArtist().name;

    return select;
}

function showArtist(){
    let artist = findArtist();
    document.title.innerHTML = artist.name;
    document.getElementById("artistName").innerText = artist.name;

    let tmpl = $.templates("#ArtistTemplate");
    tmpl.link("#ArtistContainer", artist);
}

function showAlbum(){
    let album = filterAlbums();
    document.title.innerHTML = album.albumName;
    document.getElementById("albumTitle").innerText = album.albumName;

    let tmpl = $.templates("#albumTemplate");
    tmpl.link("#albumContainer", album);
}

function showSimilarAlbums() {
   let artist = findArtist();
   let album = filterAlbums();
   let similar = artist.albums.filter(a => a.albumName !== album.albumName);

   let tmpl = $.templates("#similarTemplate");
   tmpl.link("#similarContainer", similar);
}

function showSimilarArtists() {
    let artists = getArtists();
    let artist = findArtist();
    let similar = artists.filter(a => a.genres.toUpperCase().indexOf(artist.genres.toUpperCase()) > -1 && (a.name !== artist.name));

    let tmpl = $.templates("#similarTemplate");
    tmpl.link("#similarContainer", similar);
}

function Expand(artistCode){
    $(document).ready(function(){
        $("#more_" + artistCode).click(function(){
            $("#displayAlbums_" + artistCode).slideDown();
        });
        $(document).ready(function(){
            $("#less_" + artistCode).click(function(){
                $("#displayAlbums_" + artistCode).slideUp();
            });
        });
    });
}

function formatNumber(number){
    return parseFloat(number).toFixed(2);
}

function filterByGenre(genre){
    let artists = getArtists();
    let allAlbums = artists.map(a => a.albums).flat();

    if(genre === ""){
        return allAlbums.sort((a, b) => (a.albumName > b.albumName) ? 1: -1);
    }
    else{

        let albumsByGenre = allAlbums.filter(a => a.genre.toUpperCase().indexOf(genre.toUpperCase()) > -1);

        albumsByGenre.sort((a, b) => (a.albumName > b.albumName) ? 1: -1);

        return albumsByGenre;
    }
}

function SearchByArtistName() {
    let input, filter;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    let artists = getArtists();
    let searchResult = artists.filter(a => a.name.toUpperCase().indexOf(filter) > -1);

    let box = document.getElementById("noArtist");
    if(filter.length === -1){
        box.style.display = "flex";
    }
    else{
        box.style.display = "none";
    }

    let tmpl = $.templates("#artistsTemplate");
    tmpl.link("#artistContainer", searchResult);
}

function SearchByAlbumName() {
    let input, filter;
    input = document.getElementById("input");
    filter = input.value.toUpperCase();
    let artists = getArtists();
    let allAlbums = artists.map(a => a.albums).flat();
    let searchResult = allAlbums.filter(a => a.albumName.toUpperCase().indexOf(filter) >-1);

    let tmpl = $.templates("#albumsTemplate");
    tmpl.link("#albumsContainer", searchResult);
}