// const asFunc = async () => {
    


const start_min = 10;
let time = start_min * 60;

const countdownEl = document.getElementById("countdown");
// let prevId = "-NIFrsT1rcewbLCoCHDw"

function updateCountdown(){ 
    if (time == 0){ 
        clearTimeout(timer);
        clearTimeout(points_updater);
        localStorage.setItem("ranking_heap", JSON.stringify(heap));
        to_insert();
        // write_to_firebase(heap);
        // addAndGetKey(heap)
        // updateAt("-NIFrsT1rcewbLCoCHDw", heap)
        localStorage.setItem("local_points", 0);
        

    }
    const min = Math.floor(time/60);
    let s = time % 60;
    if (s< 10){ 
        s = '0' + s;
    }
    else{ 
        s = s;
    }
    countdownEl.innerHTML = `${min}:${s}`; 
    time -= 1; 
    
}
const pointsEl = document.getElementById("pt");

function updatePoint(){ 
    var points = localStorage.getItem("local_points");
    if (points != null){
    pointsEl.innerHTML = `Points: ${points}`;
    }
}
let timer;
let points_updater;
function ldrbrd(){ 
    let name = document.getElementById("name").value;
    localStorage.setItem("local_name", name); 
    document.getElementsByClassName('play-bg')[0].style.display = "none";
    timer = setInterval(updateCountdown, 1000);
    points_updater = setInterval(updatePoint, 1000);
    }



    // const updateAt = (id, arr) => {
    //     key =    `Leaderboard/${id}`
    //      firebase.database().ref().update(
    //         {
    //           key : {data : arr}
    //         }
    //      )

    //      getLatestData(id)
    // }
    // const addAndGetKey = (arr) => {
    // const ref =  firebase.database().ref("Leaderboard")
    // const mRef = ref.push()
    // let id = mRef.key

    // mRef.set({
    //     arr

    // })
    // return id
    // }

    // const getLatestData = async (id) => {
        
    // const ref =  firebase.database().ref("Leaderboard")
    //     let data = []
    //     await ref.once("value", (snapshot) => {
    //     console.log("snapshot.val()[id]")
    
    //     data = snapshot.val()[id]["data"]
 
    //     console.log(data);
       


    // })

    // return data
    // }


function write_to_firebase(arr) {
    
    let id = addAndGetKey(arr)
    console.log(getLatestData(id));


}
function write_to_firebaseTemp(arr) {
 

    
    let heapArr = []
    let id = ""

    const ref =  firebase.database().ref("Leaderboard")
    const mRef = ref.push()
    id = mRef.key

    mRef.set({
        arr

    })



  


    ref.once("value", (snapshot) => {
        console.log("snapshot.val()[id]")
        console.log(snapshot.val()[id])
    
    })






    console.log(arr);
    console.log("pushed");
    }



//Using heaps for leaderboard construction and sorting


class heapNode{ 
    constructor (name, pts){ 
        this.name = name; 
        this.pts = pts; 
    }
}

// // let heap = await getLatestData('-NIFrsT1rcewbLCoCHDw')
// let heap = getLatestData('-NIFrsT1rcewbLCoCHDw')
// console.log(heap);
// console.log("heap");


 let heap = []
for (var i = 0; i < 10; i += 1){ 
    heap.push(new heapNode("", 0));
}




var i = 0;
function insert(arr, a){ 
    arr.then((arr) => {
            console.log(arr);

        arr.push(a); 
        arr = check(arr, i);  
    })

}

function check(arr, p){ 
    if (p == 0) {
            return arr;
        }
        if (arr[p].pts < arr[Math.floor((p - 1) / 2)].pts) {
            let temp = arr[(p - 1) / 2];
            arr[(p - 1) / 2] = arr[p];
            arr[p] = temp;
        }

        p = Math.floor((p - 1) / 2);
        arr = check(arr, p);
        return arr;
}

function sort(arr) {
        for (var i = arr.length - 1; i > 0; i -= 1) {
            let temp = arr[i];
            arr[i] = arr[0];
            arr[0] = temp;
            check(arr, i - 1);

        }
    }



function to_insert(){

    let tempName = localStorage.getItem("local_name"); 
    let tempPoints = localStorage.getItem("local_points");
    a = new heapNode(tempName, tempPoints);
    insert(heap, a); 
    sort(heap);

}


