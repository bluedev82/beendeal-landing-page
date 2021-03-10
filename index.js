const b = anime({
    targets: "object#ufo-svg",
    translateX: 250,
});

window.onload = function () {
    // dynamic css for explore.svg
    const explore = document.getElementById("explore-svg");
    const exploreDoc = explore.contentDocument;
    const exploreStyle = exploreDoc.createElementNS(
        "http://www.w3.org/2000/svg",
        "style"
    );

    exploreStyle.textContent = '@import url("../../cssSvg/traffic-light.css");';
    const exploreSvg = exploreDoc.querySelector("svg");
    exploreSvg.insertBefore(exploreStyle, exploreSvg.firstChild);

    // dynamic css for ufo.svg
    const ufo = document.getElementById("ufo-svg");
    const ufoDoc = ufo.contentDocument;
    const ufoStyle = ufoDoc.createElementNS(
        "http://www.w3.org/2000/svg",
        "style"
    );
    ufoStyle.textContent = '@import url("../../cssSvg/ufo.css");';
    const ufoSvg = ufoDoc.querySelector("svg");
    ufoSvg.insertBefore(ufoStyle, ufoSvg.firstChild);
};
