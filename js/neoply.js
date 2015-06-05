function shuffle(o){
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
};
var companies = new Array();
// 2015
companies.push(
    ["current", "xe", "엑스엔지니어링",
    "<a href='http://www.xengineering.co' target='_blank' style='color:white;'>여러 장의 신용카드와 마일리지,포인트 카드를 저장하고, 선택해서 결제할 수 있는 All-in-one 디바이이스를 개발하고 있습니다. http://www.xengineering.co </a>"]);

// 2014
companies.push(
    ["current", "chattingcat", "채팅캣",
    "<a href='https://chattingcat.com' target='_blank' style='color:white;'>채팅캣은 원어민 튜터들이 양질의 영문교정서비스를 제공합니다.<br> 네오플라이와 본엔젤스 시드투자<br> 500Startups 10만불 후속 투자.<br> https://chattingcat.com</a>"],
    ["current", "sevenstory", "세븐스토리",
    "<a href='http://sevenstory.net' target='_blank' style='color:white;'>세븐스토리는 스마트폰 사진을 즉석에서 고품질로 인화해주는 서비스, 셀픽(Selpic)을 제공합니다. http://sevenstory.net</a>"],
    ["current", "deliber", "딜리버",
    "<a href='http://deliber.co.kr' target='_blank' style='color:white;'>딜리버는 여성용 스마트밴드,Helen를 만드는 IoT 기업입니다. http://deliber.co.kr</a>"],
    ["current", "eyecatcher", "아이캐쳐",
    "<a href='http://eyecatcher.photo' target='_blank' style='color:white;'>아이캐쳐는 전세계의 여행 스냅 사진 작가를 소개해서 잊을 수 없는 여행의 추억의 멋진 사진에 담아드립니다. http://eyecatcher.photo</a>"],
    ["current", "clebee", "클레비",
    "<a href='http://clebee.kr' target='_blank' style='color:white;'>클레비는 소셜 멘토링·평가 기반의 온라인 디자인 교육 서비스(clebee.kr)를 준비 중에 있으며, 현재 53만 명 규모의 회원 수 No.1 디자인 커뮤니티인 '포완카'를 운영하고 있습니다.</a>"],
    ["current", "bnb_hero", "비앤비히어로",
    "<a href='http://www.bnbhero.com' target='_blank' style='color:white;'>공간을 쉽게 공유하는 인터넷플랫폼입니다.  빌려주는 호스트 입장에서는 수익이 발생하고 빌리는 게스트의 입장에서는 비용을 절약함과 동시에 여행하는 지역의 직접적인 문화 체험의 효과까지 볼 수 있습니다. 중견여행사 3.5억 투자</a>"]);

companies.push(
    ["current", "trazy", "윌로3",
    "<a href='http://www.trazy.com' target='_blank' style='color:white;'>Travel+Crazy의 합성어인 Trazy는 전세계 외국인 관광객들을 위한 한국 여행정보 서비스로서 누구나 콘텐츠 생성과 편집에 참여할 수 있는 Wiki 여행정보와 개별여행자들을 위한 여행상품 마켓플레이스를 제공합니다. http://www.trazy.com </a>"]);

// 2013
companies.push(
    ["current", "likelion", "라이크라이언",
    "<a href='http://codelion.net' target='_blank' style='color:white;'>온라인으로 프로그래밍 언어를 교육하는 스타트업입니다.<br>서울대학교 동아리 '멋쟁이 사자처럼'에 뿌리를 두고 있으며, KISA와 공동으로 코드라이언이라는 서비스를 진행하고 있습니다.</a>"]);
companies.push(
    ["current", "carffeine", "카페인",
    "<a href='http://www.carffeine.com' target='_blank' style='color:white;'>클라우드, 빅데이터 등의 IT 기반기술을 활용하여 차량 진단 및 수리 이력 관리와 이를 통해 과잉정비를 최소화 하여 기존의 차량 정비 서비스의 단점을 개선하는 서비스를 제공하고 있습니다. 자동차 애프터마켓 산업 생태계의 건전한 상생을 만들기 위해 다양한 서비스를 준비하고 있습니다.<br> 한화S&C 5억 투자. http://www.carffeine.com </a>"]);
companies.push(
    ["current", "gachyon", "가치온",
    "국내외 모바일 게임 시장의 편중된 장르(게임성)를 벗어나 스토리가 중심이 되는 게임을 개발하고 있습니다. 유명 IP로 개발되고 있는 1인칭 '호러게임'과 소년들의 성장 드라마가 있는 풀3D '스케이트보드 레이싱게임'을 개발하고 있습니다."]);
companies.push(
    ["current", "1day1song", "원데이원송",
    "<a href='http://1day1song.com' target='_blank' style='color:white;'>하루에 한 아티스트의 좋은 음악을 추천하는 모바일 음악 큐레이팅 서비스입니다.  사용자에게는 쏟아지는 음악의 '홍수' 속에서 숨어있는 '보석' 같은 아티스트, 명곡들을 소개하며, '아티스트와 레이블을 살리자!'라는 모토로 아티스트 및 레이블에는 실질적인 도움이 되는 서비스를 지향합니다. 스파크랩스 투자. http://1day1song.com</a>"]);
