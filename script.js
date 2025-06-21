//your JS code here. If required.
//your JS code here. If required.
document.addEventListener('DOMContentLoaded', function() {
    const browserInfoDiv = document.getElementById('browser-info');
    
    // Function to detect browser name and version
    function getBrowserInfo() {
        let browserName = 'Unknown Browser';
        let version = 'Unknown Version';
        
        // Get user agent string
        const userAgent = navigator.userAgent;
        
        // Detect browser name and version
        if (userAgent.indexOf('Firefox') > -1) {
            browserName = 'Mozilla Firefox';
            version = userAgent.match(/Firefox\/([0-9.]+)/)[1];
        } else if (userAgent.indexOf('SamsungBrowser') > -1) {
            browserName = 'Samsung Browser';
            version = userAgent.match(/SamsungBrowser\/([0-9.]+)/)[1];
        } else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
            browserName = 'Opera';
            version = userAgent.match(/(?:Opera|OPR)\/([0-9.]+)/)[1];
        } else if (userAgent.indexOf('Trident') > -1) {
            browserName = 'Internet Explorer';
            version = userAgent.match(/Trident\/([0-9.]+)/)[1];
        } else if (userAgent.indexOf('Edge') > -1) {
            browserName = 'Microsoft Edge';
            version = userAgent.match(/Edge\/([0-9.]+)/)[1];
        } else if (userAgent.indexOf('Chrome') > -1) {
            browserName = 'Google Chrome';
            version = userAgent.match(/Chrome\/([0-9.]+)/)[1];
        } else if (userAgent.indexOf('Safari') > -1) {
            browserName = 'Apple Safari';
            version = userAgent.match(/Version\/([0-9.]+)/)[1];
        }
        
        return { name: browserName, version: version };
    }
    
    // Get browser information
    const browserInfo = getBrowserInfo();
    
    // Display the information
    browserInfoDiv.textContent = `You are using ${browserInfo.name} version ${browserInfo.version}`;
    
    // Additional info for debugging (optional)
    console.log('User Agent:', navigator.userAgent);
    console.log('Browser Name:', navigator.appName);
    console.log('Browser Version:', navigator.appVersion);
});