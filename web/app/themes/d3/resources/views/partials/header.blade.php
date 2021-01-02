<header class="banner">
  <div class="inf">
    <div class="dragon">
      @svg("images.dragon")
    </div>
    <div class="escamas-banner"></div>
    <nav class="nav-primary">
      <div class="izq">
        <a class="brand" href="{{ home_url('/') }}" alt="{{ $siteName }}">
          {{ $siteName }}
        </a>
      </div>
      <div class="der">
        <ul>
          <li class="wow"  id="wow">
            <a href="#"">
              @svg("images.wow")
              <span>WoW</span>
            </a>
          </li>
          <li class="overwatch" id="overwatch">
            <a href="#"">
              @svg("images.overwatch")
              <span>OverWatch</span>
            </a>
          </li>
          <li class="heroes" id="heroes">
            <a href="#"">
              @svg("images.heroes")
              <span>Heroes</span>
            </a>
          </li>
          <li class="diablo" id="diablo">
            <a href="#"">
              @svg("images.diablo")
              <span>Diablo</span>
            </a>
          </li>
          <li class="hearthstone" id="hearthstone">
            <a href="#"">
              @svg("images.hearthstone")
              <span>HearthStone</span>
            </a>
          </li>
          <li class="starcraft" id="starcraft">
            <a href="#"">
              @svg("images.starcraft")
              <span>StarCraft</span>
            </a>
          </li>
        </ul>
      </div>
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
