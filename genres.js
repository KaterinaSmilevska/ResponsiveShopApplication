function loadGenres(){
    let tmpl = $.templates("#genreTemplate");
    tmpl.link("#genreContainer", getGenres());
}

function getGenres(){
    let genres = [
        {genreName: "All albums", genreCode: "", genreIcon: "fas fa-th", selected: true},
        {genreName: "Heavy metal", genreCode: "metal", genreIcon: "fas fa-drum", selected: false},
        {genreName: "Hip-hop", genreCode: "hip-hop", genreIcon: "fas fa-record-vinyl", selected: false},
        {genreName: "Pop", genreCode: "pop", genreIcon: "fas fa-music", selected: false},
        {genreName: "Rock", genreCode: "rock", genreIcon: "fas fa-guitar", selected: false}
    ];
    return genres;
}