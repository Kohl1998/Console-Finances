var finances = [
['Jan-2010', 867884],
['Feb-2010', 984655], 
['Mar-2010', 322013], 
['Apr-2010', -69417], // [3][1]
['May-2010', 310503], // [4][1] 
['Jun-2010', 522857], // [5][1]
['Jul-2010', 1033096], //[6][1]
['Aug-2010', 604885], // [7][1]
['Sep-2010', -216386], // [8][1]
['Oct-2010', 477532],
['Nov-2010', 893810], // [10][1]
['Dec-2010', -80353], // [11][1]
['Jan-2011', 779806], // [12][1]
['Feb-2011', -335203], // [13][1]
['Mar-2011', 697845], 
['Apr-2011', 793163],
['May-2011', 485070], 
['Jun-2011', 584122], // [17][1]
['Jul-2011', 62729], // [18][1]
['Aug-2011', 668179], // [19][1]
['Sep-2011', 899906],
['Oct-2011', 834719], // [21][1]
['Nov-2011', 132003], // [22][1]
['Dec-2011', 309978], // [23][1]
['Jan-2012', -755566], // [24][1]
['Feb-2012', 1170593], // [25][1]
['Mar-2012', 252788], // [26][1]
['Apr-2012', 1151518], // [27][1]
['May-2012', 817256],
['Jun-2012', 570757],
['Jul-2012', 506702], // [30][1]
['Aug-2012', -1022534], // [31][1]
['Sep-2012', 475062],
['Oct-2012', 779976],
['Nov-2012', 144175],
['Dec-2012', 542494],
['Jan-2013', 359333],
['Feb-2013', 321469],
['Mar-2013', 67780],
['Apr-2013', 471435],
['May-2013', 565603],
['Jun-2013', 872480],
['Jul-2013', 789480],
['Aug-2013', 999942], // [43][1]
['Sep-2013', -1196225], // [44][1]
['Oct-2013', 268997], // [45][1]
['Nov-2013', -687986], // [46][1]
['Dec-2013', 1150461],  // [47][1]
['Jan-2014', 682458],
['Feb-2014', 617856],
['Mar-2014', 824098],
['Apr-2014', 581943],
['May-2014', 132864],
['Jun-2014', 448062],
['Jul-2014', 689161],
['Aug-2014', 800701],
['Sep-2014', 1166643],
['Oct-2014', 947333],
['Nov-2014', 578668],
['Dec-2014', 988505],
['Jan-2015', 1139715],
['Feb-2015', 1029471],
['Mar-2015', 687533], // [62][1]
['Apr-2015', -524626], // [63][1]
['May-2015', 158620], // [64][1]
['Jun-2015', 87795],
['Jul-2015', 423389],
['Aug-2015', 840723],
['Sep-2015', 568529],
['Oct-2015', 332067],
['Nov-2015', 989499],
['Dec-2015', 778237],
['Jan-2016', 650000], // [72][1]
['Feb-2016', -1100387], // [73][1]
['Mar-2016', -174946],
['Apr-2016', 757143],
['May-2016', 445709],
['Jun-2016', 712961], // [77][1]
['Jul-2016', -1163797], // [78][1]
['Aug-2016', 569899],
['Sep-2016', 768450],
['Oct-2016', 102685], // [81][1]
['Nov-2016', 795914], // [82][1]
['Dec-2016', 60988], // [83][1]
['Jan-2017', 138230], // [84][1]
['Feb-2017', 671099] // [85][1]
];

// Total number of months in dataset 

var totalmonths = finances.length - 1 
console.log("Total amount of months = " + totalmonths) 

// Total amount of profit & losses

// logs values for each month
/* for (var i = 0; i < finances.length; i++) {
  finances[i][1] 
  console.log(finances[i][1])
} */

var total = 74638024; 

// To find total between profits & losses
var sum = 0; 


for (var i = 0; i < finances.length; i++) {
  sum += finances[0][1]
}  

console.log("The total sum is " + "$" + sum)


// Average change over time 

var average = total/totalmonths 
console.log("The average in dollars is " + "$" + average)

// Greatest increase in profits with date & amount

