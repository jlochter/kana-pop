// Kana Pop! - Interactive Kana Learning Game with Spaced Repetition
// =====================================================================

// Kana Data - Complete hiragana and katakana character sets
const KANA_DATA = {
    hiragana: {
        // Basic characters
        basic: {
            'a': 'あ', 'i': 'い', 'u': 'う', 'e': 'え', 'o': 'お',
            'ka': 'か', 'ki': 'き', 'ku': 'く', 'ke': 'け', 'ko': 'こ',
            'sa': 'さ', 'shi': 'し', 'su': 'す', 'se': 'せ', 'so': 'そ',
            'ta': 'た', 'chi': 'ち', 'tsu': 'つ', 'te': 'て', 'to': 'と',
            'na': 'な', 'ni': 'に', 'nu': 'ぬ', 'ne': 'ね', 'no': 'の',
            'ha': 'は', 'hi': 'ひ', 'fu': 'ふ', 'he': 'へ', 'ho': 'ほ',
            'ma': 'ま', 'mi': 'み', 'mu': 'む', 'me': 'め', 'mo': 'も',
            'ya': 'や', 'yu': 'ゆ', 'yo': 'よ',
            'ra': 'ら', 'ri': 'り', 'ru': 'る', 're': 'れ', 'ro': 'ろ',
            'wa': 'わ', 'wo': 'を', 'n': 'ん'
        },
        // Dakuten (voiced) and Handakuten characters
        dakuten: {
            'ga': 'が', 'gi': 'ぎ', 'gu': 'ぐ', 'ge': 'げ', 'go': 'ご',
            'za': 'ざ', 'ji': 'じ', 'zu': 'ず', 'ze': 'ぜ', 'zo': 'ぞ',
            'da': 'だ', 'dji': 'ぢ', 'dzu': 'づ', 'de': 'で', 'do': 'ど',
            'ba': 'ば', 'bi': 'び', 'bu': 'ぶ', 'be': 'べ', 'bo': 'ぼ',
            'pa': 'ぱ', 'pi': 'ぴ', 'pu': 'ぷ', 'pe': 'ぺ', 'po': 'ぽ'
        },
        // Combination characters (yōon)
        combinations: {
            'kya': 'きゃ', 'kyu': 'きゅ', 'kyo': 'きょ',
            'sha': 'しゃ', 'shu': 'しゅ', 'sho': 'しょ',
            'cha': 'ちゃ', 'chu': 'ちゅ', 'cho': 'ちょ',
            'nya': 'にゃ', 'nyu': 'にゅ', 'nyo': 'にょ',
            'hya': 'ひゃ', 'hyu': 'ひゅ', 'hyo': 'ひょ',
            'mya': 'みゃ', 'myu': 'みゅ', 'myo': 'みょ',
            'rya': 'りゃ', 'ryu': 'りゅ', 'ryo': 'りょ',
            'gya': 'ぎゃ', 'gyu': 'ぎゅ', 'gyo': 'ぎょ',
            'ja': 'じゃ', 'ju': 'じゅ', 'jo': 'じょ',
            'bya': 'びゃ', 'byu': 'びゅ', 'byo': 'びょ',
            'pya': 'ぴゃ', 'pyu': 'ぴゅ', 'pyo': 'ぴょ'
        }
    },
    katakana: {
        // Basic characters
        basic: {
            'a': 'ア', 'i': 'イ', 'u': 'ウ', 'e': 'エ', 'o': 'オ',
            'ka': 'カ', 'ki': 'キ', 'ku': 'ク', 'ke': 'ケ', 'ko': 'コ',
            'sa': 'サ', 'shi': 'シ', 'su': 'ス', 'se': 'セ', 'so': 'ソ',
            'ta': 'タ', 'chi': 'チ', 'tsu': 'ツ', 'te': 'テ', 'to': 'ト',
            'na': 'ナ', 'ni': 'ニ', 'nu': 'ヌ', 'ne': 'ネ', 'no': 'ノ',
            'ha': 'ハ', 'hi': 'ヒ', 'fu': 'フ', 'he': 'ヘ', 'ho': 'ホ',
            'ma': 'マ', 'mi': 'ミ', 'mu': 'ム', 'me': 'メ', 'mo': 'モ',
            'ya': 'ヤ', 'yu': 'ユ', 'yo': 'ヨ',
            'ra': 'ラ', 'ri': 'リ', 'ru': 'ル', 're': 'レ', 'ro': 'ロ',
            'wa': 'ワ', 'wo': 'ヲ', 'n': 'ン'
        },
        // Dakuten (voiced) and Handakuten characters
        dakuten: {
            'ga': 'ガ', 'gi': 'ギ', 'gu': 'グ', 'ge': 'ゲ', 'go': 'ゴ',
            'za': 'ザ', 'ji': 'ジ', 'zu': 'ズ', 'ze': 'ゼ', 'zo': 'ゾ',
            'da': 'ダ', 'dji': 'ヂ', 'dzu': 'ヅ', 'de': 'デ', 'do': 'ド',
            'ba': 'バ', 'bi': 'ビ', 'bu': 'ブ', 'be': 'ベ', 'bo': 'ボ',
            'pa': 'パ', 'pi': 'ピ', 'pu': 'プ', 'pe': 'ペ', 'po': 'ポ'
        },
        // Combination characters (yōon)
        combinations: {
            'kya': 'キャ', 'kyu': 'キュ', 'kyo': 'キョ',
            'sha': 'シャ', 'shu': 'シュ', 'sho': 'ショ',
            'cha': 'チャ', 'chu': 'チュ', 'cho': 'チョ',
            'nya': 'ニャ', 'nyu': 'ニュ', 'nyo': 'ニョ',
            'hya': 'ヒャ', 'hyu': 'ヒュ', 'hyo': 'ヒョ',
            'mya': 'ミャ', 'myu': 'ミュ', 'myo': 'ミョ',
            'rya': 'リャ', 'ryu': 'リュ', 'ryo': 'リョ',
            'gya': 'ギャ', 'gyu': 'ギュ', 'gyo': 'ギョ',
            'ja': 'ジャ', 'ju': 'ジュ', 'jo': 'ジョ',
            'bya': 'ビャ', 'byu': 'ビュ', 'byo': 'ビョ',
            'pya': 'ピャ', 'pyu': 'ピュ', 'pyo': 'ピョ'
        }
    }
};

