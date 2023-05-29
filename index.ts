let 제목 = document.querySelector('#title');
if(제목 != null) {
	제목.innerHTML = '반가워요'; 
}

let 링크 = document.querySelector('.link');
if(링크 instanceof HTMLAnchorElement) {
	링크.href = 'https.//kakao.com';
}