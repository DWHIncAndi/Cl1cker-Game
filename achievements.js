const achievementDisplay = document.getElementById('achievement');

function checkAchievements() {
    const rawPoints = unformatNumber(points);
    const level = upgradeLevel
    const critlevel = criticalLevel
    const bonuslevel = bonusLevel
    const autolevel = autoClickerLevel
    const purchased = autoClickerPurchased
    const crit = critClicks

    if (rawPoints >= 100 && !achievementsUnlocked.includes('•First 💯!')) {
        const achievement = '•First 💯!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }

    if (rawPoints >= 100000 && !achievementsUnlocked.includes('•First 100k!')) {
        const achievement = '•First 100k!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }

    if (rawPoints >= 1000000 && !achievementsUnlocked.includes('•Million points!')) {
        const achievement = '•Million points!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }

    if (rawPoints >= 100000000 && !achievementsUnlocked.includes('•Multi Millionaire!')) {
        const achievement = '•Multi Millionaire!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }

    if (rawPoints >= 8999999999999999 && !achievementsUnlocked.includes('•Richest Person!')) {
        const achievement = '•Richest Person!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }

    if (level >= 1 && !achievementsUnlocked.includes('•First Power Up!')) {
        const achievement = '•First Power Up!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }
    if (level >= 250 && !achievementsUnlocked.includes('•Maxed Power!')) {
        const achievement = '•Maxed Power!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }
    if (bonuslevel >= 50 && !achievementsUnlocked.includes('•Many Bonuses!')) {
        const achievement = '•Many Bonuses!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }
    if (critlevel >= 15 && !achievementsUnlocked.includes('•Crit after Crit!')) {
        const achievement = '•Crit after Crit!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }
    if (autolevel >= 18 && !achievementsUnlocked.includes('•Fast & Furious!')) {
        const achievement = '•Fast & Furious!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }
    if (crit >= 1 && !achievementsUnlocked.includes('•First Crit!')) {
        const achievement = '•First Crit!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }
    if (purchased === true && !achievementsUnlocked.includes('•Auto Clicker!')) {
        const achievement = '•Auto Clicker!';
        achievementsUnlocked.push(achievement);
        updateAchievementDisplay();
        showNotification(`Achievement Unlocked: ${achievement}`);
        playAchievementSound();
    }
}

function updateAchievementDisplay() {
    const achievementDisplay = document.getElementById('achievement');
    if (achievementDisplay) {
        achievementDisplay.innerHTML = achievementsUnlocked.join('<br>');
    }
}

function unformatNumber(formattedNumber) {
    const suffixes = ["", "k", "M", "B", "T", "Q", "Qt", "Sx", "Sp", "Oc", "No", "Dc", "Un", "Du", "Tr", "Qu", "Qi", "Se", "St", "Ot", "Nv", "Vg", "Ct", "Ut", "Dt", "Tt", "QtT", "SxT", "SpT", "OcT", "NoT", "DcT", "UnT", "DuT", "TrT", "QuT", "QiT", "SeT", "StT", "OtT", "NvT", "VgT", "CtT", "UtT", "DtT", "TtT", "QtTT", "SxTT", "SpTT", "OcTT"];

    let rawNumber;

    if (typeof formattedNumber === 'number') {
        rawNumber = formattedNumber;
    } else if (typeof formattedNumber === 'string') {
        let numericPart = formattedNumber.replace(/[^\d.-]/g, '');
        let suffixPart = formattedNumber.replace(/[\d.-]/g, '');

        rawNumber = parseFloat(numericPart);

        if (!isNaN(rawNumber)) {
            for (let i = suffixes.length - 1; i >= 0; i--) {
                const suffix = suffixes[i];
                if (suffixPart.startsWith(suffix)) {
                    rawNumber *= Math.pow(1000, i);
                    break;
                }
            }
        }
    }

    return rawNumber;
}

// Funktion zum Anzeigen aller Achievements im Container
function showAllAchievements() {
    const achievementContainer = document.getElementById('achievements-list');
    achievementContainer.innerHTML = ''; // Zuerst den Container leeren

    // Durchlaufen Sie alle Achievements und fügen Sie sie dem Container hinzu
    const allAchievements = [
        '• First Click!',
        '• First 100k!',
        '• Million points!',
        '• Multi Millionaire!',
        '• Richest Person!',
        '• First Power Up!',
        '• Maxed Power!',
        '• Crit after Crit!',
        '• Fast & Furious!',
        '• First Crit!',
        '• Auto Clicker!'
        // Fügen Sie hier weitere Achievements hinzu, wenn Sie möchten
    ];

    allAchievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.textContent = achievement;
        achievementContainer.appendChild(achievementElement);
    });
}

// Funktion zum Anzeigen aller Achievements im Container
function showAllAchievementsInGame() {
    const achievementContainer = document.getElementById('achievements-list2');
    achievementContainer.innerHTML = ''; // Zuerst den Container leeren

    // Durchlaufen Sie alle Achievements und fügen Sie sie dem Container hinzu
    const allAchievements = [
        '• First Click!',
        '• First 100k!',
        '• Million points!',
        '• Multi Millionaire!',
        '• Richest Person!',
        '• First Power Up!',
        '• Maxed Power!',
        '• Crit after Crit!',
        '• Fast & Furious!',
        '• First Crit!',
        '• Auto Clicker!'
        // Fügen Sie hier weitere Achievements hinzu, wenn Sie möchten
    ];

    allAchievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.textContent = achievement;
        achievementContainer.appendChild(achievementElement);
    });
}










