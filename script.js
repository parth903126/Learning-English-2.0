// ============================================
// ENGLISH SAHELI - MAIN JAVASCRIPT
// ============================================

// ========== GLOBAL VARIABLES ==========
let currentLanguage = 'odia'; // 'odia' or 'english'
let userName = 'Learning Friend';
let userStats = {
    totalStars: 0,
    streakDays: 0,
    totalBadges: 0,
    levelsProgress: {
        level1: 0,
        level2: 0,
        level3: 0,
        level4: 0,
        level5: 0,
        level6: 0
    }
};

// ========== TRANSLATIONS ==========
const translations = {
    odia: {
        appSubtitle: 'ତୁମର ଇଂରାଜୀ ବନ୍ଧୁ',
        langText: 'ଓଡ଼ିଆ',
        welcomeText: 'ନମସ୍କାର,',
        starsLabel: 'ତାରା',
        streakLabel: 'ଦିନ',
        badgesLabel: 'ବ୍ୟାଜ୍',
        dailyWordTitle: 'ଆଜିର ଶବ୍ଦ (Word of the Day)',
        listenText: 'ଶୁଣ',
        levelsTitle: '📚 ତୁମର ଶିକ୍ଷା ଯାତ୍ରା (Learning Journey)',
        level1Name: 'ଅକ୍ଷର ଦୁଃସାହସିକ',
        level2Name: 'ଶବ୍ଦ ଜଗତ',
        level3Name: 'ଚିତ୍ର ଓ ଶବ୍ଦ',
        level4Name: 'ବାକ୍ୟ ଆରମ୍ଭ',
        level5Name: 'କାହାଣୀ ସମୟ',
        level6Name: 'କଥା ଓ ଲେଖା',
        completeText: 'ସମ୍ପୂର୍ଣ୍ଣ',
        startBtn: 'ଆରମ୍ଭ କର',
        lockedText: 'ତାଲା ବନ୍ଦ',
        quickActionsTitle: '⚡ ଦ୍ରୁତ କାର୍ଯ୍ୟ (Quick Actions)',
        practiceText: 'ଅଭ୍ୟାସ କର',
        gamesText: 'ଖେଳ',
        achievementsText: 'ପୁରସ୍କାର',
        progressText: 'ପ୍ରଗତି',
        mascotName: 'ରାଣୀ କହୁଛି:',
        mascotTip: 'ପ୍ରତିଦିନ ୧୫ ମିନିଟ୍ ଅଭ୍ୟାସ କର! 📚',
        settingsTitle: '⚙️ ସେଟିଂସ୍ (Settings)',
        soundLabel: 'ଧ୍ୱନି (Sound)',
        musicLabel: 'ସଂଗୀତ (Music)',
        darkModeLabel: 'ଡାର୍କ ମୋଡ୍ (Dark Mode)',
        resetText: 'ପ୍ରଗତି ରିସେଟ୍ କରନ୍ତୁ',
        nameModalTitle: '✏️ ନାମ ପରିବର୍ତ୍ତନ କରନ୍ତୁ',
        saveText: 'ସେଭ୍ କରନ୍ତୁ',
        footerText: 'Made with ❤️ for Odia Students | © 2024 English Saheli'
    },
    english: {
        appSubtitle: 'Your English Friend',
        langText: 'English',
        welcomeText: 'Hello,',
        starsLabel: 'Stars',
        streakLabel: 'Days',
        badgesLabel: 'Badges',
        dailyWordTitle: '📅 Word of the Day',
        listenText: 'Listen',
        levelsTitle: '📚 Your Learning Journey',
        level1Name: 'Alphabet Adventure',
        level2Name: 'Word World',
        level3Name: 'Picture & Words',
        level4Name: 'Sentence Starters',
        level5Name: 'Story Time',
        level6Name: 'Speaking & Writing',
        completeText: 'Complete',
        startBtn: 'Start',
        lockedText: 'Locked',
        quickActionsTitle: '⚡ Quick Actions',
        practiceText: 'Practice',
        gamesText: 'Games',
        achievementsText: 'Achievements',
        progressText: 'Progress',
        mascotName: 'Rani says:',
        mascotTip: 'Practice 15 minutes daily! 📚',
        settingsTitle: '⚙️ Settings',
        soundLabel: 'Sound',
        musicLabel: 'Music',
        darkModeLabel: 'Dark Mode',
        resetText: 'Reset Progress',
        nameModalTitle: '✏️ Edit Name',
        saveText: 'Save',
        footerText: 'Made with ❤️ for Odia Students | © 2024 English Saheli'
    }
};

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    loadUserData();
    updateUI();
    setupEventListeners();
    updateLevelsUI();
    checkDailyStreak();
});