/* var AprMay10 = finances[4][1] + finances[3][1];
console.log('Apr/May 2010 = ' + AprMay10) // $241,086 */ 

/* var JunJul10 = finances[6][1] - finances[5][1]; 
console.log('JunJul 2010 = ' + JunJul10); // $510,239 */

/* var DecJan10 = finances[12][1] + finances[11][1];
console.log('Dec/Jan 2010 = ' + DecJan10) // $699,453 */

/* var JulAug11 = finances[19][1] - finances[18][1];
console.log('JulAug 2011 = ' + JulAug11) // $605,450 */

/* var JanFeb12 = finances[24][1] + finances[25][1];
console.log('Jan/Feb 2012 = ' + JanFeb12) // $415,027 */

/* var NovDec13 = finances[47][1] + finances[46][1];
console.log('Nov/Dec 2013 = ' + NovDec13) // $462,475 */ 

/* var AprMay15 = finances[64][1] + finances[63][1];
console.log('Apr/May 2015 = ' + AprMay15) // $366,006 */

/* var OctNov16 = finances[82][1] - finances[81][1];
console.log('Oct/Nov 2016  = ' + OctNov16) // $693,229 */

/* var JanFeb17 = finances[85][1] - finances[84][1];
console.log('Jan/Feb 2017  = ' + JanFeb17) // $532,869 */

var MarApr12 = finances[27][1] - finances[26][1];
console.log('Mar/Apr 2012 = ' + "$" + MarApr12) // $898,730

var totalProfit = MarApr12 
console.log("March/April 2012 = " + "$" + MarApr12 + " making it the most profitable month for the company!")

// Greatest decrease in losses with date & amount

/* var SepAug10 = finances[8][1] - finances[7][1]
console.log('Sept/Aug 2010 = ' + SepAug10) // $-821,271 

var NovDec10 = finances[11][1] - finances[10][1]
console.log('Nov/Dec 2010 = ' + NovDec10) // $-974,163 

var JanFeb11 = finances[13][1] - finances[12][1]
console.log('Jan/Feb 2011 = ' + JanFeb11) // $-1,115,009

var JunJul11 = finances[18][1] - finances[17][1]
console.log('Jun/Jul 2011 = ' + JunJul11) // $-521,393

var OctNov11 = finances[22][1] - finances[21][1]
console.log('Oct/Nov 2011 = ' + OctNov11) // $-702,716

var DecJan12 = finances[24][1] - finances[23][1]
console.log('Dec/Jan 11/12 = ' + DecJan12) // $-1,065544

var FebMar12 = finances[26][1] - finances[25][1]
console.log('Feb/Mar 2012 = ' + FebMar12) // $-917805

var JulAug12 = finances[31][1] - finances[30][1]
console.log('Jul/Aug 2012 = ' + JulAug12) // $-1,529,236 */

/* var OctNov13 = finances[46][1] - finances[45][1]
console.log('Oct/Nov 2013 = ' + OctNov13) // $-956,983

var MarApr15 = finances[63][1] - finances[62][1]
console.log('Mar/Apr 2015 = ' + MarApr15) // $-1,212,159

var JanFeb16 = finances[73][1] - finances[72][1]
console.log('Jan/Feb 2016 = ' + JanFeb16) // $-1,750,387

var JunJul16 = finances[78][1] - finances[77][1]
console.log('Jun/Jul 2016 = ' + JunJul16) // $-1,876,758

var NovDec16 = finances[83][1] - finances[82][1]
console.log('Nov/Dec 2016 = ' + NovDec16) // $-734,926 */ 

var AugSep13 = finances[44][1] - finances[43][1]
console.log('Aug/Sept 2013 = ' + AugSep13) // $-2,196,167

var totalloss = AugSep13
console.log("August/September 2013 = " + "$" + AugSep13 + " making it the worse month for the company!")

/*  ```text
  Financial Analysis
  ----------------------------
  Total Months: 25
  Total: $2561231
  Average  Change: $-2315.12
  Greatest Increase in Profits: Feb-2012 ($1926159)
  Greatest Decrease in Profits: Sep-2013 ($-2196167)
  ``` */ 

  // Use concatenation when console logging info

  // Print to the nearest 100th 