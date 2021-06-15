import Animation from "./animation.js";
import Preloader from "./preloader.js";

const animations = new Animation([...document.querySelectorAll('[data-animation=true]')]);

function init(preloader) {
    preloader.open();
    const { timeout } = preloader.options;
    setTimeout(() => {
        preloader.close().then(_ => {
            animations.start();
        });
    }, timeout);
}

init(new Preloader);



