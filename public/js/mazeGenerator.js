function theMaze() {
    return {
        height:10,
         layers:[
            {
                 data:[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 2, 1, 1, 1, 2, 1, 2, 1, 1, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 3],
                 height:10,
                 name:"MazeGrid",
                 opacity:1,
                 type:"tilelayer",
                 visible:true,
                 width:10,
                 x:0,
                 y:0
            }],
         nextobjectid:1,
         orientation:"orthogonal",
         renderorder:"right-down",
         tileheight:32,
         tilesets:[
                {
                 columns:3,
                 firstgid:1,
                 image:"basic_all.png",
                 imageheight:32,
                 imagewidth:96,
                 margin:0,
                 name:"Tiles",
                 spacing:0,
                 tilecount:3,
                 tileheight:32,
                 tilewidth:32
                }],
         tilewidth:32,
         version:1,
         width:10
    };
}