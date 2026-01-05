(async function () {
    try {
        const res = await fetch(
            'https://docs.google.com/spreadsheets/d/1fa3204hF3grsAIzXKsD0cggI87oC_zrKWNnwX8AQdpQ/export?format=csv&t=' + Date.now()
        );
        const text = await res.text();
        const channel = text.split(/[\r\n,]+/)[0].trim();
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
