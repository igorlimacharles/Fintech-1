function cadastrar() {
    const username = document.getElementById("nome").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("senha").value;

    // Credenciais corretas
    const usuarioCorreto = "arthur.sidor@gmail.com";
    const senhaCorreta = "teste";

    // Verifica se as credenciais estão corretas
    if (username == null || username == "") {
        alert("O campo 'nome' não pode ser nulo!");
    } else if (email == null || email == "") {
        alert("O campo 'email' não pode ser nulo!");
    } else if (password == null || password == "") {
        alert("O campo 'senha' não pode ser nulo!");
    } else {
        alert("Usuário ou senha incorretos!");
    }

    //vai para a tela de login
}

function telaLogin() {
    // Redireciona para a página de login
    window.location.href = 'login.html'; // Substitua 'pagina_de_login.html' pelo caminho correto da sua página de login
}

// Inicializa o particles.js
particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 96,
            "density": {
                "enable": true,
                "value_area": 320
            }
        },
        "color": {
            "value": "#0bd639"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 1,
                "color": "#1fe819"
            },
            "polygon": {
                "nb_sides": 3
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 3,
            "random": true,
            "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
            }
        },
        "line_linked": {
            "enable": true,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 6,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": "repulse"
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});
