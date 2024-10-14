/*
   Licensed to the Apache Software Foundation (ASF) under one or more
   contributor license agreements.  See the NOTICE file distributed with
   this work for additional information regarding copyright ownership.
   The ASF licenses this file to You under the Apache License, Version 2.0
   (the "License"); you may not use this file except in compliance with
   the License.  You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
$(document).ready(function() {

    $(".click-title").mouseenter( function(    e){
        e.preventDefault();
        this.style.cursor="pointer";
    });
    $(".click-title").mousedown( function(event){
        event.preventDefault();
    });

    // Ugly code while this script is shared among several pages
    try{
        refreshHitsPerSecond(true);
    } catch(e){}
    try{
        refreshResponseTimeOverTime(true);
    } catch(e){}
    try{
        refreshResponseTimePercentiles();
    } catch(e){}
});


var responseTimePercentilesInfos = {
        data: {"result": {"minY": 72.0, "minX": 0.0, "maxY": 2140.0, "series": [{"data": [[0.0, 72.0], [0.1, 72.0], [0.2, 72.0], [0.3, 72.0], [0.4, 72.0], [0.5, 72.0], [0.6, 72.0], [0.7, 72.0], [0.8, 72.0], [0.9, 72.0], [1.0, 73.0], [1.1, 73.0], [1.2, 73.0], [1.3, 73.0], [1.4, 73.0], [1.5, 74.0], [1.6, 74.0], [1.7, 74.0], [1.8, 74.0], [1.9, 74.0], [2.0, 74.0], [2.1, 74.0], [2.2, 74.0], [2.3, 74.0], [2.4, 74.0], [2.5, 74.0], [2.6, 74.0], [2.7, 74.0], [2.8, 74.0], [2.9, 74.0], [3.0, 74.0], [3.1, 74.0], [3.2, 74.0], [3.3, 74.0], [3.4, 74.0], [3.5, 74.0], [3.6, 74.0], [3.7, 74.0], [3.8, 74.0], [3.9, 74.0], [4.0, 74.0], [4.1, 74.0], [4.2, 74.0], [4.3, 74.0], [4.4, 74.0], [4.5, 75.0], [4.6, 75.0], [4.7, 75.0], [4.8, 75.0], [4.9, 75.0], [5.0, 75.0], [5.1, 75.0], [5.2, 75.0], [5.3, 75.0], [5.4, 75.0], [5.5, 75.0], [5.6, 75.0], [5.7, 75.0], [5.8, 75.0], [5.9, 75.0], [6.0, 75.0], [6.1, 75.0], [6.2, 75.0], [6.3, 75.0], [6.4, 75.0], [6.5, 75.0], [6.6, 75.0], [6.7, 75.0], [6.8, 75.0], [6.9, 75.0], [7.0, 75.0], [7.1, 75.0], [7.2, 75.0], [7.3, 75.0], [7.4, 75.0], [7.5, 76.0], [7.6, 76.0], [7.7, 76.0], [7.8, 76.0], [7.9, 76.0], [8.0, 76.0], [8.1, 76.0], [8.2, 76.0], [8.3, 76.0], [8.4, 76.0], [8.5, 76.0], [8.6, 76.0], [8.7, 76.0], [8.8, 76.0], [8.9, 76.0], [9.0, 76.0], [9.1, 76.0], [9.2, 76.0], [9.3, 76.0], [9.4, 76.0], [9.5, 76.0], [9.6, 76.0], [9.7, 76.0], [9.8, 76.0], [9.9, 76.0], [10.0, 76.0], [10.1, 76.0], [10.2, 76.0], [10.3, 76.0], [10.4, 76.0], [10.5, 76.0], [10.6, 76.0], [10.7, 76.0], [10.8, 76.0], [10.9, 76.0], [11.0, 76.0], [11.1, 76.0], [11.2, 76.0], [11.3, 76.0], [11.4, 76.0], [11.5, 76.0], [11.6, 76.0], [11.7, 76.0], [11.8, 76.0], [11.9, 76.0], [12.0, 77.0], [12.1, 77.0], [12.2, 77.0], [12.3, 77.0], [12.4, 77.0], [12.5, 77.0], [12.6, 77.0], [12.7, 77.0], [12.8, 77.0], [12.9, 77.0], [13.0, 77.0], [13.1, 77.0], [13.2, 77.0], [13.3, 77.0], [13.4, 77.0], [13.5, 77.0], [13.6, 77.0], [13.7, 77.0], [13.8, 77.0], [13.9, 77.0], [14.0, 77.0], [14.1, 77.0], [14.2, 77.0], [14.3, 77.0], [14.4, 77.0], [14.5, 77.0], [14.6, 77.0], [14.7, 77.0], [14.8, 77.0], [14.9, 77.0], [15.0, 77.0], [15.1, 77.0], [15.2, 77.0], [15.3, 77.0], [15.4, 77.0], [15.5, 78.0], [15.6, 78.0], [15.7, 78.0], [15.8, 78.0], [15.9, 78.0], [16.0, 78.0], [16.1, 78.0], [16.2, 78.0], [16.3, 78.0], [16.4, 78.0], [16.5, 78.0], [16.6, 78.0], [16.7, 78.0], [16.8, 78.0], [16.9, 78.0], [17.0, 78.0], [17.1, 78.0], [17.2, 78.0], [17.3, 78.0], [17.4, 78.0], [17.5, 78.0], [17.6, 78.0], [17.7, 78.0], [17.8, 78.0], [17.9, 78.0], [18.0, 78.0], [18.1, 78.0], [18.2, 78.0], [18.3, 78.0], [18.4, 78.0], [18.5, 78.0], [18.6, 78.0], [18.7, 78.0], [18.8, 78.0], [18.9, 78.0], [19.0, 78.0], [19.1, 78.0], [19.2, 78.0], [19.3, 78.0], [19.4, 78.0], [19.5, 78.0], [19.6, 78.0], [19.7, 78.0], [19.8, 78.0], [19.9, 78.0], [20.0, 78.0], [20.1, 78.0], [20.2, 78.0], [20.3, 78.0], [20.4, 78.0], [20.5, 79.0], [20.6, 79.0], [20.7, 79.0], [20.8, 79.0], [20.9, 79.0], [21.0, 79.0], [21.1, 79.0], [21.2, 79.0], [21.3, 79.0], [21.4, 79.0], [21.5, 79.0], [21.6, 79.0], [21.7, 79.0], [21.8, 79.0], [21.9, 79.0], [22.0, 79.0], [22.1, 79.0], [22.2, 79.0], [22.3, 79.0], [22.4, 79.0], [22.5, 79.0], [22.6, 79.0], [22.7, 79.0], [22.8, 79.0], [22.9, 79.0], [23.0, 79.0], [23.1, 79.0], [23.2, 79.0], [23.3, 79.0], [23.4, 79.0], [23.5, 79.0], [23.6, 79.0], [23.7, 79.0], [23.8, 79.0], [23.9, 79.0], [24.0, 79.0], [24.1, 79.0], [24.2, 79.0], [24.3, 79.0], [24.4, 79.0], [24.5, 80.0], [24.6, 80.0], [24.7, 80.0], [24.8, 80.0], [24.9, 80.0], [25.0, 80.0], [25.1, 80.0], [25.2, 80.0], [25.3, 80.0], [25.4, 80.0], [25.5, 80.0], [25.6, 80.0], [25.7, 80.0], [25.8, 80.0], [25.9, 80.0], [26.0, 80.0], [26.1, 80.0], [26.2, 80.0], [26.3, 80.0], [26.4, 80.0], [26.5, 80.0], [26.6, 80.0], [26.7, 80.0], [26.8, 80.0], [26.9, 80.0], [27.0, 80.0], [27.1, 80.0], [27.2, 80.0], [27.3, 80.0], [27.4, 80.0], [27.5, 81.0], [27.6, 81.0], [27.7, 81.0], [27.8, 81.0], [27.9, 81.0], [28.0, 81.0], [28.1, 81.0], [28.2, 81.0], [28.3, 81.0], [28.4, 81.0], [28.5, 81.0], [28.6, 81.0], [28.7, 81.0], [28.8, 81.0], [28.9, 81.0], [29.0, 81.0], [29.1, 81.0], [29.2, 81.0], [29.3, 81.0], [29.4, 81.0], [29.5, 81.0], [29.6, 81.0], [29.7, 81.0], [29.8, 81.0], [29.9, 81.0], [30.0, 81.0], [30.1, 81.0], [30.2, 81.0], [30.3, 81.0], [30.4, 81.0], [30.5, 81.0], [30.6, 81.0], [30.7, 81.0], [30.8, 81.0], [30.9, 81.0], [31.0, 82.0], [31.1, 82.0], [31.2, 82.0], [31.3, 82.0], [31.4, 82.0], [31.5, 82.0], [31.6, 82.0], [31.7, 82.0], [31.8, 82.0], [31.9, 82.0], [32.0, 82.0], [32.1, 82.0], [32.2, 82.0], [32.3, 82.0], [32.4, 82.0], [32.5, 82.0], [32.6, 82.0], [32.7, 82.0], [32.8, 82.0], [32.9, 82.0], [33.0, 82.0], [33.1, 82.0], [33.2, 82.0], [33.3, 82.0], [33.4, 82.0], [33.5, 83.0], [33.6, 83.0], [33.7, 83.0], [33.8, 83.0], [33.9, 83.0], [34.0, 83.0], [34.1, 83.0], [34.2, 83.0], [34.3, 83.0], [34.4, 83.0], [34.5, 83.0], [34.6, 83.0], [34.7, 83.0], [34.8, 83.0], [34.9, 83.0], [35.0, 84.0], [35.1, 84.0], [35.2, 84.0], [35.3, 84.0], [35.4, 84.0], [35.5, 85.0], [35.6, 85.0], [35.7, 85.0], [35.8, 85.0], [35.9, 85.0], [36.0, 85.0], [36.1, 85.0], [36.2, 85.0], [36.3, 85.0], [36.4, 85.0], [36.5, 85.0], [36.6, 85.0], [36.7, 85.0], [36.8, 85.0], [36.9, 85.0], [37.0, 86.0], [37.1, 86.0], [37.2, 86.0], [37.3, 86.0], [37.4, 86.0], [37.5, 86.0], [37.6, 86.0], [37.7, 86.0], [37.8, 86.0], [37.9, 86.0], [38.0, 87.0], [38.1, 87.0], [38.2, 87.0], [38.3, 87.0], [38.4, 87.0], [38.5, 87.0], [38.6, 87.0], [38.7, 87.0], [38.8, 87.0], [38.9, 87.0], [39.0, 87.0], [39.1, 87.0], [39.2, 87.0], [39.3, 87.0], [39.4, 87.0], [39.5, 87.0], [39.6, 87.0], [39.7, 87.0], [39.8, 87.0], [39.9, 87.0], [40.0, 88.0], [40.1, 88.0], [40.2, 88.0], [40.3, 88.0], [40.4, 88.0], [40.5, 88.0], [40.6, 88.0], [40.7, 88.0], [40.8, 88.0], [40.9, 88.0], [41.0, 89.0], [41.1, 89.0], [41.2, 89.0], [41.3, 89.0], [41.4, 89.0], [41.5, 89.0], [41.6, 89.0], [41.7, 89.0], [41.8, 89.0], [41.9, 89.0], [42.0, 90.0], [42.1, 90.0], [42.2, 90.0], [42.3, 90.0], [42.4, 90.0], [42.5, 91.0], [42.6, 91.0], [42.7, 91.0], [42.8, 91.0], [42.9, 91.0], [43.0, 92.0], [43.1, 92.0], [43.2, 92.0], [43.3, 92.0], [43.4, 92.0], [43.5, 94.0], [43.6, 94.0], [43.7, 94.0], [43.8, 94.0], [43.9, 94.0], [44.0, 95.0], [44.1, 95.0], [44.2, 95.0], [44.3, 95.0], [44.4, 95.0], [44.5, 156.0], [44.6, 156.0], [44.7, 156.0], [44.8, 156.0], [44.9, 156.0], [45.0, 161.0], [45.1, 161.0], [45.2, 161.0], [45.3, 161.0], [45.4, 161.0], [45.5, 210.0], [45.6, 210.0], [45.7, 210.0], [45.8, 210.0], [45.9, 210.0], [46.0, 210.0], [46.1, 210.0], [46.2, 210.0], [46.3, 210.0], [46.4, 210.0], [46.5, 211.0], [46.6, 211.0], [46.7, 211.0], [46.8, 211.0], [46.9, 211.0], [47.0, 218.0], [47.1, 218.0], [47.2, 218.0], [47.3, 218.0], [47.4, 218.0], [47.5, 221.0], [47.6, 221.0], [47.7, 221.0], [47.8, 221.0], [47.9, 221.0], [48.0, 226.0], [48.1, 226.0], [48.2, 226.0], [48.3, 226.0], [48.4, 226.0], [48.5, 228.0], [48.6, 228.0], [48.7, 228.0], [48.8, 228.0], [48.9, 228.0], [49.0, 228.0], [49.1, 228.0], [49.2, 228.0], [49.3, 228.0], [49.4, 228.0], [49.5, 229.0], [49.6, 229.0], [49.7, 229.0], [49.8, 229.0], [49.9, 229.0], [50.0, 230.0], [50.1, 230.0], [50.2, 230.0], [50.3, 230.0], [50.4, 230.0], [50.5, 231.0], [50.6, 231.0], [50.7, 231.0], [50.8, 231.0], [50.9, 231.0], [51.0, 234.0], [51.1, 234.0], [51.2, 234.0], [51.3, 234.0], [51.4, 234.0], [51.5, 234.0], [51.6, 234.0], [51.7, 234.0], [51.8, 234.0], [51.9, 234.0], [52.0, 234.0], [52.1, 234.0], [52.2, 234.0], [52.3, 234.0], [52.4, 234.0], [52.5, 234.0], [52.6, 234.0], [52.7, 234.0], [52.8, 234.0], [52.9, 234.0], [53.0, 235.0], [53.1, 235.0], [53.2, 235.0], [53.3, 235.0], [53.4, 235.0], [53.5, 235.0], [53.6, 235.0], [53.7, 235.0], [53.8, 235.0], [53.9, 235.0], [54.0, 238.0], [54.1, 238.0], [54.2, 238.0], [54.3, 238.0], [54.4, 238.0], [54.5, 240.0], [54.6, 240.0], [54.7, 240.0], [54.8, 240.0], [54.9, 240.0], [55.0, 241.0], [55.1, 241.0], [55.2, 241.0], [55.3, 241.0], [55.4, 241.0], [55.5, 242.0], [55.6, 242.0], [55.7, 242.0], [55.8, 242.0], [55.9, 242.0], [56.0, 243.0], [56.1, 243.0], [56.2, 243.0], [56.3, 243.0], [56.4, 243.0], [56.5, 243.0], [56.6, 243.0], [56.7, 243.0], [56.8, 243.0], [56.9, 243.0], [57.0, 243.0], [57.1, 243.0], [57.2, 243.0], [57.3, 243.0], [57.4, 243.0], [57.5, 243.0], [57.6, 243.0], [57.7, 243.0], [57.8, 243.0], [57.9, 243.0], [58.0, 244.0], [58.1, 244.0], [58.2, 244.0], [58.3, 244.0], [58.4, 244.0], [58.5, 244.0], [58.6, 244.0], [58.7, 244.0], [58.8, 244.0], [58.9, 244.0], [59.0, 244.0], [59.1, 244.0], [59.2, 244.0], [59.3, 244.0], [59.4, 244.0], [59.5, 245.0], [59.6, 245.0], [59.7, 245.0], [59.8, 245.0], [59.9, 245.0], [60.0, 246.0], [60.1, 246.0], [60.2, 246.0], [60.3, 246.0], [60.4, 246.0], [60.5, 246.0], [60.6, 246.0], [60.7, 246.0], [60.8, 246.0], [60.9, 246.0], [61.0, 247.0], [61.1, 247.0], [61.2, 247.0], [61.3, 247.0], [61.4, 247.0], [61.5, 248.0], [61.6, 248.0], [61.7, 248.0], [61.8, 248.0], [61.9, 248.0], [62.0, 248.0], [62.1, 248.0], [62.2, 248.0], [62.3, 248.0], [62.4, 248.0], [62.5, 248.0], [62.6, 248.0], [62.7, 248.0], [62.8, 248.0], [62.9, 248.0], [63.0, 250.0], [63.1, 250.0], [63.2, 250.0], [63.3, 250.0], [63.4, 250.0], [63.5, 250.0], [63.6, 250.0], [63.7, 250.0], [63.8, 250.0], [63.9, 250.0], [64.0, 251.0], [64.1, 251.0], [64.2, 251.0], [64.3, 251.0], [64.4, 251.0], [64.5, 252.0], [64.6, 252.0], [64.7, 252.0], [64.8, 252.0], [64.9, 252.0], [65.0, 254.0], [65.1, 254.0], [65.2, 254.0], [65.3, 254.0], [65.4, 254.0], [65.5, 254.0], [65.6, 254.0], [65.7, 254.0], [65.8, 254.0], [65.9, 254.0], [66.0, 255.0], [66.1, 255.0], [66.2, 255.0], [66.3, 255.0], [66.4, 255.0], [66.5, 255.0], [66.6, 255.0], [66.7, 255.0], [66.8, 255.0], [66.9, 255.0], [67.0, 255.0], [67.1, 255.0], [67.2, 255.0], [67.3, 255.0], [67.4, 255.0], [67.5, 256.0], [67.6, 256.0], [67.7, 256.0], [67.8, 256.0], [67.9, 256.0], [68.0, 256.0], [68.1, 256.0], [68.2, 256.0], [68.3, 256.0], [68.4, 256.0], [68.5, 258.0], [68.6, 258.0], [68.7, 258.0], [68.8, 258.0], [68.9, 258.0], [69.0, 259.0], [69.1, 259.0], [69.2, 259.0], [69.3, 259.0], [69.4, 259.0], [69.5, 261.0], [69.6, 261.0], [69.7, 261.0], [69.8, 261.0], [69.9, 261.0], [70.0, 261.0], [70.1, 261.0], [70.2, 261.0], [70.3, 261.0], [70.4, 261.0], [70.5, 261.0], [70.6, 261.0], [70.7, 261.0], [70.8, 261.0], [70.9, 261.0], [71.0, 264.0], [71.1, 264.0], [71.2, 264.0], [71.3, 264.0], [71.4, 264.0], [71.5, 265.0], [71.6, 265.0], [71.7, 265.0], [71.8, 265.0], [71.9, 265.0], [72.0, 266.0], [72.1, 266.0], [72.2, 266.0], [72.3, 266.0], [72.4, 266.0], [72.5, 266.0], [72.6, 266.0], [72.7, 266.0], [72.8, 266.0], [72.9, 266.0], [73.0, 266.0], [73.1, 266.0], [73.2, 266.0], [73.3, 266.0], [73.4, 266.0], [73.5, 266.0], [73.6, 266.0], [73.7, 266.0], [73.8, 266.0], [73.9, 266.0], [74.0, 268.0], [74.1, 268.0], [74.2, 268.0], [74.3, 268.0], [74.4, 268.0], [74.5, 270.0], [74.6, 270.0], [74.7, 270.0], [74.8, 270.0], [74.9, 270.0], [75.0, 271.0], [75.1, 271.0], [75.2, 271.0], [75.3, 271.0], [75.4, 271.0], [75.5, 274.0], [75.6, 274.0], [75.7, 274.0], [75.8, 274.0], [75.9, 274.0], [76.0, 299.0], [76.1, 299.0], [76.2, 299.0], [76.3, 299.0], [76.4, 299.0], [76.5, 305.0], [76.6, 305.0], [76.7, 305.0], [76.8, 305.0], [76.9, 305.0], [77.0, 307.0], [77.1, 307.0], [77.2, 307.0], [77.3, 307.0], [77.4, 307.0], [77.5, 309.0], [77.6, 309.0], [77.7, 309.0], [77.8, 309.0], [77.9, 309.0], [78.0, 310.0], [78.1, 310.0], [78.2, 310.0], [78.3, 310.0], [78.4, 310.0], [78.5, 319.0], [78.6, 319.0], [78.7, 319.0], [78.8, 319.0], [78.9, 319.0], [79.0, 319.0], [79.1, 319.0], [79.2, 319.0], [79.3, 319.0], [79.4, 319.0], [79.5, 319.0], [79.6, 319.0], [79.7, 319.0], [79.8, 319.0], [79.9, 319.0], [80.0, 320.0], [80.1, 320.0], [80.2, 320.0], [80.3, 320.0], [80.4, 320.0], [80.5, 321.0], [80.6, 321.0], [80.7, 321.0], [80.8, 321.0], [80.9, 321.0], [81.0, 322.0], [81.1, 322.0], [81.2, 322.0], [81.3, 322.0], [81.4, 322.0], [81.5, 323.0], [81.6, 323.0], [81.7, 323.0], [81.8, 323.0], [81.9, 323.0], [82.0, 334.0], [82.1, 334.0], [82.2, 334.0], [82.3, 334.0], [82.4, 334.0], [82.5, 343.0], [82.6, 343.0], [82.7, 343.0], [82.8, 343.0], [82.9, 343.0], [83.0, 343.0], [83.1, 343.0], [83.2, 343.0], [83.3, 343.0], [83.4, 343.0], [83.5, 344.0], [83.6, 344.0], [83.7, 344.0], [83.8, 344.0], [83.9, 344.0], [84.0, 345.0], [84.1, 345.0], [84.2, 345.0], [84.3, 345.0], [84.4, 345.0], [84.5, 346.0], [84.6, 346.0], [84.7, 346.0], [84.8, 346.0], [84.9, 346.0], [85.0, 348.0], [85.1, 348.0], [85.2, 348.0], [85.3, 348.0], [85.4, 348.0], [85.5, 383.0], [85.6, 383.0], [85.7, 383.0], [85.8, 383.0], [85.9, 383.0], [86.0, 404.0], [86.1, 404.0], [86.2, 404.0], [86.3, 404.0], [86.4, 404.0], [86.5, 428.0], [86.6, 428.0], [86.7, 428.0], [86.8, 428.0], [86.9, 428.0], [87.0, 524.0], [87.1, 524.0], [87.2, 524.0], [87.3, 524.0], [87.4, 524.0], [87.5, 531.0], [87.6, 531.0], [87.7, 531.0], [87.8, 531.0], [87.9, 531.0], [88.0, 590.0], [88.1, 590.0], [88.2, 590.0], [88.3, 590.0], [88.4, 590.0], [88.5, 598.0], [88.6, 598.0], [88.7, 598.0], [88.8, 598.0], [88.9, 598.0], [89.0, 615.0], [89.1, 615.0], [89.2, 615.0], [89.3, 615.0], [89.4, 615.0], [89.5, 656.0], [89.6, 656.0], [89.7, 656.0], [89.8, 656.0], [89.9, 656.0], [90.0, 690.0], [90.1, 690.0], [90.2, 690.0], [90.3, 690.0], [90.4, 690.0], [90.5, 698.0], [90.6, 698.0], [90.7, 698.0], [90.8, 698.0], [90.9, 698.0], [91.0, 711.0], [91.1, 711.0], [91.2, 711.0], [91.3, 711.0], [91.4, 711.0], [91.5, 729.0], [91.6, 729.0], [91.7, 729.0], [91.8, 729.0], [91.9, 729.0], [92.0, 748.0], [92.1, 748.0], [92.2, 748.0], [92.3, 748.0], [92.4, 748.0], [92.5, 810.0], [92.6, 810.0], [92.7, 810.0], [92.8, 810.0], [92.9, 810.0], [93.0, 916.0], [93.1, 916.0], [93.2, 916.0], [93.3, 916.0], [93.4, 916.0], [93.5, 1048.0], [93.6, 1048.0], [93.7, 1048.0], [93.8, 1048.0], [93.9, 1048.0], [94.0, 1213.0], [94.1, 1213.0], [94.2, 1213.0], [94.3, 1213.0], [94.4, 1213.0], [94.5, 1263.0], [94.6, 1263.0], [94.7, 1263.0], [94.8, 1263.0], [94.9, 1263.0], [95.0, 1299.0], [95.1, 1299.0], [95.2, 1299.0], [95.3, 1299.0], [95.4, 1299.0], [95.5, 1302.0], [95.6, 1302.0], [95.7, 1302.0], [95.8, 1302.0], [95.9, 1302.0], [96.0, 1396.0], [96.1, 1396.0], [96.2, 1396.0], [96.3, 1396.0], [96.4, 1396.0], [96.5, 1503.0], [96.6, 1503.0], [96.7, 1503.0], [96.8, 1503.0], [96.9, 1503.0], [97.0, 1531.0], [97.1, 1531.0], [97.2, 1531.0], [97.3, 1531.0], [97.4, 1531.0], [97.5, 1603.0], [97.6, 1603.0], [97.7, 1603.0], [97.8, 1603.0], [97.9, 1603.0], [98.0, 1778.0], [98.1, 1778.0], [98.2, 1778.0], [98.3, 1778.0], [98.4, 1778.0], [98.5, 1782.0], [98.6, 1782.0], [98.7, 1782.0], [98.8, 1782.0], [98.9, 1782.0], [99.0, 1782.0], [99.1, 1782.0], [99.2, 1782.0], [99.3, 1782.0], [99.4, 1782.0], [99.5, 2140.0], [99.6, 2140.0], [99.7, 2140.0], [99.8, 2140.0], [99.9, 2140.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
        getOptions: function() {
            return {
                series: {
                    points: { show: false }
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentiles'
                },
                xaxis: {
                    tickDecimals: 1,
                    axisLabel: "Percentiles",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Percentile value in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : %x.2 percentile was %y ms"
                },
                selection: { mode: "xy" },
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentiles"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesPercentiles"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesPercentiles"), dataset, prepareOverviewOptions(options));
        }
};

/**
 * @param elementId Id of element where we display message
 */
