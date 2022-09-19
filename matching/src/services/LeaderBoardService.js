export async function CreateLeaders() {
    var raw = "";
	
	var requestOptions = {
	  method: 'GET',
	  body: raw,
	  redirect: 'follow'
	};
	
	fetch("/memorymatch/games", requestOptions)
	  .then(response => response.text())
	  .then(result => console.log(result))
	  .catch(error => console.log('error', error));
}