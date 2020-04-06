
var documents = [{
    "id": 0,
    "url": "http://localhost:4000/blog.io/404.html",
    "title": "404",
    "body": "404 Page not found!Please use the search bar from the bottom left or visit our homepage! "
    }, {
    "id": 1,
    "url": "http://localhost:4000/blog.io/about",
    "title": "",
    "body": ""
    }, {
    "id": 2,
    "url": "http://localhost:4000/blog.io/categories",
    "title": "Categories",
    "body": ""
    }, {
    "id": 3,
    "url": "http://localhost:4000/blog.io/contact",
    "title": "Contact",
    "body": ""
    }, {
    "id": 4,
    "url": "http://localhost:4000/blog.io/",
    "title": "Home",
    "body": "                                                                                               The Other Top of the World              :       A brief history of our time in Antarctica. :                                                                               Urvish                 04 Apr 2020                                "
    }, {
    "id": 5,
    "url": "http://localhost:4000/blog.io/robots.txt",
    "title": "",
    "body": "      Sitemap: {{ “sitemap. xml”   absolute_url }}   "
    }, {
    "id": 6,
    "url": "http://localhost:4000/blog.io/Antarctica/",
    "title": "The Other Top of the World",
    "body": "2020/04/04 - A brief history of our time in Antarctica. Glamping with Seals: Huffing and puffing, Vinu abusing me constantly, carrying over 30-40lbs of weight in my backpack with our food and tent among other things, hiking for over 5-6 miles in the snow, setting up a tent in the middle of nowhere on the white continent: This is how I imagined our camping experience in Antarctica to be. “You will be taking a zodiac with your sleeping bag and we will bring over the rest of the stuff” said Mariela Cornejo, our Camp Master. “We will have dinner on-board the ship and be back before breakfast tomorrow morning. We want to leave no trace on the continent and so we will carry a portable toilet. ” - A huge smile appeared on Vinu’s face, and I was relieved.  “Shackleton took a hand-picked crew of 28 from Buenos Aires to South Georgia Island and into the frozen Weddell Sea. ” It was pitch dark, mostly cloudy, with some water splashing sounds in the distance and we were listening to Seb Coulthard paint a picture of Shakelton’s expedition after we had set up our tent village by the sea.  Later that night, while we were cozied up in our tents, someone in a bivy bag, got a rude awakening when they heard some heavy breathing right over their face. A curious teenage seal had wobbled over to check on our camping area. But no harm done. One had to just get out of the bivy, and move over to another place.   Highway Petrels: We were approaching Yalour island and I could see a few long, deep, yellow/pink trails on the island. A few chinstrap penguins were making their way up and down one of these paths which, we were told, are called penguin highways. Penguins use these to waddle back and forth between their nests and the water. “The penguin population is in decline because of the reduction in sea ice and warming sea temperatures, which have severely reduced the krill populations, the main food source for all penguins” said Marc Jensen, our guide on the zodiac.   The chin-strap penguins, as the name suggests, look like the policemen of the penguin colony. We saw a few of these amongst a bunch of Adelie penguins. Meanwhile, a few snow petrels were perched atop a hill overlooking these highways, looking for dead penguin chicks for their food. Who knew that somewhere in the world, policemen would be the prey on highways!  The Whale in the Room: ( Not referring to myself here ) “Starboard, 3’o clock…. . Starboard, 3’o clock” roared the speaker system. Curious, as always, Vinu ran to the starboard side of the ship. A school of orcas had decided to give us a show.  On another zodiac trip, a curious humpback calf came so near our zodiac, that it showered us with water when it exhaled! [insert picture] At other times, humpbacks gave us glimpses of their flukes while we furiously took pictures to go back and upload the fluke pictures on happywhale. com, who use the information to plot whale migration paths around the globe.  “During the 20th century, over 200,000 humpbacks were taken, reducing the global population by over 90%” explained Pablo Brandeman, our Expedition Leader, as we landed on Mikkelnson harbor. In the past, this place used to be a home to whalers until the early 20th century.  But thanks to the efforts of people around the world to impose whaling bans, there has been an increase in whale citings, which we can confirm. :) Orcas, humpbacks and minke whales steal the show. Sea Legs: Vinu, mountains, ocean, whales, seals, penguins: these moments spent in Antarctica will, forever, be etched in my memory. But there is one other thing that I will never forget.  “You may be a little uncomfortable until you get you sea legs” said Caption Henrik Karlsson. Little did I know the meaning of uncomfortable! The Drake Passage, or the Drake Shake as it is better known, was a very different experience for Vinu and I. Vinu, who had no symptoms of being sick, was happily getting acquainted with the fellow passengers. Meanwhile, I lost my lunch, dinner and breakfast from my seasickness for two days straight. The 6-8 meter waves were “fun”, let’s just leave it at that. Here is a short video version of our experience that Vinu put together.     "
    }];

var idx = lunr(function () {
    this.ref('id')
    this.field('title')
    this.field('body')

    documents.forEach(function (doc) {
        this.add(doc)
    }, this)
});
function lunr_search(term) {
    document.getElementById('lunrsearchresults').innerHTML = '<ul></ul>';
    if(term) {
        document.getElementById('lunrsearchresults').innerHTML = "<p>Search results for '" + term + "'</p>" + document.getElementById('lunrsearchresults').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>No results found...</li>";
        }
    }
    return false;
}

function lunr_search(term) {
    $('#lunrsearchresults').show( 400 );
    $( "body" ).addClass( "modal-open" );
    
    document.getElementById('lunrsearchresults').innerHTML = '<div id="resultsmodal" class="modal fade show d-block"  tabindex="-1" role="dialog" aria-labelledby="resultsmodal"> <div class="modal-dialog shadow" role="document"> <div class="modal-content"> <div class="modal-header" id="modtit"> <button type="button" class="close" id="btnx" data-dismiss="modal" aria-label="Close"> &times; </button> </div> <div class="modal-body"> <ul class="mb-0"> </ul>    </div> <div class="modal-footer"><button id="btnx" type="button" class="btn btn-primary btn-sm" data-dismiss="modal">Close</button></div></div> </div></div>';
    if(term) {
        document.getElementById('modtit').innerHTML = "<h5 class='modal-title'>Search results for '" + term + "'</h5>" + document.getElementById('modtit').innerHTML;
        //put results on the screen.
        var results = idx.search(term);
        if(results.length>0){
            //console.log(idx.search(term));
            //if results
            for (var i = 0; i < results.length; i++) {
                // more statements
                var ref = results[i]['ref'];
                var url = documents[ref]['url'];
                var title = documents[ref]['title'];
                var body = documents[ref]['body'].substring(0,160)+'...';
                document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML + "<li class='lunrsearchresult'><a href='" + url + "'><span class='title'>" + title + "</span><small><span class='body'>"+ body +"</span><span class='url'>"+ url +"</span></small></a></li>";
            }
        } else {
            document.querySelectorAll('#lunrsearchresults ul')[0].innerHTML = "<li class='lunrsearchresult'>Sorry, no results found. Close & try a different search!</li>";
        }
    }
    return false;
}
    
$(function() {
    $("#lunrsearchresults").on('click', '#btnx', function () {
        $('#lunrsearchresults').hide( 5 );
        $( "body" ).removeClass( "modal-open" );
    });
});