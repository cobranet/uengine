function append_die(id,element,number,cx,cy,width,colour,dotcolour) {
    element.append("rect").attr("x", cx-width/2).attr("y", cy-width/2).attr("width", width).attr("height", width).attr("rx", width/6).attr("ry", width/6).attr("fill", colour).attr("id",id).attr("ng-click","selectDice()").attr("class","dice-selected");
	if (number == 1) {
	element.append("circle").attr("cx", cx).attr("cy", cy).attr("r", width/8).attr("fill", dotcolour);
	}
	if (number == 2) {
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("fill", dotcolour);
	}
	if (number == 3) {
	element.append("circle").attr("cx", cx).attr("cy", cy).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("fill", dotcolour);
	}
	if (number == 4) {
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy-width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy+width/4).attr("r", width/8).attr("fill", dotcolour);
	}
	if (number == 5) {
	element.append("circle").attr("cx", cx).attr("cy", cy).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy-width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy+width/4).attr("r", width/8).attr("fill", dotcolour);
	}
	if (number == 6) {
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy+width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy-width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy-width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy+width/4).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx+width/4).attr("cy", cy).attr("r", width/8).attr("fill", dotcolour);
	element.append("circle").attr("cx", cx-width/4).attr("cy", cy).attr("r", width/8).attr("fill", dotcolour);
	}
	
}
