


// document.getElementById('open-room').onclick = function() {
//     const queryString = window.location.search;
//     console.log(queryString)
//         var roomid = document.getElementById('room-id').value;

//     if (!roomid.length) return alert('Please enter roomid.');
//     connection.open(roomid, onOpenRoom);

//     this.disabled = true;


//     this.parentNode.innerHTML = '<a href="#' + roomid + '" target="_blank">Please share this link</a>';
// };

function GenereteNewRoom(){
    
    var roomid = window.location.hash.substring(1);
    setTimeout(function(){
        connection.open(roomid, onOpenRoom);

    },1000)

}

GenereteNewRoom()
var designer = new CanvasDesigner();


// you can place widget.html anywhere
designer.widgetHtmlURL = 'widget.html';
designer.widgetJsURL = 'widget.min.js'

designer.addSyncListener(function(data) {
    connection.send(data);
});

designer.setSelected('pencil');

designer.setTools({
    pencil: true,
    text: true,
    image: true,
    pdf: true,
    eraser: true,
    line: true,
    arrow: true,
    dragSingle: true,
    dragMultiple: true,
    arc: true,
    rectangle: true,
    quadratic: false,
    marker: true,
    zoom: false,
    lineWidth: true,
    colorsPicker: true,
    extraOptions: true,
    code: false,
    undo: true
});

designer.appendTo(document.getElementById('widget-container'));

// Array.prototype.slice.call(document.getElementById('action-controls').querySelectorAll('input[type=checkbox]')).forEach(function(checkbox) {
//     checkbox.onchange = function() {
//         designer.destroy();

//         designer.addSyncListener(function(data) {
//             connection.send(data);
//         });

//         var tools = {};
//         Array.prototype.slice.call(document.getElementById('action-controls').querySelectorAll('input[type=checkbox]')).forEach(function(checkbox2) {
//             if (checkbox2.checked) {
//                 tools[checkbox2.id] = true;
//             }
//         });
//         designer.setTools(tools);
//         designer.appendTo(document.getElementById('widget-container'));
//     };
// });

var undoOptions = document.getElementById('undo-options');

// document.getElementById('btn-display-undo-popup').onclick = function() {
//     document.getElementById('light').style.display = 'block';
//     document.getElementById('fade').style.display = 'block';
// };


// var txtNumberOfShapesToUndo = document.getElementById('number-of-shapes-to-undo');
// txtNumberOfShapesToUndo.onkeyup = function() {
//     localStorage.setItem('number-of-shapes-to-undo', txtNumberOfShapesToUndo.value);
// }

// if (localStorage.getItem('number-of-shapes-to-undo')) {
//     txtNumberOfShapesToUndo.value = localStorage.getItem('number-of-shapes-to-undo');
//     txtNumberOfShapesToUndo.onkeyup();
// }

// undoOptions.onchange = function() {
//     txtNumberOfShapesToUndo.parentNode.style.display = 'none';

//     if (undoOptions.value === 'Specific Range') {
//         //
//     } else if (undoOptions.value === 'Last Multiple') {
//         txtNumberOfShapesToUndo.parentNode.style.display = 'block';
//     }

//     localStorage.setItem('undo-options', undoOptions.value);
// };

// undoOptions.onclick = undoOptions.onchange;

// if (localStorage.getItem('undo-options')) {
//     undoOptions.value = localStorage.getItem('undo-options');
//     undoOptions.onchange();
// }

// document.getElementById('btn-undo').onclick = function() {
//     if (undoOptions.value === 'All Shapes') {
//         designer.undo('all');
//     } else if (undoOptions.value === 'Specific Range') {
//         designer.undo({
//             specificRange: {
//                 start: -1,
//                 end: -1
//             }
//         });
//     } else if (undoOptions.value === 'Last Shape') {
//         designer.undo(-1);
//     } else if (undoOptions.value === 'Last Multiple') {
//         var numberOfLastShapes = txtNumberOfShapesToUndo.value;
//         numberOfLastShapes = parseInt(numberOfLastShapes || 0) || 0;
//         designer.undo({
//             numberOfLastShapes: numberOfLastShapes
//         });
//     }

//     closeUndoPopup();
// };

// function closeUndoPopup() {
//     document.getElementById('light').style.display = 'none';
//     document.getElementById('fade').style.display = 'none';

//     undoOptions.onchange();
// }
// document.getElementById('btn-close-undo-popup').onclick = closeUndoPopup;

function closeDataURLPopup() {
    document.getElementById('dataURL-popup').style.display = 'none';
    document.getElementById('fade').style.display = 'none';

    dataURLFormat.onchange();
}
document.getElementById('btn-close-dataURL-popup').onclick = closeDataURLPopup;
var formatImage = document.getElementById('format');

document.getElementById('export-as-image').onclick = function() {
    console.log('yoooo')
    linkToImage.innerHTML = linkToImage.href = linkToImage.style = '';

    document.getElementById('dataURL-popup').style.display = 'block';
    document.getElementById('fade').style.display = 'block';

    getDataURL();
};

function getDataURL(callback) {
    callback = callback || function() {};
    var format = dataURLFormat.value;
    formatImage.innerHTML = 'Export Image As ' + dataURLFormat.value
    designer.toDataURL(format || 'image/png', function(dataURL) {
        linkToImage.style = 'margin-left: 10px;display: block;text-align: center;margin-bottom: -50px;';
        linkToImage.href = dataURL;
        linkToImage.innerHTML = 'Click to Download Image';
        linkToImage.download = 'image.' + (format || 'image/png').split('/')[1];

        callback(dataURL, format);
    });
}

var dataURLFormat = document.getElementById('data-url-format');
var linkToImage = document.getElementById('link-to-image');

dataURLFormat.onchange = function() {
    localStorage.setItem('data-url-format', dataURLFormat.value);
    getDataURL();
};
dataURLFormat.onclick = dataURLFormat.onchange;

if (localStorage.getItem('data-url-format')) {
    dataURLFormat.value = localStorage.getItem('data-url-format');
    dataURLFormat.onchange();
}

const LinkGroup  =  document.getElementById('linkGroup')
LinkGroup.value = window.location.href

function CopyLink() {
    /* Get the text field */
  
    /* Select the text field */
    LinkGroup.select();
    LinkGroup.setSelectionRange(0, 99999); /* For mobile devices */
  
    /* Copy the text inside the text field */
    document.execCommand("copy");
  
    /* Alert the copied text */
    alert("Copied the text: " + LinkGroup.value);
  }





// document.getElementById('btn-getDataURL').onclick = function() {
//     getDataURL(function(dataURL, format) {
//         window.open(dataURL);
//     });

//     // closeDataURLPopup();
// };


