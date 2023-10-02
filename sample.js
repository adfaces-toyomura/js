//Jqueryの場合は下記で囲む
$(function () { });

// クリックでクラス付与
$(function () {
    $(".sample").click(function () {
        $(".sample01").toggleClass("sample");
    });
});

// ページ遷移時のIDを取得した際に発火
$(function () {
    if (window.location.hash === "#sample") {
        $('#sample01').prop('checked', true); //チェックボックスにチェック入れる
    }
});

//incする場合に該当ページを判断してクラスを付与
$(function () {
    href = location.href;
    var links = jQuery(".sample > a");

    links.each(function (index, value) {
        if (value.href == href) {
            jQuery(".sample").children("a").eq(index).addClass("current");
        }
    });
});

//スクロール位置で要素を表示・非表示
window.onscroll = function () {
    var check = window.pageYOffset;
    var docHeight = $(document).height();
    var dispHeight = $(window).height();

    if (check > docHeight - dispHeight - 50) {
        $('.sample').fadeOut(600);

    } else {
        $('.sample').fadeIn(600);
    }
};

//クリックで住所検索

/*
    タグのname属性
    郵便番号＝zip
    都道府県=pref
    市区町村=addr1
    町名=addr2
    番地・号=addr3
*/
$(function () {
    $('.ajaxzip3').on('click', function () {
        AjaxZip3.zip2addr('zip', '', 'pref', 'addr1', 'addr2', 'addr3');
        //成功時に実行する処理
        AjaxZip3.onSuccess = function () {
            $('.addr3').focus();
        };
        //失敗時に実行する処理
        AjaxZip3.onFailure = function () {
            alert('郵便番号に該当する住所が見つかりません');
        };
        return false;
    });
});

//スムーススクロール

$(function () {
    $('a[href^="#"],area[href^="#"]').click(function () {
        var speed = 1000;
        var href = $(this).attr("href");
        var target = $(href == "#" || href == "" ? 'html' : href);
        var position = target.offset().top;
        $("html, body").animate({
            scrollTop: position
        }, speed, "swing");
        return false;
    });
});

//slick
$(function () {
    $('.sample').slick({
        dots: false,
        slidesToShow: 3,
        /*
        responsive: [
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
        */
    });
});

//modal

$(function () {
    $(".sample").modaal();
});

//指定のをスクロールでふわっと表示

$(function () {
    $(window).scroll(function () {
        const windowHeight = $(window).height();
        const scroll = $(window).scrollTop();

        $('.sample').each(function () {
            const targetPosition = $(this).offset().top;
            if (scroll > targetPosition - windowHeight + 100) {
                $(this).addClass("is-fadein");
            }
        });
    });
});

/*
css記述

.sample {
    transform: translateY(30px);
    opacity: 0;
    visibility: hidden;
    transition: transform 1.5s, opacity 1.5s, visibility 1.5s;
}

.is-fadein {
    transform: translateX(0);
    opacity: 1;
    visibility: visible;
}

@-webkit-keyframes zoomUp {
    0% {
    transform: scale(1);
    }
    100% {
    transform: translateY(-20vh);
    }
}

@keyframes zoomUp {
    0% {
    transform: scale(1);
    }
    100% {
    transform: translateY(-20vh);
    }
}

*/
