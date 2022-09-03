
//Make this a Hybrid app in portrait mode.
cfg.Hybrid, cfg.Portrait

//Load scripts for each page.
app.Script( "Home.js" )
app.Script( "Settings.js" )

//Array of page layouts.
var pages = []

//Called when application starts.
function OnStart()
{
    //Add main layout.
    layMain = ui.addLayout( "main", "linear" )

    //Create app bar and menu drawer.
    CreateBar()
    CreateDrawer()

    //Create layout for pages and load home page.
    layPage = ui.addLayout( layMain, "frame", "", 1, 0.8 )
    ShowPage( "Home" )
}

//Show a given page inside the page layout.
function ShowPage( page )
{
    //Hide all pages.
    for( p in pages ) pages[p].hide()

    //Show chosen page.
    switch( page )
    {
        case "Home": ShowHome(); break
        case "Settings": ShowSettings(); break
    }
}

//Create a title bar with a menu icon.
function CreateBar()
{
    //Add app bar.
    bar = ui.addAppBar( layMain, "My App", "menu", 1 )
    bar.setOnMenu( () => { drawer.open() } )
}

//Create the menu drawer.
function CreateDrawer()
{
    //Add a drawer layout.
    drawerWidth = platform.mobile ? 0.6 : 0.2
    layDrawer = ui.addLayout( null, "Linear", "VCenter", drawerWidth )

    //Add an icon list to the drawer layout.
    //(Icons can be found here - https://fonts.google.com/icons)
    var menus1 = [["home", "Home"], ["settings", "Settings"]]
    lstMenu1 = ui.addList( layDrawer, menus1, "icon", drawerWidth )
    lstMenu1.setOnTouch( lstMenu_OnTouch )

    //Create the drawer.
    drawer = ui.createDrawer( layDrawer, "left", "persistent" )
    drawer.setOnClose( ()=>{ console.log("onClose") } )
}

//Handle drawer list item selection.
function lstMenu_OnTouch( title, body, icon, index )
{
    //Close drawer and load the chosen page.
    drawer.close()
    ShowPage( title )
}
