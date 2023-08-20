
var rewardsSetting = [
  {
    "id": 23981,
    "sku": "BADLUCK",
    "name": "BADLUCK",
    "image": null
  },
  {
    "id": 23983,
    "sku": "STAMP01",
    "name": "Trà xoài",
    "image": "https://urbox-uat.woay.xyz/w/bfd72f7c-2a7e-4d53-8918-4be5ba4ce623/assets/5862677d-12e7-4e40-a897-88f554e2a706.png"
  },
]

var stamps = [
  {
    "code": null,
    "id": 243,
    "item_id": 23986,
    "item_name": "Latte",
    "item_type": "icon",
    "showed_popup": false,
    "sku": "STAMP04",
    "updated_at": "2023-05-14T12:21:56.500Z"
  },
  {
    "code": null,
    "id": 242,
    "item_id": 23986,
    "item_name": "Latte",
    "item_type": "icon",
    "showed_popup": true,
    "sku": "STAMP04",
    "updated_at": "2023-05-14T09:46:33.604Z"
  },

]

function calcMyCollectedStamps() {
  const stampFromPortal = rewardsSetting.filter((el) => el.sku.includes('STAMP'));
  const hashQuantityMyStamps = {};
  stamps.forEach((el) => {
    if (hashQuantityMyStamps[el.sku]) {
      hashQuantityMyStamps[el.sku] += 1;
    } else {
      hashQuantityMyStamps[el.sku] = 1;
    }
  });

  const myCollectedStamps = stampFromPortal.map((el) => {
    if (hashQuantityMyStamps[el.sku]) {
      el.quantity = hashQuantityMyStamps[el.sku];
    } else {
      el.quantity = 0;
    }
    return el;
  });
  console.log('myCollectedStamps', myCollectedStamps);
}