(async function () {
    try {
        const res = await fetch(
            'https://cdn.jsdelivr.net/gh/danik363/web-chat-loader@main/config.json?t=' + Date.now()
        );

        const { channel } = await res.json();
        if (!channel) return;

        if (document.getElementById('livechat')) return;

        const s = document.createElement('script');
        s.defer = true;
        s.src = 'https://livechat.hibot.us/hibot-chat.min.js';
        s.dataset.channel = channel;
        s.id = 'livechat';

        document.head.appendChild(s);
    } catch (e) {
        console.error('Hibot loader error', e);
    }
})();
