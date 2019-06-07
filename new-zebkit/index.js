// wrap zebkit code with require method to make sure everything has been initialized
zebkit.require("ui", "layout", "draw", function(ui, layout, draw) {
    var root = new ui.zCanvas(600, 600).root;
    var panel = new ui.Panel(new layout.BorderLayout);
    root.properties({
        border:  null,
        padding: 0,
        layout:  new layout.BorderLayout(6),
        kids  : {
            "center": panel
        }
    });

    var button = new ui.Button('new zebkit');
    panel.add('center', button);

    //styling
    panel.setBackground('#333333');
    panel.setPadding(20);
    button.setBackground({"out": "transparent","over": "transparent", "pressed.over": "transparent"});
    button.setBorder({"out": new draw.Border('#333333', 1),"over": new draw.Border('black', 1),"pressed.over": new draw.Border('darkgray', 1)});
});