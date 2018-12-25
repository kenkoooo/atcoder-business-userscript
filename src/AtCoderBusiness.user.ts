// ==UserScript==
// @name        AtCoder Business
// @namespace   AtCoderBusiness
// @description AtCoder in working time
// @include     https://atcoder.jp/contests/*/tasks/*
// @version     1
// @grant       none
// ==/UserScript==

class Startup {
    public static main(): number {
        document.getElementById("fixed-server-timer").remove();

        document.getElementById("task-statement").parentElement.className = "col-sm-9";
        document.getElementById("contest-nav-tabs").className = "col-sm-3";
        document.getElementById("contest-nav-tabs").getElementsByTagName("ul")[0].className = "nav";

        document.querySelector<HTMLInputElement>("#main-container").style.boxShadow = "0px 0px 0px 0px #fff";
        document.querySelector<HTMLInputElement>("#main-container").style.padding = "50px 0px 0px 0px";
        document.querySelector<HTMLInputElement>("#main-div").style.background = "#fff";
        document.querySelectorAll<HTMLInputElement>("p, span, h3, li").forEach(element => {
            element.style.fontSize = "12px";
            element.style.fontWeight = "normal";
        });
        document.querySelectorAll<HTMLInputElement>("pre").forEach(element => {
            element.style.borderWidth = "0px 0px 0px 4px";
            element.style.borderStyle = "solid";
            element.style.borderLeftColor = "#ffeb8e";
            element.style.backgroundColor = "#fff8dc";
        });

        let navbar_inverse = document.querySelector<HTMLInputElement>(".navbar-inverse");

        navbar_inverse.style.backgroundColor = "#fff";
        navbar_inverse.style.border = "0px";

        let navbar_brand = document.querySelector<HTMLInputElement>(".navbar-brand");
        navbar_brand.style.background = "url(\"https://cdn.sstatic.net/Img/unified/sprites.svg\")";
        navbar_brand.style.width = "150px";
        navbar_brand.style.height = "30px";
        navbar_brand.style.backgroundPositionX = "0px";
        navbar_brand.style.backgroundPositionY = "-500px";
        return 0;
    }
}

Startup.main();