const crypto = require('crypto');
const algorithm = 'aes-256-cbc';
const key = 'abcdefghijklmnopqrstuvwxyz123456';
const iv = '1234567890123456';

const cipher = crypto.createCipheriv(algorithm, key, iv);
let result = cipher.update('암호화할 문장', 'utf-8', 'base64');
//                          문자열    인코딩   출력 인코딩
result += cipher.final('base64');
console.log('암호화:', result);

const decipher = crypto.createDecipheriv(algorithm, key, iv);
let result2 = decipher.update(result, 'base64', 'utf-8');
//                          문자열   인코딩   출력 인코딩
result2 += decipher.final('utf-8');
console.log('복호화:', result2);