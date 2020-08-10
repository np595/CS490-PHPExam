ajaxList(listExams);

function ajaxList(callback){

        const SERVER = 'ajaxHandler.php';
        const post_params = "RequestType=listGradedExamsStudent";

        let xhr = new XMLHttpRequest();
        xhr.open("POST", SERVER, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onload = function(){
                if (xhr.status == 200){
			if (this.responseText == "No exams found, try again later..."){
				document.getElementById("ReviewList").innerHTML = "No exams found...";
				return;
		}

                        let resp = JSON.parse(this.responseText);
                        callback(resp);
                }
        }
        
        xhr.send(post_params);
}

function listExams(exams){
	const divList = document.getElementById("ReviewList");

	for(let exam in exams){
		let li = document.createElement("li");
		let a = document.createElement("a");

		a.setAttribute('class', 'ReviewLinks');
                a.setAttribute('href', '#view?exam=' + exams[exam]);
                a.innerHTML = exams[exam];

		li.setAttribute('class', 'ReviewItems ReviewNames');
		li.setAttribute('id', 'examname');
		li.appendChild(a);
                li.innerHTML += '<br />';
		
		divList.appendChild(li);
	}
}
