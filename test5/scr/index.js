import * as THREE from './node_modules/three/build/three.module.js';

document.getElementById('projectsBtn').addEventListener('click', function () {
    var main = document.getElementById("main-content");
    main.innerHTML = "";
    var content = document.createElement("div");
    content.classList.add("project-items-container");
    main.appendChild(content);
    for (let index = 0; index < 10; index++) {
        var div = document.createElement("div");
        div.classList.add("project-items");
        content.appendChild(div);
        console.log(index);
    }
});

document.getElementById('interactiveElement').addEventListener('click', function () {
    var main = document.getElementById("main-content");
    main.innerHTML = "";
});

document.getElementById('aboutBtn').addEventListener('click', function () {
    var main = document.getElementById("main-content");
    main.innerHTML = "";
});





























/*




let scene, camera, renderer;

function init() {

    const backgroundColor = {
        color: '#5C5470'
    };

    scene = new THREE.Scene();
    scene.background = new THREE.Color(backgroundColor.color);

    camera = new THREE.PerspectiveCamera(90, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    const controls = new OrbitControls( camera, renderer.domElement );

    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    controls.update();
    render();
}

function render() {

    requestAnimationFrame(render);

    controls.update();
    renderer.render(scene, camera);
}

//init();

*/

//https://colorhunt.co/palette/352f445c5470b9b4c7faf0e6