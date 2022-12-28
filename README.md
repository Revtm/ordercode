# Order Code Generator
### Generate Order Code Easily

### How To:
- Generate Order Code Default
Example:
```
import OrderCode from 'ordercode';

let x = OrderCode.generate();
console.log(x);
```
Output: Random string with length = 6 (default)

```
"QQG362"
```

- Generate Order Code with Custom Length
Example:
```
import OrderCode from 'ordercode';

let n = 8;
let x = OrderCode.generate(n);
console.log(x);
```
Output: String with lenght = n [where n = 8]

```
"ZQ3R2621"
```

- Generate Order Code with Custom Length (CommonJS)
```
generateDefaultOrderCode(specifyYourOrderCodeLength)
//note: This CommonJS development approach will not be continued in the future version. Please use ES version above.
```
Example:
```
const { generateDefaultOrderCode } = require('ordercode');

let x = generateDefaultOrderCode(8);
console.log(x);
```
then the output will be like:

```
"QQG362D7"
```
