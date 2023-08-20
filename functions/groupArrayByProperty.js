const arrayOfUserGiving = [
  {
    "created_at": "2023-01-11T08:47:23.259Z",
    "id": 73,
    "from_player_id": 49646,
    "reward_sku": "FT2_PIECE_5",
    "item_id": 631690,
    "from_player_game": {
      "name": "Vinh Vinh",
      "phone": "+84971707123"
    }
  },
  {
    "created_at": "2023-01-11T08:47:02.511Z",
    "id": 72,
    "from_player_id": 49646,
    "reward_sku": "FT2_PIECE_5",
    "item_id": 631690,
    "from_player_game": {
      "name": "Vinh Vinh",
      "phone": "+84971707123"
    }
  },
  {
    "created_at": "2023-01-11T08:39:39.110Z",
    "id": 71,
    "from_player_id": 49887,
    "reward_sku": "FT3_PIECE_1",
    "item_id": 631691,
    "from_player_game": {
      "name": "Bao Thanh Thien",
      "phone": "+84971707035"
    }
  },
  {
    "created_at": "2023-01-11T08:29:29.557Z",
    "id": 70,
    "from_player_id": 49887,
    "reward_sku": "FT3_PIECE_3",
    "item_id": 631693,
    "from_player_game": {
      "name": "Bao Thanh Thien",
      "phone": "+84971707035"
    }
  },
  {
    "created_at": "2023-01-11T08:29:02.445Z",
    "id": 69,
    "from_player_id": 49887,
    "reward_sku": "FT2_PIECE_2",
    "item_id": 631686,
    "from_player_game": {
      "name": "Bao Thanh Thien",
      "phone": "+84971707035"
    }
  }
]

function groupByProperty(array, property_name) {
  let groupBy = array.reduce((finalArr, item) => {
    let propName = item[property_name];
    finalArr[propName] = finalArr[propName] || [];
    finalArr[propName].push(item);
    return finalArr;
  }, {});
  return groupBy;
}

let result = groupByProperty(arrayOfUserGiving, 'from_player_id');
console.log('result', result);
