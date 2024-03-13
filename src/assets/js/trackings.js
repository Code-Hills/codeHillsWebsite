window.addEventListener('DOMContentLoaded', () => {

    function getCookie(name) {
        const value = `; ${document.cookie}`;
        const parts = value.split(`; ${name}=`);
        if (parts.length === 2) return parts.pop().split(';').shift();
    }

    function checkCookieChange() {
        const currentCookieValue = getCookie('cookieyes-consent');
        if (currentCookieValue) {
            var regex = /analytics:([a-zA-Z]+)/;
            var match = currentCookieValue.match(regex);

            if (match !== null) {
                if (match[1] == 'no') {
                    document.querySelector('body #analyticsScript1') ? document.querySelector('body').removeChild(document.querySelector('body #analyticsScript1')) : '';
                    document.querySelector('body #analyticsScript2') ? document.querySelector('body').removeChild(document.querySelector('body #analyticsScript2')) : '';
                } else {
                    var scriptElement = document.createElement('script');
                    scriptElement.id = 'analyticsScript1';
                    scriptElement.src = 'https://www.googletagmanager.com/gtag/js?id=G-4J7028E6KD';
                    document.querySelector('body').appendChild(scriptElement);

                    var scriptElement2 = document.createElement('script');
                    scriptElement2.id = 'analyticsScript2';
                    scriptElement2.innerHTML = "window.dataLayer = window.dataLayer || [];   function gtag(){dataLayer.push(arguments);}   gtag('js', new Date());   gtag('config', 'G-4J7028E6KD');"
                    document.querySelector('body').appendChild(scriptElement2);
                }
            }
        }
    }

    function checkWidget() {
        if (document.querySelector('.cky-consent-container')) {

            document.querySelectorAll('.cky-btn-reject').forEach((item) => {
                item.addEventListener('click', () => {
                    checkCookieChange();
                });
            })

            document.querySelectorAll('.cky-btn-accept').forEach((item) => {
                item.addEventListener('click', () => {
                    checkCookieChange();
                });
            })
        }
    }

    checkCookieChange();

    setTimeout(() => {
        checkWidget();
    }, 300)

});