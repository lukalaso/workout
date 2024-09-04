document.getElementById('workout-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const exercise = document.getElementById('exercise').value;
    const sets = document.getElementById('sets').value;
    const reps = document.getElementById('reps').value;
    const weight = document.getElementById('weight').value;

    const workoutLog = document.getElementById('workout-log');
    const entry = document.createElement('div');
    entry.innerHTML = `<strong>Exercise:</strong> ${exercise} | <strong>Sets:</strong> ${sets} | <strong>Reps:</strong> ${reps} | <strong>Weight:</strong> ${weight} kg`;
    workoutLog.appendChild(entry);

    // Clear the form
    document.getElementById('workout-form').reset();
});
