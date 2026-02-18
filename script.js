TDV.PlayerAPI.defineScript({ "definitions": [
 {
  "class": "Video",
  "thumbnailUrl": "media/video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B_t.jpg",
  "label": "Enscape_2024-11-11-17-30-13",
  "video": {
   "height": 1080,
   "class": "VideoResource",
   "mp4Url": "media/video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B.mp4",
   "width": 1920
  },
  "width": 1920,
  "id": "video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B",
  "loop": false,
  "height": 1080,
  "scaleMode": "fit_inside"
 },
 {
  "class": "VideoPlayer",
  "displayPlaybackBar": true,
  "id": "MainViewerVideoPlayer",
  "viewerArea": "this.MainViewer",
  "buttonPause": {
   "borderSize": 0,
   "class": "IconButton",
   "mode": "toggle",
   "width": 67.99,
   "paddingBottom": 0,
   "height": 55.72,
   "horizontalAlign": "center",
   "borderRadius": 0,
   "pressedIconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76_pressed.png",
   "iconURL": "skin/IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76.png",
   "minWidth": 0,
   "cursor": "hand",
   "paddingLeft": 0,
   "paddingRight": 0,
   "shadow": false,
   "id": "IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76",
   "backgroundOpacity": 0,
   "data": {
    "name": "Button1166"
   },
   "verticalAlign": "middle",
   "minHeight": 0,
   "transparencyActive": true,
   "paddingTop": 0
  }
 },
 {
  "class": "Panorama",
  "hfovMin": 60,
  "hfov": 360,
  "id": "panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4",
  "adjacentPanoramas": [
   {
    "panorama": {
     "frameDisplayTime": 5000,
     "class": "LivePanorama",
     "hfovMin": 60,
     "hfov": 360,
     "id": "panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F",
     "adjacentPanoramas": [
      {
       "panorama": {
        "class": "Panorama",
        "hfovMin": 60,
        "hfov": 360,
        "id": "panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F",
          "class": "AdjacentPanorama",
          "backwardYaw": 125.61,
          "yaw": -150.46,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_t.jpg",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 422.92,
          "x": 2303.55,
          "angle": 51.44,
          "map": {
           "class": "Map",
           "fieldOfViewOverlayInsideOpacity": 0.15,
           "id": "map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
           "fieldOfViewOverlayInsideColor": "#0066FF",
           "initialZoomFactor": 1,
           "height": 902,
           "fieldOfViewOverlayOutsideColor": "#000000",
           "minimumZoomFactor": 0.5,
           "width": 2560,
           "image": {
            "class": "ImageResource",
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
              "width": 800,
              "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_lq.png",
              "grayscale": true
             }
            ]
           },
           "thumbnailUrl": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_t.png",
           "maximumZoomFactor": 1.2,
           "label": "CR1001floorplan2",
           "overlays": [
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_FB66CF96_F772_EF18_4198_42587745DFC8",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 514.66,
              "height": 90,
              "x": 1753.76,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_0_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 2)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 514.66,
              "x": 1753.76,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_0.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_FB999D17_F773_7319_41D4_32223D8BDC63",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 468.32,
              "height": 90,
              "x": 1551.07,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_1_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 3)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 468.32,
              "x": 1551.07,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_1.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_FB084DB3_F773_F318_41E6_F7520516570C",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 500.1,
              "height": 90,
              "x": 1234.8,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_2_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 4)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 500.1,
              "x": 1234.8,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_2.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_FA4B2AE7_F773_1138_41E6_5D7048EBBE1E",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 377.92,
              "height": 90,
              "x": 2258.55,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_3_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 5)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 377.92,
              "x": 2258.55,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_3.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_FBD6CF86_F772_EFF8_41B6_E83E1FFD8DFF",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 134.96,
              "height": 90,
              "x": 1119.72,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_4_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 6)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 134.96,
              "x": 1119.72,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_4.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_FA2F4EBA_F771_310B_41D6_3304BD83B083",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 334.37,
              "height": 90,
              "x": 872.45,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_5_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 7)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 334.37,
              "x": 872.45,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_5.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_FAB8DF1C_F771_2F08_41E6_A3248D718BA0",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 526.43,
              "height": 90,
              "x": 874.35,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_6_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 8)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 526.43,
              "x": 874.35,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_6.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_F94C9BE6_F771_1738_41E7_40D9EFAF9139",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 450.34,
              "height": 90,
              "x": 349.56,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_7_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 9)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 450.34,
              "x": 349.56,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_7.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_F5D7F8A0_F8E8_EDE6_41ED_A79C515BDCDA",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 90,
              "y": 310.57,
              "height": 90,
              "x": 1559.55,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 28,
                 "class": "ImageResourceLevel",
                 "width": 28,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_8_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 11)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 310.57,
              "x": 1559.55,
              "width": 90,
              "height": 90,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 56,
                 "class": "ImageResourceLevel",
                 "width": 56,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_8.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            },
            {
             "class": "AreaHotspotMapOverlay",
             "id": "overlay_7C0B762D_6E5D_1B5E_4151_185FDEB5B694",
             "map": {
              "offsetY": 0,
              "class": "HotspotMapOverlayMap",
              "width": 86.49,
              "y": 777.24,
              "height": 93.97,
              "x": 1763.51,
              "offsetX": 0,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 29,
                 "class": "ImageResourceLevel",
                 "width": 27,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_9_map.gif"
                }
               ]
              }
             },
             "data": {
              "label": "Image"
             },
             "areas": [
              {
               "mapColor": "#FF0000",
               "class": "HotspotMapOverlayArea",
               "click": "this.mainPlayList.set('selectedIndex', 1)"
              }
             ],
             "image": {
              "class": "HotspotMapOverlayImage",
              "y": 777.24,
              "x": 1763.51,
              "width": 86.49,
              "height": 93.97,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 58,
                 "class": "ImageResourceLevel",
                 "width": 54,
                 "url": "media/map_FC481C0E_F777_110B_41E3_8C6BF7C7966B_HS_9.png"
                }
               ]
              }
             },
             "rollOverDisplay": false,
             "useHandCursor": true
            }
           ],
           "scaleMode": "fit_inside",
           "fieldOfViewOverlayOutsideOpacity": 0,
           "fieldOfViewOverlayRadiusScale": 0.14
          }
         }
        ],
        "vfov": 180,
        "hfovMax": 120,
        "label": "Deck",
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
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_783252D0_6E37_18C6_416C_ABED5D1CC088",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F, this.camera_76DD1162_6FFF_F9CA_41C8_F51D6BA96C40); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 18.04,
              "yaw": -150.46,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 18,
                 "url": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -32.34
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -150.46,
              "hfov": 18.04,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 346,
                 "class": "ImageResourceLevel",
                 "width": 398,
                 "url": "media/panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -32.34
             }
            ]
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
       "class": "AdjacentPanorama",
       "backwardYaw": -150.46,
       "yaw": 125.61,
       "distance": 1
      },
      {
       "panorama": {
        "frameDisplayTime": 3000,
        "class": "LivePanorama",
        "hfovMin": 60,
        "hfov": 360,
        "id": "panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F",
          "class": "AdjacentPanorama",
          "backwardYaw": -31.5,
          "yaw": 165.43,
          "distance": 1
         },
         {
          "panorama": {
           "frameDisplayTime": 3000,
           "class": "LivePanorama",
           "hfovMin": 60,
           "hfov": 360,
           "id": "panorama_FD16EB22_F394_2032_41BE_26631E398263",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
             "class": "AdjacentPanorama",
             "backwardYaw": -44.87,
             "yaw": 131.75,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_1_t.jpg",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 545.1,
             "x": 1279.8,
             "angle": -54.01,
             "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
            }
           ],
           "vfov": 180,
           "hfovMax": 135,
           "frameTransitionTime": 1000,
           "label": "Kitchen",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_7AC1C42B_6E4D_1F5A_41A2_992EEB4A6A23",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 2)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 13.78,
                 "yaw": 135.45,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 16,
                    "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -23.2
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 135.45,
                 "hfov": 13.78,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 281,
                    "class": "ImageResourceLevel",
                    "width": 279,
                    "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -23.2
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_7B4C8359_6E4B_39C6_41C9_939B6BCB8BEE",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544, this.camera_760A8220_6FFF_FB47_41D3_25A09BBE1DFA); this.mainPlayList.set('selectedIndex', 3)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 16.51,
                 "yaw": 131.75,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 35,
                    "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -45.51
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 131.75,
                 "hfov": 16.51,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 200,
                    "class": "ImageResourceLevel",
                    "width": 439,
                    "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -45.51
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_7B115216_6E35_7B4A_41D0_7416F83EC283",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 7)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 10.46,
                 "yaw": -29.47,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 17,
                    "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -60.66
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -29.47,
                 "hfov": 10.46,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 362,
                    "class": "ImageResourceLevel",
                    "width": 398,
                    "url": "media/panorama_FD16EB22_F394_2032_41BE_26631E398263_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -60.66
                }
               ]
              }
             ],
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
             "overlays": [
              "this.overlay_7AC1C42B_6E4D_1F5A_41A2_992EEB4A6A23",
              "this.overlay_7B4C8359_6E4B_39C6_41C9_939B6BCB8BEE",
              "this.overlay_7B115216_6E35_7B4A_41D0_7416F83EC283"
             ],
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
          "class": "AdjacentPanorama",
          "backwardYaw": 131.75,
          "yaw": -44.87,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_1_t.jpg",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 513.32,
          "x": 1596.07,
          "angle": 310.32,
          "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
         }
        ],
        "vfov": 180,
        "hfovMax": 131,
        "frameTransitionTime": 1000,
        "label": "Kitchen",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_7A028110_6E4B_1946_41D9_0C23E50AA503",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F, this.camera_769D1190_6FFF_F946_41D8_2C1C2913E918); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 19.01,
              "yaw": 165.43,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 32,
                 "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -46.76
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 165.43,
              "hfov": 19.01,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 258,
                 "class": "ImageResourceLevel",
                 "width": 517,
                 "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -46.76
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_7894DF93_6E4D_094A_41D8_EA9B388BC69F",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 5)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 14.47,
              "yaw": 141.36,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 24,
                 "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -20.68
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 141.36,
              "hfov": 14.47,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 189,
                 "class": "ImageResourceLevel",
                 "width": 288,
                 "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -20.68
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_7AD88995_6E4D_094E_41B0_F4F869D1D349",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD16EB22_F394_2032_41BE_26631E398263, this.camera_766E919B_6FFF_F97A_41CF_CCB281E3B42C); this.mainPlayList.set('selectedIndex', 4)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 15.84,
              "yaw": -44.87,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 27,
                 "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -44.68
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -44.87,
              "hfov": 15.84,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 245,
                 "class": "ImageResourceLevel",
                 "width": 415,
                 "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -44.68
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_7B0AF704_6E4F_794E_41CA_6C046BDEF38F",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.mainPlayList.set('selectedIndex', 6)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 10.39,
              "yaw": 5.9,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 30,
                 "class": "ImageResourceLevel",
                 "width": 16,
                 "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_HS_3_0_0_map.gif"
                }
               ]
              },
              "pitch": -7.9
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 5.9,
              "hfov": 10.39,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 374,
                 "class": "ImageResourceLevel",
                 "width": 195,
                 "url": "media/panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_0_HS_3_0.png"
                }
               ]
              },
              "pitch": -7.9
             }
            ]
           }
          ],
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
          "overlays": [
           "this.overlay_7A028110_6E4B_1946_41D9_0C23E50AA503",
           "this.overlay_7894DF93_6E4D_094A_41D8_EA9B388BC69F",
           "this.overlay_7AD88995_6E4D_094E_41B0_F4F869D1D349",
           "this.overlay_7B0AF704_6E4F_794E_41CA_6C046BDEF38F"
          ],
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
          "overlays": [
           "this.overlay_7A028110_6E4B_1946_41D9_0C23E50AA503",
           "this.overlay_7894DF93_6E4D_094A_41D8_EA9B388BC69F",
           "this.overlay_7AD88995_6E4D_094E_41B0_F4F869D1D349",
           "this.overlay_7B0AF704_6E4F_794E_41CA_6C046BDEF38F"
          ],
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
       "class": "AdjacentPanorama",
       "backwardYaw": 165.43,
       "yaw": -31.5,
       "distance": 1
      },
      {
       "panorama": {
        "frameDisplayTime": 3000,
        "class": "LivePanorama",
        "hfovMin": 60,
        "hfov": 360,
        "id": "panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
        "adjacentPanoramas": [
         {
          "panorama": "this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F",
          "class": "AdjacentPanorama",
          "backwardYaw": 16.32,
          "yaw": 155.6,
          "distance": 1
         },
         {
          "panorama": {
           "class": "Panorama",
           "hfovMin": 60,
           "hfov": 360,
           "id": "panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
             "class": "AdjacentPanorama",
             "backwardYaw": -48.55,
             "yaw": 83.88,
             "distance": 1
            },
            {
             "panorama": {
              "frameDisplayTime": 3000,
              "class": "LivePanorama",
              "hfovMin": 60,
              "hfov": 360,
              "id": "panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
              "adjacentPanoramas": [
               {
                "panorama": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
                "class": "AdjacentPanorama",
                "backwardYaw": -141.94,
                "yaw": 14.25,
                "distance": 1
               }
              ],
              "partial": false,
              "pitch": 0,
              "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_1_t.jpg",
              "mapLocations": [
               {
                "class": "PanoramaMapLocation",
                "y": 571.43,
                "x": 919.35,
                "angle": 308.92,
                "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
               }
              ],
              "vfov": 180,
              "hfovMax": 132,
              "frameTransitionTime": 1000,
              "label": "Bathroom",
              "frames": [
               {
                "class": "SphericPanoramaFrame",
                "thumbnailUrl": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_t.jpg",
                "overlays": [
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_79451245_6E3D_1BCE_41B0_ADD45650C7CE",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.startPanoramaWithCamera(this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B, this.camera_77D8E255_6FFF_FBCE_41B9_10E1B2863B2A); this.mainPlayList.set('selectedIndex', 7)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 16.35,
                    "yaw": 14.25,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 20,
                       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_HS_0_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -50.83
                   }
                  ],
                  "rollOverDisplay": false,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 14.25,
                    "hfov": 16.35,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 375,
                       "class": "ImageResourceLevel",
                       "width": 483,
                       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_HS_0_0.png"
                      }
                     ]
                    },
                    "pitch": -50.83
                   }
                  ]
                 },
                 {
                  "enabledInCardboard": true,
                  "class": "HotspotPanoramaOverlay",
                  "id": "overlay_774B5291_6E3D_3B46_41C2_7E46BB32022F",
                  "useHandCursor": true,
                  "data": {
                   "label": "Image"
                  },
                  "areas": [
                   {
                    "mapColor": "#FF0000",
                    "class": "HotspotPanoramaOverlayArea",
                    "click": "this.mainPlayList.set('selectedIndex', 6)"
                   }
                  ],
                  "maps": [
                   {
                    "class": "HotspotPanoramaOverlayMap",
                    "hfov": 11.16,
                    "yaw": 26.73,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 16,
                       "class": "ImageResourceLevel",
                       "width": 20,
                       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_HS_1_0_0_map.gif"
                      }
                     ]
                    },
                    "pitch": -32.7
                   }
                  ],
                  "rollOverDisplay": true,
                  "items": [
                   {
                    "class": "HotspotPanoramaOverlayImage",
                    "yaw": 26.73,
                    "hfov": 11.16,
                    "image": {
                     "class": "ImageResource",
                     "levels": [
                      {
                       "height": 189,
                       "class": "ImageResourceLevel",
                       "width": 247,
                       "url": "media/panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_0_HS_1_0.png"
                      }
                     ]
                    },
                    "pitch": -32.7
                   }
                  ]
                 }
                ],
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
                "overlays": [
                 "this.overlay_79451245_6E3D_1BCE_41B0_ADD45650C7CE",
                 "this.overlay_774B5291_6E3D_3B46_41C2_7E46BB32022F"
                ],
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
             "class": "AdjacentPanorama",
             "backwardYaw": 14.25,
             "yaw": -141.94,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_t.jpg",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 379.37,
             "x": 917.45,
             "angle": -60.26,
             "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
            }
           ],
           "vfov": 180,
           "hfovMax": 120,
           "label": "Laundry",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_78FC1A48_6E3D_0BC6_41DB_88F0C965D6B2",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067, this.camera_7623F1ED_6FFF_F8DE_41CD_B32A07A4D15F); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 19.12,
                 "yaw": 83.88,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 19,
                    "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -48.35
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 83.88,
                 "hfov": 19.12,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 440,
                    "class": "ImageResourceLevel",
                    "width": 537,
                    "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -48.35
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_78BBD696_6E3F_1B4A_41BD_A1E4A98FA2EC",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.mainPlayList.set('selectedIndex', 9)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 18.53,
                 "yaw": 33.8,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 19,
                    "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_0_HS_1_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -50.66
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 33.8,
                 "hfov": 18.53,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 445,
                    "class": "ImageResourceLevel",
                    "width": 545,
                    "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_0_HS_1_0.png"
                   }
                  ]
                 },
                 "pitch": -50.66
                }
               ]
              },
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_79CA2318_6E3F_1946_41D0_4CA65564A88B",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4, this.camera_763F2207_6FFF_FB4A_41BA_C42F90213EE8); this.mainPlayList.set('selectedIndex', 8)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 15.39,
                 "yaw": -141.94,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 19,
                    "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_0_HS_2_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -58.94
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": -141.94,
                 "hfov": 15.39,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 445,
                    "class": "ImageResourceLevel",
                    "width": 556,
                    "url": "media/panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_0_HS_2_0.png"
                   }
                  ]
                 },
                 "pitch": -58.94
                }
               ]
              }
             ],
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
          "class": "AdjacentPanorama",
          "backwardYaw": 83.88,
          "yaw": -48.55,
          "distance": 1
         },
         {
          "panorama": {
           "class": "Panorama",
           "hfovMin": 60,
           "hfov": 360,
           "id": "panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
           "adjacentPanoramas": [
            {
             "panorama": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
             "class": "AdjacentPanorama",
             "backwardYaw": -29.39,
             "yaw": 91.66,
             "distance": 1
            }
           ],
           "partial": false,
           "pitch": 0,
           "thumbnailUrl": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_t.jpg",
           "mapLocations": [
            {
             "class": "PanoramaMapLocation",
             "y": 495.34,
             "x": 394.56,
             "angle": -56.67,
             "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
            }
           ],
           "vfov": 180,
           "hfovMax": 120,
           "label": "Bedroom",
           "frames": [
            {
             "class": "SphericPanoramaFrame",
             "thumbnailUrl": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_t.jpg",
             "overlays": [
              {
               "enabledInCardboard": true,
               "class": "HotspotPanoramaOverlay",
               "id": "overlay_798689E6_6E3B_08CA_41BD_726055E00D10",
               "useHandCursor": true,
               "data": {
                "label": "Image"
               },
               "areas": [
                {
                 "mapColor": "#FF0000",
                 "class": "HotspotPanoramaOverlayArea",
                 "click": "this.startPanoramaWithCamera(this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067, this.camera_765651D3_6FFF_F8CA_41D4_E1F1E11BB8CF); this.mainPlayList.set('selectedIndex', 6)"
                }
               ],
               "maps": [
                {
                 "class": "HotspotPanoramaOverlayMap",
                 "hfov": 25.49,
                 "yaw": 91.66,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 16,
                    "class": "ImageResourceLevel",
                    "width": 75,
                    "url": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_0_HS_0_0_0_map.gif"
                   }
                  ]
                 },
                 "pitch": -32.32
                }
               ],
               "rollOverDisplay": true,
               "items": [
                {
                 "class": "HotspotPanoramaOverlayImage",
                 "yaw": 91.66,
                 "hfov": 25.49,
                 "image": {
                  "class": "ImageResource",
                  "levels": [
                   {
                    "height": 120,
                    "class": "ImageResourceLevel",
                    "width": 563,
                    "url": "media/panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_0_HS_0_0.png"
                   }
                  ]
                 },
                 "pitch": -32.32
                }
               ]
              }
             ],
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
          "class": "AdjacentPanorama",
          "backwardYaw": 91.66,
          "yaw": -29.39,
          "distance": 1
         }
        ],
        "partial": false,
        "pitch": 0,
        "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_1_t.jpg",
        "mapLocations": [
         {
          "class": "PanoramaMapLocation",
          "y": 179.96,
          "x": 1164.72,
          "angle": 295.79,
          "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
         }
        ],
        "vfov": 180,
        "hfovMax": 120,
        "frameTransitionTime": 1000,
        "label": "Hallway",
        "frames": [
         {
          "class": "SphericPanoramaFrame",
          "thumbnailUrl": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_t.jpg",
          "overlays": [
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_7BE74345_6E3B_39CE_41D6_C218992021B1",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F, this.camera_77E4723B_6FFF_FBBA_41D4_20C044FD4634); this.mainPlayList.set('selectedIndex', 2)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 18.27,
              "yaw": 155.6,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 38,
                 "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_HS_0_0_0_map.gif"
                }
               ]
              },
              "pitch": -25.28
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": 155.6,
              "hfov": 18.27,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 158,
                 "class": "ImageResourceLevel",
                 "width": 377,
                 "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_HS_0_0.png"
                }
               ]
              },
              "pitch": -25.28
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_79872BB5_6E3B_094E_41D2_C6012E42126A",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B, this.camera_77FD6245_6FFF_FBCE_41C2_5903B36C6894); this.mainPlayList.set('selectedIndex', 7)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 17.98,
              "yaw": -48.55,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 15,
                 "class": "ImageResourceLevel",
                 "width": 32,
                 "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_HS_1_0_0_map.gif"
                }
               ]
              },
              "pitch": -46.48
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -48.55,
              "hfov": 17.98,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 237,
                 "class": "ImageResourceLevel",
                 "width": 487,
                 "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_HS_1_0.png"
                }
               ]
              },
              "pitch": -46.48
             }
            ]
           },
           {
            "enabledInCardboard": true,
            "class": "HotspotPanoramaOverlay",
            "id": "overlay_78789652_6E3C_FBCA_41D4_6C22D4427D59",
            "useHandCursor": true,
            "data": {
             "label": "Image"
            },
            "areas": [
             {
              "mapColor": "#FF0000",
              "class": "HotspotPanoramaOverlayArea",
              "click": "this.startPanoramaWithCamera(this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4, this.camera_77D5B24F_6FFF_FBDA_41D2_714DBAB3B61D); this.mainPlayList.set('selectedIndex', 9)"
             }
            ],
            "maps": [
             {
              "class": "HotspotPanoramaOverlayMap",
              "hfov": 12.41,
              "yaw": -29.39,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 16,
                 "class": "ImageResourceLevel",
                 "width": 40,
                 "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_HS_2_0_0_map.gif"
                }
               ]
              },
              "pitch": -23.6
             }
            ],
            "rollOverDisplay": true,
            "items": [
             {
              "class": "HotspotPanoramaOverlayImage",
              "yaw": -29.39,
              "hfov": 12.41,
              "image": {
               "class": "ImageResource",
               "levels": [
                {
                 "height": 100,
                 "class": "ImageResourceLevel",
                 "width": 252,
                 "url": "media/panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_0_HS_2_0.png"
                }
               ]
              },
              "pitch": -23.6
             }
            ]
           }
          ],
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
          "overlays": [
           "this.overlay_7BE74345_6E3B_39CE_41D6_C218992021B1",
           "this.overlay_79872BB5_6E3B_094E_41D2_C6012E42126A",
           "this.overlay_78789652_6E3C_FBCA_41D4_6C22D4427D59"
          ],
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
       "class": "AdjacentPanorama",
       "backwardYaw": 155.6,
       "yaw": 16.32,
       "distance": 1
      },
      {
       "panorama": "this.panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4",
       "class": "AdjacentPanorama",
       "backwardYaw": -154.5,
       "yaw": -132.39,
       "distance": 1
      }
     ],
     "partial": false,
     "pitch": 0,
     "thumbnailUrl": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_1_t.jpg",
     "mapLocations": [
      {
       "class": "PanoramaMapLocation",
       "y": 559.66,
       "x": 1798.76,
       "angle": 310.11,
       "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
      }
     ],
     "vfov": 180,
     "hfovMax": 120,
     "frameTransitionTime": 5000,
     "label": "Living Room",
     "frames": [
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_t.jpg",
       "overlays": [
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_7D923EDA_6E57_08FA_41CD_B6B3D80E3E96",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544, this.camera_76A2B172_6FFF_F9CA_41D1_9D2B4F469B94); this.mainPlayList.set('selectedIndex', 3)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.05,
           "yaw": -31.5,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 24,
              "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_HS_0_0_0_map.gif"
             }
            ]
           },
           "pitch": -43.51
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -31.5,
           "hfov": 14.05,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 232,
              "class": "ImageResourceLevel",
              "width": 361,
              "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_HS_0_0.png"
             }
            ]
           },
           "pitch": -43.51
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_7DEFE9E7_6E55_08CA_4193_4B2BA3AA5024",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1, this.camera_76A4E16C_6FFF_F9DF_41D6_00BD7F1CA88E); this.mainPlayList.set('selectedIndex', 5)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 15.22,
           "yaw": 125.61,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 31,
              "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_HS_1_0_0_map.gif"
             }
            ]
           },
           "pitch": -28.38
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 125.61,
           "hfov": 15.22,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 162,
              "class": "ImageResourceLevel",
              "width": 323,
              "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_HS_1_0.png"
             }
            ]
           },
           "pitch": -28.38
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_7A457F24_6E55_094E_41BE_BF7B946C3B66",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067, this.camera_76B1F17C_6FFF_F9BE_41B5_DF66E6439E5F); this.mainPlayList.set('selectedIndex', 6)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 14.45,
           "yaw": 16.32,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 29,
              "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_HS_2_0_0_map.gif"
             }
            ]
           },
           "pitch": -32.25
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": 16.32,
           "hfov": 14.45,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 170,
              "class": "ImageResourceLevel",
              "width": 318,
              "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_HS_2_0.png"
             }
            ]
           },
           "pitch": -32.25
          }
         ]
        },
        {
         "enabledInCardboard": true,
         "class": "HotspotPanoramaOverlay",
         "id": "overlay_7A6435CA_6E54_F8DA_41D6_85A4DCBC2902",
         "useHandCursor": true,
         "data": {
          "label": "Image"
         },
         "areas": [
          {
           "mapColor": "#FF0000",
           "class": "HotspotPanoramaOverlayArea",
           "click": "this.startPanoramaWithCamera(this.panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4, this.camera_7681E186_6FFF_F94A_41D6_83401C65EB94); this.mainPlayList.set('selectedIndex', 1)"
          }
         ],
         "maps": [
          {
           "class": "HotspotPanoramaOverlayMap",
           "hfov": 15.18,
           "yaw": -132.39,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 16,
              "class": "ImageResourceLevel",
              "width": 44,
              "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_HS_3_0_0_map.gif"
             }
            ]
           },
           "pitch": -49.2
          }
         ],
         "rollOverDisplay": true,
         "items": [
          {
           "class": "HotspotPanoramaOverlayImage",
           "yaw": -132.39,
           "hfov": 15.18,
           "image": {
            "class": "ImageResource",
            "levels": [
             {
              "height": 157,
              "class": "ImageResourceLevel",
              "width": 433,
              "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_HS_3_0.png"
             }
            ]
           },
           "pitch": -49.2
          }
         ]
        }
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_0.jpeg"
         }
        ]
       }
      },
      {
       "class": "SphericPanoramaFrame",
       "thumbnailUrl": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_1_t.jpg",
       "overlays": [
        "this.overlay_7D923EDA_6E57_08FA_41CD_B6B3D80E3E96",
        "this.overlay_7DEFE9E7_6E55_08CA_4193_4B2BA3AA5024",
        "this.overlay_7A457F24_6E55_094E_41BE_BF7B946C3B66",
        "this.overlay_7A6435CA_6E54_F8DA_41D6_85A4DCBC2902"
       ],
       "sphere": {
        "class": "ImageResource",
        "levels": [
         {
          "height": 3360,
          "class": "ImageResourceLevel",
          "width": 6720,
          "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_1_hq.jpeg"
         },
         {
          "height": 2001,
          "class": "ImageResourceLevel",
          "width": 4002,
          "url": "media/panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_1.jpeg"
         }
        ]
       }
      }
     ]
    },
    "class": "AdjacentPanorama",
    "backwardYaw": -132.39,
    "yaw": -154.5,
    "distance": 1
   }
  ],
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 824.23,
    "x": 1806.76,
    "angle": 154.11,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "label": "Entry",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_7A0C64B6_6E5F_1F4A_41C1_C6BE3A3B529A",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.startPanoramaWithCamera(this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F, this.camera_767AC1B8_6FFF_F946_41D1_83071E247BEF); this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.19,
        "yaw": -154.5,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 26,
           "url": "media/panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -44.8
       }
      ],
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -154.5,
        "hfov": 19.19,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 308,
           "class": "ImageResourceLevel",
           "width": 504,
           "url": "media/panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -44.8
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
     "levels": [
      {
       "height": 3360,
       "class": "ImageResourceLevel",
       "width": 6720,
       "url": "media/panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4_hq.jpeg"
      },
      {
       "height": 2001,
       "class": "ImageResourceLevel",
       "width": 4002,
       "url": "media/panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4.jpeg"
      }
     ]
    }
   }
  ]
 },
 {
  "class": "PanoramaPlayer",
  "gyroscopeEnabled": true,
  "displayPlaybackBar": true,
  "id": "MainViewerPanoramaPlayer",
  "viewerArea": "this.MainViewer",
  "mouseControlMode": "drag_rotation",
  "touchControlMode": "drag_rotation",
  "preloadEnabled": false,
  "gyroscopeVerticalDraggingEnabled": true,
  "buttonPause": "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
 },
 {
  "class": "MapPlayer",
  "id": "MapViewerMapPlayer",
  "movementMode": "constrained",
  "viewerArea": {
   "borderSize": 0,
   "toolTipPaddingRight": 6,
   "toolTipOpacity": 0.96,
   "class": "ViewerArea",
   "playbackBarHeadShadow": true,
   "toolTipFontFamily": "Arial",
   "toolTipDisplayTime": 600,
   "toolTipPaddingLeft": 6,
   "toolTipPaddingTop": 4,
   "playbackBarProgressBackgroundColorDirection": "vertical",
   "toolTipTextShadowOpacity": 0.48,
   "progressBarBackgroundColorDirection": "vertical",
   "playbackBarHeadBackgroundColor": [
    "#111111",
    "#666666"
   ],
   "toolTipTextShadowBlurRadius": 40,
   "progressOpacity": 1,
   "playbackBarProgressBorderSize": 0,
   "borderRadius": 0,
   "transitionDuration": 500,
   "toolTipShadowSpread": 0,
   "toolTipBackgroundColor": "transparent",
   "playbackBarHeadBorderColor": "#000000",
   "progressRight": 10,
   "toolTipShadowOpacity": 0.32,
   "progressBorderColor": "#AAAAAA",
   "playbackBarHeadBorderRadius": 0,
   "playbackBarBottom": 0,
   "shadow": false,
   "paddingLeft": 0,
   "playbackBarHeadShadowColor": "#000000",
   "paddingRight": 0,
   "toolTipTextShadowVerticalLength": 9,
   "progressBarBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "playbackBarHeadBorderSize": 0,
   "playbackBarHeadShadowVerticalLength": 0,
   "progressBackgroundColorDirection": "vertical",
   "playbackBarHeadShadowOpacity": 0.7,
   "toolTipTextShadowHorizontalLength": 3,
   "toolTipFontColor": "#606060",
   "minHeight": 1,
   "progressBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "playbackBarHeadShadowBlurRadius": 3,
   "playbackBarBackgroundOpacity": 1,
   "playbackBarHeadBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarBorderSize": 2,
   "paddingTop": 0,
   "playbackBarProgressBackgroundColor": [
    "#222222",
    "#444444"
   ],
   "toolTipFontSize": 12,
   "playbackBarProgressBorderRadius": 0,
   "playbackBarHeadShadowHorizontalLength": 0,
   "playbackBarProgressOpacity": 1,
   "toolTipShadowVerticalLength": 36,
   "transitionMode": "blending",
   "progressBarBorderSize": 1,
   "playbackBarHeadBackgroundColorDirection": "vertical",
   "progressHeight": 20,
   "playbackBarRight": 0,
   "toolTipTextShadowColor": "#000000",
   "toolTipShadowHorizontalLength": 36,
   "paddingBottom": 0,
   "height": "100%",
   "width": "100%",
   "toolTipShadowColor": "#333333",
   "toolTipShadowBlurRadius": 56,
   "playbackBarLeft": 0,
   "playbackBarHeadHeight": 30,
   "progressBackgroundColorRatios": [
    0,
    1
   ],
   "playbackBarProgressBackgroundColorRatios": [
    0,
    1
   ],
   "progressBorderRadius": 4,
   "progressBarBorderColor": "#000000",
   "progressBarBackgroundColorRatios": [
    0,
    1
   ],
   "progressLeft": 10,
   "minWidth": 1,
   "progressBorderSize": 2,
   "playbackBarBackgroundColorDirection": "vertical",
   "playbackBarHeadOpacity": 1,
   "toolTipPaddingBottom": 4,
   "playbackBarProgressBorderColor": "#000000",
   "progressBottom": 2,
   "progressBarOpacity": 1,
   "id": "MapViewer",
   "toolTipBorderColor": "#767676",
   "playbackBarBorderRadius": 4,
   "toolTipBorderRadius": 3,
   "playbackBarOpacity": 1,
   "toolTipFontStyle": "normal",
   "playbackBarHeadWidth": 6,
   "playbackBarHeight": 20,
   "toolTipFontWeight": "normal",
   "playbackBarBorderColor": "#AAAAAA",
   "progressBackgroundOpacity": 1,
   "toolTipBorderSize": 3,
   "playbackBarBackgroundColor": [
    "#EEEEEE",
    "#CCCCCC"
   ],
   "progressBarBorderRadius": 4
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 119.21,
   "pitch": 1.15
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -155.98,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.21
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F",
 {
  "class": "PanoramaCamera",
  "id": "panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_camera",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -129.86,
   "pitch": -5.68
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -32.59,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.54
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
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
 "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
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
 "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
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
 "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
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
 "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
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
 "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
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
 "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
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
  "class": "Video",
  "thumbnailUrl": "media/video_E045C316_F4FC_2012_41DE_36747AB46079_t.jpg",
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
  "scaleMode": "fit_inside"
 },
 {
  "class": "Panorama",
  "hfovMin": 53,
  "hfov": 360,
  "id": "panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
  "partial": false,
  "pitch": 0,
  "thumbnailUrl": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_t.jpg",
  "mapLocations": [
   {
    "class": "PanoramaMapLocation",
    "y": 355.57,
    "x": 1604.55,
    "angle": 0,
    "map": "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B"
   }
  ],
  "vfov": 180,
  "hfovMax": 120,
  "label": "360 Rendering",
  "frames": [
   {
    "class": "SphericPanoramaFrame",
    "thumbnailUrl": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_t.jpg",
    "overlays": [
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_79A3882A_6E3B_375A_41A5_1A06354BFB30",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 4)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.51,
        "yaw": -125.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 17,
           "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_0_HS_0_0_0_map.gif"
          }
         ]
        },
        "pitch": -45.79
       }
      ],
      "rollOverDisplay": false,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -125.32,
        "hfov": 19.51,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 285,
           "class": "ImageResourceLevel",
           "width": 318,
           "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_0_HS_0_0.png"
          }
         ]
        },
        "pitch": -45.79
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_776B02BE_6E35_18BA_41D8_2509BEAD4DCA",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 5)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 10.6,
        "yaw": 98.84,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 28,
           "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_0_HS_1_0_0_map.gif"
          }
         ]
        },
        "pitch": -20.94
       }
      ],
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 98.84,
        "hfov": 10.6,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 73,
           "class": "ImageResourceLevel",
           "width": 129,
           "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_0_HS_1_0.png"
          }
         ]
        },
        "pitch": -20.94
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_76624CBA_6E35_08BA_41BF_9626A6FA16FE",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 2)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.34,
        "yaw": 117.04,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 35,
           "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_0_HS_2_0_0_map.gif"
          }
         ]
        },
        "pitch": -39.7
       }
      ],
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": 117.04,
        "hfov": 19.34,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 128,
           "class": "ImageResourceLevel",
           "width": 286,
           "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_0_HS_2_0.png"
          }
         ]
        },
        "pitch": -39.7
       }
      ]
     },
     {
      "enabledInCardboard": true,
      "class": "HotspotPanoramaOverlay",
      "id": "overlay_7663D5B9_6E37_1946_41B8_C642670A8C7A",
      "useHandCursor": true,
      "data": {
       "label": "Image"
      },
      "areas": [
       {
        "mapColor": "#FF0000",
        "class": "HotspotPanoramaOverlayArea",
        "click": "this.mainPlayList.set('selectedIndex', 6)"
       }
      ],
      "maps": [
       {
        "class": "HotspotPanoramaOverlayMap",
        "hfov": 19.85,
        "yaw": -15.32,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 16,
           "class": "ImageResourceLevel",
           "width": 21,
           "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_0_HS_3_0_0_map.gif"
          }
         ]
        },
        "pitch": -45.86
       }
      ],
      "rollOverDisplay": true,
      "items": [
       {
        "class": "HotspotPanoramaOverlayImage",
        "yaw": -15.32,
        "hfov": 19.85,
        "image": {
         "class": "ImageResource",
         "levels": [
          {
           "height": 245,
           "class": "ImageResourceLevel",
           "width": 324,
           "url": "media/panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_0_HS_3_0.png"
          }
         ]
        },
        "pitch": -45.86
       }
      ]
     }
    ],
    "sphere": {
     "class": "ImageResource",
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
     ]
    }
   }
  ]
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
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 0, '#000000')"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CCE155_6FFF_F9CE_41DA_2F046ADFB975, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CCE155_6FFF_F9CE_41DA_2F046ADFB975",
    "media": "this.panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4",
    "camera": "this.panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CC3156_6FFF_F9CA_41A3_2884931C7BE6, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CC3156_6FFF_F9CA_41A3_2884931C7BE6",
    "media": "this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F",
    "camera": "this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CF8156_6FFF_F9CA_41B6_39789D769EEB, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CF8156_6FFF_F9CA_41B6_39789D769EEB",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CFD156_6FFF_F9CA_41D6_120B70A3FDC1, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CFD156_6FFF_F9CA_41D6_120B70A3FDC1",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CF1156_6FFF_F9CA_41C4_BB95B3769557, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CF1156_6FFF_F9CA_41C4_BB95B3769557",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CE8156_6FFF_F9CA_41C7_E333B1F30056, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CE8156_6FFF_F9CA_41C7_E333B1F30056",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CED156_6FFF_F9CA_41DA_D99CF5131A0E, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CED156_6FFF_F9CA_41DA_D99CF5131A0E",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CE2156_6FFF_F9CA_41D3_50600142AC95, this.MapViewerMapPlayer); this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CE2156_6FFF_F9CA_41D3_50600142AC95",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76CE7156_6FFF_F9CA_41DB_A5B7F9E31E2D, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76CE7156_6FFF_F9CA_41DB_A5B7F9E31E2D",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E045C316_F4FC_2012_41DE_36747AB46079",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.mainPlayList, 10, 11)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.mainPlayList, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 10, this.video_E045C316_F4FC_2012_41DE_36747AB46079)"
   },
   {
    "start": "this.setMapLocation(this.PanoramaPlayListItem_76C91157_6FFF_F9CA_41BC_A16650707067, this.MapViewerMapPlayer)",
    "class": "PanoramaPlayListItem",
    "id": "PanoramaPlayListItem_76C91157_6FFF_F9CA_41BC_A16650707067",
    "media": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
    "camera": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera",
    "player": "this.MainViewerPanoramaPlayer",
    "end": "this.trigger('tourEnded')",
    "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 0)"
   }
  ]
 },
 {
  "class": "PlayList",
  "id": "ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "items": [
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_F60C0F54_F8E8_E4AD_41E9_FC77FCF00F7B",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, 1)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 0, '#000000')"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4",
    "camera": "this.panorama_7CA2294F_6E55_09DA_41D3_A9BE7967E7E4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 1, 2)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F",
    "camera": "this.panorama_7C1C5BA2_6E57_094A_41C1_D0FACDD7548F_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 2, 3)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544",
    "camera": "this.panorama_FEFCCF22_F39C_6032_41E7_AB095EC0E544_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 3, 4)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263",
    "camera": "this.panorama_FD16EB22_F394_2032_41BE_26631E398263_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 4, 5)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1",
    "camera": "this.panorama_FE60E9A8_F3AC_203F_41E6_FADDED1EC8E1_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 5, 6)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067",
    "camera": "this.panorama_FD195ED5_F3B4_2016_41DF_A245F443E067_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 6, 7)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B",
    "camera": "this.panorama_FD266369_F3B4_E03E_41A1_E5C10B22420B_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 7, 8)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4",
    "camera": "this.panorama_FE4C2862_F3BC_2032_41D4_08E7E09F1CD4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 8, 9)",
    "start": "this.MainViewerPanoramaPlayer.set('displayPlaybackBar', false)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4",
    "camera": "this.panorama_FC11C58F_F3BC_60F2_41CD_2537B70420D4_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 9, 10)"
   },
   {
    "class": "VideoPlayListItem",
    "player": "this.MainViewerVideoPlayer",
    "media": "this.video_E045C316_F4FC_2012_41DE_36747AB46079",
    "begin": "this.fixTogglePlayPauseButton(this.MainViewerVideoPlayer); this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, 11)",
    "start": "this.MainViewerVideoPlayer.set('displayPlaybackBar', true); this.changeBackgroundWhilePlay(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, '#000000'); this.pauseGlobalAudiosWhilePlayItem(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 10, this.video_E045C316_F4FC_2012_41DE_36747AB46079)"
   },
   {
    "class": "PanoramaPlayListItem",
    "player": "this.MainViewerPanoramaPlayer",
    "media": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C",
    "camera": "this.panorama_F212DE78_F8EF_2566_41E8_0151A44DC50C_camera",
    "begin": "this.setEndToItemIndex(this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist, 11, 0)"
   }
  ]
 },
 "this.map_FC481C0E_F777_110B_41E3_8C6BF7C7966B",
 {
  "class": "PlayList",
  "id": "playList_76CDA155_6FFF_F9CE_4190_371D358E6851",
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
  "id": "playList_76CDB155_6FFF_F9CE_41D3_040D59DC81C7",
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
  "class": "PanoramaCamera",
  "id": "camera_76DD1162_6FFF_F9CA_41C8_F51D6BA96C40",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -54.39,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -129.86,
     "path": "shortest",
     "pitchSpeed": 13.49,
     "yawSpeed": 26.09,
     "easing": "cubic_in_out",
     "targetPitch": -5.68
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -32.59,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.54
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_76A4E16C_6FFF_F9DF_41D6_00BD7F1CA88E",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 29.54,
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
  "class": "PanoramaCamera",
  "id": "camera_76A2B172_6FFF_F9CA_41D1_9D2B4F469B94",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": -14.57,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.78,
     "path": "shortest",
     "pitchSpeed": 12.85,
     "yawSpeed": 24.81,
     "easing": "cubic_in_out",
     "targetPitch": -22.95
    },
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
  "class": "PanoramaCamera",
  "id": "camera_76B1F17C_6FFF_F9BE_41B5_DF66E6439E5F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -24.4,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 166.43,
     "path": "shortest",
     "pitchSpeed": 16.64,
     "yawSpeed": 32.43,
     "easing": "cubic_in_out",
     "targetPitch": -18.07
    },
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
  "class": "PanoramaCamera",
  "id": "camera_7681E186_6FFF_F94A_41D6_83401C65EB94",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 25.5,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 119.21,
     "path": "shortest",
     "pitchSpeed": 6.46,
     "yawSpeed": 11.98,
     "easing": "cubic_in_out",
     "targetPitch": 1.15
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -155.98,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -3.21
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_769D1190_6FFF_F946_41D8_2C1C2913E918",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 148.5,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -129.86,
     "path": "shortest",
     "pitchSpeed": 46.94,
     "yawSpeed": 93.3,
     "easing": "cubic_in_out",
     "targetPitch": -5.68
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -32.59,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.54
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_766E919B_6FFF_F97A_41CF_CCB281E3B42C",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": -48.25,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -177.99,
     "path": "shortest",
     "pitchSpeed": 7.72,
     "yawSpeed": 14.51,
     "easing": "cubic_in_out",
     "targetPitch": -17.01
    },
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
  "class": "PanoramaCamera",
  "id": "camera_767AC1B8_6FFF_F946_41D1_83071E247BEF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 47.61,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -129.86,
     "path": "shortest",
     "pitchSpeed": 30.3,
     "yawSpeed": 59.87,
     "easing": "cubic_in_out",
     "targetPitch": -5.68
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -32.59,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.54
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_765651D3_6FFF_F8CA_41D4_E1F1E11BB8CF",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 150.61,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 166.43,
     "path": "shortest",
     "pitchSpeed": 2.96,
     "yawSpeed": 4.94,
     "easing": "cubic_in_out",
     "targetPitch": -18.07
    },
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
  "class": "PanoramaCamera",
  "id": "camera_7623F1ED_6FFF_F8DE_41CD_B32A07A4D15F",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 131.45,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 166.43,
     "path": "shortest",
     "pitchSpeed": 4.21,
     "yawSpeed": 7.45,
     "easing": "cubic_in_out",
     "targetPitch": -18.07
    },
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
  "class": "PanoramaCamera",
  "id": "camera_763F2207_6FFF_FB4A_41BA_C42F90213EE8",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 123,
   "yaw": -165.75,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -150.34,
     "path": "shortest",
     "pitchSpeed": 3.28,
     "yawSpeed": 5.57,
     "easing": "cubic_in_out",
     "targetPitch": -15.76
    },
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
  "class": "PanoramaCamera",
  "id": "camera_760A8220_6FFF_FB47_41D3_25A09BBE1DFA",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "hfov": 122,
   "yaw": 135.13,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -141.78,
     "path": "shortest",
     "pitchSpeed": 26.47,
     "yawSpeed": 52.18,
     "easing": "cubic_in_out",
     "targetPitch": -22.95
    },
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
  "class": "PanoramaCamera",
  "id": "camera_77E4723B_6FFF_FBBA_41D4_20C044FD4634",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -163.68,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -129.86,
     "path": "shortest",
     "pitchSpeed": 6.66,
     "yawSpeed": 12.37,
     "easing": "cubic_in_out",
     "targetPitch": -5.68
    },
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": -32.59,
     "path": "shortest",
     "pitchSpeed": 17.05,
     "yawSpeed": 33.25,
     "easing": "cubic_in_out",
     "targetPitch": -4.54
    }
   ],
   "restartMovementOnUserInteraction": false
  }
 },
 {
  "class": "PanoramaCamera",
  "id": "camera_77FD6245_6FFF_FBCE_41C2_5903B36C6894",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -96.12,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 58.36,
     "path": "shortest",
     "pitchSpeed": 20.99,
     "yawSpeed": 41.17,
     "easing": "linear",
     "targetPitch": -4.92
    },
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
  "class": "PanoramaCamera",
  "id": "camera_77D5B24F_6FFF_FBDA_41D2_714DBAB3B61D",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": -88.34,
   "pitch": 0
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
  "class": "PanoramaCamera",
  "id": "camera_77D8E255_6FFF_FBCE_41B9_10E1B2863B2A",
  "automaticZoomSpeed": 10,
  "initialPosition": {
   "class": "PanoramaCameraPosition",
   "yaw": 38.06,
   "pitch": 0
  },
  "initialSequence": {
   "class": "PanoramaCameraSequence",
   "movements": [
    {
     "class": "TargetPanoramaCameraMovement",
     "targetYaw": 58.36,
     "path": "shortest",
     "pitchSpeed": 3.7,
     "yawSpeed": 6.43,
     "easing": "linear",
     "targetPitch": -4.92
    },
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
  "toolTipOpacity": 0.96,
  "class": "ViewerArea",
  "playbackBarHeadShadow": true,
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "toolTipPaddingLeft": 6,
  "toolTipPaddingTop": 4,
  "playbackBarProgressBackgroundColorDirection": "vertical",
  "toolTipTextShadowOpacity": 0.48,
  "progressBarBackgroundColorDirection": "vertical",
  "playbackBarHeadBackgroundColor": [
   "#111111",
   "#666666"
  ],
  "toolTipTextShadowBlurRadius": 40,
  "progressOpacity": 1,
  "playbackBarProgressBorderSize": 0,
  "borderRadius": 0,
  "transitionDuration": 300,
  "toolTipShadowSpread": 0,
  "toolTipBackgroundColor": "transparent",
  "playbackBarHeadBorderColor": "#000000",
  "progressRight": 0,
  "toolTipShadowOpacity": 0.32,
  "progressBorderColor": "#000000",
  "playbackBarHeadBorderRadius": 0,
  "playbackBarBottom": 5,
  "shadow": false,
  "paddingLeft": 0,
  "playbackBarHeadShadowColor": "#000000",
  "paddingRight": 0,
  "toolTipTextShadowVerticalLength": 9,
  "progressBarBackgroundColor": [
   "#3399FF"
  ],
  "playbackBarHeadBorderSize": 0,
  "playbackBarHeadShadowVerticalLength": 0,
  "progressBackgroundColorDirection": "vertical",
  "playbackBarHeadShadowOpacity": 0.7,
  "toolTipTextShadowHorizontalLength": 3,
  "toolTipFontColor": "#606060",
  "minHeight": 50,
  "progressBackgroundColor": [
   "#FFFFFF"
  ],
  "playbackBarHeadShadowBlurRadius": 3,
  "playbackBarBackgroundOpacity": 1,
  "playbackBarHeadBackgroundColorRatios": [
   0,
   1
  ],
  "playbackBarBorderSize": 0,
  "paddingTop": 0,
  "playbackBarProgressBackgroundColor": [
   "#3399FF"
  ],
  "toolTipFontSize": 12,
  "playbackBarProgressBorderRadius": 0,
  "playbackBarHeadShadowHorizontalLength": 0,
  "playbackBarProgressOpacity": 1,
  "toolTipShadowVerticalLength": 36,
  "transitionMode": "blending",
  "progressBarBorderSize": 0,
  "playbackBarHeadBackgroundColorDirection": "vertical",
  "progressHeight": 10,
  "playbackBarRight": 0,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowHorizontalLength": 36,
  "paddingBottom": 0,
  "height": "100%",
  "width": "100%",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 56,
  "playbackBarLeft": 0,
  "playbackBarHeadHeight": 15,
  "progressBackgroundColorRatios": [
   0
  ],
  "playbackBarProgressBackgroundColorRatios": [
   0
  ],
  "progressBorderRadius": 0,
  "progressBarBorderColor": "#000000",
  "progressBarBackgroundColorRatios": [
   0
  ],
  "progressLeft": 0,
  "minWidth": 100,
  "progressBorderSize": 0,
  "playbackBarBackgroundColorDirection": "vertical",
  "playbackBarHeadOpacity": 1,
  "toolTipPaddingBottom": 4,
  "playbackBarProgressBorderColor": "#000000",
  "progressBottom": 0,
  "progressBarOpacity": 1,
  "id": "MainViewer",
  "toolTipBorderColor": "#767676",
  "playbackBarBorderRadius": 0,
  "toolTipBorderRadius": 3,
  "playbackBarOpacity": 1,
  "toolTipFontStyle": "normal",
  "playbackBarHeadWidth": 6,
  "playbackBarHeight": 10,
  "toolTipFontWeight": "normal",
  "playbackBarBorderColor": "#FFFFFF",
  "progressBackgroundOpacity": 1,
  "toolTipBorderSize": 3,
  "playbackBarBackgroundColor": [
   "#FFFFFF"
  ],
  "progressBarBorderRadius": 0
 },
 {
  "borderSize": 0,
  "scrollBarVisible": "rollOver",
  "itemThumbnailShadowVerticalLength": 3,
  "class": "ThumbnailList",
  "selectedItemLabelFontSize": 17,
  "itemThumbnailShadowBlurRadius": 8,
  "horizontalAlign": "left",
  "selectedItemLabelFontWeight": "bold",
  "borderRadius": 0,
  "selectedItemLabelFontColor": "#00CC33",
  "layout": "vertical",
  "itemThumbnailShadowOpacity": 0.54,
  "shadow": false,
  "selectedItemLabelTextDecoration": "underline",
  "itemVerticalAlign": "middle",
  "paddingLeft": 0,
  "paddingRight": 0,
  "minHeight": 20,
  "rollOverItemLabelFontWeight": "bold",
  "playList": "this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist",
  "backgroundOpacity": 0,
  "itemLabelTextDecoration": "none",
  "itemLabelFontWeight": "normal",
  "itemBackgroundOpacity": 0,
  "itemLabelHorizontalAlign": "center",
  "itemLabelFontSize": 14,
  "itemThumbnailHeight": 87,
  "itemThumbnailScaleMode": "fit_outside",
  "itemPaddingBottom": 3,
  "paddingTop": 0,
  "itemPaddingTop": 3,
  "scrollBarColor": "#FFFFFF",
  "itemLabelGap": 0,
  "width": 185.05,
  "paddingBottom": 0,
  "height": "74.709%",
  "itemLabelFontFamily": "Arial",
  "itemPaddingRight": 3,
  "itemLabelFontColor": "#FFFFFF",
  "itemBackgroundColorDirection": "vertical",
  "itemThumbnailShadowColor": "#000000",
  "rollOverItemLabelFontSize": 15,
  "scrollBarWidth": 10,
  "itemThumbnailBorderRadius": 50,
  "rollOverItemBackgroundOpacity": 0,
  "rollOverItemLabelTextDecoration": "none",
  "itemMode": "normal",
  "scrollBarMargin": 2,
  "minWidth": 20,
  "itemHorizontalAlign": "center",
  "top": "9.51%",
  "rollOverItemLabelFontColor": "#0099CC",
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
  "itemThumbnailShadowHorizontalLength": 3,
  "scrollBarOpacity": 0.5,
  "itemThumbnailWidth": 136,
  "gap": 1,
  "itemThumbnailShadowSpread": 1,
  "itemPaddingLeft": 3,
  "right": "0.03%",
  "itemLabelPosition": "bottom",
  "itemBackgroundColorRatios": []
 },
 {
  "borderSize": 0,
  "class": "Image",
  "paddingBottom": 0,
  "height": "5.582%",
  "width": "37.846%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "url": "skin/Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3.png",
  "click": "this.openLink(\"https://www.mtviewhomes.com/\", \"_blank\")",
  "shadow": false,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "cursor": "hand",
  "maxWidth": 1694,
  "paddingLeft": 0,
  "paddingRight": 0,
  "id": "Image_2E97D9DE_1529_3E64_4179_F0F345FA48D3",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTV Leters"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "left": "29.2%",
  "paddingTop": 0,
  "maxHeight": 145
 },
 {
  "borderSize": 0,
  "class": "Image",
  "paddingBottom": 0,
  "height": "6.604%",
  "width": "9.212%",
  "horizontalAlign": "center",
  "borderRadius": 0,
  "url": "skin/Image_29DFC760_153B_325C_41B0_233A5070C287.png",
  "shadow": false,
  "scaleMode": "fit_inside",
  "minWidth": 1,
  "top": "0.05%",
  "maxWidth": 1412,
  "paddingLeft": 0,
  "paddingRight": 0,
  "id": "Image_29DFC760_153B_325C_41B0_233A5070C287",
  "backgroundOpacity": 0,
  "data": {
   "name": "MTV Logo"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "paddingTop": 0,
  "right": "24.72%",
  "maxHeight": 800
 },
 {
  "creationPolicy": "inAdvance",
  "borderSize": 0,
  "children": [
   "this.MapViewer"
  ],
  "overflow": "visible",
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "gap": 0,
  "scrollBarColor": "#000000",
  "height": "80.818%",
  "width": "100%",
  "paddingBottom": 75,
  "horizontalAlign": "left",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingLeft": 10,
  "paddingRight": 170,
  "visible": false,
  "shadow": false,
  "id": "Container_295E4D6D_1539_F625_41B0_5613D8071992",
  "backgroundOpacity": 0,
  "data": {
   "name": "Container18244"
  },
  "verticalAlign": "bottom",
  "minHeight": 1,
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "scrollBarOpacity": 0,
  "contentOpaque": false
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
      "class": "Label",
      "paddingBottom": 0,
      "fontSize": 42,
      "width": "44.135%",
      "height": "48%",
      "textDecoration": "none",
      "borderRadius": 0,
      "text": "Floor Plan",
      "fontFamily": "Arial",
      "fontStyle": "normal",
      "fontWeight": "normal",
      "minWidth": 60,
      "horizontalAlign": "right",
      "maxWidth": 8000,
      "paddingLeft": 0,
      "paddingRight": 0,
      "shadow": false,
      "id": "Label_297A04E6_14DE_F624_419F_3EE2A1E8D8E7",
      "backgroundOpacity": 0,
      "data": {
       "name": "Label20305"
      },
      "verticalAlign": "middle",
      "minHeight": 60,
      "fontColor": "#000000",
      "paddingTop": 0,
      "maxHeight": 8000
     },
     {
      "borderSize": 0,
      "class": "IconButton",
      "mode": "toggle",
      "width": 57.3,
      "paddingBottom": 0,
      "height": 57.5,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "click": "if(!this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, true, 0, null, null, false) } else if(this.Container_295E4D6D_1539_F625_41B0_5613D8071992.get('visible')){ this.setComponentVisibility(this.Container_295E4D6D_1539_F625_41B0_5613D8071992, false, 0, null, null, false) }",
      "pressedIconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA_pressed.png",
      "iconURL": "skin/IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA.png",
      "minWidth": 0,
      "cursor": "hand",
      "paddingLeft": 0,
      "paddingRight": 0,
      "shadow": false,
      "id": "IconButton_2E9110C6_1559_CE64_41B1_73362D1095FA",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49925"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "transparencyActive": true,
      "paddingTop": 0
     }
    ],
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "scrollBarColor": "#000000",
    "height": "100%",
    "width": "75%",
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingLeft": 0,
    "paddingRight": 0,
    "shadow": false,
    "id": "Container_14C78FA6_02B9_D901_4106_D4A19767B3C0",
    "backgroundOpacity": 0,
    "data": {
     "name": "1left"
    },
    "verticalAlign": "bottom",
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "overflow": "scroll"
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "children": [
     {
      "borderSize": 0,
      "class": "IconButton",
      "mode": "toggle",
      "width": 62.65,
      "paddingBottom": 0,
      "height": 56.91,
      "horizontalAlign": "center",
      "borderRadius": 0,
      "pressedIconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F_pressed.png",
      "iconURL": "skin/IconButton_269C43F0_155A_D23B_41AE_0E492979790F.png",
      "minWidth": 0,
      "cursor": "hand",
      "paddingLeft": 0,
      "paddingRight": 0,
      "shadow": false,
      "id": "IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
      "backgroundOpacity": 0,
      "data": {
       "name": "Button49930"
      },
      "verticalAlign": "middle",
      "minHeight": 0,
      "transparencyActive": true,
      "paddingTop": 0
     },
     "this.IconButton_2DD5ACD8_1559_366C_41AD_617EDA756A76"
    ],
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "scrollBarColor": "#000000",
    "height": "100%",
    "width": "25%",
    "paddingBottom": 0,
    "horizontalAlign": "center",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingLeft": 0,
    "paddingRight": 0,
    "shadow": false,
    "id": "Container_1430A2C2_02BA_AB00_40E2_9CE642BF8400",
    "backgroundOpacity": 0,
    "data": {
     "name": "1middle"
    },
    "verticalAlign": "bottom",
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "overflow": "scroll"
   },
   {
    "creationPolicy": "inAdvance",
    "borderSize": 0,
    "class": "Container",
    "scrollBarVisible": "rollOver",
    "gap": 10,
    "scrollBarColor": "#000000",
    "height": "100%",
    "width": "25%",
    "paddingBottom": 0,
    "horizontalAlign": "right",
    "borderRadius": 0,
    "scrollBarWidth": 10,
    "layout": "horizontal",
    "scrollBarMargin": 2,
    "minWidth": 1,
    "paddingLeft": 0,
    "paddingRight": 0,
    "shadow": false,
    "id": "Container_14A15C37_02BB_BF00_4151_81CC9AE724F2",
    "backgroundOpacity": 0,
    "data": {
     "name": "1right"
    },
    "verticalAlign": "bottom",
    "minHeight": 1,
    "scrollBarOpacity": 0.5,
    "paddingTop": 0,
    "contentOpaque": false,
    "overflow": "scroll"
   }
  ],
  "overflow": "visible",
  "class": "Container",
  "scrollBarVisible": "rollOver",
  "scrollBarColor": "#000000",
  "height": "10%",
  "paddingBottom": 2,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "scrollBarWidth": 10,
  "layout": "horizontal",
  "scrollBarMargin": 2,
  "minWidth": 1,
  "paddingLeft": 2,
  "paddingRight": 2,
  "shadow": false,
  "id": "Container_EE9C3224_FD66_57E8_41EF_73BEBD124236",
  "backgroundOpacity": 0,
  "data": {
   "name": "Global"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "bottom": "0%",
  "left": "0%",
  "paddingTop": 0,
  "gap": 10,
  "scrollBarOpacity": 0.5,
  "right": "0%",
  "contentOpaque": false
 },
 {
  "toolTipShadowVerticalLength": 36,
  "borderSize": 0,
  "toolTipBorderSize": 3,
  "toolTipOpacity": 0.96,
  "class": "IconButton",
  "toolTipFontFamily": "Arial",
  "toolTipDisplayTime": 600,
  "mode": "toggle",
  "toolTipPaddingLeft": 6,
  "width": 67.4,
  "toolTipPaddingTop": 4,
  "paddingBottom": 0,
  "height": 62.29,
  "toolTipTextShadowOpacity": 0.48,
  "toolTipTextShadowColor": "#000000",
  "toolTipShadowColor": "#333333",
  "toolTipShadowBlurRadius": 56,
  "toolTipTextShadowBlurRadius": 40,
  "toolTipShadowHorizontalLength": 36,
  "horizontalAlign": "center",
  "borderRadius": 0,
  "toolTipBackgroundColor": "transparent",
  "toolTipShadowSpread": 0,
  "toolTipShadowOpacity": 0.32,
  "iconURL": "skin/IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE.png",
  "minWidth": 1,
  "toolTipTextShadowVerticalLength": 9,
  "cursor": "hand",
  "maxWidth": 128,
  "paddingLeft": 0,
  "paddingRight": 0,
  "toolTipPaddingBottom": 4,
  "shadow": false,
  "toolTip": "Fullscreen",
  "backgroundOpacity": 0,
  "data": {
   "name": "IconButton1493"
  },
  "verticalAlign": "middle",
  "minHeight": 1,
  "bottom": "0.04%",
  "id": "IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
  "toolTipBorderColor": "#767676",
  "toolTipTextShadowHorizontalLength": 3,
  "toolTipFontColor": "#606060",
  "toolTipBorderRadius": 3,
  "transparencyActive": true,
  "toolTipFontWeight": "normal",
  "toolTipFontStyle": "normal",
  "paddingTop": 0,
  "maxHeight": 128,
  "toolTipFontSize": 12,
  "right": "0.06%",
  "toolTipPaddingRight": 6
 }
], 
 "creationPolicy": "inAdvance",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "class": "Player",
 "start": "this.syncPlaylists([this.ThumbnailList_0CA7F118_14F9_CFEC_419C_4F207A178114_playlist,this.mainPlayList]); this.mainPlayList.set('selectedIndex', 0); this.playList_76CDB155_6FFF_F9CE_41D3_040D59DC81C7.set('selectedIndex', 0); if(!this.get('fullscreenAvailable')) { [this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE].forEach(function(component) { component.set('visible', false); }) }",
 "scrollBarVisible": "rollOver",
 "gap": 10,
 "vrPolyfillScale": 0.5,
 "paddingBottom": 0,
 "height": "100%",
 "width": "100%",
 "scrollBarColor": "#000000",
 "horizontalAlign": "left",
 "borderRadius": 0,
 "buttonToggleMute": "this.IconButton_269C43F0_155A_D23B_41AE_0E492979790F",
 "scrollBarWidth": 10,
 "mobileMipmappingEnabled": true,
 "layout": "absolute",
 "scrollBarMargin": 2,
 "minWidth": 20,
 "scripts": {
  "changeBackgroundWhilePlay": function(playList, index, color){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ playList.unbind('change', changeFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playList.bind('change', changeFunction, this); } },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else if(player.get('state') == 'playing') { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "autotriggerAtStart": function(player, callback){  var stateChangeFunction = function(event){ if(event.data.state == 'playing'){ callback(); player.unbind('stateChange', stateChangeFunction, this); } }; player.bind('stateChange', stateChangeFunction, this); },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "existsKey": function(key){  return key in window; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "openLink": function(url, name){  if(url == location.href) { return; } if (name == '_blank' && window && window.process && window.process.versions && window.process.versions['electron']){ if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf') { var shell = require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "resumeGlobalAudios": function(caller, excludeAudios){  if(window.currentGlobalAudiosActionCaller && window.currentGlobalAudiosActionCaller != caller) return; window.currentGlobalAudiosActionCaller = undefined; var audios = window.currentGlobalAudios; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(excludeAudios == undefined || excludeAudios.indexOf(a) == -1) audios[audio].play(); } },
  "unregisterKey": function(key){  delete window[key]; },
  "shareGoogle": function(url){  window.open('https://plus.google.com/share?url=' + url, '_blank'); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, containsAudio){  var self = this; var closeFunction = function(){ self.MainViewer.set('toolTipEnabled', true); this.resumePlayers(playersPaused, !containsAudio); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = media.get('width'); var mediaHeight = media.get('height'); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = w.get('footerHeight'); var headerHeight = w.get('headerHeight'); if(!headerHeight) { var closeButtonHeight = w.get('closeButtonIconHeight') + w.get('closeButtonPaddingTop') + w.get('closeButtonPaddingBottom'); var titleHeight = w.get('titleFontSize') + w.get('titlePaddingTop') + w.get('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += w.get('headerPaddingTop') + w.get('headerPaddingBottom'); } if(!footerHeight) { footerHeight = 0; } var contentWindowWidth = windowWidth - w.get('bodyPaddingLeft') - w.get('bodyPaddingRight') - w.get('paddingLeft') - w.get('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - w.get('bodyPaddingTop') - w.get('bodyPaddingBottom') - w.get('paddingTop') - w.get('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + w.get('bodyPaddingLeft') + w.get('bodyPaddingRight') + w.get('paddingLeft') + w.get('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + w.get('bodyPaddingTop') + w.get('bodyPaddingBottom') + w.get('paddingTop') + w.get('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - w.get('actualWidth')) * 0.5); w.set('y', (parentHeight - w.get('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var isVideo = media.get('class') == 'Video'; if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "setMainMediaByIndex": function(index){  if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); } },
  "registerKey": function(key, value){  window[key] = value; },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var frames = panorama.get('frames'); for(var j = 0; j<frames.length; ++j){ var frame = frames[j]; var overlays = frame.get('overlays'); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } } return undefined; },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); self.resumeGlobalAudios(); }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); this.pauseGlobalAudios(); popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getKey": function(key){  return window[key]; },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } this.playGlobalAudio(audio, endCallback); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setStartTimeVideoSync": function(media, player){  this.setStartTimeVideo(media, player.get('currentTime')); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media) return playList; } } return undefined; },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose(true); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose(false); } }; var disposeCallback = function(){ dispose(false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, self); }; itemDispatcher.bind('end', restoreInitialPositionFunction, self); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } playListDispatcher.set('selectedIndex', indexDispatcher); if(player){ player.unbind('stateChange', stateChangeFunction, self); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, self); } } if(sameViewerArea){ if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, self); } else{ viewerArea.set('visible', false); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { var playerClass = currentPlayer.get('class'); if(playerClass == 'PanoramaPlayer') { mediaDispatcher = currentPlayer.get('panorama'); if(mediaDispatcher == undefined) medisDispatcher = currentPlayer.get('video'); } else if(playerClass == 'VideoPlayer' || playerClass == 'Video360Player') mediaDispatcher = currentPlayer.get('video'); else if(playerClass == 'PhotoAlbumPlayer') mediaDispatcher = currentPlayer.get('photoAlbum'); else if(playerClass == 'MapPlayer') mediaDispatcher = currentPlayer.get('map'); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var viewerArea = item.get('player').get('viewerArea'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var player = undefined; var buttons = []; if(item.get('player') != itemDispatcher.get('player') || !mediaDispatcherByParam){ player = item.get('player'); if(player.get('class') == 'PanoramaPlayer' && item.get('media').get('class') != 'Video360') { var addButtons = function(property){ var value = player.get(property); if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } } else { setTimeout(function(){player.bind('stateChange', stateChangeFunction, self)}, 100); } } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "pauseGlobalAudios": function(caller, excludeAudios){  var audios = window.currentGlobalAudios; window.currentGlobalAudiosActionCaller = caller; if(!audios) return; for(var audio in audios){ var a = audios[audio]; if(a.get('state') == 'playing' && (excludeAudios == undefined || excludeAudios.indexOf(a) == -1)) a.pause(); } },
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var button = player.get('buttonPlayPause'); if(typeof button !== 'undefined' && player.get('state') == 'playing'){ button.set('pressed', true); } },
  "setStartTimeVideo": function(media, time){  var items = this.getPlayListItems(media); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, caller){  var audios = window.currentGlobalAudios; if(!audios) return; var resumeFunction = this.resumeGlobalAudios; var endFunction = function(){ if(playList.get('selectedIndex') != index) { resumeFunction(caller); } }; this.pauseGlobalAudios(caller); this.executeFunctionWhenChange(playList, index, endFunction, endFunction); },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ if(items[i].get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return; } } },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var self = this; var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction(); if(endFunction && endObject) endObject.unbind('end', endFunction, self); playList.unbind('change', changePlayListFunction, self); } }; if(endFunction){ var playListItem = playList.get('items')[index]; var playListItemClass = playListItem.get('class'); if(playListItemClass == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); endObject = camera.get('initialSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchEnabled') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } }
 },
 "paddingLeft": 0,
 "paddingRight": 0,
 "shadow": false,
 "id": "rootPlayer",
 "data": {
  "name": "Player463"
 },
 "verticalAlign": "top",
 "minHeight": 20,
 "scrollBarOpacity": 0.5,
 "paddingTop": 0,
 "buttonToggleFullscreen": "this.IconButton_236DD629_1559_522C_41A1_7BD9C3F901AE",
 "mouseWheelEnabled": true,
 "contentOpaque": false,
 "overflow": "visible"
})