companies.push(
    ["current", "spacosa", "스파코사",
    "<a href='http://www.spacosa.com' target='_blank' style='color:white;'>가족들을 위한 모바일 서비스를 제공하는 스타트업입니다. 영유아 교육 서비스인 ‘마이스윗라라’와 스마트 육아서비스인 ‘닥터베베’를 차례로 선보였고, 2013년 10월엔 Private Group 실시간 위치정보 공유서비스인 ‘패미’를 런칭했습니다. TIPS 선정. http://www.spacosa.com</a>"]);
companies.push(
    ["current", "lockin", "락인컴퍼니",
    "<a href='http://www.lockincomp.com' target='_blank' style='color:white;'>Not a big Dummy, Only Essential features., 거창하지 않게, 꼭 필요한 기능으로만!!. 지적 재산권 탈취 방지부터 앱 프로그램의 모든 해킹 방지 솔루션 LIMO 솔루션을 개발하여 서비스하고 있는 모바일 보안 스타트업입니다. 스파크랩스 투자. http://www.lockincomp.com</a>"]);
companies.push(
    ["current", "bove", "아이디어보브",
    "<a href='http://ideabove.com' target='_blank' style='color:white;'>모바일에 적합한 음악 커뮤니티 서비스를 지향하는 스타트업입니다. 2011년 보노사운드를 개발&서비스하고 이를 글로벌 환경에 맞추어 Listr.fm 이라는 YouTube Playlist 기반의 서비스를 준비하고 있습니다. http://ideabove.com</a>"]);
companies.push(
    ["current", "realtrip", "마이리얼트립",
    "<a href='https://www.myrealtrip.com' target='_blank' style='color:white;'>마이리얼트립은 인터넷과 모바일 기술을 통해 여행자에게 더 큰 가치를 드리기 위해 노력하고 있습니다. 업계에서 가장 빠르게 여행자의 니즈를 파악하여 현지 가이드와 여행객을 연결해주는 서비스를 제공하고 있습니다. 캡스톤 등 10억 투자. https://www.myrealtrip.com</a>"]);
companies.push(
    ["current", "iamschool", "아이엠컴퍼니",
    "<a href='http://www.iamcompany.net' target='_blank' style='color:white;'>Easier Communication, Better Education  아이엠컴퍼니는 아이엠스쿨 앱을 통한 더 쉬운 소통과 현재보다 더 나은 교육환경을 만드는 것을 목표로, 언제나 초심을 잃지 않고 최선을 다하겠습니다! 티머시드레이퍼 등 27억 투자. http://www.iamcompany.net</a>"]);

// Before 2013
companies.push(
    ["current", "sundaytoz", "선데이토즈",
    "<a href='http://corp.sundaytoz.com' target='_blank' style='color:white;'>범국민적인 게임 애니팡의 신화를 만들어낸 선데이토즈가 네오플라이의 첫번째 스타트업이었습니다.<br> 2013년 상장(IPO)<br> http://corp.sundaytoz.com</a>"]);
companies.push(
    ["current", "ahiku", "아히쿠",
    " Ahiku는 신개념 동영상 SNS 비비(bb)와 동영상 제작 및 공유서비스 리쿠드(Recood)를 개발하여 서비스하고 있습니다. SKP,은행권창업재단 투자"]);
//companies = shuffle(companies);

$(function(){

  for(var i in companies){
    one_company = $("<li></li>").addClass(companies[i][0])
                    .append($("<div></div>").addClass("isotope-alt-image")
                      .append($("<img />").attr("src", "/img/"+companies[i][1]+".png")
                                        .attr("alt", "image"))
                      .append($("<div></div>")
                        .append("<h4 style='margin-bottom:0px;'>"+companies[i][2]+"</h4>")
                        .append("<p>"+companies[i][3]+"</p>")));
    $("#companies").append(one_company);
  }
});

// 지도
function onload_map(id) {
  var latlng = new google.maps.LatLng(37.400122, 127.104231);
  var myOptions = {
    zoom: 17,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById(id), myOptions);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title:"네오위즈게임즈",
    animation: google.maps.Animation.DROP
  });
}

function display_map(id) {
  var latlng = new google.maps.LatLng(37.400122, 127.104231);
  var myOptions = {
    zoom: 17,
    center: latlng,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
  };
  var map = new google.maps.Map(document.getElementById(id), myOptions);
  var marker = new google.maps.Marker({
    position: latlng,
    map: map,
    title:"네오위즈게임즈",
    animation: google.maps.Animation.DROP
  });
  var contentString = '<div style="width:240px; font:normal 12px 돋움, 굴림, \'맑은 고딕\', NanumGothic, verdana, sans-serif; color:#000;">'+
    '<b>네오위즈게임즈</b><br>'+
    '463-400<br>경기도 성남시 분당구 대왕판교로645번길 14<br>네오위즈판교타워</div>';
  var infowindow = new google.maps.InfoWindow({
    content: contentString
  });

  infowindow.open(map,marker);
  google.maps.event.addListener(marker, 'click', function() { infowindow.open(map,marker); });
}

$(function() {
  display_map("side_map");
});


