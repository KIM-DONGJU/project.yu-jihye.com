$(document).ready(function() {
                 
    let xOffset = 0;
    let yOffset = 0;

    $(document).on("mouseover",".thumbnail",function(e){ //마우스 오버시
        let left = e.clientX;
        let top = e.clientY;
        $("body").append("<p id='preview'><img src="+ $(this).attr("src") +" style=width:" + $(this)[0].clientWidth * 2 + "px" + " /></p>"); //보여줄 이미지를 선언	
        if((left + $(this)[0].clientWidth * 2) <= $(window).width()){
            $("#preview")
                .css("width", $(this)[0].clientWidth * 2)            
                .css("top",top - $(this)[0].clientWidth * 1.2 + "px")
                .css("left",left + $(this)[0].clientWidth + "px")
                .fadeIn("fast");
        } else {
            $("#preview")
                .css("width", $(this)[0].clientWidth * 2)
                .css("top",top - $(this)[0].clientWidth * 1.2 + "px")
                .css("right", + $(window).width() - left - $(this)[0].clientWidth + "px")
                .fadeIn("fast");
        }
    });
    
    $(document).on("mousemove",".thumbnail",function(e){ //마우스 이동시
        let left = e.clientX;
        let top = e.clientY;
        if((left + $(this)[0].clientWidth * 2) <= $(window).width()){
            $("#preview")
                .css("width", $(this)[0].clientWidth * 2)
                .css("top",top - $(this)[0].clientWidth * 1.2 + "px")
                .css("left",left + $(this)[0].clientWidth + "px")
                .fadeIn("fast"); //bottom 에서 현재 마우스 위치가 220 이하일때 마우스 오버시 이미지가 마우스 위로 올라가기 미리보기 화면 설정 셋팅
        } else {
            $("#preview")
                .css("width", $(this)[0].clientWidth * 2)
                .css("top",top - $(this)[0].clientWidth * 1.2 + "px")
                .css("right", + $(window).width() - left - $(this)[0].clientWidth + "px")
                .fadeIn("fast"); //bottom 에서 현재 마우스 위치가 220 이하일때 마우스 오버시 이미지가 마우스 위로 올라가기 미리보기 화면 설정 셋팅
        }
    });

    $(document).on("mouseout",".thumbnail",function(){ //마우스 아웃시
        $("#preview").remove();
    });
     
});