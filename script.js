(function(){
    var script = {
 "mouseWheelEnabled": true,
 "start": "this.init()",
 "horizontalAlign": "left",
 "scrollBarOpacity": 0.5,
 "id": "rootPlayer",
 "children": [
  "this.MainViewer",
  {
   "horizontalAlign": "center",
   "scrollBarOpacity": 0.5,
   "left": "0%",
   "children": [
    "this.Container_55DC4FA8_5E27_15CF_419E_B6601832ABA2"
   ],
   "scrollBarVisible": "rollOver",
   "backgroundOpacity": 0,
   "overflow": "scroll",
   "width": "100%",
   "scrollBarMargin": 2,
   "paddingRight": 0,
   "paddingLeft": 0,
   "borderRadius": 0,
   "minHeight": 1,
   "scrollBarWidth": 10,
   "propagateClick": false,
   "bottom": "0%",
   "height": 185,
   "verticalAlign": "top",
   "minWidth": 1,
   "layout": "horizontal",
   "paddingBottom": 0,
   "gap": 1,
   "paddingTop": 0,
   "borderSize": 0,
   "contentOpaque": false,
   "class": "Container",
   "scrollBarColor": "#000000",
   "data": {
    "name": "Container16156"
   },
   "shadow": false
  }
 ],
 "scrollBarVisible": "rollOver",
 "overflow": "visible",
 "width": "100%",
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D",
 "paddingLeft": 0,
 "paddingRight": 0,
 "propagateClick": false,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "desktopMipmappingEnabled": false,
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 0.5,
 "verticalAlign": "top",
 "minWidth": 20,
 "layout": "absolute",
 "definitions": [{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_5830627A_4357_CAE8_41C8_ED508AC32E87"
 ],
 "thumbnailUrl": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_t.jpg",
 "id": "panorama_58215B75_4354_FAF8_41A5_5C915E0368C1",
 "label": "012_area3",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 174.51,
   "yaw": 3.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 34.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6D5E64FF_4CCD_4FE8_41BC_319EC2AD0E7C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -5.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AD76719_4CCD_4A28_41D0_B500D9F89928",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -68.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6ACC774A_4CCD_4A28_4197_72DF93118ADC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_4CB6F9F5_434D_39F8_418B_27F6B8CDB31A",
  "this.overlay_4CB31430_434D_4E78_41A9_4EBD93FE146D"
 ],
 "thumbnailUrl": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_t.jpg",
 "id": "panorama_48EA51B8_433F_4668_417A_E7BED0F336B7",
 "label": "002_varanda",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -40.86,
   "yaw": 120.16,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_5A67472A_4353_4A68_41D0_B9CCEC625F5B"
 ],
 "thumbnailUrl": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_t.jpg",
 "id": "panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C",
 "label": "010_VarandaCasal",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 82.51,
   "yaw": -86.37,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 139.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B8868B5_4CCD_4678_41AF_0F68CD581C35",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_516B9E09_4354_DA28_419C_41F7F2C785E7",
  "this.overlay_517B45D9_4353_4E2B_41C8_3F9C764640F2",
  "this.overlay_51CAC99F_434C_C628_41A6_FD89861DC52A"
 ],
 "thumbnailUrl": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_t.jpg",
 "id": "panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7",
 "label": "005_corredor2",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -8.08,
   "yaw": 162.95,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A"
  },
  {
   "backwardYaw": -176.42,
   "yaw": -9.72,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486"
  },
  {
   "backwardYaw": 108.31,
   "yaw": -106.26,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 150,
 "overlays": [
  "this.overlay_578B7343_4374_CA1F_41B6_F0EBA8FD4EEA",
  "this.overlay_5648E3B0_4377_CA78_41B2_464169DE780C",
  "this.overlay_560DA43A_4374_CE68_41BA_B48DC310C93B",
  "this.overlay_56CF34AA_4375_CE68_41C8_76579FE77ED3",
  "this.overlay_56995F3D_4373_5A68_41C3_F8BB94A8DF83",
  "this.overlay_5548EB60_434C_DA18_41C3_4F82DAC25A84"
 ],
 "thumbnailUrl": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_t.jpg",
 "id": "panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B",
 "label": "005_corredor4",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -46.61,
   "yaw": 81.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94"
  },
  {
   "backwardYaw": 147.17,
   "yaw": -81.23,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A"
  },
  {
   "backwardYaw": -115.61,
   "yaw": -145.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41"
  },
  {
   "backwardYaw": 88.68,
   "yaw": 29.76,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5"
  },
  {
   "backwardYaw": -112.03,
   "yaw": -16.06,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9"
  },
  {
   "backwardYaw": -99.87,
   "yaw": -128.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30"
  }
 ],
 "hfov": 300,
 "pitch": 0,
 "partial": true
},
{
 "buttonZoomIn": "this.IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "mouseControlMode": "drag_acceleration",
 "viewerArea": "this.MainViewer",
 "buttonMoveLeft": "this.IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82",
 "id": "MainViewerPanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "buttonZoomOut": "this.IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35",
 "buttonMoveDown": "this.IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5",
 "buttonPlayLeft": "this.IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674",
 "buttonMoveUp": "this.IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B",
 "buttonPause": "this.IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED",
 "gyroscopeVerticalDraggingEnabled": true,
 "buttonMoveRight": "this.IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E",
 "buttonRestart": "this.IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65",
 "buttonPlayRight": "this.IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60"
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_4D0D8486_433D_CE18_41D0_9209D766F7A5",
  "this.overlay_4DE4EDE3_4333_3E18_41D0_32D42451399A",
  "this.overlay_4C36FAA5_4335_3A1B_41B9_BB719B190FD6",
  "this.overlay_4C4DDF25_4334_DA1B_41BD_8C7A3C78D01A",
  "this.overlay_537C86B2_4353_4A79_41D0_7B4BACC26D8A"
 ],
 "thumbnailUrl": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_t.jpg",
 "id": "panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA",
 "label": "001_sala",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.47,
   "yaw": 88.5,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_488510AF_433F_4668_41CE_0FD4A657462D"
  },
  {
   "backwardYaw": 4.6,
   "yaw": 175.44,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A"
  },
  {
   "backwardYaw": 120.16,
   "yaw": -40.86,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_48EA51B8_433F_4668_417A_E7BED0F336B7"
  },
  {
   "backwardYaw": -116.96,
   "yaw": 40.63,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685"
  },
  {
   "backwardYaw": 69.07,
   "yaw": -90,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 171.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AB9B6C6_4CCD_4A18_41AA_03A973F16249",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6ABDB6D7_4CCD_4A38_41C7_3F86B3A37191",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 91.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6D46B515_4CCD_4E38_41B8_762B9C90939E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 150,
 "overlays": [
  "this.overlay_5BA0F1AB_4353_4668_419A_E044E4786621"
 ],
 "thumbnailUrl": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_t.jpg",
 "id": "panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5",
 "label": "008_banheiroSocial",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 29.76,
   "yaw": 88.68,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B"
  }
 ],
 "hfov": 300,
 "pitch": 0,
 "partial": true
},
{
 "initialPosition": {
  "yaw": -98.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AB496B7_4CCD_4A78_41C5_1EAD8A94CCE1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_488510AF_433F_4668_41CE_0FD4A657462D_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -92.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AAFE709_4CCD_4A28_41A3_FADE2CC87D4B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_5A92AD3F_435C_FE67_41A2_E95650EB8E93",
  "this.overlay_593F8B1D_435D_DA2B_41CC_A3718EE776B8"
 ],
 "thumbnailUrl": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_t.jpg",
 "id": "panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9",
 "label": "012_area1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -174.43,
   "yaw": 12.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51FD1545_4375_4E18_41CA_DBA1292527C5"
  },
  {
   "backwardYaw": 6.02,
   "yaw": -170.41,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_505BF94C_4374_C629_41CC_D03294F98925",
  "this.overlay_506A1A4A_4377_3A28_41B0_BBAE84C3F274",
  "this.overlay_50B4297C_4373_C6E8_41C5_0DDA2B758E70",
  "this.overlay_57C3C4B9_4374_CE68_41CD_D2CD02673AE8"
 ],
 "thumbnailUrl": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_t.jpg",
 "id": "panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A",
 "label": "005_corredor3",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 87.82,
   "yaw": -91.94,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5"
  },
  {
   "backwardYaw": -81.23,
   "yaw": 147.17,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30"
  },
  {
   "backwardYaw": 162.95,
   "yaw": -8.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 67.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B1977AE_4CCD_4A68_41A5_2297B13DC044",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 3.47,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B683883_4CCD_4618_4196_3D7FE321C423",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -167.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BE66948_4CCD_4628_41D1_10757676030D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 170.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B9EF8A4_4CCD_4618_41C9_6AB7FF269E15",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_6A1BFE9B_4CDC_FA2F_41D1_DE4A9A4FA7FF",
  "this.overlay_6A724886_4CDD_4619_41D0_62E0AFCED9F4"
 ],
 "thumbnailUrl": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_t.jpg",
 "id": "panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF",
 "label": "010_banheirosuite",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_4C24198B_4334_C628_41C8_B0E5560B2CD5",
  "this.overlay_4CDB837F_434C_CAE8_41C7_EB27BD89F621",
  "this.overlay_4CC431B2_434D_4678_41CD_77B31C87463E",
  "this.overlay_4CF75E52_434F_7A38_4183_1896D4E36338"
 ],
 "thumbnailUrl": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_t.jpg",
 "id": "panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC",
 "label": "003_varanda2",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_488510AF_433F_4668_41CE_0FD4A657462D"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A"
  },
  {
   "backwardYaw": -90,
   "yaw": 69.07,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -4.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B4A3853_4CCD_4638_41C4_8B9954761D54",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -59.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B3667F1_4CCD_49F8_41C4_B74119009622",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 80.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B1FE7BF_4CCD_4A68_41B6_0994EB308CC4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_53FDD558_4355_4E29_4191_0A7B5D3FC4E2",
  "this.overlay_5E7E115E_43D3_4628_41CA_BB08EB4B9C63"
 ],
 "thumbnailUrl": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_t.jpg",
 "id": "panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685",
 "label": "001_entrada",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 40.63,
   "yaw": -116.96,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_48EA51B8_433F_4668_417A_E7BED0F336B7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 163.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6ADD872A_4CCD_4A68_4197_CE3A78E1F797",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -150.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6D5444E5_4CCD_4E18_41C3_9F34F99E14C8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 64.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AEAD78D_4CCD_4A28_41D0_2DC9A7FC055A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 150,
 "overlays": [
  "this.overlay_5B2DCA61_4355_3A18_41C0_FC0824338A39"
 ],
 "thumbnailUrl": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_t.jpg",
 "id": "panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9",
 "label": "007_quartoMaria",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -16.06,
   "yaw": -112.03,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B"
  }
 ],
 "hfov": 300,
 "pitch": 0,
 "partial": true
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_52CD0E8D_4353_5A2B_41BE_71B55184AB7C",
  "this.overlay_52D6151E_4353_4E28_41C3_434E093FB5F8",
  "this.overlay_529CF7DD_4354_CA28_41B6_EA1355A8703A"
 ],
 "thumbnailUrl": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_t.jpg",
 "id": "panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486",
 "label": "005_corredor1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -176.53,
   "yaw": -5.22,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_488510AF_433F_4668_41CE_0FD4A657462D"
  },
  {
   "backwardYaw": 139.3,
   "yaw": 126.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3"
  },
  {
   "backwardYaw": -9.72,
   "yaw": -176.42,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 30,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BC79916_4CCD_4638_41A5_6EF9D6DA38C5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 150,
 "overlays": [
  "this.overlay_54202365_434D_4A18_41CF_ECFBE69E2668"
 ],
 "thumbnailUrl": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_t.jpg",
 "id": "panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94",
 "label": "009_quartobaby",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 81.6,
   "yaw": -46.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B"
  }
 ],
 "hfov": 300,
 "pitch": 0,
 "partial": true
},
{
 "initialPosition": {
  "yaw": -139.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6D725531_4CCD_4E78_41B4_168057879C4B",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 150,
 "thumbnailUrl": "media/panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_t.jpg",
 "id": "panorama_5775FBEB_437C_D9E8_4199_47C23B42293A",
 "label": "R0010088",
 "hfovMax": 130,
 "hfov": 300,
 "pitch": 0,
 "partial": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 98.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6A8CF695_4CCD_4A38_41C8_29DA2BA16788",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -32.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AE2C77D_4CCD_4AE8_41CF_79597DB55CCF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_5FDF67EB_43D7_C9E8_41C4_3E8221ACC27D",
  "this.overlay_5F43163B_43D5_4A6F_41A3_533376514F7E"
 ],
 "thumbnailUrl": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_t.jpg",
 "id": "panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41",
 "label": "010_banheirosuite",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -145.11,
   "yaw": -115.61,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B"
  },
  {
   "backwardYaw": -88.8,
   "yaw": -150,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 63.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B3E6801_4CCD_4618_419D_D46A1351C13C",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -71.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AA466E8_4CCD_4BE8_41C1_4A9CA21551F5",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 150,
 "overlays": [
  "this.overlay_55358FC4_434D_3A18_41B9_4123F3CA5F49",
  "this.overlay_55BA30A7_434F_C618_41A0_184602AC1F53"
 ],
 "thumbnailUrl": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_t.jpg",
 "id": "panorama_57A54569_4373_CEE8_41C0_F99F38478AF8",
 "label": "006_varandaEscritorio",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52422C6B_435F_DEE8_41A4_94B529A771D3"
  },
  {
   "backwardYaw": -78.64,
   "yaw": 111.78,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5"
  }
 ],
 "hfov": 300,
 "pitch": 0,
 "partial": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 88.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AC5E73A_4CCD_4A68_41C1_78E98FFA18C3",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -173.98,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B546833_4CCD_4678_41CC_D9F3A1B0A348",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_5A3CB0D7_435D_C638_41CC_752308DF24D2",
  "this.overlay_5ACF0A7F_435C_DAE8_41C7_BD50A6F91465"
 ],
 "thumbnailUrl": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_t.jpg",
 "id": "panorama_51FD1545_4375_4E18_41CA_DBA1292527C5",
 "label": "011_cozinha2",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -93.08,
   "yaw": 87.59,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3"
  },
  {
   "backwardYaw": 12.42,
   "yaw": -174.43,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -176.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6D21A4B1_4CCD_4E78_41B0_07A3C2300C12",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 99.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BBCB8D5_4CCD_4638_41BB_86FFF501FDA9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 93.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BDCD906_4CCD_4618_41D1_2F58DFA41B39",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/f/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/f/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/f/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/u/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/u/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/u/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/r/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/r/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/r/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/b/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/b/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/b/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/d/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/d/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/d/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/l/0/{row}_{column}.jpg",
      "colCount": 3,
      "class": "TiledImageResourceLevel",
      "width": 1536,
      "tags": "ondemand",
      "rowCount": 3,
      "height": 1536
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/l/1/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_0/l/2/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 150,
 "overlays": [
  "this.overlay_54022402_4353_CE18_41C9_B80B4E65E72A",
  "this.overlay_5B6E5F47_4354_DA18_4190_FE376727D1E6",
  "this.overlay_5DF9548B_43CD_CE28_41C7_9F8B35F7E36D"
 ],
 "thumbnailUrl": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_t.jpg",
 "id": "panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30",
 "label": "010_quartoCasal",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -86.37,
   "yaw": 82.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C"
  },
  {
   "backwardYaw": -150,
   "yaw": -88.8,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41"
  },
  {
   "backwardYaw": -128.42,
   "yaw": -99.87,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B"
  }
 ],
 "hfov": 300,
 "pitch": 0,
 "partial": true
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 73.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B73B863_4CCD_4618_41CE_187E3A94EA45",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -97.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AF4675B_4CCD_4A28_41D0_DFB83319075F",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -78.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B5F1843_4CCD_4618_41B5_685FF9768393",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "items": [
  {
   "media": "this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_camera"
  },
  {
   "media": "this.panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_camera"
  },
  {
   "media": "this.panorama_48EA51B8_433F_4668_417A_E7BED0F336B7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_camera"
  },
  {
   "media": "this.panorama_488510AF_433F_4668_41CE_0FD4A657462D",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_488510AF_433F_4668_41CE_0FD4A657462D_camera"
  },
  {
   "media": "this.panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_camera"
  },
  {
   "media": "this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_camera"
  },
  {
   "media": "this.panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_camera"
  },
  {
   "media": "this.panorama_52422C6B_435F_DEE8_41A4_94B529A771D3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_camera"
  },
  {
   "media": "this.panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_camera"
  },
  {
   "media": "this.panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_camera"
  },
  {
   "media": "this.panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_camera"
  },
  {
   "media": "this.panorama_51FD1545_4375_4E18_41CA_DBA1292527C5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_camera"
  },
  {
   "media": "this.panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_camera"
  },
  {
   "media": "this.panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_camera"
  },
  {
   "media": "this.panorama_5775FBEB_437C_D9E8_4199_47C23B42293A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5775FBEB_437C_D9E8_4199_47C23B42293A_camera"
  },
  {
   "media": "this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_camera"
  },
  {
   "media": "this.panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_camera"
  },
  {
   "media": "this.panorama_57A54569_4373_CEE8_41C0_F99F38478AF8",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_camera"
  },
  {
   "media": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_camera"
  },
  {
   "media": "this.panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_camera"
  },
  {
   "media": "this.panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_camera"
  },
  {
   "media": "this.panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_camera"
  },
  {
   "media": "this.panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_camera"
  },
  {
   "media": "this.panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_camera"
  },
  {
   "media": "this.panorama_58215B75_4354_FAF8_41A5_5C915E0368C1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_camera"
  },
  {
   "media": "this.panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF",
   "end": "this.trigger('tourEnded')",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_camera"
  }
 ],
 "id": "mainPlayList",
 "class": "PlayList"
},
{
 "initialPosition": {
  "yaw": -91.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B11079E_4CCD_4A28_41B1_0766FDA9E581",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_57378077_437C_C6F8_4195_368AF639836E",
  "this.overlay_66F4420F_435C_CA27_41BF_75884641383B"
 ],
 "thumbnailUrl": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_t.jpg",
 "id": "panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5",
 "label": "006_escritorio",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -91.94,
   "yaw": 87.82,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A"
  },
  {
   "backwardYaw": 111.78,
   "yaw": -78.64,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_57A54569_4373_CEE8_41C0_F99F38478AF8"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 86.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B0787D0_4CCD_4A38_41C6_9D7CA251CDBC",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_59C9E314_4354_CA38_41B5_E377D649C9E6",
  "this.overlay_58661485_4355_CE18_41C5_AAD656569912"
 ],
 "thumbnailUrl": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_t.jpg",
 "id": "panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850",
 "label": "012_area2",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 3.94,
   "yaw": 174.51,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_58215B75_4354_FAF8_41A5_5C915E0368C1"
  },
  {
   "backwardYaw": -170.41,
   "yaw": 6.02,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -91.5,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BA848E6_4CCD_4618_41A0_87B8F67B421E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -40.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B93E894_4CCD_4638_41C6_77E9103A5BBF",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_52AE889B_4354_C628_41C6_7D568E0B5ECB"
 ],
 "thumbnailUrl": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_t.jpg",
 "id": "panorama_52422C6B_435F_DEE8_41A4_94B529A771D3",
 "label": "005_VarandaSala",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": -80.69,
   "yaw": 101.11,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": -110.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B243812_4CCD_4638_41D0_694EE7F12FD8",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -17.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AB126A5_4CCD_4A18_4173_0A12F11E803E",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 51.58,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BF12927_4CCD_4618_41B6_E5E7A064561D",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -53.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AAAC6F8_4CCD_4BE8_41C4_FB33A0491311",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 133.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6AFC776C_4CCD_4AE8_41AA_BC92D957F0A0",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "targetYaw": 5.75,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "linear",
    "targetYaw": 99.25,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   },
   {
    "easing": "cubic_out",
    "targetYaw": 105,
    "class": "TargetPanoramaCameraMovement",
    "path": "shortest",
    "yawSpeed": 4.59
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -175.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B0FC7E0_4CCD_4A18_41C2_05D07AF077CA",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 174.78,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BD138F6_4CCD_47F8_41C7_B4D993B7F0E4",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 9.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6D2BC4CA_4CCD_4E28_41CE_523B96309C7A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 101.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B7F4873_4CCD_46F8_41A3_8167551497A9",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 90,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BB328C5_4CCD_4618_41BA_D4281968ACC6",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_53B64A5D_435D_3A28_41CB_57A7319CE83F",
  "this.overlay_5241C02F_435C_C667_41B8_B3B20FC41F03",
  "this.overlay_527D5FE7_435F_7A18_41B8_688C9BA7B2A9"
 ],
 "thumbnailUrl": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_t.jpg",
 "id": "panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A",
 "label": "005_salaTV",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 101.11,
   "yaw": -80.69,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_52422C6B_435F_DEE8_41A4_94B529A771D3"
  },
  {
   "backwardYaw": 175.44,
   "yaw": 4.6,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA"
  },
  {
   "backwardYaw": -106.26,
   "yaw": 108.31,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_51A3AB88_434D_3A28_41B1_9C41415EE4FD",
  "this.overlay_519D9B09_4373_5A28_4168_D6CA8DD35B1A"
 ],
 "thumbnailUrl": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_t.jpg",
 "id": "panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3",
 "label": "011_cozinha1",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "backwardYaw": 126.31,
   "yaw": 139.3,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486"
  },
  {
   "backwardYaw": 87.59,
   "yaw": -93.08,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_51FD1545_4375_4E18_41CA_DBA1292527C5"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "initialPosition": {
  "yaw": 5.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6B2CB822_4CCD_4618_41C6_3E5063ECA29A",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 86.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6BFCD937_4CCD_4678_41CC_3782A8AD50F1",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": -92.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "camera_6D7CB54B_4CCD_4E28_419B_7FC75C5A4AEE",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "class": "PanoramaCamera",
 "id": "panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_camera",
 "initialSequence": {
  "class": "PanoramaCameraSequence",
  "movements": [
   {
    "easing": "cubic_in",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "linear",
    "yawDelta": 323,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   },
   {
    "easing": "cubic_out",
    "yawDelta": 18.5,
    "class": "DistancePanoramaCameraMovement",
    "yawSpeed": 7.96
   }
  ],
  "restartMovementOnUserInteraction": false
 },
 "automaticZoomSpeed": 10
},
{
 "frames": [
  {
   "front": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/f/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/f/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "top": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/u/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/u/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "right": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/r/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/r/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "back": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/b/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/b/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "thumbnailUrl": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_t.jpg",
   "bottom": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/d/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/d/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "left": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/l/0/{row}_{column}.jpg",
      "colCount": 2,
      "class": "TiledImageResourceLevel",
      "width": 1024,
      "tags": "ondemand",
      "rowCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_0/l/1/{row}_{column}.jpg",
      "colCount": 1,
      "class": "TiledImageResourceLevel",
      "width": 512,
      "tags": [
       "ondemand",
       "preload"
      ],
      "rowCount": 1,
      "height": 512
     }
    ],
    "class": "ImageResource"
   },
   "class": "CubicPanoramaFrame"
  }
 ],
 "class": "Panorama",
 "vfov": 180,
 "overlays": [
  "this.overlay_53212CD2_4355_5E38_41BF_8F73624CB324",
  "this.overlay_532E6ECB_4355_5A28_41BF_B25A0BE4FE33",
  "this.overlay_53F07C28_4357_DE68_41C0_3439C9F57E25"
 ],
 "thumbnailUrl": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_t.jpg",
 "id": "panorama_488510AF_433F_4668_41CE_0FD4A657462D",
 "label": "004_sala2",
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685"
  },
  {
   "backwardYaw": 88.5,
   "yaw": -93.47,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA"
  },
  {
   "backwardYaw": -5.22,
   "yaw": -176.53,
   "distance": 1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486"
  }
 ],
 "hfov": 360,
 "pitch": 0,
 "partial": false
},
{
 "progressBarBorderSize": 0,
 "id": "MainViewer",
 "left": 0,
 "width": "100%",
 "playbackBarProgressBorderRadius": 0,
 "toolTipShadowOpacity": 1,
 "toolTipShadowHorizontalLength": 0,
 "playbackBarBorderRadius": 4,
 "toolTipShadowVerticalLength": 0,
 "progressBarBorderRadius": 4,
 "toolTipFontStyle": "normal",
 "paddingLeft": 0,
 "playbackBarProgressBorderColor": "#000000",
 "minHeight": 50,
 "toolTipFontFamily": "Arial",
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "playbackBarHeadBorderRadius": 0,
 "progressLeft": 10,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "playbackBarBorderSize": 2,
 "transitionDuration": 500,
 "minWidth": 100,
 "playbackBarBackgroundOpacity": 1,
 "height": "100%",
 "toolTipFontColor": "#606060",
 "playbackBarHeadBorderColor": "#000000",
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "borderSize": 0,
 "progressRight": 10,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "toolTipBackgroundColor": "#F6F6F6",
 "vrPointerSelectionTime": 2000,
 "progressBarBackgroundColorDirection": "vertical",
 "class": "ViewerArea",
 "progressHeight": 20,
 "playbackBarHeadShadow": true,
 "progressBottom": 1,
 "shadow": false,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "playbackBarProgressBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "playbackBarOpacity": 1,
 "toolTipPaddingRight": 6,
 "playbackBarHeadShadowOpacity": 0.7,
 "toolTipBorderSize": 1,
 "toolTipPaddingLeft": 6,
 "toolTipPaddingTop": 4,
 "vrPointerColor": "#FFFFFF",
 "toolTipDisplayTime": 600,
 "progressBarOpacity": 1,
 "playbackBarBorderColor": "#AAAAAA",
 "progressBorderSize": 2,
 "transitionMode": "blending",
 "displayTooltipInTouchScreens": true,
 "toolTipBorderRadius": 3,
 "paddingRight": 0,
 "progressBorderRadius": 4,
 "playbackBarHeadShadowHorizontalLength": 0,
 "borderRadius": 0,
 "playbackBarProgressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadHeight": 30,
 "top": 0,
 "playbackBarHeadShadowBlurRadius": 3,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "progressBarBorderColor": "#000000",
 "toolTipBorderColor": "#767676",
 "progressBarBackgroundColorRatios": [
  0,
  1
 ],
 "progressBackgroundColorDirection": "vertical",
 "toolTipShadowSpread": 0,
 "toolTipShadowBlurRadius": 3,
 "playbackBarBottom": 10,
 "toolTipTextShadowColor": "#000000",
 "toolTipOpacity": 1,
 "playbackBarHeadOpacity": 1,
 "progressBarBackgroundColor": [
  "#222222",
  "#444444"
 ],
 "paddingTop": 0,
 "progressBorderColor": "#AAAAAA",
 "toolTipPaddingBottom": 4,
 "paddingBottom": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "toolTipFontSize": 12,
 "toolTipTextShadowBlurRadius": 3,
 "progressBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "toolTipShadowColor": "#333333",
 "playbackBarBackgroundColor": [
  "#EEEEEE",
  "#CCCCCC"
 ],
 "data": {
  "name": "Main Viewer"
 },
 "playbackBarHeight": 20,
 "toolTipFontWeight": "normal",
 "playbackBarBackgroundColorDirection": "vertical",
 "playbackBarHeadWidth": 6,
 "playbackBarProgressBorderSize": 0,
 "playbackBarRight": 0
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_55DC4FA8_5E27_15CF_419E_B6601832ABA2",
 "backgroundOpacity": 0,
 "width": 392.01,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35",
  "this.IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65",
  "this.IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674",
  "this.IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82",
  "this.Container_55DC4FA8_5E27_15CF_41BD_E12B3B6C43C0",
  "this.IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E",
  "this.IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60",
  "this.IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D",
  "this.IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 184.78,
 "minWidth": 392,
 "layout": "horizontal",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container1156"
 },
 "shadow": false
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_4176_27D8664CB29D.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1167"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 3.94,
   "hfov": 15.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850, this.camera_6AD76719_4CCD_4A28_41D0_B500D9F89928); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A452071_4CD5_C6FB_41C9_08D4FD9E4270",
   "pitch": -27.66,
   "yaw": 3.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.7,
   "distance": 100
  }
 ],
 "id": "overlay_5830627A_4357_CAE8_41C8_ED508AC32E87",
 "data": {
  "label": "area2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 120.16,
   "hfov": 5.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.21
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA, this.camera_6B8868B5_4CCD_4678_41AF_0F68CD581C35); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6797EB54_4355_7A38_41CE_A0BFF626395B",
   "pitch": -21.21,
   "yaw": 120.16,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.97,
   "distance": 100
  }
 ],
 "id": "overlay_4CB6F9F5_434D_39F8_418B_27F6B8CDB31A",
 "data": {
  "label": "sala1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -145,
   "hfov": 4.52,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_67978B54_4355_7A38_41CD_501E950134AB",
   "pitch": -19.34,
   "yaw": -145,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.52,
   "distance": 100
  }
 ],
 "id": "overlay_4CB31430_434D_4E78_41A9_4EBD93FE146D",
 "data": {
  "label": "varanda2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.37,
   "hfov": 10.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.13
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30, this.camera_6AF4675B_4CCD_4A28_41D0_DFB83319075F); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A44706F_4CD5_C6E7_41C3_08B40BCB72F6",
   "pitch": -29.13,
   "yaw": -86.37,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.39,
   "distance": 100
  }
 ],
 "id": "overlay_5A67472A_4353_4A68_41D0_B9CCEC625F5B",
 "data": {
  "label": "suite casal"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -9.72,
   "hfov": 9.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.48
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486, this.camera_6ABDB6D7_4CCD_4A38_41C7_3F86B3A37191); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A462063_4CD5_C61F_41C1_631E4049FBE5",
   "pitch": -39.48,
   "yaw": -9.72,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.63,
   "distance": 100
  }
 ],
 "id": "overlay_516B9E09_4354_DA28_419C_41F7F2C785E7",
 "data": {
  "label": "corredor1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 162.95,
   "hfov": 5.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A, this.camera_6AB9B6C6_4CCD_4A18_41AA_03A973F16249); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A460064_4CD5_C619_41CD_3DB335DE3F77",
   "pitch": -16.27,
   "yaw": 162.95,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.33,
   "distance": 100
  }
 ],
 "id": "overlay_517B45D9_4353_4E2B_41C8_3F9C764640F2",
 "data": {
  "label": "corredor3"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -106.26,
   "hfov": 11.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A, this.camera_6AA466E8_4CCD_4BE8_41C1_4A9CA21551F5); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A467064_4CD5_C619_41D0_CA15E7047DA7",
   "pitch": -35.18,
   "yaw": -106.26,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.54,
   "distance": 100
  }
 ],
 "id": "overlay_51CAC99F_434C_C628_41A6_FD89861DC52A",
 "data": {
  "label": "salatv"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -81.23,
   "hfov": 10.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -34.37
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A, this.camera_6AE2C77D_4CCD_4AE8_41CF_79597DB55CCF); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EC0E053_4355_463F_41D1_AE1D58B14D9D",
   "pitch": -34.37,
   "yaw": -81.23,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.27,
   "distance": 100
  }
 ],
 "id": "overlay_578B7343_4374_CA1F_41B6_F0EBA8FD4EEA",
 "data": {
  "label": "corredor3"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -16.06,
   "hfov": 10.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.3
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9, this.camera_6B1977AE_4CCD_4A68_41A5_2297B13DC044); this.mainPlayList.set('selectedIndex', 19)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EC14054_4355_4639_41B6_93C037B56983",
   "pitch": -31.3,
   "yaw": -16.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.31,
   "distance": 100
  }
 ],
 "id": "overlay_5648E3B0_4377_CA78_41B2_464169DE780C",
 "data": {
  "label": "QMaria"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 29.76,
   "hfov": 10.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.41
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5, this.camera_6B11079E_4CCD_4A28_41B1_0766FDA9E581); this.mainPlayList.set('selectedIndex', 20)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EC13054_4355_4639_41D1_55F3E29CEB88",
   "pitch": -36.41,
   "yaw": 29.76,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.37,
   "distance": 100
  }
 ],
 "id": "overlay_560DA43A_4374_CE68_41BA_B48DC310C93B",
 "data": {
  "label": "Banehiro1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 81.6,
   "hfov": 8.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.02
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94, this.camera_6AFC776C_4CCD_4AE8_41AA_BC92D957F0A0); this.mainPlayList.set('selectedIndex', 16)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EC1A055_4355_463B_41CB_ECEE58E398C6",
   "pitch": -24.02,
   "yaw": 81.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.34,
   "distance": 100
  }
 ],
 "id": "overlay_56CF34AA_4375_CE68_41C8_76579FE77ED3",
 "data": {
  "label": "Quartobaby"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -128.42,
   "hfov": 4.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30, this.camera_6B1FE7BF_4CCD_4A68_41B6_0994EB308CC4); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EDE1055_4355_463B_41BC_2133F60E4140",
   "pitch": -19.93,
   "yaw": -128.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.18,
   "distance": 100
  }
 ],
 "id": "overlay_56995F3D_4373_5A68_41C3_F8BB94A8DF83",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_5_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -145.11,
   "hfov": 6.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.66
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41, this.camera_6AEAD78D_4CCD_4A28_41D0_2DC9A7FC055A); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6EDEC056_4355_4639_4195_DFB74B002746",
   "pitch": -27.66,
   "yaw": -145.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.63,
   "distance": 100
  }
 ],
 "id": "overlay_5548EB60_434C_DA18_41C3_4F82DAC25A84",
 "data": {
  "label": "banheiro2"
 }
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41A4_95868C6A0842.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1168"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D5_532104041B82.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1160"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CE_E0BE2C156B35.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1157"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1164"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D3_547F7647C674.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1159"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1162"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "toggle",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1163"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41BD_DE68C880FC1E.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1165"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D1_62725E030F65.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1158"
 },
 "cursor": "hand"
},
{
 "horizontalAlign": "center",
 "id": "IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60",
 "backgroundOpacity": 0,
 "width": 40,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 0,
 "rollOverIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60_rollover.png",
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": 40,
 "minWidth": 0,
 "mode": "push",
 "paddingTop": 0,
 "pressedIconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60_pressed.png",
 "paddingBottom": 0,
 "borderSize": 0,
 "class": "IconButton",
 "iconURL": "skin/IconButton_55DC4FA8_5E27_15CF_41D0_E8AB54929A60.png",
 "transparencyActive": false,
 "shadow": false,
 "data": {
  "name": "Button1166"
 },
 "cursor": "hand"
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -40.86,
   "hfov": 6.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.19
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_48EA51B8_433F_4668_417A_E7BED0F336B7, this.camera_6B3667F1_4CCD_49F8_41C4_B74119009622); this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_646F7479_434C_CEEB_41C6_78A1E27F34D0",
   "pitch": -17.19,
   "yaw": -40.86,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.35,
   "distance": 100
  }
 ],
 "id": "overlay_4D0D8486_433D_CE18_41D0_9209D766F7A5",
 "data": {
  "label": "varanda sala 1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -90,
   "hfov": 11.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC, this.camera_6B243812_4CCD_4638_41D0_694EE7F12FD8); this.mainPlayList.set('selectedIndex', 1)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_646C547A_434C_CEE9_41CE_49FADB7F86B6",
   "pitch": -25.57,
   "yaw": -90,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.26,
   "distance": 100
  }
 ],
 "id": "overlay_4DE4EDE3_4333_3E18_41D0_32D42451399A",
 "data": {
  "label": "varanda sala 2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 88.5,
   "hfov": 3.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.62
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_488510AF_433F_4668_41CE_0FD4A657462D, this.camera_6B0787D0_4CCD_4A38_41C6_9D7CA251CDBC); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_62CC997D_437F_46EB_41C9_2A7C95E3A5A4",
   "pitch": -22.62,
   "yaw": 88.5,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.89,
   "distance": 100
  }
 ],
 "id": "overlay_4C36FAA5_4335_3A1B_41B9_BB719B190FD6",
 "data": {
  "label": "sala2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 40.63,
   "hfov": 4.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.58
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685, this.camera_6B3E6801_4CCD_4618_419D_D46A1351C13C); this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_646D047A_434C_CEE9_41CC_6DE92B9D7875",
   "pitch": -16.58,
   "yaw": 40.63,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.23,
   "distance": 100
  }
 ],
 "id": "overlay_4C4DDF25_4334_DA1B_41BD_8C7A3C78D01A",
 "data": {
  "label": "entrada"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0_HS_4_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 175.44,
   "hfov": 4.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.99
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A, this.camera_6B0FC7E0_4CCD_4A18_41C2_05D07AF077CA); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_62CC197E_437F_46E9_419C_1193043AB96A",
   "pitch": -18.99,
   "yaw": 175.44,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.24,
   "distance": 100
  }
 ],
 "id": "overlay_537C86B2_4353_4A79_41D0_7B4BACC26D8A",
 "data": {
  "label": "salaTV"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 88.68,
   "hfov": 9.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B, this.camera_6D5444E5_4CCD_4E18_41C3_9F34F99E14C8); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A44006E_4CD5_C6E9_41A2_6E4D8636CAED",
   "pitch": -21.34,
   "yaw": 88.68,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.36,
   "distance": 100
  }
 ],
 "id": "overlay_5BA0F1AB_4353_4668_419A_E044E4786621",
 "data": {
  "label": "corredor4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 12.42,
   "hfov": 10.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.51
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51FD1545_4375_4E18_41CA_DBA1292527C5, this.camera_6B2CB822_4CCD_4618_41C6_3E5063ECA29A); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A44506F_4CD5_C6E7_41A9_01F18F4032D2",
   "pitch": -28.51,
   "yaw": 12.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.83,
   "distance": 100
  }
 ],
 "id": "overlay_5A92AD3F_435C_FE67_41A2_E95650EB8E93",
 "data": {
  "label": "cozinha2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -170.41,
   "hfov": 15.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850, this.camera_6B546833_4CCD_4678_41CC_D9F3A1B0A348); this.mainPlayList.set('selectedIndex', 23)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A45B06F_4CD5_C6E7_41B1_96217280FD01",
   "pitch": -38.49,
   "yaw": -170.41,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 15.63,
   "distance": 100
  }
 ],
 "id": "overlay_593F8B1D_435D_DA2B_41CC_A3718EE776B8",
 "data": {
  "label": "area2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -91.94,
   "hfov": 10.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5, this.camera_6D7CB54B_4CCD_4E28_419B_7FC75C5A4AEE); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A47E065_4CD5_C61B_419E_594A6B510A5D",
   "pitch": -22.5,
   "yaw": -91.94,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.77,
   "distance": 100
  }
 ],
 "id": "overlay_505BF94C_4374_C629_41CC_D03294F98925",
 "data": {
  "label": "escritorio"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -8.08,
   "hfov": 14.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.64
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7, this.camera_6AB126A5_4CCD_4A18_4173_0A12F11E803E); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A47C065_4CD5_C61B_41BB_FC8F3C6AF6DE",
   "pitch": -19.64,
   "yaw": -8.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 14.83,
   "distance": 100
  }
 ],
 "id": "overlay_506A1A4A_4377_3A28_41B0_BBAE84C3F274",
 "data": {
  "label": "corredor2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -162.13,
   "hfov": 6.22,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A472066_4CD5_C619_41AC_02CEECA4FF96",
   "pitch": -36.5,
   "yaw": -162.13,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.22,
   "distance": 100
  }
 ],
 "id": "overlay_50B4297C_4373_C6E8_41C5_0DDA2B758E70",
 "data": {
  "label": "Qcasal"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 147.17,
   "hfov": 12.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B, this.camera_6A8CF695_4CCD_4A38_41C8_29DA2BA16788); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A470066_4CD5_C619_41B9_FD7C772D4F1D",
   "pitch": -41.11,
   "yaw": 147.17,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.17,
   "distance": 100
  }
 ],
 "id": "overlay_57C3C4B9_4374_CE68_41CD_D2CD02673AE8",
 "data": {
  "label": "corredor4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -115.64,
   "hfov": 10.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -60.4
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A450071_4CD5_C6FB_41C8_FA63AB3B52CC",
   "pitch": -60.4,
   "yaw": -115.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.15,
   "distance": 100
  }
 ],
 "id": "overlay_6A1BFE9B_4CDC_FA2F_41D1_DE4A9A4FA7FF",
 "data": {
  "label": "corredor 4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -153.06,
   "hfov": 7.62,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -53.57
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A457072_4CD5_C6F9_41AA_645C84D81C82",
   "pitch": -53.57,
   "yaw": -153.06,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.62,
   "distance": 100
  }
 ],
 "id": "overlay_6A724886_4CDD_4619_41D0_62E0AFCED9F4",
 "data": {
  "label": "1qcasal"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0_HS_0_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 69.07,
   "hfov": 8.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.23
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA, this.camera_6BB328C5_4CCD_4618_41BA_D4281968ACC6); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_67960B53_4355_7A38_419B_B905AC5FD0D0",
   "pitch": -25.23,
   "yaw": 69.07,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.66,
   "distance": 100
  }
 ],
 "id": "overlay_4C24198B_4334_C628_41C8_B0E5560B2CD5",
 "data": {
  "label": "sala1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 46.73,
   "hfov": 5.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_613962D6_4353_4A39_41CC_657BAFB0688A",
   "pitch": -12.34,
   "yaw": 46.73,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.04,
   "distance": 100
  }
 ],
 "id": "overlay_4CDB837F_434C_CAE8_41C7_EB27BD89F621",
 "data": {
  "label": "entrada"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 83.2,
   "hfov": 4.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.59
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_613922D6_4353_4A39_41C7_16A84880E654",
   "pitch": -13.59,
   "yaw": 83.2,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.86,
   "distance": 100
  }
 ],
 "id": "overlay_4CC431B2_434D_4678_41CD_77B31C87463E",
 "data": {
  "label": "sala2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_1_HS_3_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 120.27,
   "hfov": 4.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.32
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_613982D6_4353_4A39_41AC_EEC6C5C5EB1E",
   "pitch": -14.32,
   "yaw": 120.27,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.35,
   "distance": 100
  }
 ],
 "id": "overlay_4CF75E52_434F_7A38_4183_1896D4E36338",
 "data": {
  "label": "sala tv"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -116.96,
   "hfov": 5.33,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.77
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA, this.camera_6D725531_4CCD_4E78_41B4_168057879C4B); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A490061_4CD5_C61B_41D0_0E3F2A7132CC",
   "pitch": -15.77,
   "yaw": -116.96,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.33,
   "distance": 100
  }
 ],
 "id": "overlay_53FDD558_4355_4E29_4191_0A7B5D3FC4E2",
 "data": {
  "label": "sala1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -86.14,
   "hfov": 4.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.93
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A496061_4CD5_C61B_41CB_34F37F695F99",
   "pitch": -11.93,
   "yaw": -86.14,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.16,
   "distance": 100
  }
 ],
 "id": "overlay_5E7E115E_43D3_4628_41CA_BB08EB4B9C63",
 "data": {
  "label": "varandasala"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -112.03,
   "hfov": 11.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.69
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B, this.camera_6ADD872A_4CCD_4A68_4197_CE3A78E1F797); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A44D06D_4CD5_C6EA_41CE_2B53E19A94AA",
   "pitch": -17.69,
   "yaw": -112.03,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.45,
   "distance": 100
  }
 ],
 "id": "overlay_5B2DCA61_4355_3A18_41C0_FC0824338A39",
 "data": {
  "label": "corredor4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -5.22,
   "hfov": 11.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_488510AF_433F_4668_41CE_0FD4A657462D, this.camera_6B683883_4CCD_4618_4196_3D7FE321C423); this.mainPlayList.set('selectedIndex', 3)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C58B95_434D_7A38_41CA_651B437D2533",
   "pitch": -45,
   "yaw": -5.22,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.14,
   "distance": 100
  }
 ],
 "id": "overlay_52CD0E8D_4353_5A2B_41BE_71B55184AB7C",
 "data": {
  "label": "sala 2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 126.31,
   "hfov": 11.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.27
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3, this.camera_6B93E894_4CCD_4638_41C6_77E9103A5BBF); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C56B95_434D_7A38_41B0_1B799E102C46",
   "pitch": -30.27,
   "yaw": 126.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.84,
   "distance": 100
  }
 ],
 "id": "overlay_52D6151E_4353_4E28_41C3_434E093FB5F8",
 "data": {
  "label": "cozinha1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.42,
   "hfov": 9.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.14
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7, this.camera_6B9EF8A4_4CCD_4618_41C9_6AB7FF269E15); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_66C6CB96_434D_7A38_41C4_E67BAF22CB83",
   "pitch": -35.14,
   "yaw": -176.42,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.7,
   "distance": 100
  }
 ],
 "id": "overlay_529CF7DD_4354_CA28_41B6_EA1355A8703A",
 "data": {
  "label": "salatv"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -46.61,
   "hfov": 4.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.61
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B, this.camera_6AB496B7_4CCD_4A78_41C5_1EAD8A94CCE1); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A45B06A_4CD5_C6E9_41B8_9AE1D8AB789B",
   "pitch": -23.61,
   "yaw": -46.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.64,
   "distance": 100
  }
 ],
 "id": "overlay_54202365_434D_4A18_41CF_ECFBE69E2668",
 "data": {
  "label": "corredor4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -150,
   "hfov": 7.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -52.73
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30, this.camera_6D46B515_4CCD_4E38_41B8_762B9C90939E); this.mainPlayList.set('selectedIndex', 15)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A44C068_4CD5_C6E9_41B8_D023DC002C08",
   "pitch": -52.73,
   "yaw": -150,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.55,
   "distance": 100
  }
 ],
 "id": "overlay_5FDF67EB_43D7_C9E8_41C4_3E8221ACC27D",
 "data": {
  "label": "quarto"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -115.61,
   "hfov": 10.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -57.43
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B, this.camera_6D5E64FF_4CCD_4FE8_41BC_319EC2AD0E7C); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A442069_4CD5_C6EB_4192_F5EEEE06C23D",
   "pitch": -57.43,
   "yaw": -115.61,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.19,
   "distance": 100
  }
 ],
 "id": "overlay_5F43163B_43D5_4A6F_41A3_533376514F7E",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 111.78,
   "hfov": 11.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.18
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5, this.camera_6B7F4873_4CCD_46F8_41A3_8167551497A9); this.mainPlayList.set('selectedIndex', 12)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A45E06B_4CD5_C6EF_4192_4DE928954C2B",
   "pitch": -35.18,
   "yaw": 111.78,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.54,
   "distance": 100
  }
 ],
 "id": "overlay_55358FC4_434D_3A18_41B9_4123F3CA5F49",
 "data": {
  "label": "escritorio"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 12.58,
   "hfov": 9.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.36
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A47706B_4CD5_C6EF_41C8_57ACC6B4C35F",
   "pitch": -25.36,
   "yaw": 12.58,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 9.43,
   "distance": 100
  }
 ],
 "id": "overlay_55BA30A7_434F_C618_41A0_184602AC1F53",
 "data": {
  "label": "varandaTV"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.59,
   "hfov": 13.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.49
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3, this.camera_6BFCD937_4CCD_4678_41CC_3782A8AD50F1); this.mainPlayList.set('selectedIndex', 9)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A477067_4CD5_C6E7_41CF_60B3CC2C558B",
   "pitch": -28.49,
   "yaw": 87.59,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.84,
   "distance": 100
  }
 ],
 "id": "overlay_5A3CB0D7_435D_C638_41CC_752308DF24D2",
 "data": {
  "label": "cozinha1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -174.43,
   "hfov": 10.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.11
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9, this.camera_6BE66948_4CCD_4628_41D1_10757676030D); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A475067_4CD5_C6E7_41C0_B2728F9D41D0",
   "pitch": -30.11,
   "yaw": -174.43,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.97,
   "distance": 100
  }
 ],
 "id": "overlay_5ACF0A7F_435C_DAE8_41C7_BD50A6F91465",
 "data": {
  "label": "area1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 82.51,
   "hfov": 5.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.5
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C, this.camera_6BDCD906_4CCD_4618_41D1_2F58DFA41B39); this.mainPlayList.set('selectedIndex', 21)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A440069_4CD5_C6EB_41D0_BB752754A555",
   "pitch": -22.5,
   "yaw": 82.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.25,
   "distance": 100
  }
 ],
 "id": "overlay_54022402_4353_CE18_41C9_B80B4E65E72A",
 "data": {
  "label": "varanda casal"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -88.8,
   "hfov": 8.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.52
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41, this.camera_6BC79916_4CCD_4638_41A5_6EF9D6DA38C5); this.mainPlayList.set('selectedIndex', 13)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A447069_4CD5_C6EB_41A1_97BAF44A36F1",
   "pitch": -19.52,
   "yaw": -88.8,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 8.05,
   "distance": 100
  }
 ],
 "id": "overlay_5B6E5F47_4354_DA18_4190_FE376727D1E6",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_1_HS_3_0_0_map.gif",
      "width": 61,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -99.87,
   "hfov": 3.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.28
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B, this.camera_6BF12927_4CCD_4618_41B6_E5E7A064561D); this.mainPlayList.set('selectedIndex', 18)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A44506A_4CD5_C6E9_41AB_B0F548A4FA96",
   "pitch": -13.28,
   "yaw": -99.87,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.2,
   "distance": 100
  }
 ],
 "id": "overlay_5DF9548B_43CD_CE28_41C7_9F8B35F7E36D",
 "data": {
  "label": "corredor4"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -78.64,
   "hfov": 7.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_57A54569_4373_CEE8_41C0_F99F38478AF8, this.camera_6ACC774A_4CCD_4A28_4197_72DF93118ADC); this.mainPlayList.set('selectedIndex', 17)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A44B067_4CD5_C6E7_41C1_3FF429BD3356",
   "pitch": -26.39,
   "yaw": -78.64,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.64,
   "distance": 100
  }
 ],
 "id": "overlay_57378077_437C_C6F8_4195_368AF639836E",
 "data": {
  "label": "varanda escritorio"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 87.82,
   "hfov": 7.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.46
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A, this.camera_6AC5E73A_4CCD_4A68_41C1_78E98FFA18C3); this.mainPlayList.set('selectedIndex', 10)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A44E068_4CD5_C6E9_4191_6377F72C8DFE",
   "pitch": -21.46,
   "yaw": 87.82,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 7.37,
   "distance": 100
  }
 ],
 "id": "overlay_66F4420F_435C_CA27_41BF_75884641383B",
 "data": {
  "label": "Circle 01b"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.02,
   "hfov": 10.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.26
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9, this.camera_6D2BC4CA_4CCD_4E28_41CE_523B96309C7A); this.mainPlayList.set('selectedIndex', 22)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A459070_4CD5_C6F9_41C2_6982F246B9D2",
   "pitch": -26.26,
   "yaw": 6.02,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.26,
   "distance": 100
  }
 ],
 "id": "overlay_59C9E314_4354_CA38_41B5_E377D649C9E6",
 "data": {
  "label": "area1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 174.51,
   "hfov": 13.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.34
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_58215B75_4354_FAF8_41A5_5C915E0368C1, this.camera_6D21A4B1_4CCD_4E78_41B0_07A3C2300C12); this.mainPlayList.set('selectedIndex', 24)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A45C070_4CD5_C6F9_419B_15534963CBF8",
   "pitch": -30.34,
   "yaw": 174.51,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 13.06,
   "distance": 100
  }
 ],
 "id": "overlay_58661485_4355_CE18_41C5_AAD656569912",
 "data": {
  "label": "area3"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 101.11,
   "hfov": 12.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.38
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A, this.camera_6BBCB8D5_4CCD_4638_41BB_86FFF501FDA9); this.mainPlayList.set('selectedIndex', 5)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A46C063_4CD5_C61F_41A8_F3D3C0CA91CA",
   "pitch": -27.38,
   "yaw": 101.11,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 12.48,
   "distance": 100
  }
 ],
 "id": "overlay_52AE889B_4354_C628_41C6_7D568E0B5ECB",
 "data": {
  "label": "sala tv"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 4.6,
   "hfov": 10.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.39
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA, this.camera_6B4A3853_4CCD_4638_41C4_8B9954761D54); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_64E3F635_4354_CA7B_41C7_3A3875932141",
   "pitch": -17.39,
   "yaw": 4.6,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 10.35,
   "distance": 100
  }
 ],
 "id": "overlay_53B64A5D_435D_3A28_41CB_57A7319CE83F",
 "data": {
  "label": "sala 1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -80.69,
   "hfov": 11.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.05
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_52422C6B_435F_DEE8_41A4_94B529A771D3, this.camera_6B5F1843_4CCD_4618_41B5_685FF9768393); this.mainPlayList.set('selectedIndex', 7)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_64E23636_4354_CA79_41AD_A316A7A5DC92",
   "pitch": -29.05,
   "yaw": -80.69,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.98,
   "distance": 100
  }
 ],
 "id": "overlay_5241C02F_435C_C667_41B8_B3B20FC41F03",
 "data": {
  "label": "varanda tv"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 108.31,
   "hfov": 11.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.55
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7, this.camera_6B73B863_4CCD_4618_41CE_187E3A94EA45); this.mainPlayList.set('selectedIndex', 8)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_64E29636_4354_CA79_41CA_D5D70DE38BAE",
   "pitch": -24.55,
   "yaw": 108.31,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 11.72,
   "distance": 100
  }
 ],
 "id": "overlay_527D5FE7_435F_7A18_41B8_688C9BA7B2A9",
 "data": {
  "label": "corredor"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 139.3,
   "hfov": 6.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486, this.camera_6AAAC6F8_4CCD_4BE8_41C4_FB33A0491311); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A465064_4CD5_C619_41C8_DC68417BFD74",
   "pitch": -25.07,
   "yaw": 139.3,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 6.13,
   "distance": 100
  }
 ],
 "id": "overlay_51A3AB88_434D_3A28_41B1_9C41415EE4FD",
 "data": {
  "label": "corredor1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.08,
   "hfov": 4.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.94
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_51FD1545_4375_4E18_41CA_DBA1292527C5, this.camera_6AAFE709_4CCD_4A28_41A3_FADE2CC87D4B); this.mainPlayList.set('selectedIndex', 11)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A47B065_4CD5_C61B_4172_BF7CE6C26ACF",
   "pitch": -33.94,
   "yaw": -93.08,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.21,
   "distance": 100
  }
 ],
 "id": "overlay_519D9B09_4373_5A28_4168_D6CA8DD35B1A",
 "data": {
  "label": "cozinha2"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_1_HS_0_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": 6.05,
   "hfov": 5.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.03
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A499060_4CD5_C619_41C7_5B014D03D7AB",
   "pitch": -23.03,
   "yaw": 6.05,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 5.26,
   "distance": 100
  }
 ],
 "id": "overlay_53212CD2_4355_5E38_41BF_8F73624CB324",
 "data": {
  "label": "entrada"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_1_HS_1_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -176.53,
   "hfov": 3.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.07
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486, this.camera_6BD138F6_4CCD_47F8_41C7_B4D993B7F0E4); this.mainPlayList.set('selectedIndex', 6)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A49F060_4CD5_C619_41A7_05F0BB2EC3A4",
   "pitch": -26.07,
   "yaw": -176.53,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 3.07,
   "distance": 100
  }
 ],
 "id": "overlay_532E6ECB_4355_5A28_41BF_B25A0BE4FE33",
 "data": {
  "label": "corredor1"
 }
},
{
 "useHandCursor": true,
 "maps": [
  {
   "image": {
    "levels": [
     {
      "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_1_HS_2_0_0_map.gif",
      "width": 36,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ],
    "class": "ImageResource"
   },
   "yaw": -93.47,
   "hfov": 4.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.47
  }
 ],
 "class": "HotspotPanoramaOverlay",
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA, this.camera_6BA848E6_4CCD_4618_41A0_87B8F67B421E); this.mainPlayList.set('selectedIndex', 0)",
   "class": "HotspotPanoramaOverlayArea",
   "mapColor": "#FF0000"
  }
 ],
 "rollOverDisplay": false,
 "enabledInCardboard": true,
 "items": [
  {
   "image": "this.AnimatedImageResource_6A49D060_4CD5_C619_417B_07D434CDCB74",
   "pitch": -27.47,
   "yaw": -93.47,
   "class": "HotspotPanoramaOverlayImage",
   "hfov": 4.07,
   "distance": 100
  }
 ],
 "id": "overlay_53F07C28_4357_DE68_41C0_3439C9F57E25",
 "data": {
  "label": "sala1"
 }
},
{
 "horizontalAlign": "center",
 "scrollBarOpacity": 0.5,
 "id": "Container_55DC4FA8_5E27_15CF_41BD_E12B3B6C43C0",
 "backgroundOpacity": 0,
 "width": 40,
 "scrollBarVisible": "rollOver",
 "overflow": "hidden",
 "children": [
  "this.IconButton_55DC4FA8_5E27_15CF_41B5_0CA08581B09B",
  "this.IconButton_55DC4FA8_5E27_15CF_41C8_9487966219ED",
  "this.IconButton_55DC4FA8_5E27_15CF_41CC_17B487E3D0C5"
 ],
 "scrollBarMargin": 2,
 "borderRadius": 0,
 "paddingLeft": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "verticalAlign": "middle",
 "height": "100%",
 "minWidth": 20,
 "layout": "vertical",
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 4,
 "borderSize": 0,
 "contentOpaque": false,
 "class": "Container",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Container1161"
 },
 "shadow": false
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_58215B75_4354_FAF8_41A5_5C915E0368C1_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A452071_4CD5_C6FB_41C9_08D4FD9E4270",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6797EB54_4355_7A38_41CE_A0BFF626395B",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_48EA51B8_433F_4668_417A_E7BED0F336B7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_67978B54_4355_7A38_41CD_501E950134AB",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_54CF8618_4354_CA28_41BF_F1A116F68B1C_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A44706F_4CD5_C6E7_41C3_08B40BCB72F6",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A462063_4CD5_C61F_41C1_631E4049FBE5",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A460064_4CD5_C619_41CD_3DB335DE3F77",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5231038B_435D_4A28_41C4_6A9BF36F25B7_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A467064_4CD5_C619_41D0_CA15E7047DA7",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6EC0E053_4355_463F_41D1_AE1D58B14D9D",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6EC14054_4355_4639_41B6_93C037B56983",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6EC13054_4355_4639_41D1_55F3E29CEB88",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6EC1A055_4355_463B_41CB_ECEE58E398C6",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6EDE1055_4355_463B_41BC_2133F60E4140",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_570BC5EC_4375_49E8_41C0_17F9F4AD617B_1_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6EDEC056_4355_4639_4195_DFB74B002746",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_646F7479_434C_CEEB_41C6_78A1E27F34D0",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_646C547A_434C_CEE9_41CE_49FADB7F86B6",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_62CC997D_437F_46EB_41C9_2A7C95E3A5A4",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_646D047A_434C_CEE9_41CC_6DE92B9D7875",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4FAC430C_433F_CA28_41AA_0B2F5AB6E5DA_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_62CC197E_437F_46E9_419C_1193043AB96A",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_56F96DFB_4375_59E8_41C4_A1BAC073C3F5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A44006E_4CD5_C6E9_41A2_6E4D8636CAED",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A44506F_4CD5_C6E7_41A9_01F18F4032D2",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_596417FD_435F_C9E8_41C8_4A463ECD9DC9_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A45B06F_4CD5_C6E7_41B1_96217280FD01",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A47E065_4CD5_C61B_419E_594A6B510A5D",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A47C065_4CD5_C61B_41BB_FC8F3C6AF6DE",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A472066_4CD5_C619_41AC_02CEECA4FF96",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51714429_4353_4E68_41A9_6F2F58C9FB4A_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A470066_4CD5_C619_41B9_FD7C772D4F1D",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A450071_4CD5_C6FB_41C8_FA63AB3B52CC",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5CE6CED3_43CC_DA3F_41C2_D2456671B6BF_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A457072_4CD5_C6F9_41AA_645C84D81C82",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_67960B53_4355_7A38_419B_B905AC5FD0D0",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_613962D6_4353_4A39_41CC_657BAFB0688A",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_613922D6_4353_4A39_41C7_16A84880E654",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_488772D2_433F_4A38_4198_C5CDCBA2B2AC_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_613982D6_4353_4A39_41AC_EEC6C5C5EB1E",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A490061_4CD5_C61B_41D0_0E3F2A7132CC",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4D82CEE1_4337_FA18_41CD_A5EA33E9D685_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A496061_4CD5_C61B_41CB_34F37F695F99",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_560794DA_4377_4E28_41B4_CB3AC78F7EA9_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A44D06D_4CD5_C6EA_41CE_2B53E19A94AA",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_66C58B95_434D_7A38_41CA_651B437D2533",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_66C56B95_434D_7A38_41B0_1B799E102C46",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_53CAFA9A_4354_DA28_4197_A71B5EE54486_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_66C6CB96_434D_7A38_41C4_E67BAF22CB83",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57FD3A99_437D_5A28_41B4_375ADEBD1A94_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A45B06A_4CD5_C6E9_41B8_9AE1D8AB789B",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A44C068_4CD5_C6E9_41B8_D023DC002C08",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_50A14E3C_4374_DA69_41AB_0330BB6A1C41_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A442069_4CD5_C6EB_4192_F5EEEE06C23D",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A45E06B_4CD5_C6EF_4192_4DE928954C2B",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_57A54569_4373_CEE8_41C0_F99F38478AF8_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A47706B_4CD5_C6EF_41C8_57ACC6B4C35F",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A477067_4CD5_C6E7_41CF_60B3CC2C558B",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51FD1545_4375_4E18_41CA_DBA1292527C5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A475067_4CD5_C6E7_41C0_B2728F9D41D0",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A440069_4CD5_C6EB_41D0_BB752754A555",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A447069_4CD5_C6EB_41A1_97BAF44A36F1",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_579C772B_437C_CA68_41B5_76EC9B7AFB30_1_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 350
  }
 ],
 "id": "AnimatedImageResource_6A44506A_4CD5_C6E9_41AB_B0F548A4FA96",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A44B067_4CD5_C6E7_41C1_3FF429BD3356",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_51836DCF_4377_3E28_41C3_C04A8C9AA8D5_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A44E068_4CD5_C6E9_4191_6377F72C8DFE",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A459070_4CD5_C6F9_41C2_6982F246B9D2",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_587E8EA4_435C_FA18_41BA_88B65ED0C850_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A45C070_4CD5_C6F9_419B_15534963CBF8",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_52422C6B_435F_DEE8_41A4_94B529A771D3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A46C063_4CD5_C61F_41A8_F3D3C0CA91CA",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_64E3F635_4354_CA7B_41C7_3A3875932141",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_64E23636_4354_CA79_41AD_A316A7A5DC92",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_4CA465E5_434F_CE18_41C0_EBD6D7B6285A_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_64E29636_4354_CA79_41CA_D5D70DE38BAE",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A465064_4CD5_C619_41C8_DC68417BFD74",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_5286EF6D_4355_DAE8_41C6_C9644D4006A3_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A47B065_4CD5_C61B_4172_BF7CE6C26ACF",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_1_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A499060_4CD5_C619_41C7_5B014D03D7AB",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_1_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A49F060_4CD5_C619_41A7_05F0BB2EC3A4",
 "rowCount": 5
},
{
 "colCount": 4,
 "frameCount": 20,
 "class": "AnimatedImageResource",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_488510AF_433F_4668_41CE_0FD4A657462D_1_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 600
  }
 ],
 "id": "AnimatedImageResource_6A49D060_4CD5_C619_417B_07D434CDCB74",
 "rowCount": 5
}],
 "backgroundPreloadEnabled": true,
 "paddingTop": 0,
 "paddingBottom": 0,
 "gap": 10,
 "borderSize": 0,
 "height": "100%",
 "contentOpaque": false,
 "class": "Player",
 "scrollBarColor": "#000000",
 "data": {
  "name": "Player14994"
 },
 "scripts": {
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getKey": function(key){  return window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "registerKey": function(key, value){  window[key] = value; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "unregisterKey": function(key){  delete window[key]; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; }
 },
 "shadow": false,
 "downloadEnabled": false,
 "defaultVRPointer": "laser"
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
