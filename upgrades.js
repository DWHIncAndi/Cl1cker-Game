let autoClickerOn = false
let autoClickSpeed = 1000; // Startgeschwindigkeit des Auto Clickers
let upgradeCost = 300;
let upgradeLevel = 0
let autoClickCost = 50000;
let autoClickerPurchased = false;
let autoClickInterval;
let autoClickerLevel = 0
let autoUpgradeCost = 100000;
let bonusUpgradeCost = 4000;
let bonusLevel = 0;
let bonusMultiplier = 0.00
let luckUpgradeCost = 5000
let luckLVL = 0
let clickBonus = Math.floor(Math.random() * (200 - 50 + 1)) + 50;


autoClickBtn.addEventListener('click', () => {
    if (!autoClickerPurchased) {
        if (points >= autoClickCost && !autoClickerOn) {
            points -= autoClickCost;
            autoClickerOn = true;
            autoClickerPurchased = true;
            startAutoClicker();
        }
    } else if (!autoClickerOn) {
        stopAutoClicker();
    } else {
        startAutoClicker();
    }

    autoClickerOn = !autoClickerOn;
    updateDisplay();
});

upgradeBtn.addEventListener('click', () => {
    if (points >= upgradeCost && upgradeLevel < 250) {
        points -= upgradeCost;
        powerCounter *= 2;
        upgradeCost *= 6.5;
        upgradeLevel++;
        updateDisplay();
    } else if (upgradeLevel >= 250) {
        alert('You have reached the maximum level for this upgrade!');
    } else {
        alert('Not enough points to upgrade!');
    }
});

autoUpgradeBtn.addEventListener('click', () => {
    if (!autoClickerPurchased){
        alert('You must buy the Auto clicker to use this upgrade!');
    }
    else if (points >= autoUpgradeCost && autoClickerLevel < 18) {
        points -= autoUpgradeCost;
        autoClickSpeed -= 50;
        autoUpgradeCost *= 12.5;
        autoClickerLevel++;
        clearInterval(autoClickInterval);
        startAutoClicker(); // Starte den Auto Clicker neu mit der aktualisierten Geschwindigkeit
        updateDisplay();
    } else if (autoClickerLevel >= 18) {
        alert('You have reached the maximum level for this upgrade!');
    } else {
        alert('Not enough points to upgrade Auto Clicker!');
    }
});

bonusUpgradeBtn.addEventListener('click', () => {
    if (points >= bonusUpgradeCost && bonusLevel < 50) {
        points -= bonusUpgradeCost;
        bonusLevel++;
        applyBonus();
        bonusUpgradeCost *= 6.5; // Kosten für das nächste Upgrade erhöhen
        updateDisplay();
    } else if (bonusLevel >= 50) {
        alert('You have reached the maximum level for this upgrade!');
    } else {
        alert('Not enough points to upgrade Bonus!');
    }
});

function applyBonus() {
    // Implementiere hier die Logik für den Bonus basierend auf bonusLevel und powerCounter
    bonusMultiplier = 1 + bonusLevel * 0.1; // Beispiel: Jedes Upgrade erhöht den Bonus um 10%
    powerCounter *= bonusMultiplier;
    // Weitere Bonus-Logik hier hinzufügen, je nach den Anforderungen deines Spiels
}

luckUpgradeBtn.addEventListener('click', () => {
    if (points >= luckUpgradeCost && luckLVL < 40) {
        points -= luckUpgradeCost;
        luckLVL++;
        applyLuck();
        luckUpgradeCost *= 1.5; // Kosten für das nächste Upgrade erhöhen
        updateDisplay();
    } else if (luckLVL >= 40) {
        alert('You have reached the maximum level for this upgrade!');
    } else {
        alert('Not enough points to upgrade Luck!');
    }
});

function applyLuck() {
    points += clickBonus * 10 * luckLVL / 100; // Bonus basierend auf Luck-Level
    alert(`You just became a Luck Bonus of ${clickBonus}`)
    // Weitere Luck-Logik hier hinzufügen, je nach den Anforderungen deines Spiels
}