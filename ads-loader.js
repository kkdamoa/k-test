// ads-loader.js
document.addEventListener('DOMContentLoaded', () => {
     const adsContainer = document.createElement('div');
     adsContainer.id = 'ads-container';
     adsContainer.innerHTML = `
         <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9374368296307755" crossorigin="anonymous"></script>
         <ins class="adsbygoogle"
              style="display:block"
              data-ad-client="ca-pub-9374368296307755"
              data-ad-slot="3201247599"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
         <script>
              (adsbygoogle = window.adsbygoogle || []).push({});
         </script>
     `;
     document.body.appendChild(adsContainer);
 });
 