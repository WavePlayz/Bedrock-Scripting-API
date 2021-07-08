## Minecraft 
<details>
<summary>ActivatePistonEvent</summary>
<ul> 
<li><font color="#ff9800">isExpanding</font>: boolean</li>
<li><font color="#ff9800">piston</font>: BlockPistonComponent</li>
</ul>
</details>

<details>
<summary>ActivatePistonEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: ActivatePistonEvent) => void): (arg: ActivatePistonEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: ActivatePistonEvent) => void): void</li>
</ul>
</details>

<details>
<summary>ActorAddEffectEvent</summary>
<ul> 
<li><font color="#ff9800">effect</font>: Effect</li>
<li><font color="#ff9800">effectState</font>: number</li>
<li><font color="#ff9800">entity</font>: Entity</li>
</ul>
</details>

<details>
<summary>AddEffectEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: ActorAddEffectEvent) => void): (arg: ActorAddEffectEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: ActorAddEffectEvent) => void): void</li>
</ul>
</details>

<details>
<summary>AddRider</summary>
<ul> 
<li><font color="#ff9800">entityType</font>: string</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">spawnEvent</font>: string</li>
</ul>
</details>

<details>
<summary>Ageable</summary>
<ul> 
<li><font color="#ff9800">dropItems</font>: Array<any></li>
<li><font color="#ff9800">duration</font>: number</li>
<li><font color="#ff9800">feedItems</font>: Array<EntityDefinitionFeedItem></li>
<li><font color="#ff9800">growUp</font>: Trigger</li>
<li><font color="#ff9800">id</font>: string</li>
</ul>
</details>

<details>
<summary>BeforeActivatePistonEvent</summary>
<ul> 
<li><font color="#ff9800">cancel</font>: boolean</li>
<li><font color="#ff9800">isExpanding</font>: boolean</li>
<li><font color="#ff9800">piston</font>: BlockPistonComponent</li>
</ul>
</details>

<details>
<summary>BeforeActivatePistonEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: BeforeActivatePistonEvent) => void): (arg: BeforeActivatePistonEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: BeforeActivatePistonEvent) => void): void</li>
</ul>
</details>

<details>
<summary>BeforeChatEvent</summary>
<ul> 
<li><font color="#ff9800">cancel</font>: boolean</li>
<li><font color="#ff9800">message</font>: string</li>
<li><font color="#ff9800">sender</font>: Player</li>
<li><font color="#ff9800">sendToTargets</font>: boolean</li>
<li><font color="#ff9800">targets</font>: Array<Player></li>
</ul>
</details>

<details>
<summary>BeforeChatEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: BeforeChatEvent) => void): void</li>
</ul>
</details>

<details>
<summary>BeforeExplosionEvent</summary>
<ul> 
<li><font color="#ff9800">cancel</font>: boolean</li>
<li><font color="#ff9800">dimension</font>: Dimension</li>
<li><font color="#ff9800">impactedBlocks</font>: Array<BlockLocation></li>
<li><font color="#ff9800">source</font>: Entity</li>
</ul>
</details>

<details>
<summary>BeforeExplosionEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: BeforeExplosionEvent) => void): void</li>
</ul>
</details>

<details>
<summary>Block</summary>
<ul> 
<li><font color="#ff9800">x</font>: number</li>
<li><font color="#ff9800">y</font>: number</li>
<li><font color="#ff9800">z</font>: number</li>
<li><font color="#ffc107">canBeWaterlogged</font>(): boolean</li>
<li><font color="#ffc107">getBlockData</font>(): BlockPermutation</li>
<li><font color="#ffc107">getComponent</font>(): any</li>
<li><font color="#ffc107">getDimension</font>(): Dimension</li>
<li><font color="#ffc107">getLocation</font>(): BlockLocation</li>
<li><font color="#ffc107">getTags</font>(): Array<any></li>
<li><font color="#ffc107">hasTag</font>(): boolean</li>
<li><font color="#ffc107">isEmpty</font>(): boolean</li>
<li><font color="#ffc107">isWaterlogged</font>(): boolean</li>
<li><font color="#ffc107">setPermutation</font>(permutation: BlockPermutation): void</li>
<li><font color="#ffc107">setType</font>(): void</li>
<li><font color="#ffc107">setWaterlogged</font>(setWaterlogged: boolean): void</li>
</ul>
</details>

<details>
<summary>BlockComponent</summary>
<ul> 
</ul>
</details>

<details>
<summary>BlockInventoryComponent</summary>
<ul> 
<li><font color="#ff9800">container</font>: BlockInventoryComponentContainer</li>
<li><font color="#ff9800">location</font>: BlockLocation</li>
</ul>
</details>

<details>
<summary>BlockInventoryComponentContainer</summary>
<ul> 
<li><font color="#ff9800">emptySlotsCount</font>: number</li>
<li><font color="#ff9800">size</font>: number</li>
<li><font color="#ffc107">addItem</font>(itemStack: ItemStack): void</li>
<li><font color="#ffc107">getItem</font>(slot: number): ItemStack</li>
<li><font color="#ffc107">setItem</font>(slot: number, itemStack: ItemStack): void</li>
<li><font color="#ffc107">swapItems</font>(slot: number, otherSlot: number, otherContainer: Container): boolean</li>
<li><font color="#ffc107">transferItem</font>(fromSlot: number, toSlot: number, toContainer: Container): boolean</li>
</ul>
</details>

<details>
<summary>BlockLocation</summary>
<ul> 
<li><font color="#ff9800">x</font>: number</li>
<li><font color="#ff9800">y</font>: number</li>
<li><font color="#ff9800">z</font>: number</li>
<li><font color="#ffc107">above</font>(): BlockLocation</li>
<li><font color="#ffc107">blocksBetween</font>(): Array<any></li>
<li><font color="#ffc107">constructor</font>(x: number, y: number, z: number)</li>
<li><font color="#ffc107">equals</font>(other: BlockLocation): boolean</li>
<li><font color="#ffc107">offset</font>(x: number, y: number, z: number): BlockLocation</li>
</ul>
</details>

<details>
<summary>BlockPermutation</summary>
<ul> 
<li><font color="#ffc107">clone</font>(): BlockPermutation</li>
<li><font color="#ffc107">getAllProperties</font>(): Array<any></li>
<li><font color="#ffc107">getProperty</font>(propertyName: string): any</li>
<li><font color="#ffc107">getTags</font>(): Array<any></li>
<li><font color="#ffc107">getType</font>(): BlockType</li>
<li><font color="#ffc107">hasTag</font>(tag: string): boolean</li>
</ul>
</details>

<details>
<summary>BlockPistonComponent</summary>
<ul> 
<li><font color="#ff9800">attachedBlocks</font>: Array<BlockLocation></li>
<li><font color="#ff9800">isExpanded</font>: boolean</li>
<li><font color="#ff9800">isExpanding</font>: boolean</li>
<li><font color="#ff9800">isMoving</font>: boolean</li>
<li><font color="#ff9800">isRetracted</font>: boolean</li>
<li><font color="#ff9800">isRetracting</font>: boolean</li>
<li><font color="#ff9800">location</font>: BlockLocation</li>
</ul>
</details>

<details>
<summary>BlockProperties</summary>
<ul> 
<li><font color="#ff9800">age</font>: string</li>
<li><font color="#ff9800">ageBit</font>: string</li>
<li><font color="#ff9800">allowUnderwaterBit</font>: string</li>
<li><font color="#ff9800">attachedBit</font>: string</li>
<li><font color="#ff9800">attachment</font>: string</li>
<li><font color="#ff9800">bambooLeafSize</font>: string</li>
<li><font color="#ff9800">bambooStalkThickness</font>: string</li>
<li><font color="#ff9800">bigDripleafHead</font>: string</li>
<li><font color="#ff9800">bigDripleafTilt</font>: string</li>
<li><font color="#ff9800">biteCounter</font>: string</li>
<li><font color="#ff9800">blockLightLevel</font>: string</li>
<li><font color="#ff9800">brewingStandSlotABit</font>: string</li>
<li><font color="#ff9800">brewingStandSlotBBit</font>: string</li>
<li><font color="#ff9800">brewingStandSlotCBit</font>: string</li>
<li><font color="#ff9800">buttonPressedBit</font>: string</li>
<li><font color="#ff9800">candles</font>: string</li>
<li><font color="#ff9800">cauldronLiquid</font>: string</li>
<li><font color="#ff9800">chemistryTableType</font>: string</li>
<li><font color="#ff9800">chiselType</font>: string</li>
<li><font color="#ff9800">clusterCount</font>: string</li>
<li><font color="#ff9800">color</font>: string</li>
<li><font color="#ff9800">colorBit</font>: string</li>
<li><font color="#ff9800">composterFillLevel</font>: string</li>
<li><font color="#ff9800">conditionalBit</font>: string</li>
<li><font color="#ff9800">coralColor</font>: string</li>
<li><font color="#ff9800">coralDirection</font>: string</li>
<li><font color="#ff9800">coralFanDirection</font>: string</li>
<li><font color="#ff9800">coralHangTypeBit</font>: string</li>
<li><font color="#ff9800">coveredBit</font>: string</li>
<li><font color="#ff9800">crackedState</font>: string</li>
<li><font color="#ff9800">damage</font>: string</li>
<li><font color="#ff9800">deadBit</font>: string</li>
<li><font color="#ff9800">deprecated</font>: string</li>
<li><font color="#ff9800">direction</font>: string</li>
<li><font color="#ff9800">dirtType</font>: string</li>
<li><font color="#ff9800">disarmedBit</font>: string</li>
<li><font color="#ff9800">doorHingeBit</font>: string</li>
<li><font color="#ff9800">doublePlantType</font>: string</li>
<li><font color="#ff9800">dragDown</font>: string</li>
<li><font color="#ff9800">dripstoneThickness</font>: string</li>
<li><font color="#ff9800">endPortalEyeBit</font>: string</li>
<li><font color="#ff9800">explodeBit</font>: string</li>
<li><font color="#ff9800">extinguished</font>: string</li>
<li><font color="#ff9800">facingDirection</font>: string</li>
<li><font color="#ff9800">fillLevel</font>: string</li>
<li><font color="#ff9800">flowerType</font>: string</li>
<li><font color="#ff9800">groundSignDirection</font>: string</li>
<li><font color="#ff9800">growingPlantAge</font>: string</li>
<li><font color="#ff9800">growth</font>: string</li>
<li><font color="#ff9800">hanging</font>: string</li>
<li><font color="#ff9800">headPieceBit</font>: string</li>
<li><font color="#ff9800">height</font>: string</li>
<li><font color="#ff9800">honeyLevel</font>: string</li>
<li><font color="#ff9800">hugeMushroomBits</font>: string</li>
<li><font color="#ff9800">infiniburnBit</font>: string</li>
<li><font color="#ff9800">inWallBit</font>: string</li>
<li><font color="#ff9800">itemFrameMapBit</font>: string</li>
<li><font color="#ff9800">kelpAge</font>: string</li>
<li><font color="#ff9800">leverDirection</font>: string</li>
<li><font color="#ff9800">liquidDepth</font>: string</li>
<li><font color="#ff9800">lit</font>: string</li>
<li><font color="#ff9800">moisturizedAmount</font>: string</li>
<li><font color="#ff9800">monsterEggStoneType</font>: string</li>
<li><font color="#ff9800">multiFaceDirectionBits</font>: string</li>
<li><font color="#ff9800">newLeafType</font>: string</li>
<li><font color="#ff9800">newLogType</font>: string</li>
<li><font color="#ff9800">noDropBit</font>: string</li>
<li><font color="#ff9800">occupiedBit</font>: string</li>
<li><font color="#ff9800">oldLeafType</font>: string</li>
<li><font color="#ff9800">oldLogType</font>: string</li>
<li><font color="#ff9800">openBit</font>: string</li>
<li><font color="#ff9800">outputLitBit</font>: string</li>
<li><font color="#ff9800">outputSubtractBit</font>: string</li>
<li><font color="#ff9800">persistentBit</font>: string</li>
<li><font color="#ff9800">pillarAxis</font>: string</li>
<li><font color="#ff9800">portalAxis</font>: string</li>
<li><font color="#ff9800">poweredBit</font>: string</li>
<li><font color="#ff9800">prismarineBlockType</font>: string</li>
<li><font color="#ff9800">railDataBit</font>: string</li>
<li><font color="#ff9800">railDirection</font>: string</li>
<li><font color="#ff9800">redstoneSignal</font>: string</li>
<li><font color="#ff9800">repeaterDelay</font>: string</li>
<li><font color="#ff9800">respawnAnchorCharge</font>: string</li>
<li><font color="#ff9800">rotation</font>: string</li>
<li><font color="#ff9800">sandStoneType</font>: string</li>
<li><font color="#ff9800">sandType</font>: string</li>
<li><font color="#ff9800">saplingType</font>: string</li>
<li><font color="#ff9800">seaGrassType</font>: string</li>
<li><font color="#ff9800">spongeType</font>: string</li>
<li><font color="#ff9800">stability</font>: string</li>
<li><font color="#ff9800">stabilityCheck</font>: string</li>
<li><font color="#ff9800">stoneBrickType</font>: string</li>
<li><font color="#ff9800">stoneSlabType</font>: string</li>
<li><font color="#ff9800">stoneSlabType2</font>: string</li>
<li><font color="#ff9800">stoneSlabType3</font>: string</li>
<li><font color="#ff9800">stoneSlabType4</font>: string</li>
<li><font color="#ff9800">stoneType</font>: string</li>
<li><font color="#ff9800">strippedBit</font>: string</li>
<li><font color="#ff9800">structureBlockType</font>: string</li>
<li><font color="#ff9800">structureVoidType</font>: string</li>
<li><font color="#ff9800">suspendedBit</font>: string</li>
<li><font color="#ff9800">tallGrassType</font>: string</li>
<li><font color="#ff9800">toggleBit</font>: string</li>
<li><font color="#ff9800">topSlotBit</font>: string</li>
<li><font color="#ff9800">torchFacingDirection</font>: string</li>
<li><font color="#ff9800">triggeredBit</font>: string</li>
<li><font color="#ff9800">turtleEggCount</font>: string</li>
<li><font color="#ff9800">twistingVinesAge</font>: string</li>
<li><font color="#ff9800">updateBit</font>: string</li>
<li><font color="#ff9800">upperBlockBit</font>: string</li>
<li><font color="#ff9800">upsideDownBit</font>: string</li>
<li><font color="#ff9800">vineDirectionBits</font>: string</li>
<li><font color="#ff9800">wallBlockType</font>: string</li>
<li><font color="#ff9800">wallConnectionTypeEast</font>: string</li>
<li><font color="#ff9800">wallConnectionTypeNorth</font>: string</li>
<li><font color="#ff9800">wallConnectionTypeSouth</font>: string</li>
<li><font color="#ff9800">wallConnectionTypeWest</font>: string</li>
<li><font color="#ff9800">wallPostBit</font>: string</li>
<li><font color="#ff9800">weepingVinesAge</font>: string</li>
<li><font color="#ff9800">weirdoDirection</font>: string</li>
<li><font color="#ff9800">woodType</font>: string</li>
</ul>
</details>

<details>
<summary>BlockType</summary>
<ul> 
<li><font color="#ffc107">canBeWaterlogged</font>(): boolean</li>
<li><font color="#ffc107">createDefaultBlockPermutation</font>(): BlockPermutation</li>
<li><font color="#ffc107">getName</font>(): string</li>
</ul>
</details>

