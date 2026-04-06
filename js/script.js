/* script.js */
const daftarBulan = [
    { nama: 'Januari', rencana: 'https://forms.gle/GiVcFtcem6ytDtzz9', realisasi: 'https://forms.gle/RnoxVBZejWERMs2bA', warna: 'from-blue-400 to-blue-600' },
    { nama: 'Februari', rencana: 'https://forms.gle/PPsmVs3YJsnUy6T29', realisasi: 'https://forms.gle/9mxLv9WvfDkyjtNE8', warna: 'from-blue-400 to-blue-600' },
    { nama: 'Maret', rencana: 'https://forms.gle/6a9mmF3hp2X2oufR7', realisasi: 'https://forms.gle/TwbwEyjQFZLVQQL16', warna: 'from-blue-400 to-blue-600' },
    { nama: 'April', rencana: 'https://forms.gle/wsCYfX8CKyjRJK9e7', realisasi: 'https://forms.gle/Byq9wxGiNk583LsF8', warna: 'from-green-400 to-green-600' },
    { nama: 'Mei', rencana: 'https://forms.gle/fvZ8ytpiDvnFfSUM6', realisasi: 'https://forms.gle/vCV9r6wjEG3mM9F58', warna: 'from-green-400 to-green-600' },
    { nama: 'Juni', rencana: 'https://forms.gle/PZuJ5uSNhaP4VGcx9', realisasi: 'https://forms.gle/MkoB7bgE6W13DBMd7', warna: 'from-green-400 to-green-600' },
    { nama: 'Juli', rencana: 'https://forms.gle/5qMrXuazDUoCd4x18', realisasi: 'https://forms.gle/pzw47biUQnMhtYYH6', warna: 'from-orange-400 to-orange-600' },
    { nama: 'Agustus', rencana: 'https://forms.gle/qfsHqPGFBhggUhK99', realisasi: 'https://forms.gle/vXrqWNW64YmLym5y7', warna: 'from-orange-400 to-orange-600' },
    { nama: 'September', rencana: 'https://forms.gle/55rzis9r658f4eRV8', realisasi: 'https://forms.gle/H7sYBbRFTXztdmE26', warna: 'from-orange-400 to-orange-600' },
    { nama: 'Oktober', rencana: 'https://forms.gle/9gVB7fbZP1Xef6nZ8', realisasi: 'https://forms.gle/AUHeP6pz5RC8XhzG6', warna: 'from-purple-400 to-purple-600' },
    { nama: 'November', rencana: 'https://forms.gle/wDs2TPYmGbyQcC5S7', realisasi: 'https://forms.gle/gRWSt4i2rcDKGzJD6', warna: 'from-purple-400 to-purple-600' },
    { nama: 'Desember', rencana: 'https://forms.gle/63CiK4oLXkjndyU69', realisasi: 'https://forms.gle/usAZbSBy55iXDoNB8', warna: 'from-purple-400 to-purple-600' }
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