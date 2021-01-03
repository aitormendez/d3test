@extends('layouts.app')

@section('content')


<div id="container-fluid" class="hero">
  <div class="row">
    <div class="col-7 d-flex flex-column">
      <div class="filtros d-flex">
        <a href="#" class="escama altertime" id="escama-altertime">
          @svg("images.escama")
        </a>
        <a href="#" class="escama wow" id="escama-wow">
          @svg("images.escama")
        </a>
        <a href="#" class="escama overwatch" id="escama-overwatch">
          @svg("images.escama")
        </a>
        <a href="#" class="escama heroes" id="escama-heroes">
          @svg("images.escama")
        </a>
        <a href="#" class="escama diablo" id="escama-diablo">
          @svg("images.escama")
        </a>
        <a href="#" class="escama hearthstone" id="escama-hearthstone">
          @svg("images.escama")
        </a>
        <a href="#" class="escama starcraft" id="escama-starcraft">
          @svg("images.escama")
        </a>
      </div>
      <div class="tags grid d-flex flex-wrap">
        <a href="#" class="tag wow">Hunter</a>
        <a href="#" class="tag overwatch">Sacerdote</a>
        <a href="#" class="tag diablo">Druid</a>
        <a href="#" class="tag starcraft">Mago</a>
        <a href="#" class="tag hearthstone">Monk</a>
        <a href="#" class="tag heroes">Demon Hunter</a>
        <a href="#" class="tag diablo">Arquero</a>
        <a href="#" class="tag overwatch">Chamán</a>
        <a href="#" class="tag wow">Death Knight</a>
        <a href="#" class="tag diablo">Tortuga</a>
        <a href="#" class="tag heroes">Sicario</a>
        <a href="#" class="tag wow">Buscador de oro</a>
        <a href="#" class="tag overwatch">Pícaro</a>
        <a href="#" class="tag wow">arquero</a>
        <a href="#" class="tag overwatch">Escupefuego</a>
        <a href="#" class="tag heroes">Espantapájaros</a>
      </div>
    </div>
  </div>
</div>

@endsection
