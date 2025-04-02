TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "frameTransitionTime": 1000,
  "id": "panorama_F92B1EB7_F394_6012_418E_859B15353D32",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 1798.8,
    "y": 559.69,
    "class": "PanoramaMapLocation",
    "angle": 310.01,
    "map": {
     "fieldOfViewOverlayInsideOpacity": 0.15,
     "fieldOfViewOverlayOutsideColor": "#000000",
     "overlays": [
      {
       "id": "overlay_FB66CF96_F772_EF18_4198_42587745DFC8",
       "map": {
        "offsetY": 0,
        "x": 1753.8,
        "width": 90,
        "y": 514.69,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_0_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 0)"
        }
       ],
       "image": {
        "x": 1753.8,
        "y": 514.69,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_0.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_FB999D17_F773_7319_41D4_32223D8BDC63",
       "map": {
        "offsetY": 0,
        "x": 1551.12,
        "width": 90,
        "y": 468.41,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_1_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 1)"
        }
       ],
       "image": {
        "x": 1551.12,
        "y": 468.41,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_1.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_FB084DB3_F773_F318_41E6_F7520516570C",
       "map": {
        "offsetY": 0,
        "x": 1234.9,
        "width": 90,
        "y": 500.27,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_2_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 2)"
        }
       ],
       "image": {
        "x": 1234.9,
        "y": 500.27,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_2.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_FA4B2AE7_F773_1138_41E6_5D7048EBBE1E",
       "map": {
        "offsetY": 0,
        "x": 2258.58,
        "width": 90,
        "y": 378,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_3_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 3)"
        }
       ],
       "image": {
        "x": 2258.58,
        "y": 378,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_3.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_FBD6CF86_F772_EFF8_41B6_E83E1FFD8DFF",
       "map": {
        "offsetY": 0,
        "x": 1119.88,
        "width": 90,
        "y": 135.02,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_4_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 4)"
        }
       ],
       "image": {
        "x": 1119.88,
        "y": 135.02,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_4.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_FA2F4EBA_F771_310B_41D6_3304BD83B083",
       "map": {
        "offsetY": 0,
        "x": 872.58,
        "width": 90,
        "y": 334.46,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_5_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 5)"
        }
       ],
       "image": {
        "x": 872.58,
        "y": 334.46,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_5.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_FAB8DF1C_F771_2F08_41E6_A3248D718BA0",
       "map": {
        "offsetY": 0,
        "x": 874.45,
        "width": 90,
        "y": 526.55,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_6_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 6)"
        }
       ],
       "image": {
        "x": 874.45,
        "y": 526.55,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_6.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_F94C9BE6_F771_1738_41E7_40D9EFAF9139",
       "map": {
        "offsetY": 0,
        "x": 349.66,
        "width": 90,
        "y": 450.46,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_7_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 7)"
        }
       ],
       "image": {
        "x": 349.66,
        "y": 450.46,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_7.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      },
      {
       "id": "overlay_F5D7F8A0_F8E8_EDE6_41ED_A79C515BDCDA",
       "map": {
        "offsetY": 0,
        "x": 1559.65,
        "width": 90,
        "y": 310.64,
        "height": 90,
        "class": "HotspotMapOverlayMap",
        "offsetX": 0,
        "image": {
         "levels": [
          {
           "height": 28,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_8_map.gif"
          }
         ],
         "class": "ImageResource"
        }
       },
       "rollOverDisplay": false,
       "data": {
        "label": "Image"
       },
       "class": "AreaHotspotMapOverlay",
       "areas": [
        {
         "class": "HotspotMapOverlayArea",
         "mapColor": "#FF0000",
         "click": "this.mainPlayList.set('selectedIndex', 9)"
        }
       ],
       "image": {
        "x": 1559.65,
        "y": 310.64,
        "width": 90,
        "height": 90,
        "class": "HotspotMapOverlayImage",
        "image": {
         "levels": [
          {
           "height": 56,
           "class": "ImageResourceLevel",
           "width": 56,
           "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_8.png"
          }
         ],
         "class": "ImageResource"
        }
       },
       "useHandCursor": true
      }
     ],
     "initialZoomFactor": 1,
     "minimumZoomFactor": 0.5,
     "maximumZoomFactor": 1.2,
     "width": 2560,
     "id": "map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
     "height": 902,
     "class": "Map",
     "fieldOfViewOverlayRadiusScale": 0.14,
     "image": {
      "levels": [
       {
        "height": 563,
        "class": "ImageResourceLevel",
        "width": 1600,
        "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B.png"
       },
       {
        "height": 281,
        "class": "ImageResourceLevel",
        "grayscale": true,
        "width": 800,
        "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_lq.png"
       }
      ],
      "class": "ImageResource"
     },
     "label": "CR1001floorplan2",
     "scaleMode": "fit_inside",
     "fieldOfViewOverlayOutsideOpacity": 0,
     "fieldOfViewOverlayInsideColor": "#0066FF",
     "thumbnailUrl": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_t.png"
    }
   }
  ],
  "pitch": 0,
  "hfovMax": 132,
  "label": "Entry",
  "hfovMin": 60,
  "vfov": 180,
  "hfov": 360,
  "partial": false,
  "frameDisplayTime": 3000,
  "thumbnailUrl": "media/panorama_F92B1EB7_F394_6012_418E_859B15353D32_1_t.jpg"
 },
 {
  "buttonZoomOut": {
   "toolTipFontStyle": "normal",
   "horizontalAlign": "center",
   "toolTipFontFamily": "Arial",
   "toolTipBorderSize": 1,
   "toolTipDisplayTime": 600,
   "mode": "push",
   "toolTipPaddingTop": 4,
   "width": 30,
   "toolTipFontColor": "#606060",
   "minWidth": 0,
   "toolTipShadowSpread": 0,
   "toolTipOpacity": 1,
   "toolTipPaddingBottom": 4,
   "toolTipPaddingRight": 6,
   "toolTipBorderRadius": 3,
   "paddingTop": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "backgroundOpacity": 0,
   "toolTip": "Zoom Out",
   "toolTipFontSize": 12,
   "toolTipShadowHorizontalLength": 0,
   "paddingLeft": 0,
   "toolTipTextShadowColor": "#000000",
   "shadow": false,
   "height": 30,
   "toolTipFontWeight": "normal",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625.png",
   "cursor": "hand",
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_pressed.png",
   "toolTipShadowVerticalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625_rollover.png",
   "toolTipTextShadowOpacity": 0,
   "data": {
    "name": "Button1207"
   },
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "transparencyActive": false,
   "minHeight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "paddingBottom": 0,
   "toolTipPaddingLeft": 6
  },
  "buttonZoomIn": {
   "toolTipFontStyle": "normal",
   "horizontalAlign": "center",
   "toolTipFontFamily": "Arial",
   "toolTipBorderSize": 1,
   "toolTipDisplayTime": 600,
   "mode": "push",
   "toolTipPaddingTop": 4,
   "width": 30,
   "toolTipFontColor": "#606060",
   "minWidth": 0,
   "toolTipShadowSpread": 0,
   "toolTipOpacity": 1,
   "toolTipPaddingBottom": 4,
   "toolTipPaddingRight": 6,
   "toolTipBorderRadius": 3,
   "paddingTop": 0,
   "toolTipTextShadowBlurRadius": 3,
   "toolTipBorderColor": "#767676",
   "backgroundOpacity": 0,
   "toolTip": "Zoom In",
   "toolTipFontSize": 12,
   "toolTipShadowHorizontalLength": 0,
   "paddingLeft": 0,
   "toolTipTextShadowColor": "#000000",
   "shadow": false,
   "height": 30,
   "toolTipFontWeight": "normal",
   "iconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411.png",
   "cursor": "hand",
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_pressed.png",
   "toolTipShadowVerticalLength": 0,
   "rollOverIconURL": "skin/IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411_rollover.png",
   "toolTipTextShadowOpacity": 0,
   "data": {
    "name": "Button1208"
   },
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 3,
   "transparencyActive": false,
   "minHeight": 0,
   "toolTipBackgroundColor": "#F6F6F6",
   "paddingBottom": 0,
   "toolTipPaddingLeft": 6
  },
  "buttonPlayRight": {
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "minWidth": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "height": 38,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40.png",
   "cursor": "hand",
   "borderRadius": 0,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40",
   "shadow": false,
   "class": "IconButton",
   "paddingRight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_pressed.png",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40_rollover.png",
   "data": {
    "name": "Button1198"
   },
   "transparencyActive": false,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "preloadEnabled": false,
  "mouseControlMode": "drag_rotation",
  "viewerArea": "this.MainViewer",
  "gyroscopeEnabled": true,
  "buttonPlayLeft": {
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "minWidth": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "height": 38,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247.png",
   "cursor": "hand",
   "borderRadius": 0,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247",
   "shadow": false,
   "class": "IconButton",
   "paddingRight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_pressed.png",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247_rollover.png",
   "data": {
    "name": "Button1196"
   },
   "transparencyActive": false,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "id": "MainViewerPanoramaPlayer",
  "buttonPause": {
   "horizontalAlign": "center",
   "mode": "toggle",
   "width": 40,
   "minWidth": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "height": 40,
   "paddingLeft": 0,
   "shadow": false,
   "iconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D.png",
   "cursor": "hand",
   "borderRadius": 0,
   "borderSize": 0,
   "id": "IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
   "verticalAlign": "middle",
   "class": "IconButton",
   "paddingRight": 0,
   "pressedIconURL": "skin/IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D_pressed.png",
   "transparencyActive": false,
   "data": {
    "name": "Button1167"
   },
   "minHeight": 0,
   "paddingBottom": 0
  },
  "buttonRestart": {
   "horizontalAlign": "center",
   "mode": "push",
   "width": 38,
   "minWidth": 0,
   "paddingTop": 0,
   "backgroundOpacity": 0,
   "height": 38,
   "paddingLeft": 0,
   "verticalAlign": "middle",
   "iconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440.png",
   "cursor": "hand",
   "borderRadius": 0,
   "borderSize": 0,
   "id": "IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
   "shadow": false,
   "class": "IconButton",
   "paddingRight": 0,
   "pressedIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_pressed.png",
   "rollOverIconURL": "skin/IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440_rollover.png",
   "data": {
    "name": "Button1195"
   },
   "transparencyActive": false,
   "minHeight": 0,
   "paddingBottom": 0
  },
  "gyroscopeVerticalDraggingEnabled": true,
  "class": "PanoramaPlayer",
  "displayPlaybackBar": true,
  "touchControlMode": "drag_rotation"
 },
 {
  "buttonZoomOut": "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
  "movementMode": "constrained",
  "id": "MapViewerMapPlayer",
  "class": "MapPlayer",
  "buttonZoomIn": "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411",
  "viewerArea": {
   "toolTipFontStyle": "normal",
   "toolTipFontFamily": "Arial",
   "playbackBarLeft": 0,
   "toolTipFontColor": "#606060",
   "toolTipTextShadowBlurRadius": 3,
   "toolTipOpacity": 1,
   "toolTipShadowHorizontalLength": 0,
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "playbackBarHeadHeight": 30,
   "paddingTop": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBorderRadius": 4,
   "shadow": false,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "progressBottom": 2,
   "playbackBarHeadBorderSize": 0,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarProgressOpacity": 1,
   "progressBackgroundOpacity": 1,
   "playbackBarHeadBorderRadius": 0,
   "playbackBarHeadShadowOpacity": 0.7,
   "paddingRight": 0,
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarHeadWidth": 6,
   "progressLeft": 10,
   "playbackBarOpacity": 1,
   "toolTipTextShadowOpacity": 0,
   "playbackBarProgressBorderSize": 0,
   "progressBarOpacity": 1,
   "progressOpacity": 1,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "progressBarBackgroundColorDirection": "vertical",
   "toolTipShadowColor": "#333333",
   "playbackBarProgressBorderColor": "#000000",
   "playbackBarHeight": 20,
   "playbackBarHeadBorderColor": "#000000",
   "progressBarBorderSize": 1,
   "progressBarBorderColor": "#000000",
   "toolTipBackgroundColor": "#F6F6F6",
   "paddingBottom": 0,
   "toolTipPaddingLeft": 6,
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarProgressBorderRadius": 0,
   "toolTipBorderSize": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "toolTipDisplayTime": 600,
   "toolTipPaddingTop": 4,
   "width": "100%",
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarBorderSize": 2,
   "minWidth": 1,
   "playbackBarBorderRadius": 4,
   "toolTipShadowSpread": 0,
   "playbackBarBackgroundOpacity": 1,
   "transitionMode": "blending",
   "playbackBarBorderColor": "#AAAAAA",
   "playbackBarRight": 0,
   "height": "100%",
   "toolTipPaddingBottom": 4,
   "toolTipPaddingRight": 6,
   "playbackBarHeadOpacity": 1,
   "toolTipBorderRadius": 3,
   "progressHeight": 20,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "toolTipTextShadowColor": "#000000",
   "toolTipBorderColor": "#767676",
   "playbackBarHeadShadow": true,
   "progressBorderSize": 2,
   "toolTipFontSize": 12,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "paddingLeft": 0,
   "toolTipFontWeight": "normal",
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "transitionDuration": 500,
   "top": "0%",
   "borderRadius": 0,
   "toolTipShadowOpacity": 1,
   "progressBarBorderRadius": 4,
   "borderSize": 0,
   "id": "MapViewer",
   "progressBackgroundColorDirection": "vertical",
   "playbackBarBottom": 0,
   "playbackBarHeadShadowColor": "#000000",
   "progressBorderColor": "#AAAAAA",
   "toolTipShadowVerticalLength": 0,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "class": "ViewerArea",
   "progressRight": 10,
   "toolTipShadowBlurRadius": 3,
   "minHeight": 1,
   "left": "0%"
  }
 },
 {
  "timeToIdle": 2500,
  "id": "panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -13.31,
     "targetPitch": -6.47,
     "path": "longest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "idleSequence": {
   "movements": [],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "manualRotationSpeed": 1805,
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": -130.66,
   "pitch": -13.2
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_2_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "frameTransitionTime": 1000,
  "id": "panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 1596.12,
    "y": 513.41,
    "class": "PanoramaMapLocation",
    "angle": 310.32,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "pitch": 0,
  "hfovMax": 131,
  "label": "Kitchen",
  "hfovMin": 60,
  "vfov": 180,
  "hfov": 360,
  "partial": false,
  "frameDisplayTime": 3000,
  "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_t.jpg"
 },
 {
  "id": "panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 32.78,
     "targetPitch": -9.61,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": -141.78,
   "pitch": -22.95
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "frameTransitionTime": 1000,
  "id": "panorama_FD16EB22_F394_2032_41BE_26631E398263",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 1279.9,
    "y": 545.27,
    "class": "PanoramaMapLocation",
    "angle": -54.01,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "pitch": 0,
  "hfovMax": 135,
  "label": "Kitchen",
  "hfovMin": 60,
  "vfov": 180,
  "hfov": 360,
  "partial": false,
  "frameDisplayTime": 3000,
  "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_t.jpg"
 },
 {
  "id": "panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 134.4,
     "targetPitch": -10.99,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 122,
   "class": "PanoramaCameraPosition",
   "yaw": -177.99,
   "pitch": -17.01
  }
 },
 {
  "frames": [
   {
    "sphere": {
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
     ],
     "class": "ImageResource"
    },
    "class": "SphericPanoramaFrame",
    "overlays": [
     {
      "bleaching": 0,
      "id": "overlay_FD6DC7C8_F3AC_207E_41EC_71CBC41CEFD8",
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.24,
      "yaw": 31.4,
      "pitch": -6.34
     },
     {
      "bleaching": 0,
      "id": "overlay_FC34DC6B_F3B4_E032_41E7_BC1B7D380739",
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.31,
      "yaw": 38.19,
      "pitch": -6.47
     },
     {
      "bleaching": 0,
      "id": "overlay_FC1AB690_F3B4_20EE_41E4_C6FE9E6B55F9",
      "class": "LensFlarePanoramaOverlay",
      "bleachingDistance": 0.3,
      "yaw": 44.97,
      "pitch": -5.59
     }
    ],
    "thumbnailUrl": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_t.jpg"
   }
  ],
  "id": "panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
  "class": "Panorama",
  "mapLocations": [
   {
    "x": 2303.58,
    "y": 423,
    "class": "PanoramaMapLocation",
    "angle": 51.44,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "label": "Deck",
  "vfov": 180,
  "hfov": 360,
  "hfovMin": 60,
  "partial": false,
  "thumbnailUrl": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_t.jpg"
 },
 {
  "id": "panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_in",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 323,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 7.96
    },
    {
     "yawDelta": 18.5,
     "class": "DistancePanoramaCameraMovement",
     "easing": "cubic_out",
     "yawSpeed": 7.96
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 0,
   "pitch": 0
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "frameTransitionTime": 1000,
  "id": "panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 1164.88,
    "y": 180.02,
    "class": "PanoramaMapLocation",
    "angle": 295.79,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "label": "Hallway",
  "vfov": 180,
  "hfov": 360,
  "hfovMin": 60,
  "partial": false,
  "frameDisplayTime": 3000,
  "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_t.jpg"
 },
 {
  "id": "panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -30.15,
     "targetPitch": -10.99,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 166.43,
   "pitch": -18.07
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
  "class": "Panorama",
  "mapLocations": [
   {
    "x": 917.58,
    "y": 379.46,
    "class": "PanoramaMapLocation",
    "angle": -60.26,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "label": "Laundry",
  "vfov": 180,
  "hfov": 360,
  "hfovMin": 60,
  "partial": false,
  "thumbnailUrl": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_t.jpg"
 },
 {
  "id": "panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": -131.89,
     "targetPitch": -4.08,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "linear",
     "pitchSpeed": 25.61,
     "yawSpeed": 50.45
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 58.36,
   "pitch": -4.92
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   },
   {
    "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "frameTransitionTime": 1000,
  "id": "panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
  "class": "LivePanorama",
  "mapLocations": [
   {
    "x": 919.45,
    "y": 571.55,
    "class": "PanoramaMapLocation",
    "angle": 308.92,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "pitch": 0,
  "hfovMax": 132,
  "label": "Bathroom",
  "hfovMin": 60,
  "vfov": 180,
  "hfov": 360,
  "partial": false,
  "frameDisplayTime": 3000,
  "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_t.jpg"
 },
 {
  "id": "panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
  "initialSequence": {
   "movements": [
    {
     "targetYaw": 5.15,
     "targetPitch": -14.88,
     "path": "shortest",
     "class": "TargetPanoramaCameraMovement",
     "easing": "cubic_in_out",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 123,
   "class": "PanoramaCameraPosition",
   "yaw": -150.34,
   "pitch": -15.76
  }
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
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
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
  "class": "Panorama",
  "mapLocations": [
   {
    "x": 394.66,
    "y": 495.46,
    "class": "PanoramaMapLocation",
    "angle": -56.67,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "label": "Bedroom",
  "vfov": 180,
  "hfov": 360,
  "hfovMin": 60,
  "partial": false,
  "thumbnailUrl": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_t.jpg"
 },
 {
  "id": "panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 360,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 14.32
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 82.58,
   "pitch": -8.09
  }
 },
 {
  "class": "Video",
  "label": "Columbia River 1001 Drone Video 720p",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_E045C316_F4FC_2012_41DE_36747AB46079.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_E045C316_F4FC_2012_41DE_36747AB46079",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside",
  "thumbnailUrl": "media/video_E045C316_F4FC_2012_41DE_36747AB46079_t.jpg"
 },
 {
  "id": "MainViewerVideoPlayer",
  "buttonPause": "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
  "buttonRestart": "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
  "class": "VideoPlayer",
  "viewerArea": "this.MainViewer",
  "displayPlaybackBar": true
 },
 {
  "frames": [
   {
    "thumbnailUrl": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_t.jpg",
    "class": "SphericPanoramaFrame",
    "sphere": {
     "levels": [
      {
       "height": 2048,
       "class": "ImageResourceLevel",
       "width": 4096,
       "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C.jpeg"
      }
     ],
     "class": "ImageResource"
    }
   }
  ],
  "id": "panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
  "class": "Panorama",
  "mapLocations": [
   {
    "x": 1604.65,
    "y": 355.64,
    "class": "PanoramaMapLocation",
    "angle": 0,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "pitch": 0,
  "hfovMax": 120,
  "label": "360 Rendering",
  "hfovMin": 53,
  "vfov": 180,
  "hfov": 360,
  "partial": false,
  "thumbnailUrl": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_t.jpg"
 },
 {
  "id": "panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera",
  "initialSequence": {
   "movements": [
    {
     "yawDelta": 360,
     "class": "DistancePanoramaCameraMovement",
     "easing": "linear",
     "yawSpeed": 15.91
    }
   ],
   "restartMovementOnUserInteraction": false,
   "class": "PanoramaCameraSequence"
  },
  "class": "PanoramaCamera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "hfov": 81,
   "class": "PanoramaCameraPosition",
   "yaw": 90.64,
   "pitch": -2.44
  }
 },
 {
  "class": "PlayList",
  "id": "mainPlayList",
  "items": [
   {
    "id": "PanoramaPlayListItem_F650E97C_F8EB_6F5D_41E3_92AC64B734EB",
    "media": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F650E97C_F8EB_6F5D_41E3_92AC64B734EB, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)"
   },
   {
    "id": "PanoramaPlayListItem_F62AF97C_F8EB_6F5E_41E5_7269E479322B",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F62AF97C_F8EB_6F5E_41E5_7269E479322B, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "id": "PanoramaPlayListItem_F62A097C_F8EB_6F5E_41E4_B6BECA876C7F",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F62A097C_F8EB_6F5E_41E4_B6BECA876C7F, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "id": "PanoramaPlayListItem_F62A497E_F8EB_6F5D_41E8_1E05D2C32D62",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F62A497E_F8EB_6F5D_41E8_1E05D2C32D62, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "id": "PanoramaPlayListItem_F628097F_F8EB_6F5B_41DE_9DE31992898B",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F628097F_F8EB_6F5B_41DE_9DE31992898B, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "id": "PanoramaPlayListItem_F629B97F_F8EB_6F5B_41E9_11F69394040C",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F629B97F_F8EB_6F5B_41E9_11F69394040C, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "id": "PanoramaPlayListItem_F62B597F_F8EB_6F5B_41ED_8B1E52A8B697",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F62B597F_F8EB_6F5B_41ED_8B1E52A8B697, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "id": "PanoramaPlayListItem_F628897F_F8EB_6F5B_41CE_D3EC80860C82",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F628897F_F8EB_6F5B_41CE_D3EC80860C82, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E045C316_F4FC_2012_41DE_36747AB46079",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 8, 9)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 8, this.video_E045C316_F4FC_2012_41DE_36747AB46079)"
   },
   {
    "id": "PanoramaPlayListItem_F626B980_F8EB_6FA5_41E5_895895591398",
    "media": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
    "start": "this.setMapLocation(this.PanoramaPlayListItem_F626B980_F8EB_6FA5_41E5_895895591398, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "camera": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "thumbnaillist5245_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 0, 1)",
    "camera": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 1, 2)",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 2, 3)",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 3, 4)",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 4, 5)",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 5, 6)",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 6, 7)",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 7, 8)",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.thumbnaillist5245_playlist, 8, 0)",
    "camera": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
  "items": [
   {
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer)",
    "media": "this.video_E045C316_F4FC_2012_41DE_36747AB46079",
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist, 0, this.video_E045C316_F4FC_2012_41DE_36747AB46079)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
  "items": [
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 0, 1)",
    "camera": "this.panorama_F92B1EB7_F394_6012_418E_859B15353D32_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 1, 2)",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 2, 3)",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 3, 4)",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 4, 5)",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 5, 6)",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 6, 7)",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 7, 8)",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera"
   },
   {
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E045C316_F4FC_2012_41DE_36747AB46079",
    "class": "VideoPlayListItem",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, 9)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 8, this.video_E045C316_F4FC_2012_41DE_36747AB46079)"
   },
   {
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
    "class": "PanoramaPlayListItem",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist, 9, 0)",
    "camera": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera"
   }
  ]
 },
 "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
 {
  "class": "PlayList",
  "id": "playList_F6559979_F8EB_6F66_41D4_9F7E132D057D",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "playList_F6558979_F8EB_6F66_41E2_AD79347F1EEC",
  "items": [
   {
    "class": "MapPlayListItem",
    "player": "this.MapViewerMapPlayer",
    "media": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
    "begin": "this.MapViewerMapPlayer.set('movementMode', 'free_drag_and_rotation')"
   }
  ]
 },
 {
  "data": {
   "label": "More Than Just a Home"
  },
  "id": "audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9",
  "audio": {
   "class": "AudioResource",
   "mp3Url": "media/audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9.mp3",
   "oggUrl": "media/audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9.ogg"
  },
  "class": "MediaAudio",
  "autoplay": true
 }
], "children": [
 {
  "toolTipFontStyle": "normal",
  "toolTipFontFamily": "Arial",
  "playbackBarLeft": 0,
  "toolTipFontColor": "#606060",
  "toolTipTextShadowBlurRadius": 3,
  "toolTipOpacity": 1,
  "toolTipShadowHorizontalLength": 0,
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "playbackBarHeadHeight": 30,
  "paddingTop": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "progressBorderRadius": 4,
  "playbackBarHeadShadowVerticalLength": 0,
  "shadow": false,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "progressBottom": 1,
  "playbackBarHeadBorderSize": 0,
  "playbackBarBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "playbackBarProgressOpacity": 1,
  "progressBackgroundOpacity": 1,
  "playbackBarHeadBorderRadius": 0,
  "playbackBarHeadShadowOpacity": 0.7,
  "paddingRight": 0,
  "playbackBarProgressBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarHeadWidth": 6,
  "progressLeft": 10,
  "playbackBarOpacity": 1,
  "toolTipTextShadowOpacity": 0,
  "playbackBarProgressBorderSize": 0,
  "progressBarOpacity": 1,
  "progressOpacity": 1,
  "progressBarBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "progressBarBackgroundColorDirection": "vertical",
  "toolTipShadowColor": "#333333",
  "playbackBarProgressBorderColor": "#000000",
  "playbackBarHeight": 20,
  "playbackBarHeadBorderColor": "#000000",
  "progressBarBorderSize": 1,
  "progressBarBorderColor": "#000000",
  "toolTipBackgroundColor": "#F6F6F6",
  "paddingBottom": 0,
  "toolTipPaddingLeft": 6,
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarProgressBorderRadius": 0,
  "toolTipBorderSize": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "progressBarBackgroundColorRatios": [
   0,
   1
  ],
  "toolTipDisplayTime": 600,
  "toolTipPaddingTop": 4,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarBorderSize": 2,
  "minWidth": 100,
  "playbackBarBorderRadius": 4,
  "toolTipShadowSpread": 0,
  "playbackBarBackgroundOpacity": 1,
  "transitionMode": "blending",
  "playbackBarBorderColor": "#AAAAAA",
  "playbackBarRight": 0,
  "toolTipPaddingBottom": 4,
  "toolTipPaddingRight": 6,
  "playbackBarHeadOpacity": 1,
  "toolTipBorderRadius": 3,
  "progressHeight": 20,
  "progressBackgroundColor": [
   "#EEEEEE",
   "#CCCCCC"
  ],
  "toolTipTextShadowColor": "#000000",
  "toolTipFontSize": 12,
  "playbackBarHeadShadow": true,
  "progressBorderSize": 2,
  "toolTipBorderColor": "#767676",
  "playbackBarProgressBackgroundColor": [
   "#222222",
   "#444444"
  ],
  "paddingLeft": 0,
  "toolTipFontWeight": "normal",
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "transitionDuration": 500,
  "top": 77,
  "borderRadius": 0,
  "toolTipShadowOpacity": 1,
  "progressBarBorderRadius": 4,
  "bottom": 92,
  "borderSize": 0,
  "id": "MainViewer",
  "progressBackgroundColorDirection": "vertical",
  "playbackBarBottom": 10,
  "playbackBarHeadShadowColor": "#000000",
  "progressBorderColor": "#AAAAAA",
  "toolTipShadowVerticalLength": 0,
  "progressBackgroundColorRatios": [
   0,
   1
  ],
  "class": "ViewerArea",
  "progressRight": 10,
  "toolTipShadowBlurRadius": 3,
  "minHeight": 50,
  "left": 0,
  "right": 0
 },
 {
  "backgroundColor": [
   "#000000"
  ],
  "itemThumbnailShadowVerticalLength": 3,
  "itemPaddingTop": 3,
  "itemLabelGap": 8,
  "backgroundColorRatios": [
   0
  ],
  "itemLabelFontFamily": "Arial",
  "itemThumbnailShadowHorizontalLength": 3,
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadowColor": "#000000",
  "paddingTop": 10,
  "itemPaddingRight": 3,
  "itemVerticalAlign": "middle",
  "itemMode": "normal",
  "itemHorizontalAlign": "center",
  "selectedItemLabelFontColor": "#FFFF00",
  "shadow": false,
  "maxWidth": 800,
  "itemLabelTextDecoration": "none",
  "verticalAlign": "top",
  "backgroundColorDirection": "vertical",
  "paddingRight": 20,
  "itemThumbnailShadow": true,
  "rollOverItemLabelFontColor": "#FF0000",
  "itemThumbnailScaleMode": "fit_outside",
  "itemThumbnailOpacity": 1,
  "itemBorderRadius": 0,
  "itemThumbnailHeight": 70,
  "maxHeight": 800,
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailBorderRadius": 5,
  "itemLabelFontColor": "#FFFFFF",
  "itemPaddingLeft": 3,
  "layout": "vertical",
  "itemThumbnailShadowBlurRadius": 4,
  "scrollBarOpacity": 0.5,
  "paddingBottom": 10,
  "horizontalAlign": "left",
  "width": 158.5,
  "minWidth": 0,
  "selectedItemLabelFontWeight": "bold",
  "gap": 0,
  "itemThumbnailShadowOpacity": 0.8,
  "itemBackgroundColorRatios": [],
  "paddingLeft": 20,
  "backgroundOpacity": 0.2,
  "scrollBarColor": "#FFFFFF",
  "rollOverItemLabelFontWeight": "bold",
  "itemOpacity": 1,
  "top": "8.02%",
  "itemBackgroundColor": [],
  "itemLabelFontStyle": "normal",
  "borderRadius": 5,
  "bottom": "10.1%",
  "borderSize": 0,
  "id": "thumbnaillist5245",
  "itemLabelFontSize": 14,
  "class": "ThumbnailList",
  "scrollBarMargin": 2,
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontWeight": "normal",
  "itemLabelPosition": "bottom",
  "scrollBarWidth": 10,
  "data": {
   "name": "ThumbnailList28173"
  },
  "itemPaddingBottom": 3,
  "minHeight": 0,
  "itemThumbnailShadowSpread": 1,
  "right": "0%",
  "playList": "this.thumbnaillist5245_playlist",
  "itemThumbnailWidth": 100
 },
 {
  "children": [
   {
    "horizontalAlign": "center",
    "fontSize": 38,
    "width": 435.5,
    "minWidth": 30,
    "fontFamily": "Arial",
    "paddingTop": 0,
    "text": "Columbia River 1001",
    "backgroundOpacity": 0,
    "fontStyle": "normal",
    "textDecoration": "none",
    "paddingLeft": 0,
    "shadow": false,
    "fontWeight": "bold",
    "borderRadius": 0,
    "borderSize": 0,
    "id": "label4056",
    "height": "100%",
    "verticalAlign": "middle",
    "class": "Label",
    "paddingRight": 0,
    "data": {
     "name": "Label28174"
    },
    "fontColor": "#666666",
    "minHeight": 16,
    "paddingBottom": 0
   },
   {
    "children": [
     {
      "toolTipFontStyle": "normal",
      "horizontalAlign": "center",
      "toolTipFontFamily": "Arial",
      "toolTipBorderSize": 1,
      "toolTipDisplayTime": 600,
      "mode": "toggle",
      "toolTipPaddingTop": 4,
      "width": 40,
      "toolTipFontColor": "#606060",
      "minWidth": 0,
      "toolTipShadowSpread": 0,
      "toolTipOpacity": 1,
      "toolTipPaddingBottom": 4,
      "toolTipPaddingRight": 6,
      "toolTipBorderRadius": 3,
      "paddingTop": 0,
      "toolTipTextShadowBlurRadius": 3,
      "toolTipBorderColor": "#767676",
      "backgroundOpacity": 0,
      "toolTip": "Mute",
      "toolTipFontSize": 12,
      "toolTipShadowHorizontalLength": 0,
      "paddingLeft": 0,
      "toolTipTextShadowColor": "#000000",
      "shadow": false,
      "height": 40,
      "toolTipFontWeight": "normal",
      "iconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75.png",
      "cursor": "hand",
      "borderRadius": 0,
      "toolTipShadowOpacity": 1,
      "borderSize": 0,
      "id": "IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
      "verticalAlign": "middle",
      "class": "IconButton",
      "paddingRight": 0,
      "pressedIconURL": "skin/IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75_pressed.png",
      "toolTipShadowVerticalLength": 0,
      "transparencyActive": true,
      "toolTipTextShadowOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "toolTipShadowColor": "#333333",
      "toolTipShadowBlurRadius": 3,
      "minHeight": 0,
      "toolTipBackgroundColor": "#F6F6F6",
      "paddingBottom": 0,
      "toolTipPaddingLeft": 6
     },
     "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_C80D0BF61440",
     {
      "children": [
       {
        "children": [
         "this.IconButton_4EEC4AA5_5E2B_1FC1_41CD_369B6BFE5247"
        ],
        "contentOpaque": false,
        "horizontalAlign": "center",
        "backgroundColor": [
         "#FFFFFF"
        ],
        "width": 47,
        "backgroundColorRatios": [
         0
        ],
        "minWidth": 20,
        "gap": 10,
        "scrollBarVisible": "rollOver",
        "paddingTop": 0,
        "creationPolicy": "inAdvance",
        "backgroundOpacity": 1,
        "paddingLeft": 0,
        "scrollBarColor": "#000000",
        "shadow": false,
        "height": "100%",
        "backgroundColorDirection": "vertical",
        "borderRadius": 0,
        "borderSize": 0,
        "id": "Container_4EEC4AA5_5E2B_1FC1_41B6_F59E8DCAC55A",
        "verticalAlign": "middle",
        "scrollBarMargin": 2,
        "paddingRight": 0,
        "overflow": "hidden",
        "data": {
         "name": "Container1202"
        },
        "class": "Container",
        "scrollBarWidth": 10,
        "layout": "vertical",
        "minHeight": 20,
        "scrollBarOpacity": 0.5,
        "paddingBottom": 0
       },
       "this.IconButton_61E428A1_4578_EA6B_41C7_D3AB6346672D",
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41B4_EAC4A1BD5D40"
      ],
      "contentOpaque": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": 133,
      "backgroundColorRatios": [
       0
      ],
      "minWidth": 20,
      "gap": 5,
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "creationPolicy": "inAdvance",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "shadow": false,
      "height": "100%",
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "borderSize": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41C0_26F0681CF137",
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "paddingRight": 0,
      "overflow": "hidden",
      "data": {
       "name": "Container1200"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "layout": "horizontal",
      "minHeight": 20,
      "scrollBarOpacity": 0.5,
      "paddingBottom": 0
     },
     {
      "children": [
       "this.IconButton_4EEC4AA5_5E2B_1FC1_41C5_FA77C28EB625",
       "this.IconButton_4EEC4AA6_5E2B_1FC3_41BA_7BB1D3A7F411"
      ],
      "contentOpaque": false,
      "horizontalAlign": "center",
      "backgroundColor": [
       "#FFFFFF"
      ],
      "width": 85,
      "backgroundColorRatios": [
       0
      ],
      "minWidth": 20,
      "gap": 10,
      "scrollBarVisible": "rollOver",
      "paddingTop": 0,
      "creationPolicy": "inAdvance",
      "backgroundOpacity": 1,
      "paddingLeft": 0,
      "scrollBarColor": "#000000",
      "shadow": false,
      "height": "100%",
      "backgroundColorDirection": "vertical",
      "borderRadius": 0,
      "borderSize": 0,
      "id": "Container_4EEC4AA5_5E2B_1FC1_41D4_9B4DE1B45BE3",
      "verticalAlign": "middle",
      "scrollBarMargin": 2,
      "paddingRight": 0,
      "overflow": "hidden",
      "data": {
       "name": "Container1206"
      },
      "class": "Container",
      "scrollBarWidth": 10,
      "layout": "horizontal",
      "minHeight": 20,
      "scrollBarOpacity": 0.5,
      "paddingBottom": 0
     }
    ],
    "contentOpaque": false,
    "horizontalAlign": "center",
    "backgroundColor": [
     "#FFFFFF"
    ],
    "width": 805.5,
    "backgroundColorRatios": [
     0
    ],
    "minWidth": 468,
    "gap": 10,
    "scrollBarVisible": "rollOver",
    "paddingTop": 0,
    "creationPolicy": "inAdvance",
    "backgroundOpacity": 1,
    "paddingLeft": 0,
    "scrollBarColor": "#000000",
    "shadow": false,
    "height": "93.478%",
    "backgroundColorDirection": "vertical",
    "borderRadius": 0,
    "borderSize": 0,
    "id": "Container_4EEC4AA6_5E2B_1FC3_41CE_536DE679C718",
    "verticalAlign": "middle",
    "scrollBarMargin": 2,
    "paddingRight": 0,
    "overflow": "hidden",
    "data": {
     "name": "Container1194"
    },
    "class": "Container",
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "minHeight": 20,
    "scrollBarOpacity": 0.5,
    "paddingBottom": 0
   },
   {
    "itemThumbnailShadowVerticalLength": 3,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingTop": 3,
    "gap": 13,
    "width": "28.046%",
    "itemLabelGap": 1,
    "minWidth": 20,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailShadowOpacity": 0.54,
    "itemBackgroundColorRatios": [],
    "selectedItemLabelFontColor": "#FFCC00",
    "paddingTop": 10,
    "scrollBarVisible": "always",
    "itemVerticalAlign": "middle",
    "backgroundOpacity": 0,
    "height": 92,
    "itemMode": "normal",
    "itemPaddingRight": 3,
    "itemHorizontalAlign": "center",
    "scrollBarColor": "#FFFFFF",
    "shadow": false,
    "rollOverItemBackgroundOpacity": 0,
    "paddingLeft": 20,
    "itemOpacity": 1,
    "rollOverItemLabelFontColor": "#003399",
    "borderRadius": 5,
    "itemLabelTextDecoration": "none",
    "rollOverItemLabelFontWeight": "bold",
    "itemThumbnailShadow": true,
    "verticalAlign": "top",
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "borderSize": 0,
    "id": "ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965",
    "itemThumbnailOpacity": 1,
    "itemLabelFontSize": 14,
    "class": "ThumbnailList",
    "scrollBarMargin": 2,
    "itemBackgroundOpacity": 0,
    "itemBorderRadius": 0,
    "paddingRight": 20,
    "itemLabelHorizontalAlign": "center",
    "itemLabelFontWeight": "normal",
    "itemLabelPosition": "top",
    "scrollBarWidth": 10,
    "itemBackgroundColor": [],
    "itemThumbnailHeight": 36,
    "itemThumbnailBorderRadius": 2,
    "data": {
     "name": "ThumbnailList35762"
    },
    "horizontalAlign": "left",
    "itemBackgroundColorDirection": "vertical",
    "itemPaddingBottom": 3,
    "itemLabelFontColor": "#000000",
    "itemPaddingLeft": 3,
    "minHeight": 20,
    "itemThumbnailShadowSpread": 1,
    "layout": "horizontal",
    "itemThumbnailShadowBlurRadius": 8,
    "scrollBarOpacity": 0.5,
    "playList": "this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist",
    "paddingBottom": 10,
    "itemThumbnailWidth": 94
   },
   {
    "itemThumbnailShadowVerticalLength": 3,
    "selectedItemLabelFontWeight": "bold",
    "itemPaddingTop": 3,
    "gap": 13,
    "width": "26.327%",
    "itemLabelGap": 8,
    "minWidth": 1,
    "itemThumbnailShadowHorizontalLength": 3,
    "itemLabelFontFamily": "Arial",
    "itemThumbnailShadowColor": "#000000",
    "itemThumbnailShadowOpacity": 0.57,
    "itemBackgroundColorRatios": [],
    "selectedItemLabelFontColor": "#FFCC00",
    "paddingTop": 10,
    "scrollBarVisible": "rollOver",
    "itemVerticalAlign": "middle",
    "backgroundOpacity": 0,
    "height": 82.5,
    "itemMode": "normal",
    "itemPaddingRight": 3,
    "itemHorizontalAlign": "center",
    "paddingLeft": 20,
    "scrollBarColor": "#FFFFFF",
    "shadow": false,
    "itemLabelTextDecoration": "none",
    "itemOpacity": 1,
    "borderRadius": 5,
    "visible": false,
    "rollOverItemLabelFontWeight": "bold",
    "itemThumbnailShadow": true,
    "verticalAlign": "top",
    "itemLabelFontStyle": "normal",
    "itemThumbnailScaleMode": "fit_outside",
    "borderSize": 0,
    "id": "ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B",
    "itemLabelFontWeight": "normal",
    "itemThumbnailOpacity": 1,
    "itemLabelFontSize": 14,
    "class": "ThumbnailList",
    "scrollBarMargin": 2,
    "itemBackgroundOpacity": 0,
    "itemBorderRadius": 0,
    "paddingRight": 20,
    "itemLabelHorizontalAlign": "center",
    "itemLabelPosition": "bottom",
    "scrollBarWidth": 10,
    "itemBackgroundColor": [],
    "itemThumbnailHeight": 75,
    "itemThumbnailBorderRadius": 5,
    "data": {
     "name": "ThumbnailList35762"
    },
    "horizontalAlign": "left",
    "itemBackgroundColorDirection": "vertical",
    "itemPaddingBottom": 3,
    "itemLabelFontColor": "#FFFFFF",
    "itemPaddingLeft": 3,
    "minHeight": 1,
    "itemThumbnailShadowSpread": 1,
    "layout": "horizontal",
    "itemThumbnailShadowBlurRadius": 8,
    "scrollBarOpacity": 0.5,
    "playList": "this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist",
    "paddingBottom": 10,
    "itemThumbnailWidth": 100
   }
  ],
  "contentOpaque": false,
  "horizontalAlign": "center",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "100%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 1,
  "gap": 6,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.3,
  "height": 92,
  "paddingLeft": 0,
  "creationPolicy": "inAdvance",
  "scrollBarColor": "#000000",
  "shadow": false,
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "bottom": "0%",
  "borderSize": 0,
  "verticalAlign": "middle",
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "overflow": "scroll",
  "data": {
   "name": "Container29432"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "minHeight": 1,
  "left": "0%",
  "scrollBarOpacity": 0.5,
  "paddingBottom": 0
 },
 {
  "horizontalAlign": "center",
  "width": "9.198%",
  "minWidth": 1,
  "url": "skin/Image_306F4727_273A_95B3_41B2_3DF89EEDBF85.png",
  "paddingTop": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "shadow": false,
  "height": "7.604%",
  "top": "0.05%",
  "borderRadius": 0,
  "scaleMode": "fit_inside",
  "borderSize": 0,
  "id": "Image_306F4727_273A_95B3_41B2_3DF89EEDBF85",
  "verticalAlign": "middle",
  "class": "Image",
  "paddingRight": 0,
  "maxWidth": 1467,
  "data": {
   "name": "Wave Logo"
  },
  "maxHeight": 817,
  "minHeight": 1,
  "right": "0%",
  "paddingBottom": 0
 },
 {
  "horizontalAlign": "center",
  "width": "38.151%",
  "minWidth": 1,
  "url": "skin/Image_3E29962B_272E_B7B3_4191_F996EF0F95BB.png",
  "paddingTop": 0,
  "paddingLeft": 0,
  "backgroundOpacity": 0,
  "shadow": false,
  "height": "6.979%",
  "top": "0.31%",
  "borderRadius": 0,
  "scaleMode": "fit_inside",
  "borderSize": 0,
  "id": "Image_3E29962B_272E_B7B3_4191_F996EF0F95BB",
  "verticalAlign": "middle",
  "class": "Image",
  "paddingRight": 0,
  "maxWidth": 1700,
  "data": {
   "name": "MTViewhomes"
  },
  "maxHeight": 186,
  "minHeight": 1,
  "right": "8.53%",
  "paddingBottom": 0
 },
 {
  "children": [
   "this.MapViewer"
  ],
  "contentOpaque": false,
  "horizontalAlign": "left",
  "backgroundColor": [
   "#FFFFFF",
   "#FFFFFF"
  ],
  "width": "28.739%",
  "backgroundColorRatios": [
   0,
   1
  ],
  "minWidth": 1,
  "gap": 10,
  "paddingTop": 0,
  "scrollBarVisible": "rollOver",
  "backgroundOpacity": 0.3,
  "height": "33.75%",
  "paddingLeft": 0,
  "creationPolicy": "inAdvance",
  "scrollBarColor": "#000000",
  "shadow": false,
  "top": "1.82%",
  "backgroundColorDirection": "vertical",
  "borderRadius": 0,
  "borderSize": 0,
  "id": "Container_581FBEE1_4338_67EB_41B1_0EF3FEBC0B73",
  "verticalAlign": "top",
  "scrollBarMargin": 2,
  "paddingRight": 0,
  "overflow": "scroll",
  "data": {
   "name": "Container24488"
  },
  "class": "Container",
  "scrollBarWidth": 10,
  "layout": "absolute",
  "minHeight": 1,
  "left": "0.63%",
  "scrollBarOpacity": 0.5,
  "paddingBottom": 0
 }
], 
 "contentOpaque": false,
 "horizontalAlign": "left",
 "width": "100%",
 "vrPolyfillScale": 0.88,
 "minWidth": 20,
 "gap": 10,
 "paddingTop": 0,
 "scrollBarVisible": "rollOver",
 "mobileMipmappingEnabled": false,
 "paddingLeft": 0,
 "creationPolicy": "inAdvance",
 "scrollBarColor": "#000000",
 "shadow": false,
 "scripts": {
  "existsKey": function(key){  return key in window; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "registerKey": function(key, value){  window[key] = value; },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "getKey": function(key){  return window[key]; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); }
 },
 "borderRadius": 0,
 "borderSize": 0,
 "id": "rootPlayer",
 "height": "100%",
 "verticalAlign": "top",
 "scrollBarMargin": 2,
 "paddingRight": 0,
 "overflow": "visible",
 "data": {
  "name": "Player28156"
 },
 "class": "Player",
 "scrollBarWidth": 10,
 "buttonToggleMute": "this.IconButton_602B0199_4578_7A5B_4181_B210F0CE8B75",
 "backgroundPreloadEnabled": true,
 "layout": "absolute",
 "start": "this.playAudioList([this.audio_E0F69C53_F3AC_E011_41DE_35C20C8242E9]); this.syncPlaylists([this.thumbnaillist5245_playlist,this.ThumbnailList_881F2652_97D2_0B21_41E2_7C5FB1597965_playlist,this.ThumbnailList_6618B1BF_44D8_DA57_41A6_0D2589AAC96B_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_F6558979_F8EB_6F66_41E2_AD79347F1EEC.set('selectedIndex', 0)",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "paddingBottom": 0,
 "mouseWheelEnabled": true
})