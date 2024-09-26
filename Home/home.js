// Mevcut aktif videoyu mute yapan fonksiyon (pause kaldırıldı)
function muteActiveVideo() {
    const activeVideo = document.querySelector('.carousel-item.active video');
    if (activeVideo) {
        activeVideo.muted = true;  // Videoyu sessize al
        const iconId = `icon${activeVideo.id.slice(-1)}`;  // İlgili mute ikonunu bul
        const icon = document.getElementById(iconId);
        if (icon) {
            icon.src = "https://img.icons8.com/ios-filled/50/ffffff/mute.png";  // Ses kapalı ikon
        }
    }
}

// Carousel'de slayt değiştiğinde yeni videoyu başlatan fonksiyon
function playCurrentVideo(event) {
    const newVideo = event.relatedTarget.querySelector('video');
    if (newVideo) {
        newVideo.muted = false;  // Yeni videonun sesini aç
    }
}

// Next ve Previous butonlarına tıklama olayını yakala
const nextButton = document.querySelector('.carousel-control-next');
const prevButton = document.querySelector('.carousel-control-prev');

nextButton.addEventListener('click', function () {
    muteActiveVideo();  // Önce mevcut videoyu mute et
});

prevButton.addEventListener('click', function () {
    muteActiveVideo();  // Önce mevcut videoyu mute et
});

// Slayt geçişinde yeni videonun sesini aç
const carousel = document.getElementById('myCarousel');
carousel.addEventListener('slid.bs.carousel', playCurrentVideo);

// Mute/Unmute yapmak için fonksiyon
function toggleMute(videoId, buttonId) {
    const video = document.getElementById(videoId);
    const icon = document.getElementById(`icon${videoId.slice(-1)}`);

    if (video.muted) {
        video.muted = false;
        icon.src = "https://img.icons8.com/ios-filled/50/ffffff/speaker.png"; // Ses açılmış ikon
    } else {
        video.muted = true;
        icon.src = "https://img.icons8.com/ios-filled/50/ffffff/mute.png"; // Ses kapalı ikon
    }
}
