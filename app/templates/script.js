function redirect() {

    var x = parseInt(document.getElementById("product-id").value);
    
    if(isNaN(x))
    {
        alert("Nieprawidłowe ID. Proszę wprowadzić prawidłowe ID.")
    }
    else
    {
        window.location.href = "lista.html";
    }
}


function create_table(){
    var data = [
        {
        "opinion": "8697147",
        "author": "edyta",
        "recommendation": "Polecam",
        "score": "5/5",
        "purchased": "Transakcja pochodzi z Marketplace Ceneo (usługi Kup Teraz).",
        "published_at": "2018-12-07 23:47:22",
        "purchased_at": "2018-11-21 01:01:42",
        "thumbs_up": "1",
        "thumbs_down": "3",
        "content": "Woda ok. Bardzo wygodne opakowanie. Butelki Cisowianki są wystarczająco 'twarde', żeby woda w trakcie picia nie... wylewała się nagle przy mocniejszym naciśnięciu :-)",
        "pros": [
            "jakość",
            "smak"
        ],
        "cons": [" "]
    },
    {
        "opinion": "4191606",
        "author": "ArtikNS",
        "recommendation": "Polecam",
        "score": "5/5",
        "purchased": "Transakcja pochodzi z Marketplace Ceneo (usługi Kup Teraz).",
        "published_at": "2016-11-14 18:54:22",
        "purchased_at": "2016-11-07 19:49:29",
        "thumbs_up": "4",
        "thumbs_down": "0",
        "content": "Nic dodać nic ująć, woda rewelacyjna. Cena także do jakości jak najbardziej uzasadniona :)",
        "pros": [],
        "cons": []
    },
    {
        "opinion": "4831052",
        "author": "Bartek",
        "recommendation": "Polecam",
        "score": "5/5",
        "purchased": "Transakcja pochodzi z Marketplace Ceneo (usługi Kup Teraz).",
        "published_at": "2017-07-07 23:32:54",
        "purchased_at": "2017-06-30 16:24:35",
        "thumbs_up": "4",
        "thumbs_down": "2",
        "content": "Nie wspiera aborcji - wspaniała firma i super woda od lat!",
        "pros": [],
        "cons": []
    }
    ];

      var table = document.getElementById('datatable');
      data.forEach(function(object) {
      var tr = document.createElement('tr');
        tr.innerHTML =
        '<td class="border">' + object.opinion + '</td>' +
        '<td class="border">' + object.author + '</td>' +
        '<td class="border">' + object.recommendation + '</td>'+
        '<td class="border">' + object.score + '</td>'+
        '<td class="border">' + object.purchased + '</td>'+
        '<td class="border">' + object.published_at + '</td>'+
        '<td class="border">' + object.purchased_at + '</td>'+
        '<td class="border">' + object.thumbs_up + '</td>'+
        '<td class="border">' + object.thumbs_down + '</td>'+
        '<td class="border">' + object.content + '</td>'+
        '<td class="border">' + object.pros + '</td>'+
        '<td class="border">' + object.cons + '</td>';
        table.appendChild(tr);
      })};
