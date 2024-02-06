const achievementDisplay = document.getElementById('achievement');

function checkAchievements() {
    const rawPoints = unformatNumber(points);

    if (rawPoints >= 50 && !achievementsUnlocked.includes('•First Click!')) {
        const achievement = '•First Click!';
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

    if (rawPoints >= 400000000000000 && !achievementsUnlocked.includes('•Richest Person!')) {
        const achievement = '•Richest Person!';
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
        '•First Click!',
        '•First 100k!',
        '•Million points!',
        '•Multi Millionaire!',
        '•Richest Person!'
        // Fügen Sie hier weitere Achievements hinzu, wenn Sie möchten
    ];

    allAchievements.forEach(achievement => {
        const achievementElement = document.createElement('div');
        achievementElement.textContent = achievement;
        achievementContainer.appendChild(achievementElement);
    });
}










