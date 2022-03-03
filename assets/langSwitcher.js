/*! language switcher */

var translationReq = new XMLHttpRequest();

var langAssociation = {
  fr: "fr",
  en: "en",
  eng: "en"
}


i18next.changeLanguageAndUrl = function(lang){
  i18next.changeLanguage(lang);

  translateAllUrl();
  
  var newLanguageUrl = $(".lang-select:contains(" + window.selectedLang + ")").data("language-path");
  if(newLanguageUrl[newLanguageUrl.length - 1] == '/' && newLanguageUrl != '/'){
    newLanguageUrl = newLanguageUrl.substring(0, newLanguageUrl.length - 1);
  }

  if(window.location.pathname != newLanguageUrl){
  	history.pushState(null, "", newLanguageUrl);
  }
  
}

$( document ).ready(function(){
 /**
 * if there's a language in translations, we initialize the translation
 */
  if(!$.isEmptyObject(translations)){

    
    i18next.init({}, function(err, t){
      if(err){
        return console.log('something went wrong loading', err);
      }
    }).on('languageChanged', function(lng) {
      changeLanguage();
      Cookies.set('lang', lng, { expires: 365 });
      Cookies.set('langIndex', window.currentLangIndex, { expires: 365});
    })

    /**
     * detect language change if select/detect language click if divs
     */
    if($(".lang-select").is("select")){
      $(".lang-select").change(function(){
        window.currentLangIndex = $(this).children('option:selected').index();
        window.selectedLang = $(this).val();

        /**
             * if already loaded we just change the language
             */
        if(i18next.hasResourceBundle(window.selectedLang, 'translation')){
          i18next.changeLanguageAndUrl(window.selectedLang);
        }
        /**
             * else load and change language
             */
        else{
          loadLanguage(window.selectedLang);
        }
      })
    }
    else{
      $(".lang-select").click(function(){
        var previousLang = window.selectedLang;
        window.currentLangIndex = $(this).index();
        window.selectedLang = $(this).html();

        /**
             * if already loaded we just change the language
             */
        if(i18next.hasResourceBundle(window.selectedLang, 'translation')){
          i18next.changeLanguageAndUrl(window.selectedLang);
        }
        /**
             * else load and change language
             */
        else{
          loadLanguage(window.selectedLang);
        }
        
        if(previousLang != window.selectedLang){
          
          
        }
        
      })
    }
    
    /*
     *	initial language change
     */
    
    window.currentLangIndex = translationsArray.indexOf(currentLangIso);
    window.selectedLang = currentLangIso;

//     loadLanguage(window.selectedLang);

    /**
     * check if cookies already has language
     */
    if(Cookies.get("lang")){
      if(Cookies.get("lang") != window.selectedLang){
        window.selectedLang = Cookies.get("lang");
      	loadLanguage(Cookies.get("lang"));
      }
      else{
        loadLanguage(window.selectedLang);
      }
    }
    /**
     * initial language change if cookies are not set
     */
    else{
      var userLang = navigator.language || navigator.userLanguage; 
      var foundSupported = false

      /**
         * Keys of translation is an array of supported language by the shop.
         * If the browser is in a supported language and is not the current language
         * we ask the customer if he wants to change language.
         */
      Object.keys(translations).forEach(function(suportedTranslation){
        if(userLang.indexOf(langAssociation[suportedTranslation]) !== -1){
          foundSupported = true;
          window.selectedLang = langAssociation[suportedTranslation];
          loadLanguage(langAssociation[suportedTranslation]);
        }
      });

      if(!foundSupported){
        loadLanguage(window.selectedLang);
      }
    }
  }
});

function translateAllUrl(){
  setTimeout(function(){
    $("a").each(function(){
      var newUrl = translateUrl($(this).attr("href"));
      $(this).attr("href", newUrl);
    });
    
    $("[action='/search'], [action='/cart']").each(function(){
      var newUrl = translateUrl($(this).attr('action'));
      $(this).attr("action", newUrl);
    })
  }, 100);
}

function translateUrl(url){
  var urlVerifier = /(http[s]?:\/\/)?[^\s(["<,>]*\.[^\s[",><]*/igm;

  if(url && url != "#"){
    var isDomain = url.match(urlVerifier);

    if(isDomain){
      if(url.indexOf(shopUrl) != -1){
        url = url.replace(shopUrl, "");
        if(url == ""){
          url = "/"
        }

        var prefixKeys = Object.keys(translationUrlPrefixes);

        var urlWithoutPrefix = url;

        prefixKeys.forEach(function(key){
          var prefix = translationUrlPrefixes[key];

          if(prefix != '/'){
            urlWithoutPrefix = urlWithoutPrefix.replace(prefix, "");
          }
        });

        var currentPrefix = translationUrlPrefixes[window.selectedLang];

        var newUrl = urlWithoutPrefix;
        if(currentPrefix != '/'){
          newUrl = currentPrefix + newUrl;
        }

        if(newUrl[newUrl.length - 1] == '/' && newUrl != '/'){
          newUrl = newUrl.substring(0, newUrl.length - 1);
        }
        
        if(newUrl == ''){
          newUrl = '/'
        }
        
        return newUrl;
      }
    }
    else{
      var prefixKeys = Object.keys(translationUrlPrefixes);

      var urlWithoutPrefix = url;

      prefixKeys.forEach(function(key){
        var prefix = translationUrlPrefixes[key];

        if(prefix != '/'){
          urlWithoutPrefix = urlWithoutPrefix.replace(prefix, "");
        }
      });

      var currentPrefix = translationUrlPrefixes[window.selectedLang];

      var newUrl = urlWithoutPrefix;
      if(currentPrefix != '/'){
        newUrl = currentPrefix + newUrl;
      }

      if(newUrl[newUrl.length - 1] == '/' && newUrl != '/'){
        newUrl = newUrl.substring(0, newUrl.length - 1);
      }
      
      if(newUrl == ''){
        newUrl = '/'
      }
      
      return newUrl;
    }
  }
}

function loadLanguage(lang){
  translationReq.open('GET', translations[lang], true);
  translationReq.send(null);

  translationReq.onreadystatechange = function(event) {
    if (this.readyState === XMLHttpRequest.DONE) {
      if (this.status === 200) {
        window.currentTranslation = JSON.parse(this.responseText);

        i18next.addResourceBundle(lang, 'translation', window.currentTranslation)

        loadUserTranslations(lang);

        i18next.changeLanguageAndUrl(lang)
      } else {
        console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
      }
    }
  };
}