function setEmptyGraph(elementId) {
    $(function() {
        $(elementId).text("No graph series with filter="+seriesFilter);
    });
}

// Response times percentiles
function refreshResponseTimePercentiles() {
    var infos = responseTimePercentilesInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimePercentiles");
        return;
    }
    if (isGraph($("#flotResponseTimesPercentiles"))){
        infos.createGraph();
    } else {
        var choiceContainer = $("#choicesResponseTimePercentiles");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesPercentiles", "#overviewResponseTimesPercentiles");
        $('#bodyResponseTimePercentiles .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimeDistributionInfos = {
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 89.0, "series": [{"data": [[0.0, 89.0], [2100.0, 1.0], [600.0, 4.0], [700.0, 3.0], [800.0, 1.0], [200.0, 62.0], [900.0, 1.0], [1000.0, 1.0], [300.0, 19.0], [1200.0, 3.0], [1300.0, 2.0], [1500.0, 2.0], [1600.0, 1.0], [100.0, 2.0], [400.0, 2.0], [1700.0, 3.0], [500.0, 4.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 2100.0, "title": "Response Time Distribution"}},
        getOptions: function() {
            var granularity = this.data.result.granularity;
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    barWidth: this.data.result.granularity
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " responses for " + label + " were between " + xval + " and " + (xval + granularity) + " ms";
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimeDistribution"), prepareData(data.result.series, $("#choicesResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshResponseTimeDistribution() {
    var infos = responseTimeDistributionInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeDistribution");
        return;
    }
    if (isGraph($("#flotResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var syntheticResponseTimeDistributionInfos = {
        data: {"result": {"minY": 7.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 174.0, "series": [{"data": [[0.0, 174.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 19.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 7.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
        getOptions: function() {
            return {
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendSyntheticResponseTimeDistribution'
                },
                xaxis:{
                    axisLabel: "Response times ranges",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                    tickLength:0,
                    min:-0.5,
                    max:3.5
                },
                yaxis: {
                    axisLabel: "Number of responses",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                bars : {
                    show: true,
                    align: "center",
                    barWidth: 0.25,
                    fill:.75
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: function(label, xval, yval, flotItem){
                        return yval + " " + label;
                    }
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var options = this.getOptions();
            prepareOptions(options, data);
            options.xaxis.ticks = data.result.ticks;
            $.plot($("#flotSyntheticResponseTimeDistribution"), prepareData(data.result.series, $("#choicesSyntheticResponseTimeDistribution")), options);
        }

};

// Response time distribution
function refreshSyntheticResponseTimeDistribution() {
    var infos = syntheticResponseTimeDistributionInfos;
    prepareSeries(infos.data, true);
    if (isGraph($("#flotSyntheticResponseTimeDistribution"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        $('#footerSyntheticResponseTimeDistribution .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var activeThreadsOverTimeInfos = {
        data: {"result": {"minY": 6.8500000000000005, "minX": 1.72889748E12, "maxY": 6.8500000000000005, "series": [{"data": [[1.72889748E12, 6.8500000000000005]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889748E12, "title": "Active Threads Over Time"}},
        getOptions: function() {
            return {
                series: {
                    stack: true,
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 6,
                    show: true,
                    container: '#legendActiveThreadsOverTime'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                selection: {
                    mode: 'xy'
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : At %x there were %y active threads"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesActiveThreadsOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotActiveThreadsOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewActiveThreadsOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Active Threads Over Time
function refreshActiveThreadsOverTime(fixTimestamps) {
    var infos = activeThreadsOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotActiveThreadsOverTime"))) {
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesActiveThreadsOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotActiveThreadsOverTime", "#overviewActiveThreadsOverTime");
        $('#footerActiveThreadsOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var timeVsThreadsInfos = {
        data: {"result": {"minY": 76.6, "minX": 1.0, "maxY": 1004.5625000000001, "series": [{"data": [[8.0, 410.2222222222222], [2.0, 157.0], [9.0, 87.0], [10.0, 89.5], [3.0, 231.77777777777777], [13.0, 81.33333333333333], [15.0, 82.0], [4.0, 219.90476190476193], [1.0, 226.0], [20.0, 76.6], [5.0, 178.00000000000003], [21.0, 1004.5625000000001], [6.0, 257.19047619047615], [7.0, 449.2142857142857]], "isOverall": false, "label": "Get Users", "isController": false}, {"data": [[6.8500000000000005, 291.48000000000013]], "isOverall": false, "label": "Get Users-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 21.0, "title": "Time VS Threads"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    axisLabel: "Number of active threads",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response times in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: { noColumns: 2,show: true, container: '#legendTimeVsThreads' },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s: At %x.2 active threads, Average response time was %y.2 ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesTimeVsThreads"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotTimesVsThreads"), dataset, options);
            // setup overview
            $.plot($("#overviewTimesVsThreads"), dataset, prepareOverviewOptions(options));
        }
};

// Time vs threads
function refreshTimeVsThreads(){
    var infos = timeVsThreadsInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTimeVsThreads");
        return;
    }
    if(isGraph($("#flotTimesVsThreads"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTimeVsThreads");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTimesVsThreads", "#overviewTimesVsThreads");
        $('#footerTimeVsThreads .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var bytesThroughputOverTimeInfos = {
        data : {"result": {"minY": 426.6666666666667, "minX": 1.72889748E12, "maxY": 6437.733333333334, "series": [{"data": [[1.72889748E12, 6437.733333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72889748E12, 426.6666666666667]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889748E12, "title": "Bytes Throughput Over Time"}},
        getOptions : function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity) ,
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Bytes / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendBytesThroughputOverTime'
                },
                selection: {
                    mode: "xy"
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y"
                }
            };
        },
        createGraph : function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesBytesThroughputOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotBytesThroughputOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewBytesThroughputOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Bytes throughput Over Time
function refreshBytesThroughputOverTime(fixTimestamps) {
    var infos = bytesThroughputOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotBytesThroughputOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesBytesThroughputOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotBytesThroughputOverTime", "#overviewBytesThroughputOverTime");
        $('#footerBytesThroughputOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var responseTimesOverTimeInfos = {
        data: {"result": {"minY": 291.48000000000013, "minX": 1.72889748E12, "maxY": 291.48000000000013, "series": [{"data": [[1.72889748E12, 291.48000000000013]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889748E12, "title": "Response Time Over Time"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average response time was %y ms"
                }
            };
        },
        createGraph: function() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Times Over Time
function refreshResponseTimeOverTime(fixTimestamps) {
    var infos = responseTimesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyResponseTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimesOverTime"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimesOverTime", "#overviewResponseTimesOverTime");
        $('#footerResponseTimesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var latenciesOverTimeInfos = {
        data: {"result": {"minY": 266.4599999999999, "minX": 1.72889748E12, "maxY": 266.4599999999999, "series": [{"data": [[1.72889748E12, 266.4599999999999]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889748E12, "title": "Latencies Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average response latencies in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendLatenciesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average latency was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesLatenciesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotLatenciesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewLatenciesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Latencies Over Time
function refreshLatenciesOverTime(fixTimestamps) {
    var infos = latenciesOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyLatenciesOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotLatenciesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesLatenciesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotLatenciesOverTime", "#overviewLatenciesOverTime");
        $('#footerLatenciesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var connectTimeOverTimeInfos = {
        data: {"result": {"minY": 170.97500000000002, "minX": 1.72889748E12, "maxY": 170.97500000000002, "series": [{"data": [[1.72889748E12, 170.97500000000002]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889748E12, "title": "Connect Time Over Time"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getConnectTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Average Connect Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendConnectTimeOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Average connect time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesConnectTimeOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotConnectTimeOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewConnectTimeOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Connect Time Over Time
function refreshConnectTimeOverTime(fixTimestamps) {
    var infos = connectTimeOverTimeInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyConnectTimeOverTime");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotConnectTimeOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesConnectTimeOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotConnectTimeOverTime", "#overviewConnectTimeOverTime");
        $('#footerConnectTimeOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var responseTimePercentilesOverTimeInfos = {
        data: {"result": {"minY": 72.0, "minX": 1.72889748E12, "maxY": 2140.0, "series": [{"data": [[1.72889748E12, 2140.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72889748E12, 686.6000000000001]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72889748E12, 1782.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72889748E12, 1297.1999999999996]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72889748E12, 72.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72889748E12, 229.5]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889748E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true,
                        fill: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Response Time in ms",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: '#legendResponseTimePercentilesOverTime'
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s : at %x Response time was %y ms"
                }
            };
        },
        createGraph: function () {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesResponseTimePercentilesOverTime"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotResponseTimePercentilesOverTime"), dataset, options);
            // setup overview
            $.plot($("#overviewResponseTimePercentilesOverTime"), dataset, prepareOverviewOptions(options));
        }
};

// Response Time Percentiles Over Time
function refreshResponseTimePercentilesOverTime(fixTimestamps) {
    var infos = responseTimePercentilesOverTimeInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotResponseTimePercentilesOverTime"))) {
        infos.createGraph();
    }else {
        var choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimePercentilesOverTime", "#overviewResponseTimePercentilesOverTime");
        $('#footerResponseTimePercentilesOverTime .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var responseTimeVsRequestInfos = {
    data: {"result": {"minY": 88.0, "minX": 3.0, "maxY": 1257.5, "series": [{"data": [[16.0, 242.0], [19.0, 246.0], [41.0, 88.0], [20.0, 159.0], [21.0, 223.0], [22.0, 227.5], [23.0, 234.0], [3.0, 210.0], [14.0, 1257.5]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Response Time Vs Request"}},
    getOptions: function() {
        return {
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Response Time in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: {
                noColumns: 2,
                show: true,
                container: '#legendResponseTimeVsRequest'
            },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median response time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesResponseTimeVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotResponseTimeVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewResponseTimeVsRequest"), dataset, prepareOverviewOptions(options));

    }
};

// Response Time vs Request
function refreshResponseTimeVsRequest() {
    var infos = responseTimeVsRequestInfos;
    prepareSeries(infos.data);
    if (isGraph($("#flotResponseTimeVsRequest"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesResponseTimeVsRequest");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotResponseTimeVsRequest", "#overviewResponseTimeVsRequest");
        $('#footerResponseRimeVsRequest .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};


var latenciesVsRequestInfos = {
    data: {"result": {"minY": 79.0, "minX": 3.0, "maxY": 1220.0, "series": [{"data": [[16.0, 242.0], [19.0, 246.0], [41.0, 87.0], [20.0, 158.5], [21.0, 159.5], [22.0, 162.0], [23.0, 96.0], [3.0, 79.0], [14.0, 1220.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 41.0, "title": "Latencies Vs Request"}},
    getOptions: function() {
        return{
            series: {
                lines: {
                    show: false
                },
                points: {
                    show: true
                }
            },
            xaxis: {
                axisLabel: "Global number of requests per second",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            yaxis: {
                axisLabel: "Median Latency in ms",
                axisLabelUseCanvas: true,
                axisLabelFontSizePixels: 12,
                axisLabelFontFamily: 'Verdana, Arial',
                axisLabelPadding: 20,
            },
            legend: { noColumns: 2,show: true, container: '#legendLatencyVsRequest' },
            selection: {
                mode: 'xy'
            },
            grid: {
                hoverable: true // IMPORTANT! this is needed for tooltip to work
            },
            tooltip: true,
            tooltipOpts: {
                content: "%s : Median Latency time at %x req/s was %y ms"
            },
            colors: ["#9ACD32", "#FF6347"]
        };
    },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesLatencyVsRequest"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotLatenciesVsRequest"), dataset, options);
        // setup overview
        $.plot($("#overviewLatenciesVsRequest"), dataset, prepareOverviewOptions(options));
    }
};

// Latencies vs Request
function refreshLatenciesVsRequest() {
        var infos = latenciesVsRequestInfos;
        prepareSeries(infos.data);
        if(isGraph($("#flotLatenciesVsRequest"))){
            infos.createGraph();
        }else{
            var choiceContainer = $("#choicesLatencyVsRequest");
            createLegend(choiceContainer, infos);
            infos.createGraph();
            setGraphZoomable("#flotLatenciesVsRequest", "#overviewLatenciesVsRequest");
            $('#footerLatenciesVsRequest .legendColorBox > div').each(function(i){
                $(this).clone().prependTo(choiceContainer.find("li").eq(i));
            });
        }
};

var hitsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72889748E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72889748E12, 3.3333333333333335]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889748E12, "title": "Hits Per Second"}},
        getOptions: function() {
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of hits / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendHitsPerSecond"
                },
                selection: {
                    mode : 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y.2 hits/sec"
                }
            };
        },
        createGraph: function createGraph() {
            var data = this.data;
            var dataset = prepareData(data.result.series, $("#choicesHitsPerSecond"));
            var options = this.getOptions();
            prepareOptions(options, data);
            $.plot($("#flotHitsPerSecond"), dataset, options);
            // setup overview
            $.plot($("#overviewHitsPerSecond"), dataset, prepareOverviewOptions(options));
        }
};

// Hits per second
function refreshHitsPerSecond(fixTimestamps) {
    var infos = hitsPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if (isGraph($("#flotHitsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesHitsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotHitsPerSecond", "#overviewHitsPerSecond");
        $('#footerHitsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
}

var codesPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72889748E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72889748E12, 3.3333333333333335]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889748E12, "title": "Codes Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of responses / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendCodesPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "Number of Response Codes %s at %x was %y.2 responses / sec"
                }
            };
        },
    createGraph: function() {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesCodesPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotCodesPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewCodesPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Codes per second
function refreshCodesPerSecond(fixTimestamps) {
    var infos = codesPerSecondInfos;
    prepareSeries(infos.data);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotCodesPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesCodesPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotCodesPerSecond", "#overviewCodesPerSecond");
        $('#footerCodesPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var transactionsPerSecondInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72889748E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72889748E12, 3.3333333333333335]], "isOverall": false, "label": "Get Users-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889748E12, "title": "Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTransactionsPerSecond"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                }
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTransactionsPerSecond"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTransactionsPerSecond"), dataset, options);
        // setup overview
        $.plot($("#overviewTransactionsPerSecond"), dataset, prepareOverviewOptions(options));
    }
};

// Transactions per second
function refreshTransactionsPerSecond(fixTimestamps) {
    var infos = transactionsPerSecondInfos;
    prepareSeries(infos.data);
    if(infos.data.result.series.length == 0) {
        setEmptyGraph("#bodyTransactionsPerSecond");
        return;
    }
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTransactionsPerSecond"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTransactionsPerSecond");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTransactionsPerSecond", "#overviewTransactionsPerSecond");
        $('#footerTransactionsPerSecond .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

var totalTPSInfos = {
        data: {"result": {"minY": 3.3333333333333335, "minX": 1.72889748E12, "maxY": 3.3333333333333335, "series": [{"data": [[1.72889748E12, 3.3333333333333335]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889748E12, "title": "Total Transactions Per Second"}},
        getOptions: function(){
            return {
                series: {
                    lines: {
                        show: true
                    },
                    points: {
                        show: true
                    }
                },
                xaxis: {
                    mode: "time",
                    timeformat: getTimeFormat(this.data.result.granularity),
                    axisLabel: getElapsedTimeLabel(this.data.result.granularity),
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20,
                },
                yaxis: {
                    axisLabel: "Number of transactions / sec",
                    axisLabelUseCanvas: true,
                    axisLabelFontSizePixels: 12,
                    axisLabelFontFamily: 'Verdana, Arial',
                    axisLabelPadding: 20
                },
                legend: {
                    noColumns: 2,
                    show: true,
                    container: "#legendTotalTPS"
                },
                selection: {
                    mode: 'xy'
                },
                grid: {
                    hoverable: true // IMPORTANT! this is needed for tooltip to
                                    // work
                },
                tooltip: true,
                tooltipOpts: {
                    content: "%s at %x was %y transactions / sec"
                },
                colors: ["#9ACD32", "#FF6347"]
            };
        },
    createGraph: function () {
        var data = this.data;
        var dataset = prepareData(data.result.series, $("#choicesTotalTPS"));
        var options = this.getOptions();
        prepareOptions(options, data);
        $.plot($("#flotTotalTPS"), dataset, options);
        // setup overview
        $.plot($("#overviewTotalTPS"), dataset, prepareOverviewOptions(options));
    }
};

// Total Transactions per second
function refreshTotalTPS(fixTimestamps) {
    var infos = totalTPSInfos;
    // We want to ignore seriesFilter
    prepareSeries(infos.data, false, true);
    if(fixTimestamps) {
        fixTimeStamps(infos.data.result.series, 21600000);
    }
    if(isGraph($("#flotTotalTPS"))){
        infos.createGraph();
    }else{
        var choiceContainer = $("#choicesTotalTPS");
        createLegend(choiceContainer, infos);
        infos.createGraph();
        setGraphZoomable("#flotTotalTPS", "#overviewTotalTPS");
        $('#footerTotalTPS .legendColorBox > div').each(function(i){
            $(this).clone().prependTo(choiceContainer.find("li").eq(i));
        });
    }
};

// Collapse the graph matching the specified DOM element depending the collapsed
// status
function collapse(elem, collapsed){
    if(collapsed){
        $(elem).parent().find(".fa-chevron-up").removeClass("fa-chevron-up").addClass("fa-chevron-down");
    } else {
        $(elem).parent().find(".fa-chevron-down").removeClass("fa-chevron-down").addClass("fa-chevron-up");
        if (elem.id == "bodyBytesThroughputOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshBytesThroughputOverTime(true);
            }
            document.location.href="#bytesThroughputOverTime";
        } else if (elem.id == "bodyLatenciesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesOverTime(true);
            }
            document.location.href="#latenciesOverTime";
        } else if (elem.id == "bodyCustomGraph") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCustomGraph(true);
            }
            document.location.href="#responseCustomGraph";
        } else if (elem.id == "bodyConnectTimeOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshConnectTimeOverTime(true);
            }
            document.location.href="#connectTimeOverTime";
        } else if (elem.id == "bodyResponseTimePercentilesOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimePercentilesOverTime(true);
            }
            document.location.href="#responseTimePercentilesOverTime";
        } else if (elem.id == "bodyResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeDistribution();
            }
            document.location.href="#responseTimeDistribution" ;
        } else if (elem.id == "bodySyntheticResponseTimeDistribution") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshSyntheticResponseTimeDistribution();
            }
            document.location.href="#syntheticResponseTimeDistribution" ;
        } else if (elem.id == "bodyActiveThreadsOverTime") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshActiveThreadsOverTime(true);
            }
            document.location.href="#activeThreadsOverTime";
        } else if (elem.id == "bodyTimeVsThreads") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTimeVsThreads();
            }
            document.location.href="#timeVsThreads" ;
        } else if (elem.id == "bodyCodesPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshCodesPerSecond(true);
            }
            document.location.href="#codesPerSecond";
        } else if (elem.id == "bodyTransactionsPerSecond") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTransactionsPerSecond(true);
            }
            document.location.href="#transactionsPerSecond";
        } else if (elem.id == "bodyTotalTPS") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshTotalTPS(true);
            }
            document.location.href="#totalTPS";
        } else if (elem.id == "bodyResponseTimeVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshResponseTimeVsRequest();
            }
            document.location.href="#responseTimeVsRequest";
        } else if (elem.id == "bodyLatenciesVsRequest") {
            if (isGraph($(elem).find('.flot-chart-content')) == false) {
                refreshLatenciesVsRequest();
            }
            document.location.href="#latencyVsRequest";
        }
    }
}

/*
 * Activates or deactivates all series of the specified graph (represented by id parameter)
 * depending on checked argument.
 */
function toggleAll(id, checked){
    var placeholder = document.getElementById(id);

    var cases = $(placeholder).find(':checkbox');
    cases.prop('checked', checked);
    $(cases).parent().children().children().toggleClass("legend-disabled", !checked);

    var choiceContainer;
    if ( id == "choicesBytesThroughputOverTime"){
        choiceContainer = $("#choicesBytesThroughputOverTime");
        refreshBytesThroughputOverTime(false);
    } else if(id == "choicesResponseTimesOverTime"){
        choiceContainer = $("#choicesResponseTimesOverTime");
        refreshResponseTimeOverTime(false);
    }else if(id == "choicesResponseCustomGraph"){
        choiceContainer = $("#choicesResponseCustomGraph");
        refreshCustomGraph(false);
    } else if ( id == "choicesLatenciesOverTime"){
        choiceContainer = $("#choicesLatenciesOverTime");
        refreshLatenciesOverTime(false);
    } else if ( id == "choicesConnectTimeOverTime"){
        choiceContainer = $("#choicesConnectTimeOverTime");
        refreshConnectTimeOverTime(false);
    } else if ( id == "choicesResponseTimePercentilesOverTime"){
        choiceContainer = $("#choicesResponseTimePercentilesOverTime");
        refreshResponseTimePercentilesOverTime(false);
    } else if ( id == "choicesResponseTimePercentiles"){
        choiceContainer = $("#choicesResponseTimePercentiles");
        refreshResponseTimePercentiles();
    } else if(id == "choicesActiveThreadsOverTime"){
        choiceContainer = $("#choicesActiveThreadsOverTime");
        refreshActiveThreadsOverTime(false);
    } else if ( id == "choicesTimeVsThreads"){
        choiceContainer = $("#choicesTimeVsThreads");
        refreshTimeVsThreads();
    } else if ( id == "choicesSyntheticResponseTimeDistribution"){
        choiceContainer = $("#choicesSyntheticResponseTimeDistribution");
        refreshSyntheticResponseTimeDistribution();
    } else if ( id == "choicesResponseTimeDistribution"){
        choiceContainer = $("#choicesResponseTimeDistribution");
        refreshResponseTimeDistribution();
    } else if ( id == "choicesHitsPerSecond"){
        choiceContainer = $("#choicesHitsPerSecond");
        refreshHitsPerSecond(false);
    } else if(id == "choicesCodesPerSecond"){
        choiceContainer = $("#choicesCodesPerSecond");
        refreshCodesPerSecond(false);
    } else if ( id == "choicesTransactionsPerSecond"){
        choiceContainer = $("#choicesTransactionsPerSecond");
        refreshTransactionsPerSecond(false);
    } else if ( id == "choicesTotalTPS"){
        choiceContainer = $("#choicesTotalTPS");
        refreshTotalTPS(false);
    } else if ( id == "choicesResponseTimeVsRequest"){
        choiceContainer = $("#choicesResponseTimeVsRequest");
        refreshResponseTimeVsRequest();
    } else if ( id == "choicesLatencyVsRequest"){
        choiceContainer = $("#choicesLatencyVsRequest");
        refreshLatenciesVsRequest();
    }
    var color = checked ? "black" : "#818181";
    if(choiceContainer != null) {
        choiceContainer.find("label").each(function(){
            this.style.color = color;
        });
    }
}

