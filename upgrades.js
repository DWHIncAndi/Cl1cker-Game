
autoClickBtn.addEventListener('click', () => {
    if (!autoClickerPurchased) {
        if (points >= autoClickCost && !autoClickerOn) {
            points -= autoClickCost;
            autoClickerOn = true;
            autoClickerPurchased = true;
            startAutoClicker();
            playUpgradeSound();
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
        playUpgradeSound();
    } else if (upgradeLevel >= 250) {
        showNotification('You have reached the maximum level for this upgrade!');
    } else {
        showNotification('Not enough points to upgrade!');
    }
    saveGame();
});

autoUpgradeBtn.addEventListener('click', () => {
    if (!autoClickerPurchased){
        showNotification('You must buy the Auto clicker to use this upgrade!');
    }
    else if (points >= autoUpgradeCost && autoClickerLevel < 18) {
        points -= autoUpgradeCost;
        autoClickSpeed -= 50;
        autoUpgradeCost *= 12.5;
        autoClickerLevel++;
        clearInterval(autoClickInterval);
        startAutoClicker(); // Starte den Auto Clicker neu mit der aktualisierten Geschwindigkeit
        updateDisplay();
        playUpgradeSound();
    } else if (autoClickerLevel >= 18) {
        showNotification('You have reached the maximum level for this upgrade!');
    } else {
        showNotification('Not enough points to upgrade Auto Clicker!');
    }
    saveGame();
});

bonusUpgradeBtn.addEventListener('click', () => {
    if (points >= bonusUpgradeCost && bonusLevel < 50) {
        points -= bonusUpgradeCost;
        bonusLevel++;
        applyBonus();
        bonusUpgradeCost *= 6.5; // Kosten für das nächste Upgrade erhöhen
        updateDisplay();
        playUpgradeSound();
    } else if (bonusLevel >= 50) {
        showNotification('You have reached the maximum level for this upgrade!');
    } else {
        showNotification('Not enough points to upgrade Bonus!');
    }
    saveGame();
});

criticalUpgradeBtn.addEventListener('click', () => {
    if (points >= criticalUpgradeCost && criticalLevel < 15) {
        points -= criticalUpgradeCost;
        criticalLevel++;
        criticalUpgradeCost *= 10.5; // Kosten für das nächste Upgrade erhöhen
        rarityFactorCrit -= 1; // Faktor exponentiell erhöhen
        updateDisplay();
        playUpgradeSound();
    } else if (criticalLevel >= 15) {
        showNotification('You have reached the maximum level for Critical Hit upgrade!');
    } else {
        showNotification('Not enough points to upgrade Critical Hit!');
    }
    saveGame();
});