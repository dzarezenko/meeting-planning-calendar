let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

btn.onclick = function () {
   modal.style.display = "block";
}

span.onclick = function () {
   modal.style.display = "none";
}

window.onclick = function (event) {
   if (event.target == modal) {
       modal.style.display = "none";
   }
}

events = [];
for (let i = 0; i <= 9; i++) {
  events.push([]);
  for (let j = 0; j <= 5; j++) {
    events[i].push(null);
  }
}

function changeTable() {
  //console.log(events);

   let e = document.getElementById("col");
   let cl = e.options[e.selectedIndex].value;
   let r = document.getElementById("row");
   let rw = r.options[r.selectedIndex].value;
   let tabs = document.getElementById("tbl");
   let trs = tabs.getElementsByTagName("tr")[0];
   let text = document.getElementById('tblText').value;

   for (let i = 0, row; row = tabs.rows[i]; i++) {
       for (let j = 0, col; col = row.cells[j]; j++) {
                //console.log(i, j, events[i][j]);
                if (events[rw][cl] == null) {
                   trs = tabs.getElementsByTagName("tr")[rw];

                   let event = {
                     id: `${rw}-${cl}`,
                     text: text,
                     name: "...",
                   }

                   events[rw][cl] = event;

                   trs.cells[cl].innerHTML = text;
                   trs.cells[cl].style.backgroundColor = "#d3f5b4";
                } else if (i == rw && j == cl) {
                    console.log('неможливо записати');
                } 
                modal.style.display = "none";
               
         }
   }
}