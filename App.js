// App.js

document.addEventListener('DOMContentLoaded', () => {
    const chapters = document.querySelectorAll('.chapter');
  
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };
  
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if(entry.isIntersecting){
          entry.target.classList.add('in-view');
          observer.unobserve(entry.target); // Dejar de observar después de la primera vez
        }
      });
    }, options);
  
    chapters.forEach(chapter => {
      observer.observe(chapter);
    });
  
    // Modal functionality
    const modalOverlay = document.getElementById('modal-overlay');
    const modalContent = document.getElementById('modal-content');
    const modalImage = document.getElementById('modal-image');
    const modalVideo = document.getElementById('modal-video');
    const closeButton = document.getElementById('close-button');
  
    // Function to open the modal
    function openModal(type, src) {
      modalImage.style.display = 'none';
      modalVideo.style.display = 'none';
  
      if (type === 'image') {
        modalImage.src = src;
        modalImage.style.display = 'block';
      } else if (type === 'video') {
        modalVideo.src = src;
        modalVideo.style.display = 'block';
      }
  
      modalOverlay.classList.add('modal-open');
      modalContent.classList.add('modal-open');
    }
  
    // Function to close the modal
    function closeModal() {
      modalOverlay.classList.remove('modal-open');
      modalContent.classList.remove('modal-open');
      modalImage.src = '';
      modalVideo.src = '';
    }
  
    // Assign click events to images
    document.querySelectorAll('.chapter-image').forEach(image => {
      image.addEventListener('click', function() {
        openModal('image', this.src);
      });
    });
  
    // Assign click events to videos
    document.querySelectorAll('.video-container iframe').forEach(video => {
      video.addEventListener('click', function(e) {
        e.preventDefault();  // Stop the video from playing immediately
        openModal('video', this.src);
      });
    });
  
    // Event to close the modal
    closeButton.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', closeModal);
  });
  
  function openGame(gameId) {
    // Map the gameId to the actual game page URLs
    var gamePages = {
      'game1': 'BattleChess/Chess.html',
      'game2': 'BattlePoker/Poker.html',
      'game3': 'BattleRisk/Main.html'
    };
  
    // Get the URL for the selected game
    var gameUrl = gamePages[gameId];
  
    if (gameUrl) {
      // Check if the game page exists (optional)
      // This requires an additional request, which can be complex due to cross-origin policies
      // For simplicity, we'll proceed to navigate
  
      // Navigate to the game page
      window.location.href = gameUrl;
    } else {
      // Display an alert to the user
      alert('Sorry, the selected game is not available.');
    }
  }