function loadArtists(){
    document.getElementById("noArtist").style.display = "none";
    let tmpl = $.templates("#artistsTemplate");
    tmpl.link("#artistContainer", getArtists());
}

function loadArtistsZA(){
    document.getElementById("noArtist").style.display = "none";
    let tmpl = $.templates("#artistsTemplate");
    tmpl.link("#artistContainer", getArtists().reverse());
}

function getAlbums(){
    let artists = getArtists();
    let albums = artists.map(a => a.albums).flat().sort((a, b) => (a.albumName > b.albumName) ? 1: -1);
    return albums;
}

function loadAlbums(){
    let tmpl = $.templates("#albumsTemplate");
    tmpl.link("#albumsContainer", getAlbums());
}

function getArtists(){
    let artist = [
        {picture: "images/artists/ACDC.jpg", code: "ACDC", name: "AC/DC", genres: "rock", description: `AC/DC are an Australian rock band formed in Sydney in 1973 by Scottish-born brothers Malcolm and Angus Young.
               Their music has been variously described as hard rock, blues rock, and heavy metal, but the band themselves call it simply "rock and roll".
               AC/DC underwent several line-up changes before releasing their first album, 1975's High Voltage.
               Membership subsequently stabilised around the Young brothers, singer Bon Scott, drummer Phil Rudd, and bassist Mark Evans.`,
            albums: [
                {albumName: "Power Up", cover: "images/acdcAlbums/PowerUp.jpg", numTracks: 12, albumCode: "PowerUp", year: 2020, genre: "Hard rock / Rock and roll", duration: "41 minutes", price: formatNumber(10.79),
                tracks: [
                        {trackCode: 1, trackName: "Realize"},
                        {trackCode: 2, trackName: "Rejection"},
                        {trackCode: 3, trackName: "Shot In The Dark"},
                        {trackCode: 4, trackName: "Through The Mists of Time"},
                        {trackCode: 5, trackName: "Kick You When You're Down"},
                        {trackCode: 6, trackName: "Witch's Spell"},
                        {trackCode: 7, trackName: "Demon Fire"},
                        {trackCode: 8, trackName: "Wild Reputation"},
                        {trackCode: 9, trackName: "No Man's Land"},
                        {trackCode: 10, trackName: "Systems Down"},
                        {trackCode: 11, trackName: "Money Shot"},
                        {trackCode: 12, trackName: "Code Red"}
                    ]
                },
                {albumName: "Rock Or Bust", cover: "images/acdcAlbums/RockOrBust.jpg", numTracks: 11, albumCode: "RockOrBust", year: 2014, genre: "Hard rock", duration: "34 minutes", price: formatNumber(10.75),
                tracks: [
                        {trackCode: 1, trackName: "Rock or Bust"},
                        {trackCode: 2, trackName: "Play Ball"},
                        {trackCode: 3, trackName: "Rock the Blues Away"},
                        {trackCode: 4, trackName: "Miss Adventure"},
                        {trackCode: 5, trackName: "Dogs of War"},
                        {trackCode: 6, trackName: "Got Some Rock & Roll Thunder"},
                        {trackCode: 7, trackName: "Hard Times"},
                        {trackCode: 8, trackName: "Baptism By Fire"},
                        {trackCode: 9, trackName: "Rock the House"},
                        {trackCode: 10, trackName: "Sweet Candy"},
                        {trackCode: 11, trackName: "Emission Control"}
                    ]
                },
                {albumName: "Iron Man 2", cover: "images/acdcAlbums/IronMan2.jpg", numTracks: 15, albumCode: "IronMan2", year: 2010, genre: "Hard rock / Rock and roll / Blues rock", duration: "1 hour 2 minutes", price: formatNumber(9.99),
                tracks: [
                    {trackCode: 1, trackName: "Shoot to Thrill"},
                    {trackCode: 2, trackName: "Rock 'N' Roll Damnation"},
                    {trackCode: 3, trackName: "Guns for Hire"},
                    {trackCode: 4, trackName: "Cold Hearted Man"},
                    {trackCode: 5, trackName: "Back In Black"},
                    {trackCode: 6, trackName: "Thunderstruck"},
                    {trackCode: 7, trackName: "If You Want Blood (You've Got It)"},
                    {trackCode: 8, trackName: "Evil Walks"},
                    {trackCode: 9, trackName: "T.N.T."},
                    {trackCode: 10, trackName: "Hell Ain't a Bad Place to Be"},
                    {trackCode: 11, trackName: "Have a Drink on Me"},
                    {trackCode: 12, trackName: "The Razors Edge"},
                    {trackCode: 13, trackName: "Let There Be Rock"},
                    {trackCode: 14, trackName: "War Machine"},
                    {trackCode: 15, trackName: "Highway to Hell"}
                    ]
                },
                {albumName: "The Razors Edge", cover: "images/acdcAlbums/TheRazorsEdge.jpg", numTracks: 12, albumCode: "TheRazorsEdge", year: 1990, genre: "Hard rock", duration: "46 minutes", price: formatNumber(7.85),
                tracks: [
                    {trackCode: 1, trackName: "Thunderstruck"},
                    {trackCode: 2, trackName: "Fire Your Guns"},
                    {trackCode: 3, trackName: "Moneytalks"},
                    {trackCode: 4, trackName: "The Razors Edge"},
                    {trackCode: 5, trackName: "Mistress for Christmas"},
                    {trackCode: 6, trackName: "Rock Your Heart Out"},
                    {trackCode: 7, trackName: "Are You Ready"},
                    {trackCode: 8, trackName: "Got You by the Balls"},
                    {trackCode: 9, trackName: "Shot of Love"},
                    {trackCode: 10, trackName: "Let's Make It"},
                    {trackCode: 11, trackName: "Goodbye and Good Riddance to Bad Luck"},
                    {trackCode: 12, trackName: "If You Dare"}

                    ]
                },
                {albumName: "Who Made Who", cover: "images/acdcAlbums/WhoMadeWho.jpg", numTracks: 9, albumCode: "WhoMadeWho", year: 1986, genre: "Hard rock", duration: "37 minutes", price: formatNumber(14.99),
                tracks: [
                        {trackCode: 1, trackName: "Who Made Who"},
                        {trackCode: 2, trackName: "You Shook Me All Night Long"},
                        {trackCode: 3, trackName: "D.T."},
                        {trackCode: 4, trackName: "Sink the Pink"},
                        {trackCode: 5, trackName: "Ride On"},
                        {trackCode: 6, trackName: "Hells Bells"},
                        {trackCode: 7, trackName: "Shake Your Foundations"},
                        {trackCode: 8, trackName: "Chase the Ace"},
                        {trackCode: 10, trackName: "For Those About to Rock (We Salute You)"}
                    ]
                },
                {albumName: "Back In Black", cover: "images/acdcAlbums/BackInBlack.png", numTracks: 10, albumCode: "BackInBlack", year: 1980, genre: "Hard rock / Heavy metal", duration: "42 minutes", price: formatNumber(9),
                tracks: [
                        {trackCode: 1, trackName: "Hells Bells"},
                        {trackCode: 2, trackName: "Shoot to Thrill"},
                        {trackCode: 3, trackName: "What Do You Do for Money Honey"},
                        {trackCode: 4, trackName: "Givin the Dog a Bone"},
                        {trackCode: 5, trackName: "Let Me Put My Love Into You"},
                        {trackCode: 6, trackName: "Back In Black"},
                        {trackCode: 7, trackName: "You Shook Me All Night Long"},
                        {trackCode: 8, trackName: "Have a Drink on Me"},
                        {trackCode: 9, trackName: "Shake a Leg"},
                        {trackCode: 10, trackName: "Rock and Roll Ain't Noise Pollution"}
                    ]
                },
                {albumName: "Highway To Hell", cover: "images/acdcAlbums/HighwayToHell.jpg", numTracks: 10, albumCode: "HighwayToHell", year: 1979, genre: "Hard rock / Blues rock / Rock and roll", duration: "41 minutes", price: formatNumber(8.76),
                tracks: [
                    {trackCode: 1, trackName: "Highway to Hell"},
                    {trackCode: 2, trackName: "Girls Got Rhythm"},
                    {trackCode: 3, trackName: "Walk All Over You"},
                    {trackCode: 4, trackName: "Touch Too Much"},
                    {trackCode: 5, trackName: "Beating Around the Bush"},
                    {trackCode: 6, trackName: "Shot Down in Flames"},
                    {trackCode: 7, trackName: "Get It Hot"},
                    {trackCode: 8, trackName: "If You Want Blood (You've Got It)"},
                    {trackCode: 9, trackName: "Love Hungry Man"},
                    {trackCode: 10, trackName: "Night Prowler"}
                    ]
                },
                {albumName: "Powerage", cover: "images/acdcAlbums/Powerage.jpg", numTracks: 9, albumCode: "Powerage", year: 1978, genre: "Hard rock / Heavy metal / Blues rock / Rock and roll", duration: "39 minutes", price: formatNumber(7.89),
                tracks: [
                        {trackCode: 1, trackName: "Rock 'N' Roll Damnation"},
                        {trackCode: 2, trackName: "Down Payment Blues"},
                        {trackCode: 3, trackName: "Gimme a Bullet"},
                        {trackCode: 4, trackName: "Riff Raff"},
                        {trackCode: 5, trackName: "Sin City"},
                        {trackCode: 6, trackName: "What's Next to the Moon"},
                        {trackCode: 7, trackName: "Gone Shootin'"},
                        {trackCode: 8, trackName: "Up to My Neck in You"},
                        {trackCode: 9, trackName: "Kicked in the Teeth"}
                    ]
                },
                {albumName: "Let There Be Rock", cover: "images/acdcAlbums/LetThereBeRock.jpg", numTracks: 8, albumCode: "LetThereBeRock", year: 1977, genre: "Hard rock / Blues rock / Rock and roll", duration: "41 minutes", price: formatNumber(8.06),
                tracks: [
                        {trackCode: 1, trackName: "Go Down"},
                        {trackCode: 2, trackName: "Dog Eat Dog"},
                        {trackCode: 3, trackName: "Let There Be Rock"},
                        {trackCode: 4, trackName: "Bad Boy Boogie"},
                        {trackCode: 5, trackName: "Problem Child"},
                        {trackCode: 6, trackName: "Overdose"},
                        {trackCode: 7, trackName: "Hell Ain't a Bad Place to Be"},
                        {trackCode: 8, trackName: "Whole Lotta Rosie"}
                    ]
                },
                {albumName: "High Voltage", cover: "images/acdcAlbums/HighVoltage.jpg", numTracks: 9, albumCode: "HighVoltage", year: 1976, genre: "Hard rock / Blues rock", duration: "44 minutes", price: formatNumber(8.69),
                tracks: [
                            {trackCode: 1, trackName: "It's a Long Way to the Top (If You Wanna Rock 'N' Roll)"},
                            {trackCode: 2, trackName: "Rock 'N' Roll Singer"},
                            {trackCode: 3, trackName: "The Jack"},
                            {trackCode: 4, trackName: "Live Wire"},
                            {trackCode: 5, trackName: "T.N.T."},
                            {trackCode: 6, trackName: "Can I Sit Next to You Girl"},
                            {trackCode: 7, trackName: "Little Lover"},
                            {trackCode: 8, trackName: "She's Got Balls"},
                            {trackCode: 9, trackName: "High Voltage"}
                        ]
                }
            ]
        },

        {picture: "images/artists/ArianaGrande.jpg", code: "ArianaGrande", name: "Ariana Grande", genres: "pop", description:`Music has always been Ariana Grande's first love.
        In fact, long before millions of fans fell in love with the singer and actress as Cat Valentine
        on the hit Nickelodeon show Victorious, she began professionally pursuing her musical career at only eight-years-old.
        Overcome with inspiration, she embraced her passion wholeheartedly and followed this dream.`,
            albums: [
                {albumName: "Positions", cover: "images/ArianaGrandeAlbums/Positions.png", numTracks: 14, albumCode: "Positions", year: 2020, genre: "R&B / Pop", duration: "41 minutes", price: formatNumber(14.36),
                tracks: [
                        {trackCode: 1, trackName: "shut up"},
                        {trackCode: 2, trackName: "34+35"},
                        {trackCode: 3, trackName: "motive"},
                        {trackCode: 4, trackName: "just like magic"},
                        {trackCode: 5, trackName: "off the table"},
                        {trackCode: 6, trackName: "six thirty"},
                        {trackCode: 7, trackName: "safety net"},
                        {trackCode: 8, trackName: "my hair"},
                        {trackCode: 9, trackName: "nasty"},
                        {trackCode: 10, trackName: "west side"},
                        {trackCode: 11, trackName: "love language"},
                        {trackCode: 12, trackName: "positions"},
                        {trackCode: 13, trackName: "obvious"},
                        {trackCode: 14, trackName: "pov"}
                    ]
                },
                {albumName: "Thank U, Next", cover: "images/ArianaGrandeAlbums/ThankUNext.jpg", numTracks: 12, albumCode: "ThankUNext", year: 2019, genre: "Pop / Hip-Hop", duration: "41 minutes", price: formatNumber(5.26),
                tracks: [
                        {trackCode: 1, trackName: "imagine"},
                        {trackCode: 2, trackName: "needy"},
                        {trackCode: 3, trackName: "NASA"},
                        {trackCode: 4, trackName: "NASA"},
                        {trackCode: 5, trackName: "fake smile"},
                        {trackCode: 6, trackName: "bad idea"},
                        {trackCode: 7, trackName: "make up"},
                        {trackCode: 8, trackName: "ghostin"},
                        {trackCode: 9, trackName: "in my head"},
                        {trackCode: 10, trackName: "7 rings"},
                        {trackCode: 11, trackName: "thank u, next"},
                        {trackCode: 12, trackName: "break up with your girlfriend, i'm bored"}
                    ]
                },
                {albumName: "Sweetener", cover: "images/ArianaGrandeAlbums/Sweetener.jpg", numTracks: 15, albumCode: "Sweetener", year: 2018, genre: "Pop / R&B", duration: "47 minutes", price: formatNumber(9.99),
                tracks: [
                    {trackCode: 1, trackName: "raindrops (an angel cried)"},
                    {trackCode: 2, trackName: "blazed"},
                    {trackCode: 3, trackName: "the light is coming"},
                    {trackCode: 4, trackName: "R.E.M"},
                    {trackCode: 5, trackName: "God is a woman"},
                    {trackCode: 6, trackName: "sweetener"},
                    {trackCode: 7, trackName: "successful"},
                    {trackCode: 8, trackName: "everytime"},
                    {trackCode: 9, trackName: "breathin"},
                    {trackCode: 10, trackName: "no tears left to cry"},
                    {trackCode: 11, trackName: "borderline"},
                    {trackCode: 12, trackName: "better off"},
                    {trackCode: 13, trackName: "goodnight n go"},
                    {trackCode: 14, trackName: "pete davidson"},
                    {trackCode: 15, trackName: "get well soon"}

                    ]
                },
                {albumName: "Dangerous Woman", cover: "images/ArianaGrandeAlbums/DangerousWoman.png", numTracks: 17, albumCode: "DangerousWoman", year: 2016, genre: "Pop / R&B / Soul music", duration: "39 minutes", price: formatNumber(9.99),
                tracks: [
                        {trackCode: 1, trackName: "Moonlight"},
                        {trackCode: 2, trackName: "Dangerous Woman"},
                        {trackCode: 3, trackName: "Be Alright"},
                        {trackCode: 4, trackName: "Into You"},
                        {trackCode: 5, trackName: "Side to Side"},
                        {trackCode: 6, trackName: "Let Me Love You"},
                        {trackCode: 7, trackName: "Greedy"},
                        {trackCode: 8, trackName: "Leave Me Lonely"},
                        {trackCode: 9, trackName: "Everyday"},
                        {trackCode: 10, trackName: "Sometimes"},
                        {trackCode: 11, trackName: "I Don't Care"},
                        {trackCode: 12, trackName: "Bad Decisions"},
                        {trackCode: 13, trackName: "Touch It"},
                        {trackCode: 14, trackName: "Knew Better / Forever Boy"},
                        {trackCode: 15, trackName: "Thinking Bout You"},
                        {trackCode: 16, trackName: "Step on Up"},
                        {trackCode: 17, trackName: "Jason's Song (Gave It Away)"}
                    ]
                },
                {albumName: "My Everything", cover: "images/ArianaGrandeAlbums/MyEverything.png", numTracks: 12, albumCode: "MyEverything", year: 2014, genre: "Pop / R&B", duration: "40 minutes", price: formatNumber(9.99),
                tracks: [
                        {trackCode: 1, trackName: "Intro"},
                        {trackCode: 2, trackName: "Problem "},
                        {trackCode: 3, trackName: "One Last Time"},
                        {trackCode: 4, trackName: "Why Try"},
                        {trackCode: 5, trackName: "Break Free"},
                        {trackCode: 6, trackName: "Best Mistake"},
                        {trackCode: 7, trackName: "Be My Baby"},
                        {trackCode: 8, trackName: "Break Your Heart Right Back"},
                        {trackCode: 9, trackName: "Love Me Harder"},
                        {trackCode: 10, trackName: "Lust a Little Bit of Your Heart"},
                        {trackCode: 11, trackName: "Hands on Me"},
                        {trackCode: 12, trackName: "My Everything"}
                    ]
                },
                {albumName: "Yours Truly", cover: "images/ArianaGrandeAlbums/YoursTruly.png", numTracks: 12, albumCode: "YoursTruly", year: 2013, genre: "Pop / R&B", duration: "46 minutes", price: formatNumber(9.99),
                tracks: [
                        {trackCode: 1, trackName: "Honeymoon Avenue"},
                        {trackCode: 2, trackName: "Baby I"},
                        {trackCode: 3, trackName: "Right There"},
                        {trackCode: 4, trackName: "Tattooed Heart"},
                        {trackCode: 5, trackName: "Lovin' It"},
                        {trackCode: 6, trackName: "Piano"},
                        {trackCode: 7, trackName: "Daydreamin'"},
                        {trackCode: 8, trackName: "The Way"},
                        {trackCode: 9, trackName: "You’ll Never Know"},
                        {trackCode: 10, trackName: "Almost Is Never Enough"},
                        {trackCode: 11, trackName: "Popular Song"},
                        {trackCode: 12, trackName: "Better Left Unsaid"}
                    ]
                }
            ]
        },

        {picture: "images/artists/Beyonce.jpg", code: "Beyonce", name: "Beyonc&eacute;", genres: "pop hip-hop", description: `Beyoncé Giselle Knowles-Carter is an American singer and actress. 
        Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. 
        She rose to fame in the late 1990s as the lead singer of Destiny's Child, one of the best-selling girl groups of all time.
        Their hiatus saw the release of her first solo album, Dangerously in Love, which featured the US Billboard Hot 100 number-one singles "Crazy in Love" and "Baby Boy".`,
            albums: [
                {albumName: "Lemonade", cover: "images/BeyonceAlbums/Lemonade.png", numTracks: 12, albumCode: "Lemonade", year: 2016, genre: "Pop / R&B", duration: "49 minutes", price: formatNumber(14.79),
                tracks: [
                        {trackCode: 1, trackName: "Pray You Catch Me"},
                        {trackCode: 2, trackName: "Hold Up"},
                        {trackCode: 3, trackName: "Don't Hurt Yourself"},
                        {trackCode: 4, trackName: "Sorry"},
                        {trackCode: 5, trackName: "6 Inch"},
                        {trackCode: 6, trackName: "Daddy Lessons"},
                        {trackCode: 7, trackName: "Love Drought"},
                        {trackCode: 8, trackName: "Sandcastles"},
                        {trackCode: 9, trackName: "Forward"},
                        {trackCode: 10, trackName: "Freedom"},
                        {trackCode: 11, trackName: "All Night"},
                        {trackCode: 12, trackName: "Formation"}
                    ]
                },
                {albumName: "Beyoncé", cover: "images/BeyonceAlbums/Beyonce.png", numTracks: 16, albumCode: "Beyonce", year: 2013, genre: "R&B", duration: "1 hour 33 minutes", price: formatNumber(11.85),
                    tracks: [
                        {trackCode: 1, trackName: "Pretty Hurts"},
                        {trackCode: 2, trackName: "Haunted"},
                        {trackCode: 3, trackName: "Drunk in Love"},
                        {trackCode: 4, trackName: "Blow"},
                        {trackCode: 5, trackName: "No Angel"},
                        {trackCode: 6, trackName: "Partition"},
                        {trackCode: 7, trackName: "Jealous"},
                        {trackCode: 8, trackName: "Rocket"},
                        {trackCode: 9, trackName: "Mine"},
                        {trackCode: 10, trackName: "XO"},
                        {trackCode: 11, trackName: "Flawless"},
                        {trackCode: 12, trackName: "Superpower"},
                        {trackCode: 13, trackName: "Heaven"},
                        {trackCode: 14, trackName: "Blue"},
                        {trackCode: 15, trackName: "7/11"},
                        {trackCode: 16, trackName: "Ring Off"}
                    ]
                },
                {albumName: "4", cover: "images/BeyonceAlbums/4.jpg", numTracks: 14, albumCode: "4", year: 2011, genre: "R&B", duration: "57 minutes", price: formatNumber(7.55),
                tracks: [
                        {trackCode: 1, trackName: "Love On Top"},
                        {trackCode: 2, trackName: "Party"},
                        {trackCode: 3, trackName: "Schoolin' Life"},
                        {trackCode: 4, trackName: "Countdown"},
                        {trackCode: 5, trackName: "I Miss You"},
                        {trackCode: 6, trackName: "Dance for You"},
                        {trackCode: 7, trackName: "I Care"},
                        {trackCode: 8, trackName: "Rather Die Young"},
                        {trackCode: 9, trackName: "1+1"},
                        {trackCode: 10, trackName: "End of Time"},
                        {trackCode: 11, trackName: "Run the World (Girls)"},
                        {trackCode: 12, trackName: "Best Thing I Never Had"},
                        {trackCode: 13, trackName: "Start Over"},
                        {trackCode: 14, trackName: "I Was Here"}
                    ]
                },
                {albumName: "I Am... Sasha Fierce", cover: "images/BeyonceAlbums/IAmSashaFierce.png", numTracks: 11, albumCode: "IAmSashaFierce", year: 2008, genre: "Pop / R&B", duration: "41 minutes", price: formatNumber(9.990),
                tracks: [
                        {trackCode: 1, trackName: "If I Were a Boy"},
                        {trackCode: 2, trackName: "Halo"},
                        {trackCode: 3, trackName: "Disappear"},
                        {trackCode: 4, trackName: "Broken-Hearted Girl"},
                        {trackCode: 5, trackName: "Ave Maria"},
                        {trackCode: 6, trackName: "Satellites"},
                        {trackCode: 7, trackName: "Single Ladies (Put a Ring on It)"},
                        {trackCode: 8, trackName: "Radio"},
                        {trackCode: 9, trackName: "Diva"},
                        {trackCode: 10, trackName: "Sweet Dreams"},
                        {trackCode: 11, trackName: "Video Phone"}
                    ]
                },
            ]
        },

        {picture: "images/artists/BlackSabbath.jpg", code: "BlackSabbath", name: "Black Sabbath", genres: "metal", description: `Black Sabbath were an English rock band formed in Birmingham
         in 1968 by guitarist Tony Iommi, drummer Bill Ward, bassist Geezer Butler and vocalist Ozzy Osbourne. 
         They are often cited as pioneers of heavy metal music. The band helped define the genre with releases such as Black Sabbath (1970),
          Paranoid (1970), and Master of Reality (1971). The band had multiple line-up changes following Osbourne's departure in 1979, with
           Iommi being the only constant member throughout its history.`,
            albums: [
                {albumName: "13", cover: "images/BlackSabbathAlbums/13.jpg", numTracks: 8, albumCode: "13", year: 2013, genre: "Heavy metal", duration: "53 minutes", price: formatNumber(15.39),
                tracks: [
                        {trackCode: 1, trackName: "End Of The Beginning"},
                        {trackCode: 2, trackName: "God Is Dead?"},
                        {trackCode: 3, trackName: "Loner"},
                        {trackCode: 4, trackName: "Zeitgeist"},
                        {trackCode: 5, trackName: "Age Of Reason"},
                        {trackCode: 6, trackName: "Live Forever"},
                        {trackCode: 7, trackName: "Damaged Soul"},
                        {trackCode: 8, trackName: "Dear Father"}
                    ]
                },
                {albumName: "Forbidden", cover: "images/BlackSabbathAlbums/Forbidden.jpg", numTracks: 10, albumCode: "Forbidden", year: 1995, genre: "Heavy metal", duration: "44 minutes", price: formatNumber(18.33),
                tracks: [
                        {trackCode: 1, trackName: "The Illusion of Power"},
                        {trackCode: 2, trackName: "Get a Grip"},
                        {trackCode: 3, trackName: "Can't Get Close Enough"},
                        {trackCode: 4, trackName: "Shaking of the Chains"},
                        {trackCode: 5, trackName: "I Won't Cry for You"},
                        {trackCode: 6, trackName: "Guilty as Hell"},
                        {trackCode: 7, trackName: "Sick and Tired"},
                        {trackCode: 8, trackName: "Rusty Angels"},
                        {trackCode: 9, trackName: "Forbidden"},
                        {trackCode: 10, trackName: "Kiss of Death"},
                        {trackCode: 11, trackName: "Loner"}
                    ]
                },
                {albumName: "Cross Purposes", cover: "images/BlackSabbathAlbums/CrossPurposes.jpg", numTracks: 11, albumCode: "CrossPurposes", year: 1994, genre: "Heavy metal", duration: "50 minutes", price: formatNumber(16),
                tracks: [
                        {trackCode: 1, trackName: "I Witness"},
                        {trackCode: 2, trackName: "Cross of Thorns"},
                        {trackCode: 3, trackName: "Psychophobia"},
                        {trackCode: 4, trackName: "Virtual Death"},
                        {trackCode: 5, trackName: "Immaculate Deception"},
                        {trackCode: 6, trackName: "Dying for Love"},
                        {trackCode: 7, trackName: "Back to Eden"},
                        {trackCode: 8, trackName: "The Hand That Rocks the Cradle"},
                        {trackCode: 9, trackName: "Cardinal Sin"},
                        {trackCode: 10, trackName: "Evil Eye"},
                        {trackCode: 11, trackName: "What's the Use"}
                    ]
                },
                {albumName: "Dehumanizer", cover: "images/BlackSabbathAlbums/Dehumanizer.jpg", numTracks: 10, albumCode: "Dehumanizer", year: 1992, genre: "Heavy metal", duration: "52 minutes", price: formatNumber(15.39),
                tracks: [
                        {trackCode: 1, trackName: "Computer God"},
                        {trackCode: 2, trackName: "After All (The Dead"},
                        {trackCode: 3, trackName: "TV Crimes"},
                        {trackCode: 4, trackName: "Letters From Earth"},
                        {trackCode: 5, trackName: "Master Of Insanity"},
                        {trackCode: 6, trackName: "Time Machine"},
                        {trackCode: 7, trackName: "Sins Of The Father"},
                        {trackCode: 8, trackName: "Too Late"},
                        {trackCode: 9, trackName: "I"},
                        {trackCode: 10, trackName: "Buried Alive"}
                    ]
                },
                {albumName: "Tyr", cover: "images/BlackSabbathAlbums/Tyr.jpg", numTracks: 9, albumCode: "Tyr", year: 1990, genre: "Heavy metal", duration: "39 minutes", price: formatNumber(10.93),
                tracks: [
                        {trackCode: 1, trackName: "Anno Mundi (The Vision)"},
                        {trackCode: 2, trackName: "The Law Maker"},
                        {trackCode: 3, trackName: "Jerusalem"},
                        {trackCode: 4, trackName: "The Sabbath Stones"},
                        {trackCode: 5, trackName: "The Battle of Tyr"},
                        {trackCode: 6, trackName: "Odin's Court"},
                        {trackCode: 7, trackName: "Valhalla"},
                        {trackCode: 8, trackName: "Feels Good to Me"},
                        {trackCode: 9, trackName: "Heaven in Black"}
                    ]
                },
                {albumName: "Headless Cross", cover: "images/BlackSabbathAlbums/HeadlessCross.jpg", numTracks: 8, albumCode: "HeadlessCross", year: 1989, genre: "Heavy metal", duration: "40 minutes", price: formatNumber(11.66),
                tracks: [
                        {trackCode: 1, trackName: "The Gates of Hell"},
                        {trackCode: 2, trackName: "Headless Cross"},
                        {trackCode: 3, trackName: "Devil & Daughter"},
                        {trackCode: 4, trackName: "When Death Calls"},
                        {trackCode: 5, trackName: "Kill in the Spirit World"},
                        {trackCode: 6, trackName: "Call of the Wild"},
                        {trackCode: 7, trackName: "Black Moon"},
                        {trackCode: 8, trackName: "Nightwing"}
                    ]
                },
                {albumName: "The Eternal Idol", cover: "images/BlackSabbathAlbums/TheEternalIdol.jpg", numTracks: 9, albumCode: "TheEternalIdol", year: 1987, genre: "Heavy metal / Hard rock", duration: "43 minutes", price: formatNumber(13.98),
                tracks: [
                        {trackCode: 1, trackName: "The Shining"},
                        {trackCode: 2, trackName: "Ancient Warrior"},
                        {trackCode: 3, trackName: "Hard Life to Love"},
                        {trackCode: 4, trackName: "Glory Ride"},
                        {trackCode: 5, trackName: "Born to Lose"},
                        {trackCode: 6, trackName: "Nightmare"},
                        {trackCode: 7, trackName: "Scarlet Pimpernel"},
                        {trackCode: 8, trackName: "Lost Forever"},
                        {trackCode: 9, trackName: "Eternal Idol"}
                    ]
                },
                {albumName: "Seventh Star", cover: "images/BlackSabbathAlbums/SeventhStar.jpg", numTracks: 9, albumCode: "SeventhStar", year: 1986, genre: "Hard rock", duration: "34 minutes", price: formatNumber(17.77),
                tracks: [
                        {trackCode: 1, trackName: "In for the Kill"},
                        {trackCode: 2, trackName: "No Stranger to Love"},
                        {trackCode: 3, trackName: "Turn to Stone"},
                        {trackCode: 4, trackName: "Sphinx"},
                        {trackCode: 5, trackName: "Seventh Star"},
                        {trackCode: 6, trackName: "Danger Zone"},
                        {trackCode: 7, trackName: "Heart Like a Wheel"},
                        {trackCode: 8, trackName: "Angry Heart"},
                        {trackCode: 9, trackName: "In Memory"}
                    ]
                },
                {albumName: "Born Again", cover: "images/BlackSabbathAlbums/BornAgain.jpg", numTracks: 9, albumCode: "BornAgain", year: 1983, genre: "Heavy metal", duration: "41 minutes", price: formatNumber(16.08),
                tracks: [
                        {trackCode: 1, trackName: "Trashed"},
                        {trackCode: 2, trackName: "Stonehenge"},
                        {trackCode: 3, trackName: "Disturbing the Priest"},
                        {trackCode: 4, trackName: "The Dark"},
                        {trackCode: 5, trackName: "Zero the Hero"},
                        {trackCode: 6, trackName: "Digital Bitch"},
                        {trackCode: 7, trackName: "Born Again"},
                        {trackCode: 8, trackName: "Hot Line"},
                        {trackCode: 9, trackName: "Keep It Warm"}
                    ]
                },
                {albumName: "Mob Rules", cover: "images/BlackSabbathAlbums/MobRules.jpg", numTracks: 9, albumCode: "MobRules", year: 1981, genre: "Heavy metal", duration: "40 minutes", price: formatNumber(19.59),
                tracks: [
                        {trackCode: 1, trackName: "Turn Up the Night"},
                        {trackCode: 2, trackName: "Voodoo"},
                        {trackCode: 3, trackName: "The Sign of the Southern Cross"},
                        {trackCode: 4, trackName: "E5150"},
                        {trackCode: 5, trackName: "The Mob Rules"},
                        {trackCode: 6, trackName: "Country Girl"},
                        {trackCode: 7, trackName: "Slipping Away"},
                        {trackCode: 8, trackName: "Falling Off the Edge of the World"},
                        {trackCode: 9, trackName: "Over and Over"}
                    ]
                },
                {albumName: "Heaven And Hell", cover: "images/BlackSabbathAlbums/HeavenAndHell.jpg", numTracks: 8, albumCode: "HeavenAndHell", year: 1980, genre: "Heavy metal", duration: "39 minutes", price: formatNumber(19.59),
                tracks: [
                    {trackCode: 1, trackName: "Neon Knights"},
                    {trackCode: 2, trackName: "Children of the Sea"},
                    {trackCode: 3, trackName: "Lady Evil "},
                    {trackCode: 4, trackName: "Heaven and Hell"},
                    {trackCode: 5, trackName: "Wishing Well"},
                    {trackCode: 6, trackName: "Die Young"},
                    {trackCode: 7, trackName: "Walk Away"},
                    {trackCode: 8, trackName: "Lonely Is the Word"}
                ]
                },
                {albumName: "Never Say Die", cover: "images/BlackSabbathAlbums/NeverSayDie.jpg", numTracks: 9, albumCode: "NeverSayDie", year: 1978, genre: "Heavy metal / Hard rock", duration: "45 minutes", price: formatNumber(11.98),
                tracks: [
                        {trackCode: 1, trackName: "Never Say Die"},
                        {trackCode: 2, trackName: "Johnny Blade"},
                        {trackCode: 3, trackName: "Junior's Eyes"},
                        {trackCode: 4, trackName: "A Hard Road"},
                        {trackCode: 5, trackName: "Shock Wave"},
                        {trackCode: 6, trackName: "Air Dance"},
                        {trackCode: 7, trackName: "Over to You"},
                        {trackCode: 8, trackName: "Breakout"},
                        {trackCode: 9, trackName: "Swinging the Chain"}
                    ]
                },
                {albumName: "Technical Ecstasy", cover: "images/BlackSabbathAlbums/TechnicalEcstasy.jpg", numTracks: 8, albumCode: "TechnicalEcstasy", year: 1976, genre: "Heavy metal / Hard rock", duration: "39 minutes", price: formatNumber(11.98),
                tracks: [
                        {trackCode: 1, trackName: "Back Street Kids"},
                        {trackCode: 2, trackName: "You Won't Change Me"},
                        {trackCode: 3, trackName: "It's Alright"},
                        {trackCode: 4, trackName: "Gypsy"},
                        {trackCode: 5, trackName: "All Moving Parts (Stand Still)"},
                        {trackCode: 6, trackName: "Rock 'N' Roll Doctor"},
                        {trackCode: 7, trackName: "She's Gone"},
                        {trackCode: 8, trackName: "Dirty Women"}
                    ]
                },
                {albumName: "Sabotage", cover: "images/BlackSabbathAlbums/Sabotage.jpg", numTracks: 8, albumCode: "Sabotage", year: 1975, genre: "Heavy metal", duration: "43 minutes", price: formatNumber(9.99),
                tracks: [
                        {trackCode: 1, trackName: "Hole in the Sky"},
                        {trackCode: 2, trackName: "Don't Start (Too Late)"},
                        {trackCode: 3, trackName: "Symptom of the Universe"},
                        {trackCode: 4, trackName: "Megalomania"},
                        {trackCode: 5, trackName: "Thrill of It All"},
                        {trackCode: 6, trackName: "Supertzar"},
                        {trackCode: 7, trackName: "Am I Going Insane"},
                        {trackCode: 8, trackName: "The Writ"}
                    ]
                },
                {albumName: "Sabbath Bloody Sabbath", cover: "images/BlackSabbathAlbums/SabbathBloodySabbath.jpg", numTracks: 8, albumCode: "SabbathBloodySabbath", year: 1973, genre: "heavy metal", duration: "42 minutes", price: formatNumber(11.98),
                tracks: [
                        {trackCode: 1, trackName: "Sabbath Bloody Sabbath"},
                        {trackCode: 2, trackName: "A National Acrobat"},
                        {trackCode: 3, trackName: "Fluff"},
                        {trackCode: 4, trackName: "Sabbra Cadabra"},
                        {trackCode: 5, trackName: "Killing Yourself to Live"},
                        {trackCode: 6, trackName: "Who Are You?"},
                        {trackCode: 7, trackName: "Looking for Today"},
                        {trackCode: 8, trackName: "Spiral Architect"}
                    ]
                },
                {albumName: "Vol.4", cover: "images/BlackSabbathAlbums/Vol4.png", numTracks: 10, albumCode: "Vol4", year: 1971, genre: "Heavy metal", duration: "42 minutes", price: formatNumber(5.95),
                tracks: [
                        {trackCode: 1, trackName: "Wheels of Confusion"},
                        {trackCode: 2, trackName: "Tomorrow's Dream"},
                        {trackCode: 3, trackName: "Changes"},
                        {trackCode: 4, trackName: "FX"},
                        {trackCode: 5, trackName: "Supernaut"},
                        {trackCode: 6, trackName: "Snowblind"},
                        {trackCode: 7, trackName: "Cornucopia"},
                        {trackCode: 8, trackName: "Laguna Sunrise"},
                        {trackCode: 9, trackName: "St. Vitus' Dance"},
                        {trackCode: 10, trackName: "Under the Sun / Every Day Comes and Goes"}
                    ]
                },
                {albumName: "Master Of Reality", cover: "images/BlackSabbathAlbums/MasterOfReality.jpg", numTracks: 8, albumCode: "MasterOfReality", year: 1971, genre: "Heavy metal", duration: "34 minutes", price: formatNumber(9.98),
                tracks: [
                        {trackCode: 1, trackName: "Sweet Leaf"},
                        {trackCode: 2, trackName: "After Forever"},
                        {trackCode: 3, trackName: "Embryo"},
                        {trackCode: 4, trackName: "Children of the Grave"},
                        {trackCode: 5, trackName: "Orchid"},
                        {trackCode: 6, trackName: "Lord of This World"},
                        {trackCode: 7, trackName: "Solitude"},
                        {trackCode: 8, trackName: "Into the Void"}
                    ]
                },
                {albumName: "Paranoid", cover: "images/BlackSabbathAlbums/Paranoid.jpg", numTracks: 8, albumCode: "Paranoid", year: 1970, genre: "Heavy metal / Hard rock", duration: "41 minutes", price: formatNumber(11.98),
                tracks: [
                        {trackCode: 1, trackName: "War Pigs"},
                        {trackCode: 2, trackName: "Paranoid"},
                        {trackCode: 3, trackName: "Planet Caravan"},
                        {trackCode: 4, trackName: "Iron Man"},
                        {trackCode: 5, trackName: "Electric Funeral"},
                        {trackCode: 6, trackName: "Hand of Doom"},
                        {trackCode: 7, trackName: "Rat Salad"},
                        {trackCode: 8, trackName: "Fairies Wear Boots"}
                    ]
                },
                {albumName: "Black Sabbath", cover: "images/BlackSabbathAlbums/BlackSabbath.jpg", numTracks: 8, albumCode: "BlackSabbath", year: 1970, genre: "Heavy metal", duration: "42 minutes", price: formatNumber(11.98),
                tracks: [
                        {trackCode: 1, trackName: "Black Sabbath"},
                        {trackCode: 2, trackName: "The Wizard"},
                        {trackCode: 3, trackName: "Behind the Wall of Sleep"},
                        {trackCode: 4, trackName: "N.I.B."},
                        {trackCode: 5, trackName: "Evil Woman"},
                        {trackCode: 6, trackName: "Sleeping Village"},
                        {trackCode: 7, trackName: "Warning"},
                        {trackCode: 8, trackName: "Wicked World"}
                    ]
                }
            ]
        },

        {
            picture: "images/artists/BonJovi.jpg", code: "BonJovi", name: "Bon Jovi", genres: "rock", description: `Bon Jovi is an American rock band formed in 1983 in Sayreville, New Jersey. 
        It consists of singer Jon Bon Jovi, keyboardist David Bryan, drummer Tico Torres, guitarist Phil X, and bassist Hugh McDonald. The band have been credited with
         "[bridging] the gap between heavy metal and pop with style and ease".`,
            albums: [
                {albumName: "2020", cover: "images/BonJoviAlbums/2020.png", numTracks: 10, albumCode: "2020", year: "2020", genre: "Rock", duration: "48 minutes", price: formatNumber(11.88),
                tracks: [
                        {trackCode: 1, trackName: "Limitless"},
                        {trackCode: 2, trackName: "Do What You Can"},
                        {trackCode: 3, trackName: "American Reckoning"},
                        {trackCode: 4, trackName: "Beautiful Drug"},
                        {trackCode: 5, trackName: "Story Of Love"},
                        {trackCode: 6, trackName: "Let It Rain"},
                        {trackCode: 7, trackName: "Lower The Flag"},
                        {trackCode: 8, trackName: "Blood In The Water"},
                        {trackCode: 9, trackName: "Brothers In Arms"},
                        {trackCode: 10, trackName: "Unbroken"}

                    ]
                },
                {albumName: "Lost Highway", cover: "images/BonJoviAlbums/LostHighway.jpg", numTracks: 12, albumCode: "LostHighway", year: 2007, genre: "Country rock", duration: "49 minutes", price: formatNumber(7.99),
                tracks: [
                        {trackCode: 1, trackName: "Lost Highway"},
                        {trackCode: 2, trackName: "Summertime"},
                        {trackCode: 3, trackName: "(You Want To) Make A Memory"},
                        {trackCode: 4, trackName: "Whole Lot Of Leavin'"},
                        {trackCode: 5, trackName: "We Got It Going On"},
                        {trackCode: 6, trackName: "Any Other Day"},
                        {trackCode: 7, trackName: "Seat Next To You"},
                        {trackCode: 8, trackName: "Everybody's Broken"},
                        {trackCode: 9, trackName: "Till We Ain't Strangers Anymore"},
                        {trackCode: 10, trackName: "The Last Night"},
                        {trackCode: 11, trackName: "One Step Closer"},
                        {trackCode: 12, trackName: "I Love This Town"}
                    ]
                },
                {albumName: "Have A Nice Day", cover: "images/BonJoviAlbums/HaveANiceDay.jpg", numTracks: 13, albumCode: "HaveANiceDay", year: 2005, genre: "Pop rock / Hard rock", duration: "53 minutes", price: formatNumber(6.23),
                tracks: [
                        {trackCode: 1, trackName: "Have A Nice Day"},
                        {trackCode: 2, trackName: "I Want To Be Loved"},
                        {trackCode: 3, trackName: "Welcome To Wherever You Are"},
                        {trackCode: 4, trackName: "Who Says You Can't Go Home"},
                        {trackCode: 5, trackName: "Last Man Standing"},
                        {trackCode: 6, trackName: "Bells Of Freedom"},
                        {trackCode: 7, trackName: "Wildflower"},
                        {trackCode: 8, trackName: "Last Cigarette"},
                        {trackCode: 9, trackName: "I Am"},
                        {trackCode: 10, trackName: "Complicated"},
                        {trackCode: 11, trackName: "Novocaine"},
                        {trackCode: 12, trackName: "Story Of My Life"},
                        {trackCode: 13, trackName: "Who Says You Can't Go Home"}
                    ]
                },
                {albumName: "Keep The Faith", cover: "images/BonJoviAlbums/KeepTheFaith.jpg", numTracks: 12, albumCode: "KeepTheFaith", year: 1992, genre: "Hard rock", duration: "1 hour 5 minutes", price: formatNumber(7.99),
                tracks: [
                        {trackCode: 1, trackName: "I Believe"},
                        {trackCode: 2, trackName: "Keep The Faith"},
                        {trackCode: 3, trackName: "I'll Sleep When I'm Dead"},
                        {trackCode: 4, trackName: "In These Arms"},
                        {trackCode: 5, trackName: "Bed Of Roses"},
                        {trackCode: 6, trackName: "If I Was Your Mother"},
                        {trackCode: 7, trackName: "Dry County"},
                        {trackCode: 8, trackName: "Woman In Love"},
                        {trackCode: 9, trackName: "Fear"},
                        {trackCode: 10, trackName: "I Want You"},
                        {trackCode: 11, trackName: "Blame It On The Love Of Rock & Roll"},
                        {trackCode: 12, trackName: "Little Bit Of Soul"}
                    ]
                }
            ]
        },

        {picture: "images/artists/Coldplay.jpg", code: "Coldplay", name: "Coldplay", genres: "pop rock", description: `Coldplay are a British rock band formed in London in 1996. 
        The performing members comprise vocalist, rhythm guitarist and pianist Chris Martin, lead guitarist Jonny Buckland, 
        bassist Guy Berryman, and drummer Will Champion.  Coldplay achieved worldwide fame with the release of the song "Yellow" in 2000, followed
         in the same year by their debut album Parachutes, which was nominated for the Mercury Prize. `,
            albums: [
                {albumName: "Music Of The Spheres", cover: "images/Coldplay/MusicOfTheSpheres.jpg", numTracks: 12, albumCode: "MusicOfTheSpheres", year: 2021, genre: "Pop rock", duration: "49 minutes", price: formatNumber(14.98),
                tracks: [
                        {trackCode: 1, trackName: "Music of the Spheres I"},
                        {trackCode: 2, trackName: "Higher Power"},
                        {trackCode: 3, trackName: "Humankind"},
                        {trackCode: 4, trackName: "Alien Choir"},
                        {trackCode: 5, trackName: "Let Somebody Go"},
                        {trackCode: 6, trackName: "Human Heart"},
                        {trackCode: 7, trackName: "People of the Pride"},
                        {trackCode: 8, trackName: "Biutyful"},
                        {trackCode: 9, trackName: "Music Of The Spheres II"},
                        {trackCode: 10, trackName: "My Universe"},
                        {trackCode: 11, trackName: "Infinity Sign"},
                        {trackCode: 12, trackName: "Coloratura"}
                    ]
                },
                {albumName: "Kaleidoscope", cover: "images/Coldplay/Kaleidoscope.jpg", numTracks: 5, albumCode: "Kaleidoscope", year: 2017, genre: "Pop rock", duration: "25 minutes", price: formatNumber(4.71),
                tracks: [
                        {trackCode: 1, trackName: "All I Can Think About Is You"},
                        {trackCode: 2, trackName: "Miracles (Someone Special)"},
                        {trackCode: 3, trackName: "A L I E N S"},
                        {trackCode: 4, trackName: "Something Just Like This"},
                        {trackCode: 5, trackName: "Hypnotised"}
                    ]
                },
                {albumName: "A Head Full Of Dreams", cover: "images/Coldplay/AHeadFullOfDreams.png", numTracks: 11, albumCode: "AHeadFullOfDreams", year: 2015, genre: "Pop / Pop rock", duration: "45 minutes", price: formatNumber(9.49),
                tracks: [
                        {trackCode: 1, trackName: "A Head Full of Dreams"},
                        {trackCode: 2, trackName: "Birds"},
                        {trackCode: 3, trackName: "Hymn for the Weekend"},
                        {trackCode: 4, trackName: "Everglow"},
                        {trackCode: 5, trackName: "Adventure of a Lifetime"},
                        {trackCode: 6, trackName: "Fun"},
                        {trackCode: 7, trackName: "Kaleidoscope"},
                        {trackCode: 8, trackName: "Army of One"},
                        {trackCode: 9, trackName: "Amazing Day"},
                        {trackCode: 10, trackName: "Colour Spectrum"},
                        {trackCode: 11, trackName: "Up&Up"}
                    ]
                },
                {albumName: "Ghost Stories", cover: "images/Coldplay/GhostStories.png", numTracks: 9, albumCode: "GhostStories", year: 2014, genre: "Pop rock", duration: "40 minutes", price: formatNumber(8.60),
                tracks: [
                        {trackCode: 1, trackName: "Always in My Head"},
                        {trackCode: 2, trackName: "Magic"},
                        {trackCode: 3, trackName: "Ink"},
                        {trackCode: 4, trackName: "True Love"},
                        {trackCode: 5, trackName: "Midnight"},
                        {trackCode: 6, trackName: "Another's Arms"},
                        {trackCode: 7, trackName: "Oceans"},
                        {trackCode: 8, trackName: "A Sky Full of Stars"},
                        {trackCode: 8, trackName: "O"}
                    ]
                },
                {albumName: "X&Y", cover: "images/Coldplay/XAndY.png", numTracks: 13, albumCode: "XAndY", year: 2005, genre: "Alternative rock", duration: "1 hour 2 minutes", price: formatNumber(9.49),
                tracks: [
                        {trackCode: 1, trackName: "Square One"},
                        {trackCode: 2, trackName: "What If"},
                        {trackCode: 3, trackName: "White Shadows"},
                        {trackCode: 4, trackName: "Fix You"},
                        {trackCode: 5, trackName: "Talk"},
                        {trackCode: 6, trackName: "X&Y"},
                        {trackCode: 7, trackName: "Speed of Sound"},
                        {trackCode: 8, trackName: "A Message"},
                        {trackCode: 9, trackName: "Low"},
                        {trackCode: 10, trackName: "The Hardest Part"},
                        {trackCode: 11, trackName: "Swallowed in the Sea"},
                        {trackCode: 12, trackName: "Twisted Logic"},
                        {trackCode: 13, trackName: "Til Kingdom Come"}
                    ]
                }
            ]
        },

        {picture: "images/artists/DeepPurple.jpg", code: "DeepPurple", name: "Deep Purple", genres: "rock", description: `Deep Purple are an English rock band formed in Hertford, Hertfordshire 
        and London in 1968. They are considered to be among the pioneers of heavy metal and modern hard rock, although their musical approach 
        has changed over the years. Originally formed as a psychedelic rock and progressive rock band, they shifted to a heavier sound with their 1970 album Deep Purple in Rock. Deep Purple,
         together with Led Zeppelin and Black Sabbath, have been referred to as the "unholy trinity of British hard rock and heavy metal in the early- to mid-seventies".`,
            albums: [
                {albumName: "Whoosh!", cover: "images/DeepPurpleAlbums/Whoosh.jpg", numTracks: 13, albumCode: "Whoosh", year: 2020, genre: "Hard rock / Progressive rock", duration: "51 minutes", price: formatNumber(9.79),
                tracks: [
                        {trackCode: 1, trackName: "Throw My Bones"},
                        {trackCode: 2, trackName: "Drop the Weapon"},
                        {trackCode: 3, trackName: "We're All the Same in the Dark"},
                        {trackCode: 4, trackName: "Nothing at All"},
                        {trackCode: 5, trackName: "No Need to Shout"},
                        {trackCode: 6, trackName: "Step by Step"},
                        {trackCode: 7, trackName: "What the What"},
                        {trackCode: 8, trackName: "The Long Way Round"},
                        {trackCode: 9, trackName: "The Power of the Moon"},
                        {trackCode: 10, trackName: "Remission Possible"},
                        {trackCode: 11, trackName: "Man Alive"},
                        {trackCode: 12, trackName: "And the Address"},
                        {trackCode: 13, trackName: "Dancing in My Sleep"}
                    ]
                },
                {albumName: "Stormbringer", cover: "images/DeepPurpleAlbums/Stormbringer.jpg", numTracks: 9, albumCode: "Stormbringer", year: 1974, genre: "Hard rock / Blues rock", duration: "1 hour 36 minutes", price: formatNumber(8.99),
                tracks: [
                        {trackCode: 1, trackName: "Stormbringer"},
                        {trackCode: 2, trackName: "Love Don't Mean A Thing"},
                        {trackCode: 3, trackName: "Holy Man"},
                        {trackCode: 4, trackName: "Hold On"},
                        {trackCode: 5, trackName: "Lady Double Dealer"},
                        {trackCode: 6, trackName: "You Can't Do It Right"},
                        {trackCode: 7, trackName: "High Ball Shooter"},
                        {trackCode: 8, trackName: "The Gypsy"},
                        {trackCode: 9, trackName: "Soldier Of Fortune"}
                    ]
                },
                {albumName: "Perfect Strangers", cover: "images/DeepPurpleAlbums/PerfectStrangers.jpg", numTracks: 10, albumCode: "PerfectStrangers", year: 1984, genre: "Hard rock / Heavy metal / Pop", duration: "54 minutes", price: formatNumber(10.89),
                tracks: [
                        {trackCode: 1, trackName: "Knocking At Your Back Door"},
                        {trackCode: 2, trackName: "Under The Gun"},
                        {trackCode: 3, trackName: "Nobody's Home"},
                        {trackCode: 4, trackName: "Mean Streak"},
                        {trackCode: 5, trackName: "Perfect Strangers"},
                        {trackCode: 6, trackName: "A Gypsy's Kiss"},
                        {trackCode: 7, trackName: "Wasted Sunsets"},
                        {trackCode: 8, trackName: "Hungry Daze"},
                        {trackCode: 9, trackName: "Not Responsible"},
                        {trackCode: 10, trackName: "Son Of Alerik"}
                    ]
                },
                {albumName: "Burn", cover: "images/DeepPurpleAlbums/Burn.jpg", numTracks: 9, albumCode: "Burn", year: 1974, genre: "Hard rock / Heavy metal / Blues rock / Progressive rock", duration: "1 hour 12 minutes", price: formatNumber(7.90),
                tracks: [
                        {trackCode: 1, trackName: "Burn"},
                        {trackCode: 2, trackName: "Might Just Take Your Life"},
                        {trackCode: 3, trackName: "Lay Down, Stay Down"},
                        {trackCode: 4, trackName: "Sail Away"},
                        {trackCode: 5, trackName: "You Fool No One"},
                        {trackCode: 6, trackName: "What's Goin' On Here"},
                        {trackCode: 7, trackName: "Mistreated"},
                        {trackCode: 8, trackName: "'A' 200"},
                        {trackCode: 9, trackName: "Coronarias Redig"}
                    ]
                },

                {albumName: "Deep Purple In Rock", cover: "images/DeepPurpleAlbums/DeepPurpleInRock.jpg", numTracks: 8, albumCode: "DeepPurpleInRock", year: 1970, genre: "Hard rock / Heavy metal / Progressive rock", duration: "1 hour 18 minutes", price: formatNumber(8.99),
                tracks: [
                        {trackCode: 1, trackName: "Speed King"},
                        {trackCode: 2, trackName: "Bloodsucker"},
                        {trackCode: 3, trackName: "Child in Time"},
                        {trackCode: 4, trackName: "Flight of the Rat"},
                        {trackCode: 5, trackName: "Into the Fire"},
                        {trackCode: 6, trackName: "Living Wreck"},
                        {trackCode: 7, trackName: "Hard Lovin' Man"},
                        {trackCode: 8, trackName: "Black Night"}

                    ]
                }
            ]
        },

        {picture: "images/artists/Dio.jpg", code: "Dio", name: "Dio", genres: "metal", description: `Dio was an American heavy metal band formed in 1982 and led by vocalist Ronnie James Dio. 
        Dio left Black Sabbath with intentions to form a new band with fellow former Black Sabbath member Vinny Appice, the band's drummer. The band released ten studio
         albums and had numerous line-up changes over the years with Dio himself being the only constant member.`,
            albums: [
                {albumName: "Master Of The Moon", cover: "images/DioAlbums/MasterOfTheMoon.jpg", numTracks: 10, albumCode: "MasterOfTheMoon", year: 2004, genre: "Heavy metal", duration: "46 minutes", price: formatNumber(16.32),
                tracks: [
                        {trackCode: 1, trackName: "One More for the Road"},
                        {trackCode: 2, trackName: "Master of the Moon"},
                        {trackCode: 3, trackName: "End of the World"},
                        {trackCode: 4, trackName: "Shivers"},
                        {trackCode: 5, trackName: "The Man Who Would Be King"},
                        {trackCode: 6, trackName: "The Eyes"},
                        {trackCode: 7, trackName: "Living the Lie"},
                        {trackCode: 8, trackName: "I Am"},
                        {trackCode: 9, trackName: "Death by Love"},
                        {trackCode: 10, trackName: "In Dreams"}
                    ]
                },
                {albumName: "Sacred Heart", cover: "images/DioAlbums/SacredHeart.jpg", numTracks: 9, albumCode: "SacredHeart", year: 1985, genre: "Heavy metal", duration: "38 minutes", price: formatNumber(5.75),
                tracks: [
                    {trackCode: 1, trackName: "King of Rock and Roll"},
                    {trackCode: 2, trackName: "Sacred Heart"},
                    {trackCode: 3, trackName: "Another Lie"},
                    {trackCode: 4, trackName: "Rock 'n' Roll Children"},
                    {trackCode: 5, trackName: "Hungry for Heaven"},
                    {trackCode: 6, trackName: "Like the Beat of a Heart"},
                    {trackCode: 7, trackName: "Just Another Day"},
                    {trackCode: 8, trackName: "Fallen Angels"},
                    {trackCode: 9, trackName: "Shoot Shoot"}
                    ]
                },
                {albumName: "The Last In Line", cover: "images/DioAlbums/TheLastInLine.jpg", numTracks: 9, albumCode: "TheLastInLine", year: 1984, genre: "Heavy metal", duration: "41 minutes", price: formatNumber(5.98),
                tracks: [
                        {trackCode: 1, trackName: "We Rock"},
                        {trackCode: 2, trackName: "The Last in Line"},
                        {trackCode: 3, trackName: "Breathless"},
                        {trackCode: 4, trackName: "I Speed at Night"},
                        {trackCode: 5, trackName: "One Night in the City"},
                        {trackCode: 6, trackName: "Evil Eyes"},
                        {trackCode: 7, trackName: "Mystery"},
                        {trackCode: 8, trackName: "Eat Your Heart Out"},
                        {trackCode: 9, trackName: "Egypt (The Chains Are On)"}
                    ]
                },
                {albumName: "Holy Diver", cover: "images/DioAlbums/HolyDiver.jpg", numTracks: 10, albumCode: "HolyDiver", year: 1983, genre: "Heavy metal", duration: "1 hour 26 minutes", price: formatNumber(19.98),
                tracks: [
                        {trackCode: 1, trackName: "Stand Up And Shout"},
                        {trackCode: 2, trackName: "Holy Diver"},
                        {trackCode: 3, trackName: "Gypsy"},
                        {trackCode: 4, trackName: "Caught In The Middle"},
                        {trackCode: 5, trackName: "Don't Talk To Strangers"},
                        {trackCode: 6, trackName: "Straight Through The Heart"},
                        {trackCode: 7, trackName: "Invisible"},
                        {trackCode: 8, trackName: "Rainbow In The Dark"},
                        {trackCode: 9, trackName: "Shame On The Night"},
                        {trackCode: 10, trackName: "Evil Eyes"}
                    ]
                }
            ]
        },

        {picture: "images/artists/EdSheeran.jpg", code: "EdSheeran", name: "Ed Sheeran", genres: "pop", description: `Edward Christopher Sheeran MBE is an English singer-songwriter, record producer, musician, 
        and actor. Sheeran has sold more than 150 million records worldwide, making him one of the world's best-selling music artists. In December 2019, the Official Charts Company named
         him artist of the decade, with the most combined success in the UK album and singles charts in the 2010s. `,
            albums: [
                {albumName: "Divide", cover: "images/EdSheeranAlbums/Divide.png", numTracks: 16, albumCode: "Divide", year: 2017, genre: "Pop", duration: "59 minutes", price: formatNumber(16.99),
                tracks: [
                    {trackCode: 1, trackName: "Eraser"},
                    {trackCode: 2, trackName: "Castle on the Hill"},
                    {trackCode: 3, trackName: "Dive"},
                    {trackCode: 4, trackName: "Shape of You"},
                    {trackCode: 5, trackName: "Perfect"},
                    {trackCode: 6, trackName: "Galway Girl"},
                    {trackCode: 7, trackName: "Happier"},
                    {trackCode: 8, trackName: "New Man"},
                    {trackCode: 9, trackName: "Hearts Don't Break Around Here"},
                    {trackCode: 10, trackName: "What Do I Know?"},
                    {trackCode: 11, trackName: "How Would You Feel"},
                    {trackCode: 12, trackName: "Supermarket Flowers"},
                    {trackCode: 13, trackName: "Barcelona"},
                    {trackCode: 14, trackName: "Bibia Be Ye Ye"},
                    {trackCode: 15, trackName: "Nancy Mulligan"},
                    {trackCode: 16, trackName: "Save Myself"}
                    ]
                },
                {albumName: "Multiply", cover: "images/EdSheeranAlbums/Multiply.jpg", numTracks: 16, albumCode: "Multiply", year: 2014, genre: "Pop", duration: "1 hour 1 minute",  price: formatNumber(15.10),
                tracks: [
                        {trackCode: 1, trackName: "One"},
                        {trackCode: 2, trackName: "I'm a Mess"},
                        {trackCode: 3, trackName: "Sing"},
                        {trackCode: 4, trackName: "Don't"},
                        {trackCode: 5, trackName: "Nina"},
                        {trackCode: 6, trackName: "Photograph"},
                        {trackCode: 7, trackName: "Bloodstream"},
                        {trackCode: 8, trackName: "Tenerife Sea"},
                        {trackCode: 9, trackName: "Runaway"},
                        {trackCode: 10, trackName: "The Man"},
                        {trackCode: 11, trackName: "Thinking out Loud"},
                        {trackCode: 12, trackName: "Afire Love"},
                        {trackCode: 13, trackName: "Take It Back"},
                        {trackCode: 14, trackName: "Shirtsleeves"},
                        {trackCode: 15, trackName: "Even My Dad Does Sometimes"},
                        {trackCode: 16, trackName: "I See Fire"}
                    ]
                },
            ]
        },

        {
            picture: "images/artists/Eminem.jpg", code: "Eminem", name: "Eminem", genres: "hip-hop", description: `Marshall Bruce Mathers III, known professionally as Eminem, is an American rapper, songwriter,
         and record producer. Eminem is among the best-selling music artists of all time, with estimated worldwide sales of over 220 million records.  He is consistently cited as
          one of the greatest and most influential artists in any genre.`,
            albums: [
                {albumName: "Revival", cover: "images/EminemAlbums/Revival.png", numTracks: 18, albumCode: "Revival", year: 2017, genre: "Hip-hop", duration: "1 hour 17 minutes", price: formatNumber(9.99),
                tracks: [
                        {trackCode: 1, trackName: "Walk On Water"},
                        {trackCode: 2, trackName: "Believe"},
                        {trackCode: 3, trackName: "Chloraseptic "},
                        {trackCode: 4, trackName: "Untouchable"},
                        {trackCode: 5, trackName: "River"},
                        {trackCode: 6, trackName: "Remind Me"},
                        {trackCode: 7, trackName: "Revival"},
                        {trackCode: 8, trackName: "Like Home"},
                        {trackCode: 9, trackName: "Bad Husband"},
                        {trackCode: 10, trackName: "Tragic Endings"},
                        {trackCode: 11, trackName: "Framed"},
                        {trackCode: 12, trackName: "Nowhere Fast"},
                        {trackCode: 13, trackName: "Heat"},
                        {trackCode: 14, trackName: "Offended"},
                        {trackCode: 15, trackName: "Need Me"},
                        {trackCode: 16, trackName: "In Your Head"},
                        {trackCode: 17, trackName: "Castle"},
                        {trackCode: 18, trackName: "Arose"}
                    ]
                },
                {albumName: "Recovery", cover: "images/EminemAlbums/Recovery.jpg", numTracks: 17, albumCode: "Recovery", year: 2010, genre: "Hip-hop", duration: "1 hour 17 minutes", price: formatNumber(12.43),
                tracks: [
                        {trackCode: 1, trackName: "Cold Wind Blows"},
                        {trackCode: 2, trackName: "Talkin’ 2 Myself"},
                        {trackCode: 3, trackName: "On Fire"},
                        {trackCode: 4, trackName: "Won't Back Down"},
                        {trackCode: 5, trackName: "W.T.P."},
                        {trackCode: 6, trackName: "Going Through Changes"},
                        {trackCode: 7, trackName: "Not Afraid"},
                        {trackCode: 8, trackName: "Seduction"},
                        {trackCode: 9, trackName: "No Love"},
                        {trackCode: 10, trackName: "Space Bound"},
                        {trackCode: 11, trackName: "Cinderella Man"},
                        {trackCode: 12, trackName: "25 To Life"},
                        {trackCode: 13, trackName: "So Bad"},
                        {trackCode: 14, trackName: "Almost Famous"},
                        {trackCode: 15, trackName: "Love The Way You Lie"},
                        {trackCode: 16, trackName: "You’re Never Over"},
                        {trackCode: 17, trackName: "Untitled"}
                    ]
                }
            ]
        },

        {
            picture: "images/artists/GreenDay.jpg", code: "GreenDay", name: "Green Day", genres: "pop rock", description: `Green Day is an American rock band formed in the East Bay of California in 1987 by lead vocalist and guitarist 
        Billie Joe Armstrong and bassist and backing vocalist Mike Dirnt. Green Day was originally part of the late-'80s/early-'90s punk scene at the 924 Gilman Street club in Berkeley, California.
        The band's early releases were with the independent record label Lookout! Records. `,
            albums: [
                {albumName: "Revolution Radio", cover: "images/GreenDayAlbums/RevolutionRadio.jpg", numTracks: 12, albumCode: "RevolutionRadio", year: 2016, genre: "Pop punk / Punk rock", duration: "44 minutes", price: formatNumber(13.97),
                tracks: [
                        {trackCode: 1, trackName: "Somewhere Now"},
                        {trackCode: 2, trackName: "Bang Bang"},
                        {trackCode: 3, trackName: "Revolution Radio"},
                        {trackCode: 4, trackName: "Say Goodbye"},
                        {trackCode: 5, trackName: "Outlaws"},
                        {trackCode: 6, trackName: "Bouncing off the Wall"},
                        {trackCode: 7, trackName: "Still Breathing"},
                        {trackCode: 8, trackName: "Youngblood"},
                        {trackCode: 9, trackName: "Too Dumb to Die"},
                        {trackCode: 10, trackName: "Troubled Times"},
                        {trackCode: 11, trackName: "Forever Now"},
                        {trackCode: 12, trackName: "Ordinary World"}
                    ]
                },
                {albumName: "21st Century Breakdown", cover: "images/GreenDayAlbums/21stCenturyBreakdown.jpg", numTracks: 18, albumCode: "21stCenturyBreakdown", year: 2009, genre: "Pop punk / Punk rock", duration: "1 hour 9 minutes", price: formatNumber(10.49),
                tracks: [
                        {trackCode: 1, trackName: "Song of the Century"},
                        {trackCode: 2, trackName: "21st Century Breakdown"},
                        {trackCode: 3, trackName: "Know Your Enemy"},
                        {trackCode: 4, trackName: "¡Viva La Gloria!"},
                        {trackCode: 5, trackName: "Before the Lobotomy"},
                        {trackCode: 6, trackName: "Christian's Inferno"},
                        {trackCode: 7, trackName: "Last Night on Earth"},
                        {trackCode: 8, trackName: "East Jesus Nowhere"},
                        {trackCode: 9, trackName: "Peacemaker"},
                        {trackCode: 10, trackName: "Last of the American Girls"},
                        {trackCode: 11, trackName: "Murder City"},
                        {trackCode: 12, trackName: "¿Viva La Gloria? (Little Girl)"},
                        {trackCode: 13, trackName: "Restless Heart Syndrome"},
                        {trackCode: 14, trackName: "Horseshoes and Handgrenades"},
                        {trackCode: 15, trackName: "The Static Age"},
                        {trackCode: 16, trackName: "21 Guns"},
                        {trackCode: 17, trackName: "American Eulogy: Mass Hysteria / Modern World"},
                        {trackCode: 18, trackName: "See the Light"}
                    ]
                },
                {albumName: "American Idiot", cover: "images/GreenDayAlbums/AmericanIdiot.png", numTracks: 9, albumCode: "AmericanIdiot", year: 2004, genre: "Pop punk / Punk rock", duration: "57 minutes", price: formatNumber(9.09),
                tracks: [
                        {trackCode: 1, trackName: "American Idiot"},
                        {trackCode: 2, trackName: "jesus of Suburbia"},
                        {trackCode: 3, trackName: "Holiday / Boulevard of Broken Dreams"},
                        {trackCode: 4, trackName: "Are We the Waiting / St. Jimmy"},
                        {trackCode: 5, trackName: "Give Me Novacaine / She's a Rebel"},
                        {trackCode: 6, trackName: "Extraordinary Girl / Letterbomb"},
                        {trackCode: 7, trackName: "Wake Me up When September Ends"},
                        {trackCode: 8, trackName: "Homecoming"},
                        {trackCode: 9, trackName: "Whatsername"}
                    ]
                }
            ]
        },

        {
            picture: "images/artists/HarryStyles.jpg", code: "HarryStyles", name: "Harry Styles", genres: "pop rock", description: `Harry Edward Styles (born 1 February 1994) is an English singer, songwriter and actor. 
        His musical career began in 2010 as a solo contestant on the British music competition series The X Factor. Following his elimination early on, he was brought back to join the boy band One Direction, 
        which went on to become one of the best-selling boy bands of all time.`,
            albums: [
                {albumName: "Fine Line", cover: "images/HarryStylesAlbums/FineLine.jpg", numTracks: 12, albumCode: "FineLine", year: 2019, genre: "Pop rock", duration: "46 minutes", price: formatNumber(12.62),
                tracks: [
                        {trackCode: 1, trackName: "Golden"},
                        {trackCode: 2, trackName: "Watermelon Sugar"},
                        {trackCode: 3, trackName: "Adore You"},
                        {trackCode: 4, trackName: "Lights Up"},
                        {trackCode: 5, trackName: "Cherry"},
                        {trackCode: 6, trackName: "Falling"},
                        {trackCode: 7, trackName: "To Be So Lonely"},
                        {trackCode: 8, trackName: "She"},
                        {trackCode: 9, trackName: "Sunflower, Vol. 6"},
                        {trackCode: 10, trackName: "Canyon Moon"},
                        {trackCode: 11, trackName: "Treat People With Kindness"},
                        {trackCode: 12, trackName: "Fine Line"}
                    ]
                },
                {albumName: "Harry Styles", cover: "images/HarryStylesAlbums/HarryStyles.png", numTracks: 10, albumCode: "HarryStyles", year: 2017, genre: "Pop rock", duration: "40 minutes", price: formatNumber(7.70),
                tracks: [
                        {trackCode: 1, trackName: "Meet Me in the Hallway"},
                        {trackCode: 2, trackName: "Sign of the Times"},
                        {trackCode: 3, trackName: "Carolina"},
                        {trackCode: 4, trackName: "Two Ghosts"},
                        {trackCode: 5, trackName: "Sweet Creature"},
                        {trackCode: 6, trackName: "Only Angel"},
                        {trackCode: 7, trackName: "Kiwi"},
                        {trackCode: 8, trackName: "Ever Since New York"},
                        {trackCode: 9, trackName: "Woman"},
                        {trackCode: 10, trackName: "From the Dining Table"}
                    ]
                }
            ]
        },

        {
            picture: "images/artists/ImagineDragons.jpg", code: "ImagineDragons", name: "Imagine Dragons", genres: "pop rock", description: `Imagine Dragons is an American pop rock band from Las Vegas, Nevada, consisting of lead singer Dan Reynolds, 
        lead guitarist Wayne Sermon, bassist Ben McKee, and drummer Daniel Platzman. The band first gained exposure with the release of their single "It's Time", followed by their award-winning debut studio album
        Night Visions, which resulted in the chart-topping singles "Radioactive" and "Demons".`,
            albums: [
                {albumName: "Origins", cover: "images/ImagineDragonsAlbums/Origins.png", numTracks: 12, albumCode: "Origins", year: 2018, genre: "Pop", duration: "40 minutes", price: formatNumber(12.52),
                tracks: [
                        {trackCode: 1, trackName: "Natural"},
                        {trackCode: 2, trackName: "Boomerang"},
                        {trackCode: 3, trackName: "Boomerang"},
                        {trackCode: 4, trackName: "Cool Out"},
                        {trackCode: 5, trackName: "Bad Liar"},
                        {trackCode: 6, trackName: "West Coast"},
                        {trackCode: 7, trackName: "Zero"},
                        {trackCode: 8, trackName: "Bullet In A Gun"},
                        {trackCode: 9, trackName: "Digital"},
                        {trackCode: 10, trackName: "Only"},
                        {trackCode: 11, trackName: "Stuck"},
                        {trackCode: 12, trackName: "Love"}
                    ]
                },
                {albumName: "Evolve", cover: "images/ImagineDragonsAlbums/Evolve.jpg", numTracks: 12, albumCode: "Evolve", year: 2017, genre: "Pop rock", duration: "43 minutes", price: formatNumber(9.49),
                tracks: [
                        {trackCode: 1, trackName: "Next To Me"},
                        {trackCode: 2, trackName: "I Don’t Know Why"},
                        {trackCode: 3, trackName: "Whatever It Takes"},
                        {trackCode: 4, trackName: "Believer"},
                        {trackCode: 5, trackName: "Walking The Wire"},
                        {trackCode: 6, trackName: "Rise Up"},
                        {trackCode: 7, trackName: "I’ll Make It Up To You"},
                        {trackCode: 8, trackName: "Yesterday"},
                        {trackCode: 9, trackName: "Mouth Of The River"},
                        {trackCode: 10, trackName: "Thunder"},
                        {trackCode: 11, trackName: "Start Over"},
                        {trackCode: 12, trackName: "Dancing In The Dark"}
                    ]
                },
                {albumName: "Smoke + Mirrors", cover: "images/ImagineDragonsAlbums/SmokeAndMirrors.png", numTracks: 13, albumCode: "SmokeAndMirrors", year: 2015, genre: "Pop rock", duration: "50 minutes", price: formatNumber(11.49),
                tracks: [
                        {trackCode: 1, trackName: "Shots"},
                        {trackCode: 2, trackName: "Gold"},
                        {trackCode: 3, trackName: "Smoke And Mirrors"},
                        {trackCode: 4, trackName: "I’m So Sorry"},
                        {trackCode: 5, trackName: "I Bet My Life"},
                        {trackCode: 6, trackName: "Polaroid"},
                        {trackCode: 7, trackName: "Friction"},
                        {trackCode: 8, trackName: "It Comes Back To You"},
                        {trackCode: 9, trackName: "Dream"},
                        {trackCode: 10, trackName: "Trouble"},
                        {trackCode: 11, trackName: "Summer"},
                        {trackCode: 12, trackName: "Hopeless Opus"},
                        {trackCode: 13, trackName: "The Fall"}
                    ]
                },
                {albumName: "Night Visions", cover: "images/ImagineDragonsAlbums/NightVisions.jpg", numTracks: 13, albumCode: "NightVisions", year: 2012, genre: "Pop rock", duration: "52 minutes", price: formatNumber(6.97),
                tracks: [
                        {trackCode: 1, trackName: "Radioactive"},
                        {trackCode: 2, trackName: "Tiptoe"},
                        {trackCode: 3, trackName: "It's Time"},
                        {trackCode: 4, trackName: "Demons"},
                        {trackCode: 5, trackName: "On Top Of The World"},
                        {trackCode: 6, trackName: "Amsterdam"},
                        {trackCode: 7, trackName: "Hear Me"},
                        {trackCode: 8, trackName: "Every Night"},
                        {trackCode: 9, trackName: "Bleeding Out"},
                        {trackCode: 10, trackName: "Underdog"},
                        {trackCode: 11, trackName: "Nothing Left To Say / Rocks"},
                        {trackCode: 12, trackName: "Cha-Ching (Till We Grow Older)"},
                        {trackCode: 13, trackName: "Working Man"}
                    ]
                }
            ]
        },

        {
            picture: "images/artists/IronMaiden.jpg", code: "IronMaiden", name: "Iron Maiden", genres: "metal", description: `Iron Maiden are an English heavy metal band formed in Leyton, East London, in 1975 by bassist and primary songwriter Steve Harris. 
        The band's discography has grown to 40 albums, including 16 studio albums, 13 live albums, four EPs, and seven compilations. They have also released 47 singles and 20 video albums.`,
            albums: [
                {albumName: "Senjutsu", cover: "images/IronMaidenAlbums/Senjutsu.jpg", numTracks: 10, albumCode: "Senjutsu", year: 2021, genre: "Heavy metal", duration: "1 hour 21 minutes", price: formatNumber(12.49),
                tracks: [
                        {trackCode: 1, trackName: "Senjutsu"},
                        {trackCode: 2, trackName: "Stratego"},
                        {trackCode: 3, trackName: "The Writing on the Wall"},
                        {trackCode: 4, trackName: "Lost in a Lost World"},
                        {trackCode: 5, trackName: "Days of Future Past"},
                        {trackCode: 6, trackName: "The Time Machine"},
                        {trackCode: 7, trackName: "Darkest Hour"},
                        {trackCode: 8, trackName: "Death of the Celts"},
                        {trackCode: 9, trackName: "The Parchment"},
                        {trackCode: 10, trackName: "Hell on Earth"}
                    ]
                },
                {albumName: "The Book Of Souls", cover: "images/IronMaidenAlbums/TheBookOfSouls.png", numTracks: 11, albumCode: "TheBookOfSouls", year: 2015, genre: "Heavy metal", duration: "1 hour 32 minutes", price: formatNumber(17.36),
                tracks: [
                        {trackCode: 1, trackName: "If Eternity Should Fail"},
                        {trackCode: 2, trackName: "Speed of Light"},
                        {trackCode: 3, trackName: "The Great Unknown"},
                        {trackCode: 4, trackName: "The Red and the Black"},
                        {trackCode: 5, trackName: "When the River Runs Deep"},
                        {trackCode: 6, trackName: "The Book of Souls"},
                        {trackCode: 7, trackName: "Death or Glory"},
                        {trackCode: 8, trackName: "Shadows of the Valley"},
                        {trackCode: 9, trackName: "Tears of a Clown"},
                        {trackCode: 10, trackName: "The Man of Sorrows"},
                        {trackCode: 11, trackName: "Empire of the Clouds"}
                    ]
                },
                {albumName: "The Final Frontier", cover: "images/IronMaidenAlbums/TheFinalFrontier.jpg", numTracks: 10, albumCode: "TheFinalFrontier", year: 2010, genre: "Heavy metal", duration: "1 hour 16 minutes", price: formatNumber(18.20),
                tracks: [
                        {trackCode: 1, trackName: "Satellite 15.....The Final Frontier"},
                        {trackCode: 2, trackName: "El Dorado"},
                        {trackCode: 3, trackName: "Mother of Mercy"},
                        {trackCode: 4, trackName: "Coming Home"},
                        {trackCode: 5, trackName: "The Alchemist"},
                        {trackCode: 6, trackName: "Isle of Avalon"},
                        {trackCode: 7, trackName: "Starblind"},
                        {trackCode: 8, trackName: "The Talisman"},
                        {trackCode: 9, trackName: "The Man Who Would Be King"},
                        {trackCode: 10, trackName: "When the Wild Wind Blows"}
                    ]
                },
                {albumName: "A Matter Of Life And Death", cover: "images/IronMaidenAlbums/AMatterOfLifeAndDeath.jpg", numTracks: 10, albumCode: "AMatterOfLifeAndDeath", year: 2006, genre: "Heavy metal", duration: "1 hour 12 minutes", price: formatNumber(16.99),
                tracks: [
                        {trackCode: 1, trackName: "Different World"},
                        {trackCode: 2, trackName: "These Colours Don't Run"},
                        {trackCode: 3, trackName: "Brighter Than a Thousand Suns"},
                        {trackCode: 4, trackName: "The Pilgrim"},
                        {trackCode: 5, trackName: "The Longest Day"},
                        {trackCode: 6, trackName: "Out of the Shadows"},
                        {trackCode: 7, trackName: "The Reincarnation of Benjamin Breeg"},
                        {trackCode: 8, trackName: "For the Greater Good of God"},
                        {trackCode: 9, trackName: "Lord of Light"},
                        {trackCode: 10, trackName: "The Legacy"}
                    ]
                },
                {albumName: "Dance Of Death", cover: "images/IronMaidenAlbums/DanceOfDeath.jpg", numTracks: 11, albumCode: "DanceOfDeath", year: 2003, genre: "Heavy metal", duration: "1 hour 8 minutes", price: formatNumber(9.49),
                tracks: [
                        {trackCode: 1, trackName: "Wildest Dreams"},
                        {trackCode: 2, trackName: "Rainmaker"},
                        {trackCode: 3, trackName: "No More Lies"},
                        {trackCode: 4, trackName: "Montségur"},
                        {trackCode: 5, trackName: "Dance of Death"},
                        {trackCode: 6, trackName: "Gates of Tomorrow"},
                        {trackCode: 7, trackName: "New Frontier"},
                        {trackCode: 8, trackName: "Paschendale"},
                        {trackCode: 9, trackName: "Face in the Sand"},
                        {trackCode: 10, trackName: "Age of Innocence"},
                        {trackCode: 11, trackName: "Journeyman"}
                    ]
                },
                {albumName: "Brave New World", cover: "images/IronMaidenAlbums/BraveNewWorld.jpg", numTracks: 10, albumCode: "BraveNewWorld", year: 2000, genre: "Heavy metal", duration: "1 hour 7 minutes", price: formatNumber(12.72),
                tracks: [
                        {trackCode: 1, trackName: "The Wicker Man"},
                        {trackCode: 2, trackName: "Ghost of the Navigator"},
                        {trackCode: 3, trackName: "Brave New World"},
                        {trackCode: 4, trackName: "Blood Brothers"},
                        {trackCode: 5, trackName: "The Mercenary"},
                        {trackCode: 6, trackName: "Dream of Mirrors"},
                        {trackCode: 7, trackName: "The Fallen Ange  "},
                        {trackCode: 8, trackName: "The Nomad"},
                        {trackCode: 9, trackName: "Out of the Silent Planet"},
                        {trackCode: 10, trackName: "The Thin Line Between Love and Hate"}
                    ]
                },
                {albumName: "Fear Of The Dark", cover: "images/IronMaidenAlbums/FearOfTheDark.jpg", numTracks: 12, albumCode: "FearOfTheDark", year: 1992, genre: "Heavy metal", duration: "58 minutes", price: formatNumber(13.99),
                tracks: [
                        {trackCode: 1, trackName: "Be Quick or Be Dead"},
                        {trackCode: 2, trackName: "From Here to Eternity"},
                        {trackCode: 3, trackName: "Afraid to Shoot Strangers"},
                        {trackCode: 4, trackName: "Fear Is the Key"},
                        {trackCode: 5, trackName: "Childhood's End"},
                        {trackCode: 5, trackName: "Wasting Love"},
                        {trackCode: 6, trackName: "The Fugitive"},
                        {trackCode: 7, trackName: "Chains of Misery"},
                        {trackCode: 8, trackName: "The Apparition"},
                        {trackCode: 9, trackName: "Judas Be My Guide"},
                        {trackCode: 10, trackName: "Weekend Warrior"},
                        {trackCode: 11, trackName: "Fear of the Dark"}
                    ]
                },
                {albumName: "No Prayer For The Dying", cover: "images/IronMaidenAlbums/NoPrayerForTheDying.jpg", numTracks: 10, albumCode: "NoPrayerForTheDying", year: 1990, genre: "Heavy metal", duration: "44 minutes", price: formatNumber(9.79),
                tracks: [
                        {trackCode: 1, trackName: "Tailgunner"},
                        {trackCode: 2, trackName: "Holy Smoke"},
                        {trackCode: 3, trackName: "No Prayer for the Dying"},
                        {trackCode: 4, trackName: "Public Enema Number One"},
                        {trackCode: 5, trackName: "Fates Warning"},
                        {trackCode: 6, trackName: "The Assassin"},
                        {trackCode: 7, trackName: "Run Silent Run Deep"},
                        {trackCode: 8, trackName: "Hooks in You"},
                        {trackCode: 9, trackName: "Bring Your Daughter... to the Slaughter"},
                        {trackCode: 10, trackName: "Mother Russia"}
                    ]
                },
                {albumName: "Seventh Son Of A Seventh Son", cover: "images/IronMaidenAlbums/SeventhSonOfASeventhSon.jpg", numTracks: 8, albumCode: "SeventhSonOfASeventhSon", year: 1998, genre: "Heavy metal", duration: "44 minutes", price: formatNumber(9.79),
                tracks: [
                        {trackCode: 1, trackName: "Moonchild"},
                        {trackCode: 2, trackName: "Infinite Dreams"},
                        {trackCode: 3, trackName: "Can I Play with Madness"},
                        {trackCode: 4, trackName: "The Evil That Men Do"},
                        {trackCode: 5, trackName: "Seventh Son of a Seventh Son"},
                        {trackCode: 6, trackName: "The Prophecy"},
                        {trackCode: 7, trackName: "The Clairvoyant"},
                        {trackCode: 8, trackName: "Only the Good Die Young"}
                    ]
                },
                {albumName: "Somewhere In Time", cover: "images/IronMaidenAlbums/SomewhereInTime.jpg", numTracks: 8, albumCode: "SomewhereInTime", year: 1986, genre: "Heavy metal", duration: "51 minutes", price: formatNumber(10.19),
                tracks: [
                        {trackCode: 1, trackName: "Caught Somewhere in Time"},
                        {trackCode: 2, trackName: "Wasted Years"},
                        {trackCode: 3, trackName: "Sea of Madness"},
                        {trackCode: 4, trackName: "Heaven Can Wait"},
                        {trackCode: 5, trackName: "The Loneliness of the Long Distance Runner"},
                        {trackCode: 6, trackName: "Stranger in a Strange Land"},
                        {trackCode: 7, trackName: "Deja Vu"},
                        {trackCode: 8, trackName: "Alexander the Great (356-323 B.C.)"}
                    ]
                },
                {albumName: "Powerslave", cover: "images/IronMaidenAlbums/Powerslave.jpg", numTracks: 8, albumCode: "Powerslave", year: 1984, genre: "Heavy metal", duration: "51 minutes", price: formatNumber(9.79),
                tracks: [
                        {trackCode: 1, trackName: "Aces High"},
                        {trackCode: 2, trackName: "2 Minutes to Midnight"},
                        {trackCode: 3, trackName: "Losfer Words (Big 'Orra)"},
                        {trackCode: 4, trackName: "Flash of the Blade"},
                        {trackCode: 5, trackName: "The Duellists"},
                        {trackCode: 6, trackName: "Back in the Village"},
                        {trackCode: 7, trackName: "Powerslave"},
                        {trackCode: 8, trackName: "Rime of the Ancient Mariner"}
                    ]
                },
                {albumName: "Piece Of Mind", cover: "images/IronMaidenAlbums/PieceOfMind.jpg", numTracks: 9, albumCode: "PieceOfMind", year: 1983, genre: "Heavy metal", duration: "46 minutes", price: formatNumber(16.41),
                tracks: [
                        {trackCode: 1, trackName: "Where Eagles Dare"},
                        {trackCode: 2, trackName: "Revelations"},
                        {trackCode: 3, trackName: "Flight of Icarus"},
                        {trackCode: 4, trackName: "Die with Your Boots On"},
                        {trackCode: 5, trackName: "The Trooper"},
                        {trackCode: 6, trackName: "Still Life"},
                        {trackCode: 7, trackName: "Quest for Fire"},
                        {trackCode: 8, trackName: "Sun and Steel"},
                        {trackCode: 9, trackName: "To Tame a Land"}
                    ]
                },
                {albumName: "The Number Of The Beast", cover: "images/IronMaidenAlbums/TheNumberOfTheBeast.jpg", numTracks: 8, albumCode: "TheNumberOfTheBeast", year: 1982, genre: "Heavy metal", duration: "40 minutes", price: formatNumber(13.98),
                tracks: [
                        {trackCode: 1, trackName: "Invaders"},
                        {trackCode: 2, trackName: "Children of the Damned"},
                        {trackCode: 3, trackName: "The Prisoner"},
                        {trackCode: 4, trackName: "22 Acacia Avenue"},
                        {trackCode: 5, trackName: "The Number of the Beast"},
                        {trackCode: 6, trackName: "Run to the Hills"},
                        {trackCode: 7, trackName: "Gangland"},
                        {trackCode: 8, trackName: "Hallowed Be Thy Name"}
                    ]
                },
                {albumName: "Killers", cover: "images/IronMaidenAlbums/Killers.jpg", numTracks: 10, albumCode: "Killers", year: 1981, genre: "Heavy metal", duration: "38 minutes", price: formatNumber(12.25),
                tracks: [
                        {trackCode: 1, trackName: "The Ides of March"},
                        {trackCode: 2, trackName: "Wrathchild"},
                        {trackCode: 3, trackName: "Murders in the Rue Morgue"},
                        {trackCode: 4, trackName: "Another Life"},
                        {trackCode: 5, trackName: "Genghis Khan"},
                        {trackCode: 6, trackName: "Innocent Exile"},
                        {trackCode: 7, trackName: "Killers"},
                        {trackCode: 8, trackName: "Prodigal Son"},
                        {trackCode: 9, trackName: "Purgatory"},
                        {trackCode: 10, trackName: "Drifter"}
                    ]
                },
                {albumName: "Iron Maiden", cover: "images/IronMaidenAlbums/IronMaiden.jpg", numTracks: 8, albumCode: "IronMaiden", year: 1980, genre: "Heavy metal", duration: "37 minutes", price: formatNumber(9.79),
                tracks: [
                        {trackCode: 1, trackName: "Prowler"},
                        {trackCode: 2, trackName: "Remember Tomorrow"},
                        {trackCode: 3, trackName: "Running Free"},
                        {trackCode: 4, trackName: "Phantom of the Opera"},
                        {trackCode: 5, trackName: "Transylvania"},
                        {trackCode: 6, trackName: "Strange World"},
                        {trackCode: 7, trackName: "Charlotte the Harlot"},
                        {trackCode: 8, trackName: "Iron Maiden"}
                    ]
                }
            ]
        },

        {picture: "images/artists/JudasPriest.jpg", code: "JudasPriest", name: "Judas Priest", genres: "metal", description: `Judas Priest are an English heavy metal band formed in Birmingham in 1969. They have sold over 50 million copies of their albums, 
        and are frequently ranked as one of the greatest metal bands of all time. Despite an innovative and pioneering body of work in the latter half of the 1970s, the band had struggled with indifferent record production and
         a lack of major commercial success until 1980, when they rose to commercial success with the album British Steel. `,
            albums: [
                {albumName: "Firepower", cover: "images/JudasPriestAlbums/Firepower.jpg", numTracks: 14, albumCode: "Firepower", year: 2018, genre: "Heavy metal", duration: "58 minutes", price: formatNumber(10.99),
                tracks: [
                        {trackCode: 1, trackName: "Firepower"},
                        {trackCode: 2, trackName: "Lightning Strike"},
                        {trackCode: 3, trackName: "Evil Never Dies"},
                        {trackCode: 4, trackName: "Never The Heroes"},
                        {trackCode: 5, trackName: "Necromancer"},
                        {trackCode: 6, trackName: "Children of the Sun"},
                        {trackCode: 7, trackName: "Guardians"},
                        {trackCode: 8, trackName: "Rising From Ruins"},
                        {trackCode: 9, trackName: "Flame Thrower"},
                        {trackCode: 10, trackName: "Spectre"},
                        {trackCode: 11, trackName: "Traitors Gate"},
                        {trackCode: 12, trackName: "No Surrender"},
                        {trackCode: 13, trackName: "Lone Wolf"},
                        {trackCode: 14, trackName: "Sea of Red"}
                    ]
                },
                {albumName: "Redeemer Of Souls", cover: "images/JudasPriestAlbums/RedeemerOfSouls.png", numTracks: 18, albumCode: "RedeemerOfSouls", year: 2014, genre: "Heavy metal", duration: "1 hour 23 minutes", price: formatNumber(7.27),
                tracks: [
                        {trackCode: 1, trackName: "Dragonaut"},
                        {trackCode: 2, trackName: "Redeemer of Souls"},
                        {trackCode: 3, trackName: "Halls of Valhalla"},
                        {trackCode: 4, trackName: "Sword of Damocles"},
                        {trackCode: 5, trackName: "March of the Damned"},
                        {trackCode: 6, trackName: "Down in Flames"},
                        {trackCode: 7, trackName: "Hell & Back"},
                        {trackCode: 8, trackName: "Cold Blooded"},
                        {trackCode: 9, trackName: "Metalizer"},
                        {trackCode: 10, trackName: "Crossfire"},
                        {trackCode: 11, trackName: "Secrets of the Dead"},
                        {trackCode: 12, trackName: "Battle Cry"},
                        {trackCode: 13, trackName: "Beginning of the End"},
                        {trackCode: 14, trackName: "Snakebite"},
                        {trackCode: 15, trackName: "Tears of Blood"},
                        {trackCode: 16, trackName: "Creatures"},
                        {trackCode: 17, trackName: "Bring It On"},
                        {trackCode: 18, trackName: "Never Forget"}
                    ]
                },
                {albumName: "Painkiller", cover: "images/JudasPriestAlbums/Painkiller.jpg", numTracks: 11, albumCode: "Painkiller", year: 1990, genre: "Heavy metal", duration: "55 minutes", price: formatNumber(7.19),
                tracks: [
                        {trackCode: 1, trackName: "Painkiller"},
                        {trackCode: 2, trackName: "Hell Patrol"},
                        {trackCode: 3, trackName: "All Guns Blazing"},
                        {trackCode: 4, trackName: "Leather Rebel"},
                        {trackCode: 5, trackName: "Metal Meltdown"},
                        {trackCode: 6, trackName: "Night Crawler"},
                        {trackCode: 7, trackName: "Between the Hammer & the Anvil"},
                        {trackCode: 8, trackName: "A Touch of Evil"},
                        {trackCode: 9, trackName: "Battle Hymn"},
                        {trackCode: 10, trackName: "One Shot at Glory"},
                        {trackCode: 11, trackName: "Living Bad Dreams"}
                    ]
                },
                {albumName: "Screaming For Vengeance", cover: "images/JudasPriestAlbums/ScreamingForVengeance.jpg", numTracks: 11, albumCode: "ScreamingForVengeance", year: 1982, genre: "Heavy metal", duration: `50 minutes`, price: formatNumber(13.80),
                tracks: [
                        {trackCode: 1, trackName: "The Hellion"},
                        {trackCode: 2, trackName: "Electric Eye"},
                        {trackCode: 3, trackName: "Riding On The Wind"},
                        {trackCode: 4, trackName: "Bloodstone"},
                        {trackCode: 5, trackName: "(Take these)Chains"},
                        {trackCode: 6, trackName: "Pain And Pleasure"},
                        {trackCode: 7, trackName: "Screaming For Vengeance"},
                        {trackCode: 8, trackName: "You've Got Another Thing Coming"},
                        {trackCode: 9, trackName: "Fever"},
                        {trackCode: 10, trackName: "Devil's Child"},
                        {trackCode: 11, trackName: "Prisoner Of Your Eyes"}
                ]
                },
                {albumName: "British Steel", cover: "images/JudasPriestAlbums/BritishSteel.jpg", numTracks: 10, albumCode: "BritishSteel", year: 1980, genre: "Heavy metal", duration: "44 minutes", price: formatNumber(7.66),
                tracks: [
                        {trackCode: 1, trackName: "Rapid Fire"},
                        {trackCode: 2, trackName: "Metal Gods"},
                        {trackCode: 3, trackName: "Breaking the Law"},
                        {trackCode: 4, trackName: "Grinder"},
                        {trackCode: 5, trackName: "United"},
                        {trackCode: 6, trackName: "You Don't Have to Be Old to Be Wise"},
                        {trackCode: 7, trackName: "Living After Midnight"},
                        {trackCode: 8, trackName: "The Rage"},
                        {trackCode: 9, trackName: "Steeler"},
                        {trackCode: 10, trackName: "Red, White & Blue"}
                    ]
                }
            ]
        },

        {picture: "images/artists/LedZeppelin.jpg", code: "LedZeppelin", name: "Led Zeppelin", genres: "rock", description: `Led Zeppelin were an English rock band formed in London in 1968. The group consisted of vocalist Robert Plant, guitarist Jimmy Page, 
        bassist/keyboardist John Paul Jones, and drummer John Bonham. With a heavy, guitar-driven sound, they are cited as one of the progenitors of hard rock and heavy metal, although their style drew from a variety of influences,
         including blues and folk music. `,
            albums: [
                {albumName: "Presence", cover: "images/LedZeppelinAlbums/Presence.jpg", numTracks: 7, albumCode: "Presence", year: 1976, genre: "Hard rock / Heavy metal / Blues rock", duration: "44 minutes", price: formatNumber(14.88),
                tracks: [
                        {trackCode: 1, trackName: "Achilles Last Stand"},
                        {trackCode: 1, trackName: "For Your Life"},
                        {trackCode: 1, trackName: "Royal Orleans"},
                        {trackCode: 1, trackName: "Nobody's Fault but Mine"},
                        {trackCode: 1, trackName: "Candy Store Rock"},
                        {trackCode: 1, trackName: "Hots on for Nowhere"},
                        {trackCode: 1, trackName: "Tea for One"}
                    ]
                },
                {albumName: "Led Zeppelin IV", cover: "images/LedZeppelinAlbums/LedZeppelin4.jpg", numTracks: 8,albumCode: "LenZeppelin4", year: 1971, genre: "Hard rock / Heavy metal / Blues rock / Rock and roll", duration: "42 minutes", price: formatNumber(9),
                tracks: [
                        {trackCode: 1, trackName: "Black Dog"},
                        {trackCode: 2, trackName: "Rock and Roll"},
                        {trackCode: 3, trackName: "The Battle of Evermore"},
                        {trackCode: 4, trackName: "Stairway to Heaven"},
                        {trackCode: 5, trackName: "Misty Mountain Hop"},
                        {trackCode: 6, trackName: "Four Sticks"},
                        {trackCode: 7, trackName: "Going to California"},
                        {trackCode: 8, trackName: "When the Levee Breaks"}
                    ]
                },
                {albumName: "Led Zeppelin III", cover: "images/LedZeppelinAlbums/LedZeppelin3.png", numTracks: 10, albumCode: "LedZeppelin3", year: 1970, genre: "Blues rock", duration: "43 minutes", price: formatNumber(15.39),
                tracks: [
                        {trackCode: 1, trackName: "Immigrant Song"},
                        {trackCode: 2, trackName: "Friends"},
                        {trackCode: 3, trackName: "Celebration Day"},
                        {trackCode: 4, trackName: "Since I've Been Loving You"},
                        {trackCode: 5, trackName: "Out on the Tiles"},
                        {trackCode: 6, trackName: "Gallows Pole"},
                        {trackCode: 7, trackName: "Tangerine"},
                        {trackCode: 8, trackName: "That's the Way"},
                        {trackCode: 9, trackName: "Bron-Y-Aur Stomp"},
                        {trackCode: 10, trackName: "Hats off To (Roy) Harper"}
                    ]
                },
                {albumName: "Led Zeppelin II", cover: "images/LedZeppelinAlbums/LedZeppelin2.jpg", numTracks: 9, albumCode: "LedZeppelin2", year: 1969, genre: "Hard rock / Heavy metal / Blues rock", duration: "1 hour 14 minutes", price: formatNumber(9.6),
                tracks: [
                        {trackCode: 1, trackName: "Whole Lotta Love"},
                        {trackCode: 2, trackName: "What Is and What Should Never Be"},
                        {trackCode: 3, trackName: "The Lemon Song"},
                        {trackCode: 4, trackName: "Thank You"},
                        {trackCode: 5, trackName: "Heartbreaker"},
                        {trackCode: 6, trackName: "Living Loving Maid (She's Just a Woman)"},
                        {trackCode: 7, trackName: "Ramble On"},
                        {trackCode: 8, trackName: "Moby Dick"},
                        {trackCode: 9, trackName: "Bring It on Home"}
                    ]
                },
                {albumName: "Led Zeppelin", cover: "images/LedZeppelinAlbums/LedZeppelin.png", numTracks: 9, albumCode: "LedZeppelin", year: 1969, genre: "Hard rock / Blues rock", duration: "44 minutes", price: formatNumber(12.01),
                tracks: [
                        {trackCode: 1, trackName: "Good Times Bad Times"},
                        {trackCode: 2, trackName: "be I'm Gonna Leave You "},
                        {trackCode: 3, trackName: "You Shook Me"},
                        {trackCode: 4, trackName: "Dazed and Confused"},
                        {trackCode: 5, trackName: "Your Time Is Gonna Come"},
                        {trackCode: 6, trackName: "Black Mountain Side"},
                        {trackCode: 7, trackName: "Communication Breakdown"},
                        {trackCode: 8, trackName: "I Can't Quit You Baby"},
                        {trackCode: 9, trackName: "How Many More Times"}
                    ]
                }
            ]
        },

        {picture: "images/artists/Lucent.jpg", code: "Lucent", name: "Lucent", genres: "metal", description: `Lucent is a macedonian doom rock band formed in 2018 by Sakh (Mihajlo Trajkovski) & Goran.`,
            albums: [
                {albumName: "Lucent", cover: "images/LucentAlbums/Lucent.jpg", numTracks: 10, albumCode: "Lucent", year: 2020, genre: "Heavy metal", duration: "42 minutes", price: formatNumber(8.19),
                tracks: [
                    {trackCode: 1, trackName: "Стадо"},
                    {trackCode: 2, trackName: "Избор"},
                    {trackCode: 3, trackName: "Mastodonia"},
                    {trackCode: 4, trackName: "Врисок"},
                    {trackCode: 5, trackName: "Разлика"},
                    {trackCode: 6, trackName: "Нимфа"},
                    {trackCode: 7, trackName: "Burn with pride"},
                    {trackCode: 8, trackName: "Бесилка"},
                    {trackCode: 9, trackName: "Бафометовиот знак"},
                    {trackCode: 10, trackName: " Carrion earth"}
                    ]
                }
            ]
        },

        {picture: "images/artists/Maroon5.jpg", code: "Maroon5", name: "Maroon 5", genres: "pop rock", description: `Maroon 5 is an American pop rock band from Los Angeles, California. It currently consists of lead vocalist Adam Levine, keyboardist and rhythm guitarist Jesse Carmichael,
         lead guitarist James Valentine, drummer Matt Flynn, keyboardist PJ Morton and multi-instrumentalist Sam Farrar. After self-releasing their independent album We Like Digging?, the band signed to Reprise Records and released the album The Fourth World in 1997. `,
            albums: [
                {albumName: "Red Pill Blues", cover: "images/Maroon5Albums/RedPillBlues.png", numTracks: 15, albumCode: "RedPillBlues", year: 2017, genre: "Pop", duration: "1 hour 5 minutes", price: formatNumber(9.49),
                tracks: [
                        {trackCode: 1, trackName: "Best 4 U"},
                        {trackCode: 2, trackName: "What Lovers Do"},
                        {trackCode: 3, trackName: "Wait"},
                        {trackCode: 4, trackName: "Lips on You"},
                        {trackCode: 5, trackName: "Bet My Heart"},
                        {trackCode: 6, trackName: "Help Me Out"},
                        {trackCode: 7, trackName: "Who I Am"},
                        {trackCode: 8, trackName: "Whiskey"},
                        {trackCode: 9, trackName: "Girls Like You"},
                        {trackCode: 10, trackName: "Closure"},
                        {trackCode: 11, trackName: "Denim Jacket"},
                        {trackCode: 12, trackName: "Visions"},
                        {trackCode: 13, trackName: "Plastic Rose"},
                        {trackCode: 14, trackName: "Don't Wanna Know"},
                        {trackCode: 15, trackName: "Cold"}
                    ]
                },
                {albumName: "V", cover: "images/Maroon5Albums/V.png", numTracks: 12, albumCode: "V", year: 2015, genre: "Pop / Pop rock", duration: "43 minutes", price: formatNumber(15.77),
                tracks: [
                        {trackCode: 1, trackName: "Maps"},
                        {trackCode: 2, trackName: "Animals"},
                        {trackCode: 3, trackName: "It Was Always You"},
                        {trackCode: 4, trackName: "Unkiss Me"},
                        {trackCode: 5, trackName: "Sugar"},
                        {trackCode: 6, trackName: "Leaving California"},
                        {trackCode: 7, trackName: "In Your Pocket"},
                        {trackCode: 8, trackName: "New Love"},
                        {trackCode: 9, trackName: "Coming Back For You"},
                        {trackCode: 10, trackName: "Feelings"},
                        {trackCode: 11, trackName: "My Heart Is Open"},
                        {trackCode: 12, trackName: "This Summer"}
                    ]
                },
                {albumName: "Overexposed", cover: "images/Maroon5Albums/Overexposed.png", numTracks: 13, albumCode: "Overexposed", year: 2012, genre: "Pop / Pop rock", duration: "45 minutes", price: formatNumber(7.98),
                tracks: [
                        {trackCode: 1, trackName: "One More Night"},
                        {trackCode: 2, trackName: "Payphone"},
                        {trackCode: 3, trackName: "Daylight"},
                        {trackCode: 4, trackName: "Lucky Strike"},
                        {trackCode: 5, trackName: "The Man Who Never Lied"},
                        {trackCode: 6, trackName: "Love Somebody"},
                        {trackCode: 7, trackName: "Ladykiller"},
                        {trackCode: 8, trackName: "Fortune Teller"},
                        {trackCode: 9, trackName: "Sad"},
                        {trackCode: 10, trackName: "Tickets"},
                        {trackCode: 11, trackName: "Doin’ Dirt"},
                        {trackCode: 12, trackName: "Beautiful Goodbye"},
                        {trackCode: 13, trackName: "Moves Like Jagger"}
                    ]
                },
                {albumName: "Hands All Over", cover: "images/Maroon5Albums/HandsAllOver.jpg", numTracks: 12, albumCode: "HandsAllOver", year: 2010, genre: "Pop / Pop rock", duration: "47 minutes", price: formatNumber(7.99),
                tracks: [
                    {trackCode: 1, trackName: "Misery"},
                    {trackCode: 2, trackName: "Give a Little More"},
                    {trackCode: 3, trackName: "Stutter"},
                    {trackCode: 4, trackName: "Don't Know Nothing"},
                    {trackCode: 5, trackName: "Never Gonna Leave This Bed"},
                    {trackCode: 6, trackName: "I Can't Lie"},
                    {trackCode: 7, trackName: "Hands All Over"},
                    {trackCode: 8, trackName: "How"},
                    {trackCode: 9, trackName: "Get Back in My Life"},
                    {trackCode: 10, trackName: "Just a Feeling"},
                    {trackCode: 11, trackName: "Runaway"},
                    {trackCode: 12, trackName: "Out of Goodbyes"}
                ]
                },
                {albumName: "It Won't Be Soon Before Long", cover: "images/Maroon5Albums/ItWontBeSoonBeforeLong.png", numTracks: 15, albumCode: "ItWontBeSoonBeforeLong", year: 2007, genre: "Pop rock", duration: "51 minutes", price: formatNumber(10.43),
                tracks: [
                        {trackCode: 1, trackName: "If I Never See Your Face Again"},
                        {trackCode: 2, trackName: "Makes Me Wonder"},
                        {trackCode: 3, trackName: "Little of Your Time"},
                        {trackCode: 4, trackName: "Wake Up Call"},
                        {trackCode: 5, trackName: "Won't Go Home Without You"},
                        {trackCode: 6, trackName: "Nothing Lasts Forever"},
                        {trackCode: 7, trackName: "Can't Stop"},
                        {trackCode: 8, trackName: "Goodnight Goodnight"},
                        {trackCode: 9, trackName: "Not Falling Apart"},
                        {trackCode: 10, trackName: "Kiwi"},
                        {trackCode: 11, trackName: "Better That We Break"},
                        {trackCode: 12, trackName: "Back at Your Door"},
                        {trackCode: 13, trackName: "Until You're Over Me"},
                        {trackCode: 14, trackName: "Infatuation"},
                        {trackCode: 15, trackName: "Losing My Mind"}
                    ]
                },
            ]
        },

        {picture: "images/artists/Metallica.jpg", code: "Metallica", name: "Metallica", genres: "metal", description: `Metallica is an American heavy metal band. The band was formed in 1981 in Los Angeles by vocalist/guitarist James Hetfield and drummer Lars Ulrich, and has been based in
         San Francisco for most of its career. Metallica has become one of the most influential and commercially successful rock bands in history, having sold 110 million albums worldwide while playing to millions of fans on literally all seven continents.`,
            albums: [
                {albumName: "Hardwired...To Self-Destruct", cover: "images/MetallicaAlbums/HardwiredToSelfDestruct.jpg", numTracks: 12, albumCode: "HardwiredToSelfDestruct", year: 2016, genre: "Heavy metal / Trash metal", duration: "1 hour 17 minutes", price: formatNumber(9.96),
                tracks: [
                        {trackCode: 1, trackName: "Hardwired"},
                        {trackCode: 2, trackName: "Atlas, Rise!"},
                        {trackCode: 3, trackName: "Now That We're Dead"},
                        {trackCode: 4, trackName: "Moth Into Flame"},
                        {trackCode: 5, trackName: "Dream No More"},
                        {trackCode: 6, trackName: "Halo On Fire"},
                        {trackCode: 7, trackName: "Confusion"},
                        {trackCode: 8, trackName: "ManUNkind"},
                        {trackCode: 9, trackName: "Here Comes Revenge"},
                        {trackCode: 10, trackName: "Am I Savage?"},
                        {trackCode: 11, trackName: "Murder One"},
                        {trackCode: 12, trackName: "Spit Out the Bone"}
                    ]
                },
                {albumName: "Death Magnetic", cover: "images/MetallicaAlbums/DeathMagnetic.jpg", numTracks: 10, albumCode: "DeathMagnetic", year: 2008, genre: "Heavy metal / Trash metal", duration: "1 hour 14 minutes", price: formatNumber(9.09),
                tracks: [
                        {trackCode: 1, trackName: "That Was Just Your Life"},
                        {trackCode: 2, trackName: "The End Of The Line"},
                        {trackCode: 3, trackName: "Broken, Beat & Scarred"},
                        {trackCode: 4, trackName: "The Day That Never Comes"},
                        {trackCode: 5, trackName: "All Nightmare Long"},
                        {trackCode: 6, trackName: "Cyanide"},
                        {trackCode: 7, trackName: "The Unforgiven III"},
                        {trackCode: 8, trackName: "The Judas Kiss"},
                        {trackCode: 9, trackName: "Suicide & Redemption"},
                        {trackCode: 10, trackName: "My Apocalypse"}
                    ]
                },
                {albumName: "St. Anger", cover: "images/MetallicaAlbums/StAnger.jpg", numTracks: 11, albumCode: "StAnger", year: 2003, genre: "Alternative metal", duration: "1 hour 15 minutes", price: formatNumber(19.97),
                tracks: [
                        {trackCode: 1, trackName: "Frantic"},
                        {trackCode: 2, trackName: "St. Anger"},
                        {trackCode: 3, trackName: "Some Kind Of Monster"},
                        {trackCode: 4, trackName: "Dirty Window"},
                        {trackCode: 5, trackName: "Invisible Kid"},
                        {trackCode: 6, trackName: "My World"},
                        {trackCode: 7, trackName: "Shoot Me Again"},
                        {trackCode: 8, trackName: "Sweet Amber"},
                        {trackCode: 9, trackName: "The Unnamed Feeling"},
                        {trackCode: 10, trackName: "Purify"},
                        {trackCode: 11, trackName: "All Within My Hands"}
                    ]
                },
                {albumName: "Reload", cover: "images/MetallicaAlbums/Reload.jpg", numTracks: 13, albumCode: "Reload", year: 1997, genre: "Heavy metal / Hard rock / Blues rock / Alternative metal", duration: "1 hour 16 minutes", price: formatNumber(11.98),
                tracks: [
                        {trackCode: 1, trackName: "Fuel"},
                        {trackCode: 2, trackName: "The Memory Remains"},
                        {trackCode: 3, trackName: "Devil's Dance"},
                        {trackCode: 4, trackName: "The Unforgiven II"},
                        {trackCode: 5, trackName: "Better Than You"},
                        {trackCode: 6, trackName: "Slither"},
                        {trackCode: 7, trackName: "Carpe Diem Baby"},
                        {trackCode: 8, trackName: "Bad Seed"},
                        {trackCode: 9, trackName: "Where the Wild Things Are"},
                        {trackCode: 10, trackName: "Prince Charming"},
                        {trackCode: 11, trackName: "Low Man's Lyric"},
                        {trackCode: 12, trackName: "Attitude"},
                        {trackCode: 13, trackName: "Fixxxer"}
                     ]
                },
                {albumName: "Load", cover: "images/MetallicaAlbums/Load.jpg", numTracks: 14, albumCode: "Load", year: 1996, genre: "Heavy metal / Hard rock / Alternative rock / Blues rock / Alternative metal", duration: "1 hour 19 minutes", price: formatNumber(10.76),
                tracks: [
                        {trackCode: 1, trackName: "Ain't My B*tch"},
                        {trackCode: 2, trackName: "2 X 4"},
                        {trackCode: 3, trackName: "The House Jack Built"},
                        {trackCode: 4, trackName: "Until It Sleeps"},
                        {trackCode: 5, trackName: "King Nothing"},
                        {trackCode: 6, trackName: "Hero Of The Day"},
                        {trackCode: 7, trackName: "Bleeding Me"},
                        {trackCode: 8, trackName: "Cure"},
                        {trackCode: 9, trackName: "Poor Twisted Me"},
                        {trackCode: 10, trackName: "Wasting My Hate"},
                        {trackCode: 11, trackName: "Mama Said"},
                        {trackCode: 12, trackName: "Thorn Within"},
                        {trackCode: 13, trackName: "Ronnie"},
                        {trackCode: 14, trackName: "The Outlaw Torn"}
                    ]
                },
                {albumName: "...And Justice For All", cover: "images/MetallicaAlbums/AndJusticeForAll.jpg", numTracks: 9, albumCode: "AndJusticeForAll", year: 1988, genre: "Trash metal / Progressive metal", duration: "1 hour 5 minutes", price: formatNumber(17.99),
                tracks: [
                        {trackCode: 1, trackName: "Blackened"},
                        {trackCode: 2, trackName: "...And Justice for All"},
                        {trackCode: 3, trackName: "Eye of the Beholder"},
                        {trackCode: 4, trackName: "One"},
                        {trackCode: 5, trackName: "The Shortest Straw"},
                        {trackCode: 6, trackName: "Harvester of Sorrow"},
                        {trackCode: 7, trackName: "The Frayed Ends of Sanity"},
                        {trackCode: 8, trackName: "To Live is to Die"},
                        {trackCode: 9, trackName: "Dyers Eve"}
                    ]
                },
                {albumName: "Master Of Puppets", cover: "images/MetallicaAlbums/MasterOfPuppets.jpg", numTracks: 8, albumCode: "MasterOfPuppets", year: 1986, genre: "Trash metal", duration: "54 minutes", price: formatNumber(19.59),
                tracks: [
                        {trackCode: 1, trackName: "Battery"},
                        {trackCode: 2, trackName: "Master of Puppets"},
                        {trackCode: 3, trackName: "The Thing That Should Not Be"},
                        {trackCode: 4, trackName: "Welcome Home (Sanitarium)"},
                        {trackCode: 5, trackName: "Disposable Heroes"},
                        {trackCode: 6, trackName: "Leper Messiah"},
                        {trackCode: 7, trackName: "Orion"},
                        {trackCode: 8, trackName: "Damage, Inc."}
                    ]
                },
                {albumName: "Ride The Lightning", cover: "images/MetallicaAlbums/RideTheLightning.jpg", numTracks: 8, albumCode: "RideTheLightning", year: 1984, genre: "Trash metal", duration: "47 minutes", price: formatNumber(11.98),
                tracks: [
                        {trackCode: 1, trackName: "Fight Fire With Fire"},
                        {trackCode: 2, trackName: "Ride The Lightning"},
                        {trackCode: 3, trackName: "For Whom The Bell Tolls"},
                        {trackCode: 4, trackName: "Fade To Black"},
                        {trackCode: 5, trackName: "Trapped Under Ice"},
                        {trackCode: 6, trackName: "Escape"},
                        {trackCode: 7, trackName: "Creeping Death"},
                        {trackCode: 8, trackName: "The Call Of Ktulu"}
                    ]
                },
                {albumName: "Kill 'Em All", cover: "images/MetallicaAlbums/KillEmAll.jpg", numTracks: 10, albumCode: "KilLEmAll", year: 1983, genre: "Trash metal", duration: "50 minutes", price: formatNumber(8.86),
                tracks: [
                        {trackCode: 1, trackName: "Hit The Lights"},
                        {trackCode: 2, trackName: "The Four Horsemen"},
                        {trackCode: 3, trackName: "Motorbreath"},
                        {trackCode: 4, trackName: "Jump In The Fire"},
                        {trackCode: 5, trackName: "Anesthesia (Pulling Teeth)"},
                        {trackCode: 6, trackName: "Whiplash"},
                        {trackCode: 7, trackName: "Phantom Lord"},
                        {trackCode: 8, trackName: "No Remorse"},
                        {trackCode: 9, trackName: "Seek & Destroy"},
                        {trackCode: 10, trackName: "Metal Militia"}
                    ]
                }
            ]
        },

        {picture: "images/artists/NiallHoran.jpg", code: "NiallHoran", name: "Niall Horan", genres: "pop rock", description: `Niall James Horan is an Irish singer and songwriter. He rose to prominence as a member of the English-Irish boy band One Direction, formed in 2010 on the British singing
         competition The X Factor. The group released five albums and went on to become one of the best-selling boy bands of all time. `,
            albums: [
                {albumName: "Heartbreak Weather", cover: "images/NiallHoranAlbums/HeartbreakWeather.png", numTracks: 14, albumCode: "HeartbreakWeather", year: 2020, genre: "Pop rock", duration: "46 minutes", price: formatNumber(11.99),
                tracks: [
                        {trackCode: 1, trackName: "Heartbreak Weather"},
                        {trackCode: 2, trackName: "Black And White"},
                        {trackCode: 3, trackName: "Dear Patience"},
                        {trackCode: 4, trackName: "Bend The Rules"},
                        {trackCode: 5, trackName: "Small Talk"},
                        {trackCode: 6, trackName: "Nice To Meet Ya"},
                        {trackCode: 7, trackName: "Put A Little Love On Me"},
                        {trackCode: 8, trackName: "Arms Of A Stranger"},
                        {trackCode: 9, trackName: "Everywhere"},
                        {trackCode: 10, trackName: "Cross Your Mind"},
                        {trackCode: 11, trackName: "New Angel"},
                        {trackCode: 12, trackName: "No Judgement"},
                        {trackCode: 13, trackName: "San Francisco"},
                        {trackCode: 14, trackName: "Still"}
                    ]
                },
                {albumName: "Flicker", cover: "images/NiallHoranAlbums/Flicker.png", numTracks: 10, albumCode: "Flicker", year: 2017, genre: "Pop rock", duration: "35 minutes", price: formatNumber(9.99),
                tracks: [
                        {trackCode: 1, trackName: "On The Loose"},
                        {trackCode: 2, trackName: "This Town"},
                        {trackCode: 3, trackName: "Seeing Blind"},
                        {trackCode: 4, trackName: "Slow Hands"},
                        {trackCode: 5, trackName: "Too Much To Ask"},
                        {trackCode: 6, trackName: "Paper Houses"},
                        {trackCode: 7, trackName: "Since We're Alone"},
                        {trackCode: 8, trackName: "Flicker"},
                        {trackCode: 9, trackName: "Fire Away"},
                        {trackCode: 10, trackName: "You And Me"}
                    ]
                }
            ]
        },

        {picture: "images/artists/OzzyOsbourne.jpg", code: "OzzyOsbourne", name: "Ozzy Osbourne", genres: "metal", description: `John Michael "Ozzy" Osbourne is an English singer, songwriter, and television personality. He rose to prominence during the 1970s as the lead vocalist of the heavy metal
         band Black Sabbath, during which period he adopted the nickname "Prince of Darkness". `,
            albums: [
                {albumName: "Ordinary Man", cover: "images/OzzyOsbourneAlbums/OrdinaryMan.jpg", numTracks: 11, albumCode: "OrdinaryMan", year: 2020, genre: "Heavy metal / Hard rock", duration: "49 minutes", price: formatNumber(9.97),
                tracks: [
                        {trackCode: 1, trackName: "Straight to Hell"},
                        {trackCode: 2, trackName: "All My Life"},
                        {trackCode: 3, trackName: "Goodbye"},
                        {trackCode: 4, trackName: "Ordinary Man"},
                        {trackCode: 5, trackName: "Under the Graveyard"},
                        {trackCode: 6, trackName: "Eat Me"},
                        {trackCode: 7, trackName: "Today Is The End"},
                        {trackCode: 8, trackName: "Scary Little Green Men"},
                        {trackCode: 9, trackName: "Holy For Tonight"},
                        {trackCode: 10, trackName: "It's A Raid"},
                        {trackCode: 11, trackName: "Take What You Want"}
                    ]
                },
                {albumName: "Under Cover", cover: "images/OzzyOsbourneAlbums/UnderCover.jpg", numTracks: 13, albumCode: "UnderCover", year: 2005, genre: "Heavy metal / Hard rock", duration: "55 minutes", price: formatNumber(5.32),
                tracks: [
                        {trackCode: 1, trackName: "Rocky Mountain Way"},
                        {trackCode: 2, trackName: "In My Life"},
                        {trackCode: 3, trackName: "Mississippi Queen"},
                        {trackCode: 4, trackName: "Go Now"},
                        {trackCode: 5, trackName: "Woman"},
                        {trackCode: 6, trackName: "21st Century Schizoid Man"},
                        {trackCode: 7, trackName: "All the Young Dudes"},
                        {trackCode: 8, trackName: "For What It's Worth"},
                        {trackCode: 9, trackName: "Good Times"},
                        {trackCode: 10, trackName: "Sunshine Of Your Love"},
                        {trackCode: 11, trackName: "Fire"},
                        {trackCode: 12, trackName: "Working Class Hero"},
                        {trackCode: 13, trackName: "Sympathy for the Devil"}
                    ]
                },
                {albumName: "No More Tears", cover: "images/OzzyOsbourneAlbums/NoMoreTears.jpg", numTracks: 13, albumCode: "NoMoreTears", year: 1991, genre: "Heavy metal / Hard rock", duration: "1 hour 6 minutes", price: formatNumber(5.49),
                tracks: [
                        {trackCode: 1, trackName: "Mr. Tinkertrain"},
                        {trackCode: 2, trackName: "I Don't Want to Change the World"},
                        {trackCode: 3, trackName: "Mama, I'm Coming Home"},
                        {trackCode: 4, trackName: "Desire"},
                        {trackCode: 5, trackName: "No More Tears"},
                        {trackCode: 6, trackName: "Won't Be Coming Home (S.I.N.)"},
                        {trackCode: 7, trackName: "Hellraiser"},
                        {trackCode: 8, trackName: "Time After Time"},
                        {trackCode: 9, trackName: "Zombie Stomp"},
                        {trackCode: 10, trackName: "A.V.H."},
                        {trackCode: 11, trackName: "Road to Nowhere"},
                        {trackCode: 12, trackName: "Don't Blame Me"},
                        {trackCode: 13, trackName: "Party with the Animals"}
                    ]
                },
                {albumName: "Bark At The Moon", cover: "images/OzzyOsbourneAlbums/BarkAtTheMoon.jpg", numTracks: 10, albumCode: "BarkAtTheMoon", year: 1983, genre: "Heavy metal", duration: "46 minutes", price: formatNumber(5.38),
                tracks: [
                        {trackCode: 1, trackName: "Bark at the Moon"},
                        {trackCode: 2, trackName: "You're No Different"},
                        {trackCode: 3, trackName: "Now You See It (Now You Don't)"},
                        {trackCode: 4, trackName: "Rock 'n' Roll Rebel"},
                        {trackCode: 5, trackName: "Centre of Eternity"},
                        {trackCode: 6, trackName: "So Tired"},
                        {trackCode: 7, trackName: "Slow Down"},
                        {trackCode: 8, trackName: "Waiting for Darkness"},
                        {trackCode: 9, trackName: "Spiders"},
                        {trackCode: 10, trackName: "One up the 'B' Side"}
                    ]
                },
                {albumName: "Blizzard Of Ozz", cover: "images/OzzyOsbourneAlbums/BlizzardOfOzz.jpg", numTracks: 10, albumCode: "BlizzardOfOzz", year: 1980, genre: "Heavy metal", duration: "1 hour 33 minutes", price: formatNumber(7),
                tracks: [
                        {trackCode: 1, trackName: "I Don't Know"},
                        {trackCode: 2, trackName: "Crazy Train"},
                        {trackCode: 3, trackName: "Goodbye to Romance"},
                        {trackCode: 4, trackName: "Dee"},
                        {trackCode: 5, trackName: "Suicide Solution"},
                        {trackCode: 6, trackName: "Mr. Crowley"},
                        {trackCode: 7, trackName: "No Bone Movies"},
                        {trackCode: 8, trackName: "Revelation (Mother Earth)"},
                        {trackCode: 9, trackName: "Steal Away (The Night)"},
                        {trackCode: 10, trackName: "You Looking at Me, Looking at You"}
                    ]
                }
            ]
        },

        {picture: "images/artists/PinkFloyd.png", code: "PinkFloyd", name: "Pink Floyd", genres: "rock", description: `Pink Floyd (originally called The Pink Floyd Sound and then The Pink Floyd) were an English rock band formed in London in 1965. Gaining an early following as one of the first British
         psychedelic groups, they were distinguished for their extended compositions, sonic experimentation, philosophical lyrics and elaborate live shows, and became a leading band of the progressive rock genre, cited by some as the greatest progressive rock band of all time.`,
            albums: [
                {albumName: "The Endless River", cover: "images/PinkFloydAlbums/TheEndlessRiver.jpg", numTracks: 18, albumCode: "TheEndlessRiver", year: 2014, genre: "Blues rock / Progressive rock", duration: "53 minutes", price: formatNumber(18.82),
                tracks: [
                        {trackCode: 1, trackName: "Side 1, Pt. 1: Things Left Unsaid"},
                        {trackCode: 2, trackName: "Side 1, Pt. 2: It's What We Do"},
                        {trackCode: 3, trackName: "Side 1, Pt. 3: Ebb And Flow"},
                        {trackCode: 4, trackName: "Side 2, Pt. 1: Sum"},
                        {trackCode: 5, trackName: "Side 2, Pt. 2: Skins"},
                        {trackCode: 6, trackName: "Side 2, Pt. 3: Unsung"},
                        {trackCode: 7, trackName: "Side 2, Pt. 4: Anisina"},
                        {trackCode: 8, trackName: "Side 3, Pt. 1: The Lost Art Of Conversation"},
                        {trackCode: 9, trackName: "Side 3, Pt. 2: On Noodle Street"},
                        {trackCode: 10, trackName: "Side 3, Pt. 3: Night Light"},
                        {trackCode: 11, trackName: "Side 3, Pt. 4: Allons-y (1)"},
                        {trackCode: 12, trackName: "Side 3, Pt. 5: Autumn '68"},
                        {trackCode: 13, trackName: "Side 3, Pt. 6: Allons-y (2)"},
                        {trackCode: 14, trackName: "Side 3, Pt. 7: Talkin' Hawkin'"},
                        {trackCode: 15, trackName: "Side 4, Pt. 1: Calling"},
                        {trackCode: 16, trackName: "Side 4, Pt. 2: Eyes To Pearls"},
                        {trackCode: 17, trackName: "Side 4, Pt. 3: Surfacing"},
                        {trackCode: 18, trackName: "Side 4, Pt. 4: Louder Than Words"}
                    ]
                },
                {albumName: "The Division Bell", cover: "images/PinkFloydAlbums/TheDivisionBell.jpg", numTracks: 11,albumCode: "TheDivisionBell", year: 1994, genre: "Progressive rock", duration: "1 hour 6 minutes", price: formatNumber(11.18),
                tracks: [
                        {trackCode: 1, trackName: "Cluster One"},
                        {trackCode: 2, trackName: "What Do You Want From Me"},
                        {trackCode: 3, trackName: "Poles Apart"},
                        {trackCode: 4, trackName: "Marooned"},
                        {trackCode: 5, trackName: "A Great Day For Freedom"},
                        {trackCode: 6, trackName: "Wearing The Inside Out"},
                        {trackCode: 7, trackName: "Take It Back"},
                        {trackCode: 8, trackName: "Coming Back To Life"},
                        {trackCode: 9, trackName: "Keep Talking"},
                        {trackCode: 10, trackName: "Lost For Words"},
                        {trackCode: 11, trackName: "High Hopes"}
                    ]
                },
                {albumName: "The Final Cut", cover: "images/PinkFloydAlbums/TheFinalCut.jpg", numTracks: 13, albumCode: "TheFinalCut", year: 1983, genre: "Art rock", duration: "46 minutes", price: formatNumber(16.42),
                tracks: [
                        {trackCode: 1, trackName: "The Post War Dream"},
                        {trackCode: 2, trackName: "Your Possible Pasts"},
                        {trackCode: 3, trackName: "One Of The Few"},
                        {trackCode: 4, trackName: "When The Tigers Broke Free"},
                        {trackCode: 5, trackName: "The Hero's Return"},
                        {trackCode: 6, trackName: "The Gunner's Dream"},
                        {trackCode: 7, trackName: "Paranoid Eyes"},
                        {trackCode: 8, trackName: "Get Your Filthy Hands Off My Desert"},
                        {trackCode: 9, trackName: "The Fletcher Memorial Home"},
                        {trackCode: 10, trackName: "Southhampton Dock"},
                        {trackCode: 11, trackName: "The Final Cut"},
                        {trackCode: 12, trackName: "Not Now John"},
                        {trackCode: 13, trackName: "Two Suns In The Sunset"}
                    ]
                },
                {albumName: "The Wall", cover: "images/PinkFloydAlbums/TheWall.jpg", numTracks: 26, albumCode: "TheWall", year: 1979, genre: "Art rock / Progressive rock / Progressive pop", duration: "1 hour 21 minutes", price: formatNumber(17.19),
                tracks: [
                        {trackCode: 1, trackName: "In The Flesh?"},
                        {trackCode: 2, trackName: "The Thin Ice"},
                        {trackCode: 3, trackName: "Another Brick In The Wall (Part 1)"},
                        {trackCode: 4, trackName: "The Happiest Days Of Our Lives"},
                        {trackCode: 5, trackName: "Another Brick In The Wall (Part 2)"},
                        {trackCode: 6, trackName: "Mother"},
                        {trackCode: 7, trackName: "Goodbye Blue Sky"},
                        {trackCode: 8, trackName: "Empty Spaces"},
                        {trackCode: 9, trackName: "Young Lust"},
                        {trackCode: 10, trackName: "One Of My Turns"},
                        {trackCode: 11, trackName: "Don't Leave Me Now"},
                        {trackCode: 12, trackName: "Another Brick In The Wall (Part 3)"},
                        {trackCode: 13, trackName: "Goodbye Cruel World"},
                        {trackCode: 14, trackName: "Hey You"},
                        {trackCode: 15, trackName: "Is There Anybody Out There?"},
                        {trackCode: 16, trackName: "Nobody Home"},
                        {trackCode: 17, trackName: "Vera"},
                        {trackCode: 18, trackName: "Bring The Boys Back Home"},
                        {trackCode: 19, trackName: "Comfortably Numb"},
                        {trackCode: 20, trackName: "The Show Must Go On"},
                        {trackCode: 21, trackName: "In The Flesh"},
                        {trackCode: 22, trackName: "Run Like Hell"},
                        {trackCode: 23, trackName: "Waiting For The Worms"},
                        {trackCode: 24, trackName: "Stop"},
                        {trackCode: 25, trackName: "The Trial"},
                        {trackCode: 26, trackName: "Outside The Wall"}
                    ]
                },
                {albumName: "The Dark Side Of The Moon", cover: "images/PinkFloydAlbums/TheDarkSideOfTheMoon.png", numTracks: 10, albumCode: "TheDarkSideOfTheMoon", year: 1973, genre: "Progressive rock", duration: "42 minutes", price: formatNumber(9.99),
                tracks: [
                        {trackCode: 1, trackName: "Speak To Me"},
                        {trackCode: 2, trackName: "Breathe (In The Air)"},
                        {trackCode: 3, trackName: "On The Run"},
                        {trackCode: 4, trackName: "Time"},
                        {trackCode: 5, trackName: "The Great Gig In The Sky"},
                        {trackCode: 6, trackName: "Money"},
                        {trackCode: 7, trackName: "Us And Them"},
                        {trackCode: 8, trackName: "Any Colour You Like"},
                        {trackCode: 9, trackName: "Brain Damage"},
                        {trackCode: 10, trackName: "Eclipse"}
                    ]
                }
            ]
        },

        {picture: "images/artists/Queen.jpg", code: "Queen", name: "Queen", genres: "pop rock", description: `Queen are a British rock band formed in London in 1970. Their classic line-up was Freddie Mercury (lead vocals, piano), Brian May (guitar, vocals), Roger Taylor (drums, vocals) and John Deacon (bass).
         Their earliest works were influenced by progressive rock, hard rock and heavy metal, but the band gradually ventured into more conventional and radio-friendly works by incorporating further styles, such as arena rock and pop rock.`,
            albums: [
                {albumName: "Hot Space", cover: "images/QueenAlbums/HotSpace.png", numTracks: 11, albumCode: "HotSpace", year: 1982, genre: "Pop rock", duration: "43 minutes", price: formatNumber(12.08),
                tracks: [
                        {trackCode: 1, trackName: "Staying Power"},
                        {trackCode: 2, trackName: "Dancer"},
                        {trackCode: 3, trackName: "Back Chat"},
                        {trackCode: 4, trackName: "Body Language"},
                        {trackCode: 5, trackName: "Action This Day"},
                        {trackCode: 6, trackName: "Put Out The Fire"},
                        {trackCode: 7, trackName: "Life Is Real"},
                        {trackCode: 8, trackName: "Calling All Girls"},
                        {trackCode: 9, trackName: "The Words Of Love"},
                        {trackCode: 10, trackName: "Cool Cat"},
                        {trackCode: 11, trackName: "Under Pressure"}
                    ]
                },
                {albumName: "News Of The World", cover: "images/QueenAlbums/NewsOfTheWorld.png", numTracks: 11, albumCode: "NewsOfTheWorld", year: 1977, genre: "Hard rock", duration: "39 minutes", price: formatNumber(9.68),
                tracks: [
                        {trackCode: 1, trackName: "We Will Rock You"},
                        {trackCode: 2, trackName: "We Are The Champions"},
                        {trackCode: 3, trackName: "Sheer Heart Attack"},
                        {trackCode: 4, trackName: "All Dead, All Dead"},
                        {trackCode: 5, trackName: "Spread Your Wings"},
                        {trackCode: 6, trackName: "Fight From The Inside"},
                        {trackCode: 7, trackName: "Get Down, Make Love"},
                        {trackCode: 8, trackName: "Sleeping On The Sidewalk"},
                        {trackCode: 9, trackName: "Who Needs You"},
                        {trackCode: 10, trackName: "It's Late"},
                        {trackCode: 11, trackName: "My Melancholy Blues"}
                    ]
                }
            ]
        },

        {picture: "images/artists/RHCP.jpg", code: "RedHotChiliPeppers", name: "Red Hot Chili Peppers", genres: "pop rock", description: `The Red Hot Chili Peppers are an American rock band formed in Los Angeles in 1983. Their music incorporates elements of alternative rock, funk, punk rock and psychedelic rock.
         The band consists of vocalist Anthony Kiedis, bassist Flea, drummer Chad Smith, and guitarist John Frusciante.`,
            albums: [
                {albumName: "The Getaway", cover: "images/RHCPAlbums/TheGetaway.jpg", numTracks: 13, albumCode: "TheGetaway", year: 2016, genre: "Pop rock", duration: "59 minutes", price: formatNumber(3.65),
                tracks: [
                        {trackCode: 1, trackName: "The Getaway"},
                        {trackCode: 2, trackName: "Dark Necessities"},
                        {trackCode: 3, trackName: "We Turn Red"},
                        {trackCode: 4, trackName: "The Longest Wave"},
                        {trackCode: 5, trackName: "Goodbye Angels"},
                        {trackCode: 6, trackName: "Sick Love"},
                        {trackCode: 7, trackName: "Go Robot"},
                        {trackCode: 8, trackName: "Feasting on the Flowers"},
                        {trackCode: 9, trackName: "Detroit"},
                        {trackCode: 10, trackName: "This Ticonderoga"},
                        {trackCode: 11, trackName: "Encore"},
                        {trackCode: 12, trackName: "The Hunter"},
                        {trackCode: 13, trackName: "Dreams of a Samurai"}
                    ]
                },
                {albumName: "I'm With You", cover: "images/RHCPAlbums/ImWithYou.jpg", numTracks: 14, albumCode: "ImWithYou", year: 2011, genre: "Funk rock / Alternative rock", duration: "59 minutes", price: formatNumber(11.98),
                tracks: [
                        {trackCode: 1, trackName: "Monarchy of Roses"},
                        {trackCode: 2, trackName: "Factory of Faith"},
                        {trackCode: 3, trackName: "Brendan's Death Song"},
                        {trackCode: 4, trackName: "Ethiopia"},
                        {trackCode: 5, trackName: "Annie Wants a Baby"},
                        {trackCode: 6, trackName: "Look Around"},
                        {trackCode: 7, trackName: "The Adventures Of Rain Dance Maggie"},
                        {trackCode: 8, trackName: "Did I Let You Know"},
                        {trackCode: 9, trackName: "Goodbye Hooray"},
                        {trackCode: 10, trackName: "Happiness Loves Company"},
                        {trackCode: 11, trackName: "Police Station"},
                        {trackCode: 12, trackName: "Even You Brutus?"},
                        {trackCode: 13, trackName: "Meet Me at the Corner"},
                        {trackCode: 14, trackName: "Dance, Dance, Dance"}
                    ]
                },
                {albumName: "Stadium Arcadium", cover: "images/RHCPAlbums/StadiumArcadium.jpg", numTracks: 28, albumCode: "StadiumArcadium", year: 2006, genre: "Funk rock / Alternative rock", duration: "2 hours 31 minutes", price: formatNumber(15.98),
                tracks: [
                        {trackCode: 1, trackName: "Dani California"},
                        {trackCode: 2, trackName: "Snow (Hey Oh)"},
                        {trackCode: 3, trackName: "Charlie"},
                        {trackCode: 4, trackName: "Stadium Arcadium"},
                        {trackCode: 5, trackName: "Hump de Bump"},
                        {trackCode: 6, trackName: "She's Only 18"},
                        {trackCode: 7, trackName: "Slow Cheetah"},
                        {trackCode: 8, trackName: "Torture Me"},
                        {trackCode: 9, trackName: "Strip My Mind"},
                        {trackCode: 10, trackName: "Especially in Michigan"},
                        {trackCode: 11, trackName: "Warlocks"},
                        {trackCode: 12, trackName: "C'mon Girl"},
                        {trackCode: 13, trackName: "Wet Sand"},
                        {trackCode: 14, trackName: "Hey"},
                        {trackCode: 15, trackName: "Desecration Smile"},
                        {trackCode: 16, trackName: "Tell Me Baby"},
                        {trackCode: 17, trackName: "Hard to Concentrate"},
                        {trackCode: 18, trackName: "21st Century"},
                        {trackCode: 19, trackName: "She Looks to Me"},
                        {trackCode: 20, trackName: "Readymade"},
                        {trackCode: 21, trackName: "If"},
                        {trackCode: 22, trackName: "Make You Feel Better"},
                        {trackCode: 23, trackName: "Animal Bar"},
                        {trackCode: 24, trackName: "So Much I"},
                        {trackCode: 25, trackName: "Storm in a Teacup"},
                        {trackCode: 26, trackName: "We Believe"},
                        {trackCode: 27, trackName: "Turn It Again"},
                        {trackCode: 28, trackName: "Death of a Martian"}
                    ]
                },
                {albumName: "By The Way", cover: "images/RHCPAlbums/ByTheWay.jpg", numTracks: 16, albumCode: "ByTheWay", year: 2002, genre: "Funk rock / Alternative rock", duration: "1 hour 8 minutes", price: formatNumber(9.32),
                tracks: [
                        {trackCode: 1, trackName: "By the Way"},
                        {trackCode: 2, trackName: "Universally Speaking"},
                        {trackCode: 3, trackName: "This Is the Place"},
                        {trackCode: 4, trackName: "Dosed"},
                        {trackCode: 5, trackName: "Don’t Forget Me"},
                        {trackCode: 6, trackName: "The Zephyr Song"},
                        {trackCode: 7, trackName: "Can't Stop"},
                        {trackCode: 8, trackName: "I Could Die for You"},
                        {trackCode: 9, trackName: "Midnight"},
                        {trackCode: 10, trackName: "Throw Away Your Television"},
                        {trackCode: 11, trackName: "Cabron"},
                        {trackCode: 12, trackName: "Tear"},
                        {trackCode: 13, trackName: "On Mercury"},
                        {trackCode: 14, trackName: "Minor Thing"},
                        {trackCode: 15, trackName: "Warm Tape"},
                        {trackCode: 16, trackName: "Venice Queen"}
                    ]
                },
                {albumName: "Californication", cover: "images/RHCPAlbums/Californication.jpg", numTracks: 15, albumCode: "Californication", year: 1999, genre: "Funk rock / Alternative rock", duration: "56 minutes", price: formatNumber(14.13),
                tracks: [
                        {trackCode: 1, trackName: "Around the World"},
                        {trackCode: 2, trackName: "Parallel Universe"},
                        {trackCode: 3, trackName: "Scar Tissue"},
                        {trackCode: 4, trackName: "Otherside"},
                        {trackCode: 5, trackName: "Get on Top"},
                        {trackCode: 6, trackName: "Californication"},
                        {trackCode: 7, trackName: "Easily"},
                        {trackCode: 8, trackName: "Porcelain"},
                        {trackCode: 9, trackName: "Emit Remmus"},
                        {trackCode: 10, trackName: "I Like Dirt"},
                        {trackCode: 11, trackName: "This Velvet Glove"},
                        {trackCode: 12, trackName: "Savior"},
                        {trackCode: 13, trackName: "Purple Stain"},
                        {trackCode: 14, trackName: "Right on Time"},
                        {trackCode: 15, trackName: "Road Trippin'"}
                    ]
                }
            ]
        },

        {picture: "images/artists/SelenaGomez.jpg", code: "SelenaGomez", name: "Selena Gomez", genres: "pop", description: `Selena Marie Gomez is an American singer and actress. Born and raised in Texas, Gomez began her career by appearing on the children's television series Barney & Friends.
        As of 2017, Gomez has sold over seven million albums and 22 million singles worldwide, according to Billboard.`,
            albums: [
                {albumName: "Rare", cover: "images/SelenaGomezAlbums/Rare.png", numTracks: 13, albumCode: "Rare", year: 2020, genre: "Pop / Dance-pop", duration: "42 minutes", price: formatNumber(11.49),
                tracks: [
                        {trackCode: 1, trackName: "Rare"},
                        {trackCode: 2, trackName: "Dance Again"},
                        {trackCode: 3, trackName: "Look at Her Now"},
                        {trackCode: 4, trackName: "Lose You to Love Me"},
                        {trackCode: 5, trackName: "Ring"},
                        {trackCode: 6, trackName: "Vulnerable"},
                        {trackCode: 7, trackName: "People You Know"},
                        {trackCode: 8, trackName: "Let Me Get Me"},
                        {trackCode: 9, trackName: "Crowded Room"},
                        {trackCode: 10, trackName: "Kinda Crazy"},
                        {trackCode: 11, trackName: "Fun"},
                        {trackCode: 12, trackName: "Cut You Off"},
                        {trackCode: 13, trackName: "A Sweeter Place"}
                    ]
                },
                {albumName: "Revival", cover: "images/SelenaGomezAlbums/Revival.jpg", numTracks: 11, albumCode: "Revival", year: 2015, genre: "Dance-pop", duration: "39 minutes", price: formatNumber(9.99),
                tracks: [
                        {trackCode: 1, trackName: "Revival"},
                        {trackCode: 2, trackName: "Kill Em with Kindness"},
                        {trackCode: 3, trackName: "Hands to Myself"},
                        {trackCode: 4, trackName: "Same Old Love"},
                        {trackCode: 5, trackName: "Sober"},
                        {trackCode: 6, trackName: "Good for You"},
                        {trackCode: 7, trackName: "Camouflage"},
                        {trackCode: 8, trackName: "Me & The Rhythm"},
                        {trackCode: 9, trackName: "Survivors"},
                        {trackCode: 10, trackName: "Body Heat"},
                        {trackCode: 11, trackName: "Rise"}
                    ]
                },
                {albumName: "For You", cover: "images/SelenaGomezAlbums/ForYou.png", numTracks: 11, albumCode: "ForYou", year: 2014, genre: "Dance-pop", duration: "52 minutes", price: formatNumber(6.75),
                tracks: [
                        {trackCode: 1, trackName: "The Heart Wants What It Wants"},
                        {trackCode: 2, trackName: "Come & Get It"},
                        {trackCode: 3, trackName: "Love You like a Love Song"},
                        {trackCode: 4, trackName: "Tell Me Something I Don't Know"},
                        {trackCode: 5, trackName: "Who Says"},
                        {trackCode: 6, trackName: "My Dilemma 2.0"},
                        {trackCode: 7, trackName: "Round & Round"},
                        {trackCode: 8, trackName: "Slow Down"},
                        {trackCode: 9, trackName: "Bidi Bidi Bom Bom"},
                        {trackCode: 10, trackName: "Falling Down"},
                        {trackCode: 11, trackName: "Do It"}
                    ]
                },
                {albumName: "Stars Dance", cover: "images/SelenaGomezAlbums/StarsDance.png", numTracks: 11, albumCode: "StarsDance", year: 2013, genre: "Dance-pop", duration: "39 minutes", price: formatNumber(9.49),
                tracks: [
                        {trackCode: 1, trackName: "Birthday"},
                        {trackCode: 2, trackName: "Slow Down"},
                        {trackCode: 3, trackName: "Stars Dance"},
                        {trackCode: 4, trackName: "Like a Champion"},
                        {trackCode: 5, trackName: "Come & Get It"},
                        {trackCode: 6, trackName: "Forget Forever"},
                        {trackCode: 7, trackName: "Save the Day"},
                        {trackCode: 8, trackName: "B.E.A.T."},
                        {trackCode: 9, trackName: "Write Your Name"},
                        {trackCode: 10, trackName: "Undercover"},
                        {trackCode: 11, trackName: "Love Will Remember"}
                    ]
                }
            ]
        },

        {picture: "images/artists/TaylorSwift.jpg", code: "TaylorSwift", name: "Taylor Swift", genres: "pop", description: `Taylor Alison Swift (born December 13, 1989) is an American singer-songwriter. Her narrative songwriting, which is often inspired by her personal experiences, has received widespread
         media coverage and critical praise. Based in Nashville, Tennessee, Swift signed with Sony/ATV Tree Publishing in 2004 to become a songwriter and with Big Machine Records in 2005 to become a country music singer.`,
            albums: [
                {albumName: "Evermore", cover: "images/TaylorSwiftAlbums/Evermore.png", numTracks: 15, albumCode: "Evermore", year: 2020, genre: "Pop / Alternative rock", duration: "1 hour", price: formatNumber(13.59),
                tracks: [
                        {trackCode: 1, trackName: "willow"},
                        {trackCode: 2, trackName: "champagne problems"},
                        {trackCode: 3, trackName: "gold rush"},
                        {trackCode: 4, trackName: "‘tis the damn season"},
                        {trackCode: 5, trackName: "tolerate it"},
                        {trackCode: 6, trackName: "no body, no crime"},
                        {trackCode: 7, trackName: "happiness"},
                        {trackCode: 8, trackName: "dorothea"},
                        {trackCode: 9, trackName: "coney island"},
                        {trackCode: 10, trackName: "ivy"},
                        {trackCode: 11, trackName: "cowboy like me"},
                        {trackCode: 12, trackName: "ong story short"},
                        {trackCode: 13, trackName: "marjorie"},
                        {trackCode: 14, trackName: "closure"},
                        {trackCode: 15, trackName: "evermore"}
                    ]
                },
                {albumName: "Folklore", cover: "images/TaylorSwiftAlbums/Folklore.png", numTracks: 16, albumCode: "Folklore", year: 2020, genre: "Alternative rock", duration: "1 hour 3 minutes", price: formatNumber(12.9),
                tracks: [
                        {trackCode: 1, trackName: "the 1"},
                        {trackCode: 2, trackName: "cardigan"},
                        {trackCode: 3, trackName: "the last great american dynasty"},
                        {trackCode: 4, trackName: "exile"},
                        {trackCode: 5, trackName: "my tears ricochet"},
                        {trackCode: 6, trackName: "mirrorball"},
                        {trackCode: 7, trackName: "seven"},
                        {trackCode: 8, trackName: "august"},
                        {trackCode: 9, trackName: "this is me trying"},
                        {trackCode: 10, trackName: "illicit affairs"},
                        {trackCode: 11, trackName: "invisible string"},
                        {trackCode: 12, trackName: "mad woman"},
                        {trackCode: 13, trackName: "epiphany"},
                        {trackCode: 14, trackName: "betty"},
                        {trackCode: 15, trackName: "peace"},
                        {trackCode: 16, trackName: "hoax"}
                    ]
                },
                {albumName: "Lover", cover: "images/TaylorSwiftAlbums/Lover.png", numTracks: 18, albumCode: "Lover", year: 2019, genre: "Pop / Pop rock", duration: "11.87", price: formatNumber(11.87),
                tracks: [
                        {trackCode: 1, trackName: "I Forgot That You Existed"},
                        {trackCode: 2, trackName: "Cruel Summer"},
                        {trackCode: 3, trackName: "Lover"},
                        {trackCode: 4, trackName: "The Man"},
                        {trackCode: 5, trackName: "The Archer"},
                        {trackCode: 6, trackName: "I Think He Knows"},
                        {trackCode: 7, trackName: "Miss Americana & The Heartbreak Prince"},
                        {trackCode: 8, trackName: "Paper Rings"},
                        {trackCode: 9, trackName: "Cornelia Street"},
                        {trackCode: 10, trackName: "Death By A Thousand Cuts"},
                        {trackCode: 11, trackName: "London Boy"},
                        {trackCode: 12, trackName: "Soon You’ll Get Better"},
                        {trackCode: 13, trackName: "False God"},
                        {trackCode: 14, trackName: "You Need To Calm Down"},
                        {trackCode: 15, trackName: "Afterglow"},
                        {trackCode: 16, trackName: "ME!"},
                        {trackCode: 17, trackName: "It’s Nice To Have A Friend"},
                        {trackCode: 18, trackName: "Daylight"}
                    ]
                },
                {albumName: "Reputation", cover: "images/TaylorSwiftAlbums/Reputation.png", numTracks: 15, albumCode: "Reputation", year: 2017, genre: "Pop", duration: "55 minutes", price: formatNumber(12.56),
                tracks: [
                        {trackCode: 1, trackName: "...Ready For It?"},
                        {trackCode: 2, trackName: "End Game"},
                        {trackCode: 3, trackName: "I Did Something Bad"},
                        {trackCode: 4, trackName: "Don’t Blame Me"},
                        {trackCode: 5, trackName: "Delicate"},
                        {trackCode: 6, trackName: "Look What You Made Me Do"},
                        {trackCode: 7, trackName: "So It Goes..."},
                        {trackCode: 8, trackName: "Gorgeous"},
                        {trackCode: 9, trackName: "Getaway Car"},
                        {trackCode: 10, trackName: "King Of My Heart"},
                        {trackCode: 11, trackName: "Dancing With Our Hands Tied"},
                        {trackCode: 12, trackName: "Dress"},
                        {trackCode: 13, trackName: "This Is Why We Can't Have Nice Things"},
                        {trackCode: 14, trackName: "Call It What You Want"},
                        {trackCode: 15, trackName: "New Year’s Day"}
                    ]
                },
                {albumName: "1989", cover: "images/TaylorSwiftAlbums/1989.png", numTracks: 13, albumCode: "1989", year: 2014, genre: "Pop", duration: "48 minutes", price: formatNumber(14.39),
                tracks: [
                        {trackCode: 1, trackName: "Welcome To New York"},
                        {trackCode: 2, trackName: "Blank Space"},
                        {trackCode: 3, trackName: "Style"},
                        {trackCode: 4, trackName: "Out Of The Woods"},
                        {trackCode: 5, trackName: "All You Had To Do Was Stay"},
                        {trackCode: 6, trackName: "Shake It Off"},
                        {trackCode: 6, trackName: "I Wish You Would"},
                        {trackCode: 7, trackName: "Bad Blood"},
                        {trackCode: 8, trackName: "Wildest Dreams"},
                        {trackCode: 10, trackName: "How You Get The Girl"},
                        {trackCode: 11, trackName: "This Love"},
                        {trackCode: 12, trackName: "I Know Places"},
                        {trackCode: 13, trackName: "Clean"}
                    ]
                },
                {albumName: "Red", cover: "images/TaylorSwiftAlbums/Red.png", numTracks: 19, albumCode: "Red", year: 2012, genre: "Pop / Rock", duration: "1 hour 5 minutes", price: formatNumber(11.99),
                tracks: [
                        {trackCode: 1, trackName: "State Of Grace"},
                        {trackCode: 2, trackName: "Red"},
                        {trackCode: 3, trackName: "Treacherous"},
                        {trackCode: 4, trackName: "I Knew You Were Trouble"},
                        {trackCode: 5, trackName: "All Too Well"},
                        {trackCode: 6, trackName: "22"},
                        {trackCode: 7, trackName: "I Almost Do"},
                        {trackCode: 8, trackName: "We Are Never Ever Getting Back Together"},
                        {trackCode: 9, trackName: "Stay Stay Stay"},
                        {trackCode: 10, trackName: "The Last Time"},
                        {trackCode: 11, trackName: "Holy Ground"},
                        {trackCode: 12, trackName: "Sad Beautiful Tragic"},
                        {trackCode: 13, trackName: "The Lucky One"},
                        {trackCode: 14, trackName: "Everything Has Changed"},
                        {trackCode: 15, trackName: "Starlight"},
                        {trackCode: 16, trackName: "Begin Again"},
                        {trackCode: 17, trackName: "The Moment I Knew"},
                        {trackCode: 18, trackName: "Come Back...Be Here"},
                        {trackCode: 19, trackName: "Girl At Home"}
                    ]
                }
            ]
        },

        {picture: "images/artists/theWeeknd.jpg", code: "TheWeeknd", name: "The Weeknd", genres: "hip-hop", description: `Abel Makkonen Tesfaye, known professionally as the Weeknd, is a Canadian singer, songwriter and record producer. Born in Toronto and raised in Scarborough, Tesfaye began his recording career
         in 2009 by anonymously uploading his song "Do It" to YouTube.`,
            albums: [
                {albumName: "After Hours", cover: "images/TheWeekndAlbums/AfterHours.png", numTracks: 14, albumCode: "AfterHours", year: 2020, genre: "R&B", duration: "56n minutes", price: formatNumber(10.59,),
                tracks: [
                    {trackCode: 1, trackName: "Alone Again"},
                    {trackCode: 2, trackName: "Too Late"},
                    {trackCode: 3, trackName: "Hardest To Love"},
                    {trackCode: 4, trackName: "Scared to Live"},
                    {trackCode: 5, trackName: "Snowchild"},
                    {trackCode: 6, trackName: "Escape From LA"},
                    {trackCode: 7, trackName: "Heartless"},
                    {trackCode: 8, trackName: "Faith"},
                    {trackCode: 9, trackName: "Blinding Lights"},
                    {trackCode: 10, trackName: "In Your Eyes"},
                    {trackCode: 11, trackName: "Save Your Tears"},
                    {trackCode: 12, trackName: "Repeat After Me"},
                    {trackCode: 13, trackName: "After Hours"},
                    {trackCode: 14, trackName: "Until I Bleed Out"}
                    ]
                },
                {albumName: "Starboy", cover: "images/TheWeekndAlbums/Starboy.png", numTracks: 18, albumCode: "Starboy", year: 2016, genre: "R&B", duration: "1 hour 8 minutes", price: formatNumber(9.79),
                tracks: [
                        {trackCode: 1, trackName: "Starboy"},
                        {trackCode: 2, trackName: "Party Monster"},
                        {trackCode: 3, trackName: "False Alarm"},
                        {trackCode: 4, trackName: "Reminder"},
                        {trackCode: 5, trackName: "Rockin'"},
                        {trackCode: 6, trackName: "Secrets"},
                        {trackCode: 7, trackName: "True Colors"},
                        {trackCode: 8, trackName: "Stargirl Interlude"},
                        {trackCode: 9, trackName: "Sidewalks"},
                        {trackCode: 10, trackName: "Six Feet Under"},
                        {trackCode: 11, trackName: "Love to Lay"},
                        {trackCode: 12, trackName: "A Lonely Night"},
                        {trackCode: 13, trackName: "Attention"},
                        {trackCode: 14, trackName: "Ordinary Life"},
                        {trackCode: 15, trackName: "Nothing Without You"},
                        {trackCode: 16, trackName: "All I Know"},
                        {trackCode: 17, trackName: "Die for You"},
                        {trackCode: 18, trackName: "I Feel It Coming"}
                    ]
                },
                {albumName: "Beauty Behind The Madness", cover: "images/TheWeekndAlbums/BeautyBehindTheMadness.png", numTracks: 14, albumCode: "BeautyBehindTheMadness", year: 2015, genre: "Pop / R&B", duration: "1 hour 5 minutes", price: formatNumber(9.99),
                tracks: [
                    {trackCode: 1, trackName: "Real Life"},
                    {trackCode: 2, trackName: "Losers"},
                    {trackCode: 3, trackName: "Tell Your Friends"},
                    {trackCode: 4, trackName: "Often"},
                    {trackCode: 5, trackName: "The Hills"},
                    {trackCode: 6, trackName: "Acquainted"},
                    {trackCode: 7, trackName: "Can't Feel My Face"},
                    {trackCode: 8, trackName: "Shameless"},
                    {trackCode: 9, trackName: "Earned It"},
                    {trackCode: 10, trackName: "In The Night"},
                    {trackCode: 11, trackName: "As You Are"},
                    {trackCode: 12, trackName: "Dark Times"},
                    {trackCode: 13, trackName: "Prisoner"},
                    {trackCode: 14, trackName: "Angel"}

                    ]
                }
            ]
        }
    ];

    for(let i = 0; i < artist.length; i++)
    {
        artist[i].numAlbums = artist[i].albums.length;
        for(let j = 0; j < artist[i].albums.length; j++)
        {
            artist[i].albums[j].artistCode = artist[i].code;
        }
    }

    return artist;
}


