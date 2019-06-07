zebra.ready(function() {
    var ui = zebra.ui;
    var layout = zebra.layout;
    var root = (new ui.zCanvas(600, 600)).root;
    var panel = new ui.Panel(new layout.BorderLayout);
    root.properties({
        layout : new layout.BorderLayout(6, 6),
        border : null,
        padding: 0,
        kids: {
            CENTER: panel
        }
    });

    var button = new ui.Button('old zebra');
    panel.add('center', button);

    //styling
    panel.setBackground('#333333');
    panel.setPadding(20);
    button.setBackground({"out": "transparent", "over": "transparent", "pressed.over": "transparent"});
    button.setBorder({"out": new ui.Border('#333333', 1),"over": new ui.Border('black', 1),"pressed.over": new ui.Border('darkgray', 1)});
});

let iDevices = [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
];

window.app = {
    browser: {
        isIOS: iDevices.indexOf(navigator && navigator.platform) !== -1,
        notifier: {
            showToast: (string) => {
                alert(string);
            }
        }
    }
};

