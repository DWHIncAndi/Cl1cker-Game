let points = 0;
let powerCounter = 50;
let clickCounter = 0;
let totalClicks = 0;
let totalPoints = 0;
let critClicks = 0;
let rarityFactorCrit = 100; // Erhöhe die Faktoren, um die Seltenheit zu erhöhen
let rarityFactorLuck = 100;
let criticalFactor = 100;
let luckFactor = 100;
let minClicks = 1000;
let autoClickerOn = false;
let autoClickSpeed = 1000;
let upgradeCost = 300;
let upgradeLevel = 0;
let autoClickCost = 50000;
let autoClickerPurchased = false;
let autoClickInterval;
let autoClickerLevel = 0;
let lastClickTime = 0;
let autoUpgradeCost = 100000;
let bonusUpgradeCost = 4000;
let bonusLevel = 0;
let bonusMultiplier = 0.00;
let criticalUpgradeCost = 650000;
let criticalLevel = 0;
let achievementsUnlocked = [];

const minClickInterval = 100; // Mindestintervall zwischen Klicks in Millisekunden
const pointsDisplay = document.getElementById('points');
const totalclicksDisplay = document.getElementById('totalclickCounter');
const totalpointsDisplay = document.getElementById('totalpointsCounter');
const autoSpeedDisplay = document.getElementById('autoSpeed');
const bonusDisplay = document.getElementById('bonusCounter');
const clickPowerDisplay = document.getElementById('powerCounter');
const upgradeBtn = document.getElementById('upgradeBtn');
const autoUpgradeBtn = document.getElementById('autoUpgradeBtn');
const autoClickBtn = document.getElementById('autoClickBtn');
const bonusUpgradeBtn = document.getElementById('bonusUpgradeBtn');
const criticalUpgradeBtn = document.getElementById('criticalUpgradeBtn');
const critDisplay = document.getElementById('criticalCounter');
const critFactorDisplay = document.getElementById('criticalFactor');
const resetBtn = document.getElementById('resetBtn');

