 // Dark mode toggle functionality
        document.getElementById('toggleButton').addEventListener('click', function() {
            document.body.classList.toggle('dark-mode');
            const icon = document.getElementById('toggleButton');
            icon.innerHTML = document.body.classList.contains('dark-mode') ? "🌞" : "🌙";
        });

        // Regular expression for validating TikTok URL
        
        document.getElementById('searchButton').addEventListener('click', function() {
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
 
                fetch(`https://website-restapii.vercel.app/tiktok?url=${url}&key=farisofc`)
                    .then(response => response.json())
                    .then(data => {
                     
                        // Set video details
document.getElementById('Region').textContent = `Region: ${tik.result.data.region}`;   
                     document.getElementById('videoAuthor').textContent = `Author: ${data.result.authot}`;
                        document.getElementById('videoDescription').textContent = `Description: ${data.result.title}`;

                        // Show and resize the thumbnail
                        const thumbnail = tik.result.data.author.avatar;
                        const videoThumbnail = document.getElementById('videoThumbnail');
                        videoThumbnail.src = thumbnail;
                        videoThumbnail.style.display = 'block';

                        // Set video player
                        const videoPlayer = document.getElementById('videoPlayer');
                        videoPlayer.src = data.result.nowm;
                        videoPlayer.style.display = 'block';
                        videoPlayer.click();
                        

                        // Set download links
                       // Trigger Autodownload (MP4 Video)
                document.getElementById('downloadButton').href = data.result.nowm;
                const downloadVideo = document.getElementById('downloadButton');
                     
                // Simulasi klik untuk unduhan otomatis video
                
                // Optional: Trigger Autodownload (MP3 Audio)
                document.getElementById('downloadAudioButton').href = tik.result.data.music_info.play;
                const downloadAudio = document.getElementById('downloadAudioButton');
                // Simulasi klik untuk unduhan otomatis audio


const mp3Title = tik.result.data.music_info.title;
                document.getElementById('mp3Title').style.display = 'block';
                document.getElementById('mp3Title').textContent = `Download MP3: ${mp3Title}`;
                document.getElementById('downloadImageButton').addEventListener('click', function() {
    const thumbnail = document.getElementById('videoThumbnail');
    const imageUrl = tik.result.data.origin_cover; // Mendapatkan URL gambar

    // Membuat elemen link sementara untuk mengunduh gambar
    const link = document.createElement('a');
    link.href = imageUrl;
    link.download = 'tiktok-thumbnail.jpg'; // Menentukan nama file gambar
    link.click(); // Menjalankan download
});                   
                    });
                resultsContainer.style.display = 'block';
            }
        });
