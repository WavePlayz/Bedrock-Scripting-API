# Block.js
##### Tool for getting block's ID/Data by there name/blockstate

### Methods
* #### `getID`  
| Parameters | Type | Description |
|:------:|:------:|:------:|
| blockName    | string    | Blocks's name or identifier both are allowed |


* * #### Example
```javascript
let blockID = Block.getID("minecraft:glass") // 20
let blockID = Block.getID("glass") // 20
```


* #### `getData`
| Parameters | Type | Description |
|:------:|:------:|:------:|
|    blockName    | string    | Blocks's name or identifier   |
|    blockState    |    Object    |  Block's raw blockstate |


*#### Example
```javascript
// Get your block like normally
let block = system.getBlock(*tickingarea, *x, *y, *z)

// Get block name
let blockName = block.__identifier__

// Get block's blockstate
let blockState = system.getComponent(block, "minecraft:blockstate")

// Get the block Data by passing name and blockstate
let blockID = Block.getData("minecraft:stone", blockState)
```
