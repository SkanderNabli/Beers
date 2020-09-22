<?php


?>
<html lang="fr">
<head>

    <meta charset="UTF-8">
    <title>Test Troa</title>
    <link rel="icon" type="image/png" href="assets/img/AppleBeer.png"/>
    <meta name="viewport" content="initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no">
    <link rel="stylesheet" href="assets/css/fonts/fonts.css">
    <link rel="stylesheet" href="./assets/css/main.css">

</head>
<body>

<header>

    <div class="bMenu">B</div>
    <div id="cross" class="cross"></div>
    <div class="iconBeers"><img src="assets/img/AppleBeer.png" alt="Beers" title="Santé !!"></div>

</header>

<div id="app" class="app">

    <section class="background" ref="content" id="content" data-text="">

        <div v-for="beer in beers" class="beer-items">

            <div class="beer-info">
                <h2>{{ beer.name }}</h2>
                <p>{{ beer.tagline }}</p>
                <p>{{ beer.first_brewed }}</p>
                <p class="seeMore" @click="showModal( beer.id )">see more</p>
            </div>

            <div class="beer-img">
                <img :src="beer.image_url" alt="{{ beer.name }}"/>
            </div>

        </div>

    </section>

    <div id="modal" ref="modal" class="modal">

        <div class="modal-img">
            <img :src="itemShow.image_url" :alt="itemShow.name" id="img">
            <h2 ref="flexFont">{{ itemShow.name }}</h2>
        </div>

        <div class="modal-info">

            <h2 class="title">{{ itemShow.name }}</h2>
            <p class="punchLine">{{ itemShow.tagline }}</p>
            <p class="description">{{ itemShow.description }}</p>

            <div class="details">

                <h3 class="categorie">specifications</h3>

                <hr>

                <div class="abv">
                    <p class="property">abv</p>
                    <p class="valueAbv">{{ itemShow.abv }}</p>
                </div>

                <hr>

                <h3 class="categorie">Ingredients</h3>

                <hr>

                <div v-for="(ingredients, index) in itemShow.ingredients" :key="ingredients">
                    <p class="property">{{index}}</p>
                    <ul class="listDetails" v-if="index">
                        <li v-if="index === 'yeast'" class="value">{{itemShow.ingredients["yeast"]}}</li>
                        <li v-for="malt in ingredients" class="value">{{malt["name"]}}</li>
                    </ul>

                    <hr>

                </div>

                <p class="categorie">food-pairings</p>

                <hr>

                <div class="food-pairings">
                    <div v-for="pairing in itemShow.food_pairing" :key="pairing">
                        <p class="value">{{pairing}}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>


<footer>
    <div class="cheers">cheers</div>
    <div class="punkApi">punk Api V2</div>
</footer>

<script src='https://unpkg.com/vue@next'></script>
<script src='https://cdnjs.cloudflare.com/ajax/libs/axios/0.15.3/axios.min.js'></script>
<script src="./assets/js/app.js"></script>

</body>
</html>


