//your JS code here. If required.
const output = document.getElementById("output");
const input  =document.getElementById("ip")
const button = document.getElementById("btn");
 const wait = (delay)=>{
	 return new Promise(resolve => {
		 setTimeout(()=> resolve(),delay);
	 });
 }
const promise = (value)=>{
	return new Promise(async (resolve,reject)=>{
		 await wait(2000);
		output.innerText = `Result: ${value}`;
		 resolve(value)
	})
}
button.onclick = ()=>{
   const value = parseFloat(input.value);
  if (isNaN(value)) {
    output.innerText = "Please enter a valid number.";
    return;
  }
  const prom = promise(value)
	.then( async(data) => {  
		await wait(2000) 
		output.innerText = `Result: ${2*data}`;
	  return 2*data;
	}).then(async(data)=>{
	  await wait(1000)
		output.innerText = `Result: ${data-3}`;
	  return data-3;
	}).then(async(data)=>{
      await wait(1000);
		const val = (data/2);
	    output.innerText = `Result: ${val}`;
		return val;
	}).then(async(data)=>{
		await wait(1000);
		const val = data + 10;
		output.innerText = `Final Result :${val}`;
		return val;
	})
}


