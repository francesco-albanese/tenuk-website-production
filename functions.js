(function() {
  var tenukModule = {
    cacheDOM: function() {
      this.$header = $('.header');
      this.siteCanvas = this.$header.parent();
      this.NavigationElement = this.$header.find('.Element.NavigationElement');
      this.imageGallery = this.$header.siblings('section').find('.nxImageShowcase');
      this.navbarElements = this.$header.find('.neetmenu.root').children();
      this.getInvolved = this.siteCanvas.find('.Element.ElementForm');
      this.toggleNavBtn = this.$header.find('.toggle-nav');
      this.navbarDesktop = this.$header.find('.navbarDesktop');
      this.closeNav = this.siteCanvas.parent().find('.close-nav');
      this.canvasOverlay = this.siteCanvas.find('.canvasOverlay');
      this.backToTopBtn = this.canvasOverlay.siblings('.backToTop');
    },

    addClasses: function() {
      this.NavigationElement.addClass('col');
      this.imageGallery.addClass('wrapper hidden-768 hidden-480');
      this.navbarElements.addClass('btn');
      this.getInvolved.addClass('getInvolved wrapper');
    },

    rotateMenuLinks: function() {
      $('.neetmenu.root li').hover(function() {
        $(this).css('transform','rotateY(180deg)');
        $(this).children('a').css('transform','rotateY(-180deg)');
      }, function() {
        $(this).css('transform','rotateY(0deg)');
        $(this).children('a').css('transform','rotateY(0deg)')
      });
    },

    showMobileNav: function() {
      this.siteCanvas.toggleClass('show-nav');
      this.navbarDesktop.show(500);
      this.closeNav.show();
      this.canvasOverlay.show(100);
    },

    hideMobileNav: function() {
      this.siteCanvas.removeClass('show-nav');
      this.canvasOverlay.hide();
      this.closeNav.hide();
    },

    backToTop: function() {
      this.$header.parents('html, body').animate({scrollTop:0}, 1000);
    },

    formRestyling: function() {
      $('dt.item1, dd.item1, dt.item2, dd.item2').wrapAll('<div class="row"></div>');
      $('dt.item1, dd.item1').wrapAll('<div class="col col-940-6"></div>');
      $('dt.item2, dd.item2').wrapAll('<div class="col col-940-6"></div>');
      $('dt.item3, dd.item3').wrapAll('<div class="row"><div class="col col-940-12"></div></div>');
      $('dt.item4, dd.item4').wrapAll('<div class="row"><div class="col col-940-12"></div></div>');
      $('dt.item5, dd.item5').wrapAll('<div class="row"><div class="col col-940-12"></div></div>');
      $('.FormFooter').wrapAll('<div class="row"><div class="col col-940-4 col-768-12 col-480-12"></div></div>');
      $('input[type="submit"]').addClass('btn');
      $('#err_item1_3f22d51b0681478d85c39194464133c8').wrap('<div class="row"><div class="col col-940-12"></div></div>');
      $('#err_item1_3f22d51b0681478d85c39194464133c8').text('* Please enter your first name');
    },

    bindEvents: function() {
      var windowWidth = window.matchMedia('(min-width:980px)');
      if(windowWidth.matches) {
        this.rotateMenuLinks();
      }
      this.toggleNavBtn.on('click', this.showMobileNav.bind(this));
      this.closeNav.on('click', this.hideMobileNav.bind(this));
      this.canvasOverlay.on('click', this.hideMobileNav.bind(this));
      this.backToTopBtn.on('click', this.backToTop.bind(this));
    },

    init: function() {
      this.cacheDOM();
      this.addClasses();
      this.bindEvents();
      this.formRestyling();
    },
  };
  return tenukModule.init();
})();
