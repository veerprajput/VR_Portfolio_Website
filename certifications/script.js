$(document).ready(function () {

    $('#menu').click(function () {
        $(this).toggleClass('fa-times');
        $('.navbar').toggleClass('nav-toggle');
    });

    $(window).on('scroll load', function () {
        $('#menu').removeClass('fa-times');
        $('.navbar').removeClass('nav-toggle');

        if (window.scrollY > 60) {
            document.querySelector('#scroll-top').classList.add('active');
        } else {
            document.querySelector('#scroll-top').classList.remove('active');
        }
    });
});

document.addEventListener('visibilitychange',
    function () {
        if (document.visibilityState === "visible") {
            document.title = "Projects | Portfolio Veer Rajput";
            $("#favicon").attr("href", "/assets/images/favicon.png");
        }
        else {
            document.title = "Come Back To Portfolio";
            $("#favicon").attr("href", "/assets/images/favhand.png");
        }
    });

function initIsotope() {
    var $grid = $('#certifications .box-container').isotope({
        itemSelector: '.box', // Select the individual certification items
        layoutMode: 'fitRows' // Or your preferred layout mode
    });
    $('#filters').on('click', 'button', function () {
        $('#filters').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

// fetch projects start
function getCertifications() {
    return fetch("../certifications.json")
        .then(response => response.json())
        .then(data => {
            return data
        });
}

function showCertifications(certifications) {
    let CertificationContainer = document.querySelector(".work .box-container");
    let certificationHTML = "";
    certifications.forEach(certification => {
        certificationHTML += `
    <div class="grid-item ${certification.category}">
        <div class="box tilt"  style="width: 380px; margin: 1rem">
            <img draggable="false" src="../assets/images/certifications/${certification.image}.${certification.file_type}" alt="" />
            <div class="content">
                <div class="tag">
                    <h3>${certification.name}</h3>
                </div>
                <div class="desc">
                    <p>${certification.desc}</p>
                    <div style="margin-left: auto; margin-right: auto;" class="btns">
                        <a style="margin-left: auto; margin-right: auto;" href="${certification.links.view}" class="btn" target="_blank"><i class="fas fa-eye"></i> View</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `
    });
    CertificationContainer.innerHTML = certificationHTML;

    var $grid = $('.box-container').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'masonry',
        masonry: {
            isFitWidth: true
        }
    });

    // filter items on button click
    $('.button-group').on('click', 'button', function () {
        $('.button-group').find('.is-checked').removeClass('is-checked');
        $(this).addClass('is-checked');
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
}

getCertifications().then(data => {
    showCertifications(data);
})
// fetch projects end

// Start of Tawk.to Live Chat

// //Start of Tawk.to Script
// <script type="text/javascript">
// var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
// (function(){
// var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
// s1.async=true;
// s1.src='https://embed.tawk.to/65247c446fcfe87d54b8325a/1hcb8aqqc';
// s1.charset='UTF-8';
// s1.setAttribute('crossorigin','*');
// s0.parentNode.insertBefore(s1,s0);
// })();
// </script>
// //End of Tawk.to Script-


// var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
// (function () {
//     var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
//     s1.async = true;
//     s1.src = 'https://embed.tawk.to/60df10bf7f4b000ac03ab6a8/1f9jlirg6';
//     s1.charset = 'UTF-8';
//     s1.setAttribute('crossorigin', '*');
//     s0.parentNode.insertBefore(s1, s0);
// })();
// End of Tawk.to Live Chat

// disable developer mode
document.onkeydown = function (e) {
    if (e.keyCode == 123) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
        return false;
    }
    if (e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
        return false;
    }
}