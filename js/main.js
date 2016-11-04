function clock(){
	//calculating the rotation angle of each hand
	var date,hr,min,sec
	date=new Date()
	hr = 30 * ((date.getHours()%12) + date.getMinutes() /60)
	min = 6 * date.getMinutes()
	sec = 6 * date.getSeconds()

	setAttr('h-hand',hr)
	setAttr('m-hand',min)
	setAttr('s-hand',sec)

	hr=date.getHours()
	min=date.getMinutes()
	sec=date.getSeconds()
	 if (hr > 12) {
	 	setText('suffix','PM')
	 }else{
	 	setText('suffix','AM')
	 }

	 if (hr!=12){
	 	hr%=12
	 }

	 setText('seconds',sec)
	 setText('minutes',min)
	 setText('hrs',hr)

	setTimeout(clock,1000)
}

function setAttr(id, val){
	var v='rotate('+val + ',70,70)'
	document.getElementById(id).setAttribute('transform',v)
}

function setText(id, val){
	if (val <10){
		val='0'+val
	}
	document.getElementById(id).innerHTML=val
}
window.onload=clock
