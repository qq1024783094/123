const cursor = document.createElement('div');
cursor.style.position = 'absolute';
cursor.style.width = '35px';
cursor.style.height = '35px';
// 使用多边形来绘制星星形状（这里通过设置clip-path属性实现，不同浏览器兼容性略有差异）
cursor.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
cursor.style.backgroundColor = 'gold'; // 设置金色背景
cursor.style.boxShadow = '0 0 12px 6px rgba(255, 215, 0, 0.8), 0 0 15px 8px rgba(255, 255, 255, 0.6)';
cursor.style.animation = 'blink 1s infinite alternate'; // 添加闪烁动画效果
cursor.style.pointerEvents = 'none';
document.body.appendChild(cursor);

// 定义闪烁动画的keyframes
const styleSheet = document.styleSheet || document.createElement('style').sheet;
styleSheet.insertRule('@keyframes blink { from { opacity: 1; } to { opacity: 0.5; } }', styleSheet.cssRules.length);
// 创建星尘元素的函数
function createStar() {
    const star = document.createElement('span');
    star.style.position = 'absolute';
    star.style.width = Math.random() * 5 + 2 + 'px'; // 随机大小
    star.style.height = star.style.width;
    star.style.borderRadius = '50%';
    star.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    star.style.pointerEvents = 'none';
    document.getElementById('stars').appendChild(star);
    return star;
}

// 鼠标移动事件处理函数
document.addEventListener('mousemove', function (e) {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';

    const star = createStar();
    star.style.left = e.pageX + 'px';
    star.style.top = e.pageY + 'px';
    // 后续渐隐等相关代
    const fadeOut = function () {
        star.style.opacity = parseFloat(star.style.opacity) - 0.05;
        if (parseFloat(star.style.opacity) > 0) {
            requestAnimationFrame(fadeOut);
        } else {
            star.remove();
        }
    };
    star.style.opacity = 1;
    requestAnimationFrame(fadeOut);
});