// ========== LOAD USER DATA FROM LOCAL STORAGE ==========
function loadUserData() {
    const savedData = localStorage.getItem('englishSaheliData');
    if (savedData) {
        const data = JSON.parse(savedData);
        userName = data.userName || 'Learning Friend';
        userStats = data.userStats || userStats;
        currentLanguage = data.language || 'odia';
    }
}

// ========== SAVE USER DATA TO LOCAL STORAGE ==========
function saveUserData() {
    const data = {
        userName: userName,
        userStats: userStats,
        language: currentLanguage,
        lastVisit: new Date().toISOString()
    };
    localStorage.setItem('englishSaheliData', JSON.stringify(data));
}

// ========== UPDATE UI WITH CURRENT LANGUAGE ==========
function updateUI() {
    const lang = translations[currentLanguage];
    
    // Update all text elements
    document.getElementById('appSubtitle').textContent = lang.appSubtitle;
    document.getElementById('langText').textContent = lang.langText;
    document.getElementById('welcomeText').textContent = lang.welcomeText;
    document.getElementById('userName').textContent = userName;
    
    // Update stats labels
    document.getElementById('starsLabel').textContent = lang.starsLabel;
    document.getElementById('streakLabel').textContent = lang.streakLabel;
    document.getElementById('badgesLabel').textContent = lang.badgesLabel;
    
    // Update stats values
    document.getElementById('totalStars').textContent = userStats.totalStars;
    document.getElementById('streakDays').textContent = userStats.streakDays;
    document.getElementById('totalBadges').textContent = userStats.totalBadges;
    
    // Update daily word section
    document.getElementById('dailyWordTitle').textContent = lang.dailyWordTitle;
    document.getElementById('listenText').textContent = lang.listenText;
    
    // Update levels section
    document.getElementById('levelsTitle').innerHTML = `<i class="fas fa-layer-group"></i> ${lang.levelsTitle}`;
    
    // Update level names
    for (let i = 1; i <= 6; i++) {
        const nameElements = document.querySelectorAll(`#level${i}Name`);
        nameElements.forEach(el => {
            if (currentLanguage === 'odia') {
                el.style.display = 'none';
            } else {
                el.textContent = lang[`level${i}Name`];
                el.style.display = 'block';
            }
        });
        
        const completeElements = document.querySelectorAll(`#completeText${i}`);
        completeElements.forEach(el => el.textContent = lang.completeText);
        
        const startBtnElements = document.querySelectorAll(`#startBtn${i}`);
        startBtnElements.forEach(el => el.textContent = lang.startBtn);
        
        const lockedTextElements = document.querySelectorAll(`#lockedText${i}`);
        lockedTextElements.forEach(el => el.textContent = lang.lockedText);
    }
    
    // Quick action buttons - UPDATED
document.getElementById('practiceBtn').addEventListener('click', () => {
    window.location.href = 'quick-actions/practice.html';
});
document.getElementById('gamesBtn').addEventListener('click', () => {
    window.location.href = 'quick-actions/games.html';
});
document.getElementById('achievementsBtn').addEventListener('click', () => {
    window.location.href = 'quick-actions/achievements.html';
});
document.getElementById('progressBtn').addEventListener('click', () => {
    window.location.href = 'quick-actions/progress.html';
});
    // Update mascot tip
    document.getElementById('mascotName').textContent = lang.mascotName;
    document.getElementById('mascotTip').textContent = lang.mascotTip;
    
    // Update modals
    document.getElementById('settingsTitle').textContent = lang.settingsTitle;
    document.getElementById('soundLabel').textContent = lang.soundLabel;
    document.getElementById('musicLabel').textContent = lang.musicLabel;
    document.getElementById('darkModeLabel').textContent = lang.darkModeLabel;
    document.getElementById('resetText').textContent = lang.resetText;
    
    document.getElementById('nameModalTitle').textContent = lang.nameModalTitle;
    document.getElementById('saveText').textContent = lang.saveText;
    
    document.getElementById('footerText').textContent = lang.footerText;
}

