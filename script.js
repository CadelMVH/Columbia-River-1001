TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "thumbnailUrl": "media/video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B_t.jpg",
  "label": "Enscape_2024-11-11-17-30-13",
  "video": {
   "height": 1080,
   "mp4Url": "media/video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B.mp4",
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside",
  "class": "Video"
 },
 {
  "buttonPause": {
   "borderSize": 0,
   "mode": "toggle",
   "width": 67.99,
   "horizontalAlign": "center",
   "height": 55.72,
   "borderRadius": 0,
   "paddingLeft": 0,
   "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png",
   "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingBottom": 0,
   "paddingRight": 0,
   "minHeight": 0,
   "shadow": false,
   "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1166"
   },
   "verticalAlign": "middle",
   "transparencyActive": true,
   "paddingTop": 0,
   "class": "IconButton"
  },
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "class": "VideoPlayer"
 },
 {
  "frameDisplayTime": 3000,
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_F92B1EB7_F394_6012_418E_859B15353D32",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1_t.jpg",
  "label": "Entry",
  "vfov": 180,
  "hfovMax": 132,
  "mapLocations": [
   {
    "x": 1798.8,
    "map": {
     "fieldOfViewOverlayInsideOpacity": 0.15,
     "id": "map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
     "fieldOfViewOverlayInsideColor": "#0066FF",
     "initialZoomFactor": 1,
     "height": 902,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "minimumZoomFactor": 0.5,
     "width": 2560,
     "image": {
      "levels": [
       {
        "height": 563,
        "width": 1600,
        "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B.png",
        "class": "ImageResourceLevel"
       },
       {
        "height": 281,
        "width": 800,
        "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_lq.png",
        "grayscale": true,
        "class": "ImageResourceLevel"
       }
      ],
      "class": "ImageResource"
     },
     "thumbnailUrl": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_t.png",
     "label": "CR1001floorplan2",
     "maximumZoomFactor": 1.2,
     "overlays": [
      {
       "id": "overlay_FB66CF96_F772_EF18_4198_42587745DFC8",
       "map": {
        "offsetY": 0,
        "x": 1753.8,
        "width": 90,
        "y": 514.69,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_0_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1753.8,
        "y": 514.69,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_0.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_FB999D17_F773_7319_41D4_32223D8BDC63",
       "map": {
        "offsetY": 0,
        "x": 1551.12,
        "width": 90,
        "y": 468.41,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_1_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1551.12,
        "y": 468.41,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_1.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_FB084DB3_F773_F318_41E6_F7520516570C",
       "map": {
        "offsetY": 0,
        "x": 1234.9,
        "width": 90,
        "y": 500.27,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_2_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1234.9,
        "y": 500.27,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_2.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_FA4B2AE7_F773_1138_41E6_5D7048EBBE1E",
       "map": {
        "offsetY": 0,
        "x": 2258.58,
        "width": 90,
        "y": 378,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_3_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 2258.58,
        "y": 378,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_3.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_FBD6CF86_F772_EFF8_41B6_E83E1FFD8DFF",
       "map": {
        "offsetY": 0,
        "x": 1119.88,
        "width": 90,
        "y": 135.02,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_4_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1119.88,
        "y": 135.02,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_4.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_FA2F4EBA_F771_310B_41D6_3304BD83B083",
       "map": {
        "offsetY": 0,
        "x": 872.58,
        "width": 90,
        "y": 334.46,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_5_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 872.58,
        "y": 334.46,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_5.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_FAB8DF1C_F771_2F08_41E6_A3248D718BA0",
       "map": {
        "offsetY": 0,
        "x": 874.45,
        "width": 90,
        "y": 526.55,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_6_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 874.45,
        "y": 526.55,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_6.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_F94C9BE6_F771_1738_41E7_40D9EFAF9139",
       "map": {
        "offsetY": 0,
        "x": 349.66,
        "width": 90,
        "y": 450.46,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_7_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 8)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 349.66,
        "y": 450.46,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_7.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      },
      {
       "id": "overlay_F5D7F8A0_F8E8_EDE6_41ED_A79C515BDCDA",
       "map": {
        "offsetY": 0,
        "x": 1559.65,
        "width": 90,
        "y": 310.64,
        "height": 90,
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_8_map.gif",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayMap"
       },
       "useHandCursor": true,
       "data": {
        "label": "Image"
       },
       "areas": [
        {
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 10)",
         "class": "HotspotMapOverlayArea"
        }
       ],
       "image": {
        "x": 1559.65,
        "y": 310.64,
        "width": 90,
        "height": 90,
        "image": {
         "levels": [
          {
           "height": 56,
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_8.png",
           "class": "ImageResourceLevel"
          }
         ],
         "class": "ImageResource"
        },
        "class": "HotspotMapOverlayImage"
       },
       "rollOverDisplay": false,
       "class": "AreaHotspotMapOverlay"
      }
     ],
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayRadiusScale": 0.14,
     "class": "Map"
    },
    "angle": 310.01,
    "y": 559.69,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 1000,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   },
   {
    "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "LivePanorama"
 },
 {
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer"
 },
 {
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 1,
   "toolTipPaddingLeft": 6,
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "transitionMode": "blending",
   "toolTipPaddingTop": 4,
   "playbackBarProgressBorderRadius": 0,
   "toolTipTextShadowOpacity": 0,
   "toolTipTextShadowBlurRadius": 3,
   "progressBorderSize": 2,
   "playbackBarHeadShadowBlurRadius": 3,
   "borderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "toolTipShadowOpacity": 1,
   "paddingBottom": 0,
   "shadow": false,
   "progressBarBackgroundColorDirection": "vertical",
   "minHeight": 1,
   "playbackBarProgressOpacity": 1,
   "playbackBarBottom": 0,
   "playbackBarBorderSize": 2,
   "playbackBarHeadShadowColor": "#000000",
   "toolTipFontColor": "#606060",
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadBorderRadius": 0,
   "paddingTop": 0,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadBorderSize": 0,
   "progressBarOpacity": 1,
   "toolTipShadowVerticalLength": 0,
   "progressBackgroundColorDirection": "vertical",
   "toolTipFontSize": 12,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "class": "ViewerArea",
   "playbackBarBorderColor": "#AAAAAA",
   "playbackBarHeadBorderColor": "#000000",
   "playbackBarHeadShadowOpacity": 0.7,
   "playbackBarProgressBorderSize": 0,
   "toolTipTextShadowColor": "#000000",
   "progressBarBorderRadius": 4,
   "height": "100%",
   "playbackBarHeadShadow": true,
   "width": "100%",
   "toolTipShadowColor": "#333333",
   "toolTipShadowHorizontalLength": 0,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarLeft": 0,
   "toolTipShadowBlurRadius": 3,
   "playbackBarHeadHeight": 30,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "progressRight": 10,
   "paddingLeft": 0,
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeight": 20,
   "playbackBarHeadOpacity": 1,
   "progressBackgroundOpacity": 1,
   "playbackBarHeadShadowVerticalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "minWidth": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "paddingRight": 0,
   "progressBorderRadius": 4,
   "id": "MapViewer",
   "playbackBarBorderRadius": 4,
   "playbackBarHeadWidth": 6,
   "progressBorderColor": "#AAAAAA",
   "toolTipBorderColor": "#767676",
   "playbackBarProgressBorderColor": "#000000",
   "toolTipBorderRadius": 3,
   "progressOpacity": 1,
   "progressLeft": 10,
   "toolTipFontWeight": "normal",
   "progressBarBorderSize": 1,
   "toolTipFontStyle": "normal",
   "transitionDuration": 500,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarRight": 0,
   "progressBottom": 2,
   "playbackBarBackgroundOpacity": 1,
   "toolTipBorderSize": 1,
   "progressHeight": 20,
   "playbackBarOpacity": 1
  },
  "class": "MapPlayer"
 },
 {
  "manualRotationSpeed": 1805,
  "id": "panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
  "automaticZoomSpeed": 10,
  "class": "PanoramaCamera",
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": -130.66,
   "pitch": -13.2
  },
  "idleSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [],
   "restartMovementOnUserInteraction": false
  },
  "timeToIdle": 2500,
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -13.31,
     "path": "longest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -6.47,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "frameDisplayTime": 3000,
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_t.jpg",
  "label": "Kitchen",
  "vfov": 180,
  "hfovMax": 131,
  "mapLocations": [
   {
    "x": 1596.12,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "angle": 310.32,
    "y": 513.41,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 1000,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   },
   {
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   },
   {
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_2_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_2_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_2.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "LivePanorama"
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
   "movements": [
    {
     "targetYaw": 32.78,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -9.61,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "frameDisplayTime": 3000,
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FD16EB22_F394_2032_41BE_26631E398263",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_t.jpg",
  "label": "Kitchen",
  "vfov": 180,
  "hfovMax": 135,
  "mapLocations": [
   {
    "x": 1279.9,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "angle": -54.01,
    "y": 545.27,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 1000,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   },
   {
    "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "LivePanorama"
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
   "movements": [
    {
     "targetYaw": 134.4,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.99,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_t.jpg",
  "label": "Deck",
  "vfov": 180,
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 2303.58,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "angle": 51.44,
    "y": 423,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_t.jpg",
    "overlays": [
     {
      "bleaching": 0,
      "bleachingDistance": 0.24,
      "id": "overlay_FD6DC7C8_F3AC_207E_41EC_71CBC41CEFD8",
      "pitch": -6.34,
      "yaw": 31.4,
      "class": "LensFlarePanoramaOverlay"
     },
     {
      "bleaching": 0,
      "bleachingDistance": 0.31,
      "id": "overlay_FC34DC6B_F3B4_E032_41E7_BC1B7D380739",
      "pitch": -6.47,
      "yaw": 38.19,
      "class": "LensFlarePanoramaOverlay"
     },
     {
      "bleaching": 0,
      "bleachingDistance": 0.3,
      "id": "overlay_FC1AB690_F3B4_20EE_41E4_C6FE9E6B55F9",
      "pitch": -5.59,
      "yaw": 44.97,
      "class": "LensFlarePanoramaOverlay"
     }
    ],
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
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
     "yawDelta": 18.5,
     "easing": "cubic_in",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 323,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    },
    {
     "yawSpeed": 7.96,
     "yawDelta": 18.5,
     "easing": "cubic_out",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "frameDisplayTime": 3000,
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_t.jpg",
  "label": "Hallway",
  "vfov": 180,
  "hfovMax": 120,
  "frameTransitionTime": 1000,
  "mapLocations": [
   {
    "x": 1164.88,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "angle": 295.79,
    "y": 180.02,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   },
   {
    "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "LivePanorama"
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
   "movements": [
    {
     "targetYaw": -30.15,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -10.99,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_t.jpg",
  "label": "Laundry",
  "vfov": 180,
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 917.58,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "angle": -60.26,
    "y": 379.46,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
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
   "movements": [
    {
     "targetYaw": -131.89,
     "path": "shortest",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45,
     "easing": "linear",
     "targetPitch": -4.08,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "frameDisplayTime": 3000,
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_t.jpg",
  "label": "Bathroom",
  "vfov": 180,
  "hfovMax": 132,
  "mapLocations": [
   {
    "x": 919.45,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "angle": 308.92,
    "y": 571.55,
    "class": "PanoramaMapLocation"
   }
  ],
  "frameTransitionTime": 1000,
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   },
   {
    "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "LivePanorama"
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
   "movements": [
    {
     "targetYaw": 5.15,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -14.88,
     "class": "TargetPanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  }
 },
 {
  "hfov": 360,
  "hfovMin": 60,
  "id": "panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_t.jpg",
  "label": "Bedroom",
  "vfov": 180,
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 394.66,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "angle": -56.67,
    "y": 495.46,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 3360,
       "width": 6720,
       "url": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
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
     "yawDelta": 360,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "thumbnailUrl": "media/video_E045C316_F4FC_2012_41DE_36747AB46079_t.jpg",
  "label": "Columbia River 1001 Drone Video 720p",
  "video": {
   "height": 1080,
   "mp4Url": "media/video_E045C316_F4FC_2012_41DE_36747AB46079.mp4",
   "width": 1920,
   "class": "VideoResource"
  },
  "width": 1920,
  "id": "video_E045C316_F4FC_2012_41DE_36747AB46079",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside",
  "class": "Video"
 },
 {
  "hfov": 360,
  "hfovMin": 53,
  "id": "panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_t.jpg",
  "label": "360 Rendering",
  "vfov": 180,
  "hfovMax": 120,
  "mapLocations": [
   {
    "x": 1604.65,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "angle": 0,
    "y": 355.64,
    "class": "PanoramaMapLocation"
   }
  ],
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_t.jpg",
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "width": 4096,
       "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_hq.jpeg",
       "class": "ImageResourceLevel"
      },
      {
       "height": 2001,
       "width": 4002,
       "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C.jpeg",
       "class": "ImageResourceLevel"
      }
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame"
   }
  ],
  "class": "Panorama"
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 81,
   "yaw": 90.64,
   "pitch": -2.44
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "yawSpeed": 15.91,
     "yawDelta": 360,
     "easing": "linear",
     "class": "DistancePanoramaCameraMovement"
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "media": "this.video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000')"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_75155A89_6821_E0E9_41AC_7701B8C4E170, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32",
    "camera": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
    "id": "PanoramaPlayListItem_75155A89_6821_E0E9_41AC_7701B8C4E170",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_7515DA89_6821_E0E9_41C6_A21F531DE0DB, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
    "id": "PanoramaPlayListItem_7515DA89_6821_E0E9_41C6_A21F531DE0DB",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_75160A8A_6821_E0E8_41BC_5E92D214BD0C, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
    "id": "PanoramaPlayListItem_75160A8A_6821_E0E8_41BC_5E92D214BD0C",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_7516AA8A_6821_E0E8_41C3_95D74C168B22, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
    "id": "PanoramaPlayListItem_7516AA8A_6821_E0E8_41C3_95D74C168B22",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_75173A8A_6821_E0E8_41BD_472EF4D9E910, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
    "id": "PanoramaPlayListItem_75173A8A_6821_E0E8_41BD_472EF4D9E910",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_75175A8A_6821_E0E8_41C4_F3B10B823884, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
    "id": "PanoramaPlayListItem_75175A8A_6821_E0E8_41C4_F3B10B823884",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_7517EA8A_6821_E0E8_41D4_AF07B6303826, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
    "id": "PanoramaPlayListItem_7517EA8A_6821_E0E8_41D4_AF07B6303826",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_75080A8A_6821_E0E8_41D6_6ECACACD45FE, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "id": "PanoramaPlayListItem_75080A8A_6821_E0E8_41D6_6ECACACD45FE",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 9, 10)",
    "media": "this.video_E045C316_F4FC_2012_41DE_36747AB46079",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 9, this.video_E045C316_F4FC_2012_41DE_36747AB46079)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_7508FA8B_6821_E0E8_41C0_9A63223CBA61, this.MapViewerMapPlayer)",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
    "camera": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 0)",
    "id": "PanoramaPlayListItem_7508FA8B_6821_E0E8_41C0_9A63223CBA61",
    "end": "this.trigger('tourEnded')",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "mainPlayList",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)",
    "media": "this.video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, '#000000')"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)",
    "media": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32",
    "camera": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   },
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)",
    "media": "this.video_E045C316_F4FC_2012_41DE_36747AB46079",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, this.video_E045C316_F4FC_2012_41DE_36747AB46079)"
   },
   {
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 0)",
    "media": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
    "camera": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "class": "PanoramaPlayListItem"
   }
  ],
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "class": "PlayList"
 },
 "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_75142A89_6821_E0E9_41C4_4A38C7A1FFA2",
  "class": "PlayList"
 },
 {
  "items": [
   {
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "class": "MapPlayListItem"
   }
  ],
  "id": "playList_75141A89_6821_E0E9_41BA_420D5BF3A719",
  "class": "PlayList"
 },
 {
  "data": {
   "label": "More Than Just a Home"
  },
  "id": "audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9",
  "autoplay": true,
  "audio": {
   "mp3Url": "media/audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9.mp3",
   "oggUrl": "media/audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9.ogg",
   "class": "AudioResource"
  },
  "class": "MediaAudio"
 }
], "children": [
 {
  "borderSize": 0,
  "toolTipPaddingRight": 6,
  "toolTipOpacity": 0.24,
  "toolTipPaddingLeft": 6,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "transitionMode": "blending",
  "toolTipPaddingTop": 4,
  "playbackBarProgressBorderRadius": 0,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowBlurRadius": 3,
  "progressBorderSize": 0,
  "playbackBarHeadShadowBlurRadius": 3,
  "borderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "#F6F6F6",
  "toolTipShadowOpacity": 0.32,
  "paddingBottom": 0,
  "shadow": false,
  "progressBarBackgroundColorDirection": "vertical",
  "minHeight": 50,
  "playbackBarProgressOpacity": 1,
  "playbackBarBottom": 5,
  "playbackBarBorderSize": 0,
  "playbackBarHeadShadowColor": "#000000",
  "toolTipFontColor": "#606060",
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderRadius": 0,
  "paddingTop": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "progressBarOpacity": 1,
  "toolTipShadowVerticalLength": 36,
  "progressBackgroundColorDirection": "vertical",
  "toolTipFontSize": 12,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "class": "ViewerArea",
  "playbackBarBorderColor": "#FFFFFF",
  "playbackBarHeadBorderColor": "#000000",
  "playbackBarHeadShadowOpacity": 0.7,
  "playbackBarProgressBorderSize": 0,
  "toolTipTextShadowColor": "#000000",
  "progressBarBorderRadius": 0,
  "height": "100%",
  "playbackBarHeadShadow": true,
  "width": "100%",
  "toolTipShadowColor": "#333333",
  "toolTipShadowHorizontalLength": 36,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarLeft": 0,
  "toolTipShadowBlurRadius": 56,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorRatios": [
   0
  ],
  "progressRight": 0,
  "paddingLeft": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeight": 10,
  "playbackBarHeadOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadShadowVerticalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "minWidth": 100,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "paddingRight": 0,
  "progressBorderRadius": 0,
  "id": "MainViewer",
  "playbackBarBorderRadius": 0,
  "playbackBarHeadWidth": 6,
  "progressBorderColor": "#000000",
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBorderColor": "#000000",
  "toolTipBorderRadius": 3,
  "progressOpacity": 1,
  "progressLeft": 0,
  "toolTipFontWeight": "normal",
  "progressBarBorderSize": 0,
  "toolTipFontStyle": "normal",
  "transitionDuration": 300,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarRight": 0,
  "progressBottom": 0,
  "playbackBarBackgroundOpacity": 1,
  "toolTipBorderSize": 1,
  "progressHeight": 10,
  "playbackBarOpacity": 1
 },
 {
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadowBlurRadius": 8,
  "horizontalAlign": "left",
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 0,
  "selectedItemLabelFontColor": "#00CC33",
  "selectedItemLabelFontSize": 17,
  "layout": "vertical",
  "itemThumbnailShadowOpacity": 0.54,
  "paddingBottom": 0,
  "rollOverItemLabelFontWeight": "bold",
  "selectedItemLabelTextDecoration": "underline",
  "itemVerticalAlign": "middle",
  "shadow": false,
  "minHeight": 20,
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "backgroundOpacity": 0,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemThumbnailShadowVerticalLength": 3,
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 87,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingBottom": 3,
  "paddingTop": 0,
  "class": "ThumbnailList",
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 0,
  "width": 185.05,
  "height": "74.709%",
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "rollOverItemLabelFontSize": 15,
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 50,
  "paddingLeft": 0,
  "rollOverItemLabelTextDecoration": "none",
  "itemMode": "normal",
  "rollOverItemBackgroundOpacity": 0,
  "scrollBarMargin": 2,
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "top": "9.51%",
  "itemThumbnailShadowHorizontalLength": 3,
  "rollOverItemLabelFontColor": "#0099CC",
  "paddingRight": 0,
  "itemOpacity": 1,
  "itemThumbnailShadow": true,
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114",
  "itemBorderRadius": 0,
  "verticalAlign": "top",
  "itemThumbnailOpacity": 1,
  "itemBackgroundColor": [],
  "data": {
   "name": "ThumbnailList35762"
  },
  "itemLabelFontStyle": "normal",
  "scrollBarOpacity": 0.5,
  "itemThumbnailWidth": 136,
  "gap": 1,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "right": "0.03%",
  "itemBackgroundColorRatios": [],
  "itemLabelPosition": "bottom"
 },
 {
  "borderSize": 0,
  "horizontalAlign": "center",
  "height": "5.582%",
  "width": "37.846%",
  "borderRadius": 0,
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "top": "0.05%",
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "minWidth": 1,
  "maxWidth": 1694,
  "paddingRight": 0,
  "cursor": "hand",
  "minHeight": 1,
  "shadow": false,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTV Leters"
  },
  "verticalAlign": "middle",
  "left": "29.2%",
  "paddingTop": 0,
  "maxHeight": 145,
  "class": "Image"
 },
 {
  "borderSize": 0,
  "horizontalAlign": "center",
  "height": "6.604%",
  "width": "9.212%",
  "borderRadius": 0,
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "paddingLeft": 0,
  "paddingBottom": 0,
  "scaleMode": "fit_inside",
  "top": "0.05%",
  "minWidth": 1,
  "maxWidth": 1412,
  "paddingRight": 0,
  "minHeight": 1,
  "shadow": false,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTV Logo"
  },
  "verticalAlign": "middle",
  "paddingTop": 0,
  "maxHeight": 800,
  "right": "24.72%",
  "class": "Image"
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   "this.MapViewer"
  ],
  "overflow": "visible",
  "scrollBarVisible": "rollOver",
  "gap": 0,
  "horizontalAlign": "left",
  "height": "80.818%",
  "width": "100%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "paddingLeft": 10,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 75,
  "visible": false,
  "paddingRight": 170,
  "minHeight": 1,
  "shadow": false,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "data": {
   "name": "Container18244"
  },
  "verticalAlign": "bottom",
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "scrollBarOpacity": 0,
  "contentOpaque": false,
  "class": "Container"
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "children": [
     {
      "borderSize": 0,
      "horizontalAlign": "right",
      "fontSize": 42,
      "width": "44.135%",
      "height": "48%",
      "textDecoration": "none",
      "fontFamily": "Arial",
      "text": "Floor Plan",
      "borderRadius": 0,
      "paddingLeft": 0,
      "paddingBottom": 0,
      "fontWeight": "normal",
      "fontStyle": "normal",
      "minWidth": 60,
      "maxWidth": 8000,
      "paddingRight": 0,
      "minHeight": 60,
      "shadow": false,
      "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
      "backgroundOpacity": 0,
      "data": {
       "name": "Label20305"
      },
      "verticalAlign": "middle",
      "fontColor": "#000000",
      "paddingTop": 0,
      "maxHeight": 8000,
      "class": "Label"
     },
     {
      "borderSize": 0,
      "mode": "toggle",
      "width": 57.3,
      "horizontalAlign": "center",
      "height": 57.5,
      "borderRadius": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png",
      "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
      "minWidth": 0,
      "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, null, null, false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, null, null, false) }",
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingRight": 0,
      "minHeight": 0,
      "shadow": false,
      "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49925"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "paddingTop": 0,
      "class": "IconButton"
     }
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "horizontalAlign": "center",
    "height": "100%",
    "width": "75%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "paddingRight": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_14C78FA6_02B9_D901_4106_D4A19767B3C0",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "data": {
     "name": "1left"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "class": "Container"
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "children": [
     {
      "borderSize": 0,
      "mode": "toggle",
      "width": 62.65,
      "horizontalAlign": "center",
      "height": 56.91,
      "borderRadius": 0,
      "paddingLeft": 0,
      "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png",
      "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
      "minWidth": 0,
      "cursor": "hand",
      "paddingBottom": 0,
      "paddingRight": 0,
      "minHeight": 0,
      "shadow": false,
      "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "transparencyActive": true,
      "paddingTop": 0,
      "class": "IconButton"
     },
     "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
    ],
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "horizontalAlign": "center",
    "height": "100%",
    "width": "25%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "paddingRight": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_1430A2C2_02BA_AB00_40E2_9CE642BF8400",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "data": {
     "name": "1middle"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "class": "Container"
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "overflow": "scroll",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "horizontalAlign": "right",
    "height": "100%",
    "width": "25%",
    "scrollBarColor": "#000000",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "paddingLeft": 0,
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingBottom": 0,
    "paddingRight": 0,
    "minHeight": 1,
    "shadow": false,
    "id": "Container_14A15C37_02BB_BF00_4151_81CC9AE724F2",
    "layout": "horizontal",
    "backgroundOpacity": 0,
    "data": {
     "name": "1right"
    },
    "verticalAlign": "bottom",
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "class": "Container"
   }
  ],
  "overflow": "visible",
  "scrollBarVisible": "rollOver",
  "horizontalAlign": "center",
  "height": "10%",
  "scrollBarColor": "#000000",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "paddingLeft": 2,
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingBottom": 2,
  "paddingRight": 2,
  "minHeight": 1,
  "shadow": false,
  "id": "Container_EE9C3224_FD66_57E8_41EF_73BEBD124236",
  "layout": "horizontal",
  "backgroundOpacity": 0,
  "data": {
   "name": "Global"
  },
  "verticalAlign": "middle",
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "contentOpaque": false,
  "class": "Container"
 },
 {
  "toolTipShadowVerticalLength": 0,
  "borderSize": 0,
  "toolTipBorderSize": 1,
  "toolTipOpacity": 1,
  "toolTipPaddingLeft": 6,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "mode": "toggle",
  "width": 67.4,
  "toolTipPaddingTop": 4,
  "horizontalAlign": "center",
  "height": 62.29,
  "toolTipTextShadowOpacity": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipShadowHorizontalLength": 0,
  "borderRadius": 0,
  "toolTipShadowBlurRadius": 3,
  "toolTipBackgroundColor": "transparent",
  "toolTipShadowSpread": 0,
  "paddingLeft": 0,
  "paddingBottom": 0,
  "toolTipShadowOpacity": 0.32,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "minWidth": 1,
  "maxWidth": 128,
  "bottom": "0.04%",
  "paddingRight": 0,
  "cursor": "hand",
  "toolTip": "Fullscreen",
  "shadow": false,
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "backgroundOpacity": 0,
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "transparencyActive": true,
  "toolTipBorderColor": "#767676",
  "toolTipFontColor": "#606060",
  "toolTipFontStyle": "normal",
  "toolTipBorderRadius": 3,
  "toolTipPaddingBottom": 4,
  "toolTipFontWeight": "normal",
  "toolTipFontSize": 12,
  "paddingTop": 0,
  "maxHeight": 128,
  "right": "0.06%",
  "toolTipPaddingRight": 6,
  "class": "IconButton"
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "overflow": "visible",
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_75141A89_6821_E0E9_41BA_420D5BF3A719.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "horizontalAlign": "left",
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": true,
 "paddingLeft": 0,
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "unregisterKey": function(key){  delete window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "existsKey": function(key){  return key in window; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "getKey": function(key){  return window[key]; },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } }
 },
 "paddingBottom": 0,
 "paddingRight": 0,
 "minHeight": 20,
 "shadow": false,
 "id": "rootPlayer",
 "layout": "absolute",
 "data": {
  "name": "Player463"
 },
 "verticalAlign": "top",
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "backgroundPreloadEnabled": true,
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "class": "Player"
})