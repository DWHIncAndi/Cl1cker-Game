let points = 0;
let powerCounter = 50;
let clickCounter = 0;
let totalClicks = 0;
let luckFactor = 1;
let totalPoints = 0;
let criticalFactor = 1;
let critClicks = 0;
let rarityFactorCrit = 30;
let rarityFactorLuck = 30;
let minClicks = 1000;
let autoClickerOn = false;
let autoClickSpeed = 1000;
let upgradeCost = 300;
let upgradeLevel = 0;
let autoClickCost = 50000;
let autoClickerPurchased = false;
let autoClickInterval;
let autoClickerLevel = 0;
let autoUpgradeCost = 100000;
let bonusUpgradeCost = 4000;
let bonusLevel = 0;
let bonusMultiplier = 0.00;
let criticalUpgradeCost = 650000;
let criticalLevel = 0;
let achievementsUnlocked = [];

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
const critDisplay = document.getElementById('criticalCounter')
const critFactorDisplay = document.getElementById('criticalFactor')
const resetBtn = document.getElementById('resetBtn');

document.addEventListener('DOMContentLoaded', () => {
    // Stelle sicher, dass das Spiel geladen wird, nachdem das DOM vollständig geladen wurde
    loadGame();
    // Füge weitere Initialisierungen oder Funktionen hinzu, die nach dem Laden des Spiels ausgeführt werden sollen
});

resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the game?')) {
        resetGame();
    }
});

function showNotification(message) {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.display = 'block';

    // Verstecke die Benachrichtigung nach 3 Sekunden
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

resetBtn.addEventListener('click', () => {
    if (confirm('Are you sure you want to reset the game?')) {
        resetGame();
    }
});

function resetGame() {
    // Setze alle Spielstandsdaten auf ihre Standardwerte zurück
    points = 0;
    powerCounter = 50;
    clickCounter = 0;
    totalClicks = 0;
    luckFactor = 1;
    totalPoints = 0;
    criticalFactor = 1;
    critClicks = 0;
    rarityFactorCrit = 30;
    rarityFactorLuck = 30;
    minClicks = 1000;
    autoClickerOn = false;
    autoClickSpeed = 1000;
    upgradeCost = 300;
    upgradeLevel = 0;
    autoClickCost = 50000;
    autoClickerPurchased = false;
    autoClickInterval;
    autoClickerLevel = 0;
    autoUpgradeCost = 100000;
    bonusUpgradeCost = 4000;
    bonusLevel = 0;
    bonusMultiplier = 0.00;
    criticalUpgradeCost = 650000;
    criticalLevel = 0;

    saveGame();

    updateDisplay();
}

function saveGame() {
    const gameData = {
        points,
        powerCounter,
        clickCounter,
        totalClicks,
        luckFactor,
        totalPoints,
        criticalFactor,
        critClicks,
        rarityFactorCrit,
        rarityFactorLuck,
        minClicks,
        autoClickerOn,
        autoClickSpeed,
        upgradeCost,
        upgradeLevel,
        autoClickCost,
        autoClickerPurchased,
        autoClickIntervalActive: autoClickerOn, // Hier wird ein boolischer Wert gespeichert, um festzustellen, ob das Interval aktiv war
        autoClickerLevel,
        autoUpgradeCost,
        bonusUpgradeCost,
        bonusLevel,
        bonusMultiplier,
        criticalUpgradeCost,
        criticalLevel,
        achievementsUnlocked
    };
    console.log('Game Saved:', gameData );
    localStorage.setItem('gameData', JSON.stringify(gameData));
}

function loadGame() {
    const savedGameData = localStorage.getItem('gameData');

    if (savedGameData) {
        const loadedGameData = JSON.parse(savedGameData);

        for (const property in loadedGameData) {
            if (loadedGameData.hasOwnProperty(property)) {
                // Überprüfe, ob die Eigenschaft autoClickIntervalActive vorhanden ist
                if (property === 'autoClickIntervalActive' && loadedGameData[property]) {
                    // Wenn ja, starte das Auto-Clicker-Interval
                    startAutoClicker();
                } else {
                    // Ansonsten setze die Eigenschaft direkt
                    window[property] = loadedGameData[property];
                }
            }
        }
        
        console.log('Game Loaded:', loadedGameData )
        updateDisplay(); // Aktualisiere die Anzeige nach dem Laden
    }
}

function applyCriticalHit() {
        const bonus = Math.floor(powerCounter * 1000); // Kritischer Treffer gibt das Doppelte des normalen Bonus
        points += bonus;
        totalPoints += bonus;
        critClicks++;
        updateDisplay();
        showNotification('Critical Click!');
        saveGame();
}

function applyLuckBonus() {
    const bonus = Math.floor(points / 2); // Hier wurde die Berechnung angepasst
    points += bonus;
    totalPoints += bonus;
    updateDisplay();
    playLuckSound();
    showNotification(`You just gained a Luck Bonus of ${formatNumber(bonus)}`);
    saveGame();
}

// Beispiel für Click-Sound
function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0; // Setzt die Wiedergabezeit auf den Anfang, um den Sound bei jedem Klick abzuspielen
    clickSound.play();
}

// Beispiel für Critical-Hit-Sound
function playCriticalHitSound() {
    const criticalHitSound = document.getElementById('criticalHitSound');
    criticalHitSound.currentTime = 0;
    criticalHitSound.play();
}

// Beispiel für Critical-Hit-Sound
function playUpgradeSound() {
    const playUpgradeSound = document.getElementById('upgradeSound');
    playUpgradeSound.currentTime = 0;
    playUpgradeSound.play();
}

function playLuckSound() {
    const playLuckSound = document.getElementById('luckSound');
    playLuckSound.currentTime = 0;
    playLuckSound.play();
}

function playAchievementSound() {
    const playAchievementSound = document.getElementById('achievementSound');
    playAchievementSound.currentTime = 0;
    playAchievementSound.play();
}

document.getElementById('clickBtn').addEventListener('click', () => {
    points += powerCounter;
    totalPoints += powerCounter;
    clickCounter++;
    totalClicks++;

    const luckClickThreshold = Math.floor(Math.random() * (rarityFactorLuck * (401 - luckFactor * 50))) + (20 + luckFactor * 50);

    if (clickCounter >= luckClickThreshold) {
        applyLuckBonus();
        clickCounter = 0;
    }
    if (totalClicks >= minClicks){
        const criticalClickThreshold = Math.floor(Math.random() * (rarityFactorCrit * (401 - criticalFactor * 50))) + (20 + criticalFactor * 50);
    
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
    saveGame();
}

function updateDisplay() {
    autoSpeedDisplay.textContent = `${autoClickSpeed} ms`;
    totalclicksDisplay.textContent = `${formatNumber(totalClicks)} clicks`;
    totalpointsDisplay.textContent = `${formatNumber(totalPoints)} points `;
    critDisplay.textContent = `${critClicks} clicks`;
    critFactorDisplay.textContent = `${rarityFactorCrit} Factor`;
    bonusDisplay.textContent = `${bonusMultiplier}%`;
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
}

function startAutoClicker() {
    autoClickInterval = setInterval(() => {
        points += powerCounter;
        updateDisplay();
        checkAchievements();
    }, autoClickSpeed);

    autoClickerOn = true;
    updateDisplay();
}

function stopAutoClicker() {
    clearInterval(autoClickInterval);
    autoClickerOn = false;
    updateDisplay();
}

window.addEventListener('beforeunload', saveGame);
updateDisplay();