// ========== UPDATE LEVELS UI ==========
function updateLevelsUI() {
    for (let i = 1; i <= 6; i++) {
        const card = document.querySelector(`[data-level="${i}"]`);
        const progressFill = card.querySelector('.progress-fill');
        const progressPercent = card.querySelector('.progress-percent');
        const progress = userStats.levelsProgress[`level${i}`];
        
        // Update progress bar
        progressFill.style.width = `${progress}%`;
        progressPercent.textContent = `${progress}%`;
        
        // Unlock all levels (CHANGED: removed condition)
        if (true) {  // ✅ Sab levels unlock
            card.classList.remove('locked');
            card.classList.add('unlocked');
            const lockOverlay = card.querySelector('.lock-overlay');
            if (lockOverlay) lockOverlay.remove();
            
            const btn = card.querySelector('.start-btn');
            btn.disabled = false;
            btn.innerHTML = `<i class="fas fa-play"></i><span>${translations[currentLanguage].startBtn}</span>`;
        }
    }
}

// ========== EVENT LISTENERS ==========
function setupEventListeners() {
    // Language toggle
    document.getElementById('langToggle').addEventListener('click', toggleLanguage);
    
    // Settings button
    document.getElementById('settingsBtn').addEventListener('click', openSettings);
    document.getElementById('closeSettings').addEventListener('click', closeSettings);
    
    // Edit name button
    document.getElementById('editNameBtn').addEventListener('click', openNameModal);
    document.getElementById('closeName').addEventListener('click', closeNameModal);
    document.getElementById('saveName').addEventListener('click', saveName);
    
    // Listen to word button
    document.getElementById('listenWordBtn').addEventListener('click', playWordSound);
    
    // Close tip
    document.getElementById('closeTip').addEventListener('click', closeTip);
    
    // Dark mode toggle
    document.getElementById('darkModeToggle').addEventListener('change', toggleDarkMode);
    
    // Reset progress
    document.getElementById('resetProgress').addEventListener('click', resetProgress);
    
    // Quick action buttons
    document.getElementById('practiceBtn').addEventListener('click', () => showMessage('Practice mode coming soon!'));
    document.getElementById('gamesBtn').addEventListener('click', () => showMessage('Games coming soon!'));
    document.getElementById('achievementsBtn').addEventListener('click', () => showMessage('Achievements coming soon!'));
    document.getElementById('progressBtn').addEventListener('click', () => showMessage('Progress report coming soon!'));
    
    // Close modals on outside click
    window.addEventListener('click', function(e) {
        if (e.target.classList.contains('modal')) {
            e.target.classList.remove('active');
        }
    });
}

// ========== LANGUAGE TOGGLE ==========
function toggleLanguage() {
    currentLanguage = currentLanguage === 'odia' ? 'english' : 'odia';
    updateUI();
    saveUserData();
    showMessage(currentLanguage === 'odia' ? 'ଓଡ଼ିଆରେ ପରିବର୍ତ୍ତିତ!' : 'Changed to English!');
}

// ========== MODAL FUNCTIONS ==========
function openSettings() {
    document.getElementById('settingsModal').classList.add('active');
}

function closeSettings() {
    document.getElementById('settingsModal').classList.remove('active');
}

function openNameModal() {
    document.getElementById('nameModal').classList.add('active');
    document.getElementById('nameInput').value = userName;
    document.getElementById('nameInput').focus();
}

function closeNameModal() {
    document.getElementById('nameModal').classList.remove('active');
}

function saveName() {
    const newName = document.getElementById('nameInput').value.trim();
    if (newName) {
        userName = newName;
        document.getElementById('userName').textContent = userName;
        saveUserData();
        closeNameModal();
        showMessage(currentLanguage === 'odia' ? 'ନାମ ସେଭ୍ ହୋଇଛି!' : 'Name saved!');
    }
}

// ========== PLAY WORD SOUND ==========
function playWordSound() {
    // Speech Synthesis API
    const word = document.querySelector('.english-word').textContent;
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = 'en-US';
    utterance.rate = 0.8; // Slower for learning
    speechSynthesis.speak(utterance);
    
    showMessage(currentLanguage === 'odia' ? '🔊 ଶୁଣୁଛନ୍ତି...' : '🔊 Listening...');
}

