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
        data: {"result": {"minY": 71.0, "minX": 0.0, "maxY": 1926.0, "series": [{"data": [[0.0, 71.0], [0.1, 71.0], [0.2, 71.0], [0.3, 71.0], [0.4, 71.0], [0.5, 71.0], [0.6, 71.0], [0.7, 71.0], [0.8, 71.0], [0.9, 71.0], [1.0, 71.0], [1.1, 71.0], [1.2, 71.0], [1.3, 71.0], [1.4, 72.0], [1.5, 72.0], [1.6, 72.0], [1.7, 72.0], [1.8, 72.0], [1.9, 72.0], [2.0, 72.0], [2.1, 72.0], [2.2, 72.0], [2.3, 72.0], [2.4, 72.0], [2.5, 72.0], [2.6, 73.0], [2.7, 73.0], [2.8, 73.0], [2.9, 73.0], [3.0, 73.0], [3.1, 73.0], [3.2, 73.0], [3.3, 73.0], [3.4, 73.0], [3.5, 73.0], [3.6, 73.0], [3.7, 73.0], [3.8, 73.0], [3.9, 73.0], [4.0, 73.0], [4.1, 73.0], [4.2, 73.0], [4.3, 73.0], [4.4, 73.0], [4.5, 73.0], [4.6, 73.0], [4.7, 73.0], [4.8, 73.0], [4.9, 73.0], [5.0, 73.0], [5.1, 73.0], [5.2, 73.0], [5.3, 73.0], [5.4, 74.0], [5.5, 74.0], [5.6, 74.0], [5.7, 74.0], [5.8, 74.0], [5.9, 74.0], [6.0, 74.0], [6.1, 74.0], [6.2, 74.0], [6.3, 74.0], [6.4, 74.0], [6.5, 74.0], [6.6, 74.0], [6.7, 74.0], [6.8, 74.0], [6.9, 74.0], [7.0, 74.0], [7.1, 74.0], [7.2, 74.0], [7.3, 74.0], [7.4, 74.0], [7.5, 74.0], [7.6, 74.0], [7.7, 74.0], [7.8, 74.0], [7.9, 74.0], [8.0, 74.0], [8.1, 74.0], [8.2, 74.0], [8.3, 74.0], [8.4, 74.0], [8.5, 74.0], [8.6, 74.0], [8.7, 74.0], [8.8, 74.0], [8.9, 74.0], [9.0, 74.0], [9.1, 74.0], [9.2, 74.0], [9.3, 74.0], [9.4, 75.0], [9.5, 75.0], [9.6, 75.0], [9.7, 75.0], [9.8, 75.0], [9.9, 75.0], [10.0, 75.0], [10.1, 75.0], [10.2, 75.0], [10.3, 75.0], [10.4, 75.0], [10.5, 75.0], [10.6, 75.0], [10.7, 75.0], [10.8, 75.0], [10.9, 75.0], [11.0, 75.0], [11.1, 75.0], [11.2, 75.0], [11.3, 75.0], [11.4, 75.0], [11.5, 75.0], [11.6, 75.0], [11.7, 75.0], [11.8, 75.0], [11.9, 75.0], [12.0, 75.0], [12.1, 75.0], [12.2, 75.0], [12.3, 75.0], [12.4, 75.0], [12.5, 75.0], [12.6, 75.0], [12.7, 75.0], [12.8, 75.0], [12.9, 75.0], [13.0, 75.0], [13.1, 75.0], [13.2, 76.0], [13.3, 76.0], [13.4, 76.0], [13.5, 76.0], [13.6, 76.0], [13.7, 76.0], [13.8, 76.0], [13.9, 76.0], [14.0, 76.0], [14.1, 76.0], [14.2, 76.0], [14.3, 76.0], [14.4, 76.0], [14.5, 76.0], [14.6, 76.0], [14.7, 76.0], [14.8, 76.0], [14.9, 76.0], [15.0, 76.0], [15.1, 76.0], [15.2, 76.0], [15.3, 76.0], [15.4, 76.0], [15.5, 76.0], [15.6, 76.0], [15.7, 76.0], [15.8, 76.0], [15.9, 76.0], [16.0, 76.0], [16.1, 76.0], [16.2, 76.0], [16.3, 76.0], [16.4, 76.0], [16.5, 76.0], [16.6, 76.0], [16.7, 76.0], [16.8, 76.0], [16.9, 76.0], [17.0, 76.0], [17.1, 76.0], [17.2, 76.0], [17.3, 76.0], [17.4, 76.0], [17.5, 76.0], [17.6, 76.0], [17.7, 76.0], [17.8, 76.0], [17.9, 76.0], [18.0, 76.0], [18.1, 76.0], [18.2, 76.0], [18.3, 76.0], [18.4, 76.0], [18.5, 76.0], [18.6, 76.0], [18.7, 76.0], [18.8, 76.0], [18.9, 76.0], [19.0, 76.0], [19.1, 76.0], [19.2, 76.0], [19.3, 76.0], [19.4, 76.0], [19.5, 76.0], [19.6, 76.0], [19.7, 76.0], [19.8, 77.0], [19.9, 77.0], [20.0, 77.0], [20.1, 77.0], [20.2, 77.0], [20.3, 77.0], [20.4, 77.0], [20.5, 77.0], [20.6, 77.0], [20.7, 77.0], [20.8, 77.0], [20.9, 77.0], [21.0, 77.0], [21.1, 77.0], [21.2, 77.0], [21.3, 77.0], [21.4, 77.0], [21.5, 77.0], [21.6, 77.0], [21.7, 77.0], [21.8, 77.0], [21.9, 77.0], [22.0, 77.0], [22.1, 77.0], [22.2, 77.0], [22.3, 77.0], [22.4, 77.0], [22.5, 77.0], [22.6, 77.0], [22.7, 77.0], [22.8, 77.0], [22.9, 77.0], [23.0, 77.0], [23.1, 77.0], [23.2, 77.0], [23.3, 77.0], [23.4, 77.0], [23.5, 77.0], [23.6, 77.0], [23.7, 77.0], [23.8, 77.0], [23.9, 77.0], [24.0, 77.0], [24.1, 77.0], [24.2, 77.0], [24.3, 77.0], [24.4, 77.0], [24.5, 77.0], [24.6, 77.0], [24.7, 77.0], [24.8, 77.0], [24.9, 77.0], [25.0, 77.0], [25.1, 77.0], [25.2, 77.0], [25.3, 77.0], [25.4, 77.0], [25.5, 77.0], [25.6, 77.0], [25.7, 77.0], [25.8, 77.0], [25.9, 77.0], [26.0, 77.0], [26.1, 77.0], [26.2, 77.0], [26.3, 77.0], [26.4, 77.0], [26.5, 77.0], [26.6, 77.0], [26.7, 77.0], [26.8, 77.0], [26.9, 77.0], [27.0, 77.0], [27.1, 77.0], [27.2, 77.0], [27.3, 77.0], [27.4, 77.0], [27.5, 77.0], [27.6, 77.0], [27.7, 77.0], [27.8, 77.0], [27.9, 77.0], [28.0, 77.0], [28.1, 77.0], [28.2, 77.0], [28.3, 77.0], [28.4, 77.0], [28.5, 77.0], [28.6, 77.0], [28.7, 77.0], [28.8, 77.0], [28.9, 77.0], [29.0, 77.0], [29.1, 77.0], [29.2, 77.0], [29.3, 77.0], [29.4, 77.0], [29.5, 77.0], [29.6, 77.0], [29.7, 77.0], [29.8, 77.0], [29.9, 77.0], [30.0, 77.0], [30.1, 77.0], [30.2, 77.0], [30.3, 77.0], [30.4, 78.0], [30.5, 78.0], [30.6, 78.0], [30.7, 78.0], [30.8, 78.0], [30.9, 78.0], [31.0, 78.0], [31.1, 78.0], [31.2, 78.0], [31.3, 78.0], [31.4, 78.0], [31.5, 78.0], [31.6, 78.0], [31.7, 78.0], [31.8, 78.0], [31.9, 78.0], [32.0, 78.0], [32.1, 78.0], [32.2, 78.0], [32.3, 78.0], [32.4, 78.0], [32.5, 78.0], [32.6, 78.0], [32.7, 78.0], [32.8, 78.0], [32.9, 78.0], [33.0, 78.0], [33.1, 78.0], [33.2, 78.0], [33.3, 78.0], [33.4, 78.0], [33.5, 78.0], [33.6, 78.0], [33.7, 78.0], [33.8, 78.0], [33.9, 78.0], [34.0, 78.0], [34.1, 78.0], [34.2, 78.0], [34.3, 78.0], [34.4, 78.0], [34.5, 78.0], [34.6, 78.0], [34.7, 78.0], [34.8, 78.0], [34.9, 78.0], [35.0, 78.0], [35.1, 78.0], [35.2, 78.0], [35.3, 78.0], [35.4, 78.0], [35.5, 78.0], [35.6, 78.0], [35.7, 78.0], [35.8, 78.0], [35.9, 78.0], [36.0, 78.0], [36.1, 78.0], [36.2, 78.0], [36.3, 78.0], [36.4, 78.0], [36.5, 78.0], [36.6, 78.0], [36.7, 78.0], [36.8, 78.0], [36.9, 78.0], [37.0, 79.0], [37.1, 79.0], [37.2, 79.0], [37.3, 79.0], [37.4, 79.0], [37.5, 79.0], [37.6, 79.0], [37.7, 79.0], [37.8, 79.0], [37.9, 79.0], [38.0, 79.0], [38.1, 79.0], [38.2, 79.0], [38.3, 79.0], [38.4, 79.0], [38.5, 79.0], [38.6, 79.0], [38.7, 79.0], [38.8, 79.0], [38.9, 79.0], [39.0, 79.0], [39.1, 79.0], [39.2, 79.0], [39.3, 79.0], [39.4, 79.0], [39.5, 79.0], [39.6, 79.0], [39.7, 79.0], [39.8, 79.0], [39.9, 79.0], [40.0, 79.0], [40.1, 79.0], [40.2, 79.0], [40.3, 79.0], [40.4, 79.0], [40.5, 79.0], [40.6, 79.0], [40.7, 79.0], [40.8, 79.0], [40.9, 79.0], [41.0, 79.0], [41.1, 79.0], [41.2, 79.0], [41.3, 79.0], [41.4, 79.0], [41.5, 79.0], [41.6, 79.0], [41.7, 79.0], [41.8, 79.0], [41.9, 79.0], [42.0, 79.0], [42.1, 79.0], [42.2, 79.0], [42.3, 79.0], [42.4, 79.0], [42.5, 79.0], [42.6, 80.0], [42.7, 80.0], [42.8, 80.0], [42.9, 80.0], [43.0, 80.0], [43.1, 80.0], [43.2, 80.0], [43.3, 80.0], [43.4, 80.0], [43.5, 80.0], [43.6, 80.0], [43.7, 80.0], [43.8, 80.0], [43.9, 80.0], [44.0, 80.0], [44.1, 80.0], [44.2, 80.0], [44.3, 80.0], [44.4, 80.0], [44.5, 80.0], [44.6, 80.0], [44.7, 80.0], [44.8, 80.0], [44.9, 80.0], [45.0, 80.0], [45.1, 80.0], [45.2, 80.0], [45.3, 80.0], [45.4, 80.0], [45.5, 80.0], [45.6, 80.0], [45.7, 80.0], [45.8, 80.0], [45.9, 80.0], [46.0, 80.0], [46.1, 80.0], [46.2, 80.0], [46.3, 80.0], [46.4, 80.0], [46.5, 80.0], [46.6, 80.0], [46.7, 80.0], [46.8, 80.0], [46.9, 80.0], [47.0, 80.0], [47.1, 80.0], [47.2, 80.0], [47.3, 80.0], [47.4, 80.0], [47.5, 80.0], [47.6, 80.0], [47.7, 80.0], [47.8, 80.0], [47.9, 80.0], [48.0, 80.0], [48.1, 80.0], [48.2, 80.0], [48.3, 80.0], [48.4, 80.0], [48.5, 80.0], [48.6, 80.0], [48.7, 80.0], [48.8, 80.0], [48.9, 80.0], [49.0, 81.0], [49.1, 81.0], [49.2, 81.0], [49.3, 81.0], [49.4, 81.0], [49.5, 81.0], [49.6, 81.0], [49.7, 81.0], [49.8, 81.0], [49.9, 81.0], [50.0, 81.0], [50.1, 81.0], [50.2, 81.0], [50.3, 81.0], [50.4, 81.0], [50.5, 81.0], [50.6, 81.0], [50.7, 81.0], [50.8, 81.0], [50.9, 81.0], [51.0, 81.0], [51.1, 81.0], [51.2, 81.0], [51.3, 81.0], [51.4, 81.0], [51.5, 81.0], [51.6, 81.0], [51.7, 81.0], [51.8, 81.0], [51.9, 81.0], [52.0, 81.0], [52.1, 81.0], [52.2, 81.0], [52.3, 81.0], [52.4, 81.0], [52.5, 81.0], [52.6, 81.0], [52.7, 81.0], [52.8, 81.0], [52.9, 81.0], [53.0, 81.0], [53.1, 81.0], [53.2, 81.0], [53.3, 81.0], [53.4, 81.0], [53.5, 81.0], [53.6, 81.0], [53.7, 81.0], [53.8, 81.0], [53.9, 81.0], [54.0, 81.0], [54.1, 81.0], [54.2, 81.0], [54.3, 81.0], [54.4, 81.0], [54.5, 81.0], [54.6, 81.0], [54.7, 81.0], [54.8, 81.0], [54.9, 81.0], [55.0, 81.0], [55.1, 81.0], [55.2, 81.0], [55.3, 81.0], [55.4, 81.0], [55.5, 81.0], [55.6, 81.0], [55.7, 81.0], [55.8, 81.0], [55.9, 81.0], [56.0, 82.0], [56.1, 82.0], [56.2, 82.0], [56.3, 82.0], [56.4, 82.0], [56.5, 82.0], [56.6, 82.0], [56.7, 82.0], [56.8, 82.0], [56.9, 82.0], [57.0, 82.0], [57.1, 82.0], [57.2, 82.0], [57.3, 82.0], [57.4, 82.0], [57.5, 82.0], [57.6, 82.0], [57.7, 82.0], [57.8, 82.0], [57.9, 82.0], [58.0, 82.0], [58.1, 82.0], [58.2, 82.0], [58.3, 82.0], [58.4, 82.0], [58.5, 82.0], [58.6, 82.0], [58.7, 82.0], [58.8, 82.0], [58.9, 82.0], [59.0, 82.0], [59.1, 82.0], [59.2, 82.0], [59.3, 82.0], [59.4, 82.0], [59.5, 82.0], [59.6, 82.0], [59.7, 82.0], [59.8, 82.0], [59.9, 82.0], [60.0, 82.0], [60.1, 82.0], [60.2, 83.0], [60.3, 83.0], [60.4, 83.0], [60.5, 83.0], [60.6, 83.0], [60.7, 83.0], [60.8, 83.0], [60.9, 83.0], [61.0, 83.0], [61.1, 83.0], [61.2, 83.0], [61.3, 83.0], [61.4, 83.0], [61.5, 83.0], [61.6, 83.0], [61.7, 83.0], [61.8, 83.0], [61.9, 83.0], [62.0, 83.0], [62.1, 83.0], [62.2, 83.0], [62.3, 83.0], [62.4, 83.0], [62.5, 83.0], [62.6, 83.0], [62.7, 83.0], [62.8, 83.0], [62.9, 83.0], [63.0, 83.0], [63.1, 83.0], [63.2, 83.0], [63.3, 83.0], [63.4, 83.0], [63.5, 83.0], [63.6, 83.0], [63.7, 83.0], [63.8, 83.0], [63.9, 83.0], [64.0, 83.0], [64.1, 83.0], [64.2, 84.0], [64.3, 84.0], [64.4, 84.0], [64.5, 84.0], [64.6, 84.0], [64.7, 84.0], [64.8, 84.0], [64.9, 84.0], [65.0, 84.0], [65.1, 84.0], [65.2, 84.0], [65.3, 84.0], [65.4, 84.0], [65.5, 84.0], [65.6, 84.0], [65.7, 84.0], [65.8, 84.0], [65.9, 84.0], [66.0, 84.0], [66.1, 84.0], [66.2, 84.0], [66.3, 84.0], [66.4, 84.0], [66.5, 84.0], [66.6, 84.0], [66.7, 84.0], [66.8, 85.0], [66.9, 85.0], [67.0, 85.0], [67.1, 85.0], [67.2, 85.0], [67.3, 85.0], [67.4, 85.0], [67.5, 85.0], [67.6, 85.0], [67.7, 85.0], [67.8, 85.0], [67.9, 85.0], [68.0, 85.0], [68.1, 85.0], [68.2, 85.0], [68.3, 85.0], [68.4, 86.0], [68.5, 86.0], [68.6, 86.0], [68.7, 86.0], [68.8, 86.0], [68.9, 86.0], [69.0, 86.0], [69.1, 86.0], [69.2, 86.0], [69.3, 86.0], [69.4, 86.0], [69.5, 86.0], [69.6, 87.0], [69.7, 87.0], [69.8, 87.0], [69.9, 87.0], [70.0, 87.0], [70.1, 87.0], [70.2, 88.0], [70.3, 88.0], [70.4, 88.0], [70.5, 88.0], [70.6, 89.0], [70.7, 89.0], [70.8, 89.0], [70.9, 89.0], [71.0, 89.0], [71.1, 89.0], [71.2, 89.0], [71.3, 89.0], [71.4, 90.0], [71.5, 90.0], [71.6, 90.0], [71.7, 90.0], [71.8, 90.0], [71.9, 90.0], [72.0, 91.0], [72.1, 91.0], [72.2, 91.0], [72.3, 91.0], [72.4, 92.0], [72.5, 92.0], [72.6, 92.0], [72.7, 92.0], [72.8, 92.0], [72.9, 92.0], [73.0, 92.0], [73.1, 92.0], [73.2, 92.0], [73.3, 92.0], [73.4, 93.0], [73.5, 93.0], [73.6, 93.0], [73.7, 93.0], [73.8, 94.0], [73.9, 94.0], [74.0, 95.0], [74.1, 95.0], [74.2, 95.0], [74.3, 95.0], [74.4, 96.0], [74.5, 96.0], [74.6, 96.0], [74.7, 96.0], [74.8, 96.0], [74.9, 96.0], [75.0, 97.0], [75.1, 97.0], [75.2, 97.0], [75.3, 97.0], [75.4, 100.0], [75.5, 100.0], [75.6, 100.0], [75.7, 101.0], [75.8, 101.0], [75.9, 101.0], [76.0, 101.0], [76.1, 102.0], [76.2, 102.0], [76.3, 102.0], [76.4, 102.0], [76.5, 102.0], [76.6, 102.0], [76.7, 103.0], [76.8, 103.0], [76.9, 104.0], [77.0, 104.0], [77.1, 105.0], [77.2, 105.0], [77.3, 105.0], [77.4, 105.0], [77.5, 106.0], [77.6, 106.0], [77.7, 106.0], [77.8, 106.0], [77.9, 107.0], [78.0, 107.0], [78.1, 107.0], [78.2, 107.0], [78.3, 107.0], [78.4, 107.0], [78.5, 112.0], [78.6, 112.0], [78.7, 115.0], [78.8, 115.0], [78.9, 151.0], [79.0, 151.0], [79.1, 152.0], [79.2, 152.0], [79.3, 153.0], [79.4, 153.0], [79.5, 153.0], [79.6, 153.0], [79.7, 154.0], [79.8, 154.0], [79.9, 155.0], [80.0, 155.0], [80.1, 156.0], [80.2, 156.0], [80.3, 156.0], [80.4, 156.0], [80.5, 156.0], [80.6, 156.0], [80.7, 158.0], [80.8, 158.0], [80.9, 158.0], [81.0, 158.0], [81.1, 159.0], [81.2, 159.0], [81.3, 160.0], [81.4, 160.0], [81.5, 160.0], [81.6, 160.0], [81.7, 160.0], [81.8, 160.0], [81.9, 160.0], [82.0, 160.0], [82.1, 160.0], [82.2, 160.0], [82.3, 161.0], [82.4, 161.0], [82.5, 161.0], [82.6, 161.0], [82.7, 162.0], [82.8, 162.0], [82.9, 162.0], [83.0, 162.0], [83.1, 162.0], [83.2, 162.0], [83.3, 163.0], [83.4, 163.0], [83.5, 166.0], [83.6, 166.0], [83.7, 166.0], [83.8, 166.0], [83.9, 166.0], [84.0, 166.0], [84.1, 170.0], [84.2, 170.0], [84.3, 172.0], [84.4, 172.0], [84.5, 173.0], [84.6, 173.0], [84.7, 178.0], [84.8, 178.0], [84.9, 179.0], [85.0, 179.0], [85.1, 201.0], [85.2, 201.0], [85.3, 205.0], [85.4, 205.0], [85.5, 205.0], [85.6, 205.0], [85.7, 206.0], [85.8, 206.0], [85.9, 211.0], [86.0, 211.0], [86.1, 214.0], [86.2, 214.0], [86.3, 215.0], [86.4, 215.0], [86.5, 216.0], [86.6, 216.0], [86.7, 216.0], [86.8, 216.0], [86.9, 218.0], [87.0, 218.0], [87.1, 219.0], [87.2, 219.0], [87.3, 223.0], [87.4, 223.0], [87.5, 223.0], [87.6, 223.0], [87.7, 228.0], [87.8, 228.0], [87.9, 228.0], [88.0, 228.0], [88.1, 230.0], [88.2, 230.0], [88.3, 234.0], [88.4, 234.0], [88.5, 236.0], [88.6, 236.0], [88.7, 236.0], [88.8, 236.0], [88.9, 239.0], [89.0, 239.0], [89.1, 239.0], [89.2, 239.0], [89.3, 242.0], [89.4, 242.0], [89.5, 243.0], [89.6, 243.0], [89.7, 245.0], [89.8, 245.0], [89.9, 245.0], [90.0, 245.0], [90.1, 246.0], [90.2, 246.0], [90.3, 247.0], [90.4, 247.0], [90.5, 248.0], [90.6, 248.0], [90.7, 248.0], [90.8, 248.0], [90.9, 249.0], [91.0, 249.0], [91.1, 250.0], [91.2, 250.0], [91.3, 250.0], [91.4, 250.0], [91.5, 251.0], [91.6, 251.0], [91.7, 252.0], [91.8, 252.0], [91.9, 252.0], [92.0, 252.0], [92.1, 253.0], [92.2, 253.0], [92.3, 254.0], [92.4, 254.0], [92.5, 259.0], [92.6, 259.0], [92.7, 260.0], [92.8, 260.0], [92.9, 262.0], [93.0, 262.0], [93.1, 263.0], [93.2, 263.0], [93.3, 267.0], [93.4, 267.0], [93.5, 267.0], [93.6, 267.0], [93.7, 268.0], [93.8, 268.0], [93.9, 274.0], [94.0, 274.0], [94.1, 276.0], [94.2, 276.0], [94.3, 278.0], [94.4, 278.0], [94.5, 278.0], [94.6, 278.0], [94.7, 284.0], [94.8, 284.0], [94.9, 290.0], [95.0, 290.0], [95.1, 300.0], [95.2, 300.0], [95.3, 317.0], [95.4, 317.0], [95.5, 327.0], [95.6, 327.0], [95.7, 334.0], [95.8, 334.0], [95.9, 340.0], [96.0, 340.0], [96.1, 340.0], [96.2, 340.0], [96.3, 352.0], [96.4, 352.0], [96.5, 426.0], [96.6, 426.0], [96.7, 435.0], [96.8, 435.0], [96.9, 494.0], [97.0, 494.0], [97.1, 529.0], [97.2, 529.0], [97.3, 552.0], [97.4, 552.0], [97.5, 574.0], [97.6, 574.0], [97.7, 600.0], [97.8, 600.0], [97.9, 738.0], [98.0, 738.0], [98.1, 777.0], [98.2, 777.0], [98.3, 939.0], [98.4, 939.0], [98.5, 1140.0], [98.6, 1140.0], [98.7, 1326.0], [98.8, 1326.0], [98.9, 1526.0], [99.0, 1526.0], [99.1, 1771.0], [99.2, 1771.0], [99.3, 1830.0], [99.4, 1830.0], [99.5, 1921.0], [99.6, 1921.0], [99.7, 1926.0], [99.8, 1926.0], [99.9, 1926.0], [100.0, 1926.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 100.0, "title": "Response Time Percentiles"}},
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
        data: {"result": {"minY": 1.0, "minX": 0.0, "maxY": 377.0, "series": [{"data": [[0.0, 377.0], [600.0, 1.0], [700.0, 2.0], [200.0, 50.0], [900.0, 1.0], [1100.0, 1.0], [300.0, 7.0], [1300.0, 1.0], [1500.0, 1.0], [100.0, 48.0], [400.0, 3.0], [1700.0, 1.0], [1800.0, 1.0], [1900.0, 3.0], [500.0, 3.0]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 100, "maxX": 1900.0, "title": "Response Time Distribution"}},
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
        data: {"result": {"minY": 6.0, "minX": 0.0, "ticks": [[0, "Requests having \nresponse time <= 500ms"], [1, "Requests having \nresponse time > 500ms and <= 1,500ms"], [2, "Requests having \nresponse time > 1,500ms"], [3, "Requests in error"]], "maxY": 485.0, "series": [{"data": [[0.0, 485.0]], "color": "#9ACD32", "isOverall": false, "label": "Requests having \nresponse time <= 500ms", "isController": false}, {"data": [[1.0, 9.0]], "color": "yellow", "isOverall": false, "label": "Requests having \nresponse time > 500ms and <= 1,500ms", "isController": false}, {"data": [[2.0, 6.0]], "color": "orange", "isOverall": false, "label": "Requests having \nresponse time > 1,500ms", "isController": false}, {"data": [], "color": "#FF6347", "isOverall": false, "label": "Requests in error", "isController": false}], "supportsControllersDiscrimination": false, "maxX": 2.0, "title": "Synthetic Response Times Distribution"}},
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
        data: {"result": {"minY": 5.937759336099586, "minX": 1.72889688E12, "maxY": 10.138996138996134, "series": [{"data": [[1.72889694E12, 5.937759336099586], [1.72889688E12, 10.138996138996134]], "isOverall": false, "label": "Thread Group", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889694E12, "title": "Active Threads Over Time"}},
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
        data: {"result": {"minY": 76.0, "minX": 1.0, "maxY": 1281.2727272727273, "series": [{"data": [[8.0, 180.0], [2.0, 108.75], [9.0, 128.75], [10.0, 133.66666666666666], [12.0, 1281.2727272727273], [3.0, 76.0], [13.0, 89.30303030303027], [14.0, 97.42105263157896], [15.0, 98.42857142857144], [16.0, 135.94444444444443], [4.0, 96.94444444444446], [1.0, 80.6], [5.0, 127.89795918367348], [6.0, 117.30434782608697], [7.0, 106.85245901639342]], "isOverall": false, "label": "Get Users", "isController": false}, {"data": [[8.113999999999994, 141.24599999999998]], "isOverall": false, "label": "Get Users-Aggregated", "isController": false}], "supportsControllersDiscrimination": true, "maxX": 16.0, "title": "Time VS Threads"}},
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
        data : {"result": {"minY": 514.1333333333333, "minX": 1.72889688E12, "maxY": 8337.483333333334, "series": [{"data": [[1.72889694E12, 7759.016666666666], [1.72889688E12, 8337.483333333334]], "isOverall": false, "label": "Bytes received per second", "isController": false}, {"data": [[1.72889694E12, 514.1333333333333], [1.72889688E12, 552.5333333333333]], "isOverall": false, "label": "Bytes sent per second", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889694E12, "title": "Bytes Throughput Over Time"}},
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
        data: {"result": {"minY": 117.48962655601663, "minX": 1.72889688E12, "maxY": 163.35135135135135, "series": [{"data": [[1.72889694E12, 117.48962655601663], [1.72889688E12, 163.35135135135135]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889694E12, "title": "Response Time Over Time"}},
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
        data: {"result": {"minY": 106.66390041493779, "minX": 1.72889688E12, "maxY": 156.25096525096524, "series": [{"data": [[1.72889694E12, 106.66390041493779], [1.72889688E12, 156.25096525096524]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889694E12, "title": "Latencies Over Time"}},
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
        data: {"result": {"minY": 20.307053941908716, "minX": 1.72889688E12, "maxY": 61.57915057915052, "series": [{"data": [[1.72889694E12, 20.307053941908716], [1.72889688E12, 61.57915057915052]], "isOverall": false, "label": "Get Users", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889694E12, "title": "Connect Time Over Time"}},
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
        data: {"result": {"minY": 71.0, "minX": 1.72889688E12, "maxY": 1926.0, "series": [{"data": [[1.72889694E12, 1830.0], [1.72889688E12, 1926.0]], "isOverall": false, "label": "Max", "isController": false}, {"data": [[1.72889694E12, 229.60000000000002], [1.72889688E12, 260.0]], "isOverall": false, "label": "90th percentile", "isController": false}, {"data": [[1.72889694E12, 589.0799999999996], [1.72889688E12, 1923.0]], "isOverall": false, "label": "99th percentile", "isController": false}, {"data": [[1.72889694E12, 258.29999999999984], [1.72889688E12, 494.0]], "isOverall": false, "label": "95th percentile", "isController": false}, {"data": [[1.72889694E12, 71.0], [1.72889688E12, 71.0]], "isOverall": false, "label": "Min", "isController": false}, {"data": [[1.72889694E12, 80.0], [1.72889688E12, 81.0]], "isOverall": false, "label": "Median", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889694E12, "title": "Response Time Percentiles Over Time (successful requests only)"}},
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
    data: {"result": {"minY": 76.0, "minX": 2.0, "maxY": 82.0, "series": [{"data": [[2.0, 76.0], [69.0, 82.0], [35.0, 79.0], [86.0, 82.0], [42.0, 81.0], [49.0, 79.0], [50.0, 81.0], [54.0, 78.5], [56.0, 79.5], [57.0, 80.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Response Time Vs Request"}},
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
    data: {"result": {"minY": 76.0, "minX": 2.0, "maxY": 81.0, "series": [{"data": [[2.0, 76.0], [69.0, 81.0], [35.0, 79.0], [86.0, 81.0], [42.0, 80.0], [49.0, 78.0], [50.0, 80.0], [54.0, 78.0], [56.0, 79.0], [57.0, 79.0]], "isOverall": false, "label": "Successes", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 1000, "maxX": 86.0, "title": "Latencies Vs Request"}},
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
        data: {"result": {"minY": 3.9, "minX": 1.72889688E12, "maxY": 4.433333333333334, "series": [{"data": [[1.72889694E12, 3.9], [1.72889688E12, 4.433333333333334]], "isOverall": false, "label": "hitsPerSecond", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889694E12, "title": "Hits Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.72889688E12, "maxY": 4.316666666666666, "series": [{"data": [[1.72889694E12, 4.016666666666667], [1.72889688E12, 4.316666666666666]], "isOverall": false, "label": "200", "isController": false}], "supportsControllersDiscrimination": false, "granularity": 60000, "maxX": 1.72889694E12, "title": "Codes Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.72889688E12, "maxY": 4.316666666666666, "series": [{"data": [[1.72889694E12, 4.016666666666667], [1.72889688E12, 4.316666666666666]], "isOverall": false, "label": "Get Users-success", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889694E12, "title": "Transactions Per Second"}},
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
        data: {"result": {"minY": 4.016666666666667, "minX": 1.72889688E12, "maxY": 4.316666666666666, "series": [{"data": [[1.72889694E12, 4.016666666666667], [1.72889688E12, 4.316666666666666]], "isOverall": false, "label": "Transaction-success", "isController": false}, {"data": [], "isOverall": false, "label": "Transaction-failure", "isController": false}], "supportsControllersDiscrimination": true, "granularity": 60000, "maxX": 1.72889694E12, "title": "Total Transactions Per Second"}},
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