// Difficulty configuration
const DIFFICULTY = {
    easy: { bubbles: 6, timeLimit: 0, label: 'Easy' },
    medium: { bubbles: 8, timeLimit: 10, label: 'Medium' },
    hard: { bubbles: 10, timeLimit: 7, label: 'Hard' }
};

// Game State
class GameState {
    constructor() {
        this.mode = 'hiragana'; // or 'katakana'
        this.difficulty = 'easy'; // easy, medium, hard
        this.characterSets = { basic: true, dakuten: false, combinations: false };
        this.score = 0;
        this.streak = 0;
        this.totalAttempts = 0;
        this.correctAttempts = 0;
        this.currentSyllable = '';
        this.currentKana = '';
        this.timeRemaining = 0;
        this.mistakes = this.loadMistakes();
    }

    loadMistakes() {
        const saved = localStorage.getItem('kanaMistakes');
        if (saved) {
            return JSON.parse(saved);
        }
        // Initialize mistake tracking for all kana
        const mistakes = { hiragana: {}, katakana: {} };

        // Initialize for all character sets
        ['basic', 'dakuten', 'combinations'].forEach(set => {
            Object.values(KANA_DATA.hiragana[set]).forEach(kana => {
                mistakes.hiragana[kana] = 0;
            });
            Object.values(KANA_DATA.katakana[set]).forEach(kana => {
                mistakes.katakana[kana] = 0;
            });
        });

        return mistakes;
    }

    saveMistakes() {
        localStorage.setItem('kanaMistakes', JSON.stringify(this.mistakes));
    }

    recordMistake(kana) {
        this.mistakes[this.mode][kana] = (this.mistakes[this.mode][kana] || 0) + 1;
        this.saveMistakes();
    }

    getAccuracy() {
        if (this.totalAttempts === 0) return 100;
        return Math.round((this.correctAttempts / this.totalAttempts) * 100);
    }

    // Get active kana map based on enabled character sets
    getActiveKanaMap() {
        const activeMap = {};
        const modeData = KANA_DATA[this.mode];

        Object.keys(this.characterSets).forEach(set => {
            if (this.characterSets[set] && modeData[set]) {
                Object.assign(activeMap, modeData[set]);
            }
        });

        return activeMap;
    }

