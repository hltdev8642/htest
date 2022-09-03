
//Create the home page
function ShowSettings()
{
    //If settings page layout not created yet.
    if( !pages["Settings"] )
    {
        //Create a home layout.
        laySet = ui.addLayout( layPage, "linear", "fillxy,vcenter" )
        laySet.setChildMargins( .02, .01, .02, .01 )

        //Store layout in pages array.
        pages["Settings"] = laySet

        //Add a button with primary color.
        btnHello = ui.addButton( laySet, "Hello World", "primary" )
        btnHello.setOnTouch( function(){ui.showPopup("hi")} )
    }

    //Show the page.
    laySet.show()
}

