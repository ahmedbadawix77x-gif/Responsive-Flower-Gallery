// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    initApp();
});

// Main initialization function
function initApp() {
    // Start with refresh screen
    showRefreshScreen();
    
    // After 3 seconds, transition to main content
    setTimeout(() => {
        transitionToMainContent();
    }, 3000);
}

// Show refresh screen
function showRefreshScreen() {
    const refreshScreen = document.getElementById('refreshScreen');
    refreshScreen.style.display = 'flex';
    
    // Create refresh elements
    createRefreshShapes();
    createRefreshSparkles();
    createRefreshParticles();
}

// Transition to main content
function transitionToMainContent() {
    const refreshScreen = document.getElementById('refreshScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Fade out refresh screen
    refreshScreen.style.opacity = '0';
    refreshScreen.style.transform = 'scale(1.1)';
    
    // After transition, hide refresh screen and show main content
    setTimeout(() => {
        refreshScreen.style.display = 'none';
        mainContent.style.opacity = '1';
        
        // Initialize main content
        initMainContent();
    }, 1000);
}

// Create refresh screen shapes
function createRefreshShapes() {
    const container = document.querySelector('.refresh-shapes');
    const shapeCount = 20;
    
    for (let i = 0; i < shapeCount; i++) {
        const shape = document.createElement('div');
        shape.classList.add('refresh-shape');
        
        // Random shape types
        const shapes = ['❤', '⭐', '🎈', '🌹', '✨', '🎂', '🎁', '🎀', '🍓', '💖'];
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
        
        // Random properties
        const size = Math.random() * 30 + 20;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 8 + Math.random() * 7;
        
        shape.innerHTML = randomShape;
        shape.style.fontSize = `${size}px`;
        shape.style.left = `${left}%`;
        shape.style.animationDelay = `${delay}s`;
        shape.style.animationDuration = `${duration}s`;
        
        // Random color for some shapes
        if (Math.random() > 0.5) {
            const colors = ['#ff91a4', '#ff6b8b', '#ff4d6d', '#ff85a2', '#ffb6c1', '#d8b4fe', '#c084fc', '#a5b4fc'];
            const color = colors[Math.floor(Math.random() * colors.length)];
            shape.style.color = color;
        }
        
        container.appendChild(shape);
    }
}

// Create refresh screen sparkles
function createRefreshSparkles() {
    const container = document.querySelector('.refresh-sparkles');
    const sparkleCount = 25;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('refresh-sparkle');
        
        // Random properties
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 2 + Math.random() * 3;
        
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        sparkle.style.animationDelay = `${delay}s`;
        sparkle.style.animationDuration = `${duration}s`;
        
        container.appendChild(sparkle);
    }
}

// Create refresh screen particles
function createRefreshParticles() {
    const container = document.querySelector('.refresh-particles');
    const particleCount = 30;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('refresh-particle');
        
        // Random properties
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Random color
        const colors = ['#ff91a4', '#ff6b8b', '#ff4d6d', '#ff85a2', '#ffb6c1', '#d8b4fe', '#c084fc', '#a5b4fc'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        container.appendChild(particle);
    }
}

// Initialize main content
function initMainContent() {
    // Create background elements
    createBackgroundElements();
    
    // Create balloons
    createBalloons();
    
    // Create cake sparkles
    createCakeSparkles();
    
    // Start celebration animations
    startCelebrationAnimations();
    
    // Initialize music player
    initMusicPlayer();
    
    // Initialize confetti
    createConfetti();
}

// Create background elements
function createBackgroundElements() {
    // Create floating hearts
    createFloatingHearts();
    
    // Create sparkles
    createSparkles();
    
    // Create pink clouds
    createPinkClouds();
    
    // Create floating texts
    createFloatingTexts();
}

// Create floating hearts
function createFloatingHearts() {
    const container = document.querySelector('.floating-hearts');
    const heartCount = 20;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        
        // Random properties
        const size = Math.random() * 20 + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        
        heart.style.fontSize = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
        heart.style.color = `rgba(255, ${107 + Math.random() * 50}, ${139 + Math.random() * 50}, ${0.3 + Math.random() * 0.4})`;
        
        container.appendChild(heart);
    }
}

// Create sparkles
function createSparkles() {
    const container = document.querySelector('.sparkles');
    const sparkleCount = 30;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle');
        
        // Random properties
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 2 + Math.random() * 3;
        
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        sparkle.style.animationDelay = `${delay}s`;
        sparkle.style.animationDuration = `${duration}s`;
        
        container.appendChild(sparkle);
    }
}

