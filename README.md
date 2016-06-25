# CRC-16

Calculate 16-bit cyclic redundancy check (CRC). Supports as many flavor variants of  the 16-bit CRC as possible.

## Usage

```javascript
var crc = crc16(new Buffer([0x00, 0x00]));

console.log('crc:', crc);

// crc: <Buffer 0x47 0x0f>
```

## API

### `crc16 (buffer)`

##### `buffer`: *`<Buffer>`*
`Buffer` of `UInt8`-like bytes. Any element larger than 8 bits (`0xff`) will be truncated.