    // Weighted random selection based on mistakes
    selectSyllable() {
        const kanaMap = this.getActiveKanaMap();
        const syllables = Object.keys(kanaMap);

        if (syllables.length === 0) {
            // Fallback to basic if no sets enabled
            this.characterSets.basic = true;
            return this.selectSyllable();
        }

        // Create weighted array - characters with more mistakes appear more often
        const weighted = [];
        syllables.forEach(syllable => {
            const kana = kanaMap[syllable];
            const mistakes = this.mistakes[this.mode][kana] || 0;
            // Base weight of 1, plus mistakes (so 0 mistakes = weight 1, 5 mistakes = weight 6)
            const weight = Math.max(1, mistakes + 1);
            for (let i = 0; i < weight; i++) {
                weighted.push(syllable);
            }
        });

        return weighted[Math.floor(Math.random() * weighted.length)];
    }

    resetStats() {
        this.mistakes = { hiragana: {}, katakana: {} };

        // Reset for all character sets
        ['basic', 'dakuten', 'combinations'].forEach(set => {
            Object.values(KANA_DATA.hiragana[set]).forEach(kana => {
                this.mistakes.hiragana[kana] = 0;
            });
            Object.values(KANA_DATA.katakana[set]).forEach(kana => {
                this.mistakes.katakana[kana] = 0;
            });
        });

        this.saveMistakes();
        this.score = 0;
        this.streak = 0;
        this.totalAttempts = 0;
        this.correctAttempts = 0;
    }
}

// Game Controller
class KanaGame {
    constructor() {
        this.state = new GameState();
        this.timerInterval = null;
        this.initializeElements();
        this.attachEventListeners();
        this.startNewRound();
    }

    initializeElements() {
        this.elements = {
            syllable: document.getElementById('currentSyllable'),
            gameArea: document.getElementById('gameArea'),
            score: document.getElementById('score'),
            streak: document.getElementById('streak'),
            accuracy: document.getElementById('accuracy'),
            hiraganaBtn: document.getElementById('hiraganaBtn'),
            katakanaBtn: document.getElementById('katakanaBtn'),
            resetBtn: document.getElementById('resetBtn'),
            statsBtn: document.getElementById('statsBtn'),
            statsModal: document.getElementById('statsModal'),
            closeModal: document.getElementById('closeModal'),
            statsContent: document.getElementById('statsContent'),
            resetStatsBtn: document.getElementById('resetStatsBtn'),
            // New elements
            difficultyBtns: document.querySelectorAll('.difficulty-btn'),
            timerDisplay: document.getElementById('timerDisplay'),
            timerValue: document.getElementById('timerValue'),
            basicSetCheckbox: document.getElementById('basicSet'),
            dakutenSetCheckbox: document.getElementById('dakutenSet'),
            combinationSetCheckbox: document.getElementById('combinationSet')
        };
    }

