$(document).ready(function () {

    //어드민 필터클릭
    $('.filter_select').each(function() {
        const $filterGroup = $(this);

        $filterGroup.find('li').click(function() {
            // 해당 필터 그룹 내 모든 li에서 'on' 클래스를 제거
            $filterGroup.find('li').removeClass('on');
            // 클릭한 li에 'on' 클래스 추가
            $(this).addClass('on');
        });
    });
    $('.filter_select2').each(function() {
        const $filterGroup = $(this);

        $filterGroup.find('li').click(function() {
            // 해당 필터 그룹 내 모든 li에서 'on' 클래스를 제거
            $filterGroup.find('li').removeClass('on');
            // 클릭한 li에 'on' 클래스 추가
            $(this).addClass('on');
        });
    });
    $('.filter_select3').each(function() {
        const $filterGroup = $(this);

        $filterGroup.find('li').click(function() {
            // 해당 필터 그룹 내 모든 li에서 'on' 클래스를 제거
            $filterGroup.find('li').removeClass('on');
            // 클릭한 li에 'on' 클래스 추가
            $(this).addClass('on');
        });
    });

});