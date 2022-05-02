# easyFormData
🙂translate from google

將物件轉成formData格式
Convert the object to formData format


## 😎使用方法 (usage)
```javascript
    // step1 import js
    import easyFormData from "path/easyFormData.js";

    // step2 set params
    const params = {
        id:123,
        userInfo:{
            name:'MH',
            tel:['0911-111-111','0922-222-222'],
            account:'email@gmail.com',
        }
    }

    // step3 get formdata
    const formdata = easyFormData(params)

```

## 例子1  (example1)
```javascript
    // step1 import js
    import easyFormData from "path/easyFormData.js";
    import axios from 'axios';

    // step2 set params
    const params = {
        id:123,
        userInfo:{
            name:'MH',
            tel:['0911-111-111','0922-222-222'],
            account:'email@gmail.com',
        }
    }

    // step3 get formdata
    const formdata = easyFormData(params)
    axios.post("example1", payload1);
```
![image](https://github.com/MingHuang4040E095/easyFormData/blob/main/image/example1.jpg)

## 例子2  (example2)
```javascript
    // step1 import js
    import easyFormData from "path/easyFormData.js";
    import axios from 'axios';

    // step2 set params
    const params = {
        sellers: [
          {
            id: "1",
            nickname: "MH",
            account: "user1@gmail.com",
            product: [
              {
                name: "RTX 3060",
                price: 12000,
                quantity: 1
              },
              {
                name: "RTX 3070",
                price: 18790,
                quantity: 2
              }
            ]
          },
          {
            id: "2",
            nickname: "profiteer",
            account: "user2@gmail.com",
            product: [
              {
                name: "RTX 3060",
                price: 15000,
                quantity: 150
              },
              {
                name: "RTX 3070",
                price: 23000,
                quantity: 200
              }
            ]
          }
        ]
    };
    // step3 get formdata
    const payload2 = easyFormData(params);
    axios.post("example2", payload2);
```
![image](https://github.com/MingHuang4040E095/easyFormData/blob/main/image/example2.jpg)

    