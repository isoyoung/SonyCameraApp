
    var button_1 = document.getElementById("button_1");

    button_1.onclick = function() {
      shoot();
    }

    function shoot(){
       $.ajax('http://192.168.122.1:10000/sony/camera'',
      {
        type: 'post',
        data: { query: JSON.stringify({
        "method": "actTakePicture",
        "params": [],
        "id": 10000,
        "version": "1.0"
      }) },
        dataType: 'json'
      } )
    }

    // function shoot() {
    //   var xmlhttp = new XMLHttpRequest();

    //   // 上手く動かない
    //   xmlhttp.onreadystatechange = function(){
    //     if(xmlhttp.state == 200){
    //         //alert(xmlhttp.responseText);
    //         console.log(xmlhttp.responseText);
    //     }
    //   }

    //   // カメラによって, このIPアドレスは異なる
    //   xmlhttp.open('POST','http://192.168.122.1:10000/sony/camera',true);
    //   xmlhttp.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    //   xmlhttp.send(JSON.stringify({
    //     "method": "actTakePicture",
    //     "params": [],
    //     "id": 10000,
    //     "version": "1.0"
    //   }));
    // }
