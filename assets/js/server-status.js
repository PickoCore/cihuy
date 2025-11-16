
document.addEventListener('DOMContentLoaded', () => {
    const statusEl = document.getElementById('server-status-text');
    const playersEl = document.getElementById('server-players-text');

    if (!statusEl || !playersEl) return;

    async function fetchStatus() {
        try {
            statusEl.textContent = 'Checking...';
            playersEl.textContent = '-';

            const res = await fetch('https://api.mcsrvstat.us/3/cihuy.xyz', { cache: 'no-store' });
            const data = await res.json();

            if (data && data.online) {
                statusEl.textContent = 'Online';
                statusEl.classList.remove('offline');
                statusEl.classList.add('online');

                const online = data.players && typeof data.players.online === 'number'
                    ? data.players.online
                    : 0;

                playersEl.textContent = online.toString();
            } else {
                statusEl.textContent = 'Offline';
                statusEl.classList.remove('online');
                statusEl.classList.add('offline');
                playersEl.textContent = '0';
            }
        } catch (err) {
            console.error('Error fetching server status', err);
            statusEl.textContent = 'Error';
            statusEl.classList.remove('online');
            statusEl.classList.add('offline');
        }
    }

    fetchStatus();
    setInterval(fetchStatus, 60000);
});
