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
    luckFactor = 100;
    totalPoints = 0;
    criticalFactor = 100;
    critClicks = 0;
    rarityFactorCrit = 100;
    rarityFactorLuck = 100;
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
    bonusMultiplier = 1.00;
    criticalUpgradeCost = 650000;
    criticalLevel = 0;
    achievementsUnlocked = []; // Leeres Array für Achievements

    updateAchievementDisplay();
    updateDisplay();
    saveGame();
}