# easyFormData
將物件轉成formData格式

## 使用方法
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
    