<details>
<summary>BlockTypes</summary>
<ul> 
<li><font color="#ff9800">acaciaButton</font>: BlockType</li>
<li><font color="#ff9800">acaciaDoor</font>: BlockType</li>
<li><font color="#ff9800">acaciaFenceGate</font>: BlockType</li>
<li><font color="#ff9800">acaciaPressurePlate</font>: BlockType</li>
<li><font color="#ff9800">acaciaStairs</font>: BlockType</li>
<li><font color="#ff9800">acaciaStandingSign</font>: BlockType</li>
<li><font color="#ff9800">acaciaTrapdoor</font>: BlockType</li>
<li><font color="#ff9800">acaciaWallSign</font>: BlockType</li>
<li><font color="#ff9800">activatorRail</font>: BlockType</li>
<li><font color="#ff9800">air</font>: BlockType</li>
<li><font color="#ff9800">allow</font>: BlockType</li>
<li><font color="#ff9800">amethystBlock</font>: BlockType</li>
<li><font color="#ff9800">amethystCluster</font>: BlockType</li>
<li><font color="#ff9800">ancientDebris</font>: BlockType</li>
<li><font color="#ff9800">andesiteStairs</font>: BlockType</li>
<li><font color="#ff9800">anvil</font>: BlockType</li>
<li><font color="#ff9800">azalea</font>: BlockType</li>
<li><font color="#ff9800">azaleaLeaves</font>: BlockType</li>
<li><font color="#ff9800">azaleaLeavesFlowered</font>: BlockType</li>
<li><font color="#ff9800">bamboo</font>: BlockType</li>
<li><font color="#ff9800">bambooSapling</font>: BlockType</li>
<li><font color="#ff9800">barrel</font>: BlockType</li>
<li><font color="#ff9800">barrier</font>: BlockType</li>
<li><font color="#ff9800">basalt</font>: BlockType</li>
<li><font color="#ff9800">beacon</font>: BlockType</li>
<li><font color="#ff9800">bed</font>: BlockType</li>
<li><font color="#ff9800">bedrock</font>: BlockType</li>
<li><font color="#ff9800">beehive</font>: BlockType</li>
<li><font color="#ff9800">beeNest</font>: BlockType</li>
<li><font color="#ff9800">beetroot</font>: BlockType</li>
<li><font color="#ff9800">bell</font>: BlockType</li>
<li><font color="#ff9800">bigDripleaf</font>: BlockType</li>
<li><font color="#ff9800">birchButton</font>: BlockType</li>
<li><font color="#ff9800">birchDoor</font>: BlockType</li>
<li><font color="#ff9800">birchFenceGate</font>: BlockType</li>
<li><font color="#ff9800">birchPressurePlate</font>: BlockType</li>
<li><font color="#ff9800">birchStairs</font>: BlockType</li>
<li><font color="#ff9800">birchStandingSign</font>: BlockType</li>
<li><font color="#ff9800">birchTrapdoor</font>: BlockType</li>
<li><font color="#ff9800">birchWallSign</font>: BlockType</li>
<li><font color="#ff9800">blackCandle</font>: BlockType</li>
<li><font color="#ff9800">blackCandleCake</font>: BlockType</li>
<li><font color="#ff9800">blackGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">blackstone</font>: BlockType</li>
<li><font color="#ff9800">blackstoneDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">blackstoneSlab</font>: BlockType</li>
<li><font color="#ff9800">blackstoneStairs</font>: BlockType</li>
<li><font color="#ff9800">blackstoneWall</font>: BlockType</li>
<li><font color="#ff9800">blastFurnace</font>: BlockType</li>
<li><font color="#ff9800">blueCandle</font>: BlockType</li>
<li><font color="#ff9800">blueCandleCake</font>: BlockType</li>
<li><font color="#ff9800">blueGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">blueIce</font>: BlockType</li>
<li><font color="#ff9800">boneBlock</font>: BlockType</li>
<li><font color="#ff9800">bookshelf</font>: BlockType</li>
<li><font color="#ff9800">borderBlock</font>: BlockType</li>
<li><font color="#ff9800">brewingStand</font>: BlockType</li>
<li><font color="#ff9800">brickBlock</font>: BlockType</li>
<li><font color="#ff9800">brickStairs</font>: BlockType</li>
<li><font color="#ff9800">brownCandle</font>: BlockType</li>
<li><font color="#ff9800">brownCandleCake</font>: BlockType</li>
<li><font color="#ff9800">brownGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">brownMushroom</font>: BlockType</li>
<li><font color="#ff9800">brownMushroomBlock</font>: BlockType</li>
<li><font color="#ff9800">bubbleColumn</font>: BlockType</li>
<li><font color="#ff9800">buddingAmethyst</font>: BlockType</li>
<li><font color="#ff9800">cactus</font>: BlockType</li>
<li><font color="#ff9800">cake</font>: BlockType</li>
<li><font color="#ff9800">calcite</font>: BlockType</li>
<li><font color="#ff9800">camera</font>: BlockType</li>
<li><font color="#ff9800">campfire</font>: BlockType</li>
<li><font color="#ff9800">candle</font>: BlockType</li>
<li><font color="#ff9800">candleCake</font>: BlockType</li>
<li><font color="#ff9800">carpet</font>: BlockType</li>
<li><font color="#ff9800">carrots</font>: BlockType</li>
<li><font color="#ff9800">cartographyTable</font>: BlockType</li>
<li><font color="#ff9800">carvedPumpkin</font>: BlockType</li>
<li><font color="#ff9800">cauldron</font>: BlockType</li>
<li><font color="#ff9800">caveVines</font>: BlockType</li>
<li><font color="#ff9800">caveVinesBodyWithBerries</font>: BlockType</li>
<li><font color="#ff9800">caveVinesHeadWithBerries</font>: BlockType</li>
<li><font color="#ff9800">chain</font>: BlockType</li>
<li><font color="#ff9800">chainCommandBlock</font>: BlockType</li>
<li><font color="#ff9800">chemicalHeat</font>: BlockType</li>
<li><font color="#ff9800">chemistryTable</font>: BlockType</li>
<li><font color="#ff9800">chest</font>: BlockType</li>
<li><font color="#ff9800">chiseledDeepslate</font>: BlockType</li>
<li><font color="#ff9800">chiseledNetherBricks</font>: BlockType</li>
<li><font color="#ff9800">chiseledPolishedBlackstone</font>: BlockType</li>
<li><font color="#ff9800">chorusFlower</font>: BlockType</li>
<li><font color="#ff9800">chorusPlant</font>: BlockType</li>
<li><font color="#ff9800">clay</font>: BlockType</li>
<li><font color="#ff9800">coalBlock</font>: BlockType</li>
<li><font color="#ff9800">coalOre</font>: BlockType</li>
<li><font color="#ff9800">cobbledDeepslate</font>: BlockType</li>
<li><font color="#ff9800">cobbledDeepslateDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">cobbledDeepslateSlab</font>: BlockType</li>
<li><font color="#ff9800">cobbledDeepslateStairs</font>: BlockType</li>
<li><font color="#ff9800">cobbledDeepslateWall</font>: BlockType</li>
<li><font color="#ff9800">cobblestone</font>: BlockType</li>
<li><font color="#ff9800">cobblestoneWall</font>: BlockType</li>
<li><font color="#ff9800">cocoa</font>: BlockType</li>
<li><font color="#ff9800">coloredTorchBp</font>: BlockType</li>
<li><font color="#ff9800">coloredTorchRg</font>: BlockType</li>
<li><font color="#ff9800">commandBlock</font>: BlockType</li>
<li><font color="#ff9800">composter</font>: BlockType</li>
<li><font color="#ff9800">concrete</font>: BlockType</li>
<li><font color="#ff9800">concretepowder</font>: BlockType</li>
<li><font color="#ff9800">conduit</font>: BlockType</li>
<li><font color="#ff9800">copperBlock</font>: BlockType</li>
<li><font color="#ff9800">copperOre</font>: BlockType</li>
<li><font color="#ff9800">coral</font>: BlockType</li>
<li><font color="#ff9800">coralBlock</font>: BlockType</li>
<li><font color="#ff9800">coralFan</font>: BlockType</li>
<li><font color="#ff9800">coralFanDead</font>: BlockType</li>
<li><font color="#ff9800">coralFanHang</font>: BlockType</li>
<li><font color="#ff9800">coralFanHang2</font>: BlockType</li>
<li><font color="#ff9800">coralFanHang3</font>: BlockType</li>
<li><font color="#ff9800">crackedDeepslateBricks</font>: BlockType</li>
<li><font color="#ff9800">crackedDeepslateTiles</font>: BlockType</li>
<li><font color="#ff9800">crackedNetherBricks</font>: BlockType</li>
<li><font color="#ff9800">crackedPolishedBlackstoneBricks</font>: BlockType</li>
<li><font color="#ff9800">craftingTable</font>: BlockType</li>
<li><font color="#ff9800">crimsonButton</font>: BlockType</li>
<li><font color="#ff9800">crimsonDoor</font>: BlockType</li>
<li><font color="#ff9800">crimsonDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">crimsonFence</font>: BlockType</li>
<li><font color="#ff9800">crimsonFenceGate</font>: BlockType</li>
<li><font color="#ff9800">crimsonFungus</font>: BlockType</li>
<li><font color="#ff9800">crimsonHyphae</font>: BlockType</li>
<li><font color="#ff9800">crimsonNylium</font>: BlockType</li>
<li><font color="#ff9800">crimsonPlanks</font>: BlockType</li>
<li><font color="#ff9800">crimsonPressurePlate</font>: BlockType</li>
<li><font color="#ff9800">crimsonRoots</font>: BlockType</li>
<li><font color="#ff9800">crimsonSlab</font>: BlockType</li>
<li><font color="#ff9800">crimsonStairs</font>: BlockType</li>
<li><font color="#ff9800">crimsonStandingSign</font>: BlockType</li>
<li><font color="#ff9800">crimsonStem</font>: BlockType</li>
<li><font color="#ff9800">crimsonTrapdoor</font>: BlockType</li>
<li><font color="#ff9800">crimsonWallSign</font>: BlockType</li>
<li><font color="#ff9800">cryingObsidian</font>: BlockType</li>
<li><font color="#ff9800">cutCopper</font>: BlockType</li>
<li><font color="#ff9800">cutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">cutCopperStairs</font>: BlockType</li>
<li><font color="#ff9800">cyanCandle</font>: BlockType</li>
<li><font color="#ff9800">cyanCandleCake</font>: BlockType</li>
<li><font color="#ff9800">cyanGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">darkOakButton</font>: BlockType</li>
<li><font color="#ff9800">darkOakDoor</font>: BlockType</li>
<li><font color="#ff9800">darkOakFenceGate</font>: BlockType</li>
<li><font color="#ff9800">darkOakPressurePlate</font>: BlockType</li>
<li><font color="#ff9800">darkOakStairs</font>: BlockType</li>
<li><font color="#ff9800">darkoakStandingSign</font>: BlockType</li>
<li><font color="#ff9800">darkOakTrapdoor</font>: BlockType</li>
<li><font color="#ff9800">darkoakWallSign</font>: BlockType</li>
<li><font color="#ff9800">darkPrismarineStairs</font>: BlockType</li>
<li><font color="#ff9800">daylightDetector</font>: BlockType</li>
<li><font color="#ff9800">daylightDetectorInverted</font>: BlockType</li>
<li><font color="#ff9800">deadbush</font>: BlockType</li>
<li><font color="#ff9800">deepslate</font>: BlockType</li>
<li><font color="#ff9800">deepslateBrickDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">deepslateBricks</font>: BlockType</li>
<li><font color="#ff9800">deepslateBrickSlab</font>: BlockType</li>
<li><font color="#ff9800">deepslateBrickStairs</font>: BlockType</li>
<li><font color="#ff9800">deepslateBrickWall</font>: BlockType</li>
<li><font color="#ff9800">deepslateCoalOre</font>: BlockType</li>
<li><font color="#ff9800">deepslateCopperOre</font>: BlockType</li>
<li><font color="#ff9800">deepslateDiamondOre</font>: BlockType</li>
<li><font color="#ff9800">deepslateEmeraldOre</font>: BlockType</li>
<li><font color="#ff9800">deepslateGoldOre</font>: BlockType</li>
<li><font color="#ff9800">deepslateIronOre</font>: BlockType</li>
<li><font color="#ff9800">deepslateLapisOre</font>: BlockType</li>
<li><font color="#ff9800">deepslateRedstoneOre</font>: BlockType</li>
<li><font color="#ff9800">deepslateTileDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">deepslateTiles</font>: BlockType</li>
<li><font color="#ff9800">deepslateTileSlab</font>: BlockType</li>
<li><font color="#ff9800">deepslateTileStairs</font>: BlockType</li>
<li><font color="#ff9800">deepslateTileWall</font>: BlockType</li>
<li><font color="#ff9800">deny</font>: BlockType</li>
<li><font color="#ff9800">detectorRail</font>: BlockType</li>
<li><font color="#ff9800">diamondBlock</font>: BlockType</li>
<li><font color="#ff9800">diamondOre</font>: BlockType</li>
<li><font color="#ff9800">dioriteStairs</font>: BlockType</li>
<li><font color="#ff9800">dirt</font>: BlockType</li>
<li><font color="#ff9800">dirtWithRoots</font>: BlockType</li>
<li><font color="#ff9800">dispenser</font>: BlockType</li>
<li><font color="#ff9800">doubleCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">doublePlant</font>: BlockType</li>
<li><font color="#ff9800">doubleStoneSlab</font>: BlockType</li>
<li><font color="#ff9800">doubleStoneSlab2</font>: BlockType</li>
<li><font color="#ff9800">doubleStoneSlab3</font>: BlockType</li>
<li><font color="#ff9800">doubleStoneSlab4</font>: BlockType</li>
<li><font color="#ff9800">doubleWoodenSlab</font>: BlockType</li>
<li><font color="#ff9800">dragonEgg</font>: BlockType</li>
<li><font color="#ff9800">driedKelpBlock</font>: BlockType</li>
<li><font color="#ff9800">dripstoneBlock</font>: BlockType</li>
<li><font color="#ff9800">dropper</font>: BlockType</li>
<li><font color="#ff9800">element0</font>: BlockType</li>
<li><font color="#ff9800">element1</font>: BlockType</li>
<li><font color="#ff9800">element10</font>: BlockType</li>
<li><font color="#ff9800">element100</font>: BlockType</li>
<li><font color="#ff9800">element101</font>: BlockType</li>
<li><font color="#ff9800">element102</font>: BlockType</li>
<li><font color="#ff9800">element103</font>: BlockType</li>
<li><font color="#ff9800">element104</font>: BlockType</li>
<li><font color="#ff9800">element105</font>: BlockType</li>
<li><font color="#ff9800">element106</font>: BlockType</li>
<li><font color="#ff9800">element107</font>: BlockType</li>
<li><font color="#ff9800">element108</font>: BlockType</li>
<li><font color="#ff9800">element109</font>: BlockType</li>
<li><font color="#ff9800">element11</font>: BlockType</li>
<li><font color="#ff9800">element110</font>: BlockType</li>
<li><font color="#ff9800">element111</font>: BlockType</li>
<li><font color="#ff9800">element112</font>: BlockType</li>
<li><font color="#ff9800">element113</font>: BlockType</li>
<li><font color="#ff9800">element114</font>: BlockType</li>
<li><font color="#ff9800">element115</font>: BlockType</li>
<li><font color="#ff9800">element116</font>: BlockType</li>
<li><font color="#ff9800">element117</font>: BlockType</li>
<li><font color="#ff9800">element118</font>: BlockType</li>
<li><font color="#ff9800">element12</font>: BlockType</li>
<li><font color="#ff9800">element13</font>: BlockType</li>
<li><font color="#ff9800">element14</font>: BlockType</li>
<li><font color="#ff9800">element15</font>: BlockType</li>
<li><font color="#ff9800">element16</font>: BlockType</li>
<li><font color="#ff9800">element17</font>: BlockType</li>
<li><font color="#ff9800">element18</font>: BlockType</li>
<li><font color="#ff9800">element19</font>: BlockType</li>
<li><font color="#ff9800">element2</font>: BlockType</li>
<li><font color="#ff9800">element20</font>: BlockType</li>
<li><font color="#ff9800">element21</font>: BlockType</li>
<li><font color="#ff9800">element22</font>: BlockType</li>
<li><font color="#ff9800">element23</font>: BlockType</li>
<li><font color="#ff9800">element24</font>: BlockType</li>
<li><font color="#ff9800">element25</font>: BlockType</li>
<li><font color="#ff9800">element26</font>: BlockType</li>
<li><font color="#ff9800">element27</font>: BlockType</li>
<li><font color="#ff9800">element28</font>: BlockType</li>
<li><font color="#ff9800">element29</font>: BlockType</li>
<li><font color="#ff9800">element3</font>: BlockType</li>
<li><font color="#ff9800">element30</font>: BlockType</li>
<li><font color="#ff9800">element31</font>: BlockType</li>
<li><font color="#ff9800">element32</font>: BlockType</li>
<li><font color="#ff9800">element33</font>: BlockType</li>
<li><font color="#ff9800">element34</font>: BlockType</li>
<li><font color="#ff9800">element35</font>: BlockType</li>
<li><font color="#ff9800">element36</font>: BlockType</li>
<li><font color="#ff9800">element37</font>: BlockType</li>
<li><font color="#ff9800">element38</font>: BlockType</li>
<li><font color="#ff9800">element39</font>: BlockType</li>
<li><font color="#ff9800">element4</font>: BlockType</li>
<li><font color="#ff9800">element40</font>: BlockType</li>
<li><font color="#ff9800">element41</font>: BlockType</li>
<li><font color="#ff9800">element42</font>: BlockType</li>
<li><font color="#ff9800">element43</font>: BlockType</li>
<li><font color="#ff9800">element44</font>: BlockType</li>
<li><font color="#ff9800">element45</font>: BlockType</li>
<li><font color="#ff9800">element46</font>: BlockType</li>
<li><font color="#ff9800">element47</font>: BlockType</li>
<li><font color="#ff9800">element48</font>: BlockType</li>
<li><font color="#ff9800">element49</font>: BlockType</li>
<li><font color="#ff9800">element5</font>: BlockType</li>
<li><font color="#ff9800">element50</font>: BlockType</li>
<li><font color="#ff9800">element51</font>: BlockType</li>
<li><font color="#ff9800">element52</font>: BlockType</li>
<li><font color="#ff9800">element53</font>: BlockType</li>
<li><font color="#ff9800">element54</font>: BlockType</li>
<li><font color="#ff9800">element55</font>: BlockType</li>
<li><font color="#ff9800">element56</font>: BlockType</li>
<li><font color="#ff9800">element57</font>: BlockType</li>
<li><font color="#ff9800">element58</font>: BlockType</li>
<li><font color="#ff9800">element59</font>: BlockType</li>
<li><font color="#ff9800">element6</font>: BlockType</li>
<li><font color="#ff9800">element60</font>: BlockType</li>
<li><font color="#ff9800">element61</font>: BlockType</li>
<li><font color="#ff9800">element62</font>: BlockType</li>
<li><font color="#ff9800">element63</font>: BlockType</li>
<li><font color="#ff9800">element64</font>: BlockType</li>
<li><font color="#ff9800">element65</font>: BlockType</li>
<li><font color="#ff9800">element66</font>: BlockType</li>
<li><font color="#ff9800">element67</font>: BlockType</li>
<li><font color="#ff9800">element68</font>: BlockType</li>
<li><font color="#ff9800">element69</font>: BlockType</li>
<li><font color="#ff9800">element7</font>: BlockType</li>
<li><font color="#ff9800">element70</font>: BlockType</li>
<li><font color="#ff9800">element71</font>: BlockType</li>
<li><font color="#ff9800">element72</font>: BlockType</li>
<li><font color="#ff9800">element73</font>: BlockType</li>
<li><font color="#ff9800">element74</font>: BlockType</li>
<li><font color="#ff9800">element75</font>: BlockType</li>
<li><font color="#ff9800">element76</font>: BlockType</li>
<li><font color="#ff9800">element77</font>: BlockType</li>
<li><font color="#ff9800">element78</font>: BlockType</li>
<li><font color="#ff9800">element79</font>: BlockType</li>
<li><font color="#ff9800">element8</font>: BlockType</li>
<li><font color="#ff9800">element80</font>: BlockType</li>
<li><font color="#ff9800">element81</font>: BlockType</li>
<li><font color="#ff9800">element82</font>: BlockType</li>
<li><font color="#ff9800">element83</font>: BlockType</li>
<li><font color="#ff9800">element84</font>: BlockType</li>
<li><font color="#ff9800">element85</font>: BlockType</li>
<li><font color="#ff9800">element86</font>: BlockType</li>
<li><font color="#ff9800">element87</font>: BlockType</li>
<li><font color="#ff9800">element88</font>: BlockType</li>
<li><font color="#ff9800">element89</font>: BlockType</li>
<li><font color="#ff9800">element9</font>: BlockType</li>
<li><font color="#ff9800">element90</font>: BlockType</li>
<li><font color="#ff9800">element91</font>: BlockType</li>
<li><font color="#ff9800">element92</font>: BlockType</li>
<li><font color="#ff9800">element93</font>: BlockType</li>
<li><font color="#ff9800">element94</font>: BlockType</li>
<li><font color="#ff9800">element95</font>: BlockType</li>
<li><font color="#ff9800">element96</font>: BlockType</li>
<li><font color="#ff9800">element97</font>: BlockType</li>
<li><font color="#ff9800">element98</font>: BlockType</li>
<li><font color="#ff9800">element99</font>: BlockType</li>
<li><font color="#ff9800">emeraldBlock</font>: BlockType</li>
<li><font color="#ff9800">emeraldOre</font>: BlockType</li>
<li><font color="#ff9800">enchantingTable</font>: BlockType</li>
<li><font color="#ff9800">endBricks</font>: BlockType</li>
<li><font color="#ff9800">endBrickStairs</font>: BlockType</li>
<li><font color="#ff9800">enderChest</font>: BlockType</li>
<li><font color="#ff9800">endGateway</font>: BlockType</li>
<li><font color="#ff9800">endPortal</font>: BlockType</li>
<li><font color="#ff9800">endPortalFrame</font>: BlockType</li>
<li><font color="#ff9800">endRod</font>: BlockType</li>
<li><font color="#ff9800">endStone</font>: BlockType</li>
<li><font color="#ff9800">exposedCopper</font>: BlockType</li>
<li><font color="#ff9800">exposedCutCopper</font>: BlockType</li>
<li><font color="#ff9800">exposedCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">exposedCutCopperStairs</font>: BlockType</li>
<li><font color="#ff9800">exposedDoubleCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">farmland</font>: BlockType</li>
<li><font color="#ff9800">fence</font>: BlockType</li>
<li><font color="#ff9800">fenceGate</font>: BlockType</li>
<li><font color="#ff9800">fire</font>: BlockType</li>
<li><font color="#ff9800">fletchingTable</font>: BlockType</li>
<li><font color="#ff9800">floweringAzalea</font>: BlockType</li>
<li><font color="#ff9800">flowerPot</font>: BlockType</li>
<li><font color="#ff9800">flowingLava</font>: BlockType</li>
<li><font color="#ff9800">flowingWater</font>: BlockType</li>
<li><font color="#ff9800">frame</font>: BlockType</li>
<li><font color="#ff9800">frostedIce</font>: BlockType</li>
<li><font color="#ff9800">furnace</font>: BlockType</li>
<li><font color="#ff9800">gildedBlackstone</font>: BlockType</li>
<li><font color="#ff9800">glass</font>: BlockType</li>
<li><font color="#ff9800">glassPane</font>: BlockType</li>
<li><font color="#ff9800">glowFrame</font>: BlockType</li>
<li><font color="#ff9800">glowingobsidian</font>: BlockType</li>
<li><font color="#ff9800">glowLichen</font>: BlockType</li>
<li><font color="#ff9800">glowstone</font>: BlockType</li>
<li><font color="#ff9800">goldBlock</font>: BlockType</li>
<li><font color="#ff9800">goldenRail</font>: BlockType</li>
<li><font color="#ff9800">goldOre</font>: BlockType</li>
<li><font color="#ff9800">graniteStairs</font>: BlockType</li>
<li><font color="#ff9800">grass</font>: BlockType</li>
<li><font color="#ff9800">grassPath</font>: BlockType</li>
<li><font color="#ff9800">gravel</font>: BlockType</li>
<li><font color="#ff9800">grayCandle</font>: BlockType</li>
<li><font color="#ff9800">grayCandleCake</font>: BlockType</li>
<li><font color="#ff9800">grayGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">greenCandle</font>: BlockType</li>
<li><font color="#ff9800">greenCandleCake</font>: BlockType</li>
<li><font color="#ff9800">greenGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">grindstone</font>: BlockType</li>
<li><font color="#ff9800">hangingRoots</font>: BlockType</li>
<li><font color="#ff9800">hardenedClay</font>: BlockType</li>
<li><font color="#ff9800">hardGlass</font>: BlockType</li>
<li><font color="#ff9800">hardGlassPane</font>: BlockType</li>
<li><font color="#ff9800">hardStainedGlass</font>: BlockType</li>
<li><font color="#ff9800">hardStainedGlassPane</font>: BlockType</li>
<li><font color="#ff9800">hayBlock</font>: BlockType</li>
<li><font color="#ff9800">heavyWeightedPressurePlate</font>: BlockType</li>
<li><font color="#ff9800">honeyBlock</font>: BlockType</li>
<li><font color="#ff9800">honeycombBlock</font>: BlockType</li>
<li><font color="#ff9800">hopper</font>: BlockType</li>
<li><font color="#ff9800">ice</font>: BlockType</li>
<li><font color="#ff9800">infestedDeepslate</font>: BlockType</li>
<li><font color="#ff9800">infoUpdate</font>: BlockType</li>
<li><font color="#ff9800">infoUpdate2</font>: BlockType</li>
<li><font color="#ff9800">invisiblebedrock</font>: BlockType</li>
<li><font color="#ff9800">ironBars</font>: BlockType</li>
<li><font color="#ff9800">ironBlock</font>: BlockType</li>
<li><font color="#ff9800">ironDoor</font>: BlockType</li>
<li><font color="#ff9800">ironOre</font>: BlockType</li>
<li><font color="#ff9800">ironTrapdoor</font>: BlockType</li>
<li><font color="#ff9800">jigsaw</font>: BlockType</li>
<li><font color="#ff9800">jukebox</font>: BlockType</li>
<li><font color="#ff9800">jungleButton</font>: BlockType</li>
<li><font color="#ff9800">jungleDoor</font>: BlockType</li>
<li><font color="#ff9800">jungleFenceGate</font>: BlockType</li>
<li><font color="#ff9800">junglePressurePlate</font>: BlockType</li>
<li><font color="#ff9800">jungleStairs</font>: BlockType</li>
<li><font color="#ff9800">jungleStandingSign</font>: BlockType</li>
<li><font color="#ff9800">jungleTrapdoor</font>: BlockType</li>
<li><font color="#ff9800">jungleWallSign</font>: BlockType</li>
<li><font color="#ff9800">kelp</font>: BlockType</li>
<li><font color="#ff9800">ladder</font>: BlockType</li>
<li><font color="#ff9800">lantern</font>: BlockType</li>
<li><font color="#ff9800">lapisBlock</font>: BlockType</li>
<li><font color="#ff9800">lapisOre</font>: BlockType</li>
<li><font color="#ff9800">largeAmethystBud</font>: BlockType</li>
<li><font color="#ff9800">lava</font>: BlockType</li>
<li><font color="#ff9800">lavaCauldron</font>: BlockType</li>
<li><font color="#ff9800">leaves</font>: BlockType</li>
<li><font color="#ff9800">leaves2</font>: BlockType</li>
<li><font color="#ff9800">lectern</font>: BlockType</li>
<li><font color="#ff9800">lever</font>: BlockType</li>
<li><font color="#ff9800">lightBlock</font>: BlockType</li>
<li><font color="#ff9800">lightBlueCandle</font>: BlockType</li>
<li><font color="#ff9800">lightBlueCandleCake</font>: BlockType</li>
<li><font color="#ff9800">lightBlueGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">lightGrayCandle</font>: BlockType</li>
<li><font color="#ff9800">lightGrayCandleCake</font>: BlockType</li>
<li><font color="#ff9800">lightningRod</font>: BlockType</li>
<li><font color="#ff9800">lightWeightedPressurePlate</font>: BlockType</li>
<li><font color="#ff9800">limeCandle</font>: BlockType</li>
<li><font color="#ff9800">limeCandleCake</font>: BlockType</li>
<li><font color="#ff9800">limeGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">litBlastFurnace</font>: BlockType</li>
<li><font color="#ff9800">litDeepslateRedstoneOre</font>: BlockType</li>
<li><font color="#ff9800">litFurnace</font>: BlockType</li>
<li><font color="#ff9800">litPumpkin</font>: BlockType</li>
<li><font color="#ff9800">litRedstoneLamp</font>: BlockType</li>
<li><font color="#ff9800">litRedstoneOre</font>: BlockType</li>
<li><font color="#ff9800">litSmoker</font>: BlockType</li>
<li><font color="#ff9800">lodestone</font>: BlockType</li>
<li><font color="#ff9800">log</font>: BlockType</li>
<li><font color="#ff9800">log2</font>: BlockType</li>
<li><font color="#ff9800">loom</font>: BlockType</li>
<li><font color="#ff9800">magentaCandle</font>: BlockType</li>
<li><font color="#ff9800">magentaCandleCake</font>: BlockType</li>
<li><font color="#ff9800">magentaGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">magma</font>: BlockType</li>
<li><font color="#ff9800">mediumAmethystBud</font>: BlockType</li>
<li><font color="#ff9800">melonBlock</font>: BlockType</li>
<li><font color="#ff9800">melonStem</font>: BlockType</li>
<li><font color="#ff9800">mobSpawner</font>: BlockType</li>
<li><font color="#ff9800">monsterEgg</font>: BlockType</li>
<li><font color="#ff9800">mossBlock</font>: BlockType</li>
<li><font color="#ff9800">mossCarpet</font>: BlockType</li>
<li><font color="#ff9800">mossyCobblestone</font>: BlockType</li>
<li><font color="#ff9800">mossyCobblestoneStairs</font>: BlockType</li>
<li><font color="#ff9800">mossyStoneBrickStairs</font>: BlockType</li>
<li><font color="#ff9800">movingblock</font>: BlockType</li>
<li><font color="#ff9800">mycelium</font>: BlockType</li>
<li><font color="#ff9800">netherBrick</font>: BlockType</li>
<li><font color="#ff9800">netherBrickFence</font>: BlockType</li>
<li><font color="#ff9800">netherBrickStairs</font>: BlockType</li>
<li><font color="#ff9800">netherGoldOre</font>: BlockType</li>
<li><font color="#ff9800">netheriteBlock</font>: BlockType</li>
<li><font color="#ff9800">netherrack</font>: BlockType</li>
<li><font color="#ff9800">netherreactor</font>: BlockType</li>
<li><font color="#ff9800">netherSprouts</font>: BlockType</li>
<li><font color="#ff9800">netherWart</font>: BlockType</li>
<li><font color="#ff9800">netherWartBlock</font>: BlockType</li>
<li><font color="#ff9800">normalStoneStairs</font>: BlockType</li>
<li><font color="#ff9800">noteblock</font>: BlockType</li>
<li><font color="#ff9800">oakStairs</font>: BlockType</li>
<li><font color="#ff9800">observer</font>: BlockType</li>
<li><font color="#ff9800">obsidian</font>: BlockType</li>
<li><font color="#ff9800">orangeCandle</font>: BlockType</li>
<li><font color="#ff9800">orangeCandleCake</font>: BlockType</li>
<li><font color="#ff9800">orangeGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">oxidizedCopper</font>: BlockType</li>
<li><font color="#ff9800">oxidizedCutCopper</font>: BlockType</li>
<li><font color="#ff9800">oxidizedCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">oxidizedCutCopperStairs</font>: BlockType</li>
<li><font color="#ff9800">oxidizedDoubleCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">packedIce</font>: BlockType</li>
<li><font color="#ff9800">pinkCandle</font>: BlockType</li>
<li><font color="#ff9800">pinkCandleCake</font>: BlockType</li>
<li><font color="#ff9800">pinkGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">piston</font>: BlockType</li>
<li><font color="#ff9800">pistonarmcollision</font>: BlockType</li>
<li><font color="#ff9800">planks</font>: BlockType</li>
<li><font color="#ff9800">podzol</font>: BlockType</li>
<li><font color="#ff9800">pointedDripstone</font>: BlockType</li>
<li><font color="#ff9800">polishedAndesiteStairs</font>: BlockType</li>
<li><font color="#ff9800">polishedBasalt</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstone</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneBrickDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneBricks</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneBrickSlab</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneBrickStairs</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneBrickWall</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneButton</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstonePressurePlate</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneSlab</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneStairs</font>: BlockType</li>
<li><font color="#ff9800">polishedBlackstoneWall</font>: BlockType</li>
<li><font color="#ff9800">polishedDeepslate</font>: BlockType</li>
<li><font color="#ff9800">polishedDeepslateDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">polishedDeepslateSlab</font>: BlockType</li>
<li><font color="#ff9800">polishedDeepslateStairs</font>: BlockType</li>
<li><font color="#ff9800">polishedDeepslateWall</font>: BlockType</li>
<li><font color="#ff9800">polishedDioriteStairs</font>: BlockType</li>
<li><font color="#ff9800">polishedGraniteStairs</font>: BlockType</li>
<li><font color="#ff9800">portal</font>: BlockType</li>
<li><font color="#ff9800">potatoes</font>: BlockType</li>
<li><font color="#ff9800">powderSnow</font>: BlockType</li>
<li><font color="#ff9800">poweredComparator</font>: BlockType</li>
<li><font color="#ff9800">poweredRepeater</font>: BlockType</li>
<li><font color="#ff9800">prismarine</font>: BlockType</li>
<li><font color="#ff9800">prismarineBricksStairs</font>: BlockType</li>
<li><font color="#ff9800">prismarineStairs</font>: BlockType</li>
<li><font color="#ff9800">pumpkin</font>: BlockType</li>
<li><font color="#ff9800">pumpkinStem</font>: BlockType</li>
<li><font color="#ff9800">purpleCandle</font>: BlockType</li>
<li><font color="#ff9800">purpleCandleCake</font>: BlockType</li>
<li><font color="#ff9800">purpleGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">purpurBlock</font>: BlockType</li>
<li><font color="#ff9800">purpurStairs</font>: BlockType</li>
<li><font color="#ff9800">quartzBlock</font>: BlockType</li>
<li><font color="#ff9800">quartzBricks</font>: BlockType</li>
<li><font color="#ff9800">quartzOre</font>: BlockType</li>
<li><font color="#ff9800">quartzStairs</font>: BlockType</li>
<li><font color="#ff9800">rail</font>: BlockType</li>
<li><font color="#ff9800">rawCopperBlock</font>: BlockType</li>
<li><font color="#ff9800">rawGoldBlock</font>: BlockType</li>
<li><font color="#ff9800">rawIronBlock</font>: BlockType</li>
<li><font color="#ff9800">redCandle</font>: BlockType</li>
<li><font color="#ff9800">redCandleCake</font>: BlockType</li>
<li><font color="#ff9800">redFlower</font>: BlockType</li>
<li><font color="#ff9800">redGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">redMushroom</font>: BlockType</li>
<li><font color="#ff9800">redMushroomBlock</font>: BlockType</li>
<li><font color="#ff9800">redNetherBrick</font>: BlockType</li>
<li><font color="#ff9800">redNetherBrickStairs</font>: BlockType</li>
<li><font color="#ff9800">redSandstone</font>: BlockType</li>
<li><font color="#ff9800">redSandstoneStairs</font>: BlockType</li>
<li><font color="#ff9800">redstoneBlock</font>: BlockType</li>
<li><font color="#ff9800">redstoneLamp</font>: BlockType</li>
<li><font color="#ff9800">redstoneOre</font>: BlockType</li>
<li><font color="#ff9800">redstoneTorch</font>: BlockType</li>
<li><font color="#ff9800">redstoneWire</font>: BlockType</li>
<li><font color="#ff9800">reeds</font>: BlockType</li>
<li><font color="#ff9800">repeatingCommandBlock</font>: BlockType</li>
<li><font color="#ff9800">reserved6</font>: BlockType</li>
<li><font color="#ff9800">respawnAnchor</font>: BlockType</li>
<li><font color="#ff9800">sand</font>: BlockType</li>
<li><font color="#ff9800">sandstone</font>: BlockType</li>
<li><font color="#ff9800">sandstoneStairs</font>: BlockType</li>
<li><font color="#ff9800">sapling</font>: BlockType</li>
<li><font color="#ff9800">scaffolding</font>: BlockType</li>
<li><font color="#ff9800">sculkSensor</font>: BlockType</li>
<li><font color="#ff9800">seagrass</font>: BlockType</li>
<li><font color="#ff9800">sealantern</font>: BlockType</li>
<li><font color="#ff9800">seaPickle</font>: BlockType</li>
<li><font color="#ff9800">shroomlight</font>: BlockType</li>
<li><font color="#ff9800">shulkerBox</font>: BlockType</li>
<li><font color="#ff9800">silverGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">skull</font>: BlockType</li>
<li><font color="#ff9800">slime</font>: BlockType</li>
<li><font color="#ff9800">smallAmethystBud</font>: BlockType</li>
<li><font color="#ff9800">smallDripleafBlock</font>: BlockType</li>
<li><font color="#ff9800">smithingTable</font>: BlockType</li>
<li><font color="#ff9800">smoker</font>: BlockType</li>
<li><font color="#ff9800">smoothBasalt</font>: BlockType</li>
<li><font color="#ff9800">smoothQuartzStairs</font>: BlockType</li>
<li><font color="#ff9800">smoothRedSandstoneStairs</font>: BlockType</li>
<li><font color="#ff9800">smoothSandstoneStairs</font>: BlockType</li>
<li><font color="#ff9800">smoothStone</font>: BlockType</li>
<li><font color="#ff9800">snow</font>: BlockType</li>
<li><font color="#ff9800">snowLayer</font>: BlockType</li>
<li><font color="#ff9800">soulCampfire</font>: BlockType</li>
<li><font color="#ff9800">soulFire</font>: BlockType</li>
<li><font color="#ff9800">soulLantern</font>: BlockType</li>
<li><font color="#ff9800">soulSand</font>: BlockType</li>
<li><font color="#ff9800">soulSoil</font>: BlockType</li>
<li><font color="#ff9800">soulTorch</font>: BlockType</li>
<li><font color="#ff9800">sponge</font>: BlockType</li>
<li><font color="#ff9800">sporeBlossom</font>: BlockType</li>
<li><font color="#ff9800">spruceButton</font>: BlockType</li>
<li><font color="#ff9800">spruceDoor</font>: BlockType</li>
<li><font color="#ff9800">spruceFenceGate</font>: BlockType</li>
<li><font color="#ff9800">sprucePressurePlate</font>: BlockType</li>
<li><font color="#ff9800">spruceStairs</font>: BlockType</li>
<li><font color="#ff9800">spruceStandingSign</font>: BlockType</li>
<li><font color="#ff9800">spruceTrapdoor</font>: BlockType</li>
<li><font color="#ff9800">spruceWallSign</font>: BlockType</li>
<li><font color="#ff9800">stainedGlass</font>: BlockType</li>
<li><font color="#ff9800">stainedGlassPane</font>: BlockType</li>
<li><font color="#ff9800">stainedHardenedClay</font>: BlockType</li>
<li><font color="#ff9800">standingBanner</font>: BlockType</li>
<li><font color="#ff9800">standingSign</font>: BlockType</li>
<li><font color="#ff9800">stickyPiston</font>: BlockType</li>
<li><font color="#ff9800">stickypistonarmcollision</font>: BlockType</li>
<li><font color="#ff9800">stone</font>: BlockType</li>
<li><font color="#ff9800">stonebrick</font>: BlockType</li>
<li><font color="#ff9800">stoneBrickStairs</font>: BlockType</li>
<li><font color="#ff9800">stoneButton</font>: BlockType</li>
<li><font color="#ff9800">stonecutter</font>: BlockType</li>
<li><font color="#ff9800">stonecutterBlock</font>: BlockType</li>
<li><font color="#ff9800">stonePressurePlate</font>: BlockType</li>
<li><font color="#ff9800">stoneSlab</font>: BlockType</li>
<li><font color="#ff9800">stoneSlab2</font>: BlockType</li>
<li><font color="#ff9800">stoneSlab3</font>: BlockType</li>
<li><font color="#ff9800">stoneSlab4</font>: BlockType</li>
<li><font color="#ff9800">stoneStairs</font>: BlockType</li>
<li><font color="#ff9800">strippedAcaciaLog</font>: BlockType</li>
<li><font color="#ff9800">strippedBirchLog</font>: BlockType</li>
<li><font color="#ff9800">strippedCrimsonHyphae</font>: BlockType</li>
<li><font color="#ff9800">strippedCrimsonStem</font>: BlockType</li>
<li><font color="#ff9800">strippedDarkOakLog</font>: BlockType</li>
<li><font color="#ff9800">strippedJungleLog</font>: BlockType</li>
<li><font color="#ff9800">strippedOakLog</font>: BlockType</li>
<li><font color="#ff9800">strippedSpruceLog</font>: BlockType</li>
<li><font color="#ff9800">strippedWarpedHyphae</font>: BlockType</li>
<li><font color="#ff9800">strippedWarpedStem</font>: BlockType</li>
<li><font color="#ff9800">structureBlock</font>: BlockType</li>
<li><font color="#ff9800">structureVoid</font>: BlockType</li>
<li><font color="#ff9800">sweetBerryBush</font>: BlockType</li>
<li><font color="#ff9800">tallgrass</font>: BlockType</li>
<li><font color="#ff9800">target</font>: BlockType</li>
<li><font color="#ff9800">tintedGlass</font>: BlockType</li>
<li><font color="#ff9800">tnt</font>: BlockType</li>
<li><font color="#ff9800">torch</font>: BlockType</li>
<li><font color="#ff9800">trapdoor</font>: BlockType</li>
<li><font color="#ff9800">trappedChest</font>: BlockType</li>
<li><font color="#ff9800">tripwire</font>: BlockType</li>
<li><font color="#ff9800">tripwireHook</font>: BlockType</li>
<li><font color="#ff9800">tuff</font>: BlockType</li>
<li><font color="#ff9800">turtleEgg</font>: BlockType</li>
<li><font color="#ff9800">twistingVines</font>: BlockType</li>
<li><font color="#ff9800">underwaterTorch</font>: BlockType</li>
<li><font color="#ff9800">undyedShulkerBox</font>: BlockType</li>
<li><font color="#ff9800">unknown</font>: BlockType</li>
<li><font color="#ff9800">unlitRedstoneTorch</font>: BlockType</li>
<li><font color="#ff9800">unpoweredComparator</font>: BlockType</li>
<li><font color="#ff9800">unpoweredRepeater</font>: BlockType</li>
<li><font color="#ff9800">vine</font>: BlockType</li>
<li><font color="#ff9800">wallBanner</font>: BlockType</li>
<li><font color="#ff9800">wallSign</font>: BlockType</li>
<li><font color="#ff9800">warpedButton</font>: BlockType</li>
<li><font color="#ff9800">warpedDoor</font>: BlockType</li>
<li><font color="#ff9800">warpedDoubleSlab</font>: BlockType</li>
<li><font color="#ff9800">warpedFence</font>: BlockType</li>
<li><font color="#ff9800">warpedFenceGate</font>: BlockType</li>
<li><font color="#ff9800">warpedFungus</font>: BlockType</li>
<li><font color="#ff9800">warpedHyphae</font>: BlockType</li>
<li><font color="#ff9800">warpedNylium</font>: BlockType</li>
<li><font color="#ff9800">warpedPlanks</font>: BlockType</li>
<li><font color="#ff9800">warpedPressurePlate</font>: BlockType</li>
<li><font color="#ff9800">warpedRoots</font>: BlockType</li>
<li><font color="#ff9800">warpedSlab</font>: BlockType</li>
<li><font color="#ff9800">warpedStairs</font>: BlockType</li>
<li><font color="#ff9800">warpedStandingSign</font>: BlockType</li>
<li><font color="#ff9800">warpedStem</font>: BlockType</li>
<li><font color="#ff9800">warpedTrapdoor</font>: BlockType</li>
<li><font color="#ff9800">warpedWallSign</font>: BlockType</li>
<li><font color="#ff9800">warpedWartBlock</font>: BlockType</li>
<li><font color="#ff9800">water</font>: BlockType</li>
<li><font color="#ff9800">waterlily</font>: BlockType</li>
<li><font color="#ff9800">waxedCopper</font>: BlockType</li>
<li><font color="#ff9800">waxedCutCopper</font>: BlockType</li>
<li><font color="#ff9800">waxedCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">waxedCutCopperStairs</font>: BlockType</li>
<li><font color="#ff9800">waxedDoubleCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">waxedExposedCopper</font>: BlockType</li>
<li><font color="#ff9800">waxedExposedCutCopper</font>: BlockType</li>
<li><font color="#ff9800">waxedExposedCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">waxedExposedCutCopperStairs</font>: BlockType</li>
<li><font color="#ff9800">waxedExposedDoubleCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">waxedOxidizedCopper</font>: BlockType</li>
<li><font color="#ff9800">waxedOxidizedCutCopper</font>: BlockType</li>
<li><font color="#ff9800">waxedOxidizedCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">waxedOxidizedCutCopperStairs</font>: BlockType</li>
<li><font color="#ff9800">waxedOxidizedDoubleCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">waxedWeatheredCopper</font>: BlockType</li>
<li><font color="#ff9800">waxedWeatheredCutCopper</font>: BlockType</li>
<li><font color="#ff9800">waxedWeatheredCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">waxedWeatheredCutCopperStairs</font>: BlockType</li>
<li><font color="#ff9800">waxedWeatheredDoubleCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">weatheredCopper</font>: BlockType</li>
<li><font color="#ff9800">weatheredCutCopper</font>: BlockType</li>
<li><font color="#ff9800">weatheredCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">weatheredCutCopperStairs</font>: BlockType</li>
<li><font color="#ff9800">weatheredDoubleCutCopperSlab</font>: BlockType</li>
<li><font color="#ff9800">web</font>: BlockType</li>
<li><font color="#ff9800">weepingVines</font>: BlockType</li>
<li><font color="#ff9800">wheat</font>: BlockType</li>
<li><font color="#ff9800">whiteCandle</font>: BlockType</li>
<li><font color="#ff9800">whiteCandleCake</font>: BlockType</li>
<li><font color="#ff9800">whiteGlazedTerracotta</font>: BlockType</li>
<li><font color="#ff9800">witherRose</font>: BlockType</li>
<li><font color="#ff9800">wood</font>: BlockType</li>
<li><font color="#ff9800">woodenButton</font>: BlockType</li>
<li><font color="#ff9800">woodenDoor</font>: BlockType</li>
<li><font color="#ff9800">woodenPressurePlate</font>: BlockType</li>
<li><font color="#ff9800">woodenSlab</font>: BlockType</li>
<li><font color="#ff9800">wool</font>: BlockType</li>
<li><font color="#ff9800">yellowCandle</font>: BlockType</li>
<li><font color="#ff9800">yellowCandleCake</font>: BlockType</li>
<li><font color="#ff9800">yellowFlower</font>: BlockType</li>
<li><font color="#ff9800">yellowGlazedTerracotta</font>: BlockType</li>
<li><font color="#ffc107">get</font>(typeName: string): BlockType</li>
<li><font color="#ffc107">getAllBlockTypes</font>(): Array<BlockType></li>
</ul>
</details>

