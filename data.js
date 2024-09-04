const workoutPlan = {
    "Upper Body A": [
        "Chest Press Machine (3 sets of 8-12 reps)",
        "Lat Pulldown Machine (3 sets of 8-12 reps)",
        "Seated Row Machine (3 sets of 8-12 reps)",
        "Machine Shoulder Press (3 sets of 8-12 reps)",
        "Machine Lateral Raises (3 sets of 10-15 reps)",
        "Machine Bicep Curl (3 sets of 10-15 reps)",
        "Tricep Pushdown (Cable Machine) (3 sets of 10-15 reps)"
    ],
    "Lower Body A": [
        "Leg Press Machine (4 sets of 12-15 reps)",
        "Leg Curl Machine (3 sets of 10-15 reps)",
        "Leg Extension Machine (3 sets of 10-15 reps)",
        "Seated Calf Raise Machine (4 sets of 15-20 reps)",
        "Cable Pull-Throughs (3 sets of 12-15 reps)"
    ],
    "Upper Body B": [
        "Incline Chest Press Machine (3 sets of 8-12 reps)",
        "Machine Pec Deck (Chest Flyes) (3 sets of 10-15 reps)",
        "T-Bar Row Machine (3 sets of 8-12 reps)",
        "Cable Lateral Raises (3 sets of 10-15 reps)",
        "Cable Rope Face Pulls (3 sets of 12-15 reps)",
        "Preacher Curl Machine (3 sets of 10-15 reps)",
        "Overhead Tricep Extension (Cable Machine) (3 sets of 10-15 reps)"
    ],
    "Lower Body B": [
        "Smith Machine Squats (4 sets of 10-12 reps)",
        "Hack Squat Machine (3 sets of 8-12 reps)",
        "Glute Ham Raise Machine or Leg Curl Machine (3 sets of 10-12 reps)",
        "Standing Calf Raise Machine (4 sets of 15-20 reps)",
        "Cable Machine Abduction/Adduction (3 sets of 12-15 reps each)"
    ]
};

function startWorkout(workoutName) {
    const workoutDetails = document.getElementById('workout-details');
    const workoutTitle = document.getElementById('workout-title');
    const exerciseList = document.getElementById('exercise-list');

    workoutTitle.textContent = workoutName;
    exerciseList.innerHTML = '';

    workoutPlan[workoutName].forEach(exercise => {
        const li = document.createElement('li');
        li.textContent = exercise;
        li.classList.add('list-group-item');
        exerciseList.appendChild(li);
    });

    workoutDetails.classList.remove('d-none');
}

function completeWorkout() {
    const workoutName = document.getElementById('workout-title').textContent;
    const today = new Date().toISOString().split('T')[0];

    let history = localStorage.getItem('workoutHistory');
    if (!history) {
        history = {};
    } else {
        history = JSON.parse(history);
    }

    if (!history[today]) {
        history[today] = [];
    }

    history[today].push(workoutName);
    localStorage.setItem('workoutHistory', JSON

.stringify(history));

    alert('Workout completed and logged!');
    window.location.href = 'index.html';
}

function viewHistory() {
    const historySection = document.getElementById('history-section');
    const historyList = document.getElementById('history-list');

    let history = localStorage.getItem('workoutHistory');
    if (!history) {
        alert('No workout history found.');
        return;
    }

    history = JSON.parse(history);
    historyList.innerHTML = '';

    for (const date in history) {
        const li = document.createElement('li');
        li.textContent = `${date}: ${history[date].join(', ')}`;
        li.classList.add('list-group-item');
        historyList.appendChild(li);
    }

    historySection.classList.remove('d-none');
}

function viewProgress() {
    const progressSection = document.getElementById('progress-section');
    const ctx = document.getElementById('progressChart').getContext('2d');

    // Example chart data
    const chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
            datasets: [{
                label: 'Weight (kg)',
                data: [65, 66, 67, 68],
                borderColor: 'rgba(75, 192, 192, 1)',
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                fill: true
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });

    progressSection.classList.remove('d-none');
}