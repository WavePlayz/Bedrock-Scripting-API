# Blockstate to Numeric Data
#### Bedrock v1.14.1
A custom utility for Bedrock Scripting API for geting the Data value of block by there blockstates, data value which we use in commands like `/setblock` `/fill` `/give` etc..

### Command Parameter
| Parameters | Type | Description |
|:-------------------:|:-------:|:-------------------:|
| blockName | string   | Block's name / indentifier |
| blockstate  | Object | Block's blockstate object |

### Example 
```javascript
// Get block in world
let block = system.getBlock(*tickingarea, *blockPos) // Here its just example, must use your Ticking Area and Block Position in your script

// Get Block's identifier / name
let blockName = block.__identifier__

// Get Blockstate of block
let blockState = system.getComponent(block, "minecraft:blockstate")

// Get Numeric Data value of block by passing block name and blockstate to function
let blockData = Block.getData(blockName, blockState)
```
