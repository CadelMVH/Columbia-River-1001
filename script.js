TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_F92B1EB7_F394_6012_418E_859B15353D32",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1_t.jpg",
  "label": "Entry",
  "vfov": 180,
  "hfovMax": 132,
  "frameTransitionTime": 1000,
  "frameDisplayTime": 3000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "preloadEnabled": false,
  "buttonZoomOut": {
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 1,
   "class": "IconButton",
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "mode": "push",
   "toolTipPaddingLeft": 6,
   "width": 30,
   "toolTipPaddingTop": 4,
   "horizontalAlign": "center",
   "height": 30,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "borderRadius": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "toolTipShadowOpacity": 1,
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "minWidth": 0,
   "cursor": "hand",
   "toolTip": "Zoom Out",
   "paddingRight": 0,
   "toolTipPaddingBottom": 4,
   "minHeight": 0,
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1207"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "toolTipFontColor": "#606060",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "paddingTop": 0,
   "toolTipPaddingRight": 6
  },
  "viewerArea": "this.MainViewer",
  "buttonRestart": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 38,
   "horizontalAlign": "center",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1195"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "shadow": false,
   "paddingTop": 0
  },
  "gyroscopeEnabled": true,
  "buttonPlayLeft": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 38,
   "horizontalAlign": "center",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1196"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonPlayRight": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "push",
   "width": 38,
   "horizontalAlign": "center",
   "height": 38,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "borderRadius": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1198"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "shadow": false,
   "paddingTop": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "touchControlMode": "drag_rotation",
  "mouseControlMode": "drag_rotation",
  "buttonPause": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "toggle",
   "width": 40,
   "horizontalAlign": "center",
   "height": 40,
   "borderRadius": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingRight": 0,
   "minHeight": 0,
   "paddingBottom": 0,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1167"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "shadow": false,
   "paddingTop": 0
  },
  "buttonZoomIn": {
   "toolTipShadowVerticalLength": 0,
   "borderSize": 0,
   "toolTipBorderSize": 1,
   "toolTipOpacity": 1,
   "class": "IconButton",
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "mode": "push",
   "toolTipPaddingLeft": 6,
   "width": 30,
   "toolTipPaddingTop": 4,
   "horizontalAlign": "center",
   "height": 30,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowColor": "#333333",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipShadowHorizontalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "borderRadius": 0,
   "toolTipShadowBlurRadius": 3,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowSpread": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "toolTipShadowOpacity": 1,
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "minWidth": 0,
   "cursor": "hand",
   "toolTip": "Zoom In",
   "paddingRight": 0,
   "toolTipPaddingBottom": 4,
   "minHeight": 0,
   "paddingBottom": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1208"
   },
   "verticalAlign": "middle",
   "transparencyActive": false,
   "toolTipBorderColor": "#767676",
   "shadow": false,
   "toolTipFontColor": "#606060",
   "toolTipFontStyle": "normal",
   "toolTipBorderRadius": 3,
   "toolTipFontWeight": "normal",
   "toolTipFontSize": 12,
   "paddingTop": 0,
   "toolTipPaddingRight": 6
  },
  "gyroscopeVerticalDraggingEnabled": true
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1805,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": -130.66,
   "pitch": -13.2
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 15.38,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 2500,
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -13.31,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -6.47
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_t.jpg",
  "label": "Kitchen",
  "vfov": 180,
  "hfovMax": 131,
  "frameTransitionTime": 1000,
  "frameDisplayTime": 3000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_2_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_2_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_2.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": -141.78,
   "pitch": -22.95
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 32.78,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -9.61
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FD16EB22_F394_2032_41BE_26631E398263",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_t.jpg",
  "label": "Kitchen",
  "vfov": 180,
  "hfovMax": 135,
  "frameTransitionTime": 1000,
  "frameDisplayTime": 3000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": -177.99,
   "pitch": -17.01
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 134.4,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.99
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_t.jpg",
  "label": "Deck",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_t.jpg",
    "overlays": [
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_FD6DC7C8_F3AC_207E_41EC_71CBC41CEFD8",
      "bleaching": 0,
      "bleachingDistance": 0.24,
      "yaw": 31.4,
      "pitch": -6.34
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_FC34DC6B_F3B4_E032_41E7_BC1B7D380739",
      "bleaching": 0,
      "bleachingDistance": 0.31,
      "yaw": 38.19,
      "pitch": -6.47
     },
     {
      "class": "LensFlarePanoramaOverlay",
      "id": "overlay_FC1AB690_F3B4_20EE_41E4_C6FE9E6B55F9",
      "bleaching": 0,
      "bleachingDistance": 0.3,
      "yaw": 44.97,
      "pitch": -5.59
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawDelta": 18.5
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 323
    },
    {
     "yawSpeed": 7.96,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawDelta": 18.5
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_t.jpg",
  "label": "Hallway",
  "vfov": 180,
  "hfovMax": 120,
  "frameDisplayTime": 3000,
  "frameTransitionTime": 1000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.43,
   "pitch": -18.07
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -30.15,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.99
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_t.jpg",
  "label": "Laundry",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 58.36,
   "pitch": -4.92
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -131.89,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "linear",
     "targetPitch": -4.08
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "LivePanorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_t.jpg",
  "label": "Bathroom",
  "vfov": 180,
  "hfovMax": 132,
  "frameTransitionTime": 1000,
  "frameDisplayTime": 3000,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0.jpeg"
      }
     ]
    }
   },
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 123,
   "yaw": -150.34,
   "pitch": -15.76
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 5.15,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.88
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "Panorama",
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_t.jpg",
  "label": "Bedroom",
  "vfov": 180,
  "hfovMax": 120,
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_t.jpg",
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.58,
   "pitch": -8.09
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 14.32,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawDelta": 360
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32",
    "camera": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 0)",
    "end": "this.trigger('tourEnded')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32",
    "camera": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist"
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "items": [
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32",
    "camera": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 0)"
   }
  ]
 },
 {
  "data": {
   "label": "More Than Just a Home"
  },
  "class": "MediaAudio",
  "id": "audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9",
  "autoplay": true,
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9.mp3",
   "oggUrl": "media/audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9.ogg"
  }
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 1,
  "class": "ViewerArea",
  "playbackBarHeadShadow": true,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "playbackBarBorderColor": "#AAAAAA",
  "toolTipPaddingTop": 4,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipTextShadowOpacity": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "toolTipTextShadowBlurRadius": 3,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "playbackBarBorderRadius": 4,
  "borderRadius": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "progressBarBorderRadius": 4,
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "paddingBottom": 0,
  "playbackBarHeadBorderSize": 0,
  "minHeight": 50,
  "shadow": false,
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBorderColor": "#AAAAAA",
  "progressOpacity": 1,
  "transitionDuration": 500,
  "toolTipFontColor": "#606060",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarBottom": 10,
  "toolTipFontSize": 12,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressRight": 10,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarHeadShadowColor": "#000000",
  "paddingTop": 0,
  "progressHeight": 20,
  "progressBottom": 1,
  "playbackBarHeadBorderRadius": 0,
  "toolTipShadowVerticalLength": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipShadowHorizontalLength": 0,
  "progressBorderRadius": 4,
  "toolTipTextShadowColor": "#000000",
  "playbackBarBorderSize": 2,
  "playbackBarBackgroundOpacity": 1,
  "toolTipShadowColor": "#333333",
  "playbackBarLeft": 0,
  "toolTipShadowBlurRadius": 3,
  "progressLeft": 10,
  "playbackBarProgressOpacity": 1,
  "progressBorderSize": 2,
  "playbackBarHeadHeight": 30,
  "paddingLeft": 0,
  "progressBarBorderColor": "#000000",
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 100,
  "top": 77,
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingBottom": 4,
  "paddingRight": 0,
  "progressBarOpacity": 1,
  "bottom": 92,
  "id": "MainViewer",
  "playbackBarOpacity": 1,
  "transitionMode": "blending",
  "progressBarBorderSize": 1,
  "toolTipBorderColor": "#767676",
  "playbackBarRight": 0,
  "playbackBarProgressBorderRadius": 0,
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "progressBackgroundOpacity": 1,
  "toolTipFontWeight": "normal",
  "playbackBarHeadWidth": 6,
  "playbackBarBackgroundColorDirection": "vertical",
  "left": 0,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "playbackBarProgressBorderColor": "#000000",
  "right": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeight": 20
 },
 {
  "borderSize": 0,
  "class": "ThumbnailList",
  "backgroundColor": [
   "#000000"
  ],
  "horizontalAlign": "left",
  "itemThumbnailShadowBlurRadius": 4,
  "selectedItemLabelFontWeight": "bold",
  "selectedItemLabelFontColor": "#FFFF00",
  "itemThumbnailShadowVerticalLength": 3,
  "backgroundColorDirection": "vertical",
  "borderRadius": 5,
  "itemThumbnailShadowOpacity": 0.8,
  "layout": "vertical",
  "backgroundColorRatios": [
   0
  ],
  "paddingBottom": 10,
  "itemVerticalAlign": "middle",
  "shadow": false,
  "rollOverItemLabelFontWeight": "bold",
  "minHeight": 0,
  "playList": "this.thumbnaillist5245_playlist",
  "backgroundOpacity": 0.2,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 70,
  "itemThumbnailScaleMode": "fit_outside",
  "maxHeight": 800,
  "itemPaddingBottom": 3,
  "paddingTop": 10,
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 8,
  "itemThumbnailShadowHorizontalLength": 3,
  "itemLabelFontFamily": "Arial",
  "width": 158.5,
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 5,
  "paddingLeft": 20,
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 0,
  "itemHorizontalAlign": "center",
  "top": "8.02%",
  "maxWidth": 800,
  "rollOverItemLabelFontColor": "#FF0000",
  "paddingRight": 20,
  "bottom": "10.1%",
  "itemThumbnailShadow": true,
  "id": "thumbnaillist5245",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemOpacity": 1,
  "itemThumbnailOpacity": 1,
  "itemLabelFontStyle": "normal",
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemThumbnailWidth": 100,
  "scrollBarOpacity": 0.5,
  "gap": 0,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "right": "0%",
  "itemBackgroundColorRatios": [],
  "scrollBarVisible": "rollOver",
  "itemLabelPosition": "bottom"
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "class": "Label",
    "width": 374,
    "horizontalAlign": "center",
    "fontSize": 40,
    "height": "100%",
    "textDecoration": "none",
    "borderRadius": 0,
    "text": "Dream Silver 481F",
    "fontFamily": "Arial",
    "paddingLeft": 0,
    "fontWeight": "bold",
    "fontStyle": "normal",
    "minWidth": 30,
    "paddingRight": 0,
    "minHeight": 16,
    "paddingBottom": 0,
    "id": "label4056",
    "backgroundOpacity": 0,
    "data": {
     "name": "Label28174"
    },
    "verticalAlign": "middle",
    "shadow": false,
    "fontColor": "#666666",
    "paddingTop": 0
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "children": [
     {
      "toolTipShadowVerticalLength": 0,
      "borderSize": 0,
      "toolTipBorderSize": 1,
      "toolTipOpacity": 1,
      "class": "IconButton",
      "toolTipFontFamily": "Arial",
      "toolTipDisplayTime": 600,
      "mode": "toggle",
      "toolTipPaddingLeft": 6,
      "width": 40,
      "toolTipPaddingTop": 4,
      "horizontalAlign": "center",
      "height": 40,
      "toolTipTextShadowOpacity": 0,
      "toolTipTextShadowColor": "#000000",
      "toolTipShadowColor": "#333333",
      "toolTipTextShadowBlurRadius": 3,
      "toolTipShadowHorizontalLength": 0,
      "borderRadius": 0,
      "toolTipShadowBlurRadius": 3,
      "toolTipBackgroundColor": "#F6F6F6",
      "toolTipShadowSpread": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "toolTipShadowOpacity": 1,
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "minWidth": 0,
      "cursor": "hand",
      "toolTip": "Mute",
      "paddingRight": 0,
      "toolTipPaddingBottom": 4,
      "minHeight": 0,
      "paddingBottom": 0,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "toolTipBorderColor": "#767676",
      "shadow": false,
      "toolTipFontColor": "#606060",
      "toolTipFontStyle": "normal",
      "toolTipBorderRadius": 3,
      "toolTipFontWeight": "normal",
      "toolTipFontSize": 12,
      "paddingTop": 0,
      "toolTipPaddingRight": 6
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "creationPolicy": "inAdvance",
      "borderSize": 0,
      "children": [
       {
        "creationPolicy": "inAdvance",
        "borderSize": 0,
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "class": "Container",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "scrollBarVisible": "rollOver",
        "width": 47,
        "horizontalAlign": "center",
        "height": "100%",
        "scrollBarColor": "#000000",
        "borderRadius": 0,
        "scrollBarWidth": 10,
        "backgroundColorRatios": [
         0
        ],
        "backgroundColorDirection": "vertical",
        "paddingLeft": 0,
        "scrollBarMargin": 2,
        "minWidth": 20,
        "paddingRight": 0,
        "minHeight": 20,
        "paddingBottom": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "layout": "vertical",
        "backgroundOpacity": 1,
        "data": {
         "name": "Container1202"
        },
        "verticalAlign": "middle",
        "shadow": false,
        "scrollBarOpacity": 0.5,
        "paddingTop": 0,
        "gap": 10,
        "contentOpaque": false,
        "overflow": "hidden"
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "class": "Container",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarVisible": "rollOver",
      "width": 133,
      "horizontalAlign": "center",
      "height": "100%",
      "scrollBarColor": "#000000",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "backgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "scrollBarMargin": 2,
      "minWidth": 20,
      "paddingRight": 0,
      "minHeight": 20,
      "paddingBottom": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "layout": "horizontal",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1200"
      },
      "verticalAlign": "middle",
      "shadow": false,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "gap": 5,
      "contentOpaque": false,
      "overflow": "hidden"
     },
     {
      "creationPolicy": "inAdvance",
      "borderSize": 0,
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "class": "Container",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "scrollBarVisible": "rollOver",
      "width": 85,
      "horizontalAlign": "center",
      "height": "100%",
      "scrollBarColor": "#000000",
      "borderRadius": 0,
      "scrollBarWidth": 10,
      "backgroundColorRatios": [
       0
      ],
      "backgroundColorDirection": "vertical",
      "paddingLeft": 0,
      "scrollBarMargin": 2,
      "minWidth": 20,
      "paddingRight": 0,
      "minHeight": 20,
      "paddingBottom": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "layout": "horizontal",
      "backgroundOpacity": 1,
      "data": {
       "name": "Container1206"
      },
      "verticalAlign": "middle",
      "shadow": false,
      "scrollBarOpacity": 0.5,
      "paddingTop": 0,
      "gap": 10,
      "contentOpaque": false,
      "overflow": "hidden"
     }
    ],
    "class": "Container",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "scrollBarVisible": "rollOver",
    "width": 805.5,
    "horizontalAlign": "center",
    "height": "93.478%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "backgroundColorRatios": [
     0
    ],
    "backgroundColorDirection": "vertical",
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minWidth": 468,
    "paddingRight": 0,
    "minHeight": 20,
    "paddingBottom": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "layout": "horizontal",
    "backgroundOpacity": 1,
    "data": {
     "name": "Container1194"
    },
    "verticalAlign": "middle",
    "shadow": false,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "gap": 10,
    "contentOpaque": false,
    "overflow": "hidden"
   },
   {
    "borderSize": 0,
    "horizontalAlign": "left",
    "itemBackgroundColorRatios": [],
    "class": "ThumbnailList",
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 1,
    "width": "28.046%",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailShadowBlurRadius": 8,
    "height": 92,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#000000",
    "itemLabelFontFamily": "Arial",
    "borderRadius": 5,
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.54,
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailBorderRadius": 2,
    "itemMode": "normal",
    "paddingLeft": 20,
    "scrollBarMargin": 2,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "rollOverItemLabelFontColor": "#003399",
    "rollOverItemBackgroundOpacity": 0,
    "minWidth": 20,
    "itemOpacity": 1,
    "itemVerticalAlign": "middle",
    "paddingRight": 20,
    "minHeight": 20,
    "paddingBottom": 10,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "itemThumbnailShadow": true,
    "itemLabelFontStyle": "normal",
    "shadow": false,
    "layout": "horizontal",
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "itemLabelFontWeight": "normal",
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 36,
    "scrollBarOpacity": 0.5,
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemThumbnailShadowSpread": 1,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "paddingTop": 10,
    "itemThumbnailWidth": 94,
    "itemBackgroundColor": [],
    "scrollBarVisible": "always",
    "itemLabelPosition": "top"
   },
   {
    "paddingTop": 10,
    "borderSize": 0,
    "horizontalAlign": "left",
    "itemBackgroundColorRatios": [],
    "class": "ThumbnailList",
    "itemPaddingTop": 3,
    "scrollBarColor": "#FFFFFF",
    "itemLabelGap": 8,
    "width": "26.327%",
    "itemThumbnailShadowHorizontalLength": 3,
    "itemThumbnailShadowBlurRadius": 8,
    "height": 82.5,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingRight": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemLabelFontFamily": "Arial",
    "borderRadius": 5,
    "itemThumbnailShadowVerticalLength": 3,
    "itemThumbnailShadowColor": "#000000",
    "scrollBarWidth": 10,
    "itemBackgroundColorDirection": "vertical",
    "itemThumbnailShadowOpacity": 0.57,
    "selectedItemLabelFontColor": "#FFCC00",
    "itemThumbnailBorderRadius": 5,
    "itemMode": "normal",
    "paddingLeft": 20,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "rollOverItemLabelFontWeight": "bold",
    "itemHorizontalAlign": "center",
    "itemVerticalAlign": "middle",
    "itemOpacity": 1,
    "paddingRight": 20,
    "visible": false,
    "paddingBottom": 10,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "itemBorderRadius": 0,
    "verticalAlign": "top",
    "minHeight": 1,
    "itemThumbnailShadow": true,
    "itemLabelFontStyle": "normal",
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "itemThumbnailOpacity": 1,
    "itemBackgroundOpacity": 0,
    "itemLabelHorizontalAlign": "center",
    "itemLabelTextDecoration": "none",
    "itemLabelFontWeight": "normal",
    "data": {
     "name": "ThumbnailList35762"
    },
    "itemLabelFontSize": 14,
    "itemThumbnailHeight": 75,
    "scrollBarOpacity": 0.5,
    "itemThumbnailScaleMode": "fit_outside",
    "gap": 13,
    "itemThumbnailShadowSpread": 1,
    "itemPaddingLeft": 3,
    "itemPaddingBottom": 3,
    "shadow": false,
    "itemThumbnailWidth": 100,
    "itemBackgroundColor": [],
    "scrollBarVisible": "rollOver",
    "itemLabelPosition": "bottom"
   }
  ],
  "overflow": "scroll",
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "gap": 6,
  "horizontalAlign": "center",
  "height": 92,
  "width": "100%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "backgroundColorRatios": [
   0,
   1
  ],
  "paddingBottom": 0,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingRight": 0,
  "minHeight": 1,
  "layout": "horizontal",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container29432"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "shadow": false,
  "left": "0%",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false
 },
 {
  "borderSize": 0,
  "class": "Image",
  "horizontalAlign": "center",
  "height": "7.604%",
  "width": "9.198%",
  "borderRadius": 0,
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "paddingLeft": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1467,
  "paddingRight": 0,
  "minHeight": 1,
  "paddingBottom": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "backgroundOpacity": 0,
  "data": {
   "name": "Wave Logo"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "maxHeight": 817,
  "right": "0%"
 },
 {
  "borderSize": 0,
  "class": "Image",
  "horizontalAlign": "center",
  "height": "6.979%",
  "width": "38.151%",
  "borderRadius": 0,
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "paddingLeft": 0,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.31%",
  "maxWidth": 1700,
  "paddingRight": 0,
  "minHeight": 1,
  "paddingBottom": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTViewhomes"
  },
  "verticalAlign": "middle",
  "shadow": false,
  "paddingTop": 0,
  "maxHeight": 186,
  "right": "8.53%"
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   {
    "borderSize": 0,
    "toolTipPaddingRight": 6,
    "toolTipOpacity": 1,
    "class": "ViewerArea",
    "playbackBarHeadShadow": true,
    "toolTipFontFamily": "Arial",
    "toolTipDisplayTime": 600,
    "toolTipPaddingLeft": 6,
    "playbackBarBorderColor": "#AAAAAA",
    "toolTipPaddingTop": 4,
    "playbackBarBackgroundColor": [
     "#EEEEEE",
     "#CCCCCC"
    ],
    "toolTipTextShadowOpacity": 0,
    "playbackBarHeadShadowHorizontalLength": 0,
    "toolTipTextShadowBlurRadius": 3,
    "playbackBarProgressBackgroundColorDirection": "vertical",
    "playbackBarBorderRadius": 4,
    "borderRadius": 0,
    "playbackBarHeadShadowVerticalLength": 0,
    "toolTipShadowSpread": 0,
    "toolTipBackgroundColor": "#F6F6F6",
    "progressBarBorderRadius": 4,
    "progressBarBackgroundColorDirection": "vertical",
    "toolTipShadowOpacity": 1,
    "playbackBarProgressBorderSize": 0,
    "paddingBottom": 0,
    "minHeight": 1,
    "shadow": false,
    "progressOpacity": 1,
    "playbackBarProgressBackgroundColor": [
     "#222222",
     "#444444"
    ],
    "progressBorderColor": "#AAAAAA",
    "playbackBarHeadBorderSize": 0,
    "transitionDuration": 500,
    "toolTipFontColor": "#606060",
    "playbackBarHeadBackgroundColorDirection": "vertical",
    "playbackBarHeadBorderColor": "#000000",
    "playbackBarBottom": 0,
    "toolTipFontSize": 12,
    "progressBackgroundColorDirection": "vertical",
    "playbackBarHeadBackgroundColorRatios": [
     0,
     1
    ],
    "playbackBarHeadShadowBlurRadius": 3,
    "playbackBarHeadShadowColor": "#000000",
    "paddingTop": 0,
    "progressRight": 10,
    "progressHeight": 20,
    "progressBottom": 2,
    "playbackBarHeadBorderRadius": 0,
    "toolTipShadowVerticalLength": 0,
    "playbackBarProgressBackgroundColorRatios": [
     0,
     1
    ],
    "progressBackgroundColor": [
     "#EEEEEE",
     "#CCCCCC"
    ],
    "playbackBarHeadShadowOpacity": 0.7,
    "toolTipShadowHorizontalLength": 0,
    "progressBorderRadius": 4,
    "toolTipTextShadowColor": "#000000",
    "playbackBarBorderSize": 2,
    "playbackBarBackgroundOpacity": 1,
    "toolTipShadowColor": "#333333",
    "height": "100%",
    "playbackBarLeft": 0,
    "width": "100%",
    "toolTipShadowBlurRadius": 3,
    "progressBorderSize": 2,
    "progressLeft": 10,
    "playbackBarProgressOpacity": 1,
    "progressBackgroundColorRatios": [
     0,
     1
    ],
    "playbackBarHeadHeight": 30,
    "paddingLeft": 0,
    "progressBarBorderColor": "#000000",
    "playbackBarHeadBackgroundColor": [
     "#111111",
     "#666666"
    ],
    "progressBarBackgroundColorRatios": [
     0,
     1
    ],
    "minWidth": 1,
    "top": "0%",
    "playbackBarHeadOpacity": 1,
    "toolTipPaddingBottom": 4,
    "paddingRight": 0,
    "progressBarOpacity": 1,
    "transitionMode": "blending",
    "progressBarBorderSize": 1,
    "playbackBarOpacity": 1,
    "progressBarBackgroundColor": [
     "#222222",
     "#444444"
    ],
    "id": "MapViewer",
    "toolTipBorderColor": "#767676",
    "playbackBarRight": 0,
    "playbackBarProgressBorderRadius": 0,
    "toolTipBorderRadius": 3,
    "progressBackgroundOpacity": 1,
    "toolTipFontWeight": "normal",
    "playbackBarHeadWidth": 6,
    "toolTipFontStyle": "normal",
    "playbackBarBackgroundColorDirection": "vertical",
    "left": "0%",
    "playbackBarProgressBorderColor": "#000000",
    "toolTipBorderSize": 1,
    "playbackBarHeight": 20
   }
  ],
  "overflow": "scroll",
  "class": "Container",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "scrollBarVisible": "rollOver",
  "gap": 10,
  "horizontalAlign": "left",
  "height": "33.75%",
  "width": "28.739%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "backgroundColorRatios": [
   0,
   1
  ],
  "backgroundColorDirection": "vertical",
  "paddingLeft": 0,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "top": "1.82%",
  "paddingRight": 0,
  "minHeight": 1,
  "paddingBottom": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "layout": "absolute",
  "backgroundOpacity": 0.3,
  "data": {
   "name": "Container24488"
  },
  "verticalAlign": "top",
  "shadow": false,
  "left": "0.63%",
  "paddingTop": 0,
  "scrollBarOpacity": 0.5,
  "contentOpaque": false
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "class": "Player",
 "start": "this.playAudioList([this.audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0)",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "vrPolyfillScale": 0.88,
 "horizontalAlign": "left",
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "getKey": function(key){  return window[key]; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "unregisterKey": function(key){  delete window[key]; },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; }
 },
 "paddingRight": 0,
 "minHeight": 20,
 "paddingBottom": 0,
 "id": "rootPlayer",
 "layout": "absolute",
 "data": {
  "name": "Player28156"
 },
 "verticalAlign": "top",
 "shadow": false,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})