// ========== CLOSE TIP ==========
function closeTip() {
    document.querySelector('.mascot-tip').style.display = 'none';
}

// ========== DARK MODE TOGGLE ==========
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('darkMode', isDark);
    showMessage(isDark ? 
        (currentLanguage === 'odia' ? 'ଡାର୍କ ମୋଡ୍ ଅନ୍!' : 'Dark Mode On!') : 
        (currentLanguage === 'odia' ? 'ଡାର୍କ ମୋଡ୍ ଅଫ୍!' : 'Dark Mode Off!')
    );
}

// ========== RESET PROGRESS ==========
function resetProgress() {
    const confirmMsg = currentLanguage === 'odia' ? 
        'ସମସ୍ତ ପ୍ରଗତି ରିସେଟ୍ କରିବେ କି?' : 
        'Reset all progress?';
    
    if (confirm(confirmMsg)) {
        userStats = {
            totalStars: 0,
            streakDays: 0,
            totalBadges: 0,
            levelsProgress: {
                level1: 0,
                level2: 0,
                level3: 0,
                level4: 0,
                level5: 0,
                level6: 0
            }
        };
        saveUserData();
        updateUI();
        updateLevelsUI();
        closeSettings();
        showMessage(currentLanguage === 'odia' ? 'ପ୍ରଗତି ରିସେଟ୍ ହୋଇଛି!' : 'Progress reset!');
    }
}

// ========== CHECK DAILY STREAK ==========
function checkDailyStreak() {
    const savedData = localStorage.getItem('englishSaheliData');
    if (savedData) {
        const data = JSON.parse(savedData);
        if (data.lastVisit) {
            const lastVisit = new Date(data.lastVisit);
            const today = new Date();
            const diffTime = Math.abs(today - lastVisit);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            
            if (diffDays === 1) {
                // Consecutive day
                userStats.streakDays++;
                saveUserData();
            } else if (diffDays > 1) {
                // Streak broken
                userStats.streakDays = 1;
                saveUserData();
            }
            // If same day, don't change
        }
    }
}

// ========== GO TO LEVEL ==========
function goToLevel(levelNum) {
    // Save that user is accessing this level
    const levelFile = `levels/level${levelNum}.html`;
    
    // Check if file exists (we'll create them later)
    showMessage(`Loading Level ${levelNum}...`);
    
    // Simulate loading delay
    setTimeout(() => {
        window.location.href = levelFile;
    }, 500);
}

// ========== SHOW MESSAGE (Toast Notification) ==========
function showMessage(message) {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 30px;
        left: 50%;
        transform: translateX(-50%);
        background: rgba(0, 0, 0, 0.8);
        color: white;
        padding: 16px 24px;
        border-radius: 50px;
        font-size: 1rem;
        z-index: 10000;
        animation: toastSlide 0.3s ease;
        box-shadow: 0 4px 16px rgba(0,0,0,0.3);
    `;
    
    document.body.appendChild(toast);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        toast.style.animation = 'toastSlide 0.3s ease reverse';
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Add toast animation to CSS (will add via JS)
const style = document.createElement('style');
style.textContent = `
    @keyframes toastSlide {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }
`;
document.head.appendChild(style);

// ========== LOAD DARK MODE PREFERENCE ==========
window.addEventListener('load', function() {
    const isDark = localStorage.getItem('darkMode') === 'true';
    if (isDark) {
        document.body.classList.add('dark-mode');
        document.getElementById('darkModeToggle').checked = true;
    }
});

// ========== ADD STARS (For testing) ==========
function addStars(amount) {
    userStats.totalStars += amount;
    document.getElementById('totalStars').textContent = userStats.totalStars;
    saveUserData();
}

// ========== UPDATE LEVEL PROGRESS (For testing) ==========
function updateLevelProgress(level, progress) {
    userStats.levelsProgress[`level${level}`] = Math.min(100, progress);
    updateLevelsUI();
    saveUserData();
}

// Make functions available globally for testing
window.addStars = addStars;
window.updateLevelProgress = updateLevelProgress;
window.goToLevel = goToLevel;