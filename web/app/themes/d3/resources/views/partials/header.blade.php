<header class="banner">
  <div class="container-fluid inf">
    <a class="brand" href="{{ home_url('/') }}" alt="{{ $siteName }}">
      {{ $siteName }}
    </a>
    <nav class="nav-primary">
      @if (has_nav_menu('primary_navigation'))
        {!! wp_nav_menu(['theme_location' => 'primary_navigation', 'menu_class' => 'nav', 'echo' => false]) !!}
      @endif
    </nav>



  </div>
  <div class="container-fluid sup">

  </div>
</header>
