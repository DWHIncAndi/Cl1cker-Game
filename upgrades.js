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
let bonusMultiplier = 0.00;
let criticalUpgradeCost = 5000;
let criticalLevel = 0;


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

criticalUpgradeBtn.addEventListener('click', () => {
    if (points >= criticalUpgradeCost && criticalLevel < 40) {
        points -= criticalUpgradeCost;
        criticalLevel++;
        criticalUpgradeCost *= 1.5; // Kosten für das nächste Upgrade erhöhen
        criticalFactor *= 1.2; // Faktor exponentiell erhöhen
        updateDisplay();
    } else if (criticalLevel >= 40) {
        alert('You have reached the maximum level for Critical Hit upgrade!');
    } else {
        alert('Not enough points to upgrade Critical Hit!');
    }
});