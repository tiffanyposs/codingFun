var stockPricesYesterday = [10, 7, 5, 8, 11, 9];

var getMaxProfit = function(prices){
  var highest = prices[0],
      lowest = prices[1],
      difference = prices[1] - prices[0];
  for(var i = 0; i <= prices.length; i++){
  	for(var x = i + 1; x <= prices.length - 1; x++){
  		var dif = prices[x] - prices[i];
  		if(dif > difference){
  			highest = prices[i];
  			lowest = prices[x];
  			difference = dif;
  		}
  	}
  }
  return difference;
}

getMaxProfit(stockPricesYesterday);