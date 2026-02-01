(function () {
  var STORAGE_KEY = 'cookie_consent';
  var banner = document.getElementById('cookie-banner');
  var openLink = document.getElementById('cookie-settings-link');
  var acceptAllBtn = document.getElementById('cookie-accept-all');
  var rejectAllBtn = document.getElementById('cookie-reject-all');
  var confirmBtn = document.getElementById('cookie-confirm');
  var perfCheckbox = document.getElementById('cookie-performance');
  var targetCheckbox = document.getElementById('cookie-targeting');

  function getConsent() {
    try {
      return JSON.parse(localStorage.getItem(STORAGE_KEY));
    } catch (e) {
      return null;
    }
  }

  function saveConsent(performance, targeting) {
    var consent = {
      necessary: true,
      performance: !!performance,
      targeting: !!targeting,
      timestamp: new Date().toISOString()
    };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(consent));
  }

  function showBanner() {
    banner.hidden = false;
    var existing = getConsent();
    if (existing) {
      perfCheckbox.checked = existing.performance;
      targetCheckbox.checked = existing.targeting;
    }
  }

  function hideBanner() {
    banner.hidden = true;
  }

  // Show banner on first visit (no stored consent)
  if (!getConsent()) {
    showBanner();
  }

  // "Cookies" footer link re-opens the banner
  openLink.addEventListener('click', function (e) {
    e.preventDefault();
    showBanner();
  });

  acceptAllBtn.addEventListener('click', function () {
    perfCheckbox.checked = true;
    targetCheckbox.checked = true;
    saveConsent(true, true);
    hideBanner();
  });

  rejectAllBtn.addEventListener('click', function () {
    perfCheckbox.checked = false;
    targetCheckbox.checked = false;
    saveConsent(false, false);
    hideBanner();
  });

  confirmBtn.addEventListener('click', function () {
    saveConsent(perfCheckbox.checked, targetCheckbox.checked);
    hideBanner();
  });
})();