<details>
<summary>BoolBlockProperty</summary>
<ul> 
<li><font color="#ff9800">name</font>: string</li>
<li><font color="#ff9800">validValues</font>: Array<boolean></li>
<li><font color="#ff9800">value</font>: boolean</li>
</ul>
</details>

<details>
<summary>Breathable</summary>
<ul> 
<li><font color="#ff9800">breatheBlocks</font>: Array<BlockPermutation></li>
<li><font color="#ff9800">breathesAir</font>: boolean</li>
<li><font color="#ff9800">breathesLava</font>: boolean</li>
<li><font color="#ff9800">breathesSolids</font>: boolean</li>
<li><font color="#ff9800">breathesWater</font>: boolean</li>
<li><font color="#ff9800">generatesBubbles</font>: boolean</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">inhaleTime</font>: number</li>
<li><font color="#ff9800">nonBreatheBlocks</font>: Array<BlockPermutation></li>
<li><font color="#ff9800">suffocateTime</font>: number</li>
<li><font color="#ff9800">totalSupply</font>: number</li>
<li><font color="#ffc107">setAirSupply</font>(value: number): void</li>
</ul>
</details>

<details>
<summary>ChangeWeatherEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: WeatherChangedEvent) => void): (arg: WeatherChangedEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: WeatherChangedEvent) => void): void</li>
</ul>
</details>

<details>
<summary>ChatEvent</summary>
<ul> 
<li><font color="#ff9800">message</font>: string</li>
<li><font color="#ff9800">sender</font>: Player</li>
<li><font color="#ff9800">sendToTargets</font>: boolean</li>
<li><font color="#ff9800">targets</font>: Array<Player></li>
</ul>
</details>

<details>
<summary>ChatEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: ChatEvent) => void): void</li>
</ul>
</details>

<details>
<summary>Color</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">value</font>: number</li>
</ul>
</details>

<details>
<summary>Commands</summary>
<ul> 
<li><font color="#ffc107">run</font>(commandString: string): any</li>
</ul>
</details>

<details>
<summary>Container</summary>
<ul> 
<li><font color="#ff9800">emptySlotsCount</font>: number</li>
<li><font color="#ff9800">size</font>: number</li>
<li><font color="#ffc107">addItem</font>(itemStack: ItemStack): void</li>
<li><font color="#ffc107">getItem</font>(slot: number): ItemStack</li>
<li><font color="#ffc107">setItem</font>(slot: number, itemStack: ItemStack): void</li>
<li><font color="#ffc107">swapItems</font>(slot: number, otherSlot: number, otherContainer: Container): boolean</li>
<li><font color="#ffc107">transferItem</font>(fromSlot: number, toSlot: number, toContainer: Container): boolean</li>
</ul>
</details>

<details>
<summary>Dimension</summary>
<ul> 
<li><font color="#ffc107">createExplosion</font>(location: Location, radius: number, explosionOptions: ExplosionOptions): void</li>
<li><font color="#ffc107">getBlock</font>(location: BlockLocation): Block</li>
<li><font color="#ffc107">getEntitiesAtBlockLocation</font>(location: BlockLocation): Array<Entity></li>
<li><font color="#ffc107">isEmpty</font>(location: BlockLocation): boolean</li>
<li><font color="#ffc107">spawnEntity</font>(identifier: string, location: BlockLocation): Entity</li>
</ul>
</details>

<details>
<summary>Direction</summary>
<ul> 
<li><font color="#ff9800">down</font>: number</li>
<li><font color="#ff9800">east</font>: number</li>
<li><font color="#ff9800">north</font>: number</li>
<li><font color="#ff9800">south</font>: number</li>
<li><font color="#ff9800">up</font>: number</li>
<li><font color="#ff9800">west</font>: number</li>
</ul>
</details>

<details>
<summary>Effect</summary>
<ul> 
<li><font color="#ff9800">amplifier</font>: number</li>
<li><font color="#ff9800">displayName</font>: string</li>
<li><font color="#ff9800">duration</font>: number</li>
</ul>
</details>

<details>
<summary>Effects</summary>
<ul> 
<li><font color="#ff9800">absorption</font>: EffectType</li>
<li><font color="#ff9800">badOmen</font>: EffectType</li>
<li><font color="#ff9800">blindness</font>: EffectType</li>
<li><font color="#ff9800">conduitPower</font>: EffectType</li>
<li><font color="#ff9800">empty</font>: EffectType</li>
<li><font color="#ff9800">fatalPoison</font>: EffectType</li>
<li><font color="#ff9800">fireResistance</font>: EffectType</li>
<li><font color="#ff9800">haste</font>: EffectType</li>
<li><font color="#ff9800">healthBoost</font>: EffectType</li>
<li><font color="#ff9800">hunger</font>: EffectType</li>
<li><font color="#ff9800">instantDamage</font>: EffectType</li>
<li><font color="#ff9800">instantHealth</font>: EffectType</li>
<li><font color="#ff9800">invisibility</font>: EffectType</li>
<li><font color="#ff9800">jumpBoost</font>: EffectType</li>
<li><font color="#ff9800">levitation</font>: EffectType</li>
<li><font color="#ff9800">miningFatigue</font>: EffectType</li>
<li><font color="#ff9800">nausea</font>: EffectType</li>
<li><font color="#ff9800">nightVision</font>: EffectType</li>
<li><font color="#ff9800">poison</font>: EffectType</li>
<li><font color="#ff9800">regeneration</font>: EffectType</li>
<li><font color="#ff9800">resistance</font>: EffectType</li>
<li><font color="#ff9800">saturation</font>: EffectType</li>
<li><font color="#ff9800">slowFalling</font>: EffectType</li>
<li><font color="#ff9800">slowness</font>: EffectType</li>
<li><font color="#ff9800">speed</font>: EffectType</li>
<li><font color="#ff9800">strength</font>: EffectType</li>
<li><font color="#ff9800">villageHero</font>: EffectType</li>
<li><font color="#ff9800">waterBreathing</font>: EffectType</li>
<li><font color="#ff9800">weakness</font>: EffectType</li>
<li><font color="#ff9800">wither</font>: EffectType</li>
</ul>
</details>

<details>
<summary>EffectType</summary>
<ul> 
<li><font color="#ffc107">getName</font>(): string</li>
</ul>
</details>

<details>
<summary>EmptySignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: () => void): () => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: () => void): void</li>
</ul>
</details>

<details>
<summary>Entity</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">isSneaking</font>: boolean</li>
<li><font color="#ff9800">location</font>: Location</li>
<li><font color="#ff9800">nameTag</font>: string</li>
<li><font color="#ff9800">velocity</font>: Location</li>
<li><font color="#ffc107">addEffect</font>(effectType: EffectType, duration: number, amplifier: number): void</li>
<li><font color="#ffc107">getComponent</font>(componentId: string): any</li>
<li><font color="#ffc107">getComponents</font>(): Array<any></li>
<li><font color="#ffc107">getEffect</font>(effectType: EffectType): Effect</li>
<li><font color="#ffc107">hasComponent</font>(componentId: string): boolean</li>
<li><font color="#ffc107">kill</font>(): void</li>
<li><font color="#ffc107">triggerEvent</font>(eventName: string): void</li>
</ul>
</details>

<details>
<summary>EntityDefinitionFeedItem</summary>
<ul> 
<li><font color="#ff9800">growth</font>: number</li>
<li><font color="#ff9800">item</font>: string</li>
</ul>
</details>

<details>
<summary>EntityEvent</summary>
<ul> 
<li><font color="#ff9800">entity</font>: Entity</li>
</ul>
</details>

<details>
<summary>EntityEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: EntityEvent) => void): (arg: EntityEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: EntityEvent) => void): void</li>
</ul>
</details>

<details>
<summary>Events</summary>
<ul> 
<li><font color="#ff9800">activatePiston</font>: ActivatePistonEventSignal</li>
<li><font color="#ff9800">addEffect</font>: AddEffectEventSignal</li>
<li><font color="#ff9800">beforeActivatePiston</font>: BeforeActivatePistonEventSignal</li>
<li><font color="#ff9800">beforeChat</font>: BeforeChatEventSignal</li>
<li><font color="#ff9800">beforeExplosion</font>: BeforeExplosionEventSignal</li>
<li><font color="#ff9800">changeWeather</font>: ChangeWeatherEventSignal</li>
<li><font color="#ff9800">chat</font>: ChatEventSignal</li>
<li><font color="#ff9800">createEntity</font>: EntityEventSignal</li>
<li><font color="#ff9800">explodeBlock</font>: ExplodeBlockSignal</li>
<li><font color="#ff9800">explosion</font>: ExplosionEventSignal</li>
<li><font color="#ff9800">tick</font>: EmptySignal</li>
</ul>
</details>