// Create pink clouds
function createPinkClouds() {
    const container = document.querySelector('.pink-clouds');
    const cloudCount = 5;
    
    for (let i = 0; i < cloudCount; i++) {
        const cloud = document.createElement('div');
        cloud.classList.add('cloud');
        
        // Random properties
        const top = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 15;
        
        cloud.style.top = `${top}%`;
        cloud.style.animationDelay = `${delay}s`;
        cloud.style.animationDuration = `${duration}s`;
        
        container.appendChild(cloud);
    }
}

// Create floating texts
function createFloatingTexts() {
    const container = document.querySelector('.floating-texts');
    const texts = ['HANAAAAAAAA', '17', 'BIRTHDAYYYYYYY', 'YOU ARE BEUTIFULL', 'HANAAAAAAAA', 'CELEBRATEEEEEEE', 'HAPPYYYYYY'];
    const textCount = 10;
    
    for (let i = 0; i < textCount; i++) {
        const text = document.createElement('div');
        text.classList.add('floating-text');
        
        // Random properties
        const randomText = texts[Math.floor(Math.random() * texts.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 20;
        const duration = 15 + Math.random() * 15;
        
        text.innerHTML = randomText;
        text.style.left = `${left}%`;
        text.style.animationDelay = `${delay}s`;
        text.style.animationDuration = `${duration}s`;
        
        container.appendChild(text);
    }
}

// Create balloons
function createBalloons() {
    const container = document.querySelector('.balloons-container');
    const balloonCount = 15;
    
    for (let i = 0; i < balloonCount; i++) {
        const balloon = document.createElement('div');
        balloon.classList.add('balloon');
        
        // Random properties
        const size = Math.random() * 30 + 40;
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 20 + Math.random() * 10;
        
        // Random balloon colors
        const colors = [
            'var(--pink-light)',
            'var(--pink-medium)',
            'var(--pink-dark)',
            'var(--pink-bright)',
            'var(--pink-deep)',
            'var(--strawberry)',
            'var(--strawberry-light)',
            'var(--purple-light)',
            'var(--purple-medium)',
            'var(--blue-light)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        balloon.style.width = `${size}px`;
        balloon.style.height = `${size * 1.2}px`;
        balloon.style.left = `${left}%`;
        balloon.style.animationDelay = `${delay}s`;
        balloon.style.animationDuration = `${duration}s`;
        balloon.style.background = color;
        
        container.appendChild(balloon);
    }
}

// Create cake sparkles
function createCakeSparkles() {
    const container = document.querySelector('.cake-sparkles');
    const sparkleCount = 10;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('cake-sparkle');
        
        // Random properties
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 2 + Math.random() * 3;
        
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        sparkle.style.animationDelay = `${delay}s`;
        sparkle.style.animationDuration = `${duration}s`;
        
        container.appendChild(sparkle);
    }
}

// Create cake particles
function createCakeParticles() {
    const container = document.querySelector('.cake-particles');
    const particleCount = 15;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('cake-particle');
        
        // Random properties
        const left = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 8 + Math.random() * 7;
        
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Random color
        const colors = ['#ff91a4', '#ff6b8b', '#ff4d6d', '#ff85a2', '#ffb6c1'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        container.appendChild(particle);
    }
}

// Start celebration animations
function startCelebrationAnimations() {
    // Add floating roses to photo
    createFloatingRoses();
    
    // Create strawberries around name
    createStrawberries();
    
    // Create hearts around name
    createHeartsAroundName();
    
    // Create sparkles around name
    createSparklesAroundName();
    
    // Create cake decorations
    createCakeDecorations();
    
    // Create cake particles
    createCakeParticles();
    
    // Create photo particles
    createPhotoParticles();
}

// Create floating roses
function createFloatingRoses() {
    const container = document.querySelector('.floating-roses');
    const roseCount = 6;
    
    for (let i = 0; i < roseCount; i++) {
        const rose = document.createElement('div');
        rose.classList.add('rose');
        rose.innerHTML = '🌹';
        
        // Random properties
        const size = Math.random() * 20 + 15;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 10;
        const duration = 8 + Math.random() * 8;
        
        rose.style.fontSize = `${size}px`;
        rose.style.left = `${left}%`;
        rose.style.top = `${top}%`;
        rose.style.animationDelay = `${delay}s`;
        rose.style.animationDuration = `${duration}s`;
        
        container.appendChild(rose);
    }
}

// Create strawberries around name
function createStrawberries() {
    const container = document.querySelector('.strawberries');
    const strawberryCount = 8;
    
    for (let i = 0; i < strawberryCount; i++) {
        const strawberry = document.createElement('div');
        strawberry.classList.add('strawberry');
        strawberry.innerHTML = '🍓';
        
        // Random properties
        const size = Math.random() * 10 + 20;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = 6 + Math.random() * 6;
        
        strawberry.style.fontSize = `${size}px`;
        strawberry.style.left = `${left}%`;
        strawberry.style.top = `${top}%`;
        strawberry.style.animationDelay = `${delay}s`;
        strawberry.style.animationDuration = `${duration}s`;
        
        container.appendChild(strawberry);
    }
}

// Create hearts around name
function createHeartsAroundName() {
    const container = document.querySelector('.hearts-around');
    const heartCount = 10;
    
    for (let i = 0; i < heartCount; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart-around');
        
        // Random heart types
        const hearts = ['❤', '💖', '💕', '💗', '💓', '💞', '💝'];
        const randomHeart = hearts[Math.floor(Math.random() * hearts.length)];
        
        // Random properties
        const size = Math.random() * 15 + 15;
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 6;
        const duration = 4 + Math.random() * 4;
        
        heart.innerHTML = randomHeart;
        heart.style.fontSize = `${size}px`;
        heart.style.left = `${left}%`;
        heart.style.top = `${top}%`;
        heart.style.animationDelay = `${delay}s`;
        heart.style.animationDuration = `${duration}s`;
        
        container.appendChild(heart);
    }
}

// Create sparkles around name
function createSparklesAroundName() {
    const container = document.querySelector('.sparkles-around');
    const sparkleCount = 15;
    
    for (let i = 0; i < sparkleCount; i++) {
        const sparkle = document.createElement('div');
        sparkle.classList.add('sparkle-around');
        
        // Random properties
        const left = Math.random() * 100;
        const top = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = 2 + Math.random() * 3;
        
        sparkle.style.left = `${left}%`;
        sparkle.style.top = `${top}%`;
        sparkle.style.animationDelay = `${delay}s`;
        sparkle.style.animationDuration = `${duration}s`;
        
        container.appendChild(sparkle);
    }
}

// Create cake decorations
function createCakeDecorations() {
    const container = document.querySelector('.decorations');
    const decorationCount = 5;
    
    for (let i = 0; i < decorationCount; i++) {
        const decoration = document.createElement('div');
        decoration.classList.add('decoration');
        
        // Random properties
        const delay = i * 0.3;
        
        decoration.style.animationDelay = `${delay}s`;
        
        container.appendChild(decoration);
    }
}

// Create photo particles
function createPhotoParticles() {
    const container = document.querySelector('.photo-particles');
    const particleCount = 20;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('photo-particle');
        
        // Random properties
        const left = Math.random() * 100;
        const delay = Math.random() * 15;
        const duration = 10 + Math.random() * 10;
        
        particle.style.left = `${left}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.animationDuration = `${duration}s`;
        
        // Random color
        const colors = ['#ff91a4', '#ff6b8b', '#ff4d6d', '#ff85a2', '#ffb6c1'];
        const color = colors[Math.floor(Math.random() * colors.length)];
        particle.style.background = color;
        
        container.appendChild(particle);
    }
}

// Create confetti
function createConfetti() {
    const container = document.querySelector('.confetti-container');
    const confettiCount = 50;
    
    for (let i = 0; i < confettiCount; i++) {
        const confetti = document.createElement('div');
        confetti.classList.add('confetti');
        
        // Random properties
        const width = Math.random() * 10 + 5;
        const height = Math.random() * 15 + 10;
        const left = Math.random() * 100;
        const delay = Math.random() * 5;
        const duration = Math.random() * 3 + 3;
        
        // Random confetti colors
        const colors = [
            'var(--pink-light)',
            'var(--pink-medium)',
            'var(--pink-dark)',
            'var(--pink-bright)',
            'var(--strawberry)',
            'var(--strawberry-light)',
            'var(--purple-light)',
            'var(--purple-medium)',
            'var(--blue-light)'
        ];
        const color = colors[Math.floor(Math.random() * colors.length)];
        
        confetti.style.width = `${width}px`;
        confetti.style.height = `${height}px`;
        confetti.style.left = `${left}%`;
        confetti.style.animationDelay = `${delay}s`;
        confetti.style.animationDuration = `${duration}s`;
        confetti.style.background = color;
        
        // Random rotation
        const rotation = Math.random() * 360;
        confetti.style.transform = `rotate(${rotation}deg)`;
        
        container.appendChild(confetti);
    }
}

// Music Player Functionality
function initMusicPlayer() {
    const musicPlayer = {
        audio: document.getElementById('main-audio'),
        playBtn: document.getElementById('play'),
        prevBtn: document.getElementById('prev'),
        nextBtn: document.getElementById('next'),
        repeatBtn: document.getElementById('repeat'),
        shuffleBtn: document.getElementById('shuffle'),
        volumeSlider: document.getElementById('volume'),
        songTitle: document.querySelector('.song-title'),
        songArtist: document.querySelector('.song-artist'),
        progressBar: document.querySelector('.progress'),
        progressGlow: document.querySelector('.progress-glow'),
        currentTime: document.querySelector('.current'),
        songDuration: document.querySelector('.duration'),
        visualizerBars: document.querySelector('.visualizer-bars'),
        songs: document.querySelectorAll('.song'),
        isPlaying: false,
        currentSongIndex: 0,
        isShuffled: false,
        isRepeated: false,
        
        init: function() {
            // Set up event listeners
            this.playBtn.addEventListener('click', () => this.togglePlay());
            this.prevBtn.addEventListener('click', () => this.prevSong());
            this.nextBtn.addEventListener('click', () => this.nextSong());
            this.repeatBtn.addEventListener('click', () => this.toggleRepeat());
            this.shuffleBtn.addEventListener('click', () => this.toggleShuffle());
            this.volumeSlider.addEventListener('input', () => this.setVolume());
            
            // Set up song click events
            this.songs.forEach((song, index) => {
                song.addEventListener('click', () => this.playSelectedSong(index));
            });
            
            // Set up audio event listeners
            this.audio.addEventListener('loadedmetadata', () => this.updateSongDuration());
            this.audio.addEventListener('timeupdate', () => this.updateProgress());
            this.audio.addEventListener('ended', () => this.songEnded());
            
            // Set up progress bar click
            document.querySelector('.progress-bar').addEventListener('click', (e) => this.setProgress(e));
            
            // Create visualizer bars
            this.createVisualizer();
            
            // Create song waves
            this.createSongWaves();
            
            // Load first song
            this.loadSong(this.currentSongIndex);
            
            // Set initial volume
            this.setVolume();
        },
        
        loadSong: function(index) {
            const song = this.songs[index];
            const audioSrc = song.querySelector('audio').src;
            
            this.audio.src = audioSrc;
            this.songTitle.textContent = song.querySelector('.song-name').textContent;
            this.songArtist.textContent = song.querySelector('.song-artist').textContent;
            
            // Update active song
            this.songs.forEach(s => s.classList.remove('active'));
            song.classList.add('active');
            
            // If already playing, play the new song
            if (this.isPlaying) {
                this.audio.play();
            }
            
            // Animate disc when song changes
            this.animateDisc();
        },
        
        togglePlay: function() {
            if (this.isPlaying) {
                this.pauseSong();
            } else {
                this.playSong();
            }
        },
        
        playSong: function() {
            this.isPlaying = true;
            this.audio.play();
            this.playBtn.innerHTML = '<i class="fas fa-pause"></i>';
            this.animateDisc();
            this.startVisualizer();
        },
        
        pauseSong: function() {
            this.isPlaying = false;
            this.audio.pause();
            this.playBtn.innerHTML = '<i class="fas fa-play"></i>';
            this.pauseDiscAnimation();
            this.stopVisualizer();
        },
        
        prevSong: function() {
            this.currentSongIndex--;
            if (this.currentSongIndex < 0) {
                this.currentSongIndex = this.songs.length - 1;
            }
            this.loadSong(this.currentSongIndex);
            if (this.isPlaying) {
                this.playSong();
            }
        },
        
        nextSong: function() {
            if (this.isShuffled) {
                this.playRandomSong();
            } else {
                this.currentSongIndex++;
                if (this.currentSongIndex >= this.songs.length) {
                    this.currentSongIndex = 0;
                }
                this.loadSong(this.currentSongIndex);
            }
            
            if (this.isPlaying) {
                this.playSong();
            }
        },
        
        playSelectedSong: function(index) {
            this.currentSongIndex = index;
            this.loadSong(this.currentSongIndex);
            this.playSong();
        },
        
        playRandomSong: function() {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * this.songs.length);
            } while (newIndex === this.currentSongIndex && this.songs.length > 1);
            
            this.currentSongIndex = newIndex;
            this.loadSong(this.currentSongIndex);
        },
        
        toggleRepeat: function() {
            this.isRepeated = !this.isRepeated;
            this.repeatBtn.classList.toggle('active', this.isRepeated);
            
            if (this.isRepeated) {
                this.audio.loop = true;
                this.repeatBtn.style.color = 'var(--pink-deep)';
            } else {
                this.audio.loop = false;
                this.repeatBtn.style.color = '';
            }
        },
        
        toggleShuffle: function() {
            this.isShuffled = !this.isShuffled;
            this.shuffleBtn.classList.toggle('active', this.isShuffled);
            
            if (this.isShuffled) {
                this.shuffleBtn.style.color = 'var(--pink-deep)';
            } else {
                this.shuffleBtn.style.color = '';
            }
        },
        
        setVolume: function() {
            const volume = this.volumeSlider.value / 100;
            this.audio.volume = volume;
            
            // Update volume icon based on volume level
            const volumeIcon = this.volumeSlider.previousElementSibling;
            if (volume === 0) {
                volumeIcon.className = 'fas fa-volume-mute';
            } else if (volume < 0.5) {
                volumeIcon.className = 'fas fa-volume-down';
            } else {
                volumeIcon.className = 'fas fa-volume-up';
            }
        },
        
        updateSongDuration: function() {
            const duration = this.audio.duration;
            const minutes = Math.floor(duration / 60);
            const seconds = Math.floor(duration % 60);
            this.songDuration.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
        },
        
        updateProgress: function() {
            const currentTime = this.audio.currentTime;
            const duration = this.audio.duration;
            
            // Update progress bar
            const progressPercent = (currentTime / duration) * 100;
            this.progressBar.style.width = `${progressPercent}%`;
            this.progressGlow.style.width = `${progressPercent}%`;
            
            // Update time display
            const currentMinutes = Math.floor(currentTime / 60);
            const currentSeconds = Math.floor(currentTime % 60);
            this.currentTime.textContent = `${currentMinutes}:${currentSeconds < 10 ? '0' : ''}${currentSeconds}`;
        },
        
        setProgress: function(e) {
            const progressBar = e.currentTarget;
            const clickX = e.offsetX;
            const width = progressBar.clientWidth;
            const duration = this.audio.duration;
            
            this.audio.currentTime = (clickX / width) * duration;
        },
        
        songEnded: function() {
            if (this.isRepeated) {
                this.audio.currentTime = 0;
                this.audio.play();
            } else {
                this.nextSong();
            }
        },
        
        createVisualizer: function() {
            // Clear existing bars
            this.visualizerBars.innerHTML = '';
            
            // Create 20 bars for the visualizer
            for (let i = 0; i < 20; i++) {
                const bar = document.createElement('div');
                bar.classList.add('visualizer-bar');
                
                // Random animation delay
                const delay = Math.random() * 1.5;
                bar.style.animationDelay = `${delay}s`;
                
                this.visualizerBars.appendChild(bar);
            }
        },
        
        createSongWaves: function() {
            this.songs.forEach(song => {
                const wave = song.querySelector('.song-wave');
                wave.innerHTML = '';
                
                // Create 4 bars for the wave
                for (let i = 0; i < 4; i++) {
                    const bar = document.createElement('div');
                    bar.classList.add('song-wave-bar');
                    wave.appendChild(bar);
                }
            });
        },
        
        startVisualizer: function() {
            const bars = document.querySelectorAll('.visualizer-bar');
            bars.forEach(bar => {
                bar.style.animationPlayState = 'running';
            });
        },
        
        stopVisualizer: function() {
            const bars = document.querySelectorAll('.visualizer-bar');
            bars.forEach(bar => {
                bar.style.animationPlayState = 'paused';
            });
        },
        
        animateDisc: function() {
            const disc = document.querySelector('.album-disc');
            disc.style.animationPlayState = 'running';
        },
        
        pauseDiscAnimation: function() {
            const disc = document.querySelector('.album-disc');
            disc.style.animationPlayState = 'paused';
        }
    };
    
    // Initialize the music player
    musicPlayer.init();
}

// Add birthday message in console
console.log(`
    🎂 Happy 19th Birthday HANA! 🎂
    
    Wishing you a day filled with love, laughter, 
    and all the happiness you deserve!
    
    May this year bring you closer to your dreams 
    and fill your life with beautiful moments.
    
    Enjoy your special day to the fullest! 💖
`);

// Add keyboard shortcuts
document.addEventListener('keydown', (e) => {
    // Space bar to play/pause music
    if (e.code === 'Space') {
        e.preventDefault();
        const playBtn = document.getElementById('play');
        if (playBtn) playBtn.click();
    }
    
    // Right arrow for next song
    if (e.code === 'ArrowRight') {
        const nextBtn = document.getElementById('next');
        if (nextBtn) nextBtn.click();
    }
    
    // Left arrow for previous song
    if (e.code === 'ArrowLeft') {
        const prevBtn = document.getElementById('prev');
        if (prevBtn) prevBtn.click();
    }
});
