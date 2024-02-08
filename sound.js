function updateMainVolume() {
    const mainVolumeControl = document.getElementById('main-volume-control');
    const mainVolumeLevel = document.getElementById('main-volume-level');
    const achievementSound = document.getElementById('achievementSound');
    const clickSound = document.getElementById('clickSound');
    const critClickSound = document.getElementById('criticalHitSound');
    const upgradeSound = document.getElementById('upgradeSound');
    achievementSound.volume = mainVolumeControl.value / 100;
    clickSound.volume = mainVolumeControl.value / 100;
    critClickSound.volume = mainVolumeControl.value / 100;
    upgradeSound.volume = mainVolumeControl.value / 100;
    mainVolumeLevel.textContent = mainVolumeControl.value + '%';
}

function updateAchievementVolume() {
    const achievementVolumeControl = document.getElementById('achievement-volume-control');
    const achievementVolumeLevel = document.getElementById('achievement-volume-level');
    const achievementSound = document.getElementById('achievementSound');
    achievementSound.volume =  achievementVolumeControl.value / 100;
    achievementVolumeLevel.textContent =  achievementVolumeControl.value + '%';
}

function updateClickVolume() {
    const clickVolumeControl = document.getElementById('click-volume-control');
    const clickVolumeLevel = document.getElementById('click-volume-level');
    const clickSound = document.getElementById('clickSound');
    clickSound.volume =  clickVolumeControl.value / 100;
    clickVolumeLevel.textContent =  clickVolumeControl.value + '%';
}

function updateCritClickVolume() {
    const critClickVolumeControl = document.getElementById('crit-click-volume-control');
    const critClickVolumeLevel = document.getElementById('crit-click-volume-level');
    const critClickSound = document.getElementById('criticalHitSound');
    critClickSound.volume =  critClickVolumeControl.value / 100;
    critClickVolumeLevel.textContent =  critClickVolumeControl.value + '%';
}

function updateUpgradeVolume() {
    const upgradeVolumeControl = document.getElementById('upgrade-volume-control');
    const upgradeVolumeLevel = document.getElementById('upgrade-volume-level');
    const upgradeSound = document.getElementById('upgradeSound');
    upgradeSound.volume = upgradeVolumeControl.value / 100;
    upgradeVolumeLevel.textContent = upgradeVolumeControl.value + '%';
}

document.getElementById('main-volume-control').addEventListener('input', updateMainVolume);
document.getElementById('achievement-volume-control').addEventListener('input', updateAchievementVolume);
document.getElementById('click-volume-control').addEventListener('input', updateClickVolume);
document.getElementById('crit-click-volume-control').addEventListener('input', updateCritClickVolume);
document.getElementById('upgrade-volume-control').addEventListener('input', updateUpgradeVolume);

function playClickSound() {
    const clickSound = document.getElementById('clickSound');
    clickSound.currentTime = 0;
    clickSound.play();
}

function playCriticalHitSound() {
    const criticalHitSound = document.getElementById('criticalHitSound');
    criticalHitSound.currentTime = 0;
    criticalHitSound.play();
}

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
    const playAchievemntSound = document.getElementById('achievementSound');
    playAchievemntSound.currentTime = 0;
    playAchievemntSound.play();
}