//https://www.interviewcake.com/question/javascript/cake-thief

function maxDuffelBagValue(cakeTypes, capacity, total) {

	var total = total || 0;
	var highestPricePer = 0;
	var highestPriceIndex = 0;

	for(var i = 0; i < cakeTypes.length; i++) {
		// removes any cake that exceeds the weight of the bag
		if(cakeTypes[i].weight > capacity) {
			cakeTypes.splice(i, 1);
			continue;
		}
		//sets price per if n/a yet
		if(!cakeTypes[i].pricePer) {
			var pricePer = parseFloat((cakeTypes[i].value / cakeTypes[i].weight).toFixed(2));
			cakeTypes[i].pricePer = pricePer;
		}
		//keeps track of highest value cake
		if(cakeTypes[i].pricePer > highestPricePer) {
			highestPricePer = cakeTypes[i].pricePer;
			highestPriceIndex = i;
		}
	}

	//tallys up totals and removes element
	var count = Math.floor(capacity / cakeTypes[highestPriceIndex].weight);
	capacity -= (count*cakeTypes[highestPriceIndex].weight);
	total += (count*cakeTypes[highestPriceIndex].value);
	cakeTypes.splice(highestPriceIndex, 1);

	// return if no more cake or no more room
	if(!cakeTypes.length || capacity < 1) return total || "All Cakes weight too much!";

	return maxDuffelBagValue(cakeTypes, capacity, total);
}


var cakeTypes = [
    {weight: 7, value: 160},
    {weight: 3, value: 90},
    {weight: 2, value: 15}
];

var capacity = 20;

console.log(maxDuffelBagValue(cakeTypes, capacity));