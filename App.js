fetch('https://api.gnavi.co.jp/RestSearchAPI/v3/7a2f80fb225e327e4e68888b35896170')
.then(response => response.json())
    .then(responseJson => {
      this.setState(
        {
          isLoading: false,
          elements: responseJson.rest,
        },
        function() {}
      );
    })
    .catch(error => {
      console.error(error);
    });

this.state.elements.map((element, index)=>{

    const coords = {
        latitude:Number(element.latitude),
        longitude:Number(element.longitude),
    };
    return (
        <Text>{{element.name}}</Text>     
        <Text>{{element.name_kana}}</Text>
        <Text>{{coords.latitude}}</Text>   //緯度
        <Text>{{coords.longitude}}</Text>  // 経度
    )
    })
