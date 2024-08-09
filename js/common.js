//AOS 애니메이션
$(document).ready(function () {
    AOS.init();





//팝업띄우기
function openPopup(Popupname) {
    var popupW = 550;
    var popupH = 890;
    var left = 2600;
    var top = 10;
    window.open(Popupname, '', 'width=' + popupW + ',height=' + popupH + ',left=' + left + ',top=' + top + ',scrollbars=yes,resizable=no,toolbar=no,titlebar=no,menubar=no,location=no');
}

$(window).on('load', function() {
    selectCus();
});

//셀렉트박스
function selectCus() {
    $('.filter_slect').each(function() {
        const $select = $(this);
        const $selectTrigger = $select.find('.trigger');
        const $options = $select.find('.option');
        const $hiddenInput = $select.find('.opt_val');

        // select option 열기
        $selectTrigger.click(function() {
            $options.toggle();
            $select.toggleClass('active');
            $('.filter_slect').not($select).find('.option').hide();
            $('.filter_slect').not($select).removeClass('active');
        });

        // option 선택
        $options.find('li').click(function() {
            if ($(this).hasClass('soldout')) {
                return; // 옵션이 soldout 클래스가 있으면 선택하지 않음
            }
            const value = $(this).data('value');
            const text = $(this).text();
            $select.find('.trigger_txt').text(text);
            $options.hide();
            $select.removeClass('active');
            // 옵션 선택했을 때 클래스 추가
            if (value != '') {
                $select.addClass('select');
            } else {
                $select.removeClass('select');
            }
            // hidden 필드에 선택한 값을 설정
            $hiddenInput.val(value);
        });
    });

    // select 영역 외 다른 곳을 누르면 select 닫힘
    $(document).click(function(e) {
        if (!$(e.target).closest('.filter_slect').length) {
            $('.filter_slect .option').hide();
            $('.filter_slect').removeClass('active');
        }
    });
}


$('input[name="imgfile"]').on('change', function(event) {
    const input = event.target;
    const label = $(input).parent();
    const file = input.files[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = $('<img>').attr('src', e.target.result);
            // 기존의 이미지가 있으면 제거
            label.find('img').remove();
            // 새 이미지를 추가
            label.append(img);
            // 아이콘 지우기
            label.find('i').hide();
        };
        reader.readAsDataURL(file);
    }
});


//스크롤방지
function scrollDisable(){
    $('html, body').addClass('hidden');
}
function scrollAble(){
    $('html, body').removeClass('hidden');
}

//메인UI
//모바일 메뉴바열기
$('#Menubar').click(function(event) {
    $('html, body').toggleClass('hidden');
    $('.mobile_nav_wrap').toggleClass('on')
    });
    
    //모바일 아코디언메뉴
    $('.mobile_nav_depth1').click(function() {
    const $this = $(this);
    const $dropdownIcon = $this.find('.dropdown_icon');
    const $menu = $this.siblings('.mobile_nav_depth2_ul');

    $('.mobile_nav_depth1').removeClass('on');
    $this.removeClass('on');
    const isOpen = $menu.is(':visible');
    // 모든 하위 메뉴를 닫음
    $('.mobile_nav_depth2_ul').slideUp();
    // 모든 드롭다운 아이콘을 기본 상태로 되돌림
    $('.dropdown_icon').css('transform', 'rotate(0deg)');
    
    if (!isOpen) {
    // 클릭된 메뉴가 열려 있지 않다면 열기
    $menu.slideDown();
    $this.addClass('on');
    $dropdownIcon.css('transform', 'rotate(180deg)');
    }
});

$('.filter_checkbox label').on('click', function() {
    // 현재 클릭된 label에 checked 클래스 추가
    $(this).addClass('checked');

    // 클릭된 label을 제외한 다른 label에서 checked 클래스 제거
    $('.filter_checkbox label').not($(this)).removeClass('checked');

    // 클릭된 label의 체크박스만 체크 상태로 변경
    $(this).find('input').prop('checked', true);

    // 클릭된 label을 제외한 나머지 체크박스는 체크 해제
    $('.filter_checkbox input').not($(this).find('input')).prop('checked', false);
});


});