from app import app
from flask import render_template, request, redirect, url_for
from app.utils import get_element, selectors
import requests
import json
import os
from bs4 import BeautifulSoup

@app.route("/")
@app.route("/index")
def index():
    return render_template('index.html')

@app.route("/lista")
def lista():
    # lista kodów produktów o których pobrano opinie
    # pobranie z plikow JSON ze statystykami danych do listy slownikow
    # przekazać liste slownikow do szablonu HTML
    return render_template('lista.html')

@app.route("/product/<product_code>")
def product(product_code):
    # pobraanie z plikow JSON opinii o produkcie i statystyk
    # przekazac te dane do szablonu
    return render_template('product.html', product_code=product_code)
# routing dla wykresow

@app.route("/ekstrakcja", methods=['POST', 'GET'])
def ekstrakcja():
    if request.method == 'POST':
        product_code = request.form['product_id']
        all_opinions = []
        url = f"https://www.ceneo.pl/{product_code}#tab=reviews"

        while(url):
            response = requests.get(url)
            
            if response.status_code != requests.codes.ok:
                break

            page = BeautifulSoup(response.text, "html.parser")
            opinions = page.select("div.js_product-review")

            for opinion in opinions:
                single_opinion = {}
                for key, value in selectors.items():
                    single_opinion[key] = get_element(opinion, *value)
                all_opinions.append(single_opinion)
            
            try:
                url = f"https://www.ceneo.pl/"+get_element(page, "a.pagination__next", "href")
            except TypeError:
                url = None

        try:
            os.mkdir(path="./app/static/opinions")
        except FileExistsError:
            pass
        with open(f"./app/static/opinions/{product_code}.json", "w", encoding="UTF-8") as jf:
            json.dump(all_opinions, jf, indent=4, ensure_ascii=False)

    # !!!!!!!!!!!!!!!!!!!!!Dodać tutaj gdzieś OPINIONS PD READ, SCORE,  SHAPE, MAP i inne do wypisywania rzeczy chyba z analysera!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

        return redirect(url_for('product', product_code=product_code))
    return render_template('ekstrakcja.html')

@app.route("/autor")
def autor():
    return render_template('autor.html')