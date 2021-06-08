// 2019 카카오 블라인드, 오픈 채팅방

function solution(record) {
    let answer = [];
    
    let arr = record.map((val) => val.split(" "));
    
    let names = {};
    for(let i=0; i < arr.length; i++){
        if(arr[i].length === 3 ){
            names[arr[i][1]] = arr[i][2];
        }
    }
    
    for(let i=0; i < arr.length; i++){
        if(arr[i][0]==='Enter'){
            answer.push(names[arr[i][1]]+'님이 들어왔습니다.');
        } else if(arr[i][0]==='Leave'){
            answer.push(names[arr[i][1]]+'님이 나갔습니다.');
        }
      }
    
    
    return answer;
}