var deferredPrompt; // déclaration de la variable invite différée

if (!window.Promise) {
  window.Promise = Promise; // Si la promesse de la fenêtre n'existe pas, on la définit
}

// Si le naviguateur web peut enregistrer des services worker alors, on enregistre le service worker
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/sw.js')
    .then(function () {
      console.log('Service worker registered!');
    })
    .catch(function(err) {
      console.log(err);
    });
}

// Définition du déclencheur de l'évènement "beforeinstallprompt"
window.addEventListener('beforeinstallprompt', function(event) {
  console.log('beforeinstallprompt fired');
  event.preventDefault();
  deferredPrompt = event;
  return false;
});