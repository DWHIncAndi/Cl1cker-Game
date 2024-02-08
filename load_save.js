function loadGame() {
    points = parseInt(localStorage.getItem('points')) || points;
    powerCounter = parseInt(localStorage.getItem('powerCounter')) || powerCounter;
    clickCounter = parseInt(localStorage.getItem('clickCounter')) || clickCounter;
    totalClicks = parseInt(localStorage.getItem('totalClicks')) || totalClicks;
    luckFactor = parseFloat(localStorage.getItem('luckFactor')) || luckFactor;
    totalPoints = parseInt(localStorage.getItem('totalPoints')) || totalPoints;
    criticalFactor = parseFloat(localStorage.getItem('criticalFactor')) || criticalFactor;
    critClicks = parseInt(localStorage.getItem('critClicks')) || critClicks;
    rarityFactorCrit = parseInt(localStorage.getItem('rarityFactorCrit')) || rarityFactorCrit;
    rarityFactorLuck = parseInt(localStorage.getItem('rarityFactorLuck')) || rarityFactorLuck;
    minClicks = parseInt(localStorage.getItem('minClicks')) || minClicks;
    autoClickerOn = localStorage.getItem('autoClickerOn') === 'true';
    autoClickSpeed = parseInt(localStorage.getItem('autoClickSpeed')) || autoClickSpeed;
    upgradeCost = parseInt(localStorage.getItem('upgradeCost')) || upgradeCost;
    upgradeLevel = parseInt(localStorage.getItem('upgradeLevel')) || upgradeLevel;
    autoClickCost = parseInt(localStorage.getItem('autoClickCost')) || autoClickCost;
    autoClickerPurchased = localStorage.getItem('autoClickerPurchased') === 'true';
    autoClickerLevel = parseInt(localStorage.getItem('autoClickerLevel')) || autoClickerLevel;
    autoUpgradeCost = parseInt(localStorage.getItem('autoUpgradeCost')) || autoUpgradeCost;
    bonusUpgradeCost = parseInt(localStorage.getItem('bonusUpgradeCost')) || bonusUpgradeCost;
    bonusLevel = parseInt(localStorage.getItem('bonusLevel')) || bonusLevel;
    bonusMultiplier = parseFloat(localStorage.getItem('bonusMultiplier')) || bonusMultiplier;
    criticalUpgradeCost = parseInt(localStorage.getItem('criticalUpgradeCost')) || criticalUpgradeCost;
    criticalLevel = parseInt(localStorage.getItem('criticalLevel')) || criticalLevel;
    achievementsUnlocked = JSON.parse(localStorage.getItem('achievementsUnlocked')) || [];
    console.log('Game data loaded from localStorage:', localStorage);

    updateDisplay(); // Anzeige aktualisieren, nachdem das Spiel geladen wurde
    updateAchievementDisplay();
}

function saveGame() {
    localStorage.setItem('points', points);
    localStorage.setItem('powerCounter', powerCounter);
    localStorage.setItem('clickCounter', clickCounter);
    localStorage.setItem('totalClicks', totalClicks);
    localStorage.setItem('luckFactor', luckFactor);
    localStorage.setItem('totalPoints', totalPoints);
    localStorage.setItem('criticalFactor', criticalFactor);
    localStorage.setItem('critClicks', critClicks);
    localStorage.setItem('rarityFactorCrit', rarityFactorCrit);
    localStorage.setItem('rarityFactorLuck', rarityFactorLuck);
    localStorage.setItem('minClicks', minClicks);
    localStorage.setItem('autoClickerOn', autoClickerOn);
    localStorage.setItem('autoClickSpeed', autoClickSpeed);
    localStorage.setItem('upgradeCost', upgradeCost);
    localStorage.setItem('upgradeLevel', upgradeLevel);
    localStorage.setItem('autoClickCost', autoClickCost);
    localStorage.setItem('autoClickerPurchased', autoClickerPurchased);
    localStorage.setItem('autoClickerLevel', autoClickerLevel);
    localStorage.setItem('autoUpgradeCost', autoUpgradeCost);
    localStorage.setItem('bonusUpgradeCost', bonusUpgradeCost);
    localStorage.setItem('bonusLevel', bonusLevel);
    localStorage.setItem('bonusMultiplier', bonusMultiplier);
    localStorage.setItem('criticalUpgradeCost', criticalUpgradeCost);
    localStorage.setItem('criticalLevel', criticalLevel);
    localStorage.setItem('achievementsUnlocked', JSON.stringify(achievementsUnlocked));
    console.log('Game data saved to localStorage:', localStorage);
}