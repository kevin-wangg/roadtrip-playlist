export default function getCoordinates(steps) {
    let coordinates = [];
    let distanceCounter = 0;
    const segmentDistance = 30000; // Store coordinates every 30 km (30,000 meters)
    coordinates.push(steps[0].start_location);
    distanceCounter += steps[0].distance.value;
    for(let i = 1; i < steps.length; ++i) {
        distanceCounter += steps[i].distance.value;
        if(distanceCounter >= segmentDistance) {
            coordinates.push(steps[i].start_location);
            distanceCounter = 0;
        }
    }
    return coordinates;
}