document.addEventListener('DOMContentLoaded', function() {
    const startMenu = document.getElementById('start-menu');
    const gameContent = document.getElementById('game-content');
    const achievementsContainer = document.getElementById('whole-achievement-container');
    const gameAchievementsContainer = document.getElementById('game-achievement-container1');
    const soundSettingsContainer = document.getElementById('sound-settings');

    // Funktion zum Anzeigen des Startmenüs
    function showStartMenu() {
        soundSettingsContainer.classList.add('hide'); // Startmenü ausblenden
        achievementsContainer.classList.add('hide'); // Achievements ausblenden
        gameContent.classList.add('hide'); // Soundeinstellungen ausblenden
        gameAchievementsContainer.classList.add('hide'); // Startmenü ausblenden
        setTimeout(() => {
            startMenu.classList.remove('hide'); // Spielinhalt einblenden nach 500ms Verzögerung
            startMenu.classList.add('show');
        }, 500);
    }

    // Funktion zum Anzeigen des Startmenüs
    function showGameAchieveConatiner() {
        startMenu.classList.add('hide'); // Startmenü ausblenden
        soundSettingsContainer.classList.add('hide'); // Startmenü ausblenden
        achievementsContainer.classList.add('hide'); // Achievements ausblenden
        gameContent.classList.add('hide'); // Soundeinstellungen ausblenden
        setTimeout(() => {
            gameAchievementsContainer.classList.remove('hide'); // Spielinhalt einblenden nach 500ms Verzögerung
            gameAchievementsContainer.classList.add('show');
        }, 500);
    }

    // Funktion zum Anzeigen des Spiels mit 0.5s Verzögerung
    function showGameContentWithDelay() {
        startMenu.classList.add('hide'); // Startmenü ausblenden
        achievementsContainer.classList.add('hide'); // Achievements ausblenden
        soundSettingsContainer.classList.add('hide');
        gameAchievementsContainer.classList.add('hide'); // Startmenü ausblenden
        setTimeout(() => {
            gameContent.classList.remove('hide');
            gameContent.classList.add('show'); // Spielinhalt einblenden nach 500ms Verzögerung
        }, 500);
    }

    // Funktion zum Anzeigen der Achievements
    function showAchievements() {
        startMenu.classList.add('hide'); // Startmenü ausblenden
        achievementsContainer.classList.add('hide'); // Achievements ausblenden
        gameContent.classList.add('hide'); // Soundeinstellungen ausblenden
        gameAchievementsContainer.classList.add('hide'); // Startmenü ausblenden
        setTimeout(() => {
            achievementsContainer.classList.remove('hide'); // Spielinhalt einblenden nach 500ms Verzögerung
            achievementsContainer.classList.add('show');
        }, 500);
    }

    function showSoundSettings() {
        startMenu.classList.add('hide'); // Startmenü ausblenden
        achievementsContainer.classList.add('hide'); // Achievements ausblenden
        gameContent.classList.add('hide'); // Soundeinstellungen ausblenden
        gameAchievementsContainer.classList.add('hide'); // Startmenü ausblenden
        setTimeout(() => {
            soundSettingsContainer.classList.remove('hide'); // Spielinhalt einblenden nach 500ms Verzögerung
            soundSettingsContainer.classList.add('show');
        }, 500);
    }

    // Event Listener für jeden Button im Startmenü
    document.getElementById('achievements-btn').addEventListener('click', () => {
        showAchievements();
        showAllAchievements();
    });

    document.getElementById('new-game-btn').addEventListener('click', () => {
        resetGame();
        showGameContentWithDelay(); // Zeige den Spielinhalt mit Verzögerung an
    });

    document.getElementById('load-game-btn').addEventListener('click', () => {
        loadGame();
        showGameContentWithDelay(); // Zeige den Spielinhalt mit Verzögerung an
    });

    document.getElementById('back').addEventListener('click', () => {
        showStartMenu();
    });

    document.getElementById('soundBtn').addEventListener('click', () => {
        showSoundSettings();
    });
    
    document.getElementById('clickable-text').addEventListener('click', () => {
        showGameAchieveConatiner();
        showAllAchievementsInGame();
    });
    
    document.getElementById('back1').addEventListener('click', () => {
        showGameContentWithDelay();
    });
    
    document.getElementById('back2').addEventListener('click', () => {
        showGameContentWithDelay();
    });

    // Standardmäßig das Startmenü anzeigen
    showStartMenu();
});

function handleExternalAutoclicker() {
    // Warnung anzeigen
    showNotification("Verwenden von externen Autoclickern ist nicht gestattet! Deine daten wurden Zurückgesetzt");

    // Daten zurücksetzen
    resetGame();
}


function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.classList.add('show'); // Füge Klasse hinzu, um die Benachrichtigung einzublenden

    // Verstecke die Benachrichtigung nach 3 Sekunden
    setTimeout(() => {
        notification.classList.remove('show'); // Entferne Klasse, um die Benachrichtigung auszublenden
    }, 3000);
}


function applyCriticalHit() {
        const bonus = Math.floor(powerCounter * 1000); // Kritischer Treffer gibt das Doppelte des normalen Bonus
        points += bonus;
        totalPoints += bonus;
        critClicks++;
        updateDisplay();
        showNotification('Critical Click!');
}

function applyLuckBonus() {
    const bonus = Math.floor(points / 2); // Hier wurde die Berechnung angepasst
    points += bonus;
    totalPoints += bonus;
    updateDisplay();
    playLuckSound();
    showNotification(`You just gained a Luck Bonus of ${formatNumber(bonus)}`);
}

document.getElementById('clickBtn').addEventListener('click', () => {
    points += powerCounter;
    totalPoints += powerCounter;
    clickCounter++;
    totalClicks++;

    const currentTime = Date.now();

    if (currentTime - lastClickTime < minClickInterval) {
        // Verdächtiges Klickverhalten erkannt
        handleExternalAutoclicker();
        return;
    }
    lastClickTime = currentTime;

    const luckClickThreshold = Math.floor(Math.random() * (rarityFactorLuck * (1001 - luckFactor * 10))) + (20 + luckFactor * 10);

    if (clickCounter >= luckClickThreshold) {
        applyLuckBonus();
        clickCounter = 0;
    }
    
    if (totalClicks >= minClicks){
        const criticalClickThreshold = Math.floor(Math.random() * (rarityFactorCrit * (1001 - criticalFactor * 10))) + (20 + criticalFactor * 10);
    
        if (clickCounter >= criticalClickThreshold) {
            applyCriticalHit();
            playCriticalHitSound();
            clickCounter = 0;
        }
    }
    
    updateDisplay();
    checkAchievements();
    playClickSound();
    saveGame();
});

