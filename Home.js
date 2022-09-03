
//Create the home page
function ShowHome()
{
    //If home page layout not created yet.
    if( !pages["Home"] )
    {
        //Create a home layout.
        layHome = ui.addLayout( layPage, "linear", "fillxy,vcenter" )
        layHome.setChildMargins( .02, .02, .02, .01 )

        //Store layout in pages array.
        pages["Home"] = layHome

        //Add some text.
        var s = "This is your <strong>home page</strong>."
        txtHome = ui.addText( layHome, s, "Multiline,Html" )
    }

    //Show the page.
    layHome.show()
}
