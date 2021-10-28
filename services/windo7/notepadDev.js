const fileDownloadButton = document.getElementById('save');
function localStorageToFile() {
    const csv = JSON.stringify(localStorage['autosave']);
    const csvAsBlob = new Blob([csv], {type: 'text/plain'});
    const fileNameToSaveAs = 'local-storage.txt';
    const downloadLink = document.getElementById('save');
    downloadLink.download = fileNameToSaveAs;
    if (window.URL !== null) {
        // Chrome allows the link to be clicked without actually adding it to the DOM
        downloadLink.href = window.URL.createObjectURL(csvAsBlob);
        downloadLink.target = `_blank`;
    } else {
        downloadLink.href = window.URL.createObjectURL(csvAsBlob);
        downloadLink.target = `_blank`;
        downloadLink.style.display = 'none';
        // add .download so works in Firefox desktop.
        document.body.appendChild(downloadLink.download);
    }
    downloadLink.click();
}
// file download button event listener
fileDownloadButton.addEventListener('click', localStorageToFile);


(function(console){

    console.save = function(data, filename){

        if(!data) {
            console.error('Console.save: No data')
            return;
        }

        if(!filename) filename = 'console.json'

        if(typeof data === "object"){
            data = JSON.stringify(data, undefined, 4)
        }

        var blob = new Blob([data], {type: 'text/json'}),
            e    = document.createEvent('MouseEvents'),
            a    = document.createElement('a')

        a.download = filename
        a.href = window.URL.createObjectURL(blob)
        a.dataset.downloadurl =  ['text/json', a.download, a.href].join(':')
        e.initMouseEvent('click', true, false, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null)
        a.dispatchEvent(e)
    }
})(console)