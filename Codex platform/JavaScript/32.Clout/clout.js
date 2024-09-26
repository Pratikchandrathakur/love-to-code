// Write code below and code with 💖 by Pratik

const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray) {
    let totalViews = 0;
    for (let i = 0; i < viewsArray.length; i++) {
        totalViews += viewsArray[i];
    }
    return totalViews / viewsArray.length;
}
function median(viewsArray){
   const sortedStats = viewsArray.sort((a, b) => a - b);
   const middleIndex = Math.floor(sortedStats.length / 2);
   // Step 3: Determine the median
    if (sortedStats.length % 2 === 1) {
        return sortedStats[middleIndex];
    } else {
        const middleValuesSum = sortedStats[middleIndex] + sortedStats[middleIndex - 1];
        return middleValuesSum / 2;
    }
} 

console.log("TikTok \n Mean: " + mean(recentTikTokViews)+ "\n Median:"+ median(recentTikTokViews));
console.log("\n");
console.log("Instagram \n Mean: " + mean(recentInstagramViews)+ "\n Median:"+ median(recentInstagramViews));
console.log("\n");
console.log("YouTube \n Mean: " + mean(recentYouTubeViews)+ "\n Median:"+ median(recentYouTubeViews));




