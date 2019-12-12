let playList = [
    {
     author: "LED ZEPPELIN",
     song:"STAIRWAY TO HEAVEN"
    },
    {
     author: "QUEEN",
     song:"BOHEMIAN RHAPSODY"
    },
    {
     author: "LYNYRD SKYNYRD",
     song:"FREE BIRD"
    },
    {
     author: "DEEP PURPLE",
     song:"SMOKE ON THE WATER"
    },
    {
     author: "JIMI HENDRIX",
     song:"ALL ALONG THE WATCHTOWER"
    },
    {
     author: "AC/DC",
     song:"BACK IN BLACK"
    },
    {
     author: "QUEEN",
     song:"WE WILL ROCK YOU"
    },
    {
     author: "METALLICA",
     song:"ENTER SANDMAN"

    }
    
    ];



    var div = document.getElementById('list');

    var ul = document.createElement('ol');
   
     
   
    div.appendChild(ul);
  
     
   
    var data = ["Первая строка", "Вторая строка", "n строка"];
   
     
   
    playList.forEach(function(item)) {
   
      var li = document.createElement('li');
   
      li.innerHTML = playList[i];
   
      ul.appendChild(li);
    }
    

    playList.forEach(function(item)){
    }