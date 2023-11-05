//  Window scroll sticky class add
function windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop >= 50
    ) {
        navbar.classList.add("nav-sticky");
    } else {
        navbar.classList.remove("nav-sticky");
    }
}

window.addEventListener('scroll', (ev) => {
    ev.preventDefault();
    windowScroll();
})


// Smooth scroll 
var scroll = new SmoothScroll('#navbar-navlist a', {
    speed: 300,
    offset: 60
});


// Navbar Active Class
var spy = new Gumshoe('#navbar-navlist a', {
    // Active classes
    navClass: 'active', // applied to the nav list item
    contentClass: 'active', // applied to the content
    offset: 70
});


$(document).ready(function(){
    $(".registration-form-footer").submit(function(event) {
        event.preventDefault();

        var form_data = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "/php/contact.php",
            data: form_data,
            success: function() {
                document.querySelector('#submit').value = 'Успешно отправлено';
                function change_name_communication(){
                    document.querySelector('#submit').value = 'Мы с Вами свяжемся';
                }
                function change_name_default(){
                    document.querySelector('#submit').value = 'Отправить сообщение';
                }
                setTimeout(change_name_communication,1000)
                setTimeout(change_name_default,3000)
                $('.registration-form-footer').each(function(){
                    this.reset();
                });
            }
        });
    });

    $(".registration-form").submit(function(event) { //устанавливаем событие отправки для формы с id=form
        event.preventDefault(); //Отключаем обновление страницы

        var form_data = $(this).serialize(); //собераем все данные из формы

        $.ajax({
            type: "POST", //Метод отправки
            url: "/php/send.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                document.querySelector('#ShowButton').innerHTML = 'Успешно отправлено';
                function change_name_communication(){
                    document.querySelector('#ShowButton').innerHTML = 'Мы с Вами свяжемся';
                }
                function change_name_default(){
                    document.querySelector('#ShowButton').innerHTML = 'Отправить';
                }
                setTimeout(change_name_communication,1000)
                setTimeout(change_name_default,3000)
                $('.registration-form').each(function(){
                    this.reset();
                });

            }
        });
    });

});

function fadeIn() {
    var fade = document.getElementById("error-msg");
    var opacity = 0;
    var intervalID = setInterval(function () {
        if (opacity < 1) {
            opacity = opacity + 0.5
            fade.style.opacity = opacity;
        } else {
            clearInterval(intervalID);
        }
    }, 200);
}

// HOME TITLE ANIMATION
const SELECTOR = {
    DEMO: document.querySelector('.heading-title'),
}

const CLASSES = {
    ANIMATED: `is-animated`
}

$("#exampleInputPhone1").mask("+375(99) 999-99-99");
$("#exampleInputPhone2").mask("+375(99) 999-99-99");

$("#navbarCollapse").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbarCollapse").collapse('hide');
    });
});