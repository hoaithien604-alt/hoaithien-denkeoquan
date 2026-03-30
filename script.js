document.addEventListener('DOMContentLoaded', () => {
    console.log('Trang web của Hoài Thiện đã load xong!');
    if(window.location.pathname.endsWith('index.html') || window.location.pathname === '/') {
        alert('Chào mừng bạn đến với Bài kiểm tra giữa kỳ của Hoài Thiện!');
    }
});
