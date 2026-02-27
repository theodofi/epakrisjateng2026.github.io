/* script.js */
const daftarBulan = [
    { nama: 'Januari', rencana: 'https://forms.gle/GiVcFtcem6ytDtzz9', realisasi: 'https://forms.gle/RnoxVBZejWERMs2bA', warna: 'from-blue-400 to-blue-600' },
    { nama: 'Februari', rencana: 'https://forms.gle/PPsmVs3YJsnUy6T29', realisasi: 'https://forms.gle/9mxLv9WvfDkyjtNE8', warna: 'from-blue-400 to-blue-600' },
    { nama: 'Maret', rencana: 'https://forms.gle/6a9mmF3hp2X2oufR7', realisasi: 'https://forms.gle/TwbwEyjQFZLVQQL16', warna: 'from-blue-400 to-blue-600' },
    { nama: 'April', rencana: '#', realisasi: '#', warna: 'from-green-400 to-green-600' },
    { nama: 'Mei', rencana: '#', realisasi: '#', warna: 'from-green-400 to-green-600' },
    { nama: 'Juni', rencana: '#', realisasi: '#', warna: 'from-green-400 to-green-600' },
    { nama: 'Juli', rencana: '#', realisasi: '#', warna: 'from-orange-400 to-orange-600' },
    { nama: 'Agustus', rencana: '#', realisasi: '#', warna: 'from-orange-400 to-orange-600' },
    { nama: 'September', rencana: '#', realisasi: '#', warna: 'from-orange-400 to-orange-600' },
    { nama: 'Oktober', rencana: '#', realisasi: '#', warna: 'from-purple-400 to-purple-600' },
    { nama: 'November', rencana: '#', realisasi: '#', warna: 'from-purple-400 to-purple-600' },
    { nama: 'Desember', rencana: '#', realisasi: '#', warna: 'from-purple-400 to-purple-600' }
];

function renderBulan() {
    const container = document.getElementById('container-bulan');
    if (!container) return;

    let htmlContent = '';
    daftarBulan.forEach((bln, index) => {
        const urutan = String(index + 1).padStart(2, '0');
        htmlContent += `
            <div class="month-btn animate-fade-in" style="animation-delay: ${index * 0.05}s">
                <div class="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-4 md:p-5 text-center">
                    <div class="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br ${bln.warna} flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        ${urutan}
                    </div>
                    <h3 class="text-white font-semibold text-base mb-3">${bln.nama} 2026</h3>
                    <div class="space-y-2">
                        <a href="${bln.rencana}" target="_blank" class="block bg-green-500/90 hover:bg-green-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-all">📝 Rencana</a> 
                        <a href="${bln.realisasi}" target="_blank" class="block bg-orange-500/90 hover:bg-orange-600 text-white text-xs font-medium py-2 px-3 rounded-lg transition-all">📊 Realisasi</a>
                    </div>
                </div>
            </div>
        `;
    });
    container.innerHTML = htmlContent;
}

// Pastikan fungsi jalan saat halaman siap
window.addEventListener('DOMContentLoaded', renderBulan);