function formatNumber(number) {
    const suffixes = ["", "k", "M", "B", "T", "Q", "Qt", "Sx", "Sp", "Oc", "No", "Dc", "Un", "Du", "Tr", "Qu", "Qi", "Se", "St", "Ot", "Nv", "Vg", "Ct", "Ut", "Dt", "Tt", "QtT", "SxT", "SpT", "OcT", "NoT", "DcT", "UnT", "DuT", "TrT", "QuT", "QiT", "SeT", "StT", "OtT", "NvT", "VgT", "CtT", "UtT", "DtT", "TtT", "QtTT", "SxTT", "SpTT", "OcTT"];
    let suffixIndex = 0;

    while (number >= 1000 && suffixIndex < suffixes.length - 1) {
        number /= 1000;
        suffixIndex++;
    }

    return number.toFixed(2).toLocaleString() + suffixes[suffixIndex];
        saveGame();
}

function applyBonus() {
    // Implementiere hier die Logik für den Bonus basierend auf bonusLevel und powerCounter
    bonusMultiplier = 1 + bonusLevel * 0.1; // Beispiel: Jedes Upgrade erhöht den Bonus um 10%
    powerCounter *= bonusMultiplier;
    // Weitere Bonus-Logik hier hinzufügen, je nach den Anforderungen deines Spiels
}

function updateDisplay() {
    autoSpeedDisplay.textContent = `${autoClickSpeed} ms`;
    totalclicksDisplay.textContent = `${formatNumber(totalClicks)} clicks`;
    totalpointsDisplay.textContent = `${formatNumber(totalPoints)} points `;
    critDisplay.textContent = `${critClicks} clicks`;
    critFactorDisplay.textContent = `${rarityFactorCrit} Factor`;
    bonusDisplay.textContent = `${formatNumber(bonusMultiplier)}%`;
    pointsDisplay.textContent = formatNumber(points);
    clickPowerDisplay.textContent = `${formatNumber(powerCounter)} ppc`;
    bonusUpgradeBtn.textContent = `BONUS Upgrade (Cost: ${formatNumber(bonusUpgradeCost)} points), (Level: ${bonusLevel}/50)`;
    upgradeBtn.textContent = `UPGRADE Power (Cost: ${formatNumber(upgradeCost)} points), (Level: ${upgradeLevel}/250)`;
    criticalUpgradeBtn.textContent = `CRITICAL Upgrade (Cost: ${formatNumber(criticalUpgradeCost)} points), (Level: ${criticalLevel}/15)`;
    if (!autoClickerPurchased) {
        autoClickBtn.textContent = `Auto Clicker (Cost: ${formatNumber(autoClickCost)} points)`;
    } else if (!autoClickerOn) {
        autoClickBtn.textContent = 'Auto Clicker On';
    } else {
        autoClickBtn.textContent = 'Auto Clicker Off';
    }
    autoUpgradeBtn.textContent = `AUTO SPEED Upgrade (Cost: ${formatNumber(autoUpgradeCost)} points), (Level: ${autoClickerLevel}/18)`;
    console.log('Display updated');
}

function startAutoClicker() {
    if (autoClickInterval) {
        clearInterval(autoClickInterval); // Vor dem Start zunächst bestehendes Intervall stoppen, falls vorhanden
    }
    autoClickInterval = setInterval(() => {
        points += powerCounter;
        updateDisplay();
        checkAchievements();
    }, autoClickSpeed);

    autoClickerOn = true;
    updateDisplay();
}

function stopAutoClicker() {
    if (autoClickInterval) {
        clearInterval(autoClickInterval);
        autoClickerOn = false;
        updateDisplay();
    }
}

window.addEventListener('beforeunload', saveGame());
updateDisplay();
