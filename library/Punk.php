<?php
// PUNK Client
namespace library;

use GuzzleHttp\Client;


Class Punk {

    const API_URL = 'https://api.punkapi.com/v2/beers?ids=';
    private $client;
    private $data=[];
    private $rangeCall=10;
    private $rangeSend=10;
    private $exclude =[
        null,
        "https://images.punkapi.com/v2/keg.png",
        "https://images.punkapi.com/v2/cask.png",
        "https://images.punkapi.com/v2/24.png",
        "https://images.punkapi.com/v2/54.png",
    ];


  public function __construct( )
  {

      $this->client = new Client();

  }

  private function callApi($select): ?string
  {

      return $this->client->request("GET", self::API_URL.$select,[
          'verify' => dirname(__DIR__) . DIRECTORY_SEPARATOR ."public". DIRECTORY_SEPARATOR ."cacert.pem",
          'content-type' => 'application/json',
          'Accept' => 'application/json'
      ])->getBody();

  }


  private function getPage($lastId)
  {

//    création des paramètres pour la requete API
      $rangeArray = range($lastId+1,$lastId + $this->rangeCall);
      $range = implode('|', $rangeArray);

      return $this->callApi($range);

  }


  private function filterBeer($beersPage)
  {

      $arrayBeers = (array) json_decode($beersPage,true);

//    Construction des items valid a afficher #filtre
      foreach ($arrayBeers as $item){
          if(!in_array($item["image_url"],$this->exclude)){

              $beer = [
                  "id" => $item["id"] ,
                  "name" => $item["name"] ,
                  "tagline" => $item["tagline"] ,
                  "image_url" => $item["image_url"],
                  "first_brewed" => $item["first_brewed"],
                  "description" => $item["description"],
                  "abv" => $item["abv"],
                  "ingredients" => $item["ingredients"],
                  "food_pairing" => $item["food_pairing"]
              ];

              
              if (count($this->data) < $this->rangeSend){
                  array_push($this->data,$beer);
              }else{
                  break;
              }


//              push item si l'ont veux avoir toutes les données
//              array_push($this->data,$item);

          }
      }

  }

  public function getBeers($currentId = 0)
  {

      $callPage = $this->getPage($currentId);
      $this->filterBeer($callPage);

//    verification si l'ont as assez items a afficher
      if(count($this->data) >= $this->rangeSend){
          return json_encode($this->data);
      }
//    sinon on relance une la method pour ajouter des items dans $this->data
      else{
          $lastId= end($this->data)["id"];
          return $this->getBeers($lastId);
      }

  }


    public function getBeer($id)
  {

      return $this->callApi($id);

  }
}