    attachEventListeners() {
        this.elements.hiraganaBtn.addEventListener('click', () => this.switchMode('hiragana'));
        this.elements.katakanaBtn.addEventListener('click', () => this.switchMode('katakana'));
        this.elements.resetBtn.addEventListener('click', () => this.startNewRound());
        this.elements.statsBtn.addEventListener('click', () => this.showStats());
        this.elements.closeModal.addEventListener('click', () => this.hideStats());
        this.elements.resetStatsBtn.addEventListener('click', () => this.resetProgress());
        this.elements.statsModal.addEventListener('click', (e) => {
            if (e.target === this.elements.statsModal) {
                this.hideStats();
            }
        });

        // Difficulty buttons
        this.elements.difficultyBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const difficulty = btn.getAttribute('data-difficulty');
                this.switchDifficulty(difficulty);
            });
        });

        // Character set toggles
        this.elements.basicSetCheckbox.addEventListener('change', (e) => {
            this.state.characterSets.basic = e.target.checked;
            this.startNewRound();
        });
        this.elements.dakutenSetCheckbox.addEventListener('change', (e) => {
            this.state.characterSets.dakuten = e.target.checked;
            this.startNewRound();
        });
        this.elements.combinationSetCheckbox.addEventListener('change', (e) => {
            this.state.characterSets.combinations = e.target.checked;
            this.startNewRound();
        });
    }

    switchMode(mode) {
        this.state.mode = mode;

        // Update button states
        this.elements.hiraganaBtn.classList.toggle('active', mode === 'hiragana');
        this.elements.katakanaBtn.classList.toggle('active', mode === 'katakana');

        // Start new round with new mode
        this.startNewRound();
    }

    switchDifficulty(difficulty) {
        this.state.difficulty = difficulty;

        // Update button states
        this.elements.difficultyBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-difficulty') === difficulty);
        });

        // Start new round with new difficulty
        this.startNewRound();
    }

    startTimer() {
        const timeLimit = DIFFICULTY[this.state.difficulty].timeLimit;
        if (timeLimit === 0) {
            this.elements.timerDisplay.style.display = 'none';
            return;
        }

        this.state.timeRemaining = timeLimit;
        this.elements.timerDisplay.style.display = 'flex';
        this.updateTimerDisplay();

        this.stopTimer(); // Clear any existing timer
        this.timerInterval = setInterval(() => {
            this.state.timeRemaining--;
            this.updateTimerDisplay();

            if (this.state.timeRemaining <= 0) {
                this.handleTimeUp();
            }
        }, 1000);
    }

    stopTimer() {
        if (this.timerInterval) {
            clearInterval(this.timerInterval);
            this.timerInterval = null;
        }
    }

    updateTimerDisplay() {
        this.elements.timerValue.textContent = this.state.timeRemaining;

        // Add warning class when time is low
        if (this.state.timeRemaining <= 3) {
            this.elements.timerDisplay.classList.add('warning');
        } else {
            this.elements.timerDisplay.classList.remove('warning');
        }
    }

    handleTimeUp() {
        this.stopTimer();

        // Count as incorrect attempt
        this.state.totalAttempts++;
        this.state.streak = 0;

        // Record mistake for the current kana
        this.state.recordMistake(this.state.currentKana);

        // Update display
        this.updateDisplay();

        // Start new round after brief delay
        setTimeout(() => {
            this.startNewRound();
        }, 1000);
    }


    startNewRound() {
        // Stop any existing timer
        this.stopTimer();

        // Clear previous bubbles
        this.elements.gameArea.innerHTML = '';

        // Select syllable using weighted selection
        this.state.currentSyllable = this.state.selectSyllable();
        const activeMap = this.state.getActiveKanaMap();
        this.state.currentKana = activeMap[this.state.currentSyllable];

        // Display syllable
        this.elements.syllable.textContent = this.state.currentSyllable;

        // Generate bubbles
        this.generateBubbles();

        // Update display
        this.updateDisplay();

        // Start timer if difficulty requires it
        this.startTimer();
    }

    generateBubbles() {
        const activeMap = this.state.getActiveKanaMap();
        const allKanas = Object.values(activeMap);
        const bubbleCount = DIFFICULTY[this.state.difficulty].bubbles;

        // Select random incorrect kanas, weighted by mistakes
        const incorrectKanas = this.selectIncorrectKanas(allKanas, bubbleCount - 1);

        // Combine correct and incorrect kanas
        const bubbleKanas = [...incorrectKanas, this.state.currentKana];

        // Shuffle array
        this.shuffleArray(bubbleKanas);

        // Create bubbles with random positions
        const positions = this.generateBubblePositions(this.bubbleCount);
        bubbleKanas.forEach((kana, index) => {
            this.createBubble(kana, positions[index]);
        });
    }

    selectIncorrectKanas(allKanas, count) {
        const incorrect = [];
        const kanaPool = allKanas.filter(k => k !== this.state.currentKana);

        // Create weighted pool based on mistakes
        const weighted = [];
        kanaPool.forEach(kana => {
            const mistakes = this.state.mistakes[this.state.mode][kana] || 0;
            const weight = Math.max(1, mistakes + 1);
            for (let i = 0; i < weight; i++) {
                weighted.push(kana);
            }
        });

        // Select unique kanas
        const selected = new Set();
        while (selected.size < count && selected.size < kanaPool.length) {
            const randomKana = weighted[Math.floor(Math.random() * weighted.length)];
            selected.add(randomKana);
        }

        return Array.from(selected);
    }

    generateBubblePositions(count) {
        const positions = [];
        const gameArea = this.elements.gameArea.getBoundingClientRect();
        const bubbleSize = window.innerWidth < 480 ? 70 : window.innerWidth < 768 ? 80 : 100;
        const padding = 20;

        for (let i = 0; i < count; i++) {
            let overlap = true;
            let attempts = 0;
            let position;

            while (overlap && attempts < 50) {
                position = {
                    x: Math.random() * (gameArea.width - bubbleSize - 2 * padding) + padding,
                    y: Math.random() * (Math.max(400, gameArea.height) - bubbleSize - 2 * padding) + padding
                };

                overlap = positions.some(pos => {
                    const distance = Math.sqrt(
                        Math.pow(pos.x - position.x, 2) +
                        Math.pow(pos.y - position.y, 2)
                    );
                    return distance < bubbleSize + padding;
                });

                attempts++;
            }

            positions.push(position);
        }

        return positions;
    }

    createBubble(kana, position) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        bubble.textContent = kana;
        bubble.style.left = `${position.x}px`;
        bubble.style.top = `${position.y}px`;
        bubble.style.animationDelay = `${Math.random() * 2}s`;

        bubble.addEventListener('click', () => this.handleBubbleClick(bubble, kana));

        this.elements.gameArea.appendChild(bubble);
    }

    handleBubbleClick(bubble, kana) {
        const isCorrect = kana === this.state.currentKana;

        // Prevent multiple clicks
        bubble.style.pointerEvents = 'none';

        this.state.totalAttempts++;

        if (isCorrect) {
            this.state.correctAttempts++;
            this.state.score += 10;
            this.state.streak++;

            // Add correct animation
            bubble.classList.add('correct');

            // Wait for animation, then start new round
            setTimeout(() => {
                this.startNewRound();
            }, 600);
        } else {
            // Record mistake for spaced repetition
            this.state.recordMistake(kana);

            // Reset streak
            this.state.streak = 0;

            // Add incorrect animation
            bubble.classList.add('incorrect');

            // Re-enable clicking after animation
            setTimeout(() => {
                bubble.style.pointerEvents = 'auto';
                bubble.classList.remove('incorrect');
            }, 600);
        }

        this.updateDisplay();
    }

    updateDisplay() {
        this.elements.score.textContent = this.state.score;
        this.elements.streak.textContent = this.state.streak;
        this.elements.accuracy.textContent = `${this.state.getAccuracy()}%`;
    }

    showStats() {
        const stats = this.generateStats();
        this.elements.statsContent.innerHTML = stats;
        this.elements.statsModal.classList.add('active');
    }

    hideStats() {
        this.elements.statsModal.classList.remove('active');
    }

    generateStats() {
        let html = '<div class="stats-grid">';

        // Get kanas sorted by mistakes (descending)
        const kanaMap = KANA_DATA[this.state.mode];
        const kanaStats = Object.entries(kanaMap).map(([syllable, kana]) => {
            const mistakes = this.state.mistakes[this.state.mode][kana] || 0;
            return { syllable, kana, mistakes };
        }).sort((a, b) => b.mistakes - a.mistakes);

        // Show top 10 most problematic kanas
        const topKanas = kanaStats.slice(0, 10);

        if (topKanas.every(k => k.mistakes === 0)) {
            html += '<p style="text-align: center; color: var(--text-secondary);">No mistakes yet! Keep practicing! 🎯</p>';
        } else {
            html += '<h3 style="margin-bottom: 1rem;">Characters to Practice:</h3>';
            topKanas.forEach(({ syllable, kana, mistakes }) => {
                if (mistakes > 0) {
                    const maxMistakes = Math.max(...kanaStats.map(k => k.mistakes));
                    const percentage = maxMistakes > 0 ? (mistakes / maxMistakes) * 100 : 0;

                    html += `
                        <div class="stats-item">
                            <div class="stats-item-header">
                                <span class="kana-char">${kana}</span>
                                <span class="stat-label">${syllable}</span>
                            </div>
                            <div class="stats-item-data">
                                <span>Mistakes: ${mistakes}</span>
                            </div>
                            <div class="progress-bar">
                                <div class="progress-fill" style="width: ${percentage}%"></div>
                            </div>
                        </div>
                    `;
                }
            });
        }

        html += '</div>';

        // Overall stats
        html += `
            <div style="margin-top: 2rem; padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.1);">
                <h3 style="margin-bottom: 1rem;">Overall Stats:</h3>
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem;">
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent-primary);">${this.state.score}</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Score</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent-warning);">${this.state.totalAttempts}</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Total Attempts</div>
                    </div>
                    <div style="text-align: center;">
                        <div style="font-size: 2rem; font-weight: 800; color: var(--accent-success);">${this.state.getAccuracy()}%</div>
                        <div style="color: var(--text-secondary); font-size: 0.875rem;">Accuracy</div>
                    </div>
                </div>
            </div>
        `;

        return html;
    }

    resetProgress() {
        if (confirm('Are you sure you want to reset all progress? This cannot be undone.')) {
            this.state.resetStats();
            this.hideStats();
            this.startNewRound();
        }
    }

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
}

// Initialize game when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new KanaGame();
});
