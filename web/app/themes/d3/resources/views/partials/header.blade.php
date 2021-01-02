<header class="banner">
  <div class="inf">
    <div class="dragon">
      @svg("images.dragon")
    </div>
    <div class="escamas-banner"></div>
    <a class="brand" href="{{ home_url('/') }}" alt="{{ $siteName }}">
      {{ $siteName }}
    </a>
    <nav class="nav-primary">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      @endif
    </nav>



  </div>

  <div class="sup">
    <div class="izq">
      <a href="#" class="twich">@svg("images.twich")</a>
      <a href="#" class="twitter">@svg("images.twitter")</a>
      <a href="#" class="youtube">@svg("images.youtube")</a>
      <a href="#" class="facebook">@svg("images.facebook")</a>
    </div>

    <div class="der">
      <a href="#" class="search">@svg("images.search")</a>
      <a href="#" class="login">@svg("images.login")</a>
    </div>
  </div>

</header>
