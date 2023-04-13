# easyFormData
![npm](https://img.shields.io/npm/dt/@syuminghuang/easyformdata)  
🙂translate from google  
可將多維度陣列或物件轉換成formdata格式  
Convert multi-dimensional arrays or objects to formdata format  


## 😎使用方法 (usage)
```
    npm install --save @syuminghuang/easyformdata
```

## 📌基本用法 (basic)
###### 範例1  (example1)
```javascript
    // step1 import js
    import easyFormData from "@syuminghuang/easyformdata";
    import axios from 'axios';

    // step2 set params
    const params = {
        id:123,
        userInfo:{
            name:'MH',
            tel:['0911-111-111','0922-222-222'],
            account:'email@gmail.com',
            file: file // <--- upload file
        }
    }

    // step3 get formdata
    const formdata = easyFormData(params)
    axios.post("example1", payload1);
```
![image](https://github.com/MingHuang4040E095/easyFormData/blob/%E7%A7%BB%E9%99%A4%E7%AF%84%E4%BE%8B%E5%9C%96%E7%89%87/image/example1.jpg)

###### 範例2  (example2)
```javascript
    // step1 import js
    import easyFormData from "@syuminghuang/easyformdata";
    import axios from 'axios'; // 用於請求

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
![image](https://github.com/MingHuang4040E095/easyFormData/blob/%E7%A7%BB%E9%99%A4%E7%AF%84%E4%BE%8B%E5%9C%96%E7%89%87/image/example2.jpg)


## 📌進階用法 (advanced)
###### 範例1  (example1)
```javascript
    // step1 import js
    import easyFormData from "@syuminghuang/easyformdata";
    import axios from 'axios'; // 用於請求

    // step2 set params
    const params = {
      id:1,
      name:'MH',
      account:'example1@gmail.com',
      education: {
        primarySchool:'primarySchool',
        juniorHighSchool:'juniorHighSchool',
        seniorHighSchool:'seniorHighSchool',
        university:'university'
      }
    }

    // step3 set options
    const options = {
      // 1. "convert" 轉換目標屬性的值
      // 1. "convert"  Convert the value of the target property
      convert:[
        {
          targetProperty:'name', // 目標屬性 target property
          currentValue:'MH', // 當前的值 current value
          convertValue:'Hello World!!' // 轉換後的值 convert value
        },
      ],
      // 2. "ignore" 要忽略的屬性
      // 2. "ignore" properties to ignore
      ignore:['account','primarySchool','juniorHighSchool']
    }

    // step4 get formdata
    const payload1 = easyFormData(params,options);
    axios.post("advancedExample1", payload1);
```
![image](https://github.com/MingHuang4040E095/easyFormData/blob/%E7%A7%BB%E9%99%A4%E7%AF%84%E4%BE%8B%E5%9C%96%E7%89%87/image/advancedExample1.jpg)
![image](https://github.com/MingHuang4040E095/easyFormData/blob/%E7%A7%BB%E9%99%A4%E7%AF%84%E4%BE%8B%E5%9C%96%E7%89%87/image/advancedExample1.gif)

###### 範例2  (example2)
```javascript
    // step1 import js
    import easyFormData from "@syuminghuang/easyformdata";
    import axios from 'axios'; // 用於請求
    
    // step2 set params
    const params = {
      www: false,
      test: {
        a: 111,
        b: 222
      },
      sellers: [
        {
          id: "1",
          nickname: "MH",
          account: "user1@gmail.com",
          product: [
            {
              name: "RTX 3060",
              price: 12000,
              quantity: 1,
              status: true
            },
            {
              name: "RTX 3070",
              price: 18790,
              quantity: 2,
              status: false
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
              quantity: 150,
              status: true
            },
            {
              name: "RTX 3070",
              price: 23000,
              quantity: 200,
              status: false
            }
          ]
        }
      ]
    };

    // step3 set options
    const options = {
      //  convert轉換值
      convert: [
        {
          targetProperty: "status", // 要轉換的屬性
          currentValue: false, // 當前的值
          convertValue: "0" // 轉換後的值
        },
        {
          targetProperty: "status", // 要轉換的屬性
          currentValue: true, // 當前的值
          convertValue: "1" // 轉換後的值
        }
      ],
      // 要跳過的屬性
      ignore: ["www", "name", "nickname"]
    };

    // step4 get formdata
    const payload4 = easyFormData(params,options);
    axios.post("advancedExample2", payload4);
````
![image](https://github.com/MingHuang4040E095/easyFormData/blob/%E7%A7%BB%E9%99%A4%E7%AF%84%E4%BE%8B%E5%9C%96%E7%89%87/image/advancedExample2.jpg)
![image](https://github.com/MingHuang4040E095/easyFormData/blob/%E7%A7%BB%E9%99%A4%E7%AF%84%E4%BE%8B%E5%9C%96%E7%89%87/image/advancedExample2.gif)