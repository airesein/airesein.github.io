document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const modal = document.getElementById('modal');
    const modalImg = document.getElementById('modal-image');

    // 显示大图
    function showLargeImage(src) {
        modal.classList.remove('hidden');
        modalImg.src = src;
        document.body.style.overflow = 'hidden'; // 禁用滚动
    }

    // 隐藏大图
    function hideLargeImage() {
        modal.classList.add('hidden');
        modalImg.src = '';
        document.body.style.overflow = 'auto'; // 恢复滚动
    }

    gallery.addEventListener('click', (event) => {
        if (event.target.tagName === 'IMG') {
            const imgRect = event.target.getBoundingClientRect();
            const clickX = event.clientX;

            // 点击左边显示大图
            if (clickX < imgRect.left + imgRect.width / 2) {
                showLargeImage(event.target.src);
            }
            // 点击右边复制链接
            else {
                navigator.clipboard.writeText(event.target.src);
            }
        }
    });

    modal.addEventListener('click', () => {
        hideLargeImage();
    });
});