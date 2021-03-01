$(document).ready(function(){
    $(".menu>a").click(function(){
        var submenu = $(this).next("ul");

        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    }).mouseover(function(){
        $(this).next("ul").slideDown();
    });
});


$(document).ready(function(){
    $(".sub2").click(function(){
        var submenu = $(this).next("ul");

        // submenu 가 화면상에 보일때는 위로 보드랍게 접고 아니면 아래로 보드랍게 펼치기
        if( submenu.is(":visible") ){
            submenu.slideUp();
        }else{
            submenu.slideDown();
        }
    }).mouseover(function(){
        $(this).next("ul").slideDown();
    });
});




// 검색창 기능
function enterSearch() {
    if(event.keyCode == 13){
        myFunction();  // 실행할 이벤트
    }
}
function myFunction() {
    var x = document.getElementById("text").value;
    window.location.href = "https://cixtan.github.io/web1/search"+"/"+x;
}

// 검색창 기능 끝