<details>
<summary>ExplodeBlockEvent</summary>
<ul> 
<li><font color="#ff9800">destroyedBlock</font>: Block</li>
<li><font color="#ff9800">source</font>: Entity</li>
</ul>
</details>

<details>
<summary>ExplodeBlockSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: ExplodeBlockEvent) => void): (arg: ExplodeBlockEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: ExplodeBlockEvent) => void): void</li>
</ul>
</details>

<details>
<summary>ExplosionEvent</summary>
<ul> 
<li><font color="#ff9800">dimension</font>: Dimension</li>
<li><font color="#ff9800">impactedBlocks</font>: Array<BlockLocation></li>
<li><font color="#ff9800">source</font>: Entity</li>
</ul>
</details>

<details>
<summary>ExplosionEventSignal</summary>
<ul> 
<li><font color="#ffc107">subscribe</font>(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void</li>
<li><font color="#ffc107">unsubscribe</font>(callback: (arg: ExplosionEvent) => void): void</li>
</ul>
</details>

<details>
<summary>ExplosionOptions</summary>
<ul> 
<li><font color="#ff9800">allowUnderwater</font>: boolean</li>
<li><font color="#ff9800">breaksBlocks</font>: boolean</li>
<li><font color="#ff9800">causesFire</font>: boolean</li>
<li><font color="#ff9800">source</font>: Entity</li>
	constructor()
</ul>
</details>

<details>
<summary>FeedItem</summary>
<ul> 
<li><font color="#ff9800">effects</font>: Array<FeedItemEffect></li>
<li><font color="#ff9800">healAmount</font>: number</li>
<li><font color="#ff9800">item</font>: string</li>
</ul>
</details>

<details>
<summary>FeedItemEffect</summary>
<ul> 
<li><font color="#ff9800">amplifier</font>: number</li>
<li><font color="#ff9800">chance</font>: number</li>
<li><font color="#ff9800">duration</font>: number</li>
<li><font color="#ff9800">name</font>: string</li>
</ul>
</details>

<details>
<summary>FilterGroup</summary>
<ul> 
</ul>
</details>

<details>
<summary>FlyingSpeed</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">value</font>: number</li>
</ul>
</details>

<details>
<summary>Healable</summary>
<ul> 
<li><font color="#ff9800">filters</font>: FilterGroup</li>
<li><font color="#ff9800">forceUse</font>: boolean</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">items</font>: Array<FeedItem></li>
</ul>
</details>

<details>
<summary>Health</summary>
<ul> 
<li><font color="#ff9800">current</font>: number</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">value</font>: number</li>
<li><font color="#ffc107">resetToDefaultValue</font>(): void</li>
<li><font color="#ffc107">resetToMaxValue</font>(): void</li>
<li><font color="#ffc107">resetToMinValue</font>(): void</li>
<li><font color="#ffc107">setCurrent</font>(): void</li>
</ul>
</details>

<details>
<summary>IntBlockProperty</summary>
<ul> 
<li><font color="#ff9800">name</font>: string</li>
<li><font color="#ff9800">validValues</font>: Array<number></li>
<li><font color="#ff9800">value</font>: number</li>
</ul>
</details>

<details>
<summary>Inventory</summary>
<ul> 
<li><font color="#ff9800">additionalSlotsPerStrength</font>: number</li>
<li><font color="#ff9800">canBeSiphonedFrom</font>: boolean</li>
<li><font color="#ff9800">container</font>: InventoryComponentContainer</li>
<li><font color="#ff9800">containerType</font>: string</li>
<li><font color="#ff9800">inventorySize</font>: number</li>
<li><font color="#ff9800">private</font>: boolean</li>
<li><font color="#ff9800">restrictToOwner</font>: boolean</li>
</ul>
</details>

<details>
<summary>InventoryComponentContainer</summary>
<ul> 
<li><font color="#ff9800">emptySlotsCount</font>: number</li>
<li><font color="#ff9800">size</font>: number</li>
<li><font color="#ffc107">addItem</font>(itemStack: ItemStack): void</li>
<li><font color="#ffc107">getItem</font>(slot: number): ItemStack</li>
<li><font color="#ffc107">setItem</font>(slot: number, itemStack: ItemStack): void</li>
<li><font color="#ffc107">swapItems</font>(slot: number, otherSlot: number, otherContainer: Container): boolean</li>
<li><font color="#ffc107">transferItem</font>(fromSlot: number, toSlot: number, toContainer: Container): boolean</li>
</ul>
</details>

<details>
<summary>Items</summary>
<ul> 
<li><font color="#ff9800">acaciaBoat</font>: ItemType</li>
<li><font color="#ff9800">acaciaButton</font>: ItemType</li>
<li><font color="#ff9800">acaciaDoor</font>: ItemType</li>
<li><font color="#ff9800">acaciaFenceGate</font>: ItemType</li>
<li><font color="#ff9800">acaciaPressurePlate</font>: ItemType</li>
<li><font color="#ff9800">acaciaSign</font>: ItemType</li>
<li><font color="#ff9800">acaciaStairs</font>: ItemType</li>
<li><font color="#ff9800">acaciaStandingSign</font>: ItemType</li>
<li><font color="#ff9800">acaciaTrapdoor</font>: ItemType</li>
<li><font color="#ff9800">acaciaWallSign</font>: ItemType</li>
<li><font color="#ff9800">activatorRail</font>: ItemType</li>
<li><font color="#ff9800">agentSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">air</font>: ItemType</li>
<li><font color="#ff9800">allow</font>: ItemType</li>
<li><font color="#ff9800">amethystBlock</font>: ItemType</li>
<li><font color="#ff9800">amethystCluster</font>: ItemType</li>
<li><font color="#ff9800">amethystShard</font>: ItemType</li>
<li><font color="#ff9800">ancientDebris</font>: ItemType</li>
<li><font color="#ff9800">andesiteStairs</font>: ItemType</li>
<li><font color="#ff9800">anvil</font>: ItemType</li>
<li><font color="#ff9800">apple</font>: ItemType</li>
<li><font color="#ff9800">armorStand</font>: ItemType</li>
<li><font color="#ff9800">arrow</font>: ItemType</li>
<li><font color="#ff9800">axolotlBucket</font>: ItemType</li>
<li><font color="#ff9800">axolotlSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">azalea</font>: ItemType</li>
<li><font color="#ff9800">azaleaLeaves</font>: ItemType</li>
<li><font color="#ff9800">azaleaLeavesFlowered</font>: ItemType</li>
<li><font color="#ff9800">bakedPotato</font>: ItemType</li>
<li><font color="#ff9800">balloon</font>: ItemType</li>
<li><font color="#ff9800">bamboo</font>: ItemType</li>
<li><font color="#ff9800">bambooSapling</font>: ItemType</li>
<li><font color="#ff9800">banner</font>: ItemType</li>
<li><font color="#ff9800">bannerPattern</font>: ItemType</li>
<li><font color="#ff9800">barrel</font>: ItemType</li>
<li><font color="#ff9800">barrier</font>: ItemType</li>
<li><font color="#ff9800">basalt</font>: ItemType</li>
<li><font color="#ff9800">batSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">beacon</font>: ItemType</li>
<li><font color="#ff9800">bed</font>: ItemType</li>
<li><font color="#ff9800">bedrock</font>: ItemType</li>
<li><font color="#ff9800">beef</font>: ItemType</li>
<li><font color="#ff9800">beehive</font>: ItemType</li>
<li><font color="#ff9800">beeNest</font>: ItemType</li>
<li><font color="#ff9800">beeSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">beetroot</font>: ItemType</li>
<li><font color="#ff9800">beetrootSeeds</font>: ItemType</li>
<li><font color="#ff9800">beetrootSoup</font>: ItemType</li>
<li><font color="#ff9800">bell</font>: ItemType</li>
<li><font color="#ff9800">bigDripleaf</font>: ItemType</li>
<li><font color="#ff9800">birchBoat</font>: ItemType</li>
<li><font color="#ff9800">birchButton</font>: ItemType</li>
<li><font color="#ff9800">birchDoor</font>: ItemType</li>
<li><font color="#ff9800">birchFenceGate</font>: ItemType</li>
<li><font color="#ff9800">birchPressurePlate</font>: ItemType</li>
<li><font color="#ff9800">birchSign</font>: ItemType</li>
<li><font color="#ff9800">birchStairs</font>: ItemType</li>
<li><font color="#ff9800">birchStandingSign</font>: ItemType</li>
<li><font color="#ff9800">birchTrapdoor</font>: ItemType</li>
<li><font color="#ff9800">birchWallSign</font>: ItemType</li>
<li><font color="#ff9800">blackCandle</font>: ItemType</li>
<li><font color="#ff9800">blackCandleCake</font>: ItemType</li>
<li><font color="#ff9800">blackDye</font>: ItemType</li>
<li><font color="#ff9800">blackGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">blackstone</font>: ItemType</li>
<li><font color="#ff9800">blackstoneDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">blackstoneSlab</font>: ItemType</li>
<li><font color="#ff9800">blackstoneStairs</font>: ItemType</li>
<li><font color="#ff9800">blackstoneWall</font>: ItemType</li>
<li><font color="#ff9800">blastFurnace</font>: ItemType</li>
<li><font color="#ff9800">blazePowder</font>: ItemType</li>
<li><font color="#ff9800">blazeRod</font>: ItemType</li>
<li><font color="#ff9800">blazeSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">bleach</font>: ItemType</li>
<li><font color="#ff9800">blueCandle</font>: ItemType</li>
<li><font color="#ff9800">blueCandleCake</font>: ItemType</li>
<li><font color="#ff9800">blueDye</font>: ItemType</li>
<li><font color="#ff9800">blueGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">blueIce</font>: ItemType</li>
<li><font color="#ff9800">boat</font>: ItemType</li>
<li><font color="#ff9800">bone</font>: ItemType</li>
<li><font color="#ff9800">boneBlock</font>: ItemType</li>
<li><font color="#ff9800">boneMeal</font>: ItemType</li>
<li><font color="#ff9800">book</font>: ItemType</li>
<li><font color="#ff9800">bookshelf</font>: ItemType</li>
<li><font color="#ff9800">borderBlock</font>: ItemType</li>
<li><font color="#ff9800">bordureIndentedBannerPattern</font>: ItemType</li>
<li><font color="#ff9800">bow</font>: ItemType</li>
<li><font color="#ff9800">bowl</font>: ItemType</li>
<li><font color="#ff9800">bread</font>: ItemType</li>
<li><font color="#ff9800">brewingStand</font>: ItemType</li>
<li><font color="#ff9800">brewingstandblock</font>: ItemType</li>
<li><font color="#ff9800">brick</font>: ItemType</li>
<li><font color="#ff9800">brickBlock</font>: ItemType</li>
<li><font color="#ff9800">brickStairs</font>: ItemType</li>
<li><font color="#ff9800">brownCandle</font>: ItemType</li>
<li><font color="#ff9800">brownCandleCake</font>: ItemType</li>
<li><font color="#ff9800">brownDye</font>: ItemType</li>
<li><font color="#ff9800">brownGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">brownMushroom</font>: ItemType</li>
<li><font color="#ff9800">brownMushroomBlock</font>: ItemType</li>
<li><font color="#ff9800">bubbleColumn</font>: ItemType</li>
<li><font color="#ff9800">bucket</font>: ItemType</li>
<li><font color="#ff9800">buddingAmethyst</font>: ItemType</li>
<li><font color="#ff9800">cactus</font>: ItemType</li>
<li><font color="#ff9800">cake</font>: ItemType</li>
<li><font color="#ff9800">calcite</font>: ItemType</li>
<li><font color="#ff9800">camera</font>: ItemType</li>
<li><font color="#ff9800">campfire</font>: ItemType</li>
<li><font color="#ff9800">candle</font>: ItemType</li>
<li><font color="#ff9800">candleCake</font>: ItemType</li>
<li><font color="#ff9800">carpet</font>: ItemType</li>
<li><font color="#ff9800">carrot</font>: ItemType</li>
<li><font color="#ff9800">carrotOnAStick</font>: ItemType</li>
<li><font color="#ff9800">carrots</font>: ItemType</li>
<li><font color="#ff9800">cartographyTable</font>: ItemType</li>
<li><font color="#ff9800">carvedPumpkin</font>: ItemType</li>
<li><font color="#ff9800">catSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">cauldron</font>: ItemType</li>
<li><font color="#ff9800">caveSpiderSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">caveVines</font>: ItemType</li>
<li><font color="#ff9800">caveVinesBodyWithBerries</font>: ItemType</li>
<li><font color="#ff9800">caveVinesHeadWithBerries</font>: ItemType</li>
<li><font color="#ff9800">chain</font>: ItemType</li>
<li><font color="#ff9800">chainCommandBlock</font>: ItemType</li>
<li><font color="#ff9800">chainmailBoots</font>: ItemType</li>
<li><font color="#ff9800">chainmailChestplate</font>: ItemType</li>
<li><font color="#ff9800">chainmailHelmet</font>: ItemType</li>
<li><font color="#ff9800">chainmailLeggings</font>: ItemType</li>
<li><font color="#ff9800">charcoal</font>: ItemType</li>
<li><font color="#ff9800">chemicalHeat</font>: ItemType</li>
<li><font color="#ff9800">chemistryTable</font>: ItemType</li>
<li><font color="#ff9800">chest</font>: ItemType</li>
<li><font color="#ff9800">chestMinecart</font>: ItemType</li>
<li><font color="#ff9800">chicken</font>: ItemType</li>
<li><font color="#ff9800">chickenSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">chiseledDeepslate</font>: ItemType</li>
<li><font color="#ff9800">chiseledNetherBricks</font>: ItemType</li>
<li><font color="#ff9800">chiseledPolishedBlackstone</font>: ItemType</li>
<li><font color="#ff9800">chorusFlower</font>: ItemType</li>
<li><font color="#ff9800">chorusFruit</font>: ItemType</li>
<li><font color="#ff9800">chorusPlant</font>: ItemType</li>
<li><font color="#ff9800">clay</font>: ItemType</li>
<li><font color="#ff9800">clayBall</font>: ItemType</li>
<li><font color="#ff9800">clock</font>: ItemType</li>
<li><font color="#ff9800">coal</font>: ItemType</li>
<li><font color="#ff9800">coalBlock</font>: ItemType</li>
<li><font color="#ff9800">coalOre</font>: ItemType</li>
<li><font color="#ff9800">cobbledDeepslate</font>: ItemType</li>
<li><font color="#ff9800">cobbledDeepslateDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">cobbledDeepslateSlab</font>: ItemType</li>
<li><font color="#ff9800">cobbledDeepslateStairs</font>: ItemType</li>
<li><font color="#ff9800">cobbledDeepslateWall</font>: ItemType</li>
<li><font color="#ff9800">cobblestone</font>: ItemType</li>
<li><font color="#ff9800">cobblestoneWall</font>: ItemType</li>
<li><font color="#ff9800">cocoa</font>: ItemType</li>
<li><font color="#ff9800">cocoaBeans</font>: ItemType</li>
<li><font color="#ff9800">cod</font>: ItemType</li>
<li><font color="#ff9800">codBucket</font>: ItemType</li>
<li><font color="#ff9800">codSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">coloredTorchBp</font>: ItemType</li>
<li><font color="#ff9800">coloredTorchRg</font>: ItemType</li>
<li><font color="#ff9800">commandBlock</font>: ItemType</li>
<li><font color="#ff9800">commandBlockMinecart</font>: ItemType</li>
<li><font color="#ff9800">comparator</font>: ItemType</li>
<li><font color="#ff9800">compass</font>: ItemType</li>
<li><font color="#ff9800">composter</font>: ItemType</li>
<li><font color="#ff9800">compound</font>: ItemType</li>
<li><font color="#ff9800">concrete</font>: ItemType</li>
<li><font color="#ff9800">concretePowder</font>: ItemType</li>
<li><font color="#ff9800">conduit</font>: ItemType</li>
<li><font color="#ff9800">cookedBeef</font>: ItemType</li>
<li><font color="#ff9800">cookedChicken</font>: ItemType</li>
<li><font color="#ff9800">cookedCod</font>: ItemType</li>
<li><font color="#ff9800">cookedMutton</font>: ItemType</li>
<li><font color="#ff9800">cookedPorkchop</font>: ItemType</li>
<li><font color="#ff9800">cookedRabbit</font>: ItemType</li>
<li><font color="#ff9800">cookedSalmon</font>: ItemType</li>
<li><font color="#ff9800">cookie</font>: ItemType</li>
<li><font color="#ff9800">copperBlock</font>: ItemType</li>
<li><font color="#ff9800">copperIngot</font>: ItemType</li>
<li><font color="#ff9800">copperOre</font>: ItemType</li>
<li><font color="#ff9800">coral</font>: ItemType</li>
<li><font color="#ff9800">coralBlock</font>: ItemType</li>
<li><font color="#ff9800">coralFan</font>: ItemType</li>
<li><font color="#ff9800">coralFanDead</font>: ItemType</li>
<li><font color="#ff9800">coralFanHang</font>: ItemType</li>
<li><font color="#ff9800">coralFanHang2</font>: ItemType</li>
<li><font color="#ff9800">coralFanHang3</font>: ItemType</li>
<li><font color="#ff9800">cowSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">crackedDeepslateBricks</font>: ItemType</li>
<li><font color="#ff9800">crackedDeepslateTiles</font>: ItemType</li>
<li><font color="#ff9800">crackedNetherBricks</font>: ItemType</li>
<li><font color="#ff9800">crackedPolishedBlackstoneBricks</font>: ItemType</li>
<li><font color="#ff9800">craftingTable</font>: ItemType</li>
<li><font color="#ff9800">creeperBannerPattern</font>: ItemType</li>
<li><font color="#ff9800">creeperSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">crimsonButton</font>: ItemType</li>
<li><font color="#ff9800">crimsonDoor</font>: ItemType</li>
<li><font color="#ff9800">crimsonDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">crimsonFence</font>: ItemType</li>
<li><font color="#ff9800">crimsonFenceGate</font>: ItemType</li>
<li><font color="#ff9800">crimsonFungus</font>: ItemType</li>
<li><font color="#ff9800">crimsonHyphae</font>: ItemType</li>
<li><font color="#ff9800">crimsonNylium</font>: ItemType</li>
<li><font color="#ff9800">crimsonPlanks</font>: ItemType</li>
<li><font color="#ff9800">crimsonPressurePlate</font>: ItemType</li>
<li><font color="#ff9800">crimsonRoots</font>: ItemType</li>
<li><font color="#ff9800">crimsonSign</font>: ItemType</li>
<li><font color="#ff9800">crimsonSlab</font>: ItemType</li>
<li><font color="#ff9800">crimsonStairs</font>: ItemType</li>
<li><font color="#ff9800">crimsonStandingSign</font>: ItemType</li>
<li><font color="#ff9800">crimsonStem</font>: ItemType</li>
<li><font color="#ff9800">crimsonTrapdoor</font>: ItemType</li>
<li><font color="#ff9800">crimsonWallSign</font>: ItemType</li>
<li><font color="#ff9800">crossbow</font>: ItemType</li>
<li><font color="#ff9800">cryingObsidian</font>: ItemType</li>
<li><font color="#ff9800">cutCopper</font>: ItemType</li>
<li><font color="#ff9800">cutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">cutCopperStairs</font>: ItemType</li>
<li><font color="#ff9800">cyanCandle</font>: ItemType</li>
<li><font color="#ff9800">cyanCandleCake</font>: ItemType</li>
<li><font color="#ff9800">cyanDye</font>: ItemType</li>
<li><font color="#ff9800">cyanGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">darkOakBoat</font>: ItemType</li>
<li><font color="#ff9800">darkOakButton</font>: ItemType</li>
<li><font color="#ff9800">darkOakDoor</font>: ItemType</li>
<li><font color="#ff9800">darkOakFenceGate</font>: ItemType</li>
<li><font color="#ff9800">darkOakPressurePlate</font>: ItemType</li>
<li><font color="#ff9800">darkOakSign</font>: ItemType</li>
<li><font color="#ff9800">darkOakStairs</font>: ItemType</li>
<li><font color="#ff9800">darkoakStandingSign</font>: ItemType</li>
<li><font color="#ff9800">darkOakTrapdoor</font>: ItemType</li>
<li><font color="#ff9800">darkoakWallSign</font>: ItemType</li>
<li><font color="#ff9800">darkPrismarineStairs</font>: ItemType</li>
<li><font color="#ff9800">daylightDetector</font>: ItemType</li>
<li><font color="#ff9800">daylightDetectorInverted</font>: ItemType</li>
<li><font color="#ff9800">deadbush</font>: ItemType</li>
<li><font color="#ff9800">debugStick</font>: ItemType</li>
<li><font color="#ff9800">deepslate</font>: ItemType</li>
<li><font color="#ff9800">deepslateBrickDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">deepslateBricks</font>: ItemType</li>
<li><font color="#ff9800">deepslateBrickSlab</font>: ItemType</li>
<li><font color="#ff9800">deepslateBrickStairs</font>: ItemType</li>
<li><font color="#ff9800">deepslateBrickWall</font>: ItemType</li>
<li><font color="#ff9800">deepslateCoalOre</font>: ItemType</li>
<li><font color="#ff9800">deepslateCopperOre</font>: ItemType</li>
<li><font color="#ff9800">deepslateDiamondOre</font>: ItemType</li>
<li><font color="#ff9800">deepslateEmeraldOre</font>: ItemType</li>
<li><font color="#ff9800">deepslateGoldOre</font>: ItemType</li>
<li><font color="#ff9800">deepslateIronOre</font>: ItemType</li>
<li><font color="#ff9800">deepslateLapisOre</font>: ItemType</li>
<li><font color="#ff9800">deepslateRedstoneOre</font>: ItemType</li>
<li><font color="#ff9800">deepslateTileDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">deepslateTiles</font>: ItemType</li>
<li><font color="#ff9800">deepslateTileSlab</font>: ItemType</li>
<li><font color="#ff9800">deepslateTileStairs</font>: ItemType</li>
<li><font color="#ff9800">deepslateTileWall</font>: ItemType</li>
<li><font color="#ff9800">deny</font>: ItemType</li>
<li><font color="#ff9800">detectorRail</font>: ItemType</li>
<li><font color="#ff9800">diamond</font>: ItemType</li>
<li><font color="#ff9800">diamondAxe</font>: ItemType</li>
<li><font color="#ff9800">diamondBlock</font>: ItemType</li>
<li><font color="#ff9800">diamondBoots</font>: ItemType</li>
<li><font color="#ff9800">diamondChestplate</font>: ItemType</li>
<li><font color="#ff9800">diamondHelmet</font>: ItemType</li>
<li><font color="#ff9800">diamondHoe</font>: ItemType</li>
<li><font color="#ff9800">diamondHorseArmor</font>: ItemType</li>
<li><font color="#ff9800">diamondLeggings</font>: ItemType</li>
<li><font color="#ff9800">diamondOre</font>: ItemType</li>
<li><font color="#ff9800">diamondPickaxe</font>: ItemType</li>
<li><font color="#ff9800">diamondShovel</font>: ItemType</li>
<li><font color="#ff9800">diamondSword</font>: ItemType</li>
<li><font color="#ff9800">dioriteStairs</font>: ItemType</li>
<li><font color="#ff9800">dirt</font>: ItemType</li>
<li><font color="#ff9800">dirtWithRoots</font>: ItemType</li>
<li><font color="#ff9800">dispenser</font>: ItemType</li>
<li><font color="#ff9800">dolphinSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">donkeySpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">doubleCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">doublePlant</font>: ItemType</li>
<li><font color="#ff9800">doubleStoneSlab</font>: ItemType</li>
<li><font color="#ff9800">doubleStoneSlab2</font>: ItemType</li>
<li><font color="#ff9800">doubleStoneSlab3</font>: ItemType</li>
<li><font color="#ff9800">doubleStoneSlab4</font>: ItemType</li>
<li><font color="#ff9800">doubleWoodenSlab</font>: ItemType</li>
<li><font color="#ff9800">dragonBreath</font>: ItemType</li>
<li><font color="#ff9800">dragonEgg</font>: ItemType</li>
<li><font color="#ff9800">driedKelp</font>: ItemType</li>
<li><font color="#ff9800">driedKelpBlock</font>: ItemType</li>
<li><font color="#ff9800">dripstoneBlock</font>: ItemType</li>
<li><font color="#ff9800">dropper</font>: ItemType</li>
<li><font color="#ff9800">drownedSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">dye</font>: ItemType</li>
<li><font color="#ff9800">egg</font>: ItemType</li>
<li><font color="#ff9800">elderGuardianSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">element0</font>: ItemType</li>
<li><font color="#ff9800">element1</font>: ItemType</li>
<li><font color="#ff9800">element10</font>: ItemType</li>
<li><font color="#ff9800">element100</font>: ItemType</li>
<li><font color="#ff9800">element101</font>: ItemType</li>
<li><font color="#ff9800">element102</font>: ItemType</li>
<li><font color="#ff9800">element103</font>: ItemType</li>
<li><font color="#ff9800">element104</font>: ItemType</li>
<li><font color="#ff9800">element105</font>: ItemType</li>
<li><font color="#ff9800">element106</font>: ItemType</li>
<li><font color="#ff9800">element107</font>: ItemType</li>
<li><font color="#ff9800">element108</font>: ItemType</li>
<li><font color="#ff9800">element109</font>: ItemType</li>
<li><font color="#ff9800">element11</font>: ItemType</li>
<li><font color="#ff9800">element110</font>: ItemType</li>
<li><font color="#ff9800">element111</font>: ItemType</li>
<li><font color="#ff9800">element112</font>: ItemType</li>
<li><font color="#ff9800">element113</font>: ItemType</li>
<li><font color="#ff9800">element114</font>: ItemType</li>
<li><font color="#ff9800">element115</font>: ItemType</li>
<li><font color="#ff9800">element116</font>: ItemType</li>
<li><font color="#ff9800">element117</font>: ItemType</li>
<li><font color="#ff9800">element118</font>: ItemType</li>
<li><font color="#ff9800">element12</font>: ItemType</li>
<li><font color="#ff9800">element13</font>: ItemType</li>
<li><font color="#ff9800">element14</font>: ItemType</li>
<li><font color="#ff9800">element15</font>: ItemType</li>
<li><font color="#ff9800">element16</font>: ItemType</li>
<li><font color="#ff9800">element17</font>: ItemType</li>
<li><font color="#ff9800">element18</font>: ItemType</li>
<li><font color="#ff9800">element19</font>: ItemType</li>
<li><font color="#ff9800">element2</font>: ItemType</li>
<li><font color="#ff9800">element20</font>: ItemType</li>
<li><font color="#ff9800">element21</font>: ItemType</li>
<li><font color="#ff9800">element22</font>: ItemType</li>
<li><font color="#ff9800">element23</font>: ItemType</li>
<li><font color="#ff9800">element24</font>: ItemType</li>
<li><font color="#ff9800">element25</font>: ItemType</li>
<li><font color="#ff9800">element26</font>: ItemType</li>
<li><font color="#ff9800">element27</font>: ItemType</li>
<li><font color="#ff9800">element28</font>: ItemType</li>
<li><font color="#ff9800">element29</font>: ItemType</li>
<li><font color="#ff9800">element3</font>: ItemType</li>
<li><font color="#ff9800">element30</font>: ItemType</li>
<li><font color="#ff9800">element31</font>: ItemType</li>
<li><font color="#ff9800">element32</font>: ItemType</li>
<li><font color="#ff9800">element33</font>: ItemType</li>
<li><font color="#ff9800">element34</font>: ItemType</li>
<li><font color="#ff9800">element35</font>: ItemType</li>
<li><font color="#ff9800">element36</font>: ItemType</li>
<li><font color="#ff9800">element37</font>: ItemType</li>
<li><font color="#ff9800">element38</font>: ItemType</li>
<li><font color="#ff9800">element39</font>: ItemType</li>
<li><font color="#ff9800">element4</font>: ItemType</li>
<li><font color="#ff9800">element40</font>: ItemType</li>
<li><font color="#ff9800">element41</font>: ItemType</li>
<li><font color="#ff9800">element42</font>: ItemType</li>
<li><font color="#ff9800">element43</font>: ItemType</li>
<li><font color="#ff9800">element44</font>: ItemType</li>
<li><font color="#ff9800">element45</font>: ItemType</li>
<li><font color="#ff9800">element46</font>: ItemType</li>
<li><font color="#ff9800">element47</font>: ItemType</li>
<li><font color="#ff9800">element48</font>: ItemType</li>
<li><font color="#ff9800">element49</font>: ItemType</li>
<li><font color="#ff9800">element5</font>: ItemType</li>
<li><font color="#ff9800">element50</font>: ItemType</li>
<li><font color="#ff9800">element51</font>: ItemType</li>
<li><font color="#ff9800">element52</font>: ItemType</li>
<li><font color="#ff9800">element53</font>: ItemType</li>
<li><font color="#ff9800">element54</font>: ItemType</li>
<li><font color="#ff9800">element55</font>: ItemType</li>
<li><font color="#ff9800">element56</font>: ItemType</li>
<li><font color="#ff9800">element57</font>: ItemType</li>
<li><font color="#ff9800">element58</font>: ItemType</li>
<li><font color="#ff9800">element59</font>: ItemType</li>
<li><font color="#ff9800">element6</font>: ItemType</li>
<li><font color="#ff9800">element60</font>: ItemType</li>
<li><font color="#ff9800">element61</font>: ItemType</li>
<li><font color="#ff9800">element62</font>: ItemType</li>
<li><font color="#ff9800">element63</font>: ItemType</li>
<li><font color="#ff9800">element64</font>: ItemType</li>
<li><font color="#ff9800">element65</font>: ItemType</li>
<li><font color="#ff9800">element66</font>: ItemType</li>
<li><font color="#ff9800">element67</font>: ItemType</li>
<li><font color="#ff9800">element68</font>: ItemType</li>
<li><font color="#ff9800">element69</font>: ItemType</li>
<li><font color="#ff9800">element7</font>: ItemType</li>
<li><font color="#ff9800">element70</font>: ItemType</li>
<li><font color="#ff9800">element71</font>: ItemType</li>
<li><font color="#ff9800">element72</font>: ItemType</li>
<li><font color="#ff9800">element73</font>: ItemType</li>
<li><font color="#ff9800">element74</font>: ItemType</li>
<li><font color="#ff9800">element75</font>: ItemType</li>
<li><font color="#ff9800">element76</font>: ItemType</li>
<li><font color="#ff9800">element77</font>: ItemType</li>
<li><font color="#ff9800">element78</font>: ItemType</li>
<li><font color="#ff9800">element79</font>: ItemType</li>
<li><font color="#ff9800">element8</font>: ItemType</li>
<li><font color="#ff9800">element80</font>: ItemType</li>
<li><font color="#ff9800">element81</font>: ItemType</li>
<li><font color="#ff9800">element82</font>: ItemType</li>
<li><font color="#ff9800">element83</font>: ItemType</li>
<li><font color="#ff9800">element84</font>: ItemType</li>
<li><font color="#ff9800">element85</font>: ItemType</li>
<li><font color="#ff9800">element86</font>: ItemType</li>
<li><font color="#ff9800">element87</font>: ItemType</li>
<li><font color="#ff9800">element88</font>: ItemType</li>
<li><font color="#ff9800">element89</font>: ItemType</li>
<li><font color="#ff9800">element9</font>: ItemType</li>
<li><font color="#ff9800">element90</font>: ItemType</li>
<li><font color="#ff9800">element91</font>: ItemType</li>
<li><font color="#ff9800">element92</font>: ItemType</li>
<li><font color="#ff9800">element93</font>: ItemType</li>
<li><font color="#ff9800">element94</font>: ItemType</li>
<li><font color="#ff9800">element95</font>: ItemType</li>
<li><font color="#ff9800">element96</font>: ItemType</li>
<li><font color="#ff9800">element97</font>: ItemType</li>
<li><font color="#ff9800">element98</font>: ItemType</li>
<li><font color="#ff9800">element99</font>: ItemType</li>
<li><font color="#ff9800">elytra</font>: ItemType</li>
<li><font color="#ff9800">emerald</font>: ItemType</li>
<li><font color="#ff9800">emeraldBlock</font>: ItemType</li>
<li><font color="#ff9800">emeraldOre</font>: ItemType</li>
<li><font color="#ff9800">emptyMap</font>: ItemType</li>
<li><font color="#ff9800">enchantedBook</font>: ItemType</li>
<li><font color="#ff9800">enchantedGoldenApple</font>: ItemType</li>
<li><font color="#ff9800">enchantingTable</font>: ItemType</li>
<li><font color="#ff9800">endBricks</font>: ItemType</li>
<li><font color="#ff9800">endBrickStairs</font>: ItemType</li>
<li><font color="#ff9800">endCrystal</font>: ItemType</li>
<li><font color="#ff9800">enderChest</font>: ItemType</li>
<li><font color="#ff9800">enderEye</font>: ItemType</li>
<li><font color="#ff9800">endermanSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">endermiteSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">enderPearl</font>: ItemType</li>
<li><font color="#ff9800">endGateway</font>: ItemType</li>
<li><font color="#ff9800">endPortal</font>: ItemType</li>
<li><font color="#ff9800">endPortalFrame</font>: ItemType</li>
<li><font color="#ff9800">endRod</font>: ItemType</li>
<li><font color="#ff9800">endStone</font>: ItemType</li>
<li><font color="#ff9800">evokerSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">experienceBottle</font>: ItemType</li>
<li><font color="#ff9800">exposedCopper</font>: ItemType</li>
<li><font color="#ff9800">exposedCutCopper</font>: ItemType</li>
<li><font color="#ff9800">exposedCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">exposedCutCopperStairs</font>: ItemType</li>
<li><font color="#ff9800">exposedDoubleCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">farmland</font>: ItemType</li>
<li><font color="#ff9800">feather</font>: ItemType</li>
<li><font color="#ff9800">fence</font>: ItemType</li>
<li><font color="#ff9800">fenceGate</font>: ItemType</li>
<li><font color="#ff9800">fermentedSpiderEye</font>: ItemType</li>
<li><font color="#ff9800">fieldMasonedBannerPattern</font>: ItemType</li>
<li><font color="#ff9800">filledMap</font>: ItemType</li>
<li><font color="#ff9800">fire</font>: ItemType</li>
<li><font color="#ff9800">fireCharge</font>: ItemType</li>
<li><font color="#ff9800">fireworkRocket</font>: ItemType</li>
<li><font color="#ff9800">fireworkStar</font>: ItemType</li>
<li><font color="#ff9800">fishingRod</font>: ItemType</li>
<li><font color="#ff9800">fletchingTable</font>: ItemType</li>
<li><font color="#ff9800">flint</font>: ItemType</li>
<li><font color="#ff9800">flintAndSteel</font>: ItemType</li>
<li><font color="#ff9800">flowerBannerPattern</font>: ItemType</li>
<li><font color="#ff9800">floweringAzalea</font>: ItemType</li>
<li><font color="#ff9800">flowerPot</font>: ItemType</li>
<li><font color="#ff9800">flowingLava</font>: ItemType</li>
<li><font color="#ff9800">flowingWater</font>: ItemType</li>
<li><font color="#ff9800">foxSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">frame</font>: ItemType</li>
<li><font color="#ff9800">frostedIce</font>: ItemType</li>
<li><font color="#ff9800">furnace</font>: ItemType</li>
<li><font color="#ff9800">ghastSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">ghastTear</font>: ItemType</li>
<li><font color="#ff9800">gildedBlackstone</font>: ItemType</li>
<li><font color="#ff9800">glass</font>: ItemType</li>
<li><font color="#ff9800">glassBottle</font>: ItemType</li>
<li><font color="#ff9800">glassPane</font>: ItemType</li>
<li><font color="#ff9800">glisteringMelonSlice</font>: ItemType</li>
<li><font color="#ff9800">glowBerries</font>: ItemType</li>
<li><font color="#ff9800">glowFrame</font>: ItemType</li>
<li><font color="#ff9800">glowingobsidian</font>: ItemType</li>
<li><font color="#ff9800">glowInkSac</font>: ItemType</li>
<li><font color="#ff9800">glowLichen</font>: ItemType</li>
<li><font color="#ff9800">glowSquidSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">glowStick</font>: ItemType</li>
<li><font color="#ff9800">glowstone</font>: ItemType</li>
<li><font color="#ff9800">glowstoneDust</font>: ItemType</li>
<li><font color="#ff9800">goatHorn</font>: ItemType</li>
<li><font color="#ff9800">goatSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">goldBlock</font>: ItemType</li>
<li><font color="#ff9800">goldenApple</font>: ItemType</li>
<li><font color="#ff9800">goldenAxe</font>: ItemType</li>
<li><font color="#ff9800">goldenBoots</font>: ItemType</li>
<li><font color="#ff9800">goldenCarrot</font>: ItemType</li>
<li><font color="#ff9800">goldenChestplate</font>: ItemType</li>
<li><font color="#ff9800">goldenHelmet</font>: ItemType</li>
<li><font color="#ff9800">goldenHoe</font>: ItemType</li>
<li><font color="#ff9800">goldenHorseArmor</font>: ItemType</li>
<li><font color="#ff9800">goldenLeggings</font>: ItemType</li>
<li><font color="#ff9800">goldenPickaxe</font>: ItemType</li>
<li><font color="#ff9800">goldenRail</font>: ItemType</li>
<li><font color="#ff9800">goldenShovel</font>: ItemType</li>
<li><font color="#ff9800">goldenSword</font>: ItemType</li>
<li><font color="#ff9800">goldIngot</font>: ItemType</li>
<li><font color="#ff9800">goldNugget</font>: ItemType</li>
<li><font color="#ff9800">goldOre</font>: ItemType</li>
<li><font color="#ff9800">graniteStairs</font>: ItemType</li>
<li><font color="#ff9800">grass</font>: ItemType</li>
<li><font color="#ff9800">grassPath</font>: ItemType</li>
<li><font color="#ff9800">gravel</font>: ItemType</li>
<li><font color="#ff9800">grayCandle</font>: ItemType</li>
<li><font color="#ff9800">grayCandleCake</font>: ItemType</li>
<li><font color="#ff9800">grayDye</font>: ItemType</li>
<li><font color="#ff9800">grayGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">greenCandle</font>: ItemType</li>
<li><font color="#ff9800">greenCandleCake</font>: ItemType</li>
<li><font color="#ff9800">greenDye</font>: ItemType</li>
<li><font color="#ff9800">greenGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">grindstone</font>: ItemType</li>
<li><font color="#ff9800">guardianSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">gunpowder</font>: ItemType</li>
<li><font color="#ff9800">hangingRoots</font>: ItemType</li>
<li><font color="#ff9800">hardenedClay</font>: ItemType</li>
<li><font color="#ff9800">hardGlass</font>: ItemType</li>
<li><font color="#ff9800">hardGlassPane</font>: ItemType</li>
<li><font color="#ff9800">hardStainedGlass</font>: ItemType</li>
<li><font color="#ff9800">hardStainedGlassPane</font>: ItemType</li>
<li><font color="#ff9800">hayBlock</font>: ItemType</li>
<li><font color="#ff9800">heartOfTheSea</font>: ItemType</li>
<li><font color="#ff9800">heavyWeightedPressurePlate</font>: ItemType</li>
<li><font color="#ff9800">hoglinSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">honeyBlock</font>: ItemType</li>
<li><font color="#ff9800">honeyBottle</font>: ItemType</li>
<li><font color="#ff9800">honeycomb</font>: ItemType</li>
<li><font color="#ff9800">honeycombBlock</font>: ItemType</li>
<li><font color="#ff9800">hopper</font>: ItemType</li>
<li><font color="#ff9800">hopperMinecart</font>: ItemType</li>
<li><font color="#ff9800">horseSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">huskSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">ice</font>: ItemType</li>
<li><font color="#ff9800">iceBomb</font>: ItemType</li>
<li><font color="#ff9800">infestedDeepslate</font>: ItemType</li>
<li><font color="#ff9800">infoUpdate</font>: ItemType</li>
<li><font color="#ff9800">infoUpdate2</font>: ItemType</li>
<li><font color="#ff9800">inkSac</font>: ItemType</li>
<li><font color="#ff9800">invisiblebedrock</font>: ItemType</li>
<li><font color="#ff9800">ironAxe</font>: ItemType</li>
<li><font color="#ff9800">ironBars</font>: ItemType</li>
<li><font color="#ff9800">ironBlock</font>: ItemType</li>
<li><font color="#ff9800">ironBoots</font>: ItemType</li>
<li><font color="#ff9800">ironChestplate</font>: ItemType</li>
<li><font color="#ff9800">ironDoor</font>: ItemType</li>
<li><font color="#ff9800">ironHelmet</font>: ItemType</li>
<li><font color="#ff9800">ironHoe</font>: ItemType</li>
<li><font color="#ff9800">ironHorseArmor</font>: ItemType</li>
<li><font color="#ff9800">ironIngot</font>: ItemType</li>
<li><font color="#ff9800">ironLeggings</font>: ItemType</li>
<li><font color="#ff9800">ironNugget</font>: ItemType</li>
<li><font color="#ff9800">ironOre</font>: ItemType</li>
<li><font color="#ff9800">ironPickaxe</font>: ItemType</li>
<li><font color="#ff9800">ironShovel</font>: ItemType</li>
<li><font color="#ff9800">ironSword</font>: ItemType</li>
<li><font color="#ff9800">ironTrapdoor</font>: ItemType</li>
<li>item.acaciaDoor: ItemType</li>
<li>item.bed: ItemType</li>
<li>item.beetroot: ItemType</li>
<li>item.birchDoor: ItemType</li>
<li>item.cake: ItemType</li>
<li>item.camera: ItemType</li>
<li>item.campfire: ItemType</li>
<li>item.cauldron: ItemType</li>
<li>item.chain: ItemType</li>
<li>item.crimsonDoor: ItemType</li>
<li>item.darkOakDoor: ItemType</li>
<li>item.flowerPot: ItemType</li>
<li>item.frame: ItemType</li>
<li>item.glowFrame: ItemType</li>
<li>item.hopper: ItemType</li>
<li>item.ironDoor: ItemType</li>
<li>item.jungleDoor: ItemType</li>
<li>item.kelp: ItemType</li>
<li>item.netherSprouts: ItemType</li>
<li>item.netherWart: ItemType</li>
<li>item.reeds: ItemType</li>
<li>item.skull: ItemType</li>
<li>item.soulCampfire: ItemType</li>
<li>item.spruceDoor: ItemType</li>
<li>item.warpedDoor: ItemType</li>
<li>item.wheat: ItemType</li>
<li>item.woodenDoor: ItemType</li>
<li><font color="#ff9800">jigsaw</font>: ItemType</li>
<li><font color="#ff9800">jukebox</font>: ItemType</li>
<li><font color="#ff9800">jungleBoat</font>: ItemType</li>
<li><font color="#ff9800">jungleButton</font>: ItemType</li>
<li><font color="#ff9800">jungleDoor</font>: ItemType</li>
<li><font color="#ff9800">jungleFenceGate</font>: ItemType</li>
<li><font color="#ff9800">junglePressurePlate</font>: ItemType</li>
<li><font color="#ff9800">jungleSign</font>: ItemType</li>
<li><font color="#ff9800">jungleStairs</font>: ItemType</li>
<li><font color="#ff9800">jungleStandingSign</font>: ItemType</li>
<li><font color="#ff9800">jungleTrapdoor</font>: ItemType</li>
<li><font color="#ff9800">jungleWallSign</font>: ItemType</li>
<li><font color="#ff9800">kelp</font>: ItemType</li>
<li><font color="#ff9800">ladder</font>: ItemType</li>
<li><font color="#ff9800">lantern</font>: ItemType</li>
<li><font color="#ff9800">lapisBlock</font>: ItemType</li>
<li><font color="#ff9800">lapisLazuli</font>: ItemType</li>
<li><font color="#ff9800">lapisOre</font>: ItemType</li>
<li><font color="#ff9800">largeAmethystBud</font>: ItemType</li>
<li><font color="#ff9800">lava</font>: ItemType</li>
<li><font color="#ff9800">lavaBucket</font>: ItemType</li>
<li><font color="#ff9800">lavaCauldron</font>: ItemType</li>
<li><font color="#ff9800">lead</font>: ItemType</li>
<li><font color="#ff9800">leather</font>: ItemType</li>
<li><font color="#ff9800">leatherBoots</font>: ItemType</li>
<li><font color="#ff9800">leatherChestplate</font>: ItemType</li>
<li><font color="#ff9800">leatherHelmet</font>: ItemType</li>
<li><font color="#ff9800">leatherHorseArmor</font>: ItemType</li>
<li><font color="#ff9800">leatherLeggings</font>: ItemType</li>
<li><font color="#ff9800">leaves</font>: ItemType</li>
<li><font color="#ff9800">leaves2</font>: ItemType</li>
<li><font color="#ff9800">lectern</font>: ItemType</li>
<li><font color="#ff9800">lever</font>: ItemType</li>
<li><font color="#ff9800">lightBlock</font>: ItemType</li>
<li><font color="#ff9800">lightBlueCandle</font>: ItemType</li>
<li><font color="#ff9800">lightBlueCandleCake</font>: ItemType</li>
<li><font color="#ff9800">lightBlueDye</font>: ItemType</li>
<li><font color="#ff9800">lightBlueGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">lightGrayCandle</font>: ItemType</li>
<li><font color="#ff9800">lightGrayCandleCake</font>: ItemType</li>
<li><font color="#ff9800">lightGrayDye</font>: ItemType</li>
<li><font color="#ff9800">lightningRod</font>: ItemType</li>
<li><font color="#ff9800">lightWeightedPressurePlate</font>: ItemType</li>
<li><font color="#ff9800">limeCandle</font>: ItemType</li>
<li><font color="#ff9800">limeCandleCake</font>: ItemType</li>
<li><font color="#ff9800">limeDye</font>: ItemType</li>
<li><font color="#ff9800">limeGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">lingeringPotion</font>: ItemType</li>
<li><font color="#ff9800">litBlastFurnace</font>: ItemType</li>
<li><font color="#ff9800">litDeepslateRedstoneOre</font>: ItemType</li>
<li><font color="#ff9800">litFurnace</font>: ItemType</li>
<li><font color="#ff9800">litPumpkin</font>: ItemType</li>
<li><font color="#ff9800">litRedstoneLamp</font>: ItemType</li>
<li><font color="#ff9800">litRedstoneOre</font>: ItemType</li>
<li><font color="#ff9800">litSmoker</font>: ItemType</li>
<li><font color="#ff9800">llamaSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">lodestone</font>: ItemType</li>
<li><font color="#ff9800">lodestoneCompass</font>: ItemType</li>
<li><font color="#ff9800">log</font>: ItemType</li>
<li><font color="#ff9800">log2</font>: ItemType</li>
<li><font color="#ff9800">loom</font>: ItemType</li>
<li><font color="#ff9800">magentaCandle</font>: ItemType</li>
<li><font color="#ff9800">magentaCandleCake</font>: ItemType</li>
<li><font color="#ff9800">magentaDye</font>: ItemType</li>
<li><font color="#ff9800">magentaGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">magma</font>: ItemType</li>
<li><font color="#ff9800">magmaCream</font>: ItemType</li>
<li><font color="#ff9800">magmaCubeSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">medicine</font>: ItemType</li>
<li><font color="#ff9800">mediumAmethystBud</font>: ItemType</li>
<li><font color="#ff9800">melonBlock</font>: ItemType</li>
<li><font color="#ff9800">melonSeeds</font>: ItemType</li>
<li><font color="#ff9800">melonSlice</font>: ItemType</li>
<li><font color="#ff9800">melonStem</font>: ItemType</li>
<li><font color="#ff9800">milkBucket</font>: ItemType</li>
<li><font color="#ff9800">minecart</font>: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_boat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_fence_gate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_standing_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:acacia_wall_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:activator_rail: ItemType</li>
<li><font color="#ff9800">minecraft</font>:agent_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:air: ItemType</li>
<li><font color="#ff9800">minecraft</font>:allow: ItemType</li>
<li><font color="#ff9800">minecraft</font>:amethyst_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:amethyst_cluster: ItemType</li>
<li><font color="#ff9800">minecraft</font>:amethyst_shard: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ancient_debris: ItemType</li>
<li><font color="#ff9800">minecraft</font>:andesite_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:anvil: ItemType</li>
<li><font color="#ff9800">minecraft</font>:apple: ItemType</li>
<li><font color="#ff9800">minecraft</font>:armor_stand: ItemType</li>
<li><font color="#ff9800">minecraft</font>:arrow: ItemType</li>
<li><font color="#ff9800">minecraft</font>:axolotl_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:axolotl_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:azalea: ItemType</li>
<li><font color="#ff9800">minecraft</font>:azalea_leaves: ItemType</li>
<li><font color="#ff9800">minecraft</font>:azalea_leaves_flowered: ItemType</li>
<li><font color="#ff9800">minecraft</font>:baked_potato: ItemType</li>
<li><font color="#ff9800">minecraft</font>:balloon: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bamboo: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bamboo_sapling: ItemType</li>
<li><font color="#ff9800">minecraft</font>:banner: ItemType</li>
<li><font color="#ff9800">minecraft</font>:banner_pattern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:barrel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:barrier: ItemType</li>
<li><font color="#ff9800">minecraft</font>:basalt: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bat_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:beacon: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bed: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bedrock: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bee_nest: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bee_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:beef: ItemType</li>
<li><font color="#ff9800">minecraft</font>:beehive: ItemType</li>
<li><font color="#ff9800">minecraft</font>:beetroot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:beetroot_seeds: ItemType</li>
<li><font color="#ff9800">minecraft</font>:beetroot_soup: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bell: ItemType</li>
<li><font color="#ff9800">minecraft</font>:big_dripleaf: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_boat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_fence_gate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_standing_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:birch_wall_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:black_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:black_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:black_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:black_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blackstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blackstone_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blackstone_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blackstone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blackstone_wall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blast_furnace: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blaze_powder: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blaze_rod: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blaze_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bleach: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blue_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blue_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blue_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blue_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:blue_ice: ItemType</li>
<li><font color="#ff9800">minecraft</font>:boat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bone_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bone_meal: ItemType</li>
<li><font color="#ff9800">minecraft</font>:book: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bookshelf: ItemType</li>
<li><font color="#ff9800">minecraft</font>:border_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bordure_indented_banner_pattern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bow: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bowl: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bread: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brewing_stand: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brewingstandblock: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brick_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brick_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brown_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brown_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brown_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brown_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brown_mushroom: ItemType</li>
<li><font color="#ff9800">minecraft</font>:brown_mushroom_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bubble_column: ItemType</li>
<li><font color="#ff9800">minecraft</font>:bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:budding_amethyst: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cactus: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:calcite: ItemType</li>
<li><font color="#ff9800">minecraft</font>:camera: ItemType</li>
<li><font color="#ff9800">minecraft</font>:campfire: ItemType</li>
<li><font color="#ff9800">minecraft</font>:candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:carpet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:carrot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:carrot_on_a_stick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:carrots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cartography_table: ItemType</li>
<li><font color="#ff9800">minecraft</font>:carved_pumpkin: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cat_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cauldron: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cave_spider_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cave_vines: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cave_vines_body_with_berries: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cave_vines_head_with_berries: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chain: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chain_command_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chainmail_boots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chainmail_chestplate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chainmail_helmet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chainmail_leggings: ItemType</li>
<li><font color="#ff9800">minecraft</font>:charcoal: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chemical_heat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chemistry_table: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chest: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chest_minecart: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chicken: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chicken_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chiseled_deepslate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chiseled_nether_bricks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chiseled_polished_blackstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chorus_flower: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chorus_fruit: ItemType</li>
<li><font color="#ff9800">minecraft</font>:chorus_plant: ItemType</li>
<li><font color="#ff9800">minecraft</font>:clay: ItemType</li>
<li><font color="#ff9800">minecraft</font>:clay_ball: ItemType</li>
<li><font color="#ff9800">minecraft</font>:clock: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coal: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coal_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coal_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cobbled_deepslate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cobbled_deepslate_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cobbled_deepslate_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cobbled_deepslate_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cobbled_deepslate_wall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cobblestone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cobblestone_wall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cocoa: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cocoa_beans: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cod: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cod_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cod_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:colored_torch_bp: ItemType</li>
<li><font color="#ff9800">minecraft</font>:colored_torch_rg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:command_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:command_block_minecart: ItemType</li>
<li><font color="#ff9800">minecraft</font>:comparator: ItemType</li>
<li><font color="#ff9800">minecraft</font>:compass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:composter: ItemType</li>
<li><font color="#ff9800">minecraft</font>:compound: ItemType</li>
<li><font color="#ff9800">minecraft</font>:concrete: ItemType</li>
<li><font color="#ff9800">minecraft</font>:concrete_powder: ItemType</li>
<li><font color="#ff9800">minecraft</font>:conduit: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cooked_beef: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cooked_chicken: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cooked_cod: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cooked_mutton: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cooked_porkchop: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cooked_rabbit: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cooked_salmon: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cookie: ItemType</li>
<li><font color="#ff9800">minecraft</font>:copper_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:copper_ingot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:copper_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coral: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coral_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coral_fan: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coral_fan_dead: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coral_fan_hang: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coral_fan_hang2: ItemType</li>
<li><font color="#ff9800">minecraft</font>:coral_fan_hang3: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cow_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cracked_deepslate_bricks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cracked_deepslate_tiles: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cracked_nether_bricks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cracked_polished_blackstone_bricks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crafting_table: ItemType</li>
<li><font color="#ff9800">minecraft</font>:creeper_banner_pattern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:creeper_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_fence: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_fence_gate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_fungus: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_hyphae: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_nylium: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_planks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_roots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_standing_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_stem: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crimson_wall_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crossbow: ItemType</li>
<li><font color="#ff9800">minecraft</font>:crying_obsidian: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cut_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cut_copper_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cyan_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cyan_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cyan_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:cyan_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_oak_boat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_oak_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_oak_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_oak_fence_gate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_oak_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_oak_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_oak_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_oak_trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dark_prismarine_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:darkoak_standing_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:darkoak_wall_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:daylight_detector: ItemType</li>
<li><font color="#ff9800">minecraft</font>:daylight_detector_inverted: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deadbush: ItemType</li>
<li><font color="#ff9800">minecraft</font>:debug_stick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_brick_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_brick_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_brick_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_brick_wall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_bricks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_coal_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_copper_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_diamond_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_emerald_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_gold_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_iron_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_lapis_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_redstone_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_tile_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_tile_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_tile_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_tile_wall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deepslate_tiles: ItemType</li>
<li><font color="#ff9800">minecraft</font>:deny: ItemType</li>
<li><font color="#ff9800">minecraft</font>:detector_rail: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_axe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_boots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_chestplate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_helmet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_hoe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_horse_armor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_leggings: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_pickaxe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_shovel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diamond_sword: ItemType</li>
<li><font color="#ff9800">minecraft</font>:diorite_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dirt: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dirt_with_roots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dispenser: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dolphin_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:donkey_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:double_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:double_plant: ItemType</li>
<li><font color="#ff9800">minecraft</font>:double_stone_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:double_stone_slab2: ItemType</li>
<li><font color="#ff9800">minecraft</font>:double_stone_slab3: ItemType</li>
<li><font color="#ff9800">minecraft</font>:double_stone_slab4: ItemType</li>
<li><font color="#ff9800">minecraft</font>:double_wooden_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dragon_breath: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dragon_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dried_kelp: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dried_kelp_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dripstone_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dropper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:drowned_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:elder_guardian_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_0: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_1: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_10: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_100: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_101: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_102: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_103: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_104: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_105: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_106: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_107: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_108: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_109: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_11: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_110: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_111: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_112: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_113: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_114: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_115: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_116: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_117: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_118: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_12: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_13: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_14: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_15: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_16: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_17: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_18: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_19: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_2: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_20: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_21: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_22: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_23: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_24: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_25: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_26: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_27: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_28: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_29: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_3: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_30: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_31: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_32: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_33: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_34: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_35: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_36: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_37: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_38: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_39: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_4: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_40: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_41: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_42: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_43: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_44: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_45: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_46: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_47: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_48: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_49: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_5: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_50: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_51: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_52: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_53: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_54: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_55: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_56: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_57: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_58: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_59: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_6: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_60: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_61: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_62: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_63: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_64: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_65: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_66: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_67: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_68: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_69: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_7: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_70: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_71: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_72: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_73: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_74: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_75: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_76: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_77: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_78: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_79: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_8: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_80: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_81: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_82: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_83: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_84: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_85: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_86: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_87: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_88: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_89: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_9: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_90: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_91: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_92: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_93: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_94: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_95: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_96: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_97: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_98: ItemType</li>
<li><font color="#ff9800">minecraft</font>:element_99: ItemType</li>
<li><font color="#ff9800">minecraft</font>:elytra: ItemType</li>
<li><font color="#ff9800">minecraft</font>:emerald: ItemType</li>
<li><font color="#ff9800">minecraft</font>:emerald_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:emerald_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:empty_map: ItemType</li>
<li><font color="#ff9800">minecraft</font>:enchanted_book: ItemType</li>
<li><font color="#ff9800">minecraft</font>:enchanted_golden_apple: ItemType</li>
<li><font color="#ff9800">minecraft</font>:enchanting_table: ItemType</li>
<li><font color="#ff9800">minecraft</font>:end_brick_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:end_bricks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:end_crystal: ItemType</li>
<li><font color="#ff9800">minecraft</font>:end_gateway: ItemType</li>
<li><font color="#ff9800">minecraft</font>:end_portal: ItemType</li>
<li><font color="#ff9800">minecraft</font>:end_portal_frame: ItemType</li>
<li><font color="#ff9800">minecraft</font>:end_rod: ItemType</li>
<li><font color="#ff9800">minecraft</font>:end_stone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ender_chest: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ender_eye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ender_pearl: ItemType</li>
<li><font color="#ff9800">minecraft</font>:enderman_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:endermite_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:evoker_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:experience_bottle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:exposed_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:exposed_cut_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:exposed_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:exposed_cut_copper_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:exposed_double_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:farmland: ItemType</li>
<li><font color="#ff9800">minecraft</font>:feather: ItemType</li>
<li><font color="#ff9800">minecraft</font>:fence: ItemType</li>
<li><font color="#ff9800">minecraft</font>:fence_gate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:fermented_spider_eye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:field_masoned_banner_pattern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:filled_map: ItemType</li>
<li><font color="#ff9800">minecraft</font>:fire: ItemType</li>
<li><font color="#ff9800">minecraft</font>:fire_charge: ItemType</li>
<li><font color="#ff9800">minecraft</font>:firework_rocket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:firework_star: ItemType</li>
<li><font color="#ff9800">minecraft</font>:fishing_rod: ItemType</li>
<li><font color="#ff9800">minecraft</font>:fletching_table: ItemType</li>
<li><font color="#ff9800">minecraft</font>:flint: ItemType</li>
<li><font color="#ff9800">minecraft</font>:flint_and_steel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:flower_banner_pattern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:flower_pot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:flowering_azalea: ItemType</li>
<li><font color="#ff9800">minecraft</font>:flowing_lava: ItemType</li>
<li><font color="#ff9800">minecraft</font>:flowing_water: ItemType</li>
<li><font color="#ff9800">minecraft</font>:fox_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:frame: ItemType</li>
<li><font color="#ff9800">minecraft</font>:frosted_ice: ItemType</li>
<li><font color="#ff9800">minecraft</font>:furnace: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ghast_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ghast_tear: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gilded_blackstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glass_bottle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glass_pane: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glistering_melon_slice: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glow_berries: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glow_frame: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glow_ink_sac: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glow_lichen: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glow_squid_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glow_stick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glowingobsidian: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glowstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:glowstone_dust: ItemType</li>
<li><font color="#ff9800">minecraft</font>:goat_horn: ItemType</li>
<li><font color="#ff9800">minecraft</font>:goat_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gold_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gold_ingot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gold_nugget: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gold_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_apple: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_axe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_boots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_carrot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_chestplate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_helmet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_hoe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_horse_armor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_leggings: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_pickaxe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_rail: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_shovel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:golden_sword: ItemType</li>
<li><font color="#ff9800">minecraft</font>:granite_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:grass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:grass_path: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gravel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gray_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gray_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gray_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gray_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:green_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:green_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:green_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:green_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:grindstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:guardian_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:gunpowder: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hanging_roots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hard_glass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hard_glass_pane: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hard_stained_glass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hard_stained_glass_pane: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hardened_clay: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hay_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:heart_of_the_sea: ItemType</li>
<li><font color="#ff9800">minecraft</font>:heavy_weighted_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hoglin_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:honey_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:honey_bottle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:honeycomb: ItemType</li>
<li><font color="#ff9800">minecraft</font>:honeycomb_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hopper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:hopper_minecart: ItemType</li>
<li><font color="#ff9800">minecraft</font>:horse_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:husk_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ice: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ice_bomb: ItemType</li>
<li><font color="#ff9800">minecraft</font>:infested_deepslate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:info_update: ItemType</li>
<li><font color="#ff9800">minecraft</font>:info_update2: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ink_sac: ItemType</li>
<li><font color="#ff9800">minecraft</font>:invisiblebedrock: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_axe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_bars: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_boots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_chestplate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_helmet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_hoe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_horse_armor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_ingot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_leggings: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_nugget: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_pickaxe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_shovel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_sword: ItemType</li>
<li><font color="#ff9800">minecraft</font>:iron_trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.acacia_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.bed: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.beetroot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.birch_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.camera: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.campfire: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.cauldron: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.chain: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.crimson_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.dark_oak_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.flower_pot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.frame: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.glow_frame: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.hopper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.iron_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.jungle_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.kelp: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.nether_sprouts: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.nether_wart: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.reeds: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.skull: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.soul_campfire: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.spruce_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.warped_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.wheat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:item.wooden_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jigsaw: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jukebox: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_boat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_fence_gate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_standing_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:jungle_wall_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:kelp: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ladder: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lantern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lapis_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lapis_lazuli: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lapis_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:large_amethyst_bud: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lava: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lava_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lava_cauldron: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lead: ItemType</li>
<li><font color="#ff9800">minecraft</font>:leather: ItemType</li>
<li><font color="#ff9800">minecraft</font>:leather_boots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:leather_chestplate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:leather_helmet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:leather_horse_armor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:leather_leggings: ItemType</li>
<li><font color="#ff9800">minecraft</font>:leaves: ItemType</li>
<li><font color="#ff9800">minecraft</font>:leaves2: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lectern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lever: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_blue_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_blue_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_blue_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_blue_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_gray_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_gray_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_gray_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:light_weighted_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lightning_rod: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lime_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lime_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lime_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lime_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lingering_potion: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lit_blast_furnace: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lit_deepslate_redstone_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lit_furnace: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lit_pumpkin: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lit_redstone_lamp: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lit_redstone_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lit_smoker: ItemType</li>
<li><font color="#ff9800">minecraft</font>:llama_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lodestone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:lodestone_compass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:log: ItemType</li>
<li><font color="#ff9800">minecraft</font>:log2: ItemType</li>
<li><font color="#ff9800">minecraft</font>:loom: ItemType</li>
<li><font color="#ff9800">minecraft</font>:magenta_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:magenta_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:magenta_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:magenta_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:magma: ItemType</li>
<li><font color="#ff9800">minecraft</font>:magma_cream: ItemType</li>
<li><font color="#ff9800">minecraft</font>:magma_cube_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:medicine: ItemType</li>
<li><font color="#ff9800">minecraft</font>:medium_amethyst_bud: ItemType</li>
<li><font color="#ff9800">minecraft</font>:melon_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:melon_seeds: ItemType</li>
<li><font color="#ff9800">minecraft</font>:melon_slice: ItemType</li>
<li><font color="#ff9800">minecraft</font>:melon_stem: ItemType</li>
<li><font color="#ff9800">minecraft</font>:milk_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:minecart: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mob_spawner: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mojang_banner_pattern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:monster_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mooshroom_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:moss_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:moss_carpet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mossy_cobblestone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mossy_cobblestone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mossy_stone_brick_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:movingblock: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mule_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mushroom_stew: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_11: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_13: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_blocks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_cat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_chirp: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_far: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_mall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_mellohi: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_pigstep: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_stal: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_strad: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_wait: ItemType</li>
<li><font color="#ff9800">minecraft</font>:music_disc_ward: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mutton: ItemType</li>
<li><font color="#ff9800">minecraft</font>:mycelium: ItemType</li>
<li><font color="#ff9800">minecraft</font>:name_tag: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nautilus_shell: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nether_brick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nether_brick_fence: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nether_brick_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nether_gold_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nether_sprouts: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nether_star: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nether_wart: ItemType</li>
<li><font color="#ff9800">minecraft</font>:nether_wart_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherbrick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_axe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_boots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_chestplate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_helmet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_hoe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_ingot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_leggings: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_pickaxe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_scrap: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_shovel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherite_sword: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherrack: ItemType</li>
<li><font color="#ff9800">minecraft</font>:netherreactor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:normal_stone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:noteblock: ItemType</li>
<li><font color="#ff9800">minecraft</font>:npc_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:oak_boat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:oak_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:oak_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:observer: ItemType</li>
<li><font color="#ff9800">minecraft</font>:obsidian: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ocelot_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:orange_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:orange_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:orange_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:orange_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:oxidized_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:oxidized_cut_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:oxidized_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:oxidized_cut_copper_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:oxidized_double_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:packed_ice: ItemType</li>
<li><font color="#ff9800">minecraft</font>:painting: ItemType</li>
<li><font color="#ff9800">minecraft</font>:panda_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:paper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:parrot_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:phantom_membrane: ItemType</li>
<li><font color="#ff9800">minecraft</font>:phantom_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pig_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:piglin_banner_pattern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:piglin_brute_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:piglin_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pillager_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pink_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pink_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pink_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pink_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:piston: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pistonarmcollision: ItemType</li>
<li><font color="#ff9800">minecraft</font>:planks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:podzol: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pointed_dripstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:poisonous_potato: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polar_bear_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_andesite_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_basalt: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_brick_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_brick_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_brick_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_brick_wall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_bricks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_blackstone_wall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_deepslate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_deepslate_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_deepslate_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_deepslate_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_deepslate_wall: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_diorite_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:polished_granite_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:popped_chorus_fruit: ItemType</li>
<li><font color="#ff9800">minecraft</font>:porkchop: ItemType</li>
<li><font color="#ff9800">minecraft</font>:portal: ItemType</li>
<li><font color="#ff9800">minecraft</font>:potato: ItemType</li>
<li><font color="#ff9800">minecraft</font>:potatoes: ItemType</li>
<li><font color="#ff9800">minecraft</font>:potion: ItemType</li>
<li><font color="#ff9800">minecraft</font>:powder_snow: ItemType</li>
<li><font color="#ff9800">minecraft</font>:powder_snow_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:powered_comparator: ItemType</li>
<li><font color="#ff9800">minecraft</font>:powered_repeater: ItemType</li>
<li><font color="#ff9800">minecraft</font>:prismarine: ItemType</li>
<li><font color="#ff9800">minecraft</font>:prismarine_bricks_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:prismarine_crystals: ItemType</li>
<li><font color="#ff9800">minecraft</font>:prismarine_shard: ItemType</li>
<li><font color="#ff9800">minecraft</font>:prismarine_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pufferfish: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pufferfish_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pufferfish_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pumpkin: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pumpkin_pie: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pumpkin_seeds: ItemType</li>
<li><font color="#ff9800">minecraft</font>:pumpkin_stem: ItemType</li>
<li><font color="#ff9800">minecraft</font>:purple_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:purple_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:purple_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:purple_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:purpur_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:purpur_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:quartz: ItemType</li>
<li><font color="#ff9800">minecraft</font>:quartz_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:quartz_bricks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:quartz_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:quartz_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:rabbit: ItemType</li>
<li><font color="#ff9800">minecraft</font>:rabbit_foot: ItemType</li>
<li><font color="#ff9800">minecraft</font>:rabbit_hide: ItemType</li>
<li><font color="#ff9800">minecraft</font>:rabbit_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:rabbit_stew: ItemType</li>
<li><font color="#ff9800">minecraft</font>:rail: ItemType</li>
<li><font color="#ff9800">minecraft</font>:rapid_fertilizer: ItemType</li>
<li><font color="#ff9800">minecraft</font>:ravager_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:raw_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:raw_copper_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:raw_gold: ItemType</li>
<li><font color="#ff9800">minecraft</font>:raw_gold_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:raw_iron: ItemType</li>
<li><font color="#ff9800">minecraft</font>:raw_iron_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:real_double_stone_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:real_double_stone_slab2: ItemType</li>
<li><font color="#ff9800">minecraft</font>:real_double_stone_slab3: ItemType</li>
<li><font color="#ff9800">minecraft</font>:real_double_stone_slab4: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_flower: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_mushroom: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_mushroom_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_nether_brick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_nether_brick_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_sandstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:red_sandstone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:redstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:redstone_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:redstone_lamp: ItemType</li>
<li><font color="#ff9800">minecraft</font>:redstone_ore: ItemType</li>
<li><font color="#ff9800">minecraft</font>:redstone_torch: ItemType</li>
<li><font color="#ff9800">minecraft</font>:redstone_wire: ItemType</li>
<li><font color="#ff9800">minecraft</font>:repeater: ItemType</li>
<li><font color="#ff9800">minecraft</font>:repeating_command_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:reserved6: ItemType</li>
<li><font color="#ff9800">minecraft</font>:respawn_anchor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:rotten_flesh: ItemType</li>
<li><font color="#ff9800">minecraft</font>:saddle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:salmon: ItemType</li>
<li><font color="#ff9800">minecraft</font>:salmon_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:salmon_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sand: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sandstone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sandstone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sapling: ItemType</li>
<li><font color="#ff9800">minecraft</font>:scaffolding: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sculk_sensor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:scute: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sea_pickle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:seagrass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sealantern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:shears: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sheep_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:shield: ItemType</li>
<li><font color="#ff9800">minecraft</font>:shroomlight: ItemType</li>
<li><font color="#ff9800">minecraft</font>:shulker_box: ItemType</li>
<li><font color="#ff9800">minecraft</font>:shulker_shell: ItemType</li>
<li><font color="#ff9800">minecraft</font>:shulker_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:silver_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:silverfish_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:skeleton_horse_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:skeleton_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:skull: ItemType</li>
<li><font color="#ff9800">minecraft</font>:skull_banner_pattern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:slime: ItemType</li>
<li><font color="#ff9800">minecraft</font>:slime_ball: ItemType</li>
<li><font color="#ff9800">minecraft</font>:slime_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:small_amethyst_bud: ItemType</li>
<li><font color="#ff9800">minecraft</font>:small_dripleaf_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:smithing_table: ItemType</li>
<li><font color="#ff9800">minecraft</font>:smoker: ItemType</li>
<li><font color="#ff9800">minecraft</font>:smooth_basalt: ItemType</li>
<li><font color="#ff9800">minecraft</font>:smooth_quartz_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:smooth_red_sandstone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:smooth_sandstone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:smooth_stone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:snow: ItemType</li>
<li><font color="#ff9800">minecraft</font>:snow_layer: ItemType</li>
<li><font color="#ff9800">minecraft</font>:snowball: ItemType</li>
<li><font color="#ff9800">minecraft</font>:soul_campfire: ItemType</li>
<li><font color="#ff9800">minecraft</font>:soul_fire: ItemType</li>
<li><font color="#ff9800">minecraft</font>:soul_lantern: ItemType</li>
<li><font color="#ff9800">minecraft</font>:soul_sand: ItemType</li>
<li><font color="#ff9800">minecraft</font>:soul_soil: ItemType</li>
<li><font color="#ff9800">minecraft</font>:soul_torch: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sparkler: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spider_eye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spider_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:splash_potion: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sponge: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spore_blossom: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_boat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_fence_gate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_standing_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spruce_wall_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:spyglass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:squid_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stained_glass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stained_glass_pane: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stained_hardened_clay: ItemType</li>
<li><font color="#ff9800">minecraft</font>:standing_banner: ItemType</li>
<li><font color="#ff9800">minecraft</font>:standing_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sticky_piston: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stickypistonarmcollision: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_axe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_brick_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_hoe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_pickaxe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_shovel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stone_sword: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stonebrick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stonecutter: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stonecutter_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stray_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:strider_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:string: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_acacia_log: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_birch_log: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_crimson_hyphae: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_crimson_stem: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_dark_oak_log: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_jungle_log: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_oak_log: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_spruce_log: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_warped_hyphae: ItemType</li>
<li><font color="#ff9800">minecraft</font>:stripped_warped_stem: ItemType</li>
<li><font color="#ff9800">minecraft</font>:structure_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:structure_void: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sugar: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sugar_cane: ItemType</li>
<li><font color="#ff9800">minecraft</font>:suspicious_stew: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sweet_berries: ItemType</li>
<li><font color="#ff9800">minecraft</font>:sweet_berry_bush: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tallgrass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:target: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tinted_glass: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tnt: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tnt_minecart: ItemType</li>
<li><font color="#ff9800">minecraft</font>:torch: ItemType</li>
<li><font color="#ff9800">minecraft</font>:totem_of_undying: ItemType</li>
<li><font color="#ff9800">minecraft</font>:trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:trapped_chest: ItemType</li>
<li><font color="#ff9800">minecraft</font>:trident: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tripwire: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tripwire_hook: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tropical_fish: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tropical_fish_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tropical_fish_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:tuff: ItemType</li>
<li><font color="#ff9800">minecraft</font>:turtle_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:turtle_helmet: ItemType</li>
<li><font color="#ff9800">minecraft</font>:turtle_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:twisting_vines: ItemType</li>
<li><font color="#ff9800">minecraft</font>:underwater_torch: ItemType</li>
<li><font color="#ff9800">minecraft</font>:undyed_shulker_box: ItemType</li>
<li><font color="#ff9800">minecraft</font>:unknown: ItemType</li>
<li><font color="#ff9800">minecraft</font>:unlit_redstone_torch: ItemType</li>
<li><font color="#ff9800">minecraft</font>:unpowered_comparator: ItemType</li>
<li><font color="#ff9800">minecraft</font>:unpowered_repeater: ItemType</li>
<li><font color="#ff9800">minecraft</font>:vex_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:villager_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:vindicator_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:vine: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wall_banner: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wall_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wandering_trader_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_double_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_fence: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_fence_gate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_fungus: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_fungus_on_a_stick: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_hyphae: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_nylium: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_planks: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_roots: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_standing_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_stem: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_trapdoor: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_wall_sign: ItemType</li>
<li><font color="#ff9800">minecraft</font>:warped_wart_block: ItemType</li>
<li><font color="#ff9800">minecraft</font>:water: ItemType</li>
<li><font color="#ff9800">minecraft</font>:water_bucket: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waterlily: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_cut_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_cut_copper_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_double_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_exposed_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_exposed_cut_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_exposed_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_exposed_cut_copper_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_exposed_double_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_oxidized_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_oxidized_cut_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_oxidized_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_oxidized_cut_copper_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_oxidized_double_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_weathered_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_weathered_cut_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_weathered_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_weathered_cut_copper_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:waxed_weathered_double_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:weathered_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:weathered_cut_copper: ItemType</li>
<li><font color="#ff9800">minecraft</font>:weathered_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:weathered_cut_copper_stairs: ItemType</li>
<li><font color="#ff9800">minecraft</font>:weathered_double_cut_copper_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:web: ItemType</li>
<li><font color="#ff9800">minecraft</font>:weeping_vines: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wheat: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wheat_seeds: ItemType</li>
<li><font color="#ff9800">minecraft</font>:white_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:white_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:white_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:white_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:witch_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wither_rose: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wither_skeleton_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wolf_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wood: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_axe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_button: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_door: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_hoe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_pickaxe: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_pressure_plate: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_shovel: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_slab: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wooden_sword: ItemType</li>
<li><font color="#ff9800">minecraft</font>:wool: ItemType</li>
<li><font color="#ff9800">minecraft</font>:writable_book: ItemType</li>
<li><font color="#ff9800">minecraft</font>:written_book: ItemType</li>
<li><font color="#ff9800">minecraft</font>:yellow_candle: ItemType</li>
<li><font color="#ff9800">minecraft</font>:yellow_candle_cake: ItemType</li>
<li><font color="#ff9800">minecraft</font>:yellow_dye: ItemType</li>
<li><font color="#ff9800">minecraft</font>:yellow_flower: ItemType</li>
<li><font color="#ff9800">minecraft</font>:yellow_glazed_terracotta: ItemType</li>
<li><font color="#ff9800">minecraft</font>:zoglin_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:zombie_horse_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:zombie_pigman_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:zombie_spawn_egg: ItemType</li>
<li><font color="#ff9800">minecraft</font>:zombie_villager_spawn_egg: ItemType</li>
<li><font color="#ff9800">mobSpawner</font>: ItemType</li>
<li><font color="#ff9800">mojangBannerPattern</font>: ItemType</li>
<li><font color="#ff9800">monsterEgg</font>: ItemType</li>
<li><font color="#ff9800">mooshroomSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">mossBlock</font>: ItemType</li>
<li><font color="#ff9800">mossCarpet</font>: ItemType</li>
<li><font color="#ff9800">mossyCobblestone</font>: ItemType</li>
<li><font color="#ff9800">mossyCobblestoneStairs</font>: ItemType</li>
<li><font color="#ff9800">mossyStoneBrickStairs</font>: ItemType</li>
<li><font color="#ff9800">movingblock</font>: ItemType</li>
<li><font color="#ff9800">muleSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">mushroomStew</font>: ItemType</li>
<li><font color="#ff9800">musicDisc11</font>: ItemType</li>
<li><font color="#ff9800">musicDisc13</font>: ItemType</li>
<li><font color="#ff9800">musicDiscBlocks</font>: ItemType</li>
<li><font color="#ff9800">musicDiscCat</font>: ItemType</li>
<li><font color="#ff9800">musicDiscChirp</font>: ItemType</li>
<li><font color="#ff9800">musicDiscFar</font>: ItemType</li>
<li><font color="#ff9800">musicDiscMall</font>: ItemType</li>
<li><font color="#ff9800">musicDiscMellohi</font>: ItemType</li>
<li><font color="#ff9800">musicDiscPigstep</font>: ItemType</li>
<li><font color="#ff9800">musicDiscStal</font>: ItemType</li>
<li><font color="#ff9800">musicDiscStrad</font>: ItemType</li>
<li><font color="#ff9800">musicDiscWait</font>: ItemType</li>
<li><font color="#ff9800">musicDiscWard</font>: ItemType</li>
<li><font color="#ff9800">mutton</font>: ItemType</li>
<li><font color="#ff9800">mycelium</font>: ItemType</li>
<li><font color="#ff9800">nameTag</font>: ItemType</li>
<li><font color="#ff9800">nautilusShell</font>: ItemType</li>
<li><font color="#ff9800">netherbrick</font>: ItemType</li>
<li><font color="#ff9800">netherBrick</font>: ItemType</li>
<li><font color="#ff9800">netherBrickFence</font>: ItemType</li>
<li><font color="#ff9800">netherBrickStairs</font>: ItemType</li>
<li><font color="#ff9800">netherGoldOre</font>: ItemType</li>
<li><font color="#ff9800">netheriteAxe</font>: ItemType</li>
<li><font color="#ff9800">netheriteBlock</font>: ItemType</li>
<li><font color="#ff9800">netheriteBoots</font>: ItemType</li>
<li><font color="#ff9800">netheriteChestplate</font>: ItemType</li>
<li><font color="#ff9800">netheriteHelmet</font>: ItemType</li>
<li><font color="#ff9800">netheriteHoe</font>: ItemType</li>
<li><font color="#ff9800">netheriteIngot</font>: ItemType</li>
<li><font color="#ff9800">netheriteLeggings</font>: ItemType</li>
<li><font color="#ff9800">netheritePickaxe</font>: ItemType</li>
<li><font color="#ff9800">netheriteScrap</font>: ItemType</li>
<li><font color="#ff9800">netheriteShovel</font>: ItemType</li>
<li><font color="#ff9800">netheriteSword</font>: ItemType</li>
<li><font color="#ff9800">netherrack</font>: ItemType</li>
<li><font color="#ff9800">netherreactor</font>: ItemType</li>
<li><font color="#ff9800">netherSprouts</font>: ItemType</li>
<li><font color="#ff9800">netherStar</font>: ItemType</li>
<li><font color="#ff9800">netherWart</font>: ItemType</li>
<li><font color="#ff9800">netherWartBlock</font>: ItemType</li>
<li><font color="#ff9800">normalStoneStairs</font>: ItemType</li>
<li><font color="#ff9800">noteblock</font>: ItemType</li>
<li><font color="#ff9800">npcSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">oakBoat</font>: ItemType</li>
<li><font color="#ff9800">oakSign</font>: ItemType</li>
<li><font color="#ff9800">oakStairs</font>: ItemType</li>
<li><font color="#ff9800">observer</font>: ItemType</li>
<li><font color="#ff9800">obsidian</font>: ItemType</li>
<li><font color="#ff9800">ocelotSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">orangeCandle</font>: ItemType</li>
<li><font color="#ff9800">orangeCandleCake</font>: ItemType</li>
<li><font color="#ff9800">orangeDye</font>: ItemType</li>
<li><font color="#ff9800">orangeGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">oxidizedCopper</font>: ItemType</li>
<li><font color="#ff9800">oxidizedCutCopper</font>: ItemType</li>
<li><font color="#ff9800">oxidizedCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">oxidizedCutCopperStairs</font>: ItemType</li>
<li><font color="#ff9800">oxidizedDoubleCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">packedIce</font>: ItemType</li>
<li><font color="#ff9800">painting</font>: ItemType</li>
<li><font color="#ff9800">pandaSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">paper</font>: ItemType</li>
<li><font color="#ff9800">parrotSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">phantomMembrane</font>: ItemType</li>
<li><font color="#ff9800">phantomSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">piglinBannerPattern</font>: ItemType</li>
<li><font color="#ff9800">piglinBruteSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">piglinSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">pigSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">pillagerSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">pinkCandle</font>: ItemType</li>
<li><font color="#ff9800">pinkCandleCake</font>: ItemType</li>
<li><font color="#ff9800">pinkDye</font>: ItemType</li>
<li><font color="#ff9800">pinkGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">piston</font>: ItemType</li>
<li><font color="#ff9800">pistonarmcollision</font>: ItemType</li>
<li><font color="#ff9800">planks</font>: ItemType</li>
<li><font color="#ff9800">podzol</font>: ItemType</li>
<li><font color="#ff9800">pointedDripstone</font>: ItemType</li>
<li><font color="#ff9800">poisonousPotato</font>: ItemType</li>
<li><font color="#ff9800">polarBearSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">polishedAndesiteStairs</font>: ItemType</li>
<li><font color="#ff9800">polishedBasalt</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstone</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneBrickDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneBricks</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneBrickSlab</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneBrickStairs</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneBrickWall</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneButton</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstonePressurePlate</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneSlab</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneStairs</font>: ItemType</li>
<li><font color="#ff9800">polishedBlackstoneWall</font>: ItemType</li>
<li><font color="#ff9800">polishedDeepslate</font>: ItemType</li>
<li><font color="#ff9800">polishedDeepslateDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">polishedDeepslateSlab</font>: ItemType</li>
<li><font color="#ff9800">polishedDeepslateStairs</font>: ItemType</li>
<li><font color="#ff9800">polishedDeepslateWall</font>: ItemType</li>
<li><font color="#ff9800">polishedDioriteStairs</font>: ItemType</li>
<li><font color="#ff9800">polishedGraniteStairs</font>: ItemType</li>
<li><font color="#ff9800">poppedChorusFruit</font>: ItemType</li>
<li><font color="#ff9800">porkchop</font>: ItemType</li>
<li><font color="#ff9800">portal</font>: ItemType</li>
<li><font color="#ff9800">potato</font>: ItemType</li>
<li><font color="#ff9800">potatoes</font>: ItemType</li>
<li><font color="#ff9800">potion</font>: ItemType</li>
<li><font color="#ff9800">powderSnow</font>: ItemType</li>
<li><font color="#ff9800">powderSnowBucket</font>: ItemType</li>
<li><font color="#ff9800">poweredComparator</font>: ItemType</li>
<li><font color="#ff9800">poweredRepeater</font>: ItemType</li>
<li><font color="#ff9800">prismarine</font>: ItemType</li>
<li><font color="#ff9800">prismarineBricksStairs</font>: ItemType</li>
<li><font color="#ff9800">prismarineCrystals</font>: ItemType</li>
<li><font color="#ff9800">prismarineShard</font>: ItemType</li>
<li><font color="#ff9800">prismarineStairs</font>: ItemType</li>
<li><font color="#ff9800">pufferfish</font>: ItemType</li>
<li><font color="#ff9800">pufferfishBucket</font>: ItemType</li>
<li><font color="#ff9800">pufferfishSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">pumpkin</font>: ItemType</li>
<li><font color="#ff9800">pumpkinPie</font>: ItemType</li>
<li><font color="#ff9800">pumpkinSeeds</font>: ItemType</li>
<li><font color="#ff9800">pumpkinStem</font>: ItemType</li>
<li><font color="#ff9800">purpleCandle</font>: ItemType</li>
<li><font color="#ff9800">purpleCandleCake</font>: ItemType</li>
<li><font color="#ff9800">purpleDye</font>: ItemType</li>
<li><font color="#ff9800">purpleGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">purpurBlock</font>: ItemType</li>
<li><font color="#ff9800">purpurStairs</font>: ItemType</li>
<li><font color="#ff9800">quartz</font>: ItemType</li>
<li><font color="#ff9800">quartzBlock</font>: ItemType</li>
<li><font color="#ff9800">quartzBricks</font>: ItemType</li>
<li><font color="#ff9800">quartzOre</font>: ItemType</li>
<li><font color="#ff9800">quartzStairs</font>: ItemType</li>
<li><font color="#ff9800">rabbit</font>: ItemType</li>
<li><font color="#ff9800">rabbitFoot</font>: ItemType</li>
<li><font color="#ff9800">rabbitHide</font>: ItemType</li>
<li><font color="#ff9800">rabbitSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">rabbitStew</font>: ItemType</li>
<li><font color="#ff9800">rail</font>: ItemType</li>
<li><font color="#ff9800">rapidFertilizer</font>: ItemType</li>
<li><font color="#ff9800">ravagerSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">rawCopper</font>: ItemType</li>
<li><font color="#ff9800">rawCopperBlock</font>: ItemType</li>
<li><font color="#ff9800">rawGold</font>: ItemType</li>
<li><font color="#ff9800">rawGoldBlock</font>: ItemType</li>
<li><font color="#ff9800">rawIron</font>: ItemType</li>
<li><font color="#ff9800">rawIronBlock</font>: ItemType</li>
<li><font color="#ff9800">realDoubleStoneSlab</font>: ItemType</li>
<li><font color="#ff9800">realDoubleStoneSlab2</font>: ItemType</li>
<li><font color="#ff9800">realDoubleStoneSlab3</font>: ItemType</li>
<li><font color="#ff9800">realDoubleStoneSlab4</font>: ItemType</li>
<li><font color="#ff9800">redCandle</font>: ItemType</li>
<li><font color="#ff9800">redCandleCake</font>: ItemType</li>
<li><font color="#ff9800">redDye</font>: ItemType</li>
<li><font color="#ff9800">redFlower</font>: ItemType</li>
<li><font color="#ff9800">redGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">redMushroom</font>: ItemType</li>
<li><font color="#ff9800">redMushroomBlock</font>: ItemType</li>
<li><font color="#ff9800">redNetherBrick</font>: ItemType</li>
<li><font color="#ff9800">redNetherBrickStairs</font>: ItemType</li>
<li><font color="#ff9800">redSandstone</font>: ItemType</li>
<li><font color="#ff9800">redSandstoneStairs</font>: ItemType</li>
<li><font color="#ff9800">redstone</font>: ItemType</li>
<li><font color="#ff9800">redstoneBlock</font>: ItemType</li>
<li><font color="#ff9800">redstoneLamp</font>: ItemType</li>
<li><font color="#ff9800">redstoneOre</font>: ItemType</li>
<li><font color="#ff9800">redstoneTorch</font>: ItemType</li>
<li><font color="#ff9800">redstoneWire</font>: ItemType</li>
<li><font color="#ff9800">repeater</font>: ItemType</li>
<li><font color="#ff9800">repeatingCommandBlock</font>: ItemType</li>
<li><font color="#ff9800">reserved6</font>: ItemType</li>
<li><font color="#ff9800">respawnAnchor</font>: ItemType</li>
<li><font color="#ff9800">rottenFlesh</font>: ItemType</li>
<li><font color="#ff9800">saddle</font>: ItemType</li>
<li><font color="#ff9800">salmon</font>: ItemType</li>
<li><font color="#ff9800">salmonBucket</font>: ItemType</li>
<li><font color="#ff9800">salmonSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">sand</font>: ItemType</li>
<li><font color="#ff9800">sandstone</font>: ItemType</li>
<li><font color="#ff9800">sandstoneStairs</font>: ItemType</li>
<li><font color="#ff9800">sapling</font>: ItemType</li>
<li><font color="#ff9800">scaffolding</font>: ItemType</li>
<li><font color="#ff9800">sculkSensor</font>: ItemType</li>
<li><font color="#ff9800">scute</font>: ItemType</li>
<li><font color="#ff9800">seagrass</font>: ItemType</li>
<li><font color="#ff9800">sealantern</font>: ItemType</li>
<li><font color="#ff9800">seaPickle</font>: ItemType</li>
<li><font color="#ff9800">shears</font>: ItemType</li>
<li><font color="#ff9800">sheepSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">shield</font>: ItemType</li>
<li><font color="#ff9800">shroomlight</font>: ItemType</li>
<li><font color="#ff9800">shulkerBox</font>: ItemType</li>
<li><font color="#ff9800">shulkerShell</font>: ItemType</li>
<li><font color="#ff9800">shulkerSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">silverfishSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">silverGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">skeletonHorseSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">skeletonSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">skull</font>: ItemType</li>
<li><font color="#ff9800">skullBannerPattern</font>: ItemType</li>
<li><font color="#ff9800">slime</font>: ItemType</li>
<li><font color="#ff9800">slimeBall</font>: ItemType</li>
<li><font color="#ff9800">slimeSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">smallAmethystBud</font>: ItemType</li>
<li><font color="#ff9800">smallDripleafBlock</font>: ItemType</li>
<li><font color="#ff9800">smithingTable</font>: ItemType</li>
<li><font color="#ff9800">smoker</font>: ItemType</li>
<li><font color="#ff9800">smoothBasalt</font>: ItemType</li>
<li><font color="#ff9800">smoothQuartzStairs</font>: ItemType</li>
<li><font color="#ff9800">smoothRedSandstoneStairs</font>: ItemType</li>
<li><font color="#ff9800">smoothSandstoneStairs</font>: ItemType</li>
<li><font color="#ff9800">smoothStone</font>: ItemType</li>
<li><font color="#ff9800">snow</font>: ItemType</li>
<li><font color="#ff9800">snowball</font>: ItemType</li>
<li><font color="#ff9800">snowLayer</font>: ItemType</li>
<li><font color="#ff9800">soulCampfire</font>: ItemType</li>
<li><font color="#ff9800">soulFire</font>: ItemType</li>
<li><font color="#ff9800">soulLantern</font>: ItemType</li>
<li><font color="#ff9800">soulSand</font>: ItemType</li>
<li><font color="#ff9800">soulSoil</font>: ItemType</li>
<li><font color="#ff9800">soulTorch</font>: ItemType</li>
<li><font color="#ff9800">sparkler</font>: ItemType</li>
<li><font color="#ff9800">spawnEgg</font>: ItemType</li>
<li><font color="#ff9800">spiderEye</font>: ItemType</li>
<li><font color="#ff9800">spiderSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">splashPotion</font>: ItemType</li>
<li><font color="#ff9800">sponge</font>: ItemType</li>
<li><font color="#ff9800">sporeBlossom</font>: ItemType</li>
<li><font color="#ff9800">spruceBoat</font>: ItemType</li>
<li><font color="#ff9800">spruceButton</font>: ItemType</li>
<li><font color="#ff9800">spruceDoor</font>: ItemType</li>
<li><font color="#ff9800">spruceFenceGate</font>: ItemType</li>
<li><font color="#ff9800">sprucePressurePlate</font>: ItemType</li>
<li><font color="#ff9800">spruceSign</font>: ItemType</li>
<li><font color="#ff9800">spruceStairs</font>: ItemType</li>
<li><font color="#ff9800">spruceStandingSign</font>: ItemType</li>
<li><font color="#ff9800">spruceTrapdoor</font>: ItemType</li>
<li><font color="#ff9800">spruceWallSign</font>: ItemType</li>
<li><font color="#ff9800">spyglass</font>: ItemType</li>
<li><font color="#ff9800">squidSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">stainedGlass</font>: ItemType</li>
<li><font color="#ff9800">stainedGlassPane</font>: ItemType</li>
<li><font color="#ff9800">stainedHardenedClay</font>: ItemType</li>
<li><font color="#ff9800">standingBanner</font>: ItemType</li>
<li><font color="#ff9800">standingSign</font>: ItemType</li>
<li><font color="#ff9800">stick</font>: ItemType</li>
<li><font color="#ff9800">stickyPiston</font>: ItemType</li>
<li><font color="#ff9800">stickypistonarmcollision</font>: ItemType</li>
<li><font color="#ff9800">stone</font>: ItemType</li>
<li><font color="#ff9800">stoneAxe</font>: ItemType</li>
<li><font color="#ff9800">stonebrick</font>: ItemType</li>
<li><font color="#ff9800">stoneBrickStairs</font>: ItemType</li>
<li><font color="#ff9800">stoneButton</font>: ItemType</li>
<li><font color="#ff9800">stonecutter</font>: ItemType</li>
<li><font color="#ff9800">stonecutterBlock</font>: ItemType</li>
<li><font color="#ff9800">stoneHoe</font>: ItemType</li>
<li><font color="#ff9800">stonePickaxe</font>: ItemType</li>
<li><font color="#ff9800">stonePressurePlate</font>: ItemType</li>
<li><font color="#ff9800">stoneShovel</font>: ItemType</li>
<li><font color="#ff9800">stoneStairs</font>: ItemType</li>
<li><font color="#ff9800">stoneSword</font>: ItemType</li>
<li><font color="#ff9800">straySpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">striderSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">string</font>: ItemType</li>
<li><font color="#ff9800">strippedAcaciaLog</font>: ItemType</li>
<li><font color="#ff9800">strippedBirchLog</font>: ItemType</li>
<li><font color="#ff9800">strippedCrimsonHyphae</font>: ItemType</li>
<li><font color="#ff9800">strippedCrimsonStem</font>: ItemType</li>
<li><font color="#ff9800">strippedDarkOakLog</font>: ItemType</li>
<li><font color="#ff9800">strippedJungleLog</font>: ItemType</li>
<li><font color="#ff9800">strippedOakLog</font>: ItemType</li>
<li><font color="#ff9800">strippedSpruceLog</font>: ItemType</li>
<li><font color="#ff9800">strippedWarpedHyphae</font>: ItemType</li>
<li><font color="#ff9800">strippedWarpedStem</font>: ItemType</li>
<li><font color="#ff9800">structureBlock</font>: ItemType</li>
<li><font color="#ff9800">structureVoid</font>: ItemType</li>
<li><font color="#ff9800">sugar</font>: ItemType</li>
<li><font color="#ff9800">sugarCane</font>: ItemType</li>
<li><font color="#ff9800">suspiciousStew</font>: ItemType</li>
<li><font color="#ff9800">sweetBerries</font>: ItemType</li>
<li><font color="#ff9800">sweetBerryBush</font>: ItemType</li>
<li><font color="#ff9800">tallgrass</font>: ItemType</li>
<li><font color="#ff9800">target</font>: ItemType</li>
<li><font color="#ff9800">tintedGlass</font>: ItemType</li>
<li><font color="#ff9800">tnt</font>: ItemType</li>
<li><font color="#ff9800">tntMinecart</font>: ItemType</li>
<li><font color="#ff9800">torch</font>: ItemType</li>
<li><font color="#ff9800">totemOfUndying</font>: ItemType</li>
<li><font color="#ff9800">trapdoor</font>: ItemType</li>
<li><font color="#ff9800">trappedChest</font>: ItemType</li>
<li><font color="#ff9800">trident</font>: ItemType</li>
<li><font color="#ff9800">tripwire</font>: ItemType</li>
<li><font color="#ff9800">tripwireHook</font>: ItemType</li>
<li><font color="#ff9800">tropicalFish</font>: ItemType</li>
<li><font color="#ff9800">tropicalFishBucket</font>: ItemType</li>
<li><font color="#ff9800">tropicalFishSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">tuff</font>: ItemType</li>
<li><font color="#ff9800">turtleEgg</font>: ItemType</li>
<li><font color="#ff9800">turtleHelmet</font>: ItemType</li>
<li><font color="#ff9800">turtleSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">twistingVines</font>: ItemType</li>
<li><font color="#ff9800">underwaterTorch</font>: ItemType</li>
<li><font color="#ff9800">undyedShulkerBox</font>: ItemType</li>
<li><font color="#ff9800">unknown</font>: ItemType</li>
<li><font color="#ff9800">unlitRedstoneTorch</font>: ItemType</li>
<li><font color="#ff9800">unpoweredComparator</font>: ItemType</li>
<li><font color="#ff9800">unpoweredRepeater</font>: ItemType</li>
<li><font color="#ff9800">vexSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">villagerSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">vindicatorSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">vine</font>: ItemType</li>
<li><font color="#ff9800">wallBanner</font>: ItemType</li>
<li><font color="#ff9800">wallSign</font>: ItemType</li>
<li><font color="#ff9800">wanderingTraderSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">warpedButton</font>: ItemType</li>
<li><font color="#ff9800">warpedDoor</font>: ItemType</li>
<li><font color="#ff9800">warpedDoubleSlab</font>: ItemType</li>
<li><font color="#ff9800">warpedFence</font>: ItemType</li>
<li><font color="#ff9800">warpedFenceGate</font>: ItemType</li>
<li><font color="#ff9800">warpedFungus</font>: ItemType</li>
<li><font color="#ff9800">warpedFungusOnAStick</font>: ItemType</li>
<li><font color="#ff9800">warpedHyphae</font>: ItemType</li>
<li><font color="#ff9800">warpedNylium</font>: ItemType</li>
<li><font color="#ff9800">warpedPlanks</font>: ItemType</li>
<li><font color="#ff9800">warpedPressurePlate</font>: ItemType</li>
<li><font color="#ff9800">warpedRoots</font>: ItemType</li>
<li><font color="#ff9800">warpedSign</font>: ItemType</li>
<li><font color="#ff9800">warpedSlab</font>: ItemType</li>
<li><font color="#ff9800">warpedStairs</font>: ItemType</li>
<li><font color="#ff9800">warpedStandingSign</font>: ItemType</li>
<li><font color="#ff9800">warpedStem</font>: ItemType</li>
<li><font color="#ff9800">warpedTrapdoor</font>: ItemType</li>
<li><font color="#ff9800">warpedWallSign</font>: ItemType</li>
<li><font color="#ff9800">warpedWartBlock</font>: ItemType</li>
<li><font color="#ff9800">water</font>: ItemType</li>
<li><font color="#ff9800">waterBucket</font>: ItemType</li>
<li><font color="#ff9800">waterlily</font>: ItemType</li>
<li><font color="#ff9800">waxedCopper</font>: ItemType</li>
<li><font color="#ff9800">waxedCutCopper</font>: ItemType</li>
<li><font color="#ff9800">waxedCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">waxedCutCopperStairs</font>: ItemType</li>
<li><font color="#ff9800">waxedDoubleCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">waxedExposedCopper</font>: ItemType</li>
<li><font color="#ff9800">waxedExposedCutCopper</font>: ItemType</li>
<li><font color="#ff9800">waxedExposedCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">waxedExposedCutCopperStairs</font>: ItemType</li>
<li><font color="#ff9800">waxedExposedDoubleCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">waxedOxidizedCopper</font>: ItemType</li>
<li><font color="#ff9800">waxedOxidizedCutCopper</font>: ItemType</li>
<li><font color="#ff9800">waxedOxidizedCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">waxedOxidizedCutCopperStairs</font>: ItemType</li>
<li><font color="#ff9800">waxedOxidizedDoubleCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">waxedWeatheredCopper</font>: ItemType</li>
<li><font color="#ff9800">waxedWeatheredCutCopper</font>: ItemType</li>
<li><font color="#ff9800">waxedWeatheredCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">waxedWeatheredCutCopperStairs</font>: ItemType</li>
<li><font color="#ff9800">waxedWeatheredDoubleCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">weatheredCopper</font>: ItemType</li>
<li><font color="#ff9800">weatheredCutCopper</font>: ItemType</li>
<li><font color="#ff9800">weatheredCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">weatheredCutCopperStairs</font>: ItemType</li>
<li><font color="#ff9800">weatheredDoubleCutCopperSlab</font>: ItemType</li>
<li><font color="#ff9800">web</font>: ItemType</li>
<li><font color="#ff9800">weepingVines</font>: ItemType</li>
<li><font color="#ff9800">wheat</font>: ItemType</li>
<li><font color="#ff9800">wheatSeeds</font>: ItemType</li>
<li><font color="#ff9800">whiteCandle</font>: ItemType</li>
<li><font color="#ff9800">whiteCandleCake</font>: ItemType</li>
<li><font color="#ff9800">whiteDye</font>: ItemType</li>
<li><font color="#ff9800">whiteGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">witchSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">witherRose</font>: ItemType</li>
<li><font color="#ff9800">witherSkeletonSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">wolfSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">wood</font>: ItemType</li>
<li><font color="#ff9800">woodenAxe</font>: ItemType</li>
<li><font color="#ff9800">woodenButton</font>: ItemType</li>
<li><font color="#ff9800">woodenDoor</font>: ItemType</li>
<li><font color="#ff9800">woodenHoe</font>: ItemType</li>
<li><font color="#ff9800">woodenPickaxe</font>: ItemType</li>
<li><font color="#ff9800">woodenPressurePlate</font>: ItemType</li>
<li><font color="#ff9800">woodenShovel</font>: ItemType</li>
<li><font color="#ff9800">woodenSlab</font>: ItemType</li>
<li><font color="#ff9800">woodenSword</font>: ItemType</li>
<li><font color="#ff9800">wool</font>: ItemType</li>
<li><font color="#ff9800">writableBook</font>: ItemType</li>
<li><font color="#ff9800">writtenBook</font>: ItemType</li>
<li><font color="#ff9800">yellowCandle</font>: ItemType</li>
<li><font color="#ff9800">yellowCandleCake</font>: ItemType</li>
<li><font color="#ff9800">yellowDye</font>: ItemType</li>
<li><font color="#ff9800">yellowFlower</font>: ItemType</li>
<li><font color="#ff9800">yellowGlazedTerracotta</font>: ItemType</li>
<li><font color="#ff9800">zoglinSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">zombieHorseSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">zombiePigmanSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">zombieSpawnEgg</font>: ItemType</li>
<li><font color="#ff9800">zombieVillagerSpawnEgg</font>: ItemType</li>
</ul>
</details>

<details>
<summary>ItemStack</summary>
<ul> 
<li><font color="#ff9800">amount</font>: number</li>
<li><font color="#ff9800">data</font>: number</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ffc107">constructor</font>(itemType: ItemType, amount: number, data: number)</li>
</ul>
</details>

<details>
<summary>ItemType</summary>
<ul> 
<li><font color="#ffc107">getName</font>(): string</li>
</ul>
</details>

<details>
<summary>LavaMovement</summary>
<ul> 
<li><font color="#ff9800">current</font>: number</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">value</font>: number</li>
<li><font color="#ffc107">resetToDefaultValue</font>(): void</li>
<li><font color="#ffc107">resetToMaxValue</font>(): void</li>
<li><font color="#ffc107">resetToMinValue</font>(): void</li>
<li><font color="#ffc107">setCurrent</font>(): void</li>
</ul>
</details>

<details>
<summary>Leashable</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">softDistance</font>: number</li>
<li><font color="#ffc107">leash</font>(leashHolder: Entity): void</li>
<li><font color="#ffc107">unleash</font>(): void</li>
</ul>
</details>

<details>
<summary>Location</summary>
<ul> 
<li><font color="#ff9800">x</font>: number</li>
<li><font color="#ff9800">y</font>: number</li>
<li><font color="#ff9800">z</font>: number</li>
<li><font color="#ffc107">constructor</font>(x: number, y: number, z: number)</li>
<li><font color="#ffc107">equals</font>(other: Location): boolean</li>
<li><font color="#ffc107">isNear</font>(other: Location, epsilon: number): boolean</li>
</ul>
</details>

<details>
<summary>MountTaming</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ffc107">setTamed</font>(showParticles: boolean): void</li>
</ul>
</details>

<details>
<summary>Movement</summary>
<ul> 
<li><font color="#ff9800">current</font>: number</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">value</font>: number</li>
<li><font color="#ffc107">resetToDefaultValue</font>(): void</li>
<li><font color="#ffc107">resetToMaxValue</font>(): void</li>
<li><font color="#ffc107">resetToMinValue</font>(): void</li>
<li><font color="#ffc107">setCurrent</font>(): void</li>
</ul>
</details>

<details>
<summary>MovementAmphibious</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
</ul>
</details>

<details>
<summary>MovementBasic</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
</ul>
</details>

<details>
<summary>MovementFly</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
</ul>
</details>

<details>
<summary>MovementGeneric</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
</ul>
</details>

<details>
<summary>MovementGlide</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
<li><font color="#ff9800">speedWhenTurning</font>: number</li>
<li><font color="#ff9800">startSpeed</font>: number</li>
</ul>
</details>

<details>
<summary>MovementHover</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
</ul>
</details>

<details>
<summary>MovementJump</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
</ul>
</details>

<details>
<summary>MovementSkip</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
</ul>
</details>

<details>
<summary>MovementSway</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">maxTurn</font>: number</li>
<li><font color="#ff9800">swayAmplitude</font>: number</li>
<li><font color="#ff9800">swayFrequency</font>: number</li>
</ul>
</details>

<details>
<summary>NavigationClimb</summary>
<ul> 
<li><font color="#ff9800">avoidDamageBlocks</font>: boolean</li>
<li><font color="#ff9800">avoidPortals</font>: boolean</li>
<li><font color="#ff9800">avoidSun</font>: boolean</li>
<li><font color="#ff9800">avoidWater</font>: boolean</li>
<li><font color="#ff9800">canBreach</font>: boolean</li>
<li><font color="#ff9800">canBreakDoors</font>: boolean</li>
<li><font color="#ff9800">canFloat</font>: boolean</li>
<li><font color="#ff9800">canJump</font>: boolean</li>
<li><font color="#ff9800">canOpenDoors</font>: boolean</li>
<li><font color="#ff9800">canOpenIronDoors</font>: boolean</li>
<li><font color="#ff9800">canPassDoors</font>: boolean</li>
<li><font color="#ff9800">canPathFromAir</font>: boolean</li>
<li><font color="#ff9800">canPathOverLava</font>: boolean</li>
<li><font color="#ff9800">canPathOverWater</font>: boolean</li>
<li><font color="#ff9800">canSink</font>: boolean</li>
<li><font color="#ff9800">canSwim</font>: boolean</li>
<li><font color="#ff9800">canWalk</font>: boolean</li>
<li><font color="#ff9800">canWalkInLava</font>: boolean</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">isAmphibious</font>: boolean</li>
</ul>
</details>

<details>
<summary>NavigationFloat</summary>
<ul> 
<li><font color="#ff9800">avoidDamageBlocks</font>: boolean</li>
<li><font color="#ff9800">avoidPortals</font>: boolean</li>
<li><font color="#ff9800">avoidSun</font>: boolean</li>
<li><font color="#ff9800">avoidWater</font>: boolean</li>
<li><font color="#ff9800">canBreach</font>: boolean</li>
<li><font color="#ff9800">canBreakDoors</font>: boolean</li>
<li><font color="#ff9800">canFloat</font>: boolean</li>
<li><font color="#ff9800">canJump</font>: boolean</li>
<li><font color="#ff9800">canOpenDoors</font>: boolean</li>
<li><font color="#ff9800">canOpenIronDoors</font>: boolean</li>
<li><font color="#ff9800">canPassDoors</font>: boolean</li>
<li><font color="#ff9800">canPathFromAir</font>: boolean</li>
<li><font color="#ff9800">canPathOverLava</font>: boolean</li>
<li><font color="#ff9800">canPathOverWater</font>: boolean</li>
<li><font color="#ff9800">canSink</font>: boolean</li>
<li><font color="#ff9800">canSwim</font>: boolean</li>
<li><font color="#ff9800">canWalk</font>: boolean</li>
<li><font color="#ff9800">canWalkInLava</font>: boolean</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">isAmphibious</font>: boolean</li>
</ul>
</details>

<details>
<summary>NavigationFly</summary>
<ul> 
<li><font color="#ff9800">avoidDamageBlocks</font>: boolean</li>
<li><font color="#ff9800">avoidPortals</font>: boolean</li>
<li><font color="#ff9800">avoidSun</font>: boolean</li>
<li><font color="#ff9800">avoidWater</font>: boolean</li>
<li><font color="#ff9800">canBreach</font>: boolean</li>
<li><font color="#ff9800">canBreakDoors</font>: boolean</li>
<li><font color="#ff9800">canFloat</font>: boolean</li>
<li><font color="#ff9800">canJump</font>: boolean</li>
<li><font color="#ff9800">canOpenDoors</font>: boolean</li>
<li><font color="#ff9800">canOpenIronDoors</font>: boolean</li>
<li><font color="#ff9800">canPassDoors</font>: boolean</li>
<li><font color="#ff9800">canPathFromAir</font>: boolean</li>
<li><font color="#ff9800">canPathOverLava</font>: boolean</li>
<li><font color="#ff9800">canPathOverWater</font>: boolean</li>
<li><font color="#ff9800">canSink</font>: boolean</li>
<li><font color="#ff9800">canSwim</font>: boolean</li>
<li><font color="#ff9800">canWalk</font>: boolean</li>
<li><font color="#ff9800">canWalkInLava</font>: boolean</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">isAmphibious</font>: boolean</li>
</ul>
</details>

<details>
<summary>NavigationGeneric</summary>
<ul> 
<li><font color="#ff9800">avoidDamageBlocks</font>: boolean</li>
<li><font color="#ff9800">avoidPortals</font>: boolean</li>
<li><font color="#ff9800">avoidSun</font>: boolean</li>
<li><font color="#ff9800">avoidWater</font>: boolean</li>
<li><font color="#ff9800">canBreach</font>: boolean</li>
<li><font color="#ff9800">canBreakDoors</font>: boolean</li>
<li><font color="#ff9800">canFloat</font>: boolean</li>
<li><font color="#ff9800">canJump</font>: boolean</li>
<li><font color="#ff9800">canOpenDoors</font>: boolean</li>
<li><font color="#ff9800">canOpenIronDoors</font>: boolean</li>
<li><font color="#ff9800">canPassDoors</font>: boolean</li>
<li><font color="#ff9800">canPathFromAir</font>: boolean</li>
<li><font color="#ff9800">canPathOverLava</font>: boolean</li>
<li><font color="#ff9800">canPathOverWater</font>: boolean</li>
<li><font color="#ff9800">canSink</font>: boolean</li>
<li><font color="#ff9800">canSwim</font>: boolean</li>
<li><font color="#ff9800">canWalk</font>: boolean</li>
<li><font color="#ff9800">canWalkInLava</font>: boolean</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">isAmphibious</font>: boolean</li>
</ul>
</details>

<details>
<summary>NavigationHover</summary>
<ul> 
<li><font color="#ff9800">avoidDamageBlocks</font>: boolean</li>
<li><font color="#ff9800">avoidPortals</font>: boolean</li>
<li><font color="#ff9800">avoidSun</font>: boolean</li>
<li><font color="#ff9800">avoidWater</font>: boolean</li>
<li><font color="#ff9800">canBreach</font>: boolean</li>
<li><font color="#ff9800">canBreakDoors</font>: boolean</li>
<li><font color="#ff9800">canFloat</font>: boolean</li>
<li><font color="#ff9800">canJump</font>: boolean</li>
<li><font color="#ff9800">canOpenDoors</font>: boolean</li>
<li><font color="#ff9800">canOpenIronDoors</font>: boolean</li>
<li><font color="#ff9800">canPassDoors</font>: boolean</li>
<li><font color="#ff9800">canPathFromAir</font>: boolean</li>
<li><font color="#ff9800">canPathOverLava</font>: boolean</li>
<li><font color="#ff9800">canPathOverWater</font>: boolean</li>
<li><font color="#ff9800">canSink</font>: boolean</li>
<li><font color="#ff9800">canSwim</font>: boolean</li>
<li><font color="#ff9800">canWalk</font>: boolean</li>
<li><font color="#ff9800">canWalkInLava</font>: boolean</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">isAmphibious</font>: boolean</li>
</ul>
</details>

<details>
<summary>NavigationWalk</summary>
<ul> 
<li><font color="#ff9800">avoidDamageBlocks</font>: boolean</li>
<li><font color="#ff9800">avoidPortals</font>: boolean</li>
<li><font color="#ff9800">avoidSun</font>: boolean</li>
<li><font color="#ff9800">avoidWater</font>: boolean</li>
<li><font color="#ff9800">canBreach</font>: boolean</li>
<li><font color="#ff9800">canBreakDoors</font>: boolean</li>
<li><font color="#ff9800">canFloat</font>: boolean</li>
<li><font color="#ff9800">canJump</font>: boolean</li>
<li><font color="#ff9800">canOpenDoors</font>: boolean</li>
<li><font color="#ff9800">canOpenIronDoors</font>: boolean</li>
<li><font color="#ff9800">canPassDoors</font>: boolean</li>
<li><font color="#ff9800">canPathFromAir</font>: boolean</li>
<li><font color="#ff9800">canPathOverLava</font>: boolean</li>
<li><font color="#ff9800">canPathOverWater</font>: boolean</li>
<li><font color="#ff9800">canSink</font>: boolean</li>
<li><font color="#ff9800">canSwim</font>: boolean</li>
<li><font color="#ff9800">canWalk</font>: boolean</li>
<li><font color="#ff9800">canWalkInLava</font>: boolean</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">isAmphibious</font>: boolean</li>
</ul>
</details>

<details>
<summary>Player</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">isSneaking</font>: boolean</li>
<li><font color="#ff9800">location</font>: Location</li>
<li><font color="#ff9800">name</font>: string</li>
<li><font color="#ff9800">nameTag</font>: string</li>
<li><font color="#ff9800">velocity</font>: Location</li>
<li><font color="#ffc107">addEffect</font>(effectType: EffectType, duration: number, amplifier: number): void</li>
<li><font color="#ffc107">getComponent</font>(componentId: string): any</li>
<li><font color="#ffc107">getComponents</font>(): Array<any></li>
<li><font color="#ffc107">getEffect</font>(effectType: EffectType): Effect</li>
<li><font color="#ffc107">hasComponent</font>(componentId: string): boolean</li>
<li><font color="#ffc107">kill</font>(): void</li>
<li><font color="#ffc107">triggerEvent</font>(eventName: string): void</li>
</ul>
</details>

<details>
<summary>Rideable</summary>
<ul> 
<li><font color="#ff9800">controllingSeat</font>: number</li>
<li><font color="#ff9800">crouchingSkipInteract</font>: boolean</li>
<li><font color="#ff9800">familyTypes</font>: Array<any></li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">interactText</font>: string</li>
<li><font color="#ff9800">pullInEntities</font>: boolean</li>
<li><font color="#ff9800">riderCanInteract</font>: boolean</li>
<li><font color="#ff9800">seatCount</font>: number</li>
<li><font color="#ff9800">seats</font>: Array<Seat></li>
<li><font color="#ffc107">addRider</font>(rider: Entity): boolean</li>
<li><font color="#ffc107">ejectRider</font>(rider: Entity): void</li>
<li><font color="#ffc107">ejectRiders</font>(): void</li>
</ul>
</details>

<details>
<summary>Seat</summary>
<ul> 
<li><font color="#ff9800">lockRiderRotation</font>: number</li>
<li><font color="#ff9800">maxRiderCount</font>: number</li>
<li><font color="#ff9800">minRiderCount</font>: number</li>
<li><font color="#ff9800">position</font>: Location</li>
</ul>
</details>

<details>
<summary>Strength</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">max</font>: number</li>
<li><font color="#ff9800">value</font>: number</li>
</ul>
</details>

<details>
<summary>StringBlockProperty</summary>
<ul> 
<li><font color="#ff9800">name</font>: string</li>
<li><font color="#ff9800">validValues</font>: Array<any></li>
<li><font color="#ff9800">value</font>: string</li>
</ul>
</details>

<details>
<summary>Tameable</summary>
<ul> 
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">probability</font>: number</li>
<li><font color="#ff9800">tameEvent</font>: Trigger</li>
<li><font color="#ff9800">tameItems</font>: Array<any></li>
<li><font color="#ffc107">tame</font>(): boolean</li>
</ul>
</details>

<details>
<summary>Trigger</summary>
<ul> 
</ul>
</details>

<details>
<summary>UnderwaterMovement</summary>
<ul> 
<li><font color="#ff9800">current</font>: number</li>
<li><font color="#ff9800">id</font>: string</li>
<li><font color="#ff9800">value</font>: number</li>
<li><font color="#ffc107">resetToDefaultValue</font>(): void</li>
<li><font color="#ffc107">resetToMaxValue</font>(): void</li>
<li><font color="#ffc107">resetToMinValue</font>(): void</li>
<li><font color="#ffc107">setCurrent</font>(): void</li>
</ul>
</details>

<details>
<summary>WeatherChangedEvent</summary>
<ul> 
<li><font color="#ff9800">dimension</font>: string</li>
<li><font color="#ff9800">lightning</font>: boolean</li>
<li><font color="#ff9800">raining</font>: boolean</li>
</ul>
</details>

<details>
<summary>World</summary>
<ul> 
<li><font color="#ff9800">events</font>: Events</li>
<li><font color="#ffc107">getDimension</font>(dimensionName: ('overworld'|'nether'|'the end')): Dimension</li>
<li><font color="#ffc107">getPlayers</font>(): Array<Player></li>
</ul>
</details>


