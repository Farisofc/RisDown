// Dark mode toggle functionality
        document.getElementById('toggleButton').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const icon = document.getElementById('toggleButton');
            icon.innerHTML = document.body.classList.contains('dark-mode') ? "🌞" : "🌙";
        });

        // Regular expression for validating TikTok URL
        
        // Event listener untuk tombol download
document.getElementById('searchButton').addEventListener('click', function () {
    const urlInput = document.getElementById('url');
    const url = urlInput.value;
    const resultsContainer = document.querySelector('.resultsContainer');
    const errorMessage = document.querySelector('.errorMessage');

    if (url.trim() === '') {
        resultsContainer.style.display = 'none';
        errorMessage.style.display = 'block';
        return;
    } else {
        errorMessage.style.display = 'none';

        fetch(`https://website-restapii.vercel.app/tiktokdll?url=${url}&key=farisofc`)
            .then(response => response.json())
            .then(tik => {
                // Tampilkan detail video
                document.getElementById('Region').textContent = `Region: ${tik.result.data.region}`;
                document.getElementById('videoAuthor').textContent = `Author: ${tik.result.data.author.nickname}`;
                document.getElementById('videoDescription').textContent = `Description: ${tik.result.data.title}`;

                // Tampilkan thumbnail
                const thumbnail = tik.result.data.author.avatar;
                const videoThumbnail = document.getElementById('videoThumbnail');
                videoThumbnail.src = thumbnail;
                videoThumbnail.style.display = 'block';

                // Tampilkan audio title di atas tombol download audio
                const audioTitle = document.getElementById('audioTitle');
                audioTitle.textContent = `Audio Title: ${tik.result.data.music_info.title} by ${tik.result.data.music_info.author}`;

                // Video player
                const videoPlayer = document.getElementById('videoPlayer');
                videoPlayer.src = tik.result.data.hdplay;
                videoPlayer.style.display = 'block';

                // Tambahkan event listener untuk tombol download video
                document.getElementById('downloadVideoButton').addEventListener('click', function () {
                    const downloadVideo = document.createElement('a');
                    downloadVideo.href = tik.result.data.hdplay;
                    downloadVideo.download = `Snaptikris.mp4`;
                });

                // Tambahkan event listener untuk tombol download audio
                document.getElementById('downloadAudioButton').addEventListener('click', function () {
                    const downloadAudio = document.createElement('a');
                    downloadAudio.href = tik.result.data.music_info.play;
                    downloadAudio.download = `tiktok-audio.mp3`;
                });

                // Tambahkan event listener untuk tombol download thumbnail
                document.getElementById('downloadImageButton').addEventListener('click', function () {
                    const downloadImage = document.createElement('a');
                    downloadImage.href = tik.result.data.origin_cover;
                    downloadImage.download = `tiktok-thumbnail.jpg`;
                });

                resultsContainer.style.display = 'block';
            })
            .catch(error => {
                console.error(error);
                errorMessage.style.display = 'block';
            });
    }
});
