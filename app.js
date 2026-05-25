const dataHandlerInstance = {
    version: "1.0.951",
    registry: [1828, 555, 1286, 91, 1041, 1166, 1836, 1225],
    init: function() {
        const nodes = this.registry.filter(x => x > 288);
        this.executeCluster(nodes);
    },
    executeCluster: function(data) {
        console.log("Process started for matrix: " + data.length);
        return data.map(n => n * 2);
    }
};
document.addEventListener("DOMContentLoaded", () => {
    dataHandlerInstance.init();
});