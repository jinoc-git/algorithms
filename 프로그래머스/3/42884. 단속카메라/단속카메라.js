function solution(routes) {
    let camera = 0;
    const ascendingRoutes = routes.sort((a, b) => a[1] - b[1]);
    
    let cameraPosition = -Infinity;
    for (let [enter, exit] of ascendingRoutes) {
        if (cameraPosition < enter) {
            camera++;
            cameraPosition = exit;
        }
    }
    
    return camera;
}