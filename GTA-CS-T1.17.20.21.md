## Minecraft 
<details>
<summary>ActivatePistonEvent</summary>
<ul> 
<li>isExpanding: boolean</li>
<li>piston: BlockPistonComponent</li>
</ul>
</details>

<details>
<summary>ActivatePistonEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: ActivatePistonEvent) => void): (arg: ActivatePistonEvent) => void</li>
<li>unsubscribe(callback: (arg: ActivatePistonEvent) => void): void</li>
</ul>
</details>

<details>
<summary>ActorAddEffectEvent</summary>
<ul> 
<li>effect: Effect</li>
<li>effectState: number</li>
<li>entity: Entity</li>
</ul>
</details>

<details>
<summary>AddEffectEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: ActorAddEffectEvent) => void): (arg: ActorAddEffectEvent) => void</li>
<li>unsubscribe(callback: (arg: ActorAddEffectEvent) => void): void</li>
</ul>
</details>

<details>
<summary>AddRider</summary>
<ul> 
<li>entityType: string</li>
<li>id: string</li>
<li>spawnEvent: string</li>
</ul>
</details>

<details>
<summary>Ageable</summary>
<ul> 
<li>dropItems: Array<any></li>
<li>duration: number</li>
<li>feedItems: Array<EntityDefinitionFeedItem></li>
<li>growUp: Trigger</li>
<li>id: string</li>
</ul>
</details>

<details>
<summary>BeforeActivatePistonEvent</summary>
<ul> 
<li>cancel: boolean</li>
<li>isExpanding: boolean</li>
<li>piston: BlockPistonComponent</li>
</ul>
</details>

<details>
<summary>BeforeActivatePistonEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: BeforeActivatePistonEvent) => void): (arg: BeforeActivatePistonEvent) => void</li>
<li>unsubscribe(callback: (arg: BeforeActivatePistonEvent) => void): void</li>
</ul>
</details>

<details>
<summary>BeforeChatEvent</summary>
<ul> 
<li>cancel: boolean</li>
<li>message: string</li>
<li>sender: Player</li>
<li>sendToTargets: boolean</li>
<li>targets: Array<Player></li>
</ul>
</details>

<details>
<summary>BeforeChatEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: BeforeChatEvent) => void): (arg: BeforeChatEvent) => void</li>
<li>unsubscribe(callback: (arg: BeforeChatEvent) => void): void</li>
</ul>
</details>

<details>
<summary>BeforeExplosionEvent</summary>
<ul> 
<li>cancel: boolean</li>
<li>dimension: Dimension</li>
<li>impactedBlocks: Array<BlockLocation></li>
<li>source: Entity</li>
</ul>
</details>

<details>
<summary>BeforeExplosionEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: BeforeExplosionEvent) => void): (arg: BeforeExplosionEvent) => void</li>
<li>unsubscribe(callback: (arg: BeforeExplosionEvent) => void): void</li>
</ul>
</details>

<details>
<summary>Block</summary>
<ul> 
<li>x: number</li>
<li>y: number</li>
<li>z: number</li>
<li>canBeWaterlogged(): boolean</li>
<li>getBlockData(): BlockPermutation</li>
<li>getComponent(): any</li>
<li>getDimension(): Dimension</li>
<li>getLocation(): BlockLocation</li>
<li>getTags(): Array<any></li>
<li>hasTag(): boolean</li>
<li>isEmpty(): boolean</li>
<li>isWaterlogged(): boolean</li>
<li>setPermutation(permutation: BlockPermutation): void</li>
<li>setType(): void</li>
<li>setWaterlogged(setWaterlogged: boolean): void</li>
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
<li>container: BlockInventoryComponentContainer</li>
<li>location: BlockLocation</li>
</ul>
</details>

<details>
<summary>BlockInventoryComponentContainer</summary>
<ul> 
<li>emptySlotsCount: number</li>
<li>size: number</li>
<li>addItem(itemStack: ItemStack): void</li>
<li>getItem(slot: number): ItemStack</li>
<li>setItem(slot: number, itemStack: ItemStack): void</li>
<li>swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean</li>
<li>transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean</li>
</ul>
</details>

<details>
<summary>BlockLocation</summary>
<ul> 
<li>x: number</li>
<li>y: number</li>
<li>z: number</li>
<li>above(): BlockLocation</li>
<li>blocksBetween(): Array<any></li>
<li>constructor(x: number, y: number, z: number)</li>
<li>equals(other: BlockLocation): boolean</li>
<li>offset(x: number, y: number, z: number): BlockLocation</li>
</ul>
</details>

<details>
<summary>BlockPermutation</summary>
<ul> 
<li>clone(): BlockPermutation</li>
<li>getAllProperties(): Array<any></li>
<li>getProperty(propertyName: string): any</li>
<li>getTags(): Array<any></li>
<li>getType(): BlockType</li>
<li>hasTag(tag: string): boolean</li>
</ul>
</details>

<details>
<summary>BlockPistonComponent</summary>
<ul> 
<li>attachedBlocks: Array<BlockLocation></li>
<li>isExpanded: boolean</li>
<li>isExpanding: boolean</li>
<li>isMoving: boolean</li>
<li>isRetracted: boolean</li>
<li>isRetracting: boolean</li>
<li>location: BlockLocation</li>
</ul>
</details>

<details>
<summary>BlockProperties</summary>
<ul> 
<li>age: string</li>
<li>ageBit: string</li>
<li>allowUnderwaterBit: string</li>
<li>attachedBit: string</li>
<li>attachment: string</li>
<li>bambooLeafSize: string</li>
<li>bambooStalkThickness: string</li>
<li>bigDripleafHead: string</li>
<li>bigDripleafTilt: string</li>
<li>biteCounter: string</li>
<li>blockLightLevel: string</li>
<li>brewingStandSlotABit: string</li>
<li>brewingStandSlotBBit: string</li>
<li>brewingStandSlotCBit: string</li>
<li>buttonPressedBit: string</li>
<li>candles: string</li>
<li>cauldronLiquid: string</li>
<li>chemistryTableType: string</li>
<li>chiselType: string</li>
<li>clusterCount: string</li>
<li>color: string</li>
<li>colorBit: string</li>
<li>composterFillLevel: string</li>
<li>conditionalBit: string</li>
<li>coralColor: string</li>
<li>coralDirection: string</li>
<li>coralFanDirection: string</li>
<li>coralHangTypeBit: string</li>
<li>coveredBit: string</li>
<li>crackedState: string</li>
<li>damage: string</li>
<li>deadBit: string</li>
<li>deprecated: string</li>
<li>direction: string</li>
<li>dirtType: string</li>
<li>disarmedBit: string</li>
<li>doorHingeBit: string</li>
<li>doublePlantType: string</li>
<li>dragDown: string</li>
<li>dripstoneThickness: string</li>
<li>endPortalEyeBit: string</li>
<li>explodeBit: string</li>
<li>extinguished: string</li>
<li>facingDirection: string</li>
<li>fillLevel: string</li>
<li>flowerType: string</li>
<li>groundSignDirection: string</li>
<li>growingPlantAge: string</li>
<li>growth: string</li>
<li>hanging: string</li>
<li>headPieceBit: string</li>
<li>height: string</li>
<li>honeyLevel: string</li>
<li>hugeMushroomBits: string</li>
<li>infiniburnBit: string</li>
<li>inWallBit: string</li>
<li>itemFrameMapBit: string</li>
<li>kelpAge: string</li>
<li>leverDirection: string</li>
<li>liquidDepth: string</li>
<li>lit: string</li>
<li>moisturizedAmount: string</li>
<li>monsterEggStoneType: string</li>
<li>multiFaceDirectionBits: string</li>
<li>newLeafType: string</li>
<li>newLogType: string</li>
<li>noDropBit: string</li>
<li>occupiedBit: string</li>
<li>oldLeafType: string</li>
<li>oldLogType: string</li>
<li>openBit: string</li>
<li>outputLitBit: string</li>
<li>outputSubtractBit: string</li>
<li>persistentBit: string</li>
<li>pillarAxis: string</li>
<li>portalAxis: string</li>
<li>poweredBit: string</li>
<li>prismarineBlockType: string</li>
<li>railDataBit: string</li>
<li>railDirection: string</li>
<li>redstoneSignal: string</li>
<li>repeaterDelay: string</li>
<li>respawnAnchorCharge: string</li>
<li>rotation: string</li>
<li>sandStoneType: string</li>
<li>sandType: string</li>
<li>saplingType: string</li>
<li>seaGrassType: string</li>
<li>spongeType: string</li>
<li>stability: string</li>
<li>stabilityCheck: string</li>
<li>stoneBrickType: string</li>
<li>stoneSlabType: string</li>
<li>stoneSlabType2: string</li>
<li>stoneSlabType3: string</li>
<li>stoneSlabType4: string</li>
<li>stoneType: string</li>
<li>strippedBit: string</li>
<li>structureBlockType: string</li>
<li>structureVoidType: string</li>
<li>suspendedBit: string</li>
<li>tallGrassType: string</li>
<li>toggleBit: string</li>
<li>topSlotBit: string</li>
<li>torchFacingDirection: string</li>
<li>triggeredBit: string</li>
<li>turtleEggCount: string</li>
<li>twistingVinesAge: string</li>
<li>updateBit: string</li>
<li>upperBlockBit: string</li>
<li>upsideDownBit: string</li>
<li>vineDirectionBits: string</li>
<li>wallBlockType: string</li>
<li>wallConnectionTypeEast: string</li>
<li>wallConnectionTypeNorth: string</li>
<li>wallConnectionTypeSouth: string</li>
<li>wallConnectionTypeWest: string</li>
<li>wallPostBit: string</li>
<li>weepingVinesAge: string</li>
<li>weirdoDirection: string</li>
<li>woodType: string</li>
</ul>
</details>

<details>
<summary>BlockType</summary>
<ul> 
<li>canBeWaterlogged(): boolean</li>
<li>createDefaultBlockPermutation(): BlockPermutation</li>
<li>getName(): string</li>
</ul>
</details>

<details>
<summary>BlockTypes</summary>
<ul> 
<li>acaciaButton: BlockType</li>
<li>acaciaDoor: BlockType</li>
<li>acaciaFenceGate: BlockType</li>
<li>acaciaPressurePlate: BlockType</li>
<li>acaciaStairs: BlockType</li>
<li>acaciaStandingSign: BlockType</li>
<li>acaciaTrapdoor: BlockType</li>
<li>acaciaWallSign: BlockType</li>
<li>activatorRail: BlockType</li>
<li>air: BlockType</li>
<li>allow: BlockType</li>
<li>amethystBlock: BlockType</li>
<li>amethystCluster: BlockType</li>
<li>ancientDebris: BlockType</li>
<li>andesiteStairs: BlockType</li>
<li>anvil: BlockType</li>
<li>azalea: BlockType</li>
<li>azaleaLeaves: BlockType</li>
<li>azaleaLeavesFlowered: BlockType</li>
<li>bamboo: BlockType</li>
<li>bambooSapling: BlockType</li>
<li>barrel: BlockType</li>
<li>barrier: BlockType</li>
<li>basalt: BlockType</li>
<li>beacon: BlockType</li>
<li>bed: BlockType</li>
<li>bedrock: BlockType</li>
<li>beehive: BlockType</li>
<li>beeNest: BlockType</li>
<li>beetroot: BlockType</li>
<li>bell: BlockType</li>
<li>bigDripleaf: BlockType</li>
<li>birchButton: BlockType</li>
<li>birchDoor: BlockType</li>
<li>birchFenceGate: BlockType</li>
<li>birchPressurePlate: BlockType</li>
<li>birchStairs: BlockType</li>
<li>birchStandingSign: BlockType</li>
<li>birchTrapdoor: BlockType</li>
<li>birchWallSign: BlockType</li>
<li>blackCandle: BlockType</li>
<li>blackCandleCake: BlockType</li>
<li>blackGlazedTerracotta: BlockType</li>
<li>blackstone: BlockType</li>
<li>blackstoneDoubleSlab: BlockType</li>
<li>blackstoneSlab: BlockType</li>
<li>blackstoneStairs: BlockType</li>
<li>blackstoneWall: BlockType</li>
<li>blastFurnace: BlockType</li>
<li>blueCandle: BlockType</li>
<li>blueCandleCake: BlockType</li>
<li>blueGlazedTerracotta: BlockType</li>
<li>blueIce: BlockType</li>
<li>boneBlock: BlockType</li>
<li>bookshelf: BlockType</li>
<li>borderBlock: BlockType</li>
<li>brewingStand: BlockType</li>
<li>brickBlock: BlockType</li>
<li>brickStairs: BlockType</li>
<li>brownCandle: BlockType</li>
<li>brownCandleCake: BlockType</li>
<li>brownGlazedTerracotta: BlockType</li>
<li>brownMushroom: BlockType</li>
<li>brownMushroomBlock: BlockType</li>
<li>bubbleColumn: BlockType</li>
<li>buddingAmethyst: BlockType</li>
<li>cactus: BlockType</li>
<li>cake: BlockType</li>
<li>calcite: BlockType</li>
<li>camera: BlockType</li>
<li>campfire: BlockType</li>
<li>candle: BlockType</li>
<li>candleCake: BlockType</li>
<li>carpet: BlockType</li>
<li>carrots: BlockType</li>
<li>cartographyTable: BlockType</li>
<li>carvedPumpkin: BlockType</li>
<li>cauldron: BlockType</li>
<li>caveVines: BlockType</li>
<li>caveVinesBodyWithBerries: BlockType</li>
<li>caveVinesHeadWithBerries: BlockType</li>
<li>chain: BlockType</li>
<li>chainCommandBlock: BlockType</li>
<li>chemicalHeat: BlockType</li>
<li>chemistryTable: BlockType</li>
<li>chest: BlockType</li>
<li>chiseledDeepslate: BlockType</li>
<li>chiseledNetherBricks: BlockType</li>
<li>chiseledPolishedBlackstone: BlockType</li>
<li>chorusFlower: BlockType</li>
<li>chorusPlant: BlockType</li>
<li>clay: BlockType</li>
<li>coalBlock: BlockType</li>
<li>coalOre: BlockType</li>
<li>cobbledDeepslate: BlockType</li>
<li>cobbledDeepslateDoubleSlab: BlockType</li>
<li>cobbledDeepslateSlab: BlockType</li>
<li>cobbledDeepslateStairs: BlockType</li>
<li>cobbledDeepslateWall: BlockType</li>
<li>cobblestone: BlockType</li>
<li>cobblestoneWall: BlockType</li>
<li>cocoa: BlockType</li>
<li>coloredTorchBp: BlockType</li>
<li>coloredTorchRg: BlockType</li>
<li>commandBlock: BlockType</li>
<li>composter: BlockType</li>
<li>concrete: BlockType</li>
<li>concretepowder: BlockType</li>
<li>conduit: BlockType</li>
<li>copperBlock: BlockType</li>
<li>copperOre: BlockType</li>
<li>coral: BlockType</li>
<li>coralBlock: BlockType</li>
<li>coralFan: BlockType</li>
<li>coralFanDead: BlockType</li>
<li>coralFanHang: BlockType</li>
<li>coralFanHang2: BlockType</li>
<li>coralFanHang3: BlockType</li>
<li>crackedDeepslateBricks: BlockType</li>
<li>crackedDeepslateTiles: BlockType</li>
<li>crackedNetherBricks: BlockType</li>
<li>crackedPolishedBlackstoneBricks: BlockType</li>
<li>craftingTable: BlockType</li>
<li>crimsonButton: BlockType</li>
<li>crimsonDoor: BlockType</li>
<li>crimsonDoubleSlab: BlockType</li>
<li>crimsonFence: BlockType</li>
<li>crimsonFenceGate: BlockType</li>
<li>crimsonFungus: BlockType</li>
<li>crimsonHyphae: BlockType</li>
<li>crimsonNylium: BlockType</li>
<li>crimsonPlanks: BlockType</li>
<li>crimsonPressurePlate: BlockType</li>
<li>crimsonRoots: BlockType</li>
<li>crimsonSlab: BlockType</li>
<li>crimsonStairs: BlockType</li>
<li>crimsonStandingSign: BlockType</li>
<li>crimsonStem: BlockType</li>
<li>crimsonTrapdoor: BlockType</li>
<li>crimsonWallSign: BlockType</li>
<li>cryingObsidian: BlockType</li>
<li>cutCopper: BlockType</li>
<li>cutCopperSlab: BlockType</li>
<li>cutCopperStairs: BlockType</li>
<li>cyanCandle: BlockType</li>
<li>cyanCandleCake: BlockType</li>
<li>cyanGlazedTerracotta: BlockType</li>
<li>darkOakButton: BlockType</li>
<li>darkOakDoor: BlockType</li>
<li>darkOakFenceGate: BlockType</li>
<li>darkOakPressurePlate: BlockType</li>
<li>darkOakStairs: BlockType</li>
<li>darkoakStandingSign: BlockType</li>
<li>darkOakTrapdoor: BlockType</li>
<li>darkoakWallSign: BlockType</li>
<li>darkPrismarineStairs: BlockType</li>
<li>daylightDetector: BlockType</li>
<li>daylightDetectorInverted: BlockType</li>
<li>deadbush: BlockType</li>
<li>deepslate: BlockType</li>
<li>deepslateBrickDoubleSlab: BlockType</li>
<li>deepslateBricks: BlockType</li>
<li>deepslateBrickSlab: BlockType</li>
<li>deepslateBrickStairs: BlockType</li>
<li>deepslateBrickWall: BlockType</li>
<li>deepslateCoalOre: BlockType</li>
<li>deepslateCopperOre: BlockType</li>
<li>deepslateDiamondOre: BlockType</li>
<li>deepslateEmeraldOre: BlockType</li>
<li>deepslateGoldOre: BlockType</li>
<li>deepslateIronOre: BlockType</li>
<li>deepslateLapisOre: BlockType</li>
<li>deepslateRedstoneOre: BlockType</li>
<li>deepslateTileDoubleSlab: BlockType</li>
<li>deepslateTiles: BlockType</li>
<li>deepslateTileSlab: BlockType</li>
<li>deepslateTileStairs: BlockType</li>
<li>deepslateTileWall: BlockType</li>
<li>deny: BlockType</li>
<li>detectorRail: BlockType</li>
<li>diamondBlock: BlockType</li>
<li>diamondOre: BlockType</li>
<li>dioriteStairs: BlockType</li>
<li>dirt: BlockType</li>
<li>dirtWithRoots: BlockType</li>
<li>dispenser: BlockType</li>
<li>doubleCutCopperSlab: BlockType</li>
<li>doublePlant: BlockType</li>
<li>doubleStoneSlab: BlockType</li>
<li>doubleStoneSlab2: BlockType</li>
<li>doubleStoneSlab3: BlockType</li>
<li>doubleStoneSlab4: BlockType</li>
<li>doubleWoodenSlab: BlockType</li>
<li>dragonEgg: BlockType</li>
<li>driedKelpBlock: BlockType</li>
<li>dripstoneBlock: BlockType</li>
<li>dropper: BlockType</li>
<li>element0: BlockType</li>
<li>element1: BlockType</li>
<li>element10: BlockType</li>
<li>element100: BlockType</li>
<li>element101: BlockType</li>
<li>element102: BlockType</li>
<li>element103: BlockType</li>
<li>element104: BlockType</li>
<li>element105: BlockType</li>
<li>element106: BlockType</li>
<li>element107: BlockType</li>
<li>element108: BlockType</li>
<li>element109: BlockType</li>
<li>element11: BlockType</li>
<li>element110: BlockType</li>
<li>element111: BlockType</li>
<li>element112: BlockType</li>
<li>element113: BlockType</li>
<li>element114: BlockType</li>
<li>element115: BlockType</li>
<li>element116: BlockType</li>
<li>element117: BlockType</li>
<li>element118: BlockType</li>
<li>element12: BlockType</li>
<li>element13: BlockType</li>
<li>element14: BlockType</li>
<li>element15: BlockType</li>
<li>element16: BlockType</li>
<li>element17: BlockType</li>
<li>element18: BlockType</li>
<li>element19: BlockType</li>
<li>element2: BlockType</li>
<li>element20: BlockType</li>
<li>element21: BlockType</li>
<li>element22: BlockType</li>
<li>element23: BlockType</li>
<li>element24: BlockType</li>
<li>element25: BlockType</li>
<li>element26: BlockType</li>
<li>element27: BlockType</li>
<li>element28: BlockType</li>
<li>element29: BlockType</li>
<li>element3: BlockType</li>
<li>element30: BlockType</li>
<li>element31: BlockType</li>
<li>element32: BlockType</li>
<li>element33: BlockType</li>
<li>element34: BlockType</li>
<li>element35: BlockType</li>
<li>element36: BlockType</li>
<li>element37: BlockType</li>
<li>element38: BlockType</li>
<li>element39: BlockType</li>
<li>element4: BlockType</li>
<li>element40: BlockType</li>
<li>element41: BlockType</li>
<li>element42: BlockType</li>
<li>element43: BlockType</li>
<li>element44: BlockType</li>
<li>element45: BlockType</li>
<li>element46: BlockType</li>
<li>element47: BlockType</li>
<li>element48: BlockType</li>
<li>element49: BlockType</li>
<li>element5: BlockType</li>
<li>element50: BlockType</li>
<li>element51: BlockType</li>
<li>element52: BlockType</li>
<li>element53: BlockType</li>
<li>element54: BlockType</li>
<li>element55: BlockType</li>
<li>element56: BlockType</li>
<li>element57: BlockType</li>
<li>element58: BlockType</li>
<li>element59: BlockType</li>
<li>element6: BlockType</li>
<li>element60: BlockType</li>
<li>element61: BlockType</li>
<li>element62: BlockType</li>
<li>element63: BlockType</li>
<li>element64: BlockType</li>
<li>element65: BlockType</li>
<li>element66: BlockType</li>
<li>element67: BlockType</li>
<li>element68: BlockType</li>
<li>element69: BlockType</li>
<li>element7: BlockType</li>
<li>element70: BlockType</li>
<li>element71: BlockType</li>
<li>element72: BlockType</li>
<li>element73: BlockType</li>
<li>element74: BlockType</li>
<li>element75: BlockType</li>
<li>element76: BlockType</li>
<li>element77: BlockType</li>
<li>element78: BlockType</li>
<li>element79: BlockType</li>
<li>element8: BlockType</li>
<li>element80: BlockType</li>
<li>element81: BlockType</li>
<li>element82: BlockType</li>
<li>element83: BlockType</li>
<li>element84: BlockType</li>
<li>element85: BlockType</li>
<li>element86: BlockType</li>
<li>element87: BlockType</li>
<li>element88: BlockType</li>
<li>element89: BlockType</li>
<li>element9: BlockType</li>
<li>element90: BlockType</li>
<li>element91: BlockType</li>
<li>element92: BlockType</li>
<li>element93: BlockType</li>
<li>element94: BlockType</li>
<li>element95: BlockType</li>
<li>element96: BlockType</li>
<li>element97: BlockType</li>
<li>element98: BlockType</li>
<li>element99: BlockType</li>
<li>emeraldBlock: BlockType</li>
<li>emeraldOre: BlockType</li>
<li>enchantingTable: BlockType</li>
<li>endBricks: BlockType</li>
<li>endBrickStairs: BlockType</li>
<li>enderChest: BlockType</li>
<li>endGateway: BlockType</li>
<li>endPortal: BlockType</li>
<li>endPortalFrame: BlockType</li>
<li>endRod: BlockType</li>
<li>endStone: BlockType</li>
<li>exposedCopper: BlockType</li>
<li>exposedCutCopper: BlockType</li>
<li>exposedCutCopperSlab: BlockType</li>
<li>exposedCutCopperStairs: BlockType</li>
<li>exposedDoubleCutCopperSlab: BlockType</li>
<li>farmland: BlockType</li>
<li>fence: BlockType</li>
<li>fenceGate: BlockType</li>
<li>fire: BlockType</li>
<li>fletchingTable: BlockType</li>
<li>floweringAzalea: BlockType</li>
<li>flowerPot: BlockType</li>
<li>flowingLava: BlockType</li>
<li>flowingWater: BlockType</li>
<li>frame: BlockType</li>
<li>frostedIce: BlockType</li>
<li>furnace: BlockType</li>
<li>gildedBlackstone: BlockType</li>
<li>glass: BlockType</li>
<li>glassPane: BlockType</li>
<li>glowFrame: BlockType</li>
<li>glowingobsidian: BlockType</li>
<li>glowLichen: BlockType</li>
<li>glowstone: BlockType</li>
<li>goldBlock: BlockType</li>
<li>goldenRail: BlockType</li>
<li>goldOre: BlockType</li>
<li>graniteStairs: BlockType</li>
<li>grass: BlockType</li>
<li>grassPath: BlockType</li>
<li>gravel: BlockType</li>
<li>grayCandle: BlockType</li>
<li>grayCandleCake: BlockType</li>
<li>grayGlazedTerracotta: BlockType</li>
<li>greenCandle: BlockType</li>
<li>greenCandleCake: BlockType</li>
<li>greenGlazedTerracotta: BlockType</li>
<li>grindstone: BlockType</li>
<li>hangingRoots: BlockType</li>
<li>hardenedClay: BlockType</li>
<li>hardGlass: BlockType</li>
<li>hardGlassPane: BlockType</li>
<li>hardStainedGlass: BlockType</li>
<li>hardStainedGlassPane: BlockType</li>
<li>hayBlock: BlockType</li>
<li>heavyWeightedPressurePlate: BlockType</li>
<li>honeyBlock: BlockType</li>
<li>honeycombBlock: BlockType</li>
<li>hopper: BlockType</li>
<li>ice: BlockType</li>
<li>infestedDeepslate: BlockType</li>
<li>infoUpdate: BlockType</li>
<li>infoUpdate2: BlockType</li>
<li>invisiblebedrock: BlockType</li>
<li>ironBars: BlockType</li>
<li>ironBlock: BlockType</li>
<li>ironDoor: BlockType</li>
<li>ironOre: BlockType</li>
<li>ironTrapdoor: BlockType</li>
<li>jigsaw: BlockType</li>
<li>jukebox: BlockType</li>
<li>jungleButton: BlockType</li>
<li>jungleDoor: BlockType</li>
<li>jungleFenceGate: BlockType</li>
<li>junglePressurePlate: BlockType</li>
<li>jungleStairs: BlockType</li>
<li>jungleStandingSign: BlockType</li>
<li>jungleTrapdoor: BlockType</li>
<li>jungleWallSign: BlockType</li>
<li>kelp: BlockType</li>
<li>ladder: BlockType</li>
<li>lantern: BlockType</li>
<li>lapisBlock: BlockType</li>
<li>lapisOre: BlockType</li>
<li>largeAmethystBud: BlockType</li>
<li>lava: BlockType</li>
<li>lavaCauldron: BlockType</li>
<li>leaves: BlockType</li>
<li>leaves2: BlockType</li>
<li>lectern: BlockType</li>
<li>lever: BlockType</li>
<li>lightBlock: BlockType</li>
<li>lightBlueCandle: BlockType</li>
<li>lightBlueCandleCake: BlockType</li>
<li>lightBlueGlazedTerracotta: BlockType</li>
<li>lightGrayCandle: BlockType</li>
<li>lightGrayCandleCake: BlockType</li>
<li>lightningRod: BlockType</li>
<li>lightWeightedPressurePlate: BlockType</li>
<li>limeCandle: BlockType</li>
<li>limeCandleCake: BlockType</li>
<li>limeGlazedTerracotta: BlockType</li>
<li>litBlastFurnace: BlockType</li>
<li>litDeepslateRedstoneOre: BlockType</li>
<li>litFurnace: BlockType</li>
<li>litPumpkin: BlockType</li>
<li>litRedstoneLamp: BlockType</li>
<li>litRedstoneOre: BlockType</li>
<li>litSmoker: BlockType</li>
<li>lodestone: BlockType</li>
<li>log: BlockType</li>
<li>log2: BlockType</li>
<li>loom: BlockType</li>
<li>magentaCandle: BlockType</li>
<li>magentaCandleCake: BlockType</li>
<li>magentaGlazedTerracotta: BlockType</li>
<li>magma: BlockType</li>
<li>mediumAmethystBud: BlockType</li>
<li>melonBlock: BlockType</li>
<li>melonStem: BlockType</li>
<li>mobSpawner: BlockType</li>
<li>monsterEgg: BlockType</li>
<li>mossBlock: BlockType</li>
<li>mossCarpet: BlockType</li>
<li>mossyCobblestone: BlockType</li>
<li>mossyCobblestoneStairs: BlockType</li>
<li>mossyStoneBrickStairs: BlockType</li>
<li>movingblock: BlockType</li>
<li>mycelium: BlockType</li>
<li>netherBrick: BlockType</li>
<li>netherBrickFence: BlockType</li>
<li>netherBrickStairs: BlockType</li>
<li>netherGoldOre: BlockType</li>
<li>netheriteBlock: BlockType</li>
<li>netherrack: BlockType</li>
<li>netherreactor: BlockType</li>
<li>netherSprouts: BlockType</li>
<li>netherWart: BlockType</li>
<li>netherWartBlock: BlockType</li>
<li>normalStoneStairs: BlockType</li>
<li>noteblock: BlockType</li>
<li>oakStairs: BlockType</li>
<li>observer: BlockType</li>
<li>obsidian: BlockType</li>
<li>orangeCandle: BlockType</li>
<li>orangeCandleCake: BlockType</li>
<li>orangeGlazedTerracotta: BlockType</li>
<li>oxidizedCopper: BlockType</li>
<li>oxidizedCutCopper: BlockType</li>
<li>oxidizedCutCopperSlab: BlockType</li>
<li>oxidizedCutCopperStairs: BlockType</li>
<li>oxidizedDoubleCutCopperSlab: BlockType</li>
<li>packedIce: BlockType</li>
<li>pinkCandle: BlockType</li>
<li>pinkCandleCake: BlockType</li>
<li>pinkGlazedTerracotta: BlockType</li>
<li>piston: BlockType</li>
<li>pistonarmcollision: BlockType</li>
<li>planks: BlockType</li>
<li>podzol: BlockType</li>
<li>pointedDripstone: BlockType</li>
<li>polishedAndesiteStairs: BlockType</li>
<li>polishedBasalt: BlockType</li>
<li>polishedBlackstone: BlockType</li>
<li>polishedBlackstoneBrickDoubleSlab: BlockType</li>
<li>polishedBlackstoneBricks: BlockType</li>
<li>polishedBlackstoneBrickSlab: BlockType</li>
<li>polishedBlackstoneBrickStairs: BlockType</li>
<li>polishedBlackstoneBrickWall: BlockType</li>
<li>polishedBlackstoneButton: BlockType</li>
<li>polishedBlackstoneDoubleSlab: BlockType</li>
<li>polishedBlackstonePressurePlate: BlockType</li>
<li>polishedBlackstoneSlab: BlockType</li>
<li>polishedBlackstoneStairs: BlockType</li>
<li>polishedBlackstoneWall: BlockType</li>
<li>polishedDeepslate: BlockType</li>
<li>polishedDeepslateDoubleSlab: BlockType</li>
<li>polishedDeepslateSlab: BlockType</li>
<li>polishedDeepslateStairs: BlockType</li>
<li>polishedDeepslateWall: BlockType</li>
<li>polishedDioriteStairs: BlockType</li>
<li>polishedGraniteStairs: BlockType</li>
<li>portal: BlockType</li>
<li>potatoes: BlockType</li>
<li>powderSnow: BlockType</li>
<li>poweredComparator: BlockType</li>
<li>poweredRepeater: BlockType</li>
<li>prismarine: BlockType</li>
<li>prismarineBricksStairs: BlockType</li>
<li>prismarineStairs: BlockType</li>
<li>pumpkin: BlockType</li>
<li>pumpkinStem: BlockType</li>
<li>purpleCandle: BlockType</li>
<li>purpleCandleCake: BlockType</li>
<li>purpleGlazedTerracotta: BlockType</li>
<li>purpurBlock: BlockType</li>
<li>purpurStairs: BlockType</li>
<li>quartzBlock: BlockType</li>
<li>quartzBricks: BlockType</li>
<li>quartzOre: BlockType</li>
<li>quartzStairs: BlockType</li>
<li>rail: BlockType</li>
<li>rawCopperBlock: BlockType</li>
<li>rawGoldBlock: BlockType</li>
<li>rawIronBlock: BlockType</li>
<li>redCandle: BlockType</li>
<li>redCandleCake: BlockType</li>
<li>redFlower: BlockType</li>
<li>redGlazedTerracotta: BlockType</li>
<li>redMushroom: BlockType</li>
<li>redMushroomBlock: BlockType</li>
<li>redNetherBrick: BlockType</li>
<li>redNetherBrickStairs: BlockType</li>
<li>redSandstone: BlockType</li>
<li>redSandstoneStairs: BlockType</li>
<li>redstoneBlock: BlockType</li>
<li>redstoneLamp: BlockType</li>
<li>redstoneOre: BlockType</li>
<li>redstoneTorch: BlockType</li>
<li>redstoneWire: BlockType</li>
<li>reeds: BlockType</li>
<li>repeatingCommandBlock: BlockType</li>
<li>reserved6: BlockType</li>
<li>respawnAnchor: BlockType</li>
<li>sand: BlockType</li>
<li>sandstone: BlockType</li>
<li>sandstoneStairs: BlockType</li>
<li>sapling: BlockType</li>
<li>scaffolding: BlockType</li>
<li>sculkSensor: BlockType</li>
<li>seagrass: BlockType</li>
<li>sealantern: BlockType</li>
<li>seaPickle: BlockType</li>
<li>shroomlight: BlockType</li>
<li>shulkerBox: BlockType</li>
<li>silverGlazedTerracotta: BlockType</li>
<li>skull: BlockType</li>
<li>slime: BlockType</li>
<li>smallAmethystBud: BlockType</li>
<li>smallDripleafBlock: BlockType</li>
<li>smithingTable: BlockType</li>
<li>smoker: BlockType</li>
<li>smoothBasalt: BlockType</li>
<li>smoothQuartzStairs: BlockType</li>
<li>smoothRedSandstoneStairs: BlockType</li>
<li>smoothSandstoneStairs: BlockType</li>
<li>smoothStone: BlockType</li>
<li>snow: BlockType</li>
<li>snowLayer: BlockType</li>
<li>soulCampfire: BlockType</li>
<li>soulFire: BlockType</li>
<li>soulLantern: BlockType</li>
<li>soulSand: BlockType</li>
<li>soulSoil: BlockType</li>
<li>soulTorch: BlockType</li>
<li>sponge: BlockType</li>
<li>sporeBlossom: BlockType</li>
<li>spruceButton: BlockType</li>
<li>spruceDoor: BlockType</li>
<li>spruceFenceGate: BlockType</li>
<li>sprucePressurePlate: BlockType</li>
<li>spruceStairs: BlockType</li>
<li>spruceStandingSign: BlockType</li>
<li>spruceTrapdoor: BlockType</li>
<li>spruceWallSign: BlockType</li>
<li>stainedGlass: BlockType</li>
<li>stainedGlassPane: BlockType</li>
<li>stainedHardenedClay: BlockType</li>
<li>standingBanner: BlockType</li>
<li>standingSign: BlockType</li>
<li>stickyPiston: BlockType</li>
<li>stickypistonarmcollision: BlockType</li>
<li>stone: BlockType</li>
<li>stonebrick: BlockType</li>
<li>stoneBrickStairs: BlockType</li>
<li>stoneButton: BlockType</li>
<li>stonecutter: BlockType</li>
<li>stonecutterBlock: BlockType</li>
<li>stonePressurePlate: BlockType</li>
<li>stoneSlab: BlockType</li>
<li>stoneSlab2: BlockType</li>
<li>stoneSlab3: BlockType</li>
<li>stoneSlab4: BlockType</li>
<li>stoneStairs: BlockType</li>
<li>strippedAcaciaLog: BlockType</li>
<li>strippedBirchLog: BlockType</li>
<li>strippedCrimsonHyphae: BlockType</li>
<li>strippedCrimsonStem: BlockType</li>
<li>strippedDarkOakLog: BlockType</li>
<li>strippedJungleLog: BlockType</li>
<li>strippedOakLog: BlockType</li>
<li>strippedSpruceLog: BlockType</li>
<li>strippedWarpedHyphae: BlockType</li>
<li>strippedWarpedStem: BlockType</li>
<li>structureBlock: BlockType</li>
<li>structureVoid: BlockType</li>
<li>sweetBerryBush: BlockType</li>
<li>tallgrass: BlockType</li>
<li>target: BlockType</li>
<li>tintedGlass: BlockType</li>
<li>tnt: BlockType</li>
<li>torch: BlockType</li>
<li>trapdoor: BlockType</li>
<li>trappedChest: BlockType</li>
<li>tripwire: BlockType</li>
<li>tripwireHook: BlockType</li>
<li>tuff: BlockType</li>
<li>turtleEgg: BlockType</li>
<li>twistingVines: BlockType</li>
<li>underwaterTorch: BlockType</li>
<li>undyedShulkerBox: BlockType</li>
<li>unknown: BlockType</li>
<li>unlitRedstoneTorch: BlockType</li>
<li>unpoweredComparator: BlockType</li>
<li>unpoweredRepeater: BlockType</li>
<li>vine: BlockType</li>
<li>wallBanner: BlockType</li>
<li>wallSign: BlockType</li>
<li>warpedButton: BlockType</li>
<li>warpedDoor: BlockType</li>
<li>warpedDoubleSlab: BlockType</li>
<li>warpedFence: BlockType</li>
<li>warpedFenceGate: BlockType</li>
<li>warpedFungus: BlockType</li>
<li>warpedHyphae: BlockType</li>
<li>warpedNylium: BlockType</li>
<li>warpedPlanks: BlockType</li>
<li>warpedPressurePlate: BlockType</li>
<li>warpedRoots: BlockType</li>
<li>warpedSlab: BlockType</li>
<li>warpedStairs: BlockType</li>
<li>warpedStandingSign: BlockType</li>
<li>warpedStem: BlockType</li>
<li>warpedTrapdoor: BlockType</li>
<li>warpedWallSign: BlockType</li>
<li>warpedWartBlock: BlockType</li>
<li>water: BlockType</li>
<li>waterlily: BlockType</li>
<li>waxedCopper: BlockType</li>
<li>waxedCutCopper: BlockType</li>
<li>waxedCutCopperSlab: BlockType</li>
<li>waxedCutCopperStairs: BlockType</li>
<li>waxedDoubleCutCopperSlab: BlockType</li>
<li>waxedExposedCopper: BlockType</li>
<li>waxedExposedCutCopper: BlockType</li>
<li>waxedExposedCutCopperSlab: BlockType</li>
<li>waxedExposedCutCopperStairs: BlockType</li>
<li>waxedExposedDoubleCutCopperSlab: BlockType</li>
<li>waxedOxidizedCopper: BlockType</li>
<li>waxedOxidizedCutCopper: BlockType</li>
<li>waxedOxidizedCutCopperSlab: BlockType</li>
<li>waxedOxidizedCutCopperStairs: BlockType</li>
<li>waxedOxidizedDoubleCutCopperSlab: BlockType</li>
<li>waxedWeatheredCopper: BlockType</li>
<li>waxedWeatheredCutCopper: BlockType</li>
<li>waxedWeatheredCutCopperSlab: BlockType</li>
<li>waxedWeatheredCutCopperStairs: BlockType</li>
<li>waxedWeatheredDoubleCutCopperSlab: BlockType</li>
<li>weatheredCopper: BlockType</li>
<li>weatheredCutCopper: BlockType</li>
<li>weatheredCutCopperSlab: BlockType</li>
<li>weatheredCutCopperStairs: BlockType</li>
<li>weatheredDoubleCutCopperSlab: BlockType</li>
<li>web: BlockType</li>
<li>weepingVines: BlockType</li>
<li>wheat: BlockType</li>
<li>whiteCandle: BlockType</li>
<li>whiteCandleCake: BlockType</li>
<li>whiteGlazedTerracotta: BlockType</li>
<li>witherRose: BlockType</li>
<li>wood: BlockType</li>
<li>woodenButton: BlockType</li>
<li>woodenDoor: BlockType</li>
<li>woodenPressurePlate: BlockType</li>
<li>woodenSlab: BlockType</li>
<li>wool: BlockType</li>
<li>yellowCandle: BlockType</li>
<li>yellowCandleCake: BlockType</li>
<li>yellowFlower: BlockType</li>
<li>yellowGlazedTerracotta: BlockType</li>
<li>get(typeName: string): BlockType</li>
<li>getAllBlockTypes(): Array<BlockType></li>
</ul>
</details>

<details>
<summary>BoolBlockProperty</summary>
<ul> 
<li>name: string</li>
<li>validValues: Array<boolean></li>
<li>value: boolean</li>
</ul>
</details>

<details>
<summary>Breathable</summary>
<ul> 
<li>breatheBlocks: Array<BlockPermutation></li>
<li>breathesAir: boolean</li>
<li>breathesLava: boolean</li>
<li>breathesSolids: boolean</li>
<li>breathesWater: boolean</li>
<li>generatesBubbles: boolean</li>
<li>id: string</li>
<li>inhaleTime: number</li>
<li>nonBreatheBlocks: Array<BlockPermutation></li>
<li>suffocateTime: number</li>
<li>totalSupply: number</li>
<li>setAirSupply(value: number): void</li>
</ul>
</details>

<details>
<summary>ChangeWeatherEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: WeatherChangedEvent) => void): (arg: WeatherChangedEvent) => void</li>
<li>unsubscribe(callback: (arg: WeatherChangedEvent) => void): void</li>
</ul>
</details>

<details>
<summary>ChatEvent</summary>
<ul> 
<li>message: string</li>
<li>sender: Player</li>
<li>sendToTargets: boolean</li>
<li>targets: Array<Player></li>
</ul>
</details>

<details>
<summary>ChatEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: ChatEvent) => void): (arg: ChatEvent) => void</li>
<li>unsubscribe(callback: (arg: ChatEvent) => void): void</li>
</ul>
</details>

<details>
<summary>Color</summary>
<ul> 
<li>id: string</li>
<li>value: number</li>
</ul>
</details>

<details>
<summary>Commands</summary>
<ul> 
<li>run(commandString: string): any</li>
</ul>
</details>

<details>
<summary>Container</summary>
<ul> 
<li>emptySlotsCount: number</li>
<li>size: number</li>
<li>addItem(itemStack: ItemStack): void</li>
<li>getItem(slot: number): ItemStack</li>
<li>setItem(slot: number, itemStack: ItemStack): void</li>
<li>swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean</li>
<li>transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean</li>
</ul>
</details>

<details>
<summary>Dimension</summary>
<ul> 
<li>createExplosion(location: Location, radius: number, explosionOptions: ExplosionOptions): void</li>
<li>getBlock(location: BlockLocation): Block</li>
<li>getEntitiesAtBlockLocation(location: BlockLocation): Array<Entity></li>
<li>isEmpty(location: BlockLocation): boolean</li>
<li>spawnEntity(identifier: string, location: BlockLocation): Entity</li>
</ul>
</details>

<details>
<summary>Direction</summary>
<ul> 
<li>down: number</li>
<li>east: number</li>
<li>north: number</li>
<li>south: number</li>
<li>up: number</li>
<li>west: number</li>
</ul>
</details>

<details>
<summary>Effect</summary>
<ul> 
<li>amplifier: number</li>
<li>displayName: string</li>
<li>duration: number</li>
</ul>
</details>

<details>
<summary>Effects</summary>
<ul> 
<li>absorption: EffectType</li>
<li>badOmen: EffectType</li>
<li>blindness: EffectType</li>
<li>conduitPower: EffectType</li>
<li>empty: EffectType</li>
<li>fatalPoison: EffectType</li>
<li>fireResistance: EffectType</li>
<li>haste: EffectType</li>
<li>healthBoost: EffectType</li>
<li>hunger: EffectType</li>
<li>instantDamage: EffectType</li>
<li>instantHealth: EffectType</li>
<li>invisibility: EffectType</li>
<li>jumpBoost: EffectType</li>
<li>levitation: EffectType</li>
<li>miningFatigue: EffectType</li>
<li>nausea: EffectType</li>
<li>nightVision: EffectType</li>
<li>poison: EffectType</li>
<li>regeneration: EffectType</li>
<li>resistance: EffectType</li>
<li>saturation: EffectType</li>
<li>slowFalling: EffectType</li>
<li>slowness: EffectType</li>
<li>speed: EffectType</li>
<li>strength: EffectType</li>
<li>villageHero: EffectType</li>
<li>waterBreathing: EffectType</li>
<li>weakness: EffectType</li>
<li>wither: EffectType</li>
</ul>
</details>

<details>
<summary>EffectType</summary>
<ul> 
<li>getName(): string</li>
</ul>
</details>

<details>
<summary>EmptySignal</summary>
<ul> 
<li>subscribe(callback: () => void): () => void</li>
<li>unsubscribe(callback: () => void): void</li>
</ul>
</details>

<details>
<summary>Entity</summary>
<ul> 
<li>id: string</li>
<li>isSneaking: boolean</li>
<li>location: Location</li>
<li>nameTag: string</li>
<li>velocity: Location</li>
<li>addEffect(effectType: EffectType, duration: number, amplifier: number): void</li>
<li>getComponent(componentId: string): any</li>
<li>getComponents(): Array<any></li>
<li>getEffect(effectType: EffectType): Effect</li>
<li>hasComponent(componentId: string): boolean</li>
<li>kill(): void</li>
<li>triggerEvent(eventName: string): void</li>
</ul>
</details>

<details>
<summary>EntityDefinitionFeedItem</summary>
<ul> 
<li>growth: number</li>
<li>item: string</li>
</ul>
</details>

<details>
<summary>EntityEvent</summary>
<ul> 
<li>entity: Entity</li>
</ul>
</details>

<details>
<summary>EntityEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: EntityEvent) => void): (arg: EntityEvent) => void</li>
<li>unsubscribe(callback: (arg: EntityEvent) => void): void</li>
</ul>
</details>

<details>
<summary>Events</summary>
<ul> 
<li>activatePiston: ActivatePistonEventSignal</li>
<li>addEffect: AddEffectEventSignal</li>
<li>beforeActivatePiston: BeforeActivatePistonEventSignal</li>
<li>beforeChat: BeforeChatEventSignal</li>
<li>beforeExplosion: BeforeExplosionEventSignal</li>
<li>changeWeather: ChangeWeatherEventSignal</li>
<li>chat: ChatEventSignal</li>
<li>createEntity: EntityEventSignal</li>
<li>explodeBlock: ExplodeBlockSignal</li>
<li>explosion: ExplosionEventSignal</li>
<li>tick: EmptySignal</li>
</ul>
</details>

<details>
<summary>ExplodeBlockEvent</summary>
<ul> 
<li>destroyedBlock: Block</li>
<li>source: Entity</li>
</ul>
</details>

<details>
<summary>ExplodeBlockSignal</summary>
<ul> 
<li>subscribe(callback: (arg: ExplodeBlockEvent) => void): (arg: ExplodeBlockEvent) => void</li>
<li>unsubscribe(callback: (arg: ExplodeBlockEvent) => void): void</li>
</ul>
</details>

<details>
<summary>ExplosionEvent</summary>
<ul> 
<li>dimension: Dimension</li>
<li>impactedBlocks: Array<BlockLocation></li>
<li>source: Entity</li>
</ul>
</details>

<details>
<summary>ExplosionEventSignal</summary>
<ul> 
<li>subscribe(callback: (arg: ExplosionEvent) => void): (arg: ExplosionEvent) => void</li>
<li>unsubscribe(callback: (arg: ExplosionEvent) => void): void</li>
</ul>
</details>

<details>
<summary>ExplosionOptions</summary>
<ul> 
<li>allowUnderwater: boolean</li>
<li>breaksBlocks: boolean</li>
<li>causesFire: boolean</li>
<li>source: Entity</li>
	constructor()
</ul>
</details>

<details>
<summary>FeedItem</summary>
<ul> 
<li>effects: Array<FeedItemEffect></li>
<li>healAmount: number</li>
<li>item: string</li>
</ul>
</details>

<details>
<summary>FeedItemEffect</summary>
<ul> 
<li>amplifier: number</li>
<li>chance: number</li>
<li>duration: number</li>
<li>name: string</li>
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
<li>id: string</li>
<li>value: number</li>
</ul>
</details>

<details>
<summary>Healable</summary>
<ul> 
<li>filters: FilterGroup</li>
<li>forceUse: boolean</li>
<li>id: string</li>
<li>items: Array<FeedItem></li>
</ul>
</details>

<details>
<summary>Health</summary>
<ul> 
<li>current: number</li>
<li>id: string</li>
<li>value: number</li>
<li>resetToDefaultValue(): void</li>
<li>resetToMaxValue(): void</li>
<li>resetToMinValue(): void</li>
<li>setCurrent(): void</li>
</ul>
</details>

<details>
<summary>IntBlockProperty</summary>
<ul> 
<li>name: string</li>
<li>validValues: Array<number></li>
<li>value: number</li>
</ul>
</details>

<details>
<summary>Inventory</summary>
<ul> 
<li>additionalSlotsPerStrength: number</li>
<li>canBeSiphonedFrom: boolean</li>
<li>container: InventoryComponentContainer</li>
<li>containerType: string</li>
<li>inventorySize: number</li>
<li>private: boolean</li>
<li>restrictToOwner: boolean</li>
</ul>
</details>

<details>
<summary>InventoryComponentContainer</summary>
<ul> 
<li>emptySlotsCount: number</li>
<li>size: number</li>
<li>addItem(itemStack: ItemStack): void</li>
<li>getItem(slot: number): ItemStack</li>
<li>setItem(slot: number, itemStack: ItemStack): void</li>
<li>swapItems(slot: number, otherSlot: number, otherContainer: Container): boolean</li>
<li>transferItem(fromSlot: number, toSlot: number, toContainer: Container): boolean</li>
</ul>
</details>

<details>
<summary>Items</summary>
<ul> 
<li>acaciaBoat: ItemType</li>
<li>acaciaButton: ItemType</li>
<li>acaciaDoor: ItemType</li>
<li>acaciaFenceGate: ItemType</li>
<li>acaciaPressurePlate: ItemType</li>
<li>acaciaSign: ItemType</li>
<li>acaciaStairs: ItemType</li>
<li>acaciaStandingSign: ItemType</li>
<li>acaciaTrapdoor: ItemType</li>
<li>acaciaWallSign: ItemType</li>
<li>activatorRail: ItemType</li>
<li>agentSpawnEgg: ItemType</li>
<li>air: ItemType</li>
<li>allow: ItemType</li>
<li>amethystBlock: ItemType</li>
<li>amethystCluster: ItemType</li>
<li>amethystShard: ItemType</li>
<li>ancientDebris: ItemType</li>
<li>andesiteStairs: ItemType</li>
<li>anvil: ItemType</li>
<li>apple: ItemType</li>
<li>armorStand: ItemType</li>
<li>arrow: ItemType</li>
<li>axolotlBucket: ItemType</li>
<li>axolotlSpawnEgg: ItemType</li>
<li>azalea: ItemType</li>
<li>azaleaLeaves: ItemType</li>
<li>azaleaLeavesFlowered: ItemType</li>
<li>bakedPotato: ItemType</li>
<li>balloon: ItemType</li>
<li>bamboo: ItemType</li>
<li>bambooSapling: ItemType</li>
<li>banner: ItemType</li>
<li>bannerPattern: ItemType</li>
<li>barrel: ItemType</li>
<li>barrier: ItemType</li>
<li>basalt: ItemType</li>
<li>batSpawnEgg: ItemType</li>
<li>beacon: ItemType</li>
<li>bed: ItemType</li>
<li>bedrock: ItemType</li>
<li>beef: ItemType</li>
<li>beehive: ItemType</li>
<li>beeNest: ItemType</li>
<li>beeSpawnEgg: ItemType</li>
<li>beetroot: ItemType</li>
<li>beetrootSeeds: ItemType</li>
<li>beetrootSoup: ItemType</li>
<li>bell: ItemType</li>
<li>bigDripleaf: ItemType</li>
<li>birchBoat: ItemType</li>
<li>birchButton: ItemType</li>
<li>birchDoor: ItemType</li>
<li>birchFenceGate: ItemType</li>
<li>birchPressurePlate: ItemType</li>
<li>birchSign: ItemType</li>
<li>birchStairs: ItemType</li>
<li>birchStandingSign: ItemType</li>
<li>birchTrapdoor: ItemType</li>
<li>birchWallSign: ItemType</li>
<li>blackCandle: ItemType</li>
<li>blackCandleCake: ItemType</li>
<li>blackDye: ItemType</li>
<li>blackGlazedTerracotta: ItemType</li>
<li>blackstone: ItemType</li>
<li>blackstoneDoubleSlab: ItemType</li>
<li>blackstoneSlab: ItemType</li>
<li>blackstoneStairs: ItemType</li>
<li>blackstoneWall: ItemType</li>
<li>blastFurnace: ItemType</li>
<li>blazePowder: ItemType</li>
<li>blazeRod: ItemType</li>
<li>blazeSpawnEgg: ItemType</li>
<li>bleach: ItemType</li>
<li>blueCandle: ItemType</li>
<li>blueCandleCake: ItemType</li>
<li>blueDye: ItemType</li>
<li>blueGlazedTerracotta: ItemType</li>
<li>blueIce: ItemType</li>
<li>boat: ItemType</li>
<li>bone: ItemType</li>
<li>boneBlock: ItemType</li>
<li>boneMeal: ItemType</li>
<li>book: ItemType</li>
<li>bookshelf: ItemType</li>
<li>borderBlock: ItemType</li>
<li>bordureIndentedBannerPattern: ItemType</li>
<li>bow: ItemType</li>
<li>bowl: ItemType</li>
<li>bread: ItemType</li>
<li>brewingStand: ItemType</li>
<li>brewingstandblock: ItemType</li>
<li>brick: ItemType</li>
<li>brickBlock: ItemType</li>
<li>brickStairs: ItemType</li>
<li>brownCandle: ItemType</li>
<li>brownCandleCake: ItemType</li>
<li>brownDye: ItemType</li>
<li>brownGlazedTerracotta: ItemType</li>
<li>brownMushroom: ItemType</li>
<li>brownMushroomBlock: ItemType</li>
<li>bubbleColumn: ItemType</li>
<li>bucket: ItemType</li>
<li>buddingAmethyst: ItemType</li>
<li>cactus: ItemType</li>
<li>cake: ItemType</li>
<li>calcite: ItemType</li>
<li>camera: ItemType</li>
<li>campfire: ItemType</li>
<li>candle: ItemType</li>
<li>candleCake: ItemType</li>
<li>carpet: ItemType</li>
<li>carrot: ItemType</li>
<li>carrotOnAStick: ItemType</li>
<li>carrots: ItemType</li>
<li>cartographyTable: ItemType</li>
<li>carvedPumpkin: ItemType</li>
<li>catSpawnEgg: ItemType</li>
<li>cauldron: ItemType</li>
<li>caveSpiderSpawnEgg: ItemType</li>
<li>caveVines: ItemType</li>
<li>caveVinesBodyWithBerries: ItemType</li>
<li>caveVinesHeadWithBerries: ItemType</li>
<li>chain: ItemType</li>
<li>chainCommandBlock: ItemType</li>
<li>chainmailBoots: ItemType</li>
<li>chainmailChestplate: ItemType</li>
<li>chainmailHelmet: ItemType</li>
<li>chainmailLeggings: ItemType</li>
<li>charcoal: ItemType</li>
<li>chemicalHeat: ItemType</li>
<li>chemistryTable: ItemType</li>
<li>chest: ItemType</li>
<li>chestMinecart: ItemType</li>
<li>chicken: ItemType</li>
<li>chickenSpawnEgg: ItemType</li>
<li>chiseledDeepslate: ItemType</li>
<li>chiseledNetherBricks: ItemType</li>
<li>chiseledPolishedBlackstone: ItemType</li>
<li>chorusFlower: ItemType</li>
<li>chorusFruit: ItemType</li>
<li>chorusPlant: ItemType</li>
<li>clay: ItemType</li>
<li>clayBall: ItemType</li>
<li>clock: ItemType</li>
<li>coal: ItemType</li>
<li>coalBlock: ItemType</li>
<li>coalOre: ItemType</li>
<li>cobbledDeepslate: ItemType</li>
<li>cobbledDeepslateDoubleSlab: ItemType</li>
<li>cobbledDeepslateSlab: ItemType</li>
<li>cobbledDeepslateStairs: ItemType</li>
<li>cobbledDeepslateWall: ItemType</li>
<li>cobblestone: ItemType</li>
<li>cobblestoneWall: ItemType</li>
<li>cocoa: ItemType</li>
<li>cocoaBeans: ItemType</li>
<li>cod: ItemType</li>
<li>codBucket: ItemType</li>
<li>codSpawnEgg: ItemType</li>
<li>coloredTorchBp: ItemType</li>
<li>coloredTorchRg: ItemType</li>
<li>commandBlock: ItemType</li>
<li>commandBlockMinecart: ItemType</li>
<li>comparator: ItemType</li>
<li>compass: ItemType</li>
<li>composter: ItemType</li>
<li>compound: ItemType</li>
<li>concrete: ItemType</li>
<li>concretePowder: ItemType</li>
<li>conduit: ItemType</li>
<li>cookedBeef: ItemType</li>
<li>cookedChicken: ItemType</li>
<li>cookedCod: ItemType</li>
<li>cookedMutton: ItemType</li>
<li>cookedPorkchop: ItemType</li>
<li>cookedRabbit: ItemType</li>
<li>cookedSalmon: ItemType</li>
<li>cookie: ItemType</li>
<li>copperBlock: ItemType</li>
<li>copperIngot: ItemType</li>
<li>copperOre: ItemType</li>
<li>coral: ItemType</li>
<li>coralBlock: ItemType</li>
<li>coralFan: ItemType</li>
<li>coralFanDead: ItemType</li>
<li>coralFanHang: ItemType</li>
<li>coralFanHang2: ItemType</li>
<li>coralFanHang3: ItemType</li>
<li>cowSpawnEgg: ItemType</li>
<li>crackedDeepslateBricks: ItemType</li>
<li>crackedDeepslateTiles: ItemType</li>
<li>crackedNetherBricks: ItemType</li>
<li>crackedPolishedBlackstoneBricks: ItemType</li>
<li>craftingTable: ItemType</li>
<li>creeperBannerPattern: ItemType</li>
<li>creeperSpawnEgg: ItemType</li>
<li>crimsonButton: ItemType</li>
<li>crimsonDoor: ItemType</li>
<li>crimsonDoubleSlab: ItemType</li>
<li>crimsonFence: ItemType</li>
<li>crimsonFenceGate: ItemType</li>
<li>crimsonFungus: ItemType</li>
<li>crimsonHyphae: ItemType</li>
<li>crimsonNylium: ItemType</li>
<li>crimsonPlanks: ItemType</li>
<li>crimsonPressurePlate: ItemType</li>
<li>crimsonRoots: ItemType</li>
<li>crimsonSign: ItemType</li>
<li>crimsonSlab: ItemType</li>
<li>crimsonStairs: ItemType</li>
<li>crimsonStandingSign: ItemType</li>
<li>crimsonStem: ItemType</li>
<li>crimsonTrapdoor: ItemType</li>
<li>crimsonWallSign: ItemType</li>
<li>crossbow: ItemType</li>
<li>cryingObsidian: ItemType</li>
<li>cutCopper: ItemType</li>
<li>cutCopperSlab: ItemType</li>
<li>cutCopperStairs: ItemType</li>
<li>cyanCandle: ItemType</li>
<li>cyanCandleCake: ItemType</li>
<li>cyanDye: ItemType</li>
<li>cyanGlazedTerracotta: ItemType</li>
<li>darkOakBoat: ItemType</li>
<li>darkOakButton: ItemType</li>
<li>darkOakDoor: ItemType</li>
<li>darkOakFenceGate: ItemType</li>
<li>darkOakPressurePlate: ItemType</li>
<li>darkOakSign: ItemType</li>
<li>darkOakStairs: ItemType</li>
<li>darkoakStandingSign: ItemType</li>
<li>darkOakTrapdoor: ItemType</li>
<li>darkoakWallSign: ItemType</li>
<li>darkPrismarineStairs: ItemType</li>
<li>daylightDetector: ItemType</li>
<li>daylightDetectorInverted: ItemType</li>
<li>deadbush: ItemType</li>
<li>debugStick: ItemType</li>
<li>deepslate: ItemType</li>
<li>deepslateBrickDoubleSlab: ItemType</li>
<li>deepslateBricks: ItemType</li>
<li>deepslateBrickSlab: ItemType</li>
<li>deepslateBrickStairs: ItemType</li>
<li>deepslateBrickWall: ItemType</li>
<li>deepslateCoalOre: ItemType</li>
<li>deepslateCopperOre: ItemType</li>
<li>deepslateDiamondOre: ItemType</li>
<li>deepslateEmeraldOre: ItemType</li>
<li>deepslateGoldOre: ItemType</li>
<li>deepslateIronOre: ItemType</li>
<li>deepslateLapisOre: ItemType</li>
<li>deepslateRedstoneOre: ItemType</li>
<li>deepslateTileDoubleSlab: ItemType</li>
<li>deepslateTiles: ItemType</li>
<li>deepslateTileSlab: ItemType</li>
<li>deepslateTileStairs: ItemType</li>
<li>deepslateTileWall: ItemType</li>
<li>deny: ItemType</li>
<li>detectorRail: ItemType</li>
<li>diamond: ItemType</li>
<li>diamondAxe: ItemType</li>
<li>diamondBlock: ItemType</li>
<li>diamondBoots: ItemType</li>
<li>diamondChestplate: ItemType</li>
<li>diamondHelmet: ItemType</li>
<li>diamondHoe: ItemType</li>
<li>diamondHorseArmor: ItemType</li>
<li>diamondLeggings: ItemType</li>
<li>diamondOre: ItemType</li>
<li>diamondPickaxe: ItemType</li>
<li>diamondShovel: ItemType</li>
<li>diamondSword: ItemType</li>
<li>dioriteStairs: ItemType</li>
<li>dirt: ItemType</li>
<li>dirtWithRoots: ItemType</li>
<li>dispenser: ItemType</li>
<li>dolphinSpawnEgg: ItemType</li>
<li>donkeySpawnEgg: ItemType</li>
<li>doubleCutCopperSlab: ItemType</li>
<li>doublePlant: ItemType</li>
<li>doubleStoneSlab: ItemType</li>
<li>doubleStoneSlab2: ItemType</li>
<li>doubleStoneSlab3: ItemType</li>
<li>doubleStoneSlab4: ItemType</li>
<li>doubleWoodenSlab: ItemType</li>
<li>dragonBreath: ItemType</li>
<li>dragonEgg: ItemType</li>
<li>driedKelp: ItemType</li>
<li>driedKelpBlock: ItemType</li>
<li>dripstoneBlock: ItemType</li>
<li>dropper: ItemType</li>
<li>drownedSpawnEgg: ItemType</li>
<li>dye: ItemType</li>
<li>egg: ItemType</li>
<li>elderGuardianSpawnEgg: ItemType</li>
<li>element0: ItemType</li>
<li>element1: ItemType</li>
<li>element10: ItemType</li>
<li>element100: ItemType</li>
<li>element101: ItemType</li>
<li>element102: ItemType</li>
<li>element103: ItemType</li>
<li>element104: ItemType</li>
<li>element105: ItemType</li>
<li>element106: ItemType</li>
<li>element107: ItemType</li>
<li>element108: ItemType</li>
<li>element109: ItemType</li>
<li>element11: ItemType</li>
<li>element110: ItemType</li>
<li>element111: ItemType</li>
<li>element112: ItemType</li>
<li>element113: ItemType</li>
<li>element114: ItemType</li>
<li>element115: ItemType</li>
<li>element116: ItemType</li>
<li>element117: ItemType</li>
<li>element118: ItemType</li>
<li>element12: ItemType</li>
<li>element13: ItemType</li>
<li>element14: ItemType</li>
<li>element15: ItemType</li>
<li>element16: ItemType</li>
<li>element17: ItemType</li>
<li>element18: ItemType</li>
<li>element19: ItemType</li>
<li>element2: ItemType</li>
<li>element20: ItemType</li>
<li>element21: ItemType</li>
<li>element22: ItemType</li>
<li>element23: ItemType</li>
<li>element24: ItemType</li>
<li>element25: ItemType</li>
<li>element26: ItemType</li>
<li>element27: ItemType</li>
<li>element28: ItemType</li>
<li>element29: ItemType</li>
<li>element3: ItemType</li>
<li>element30: ItemType</li>
<li>element31: ItemType</li>
<li>element32: ItemType</li>
<li>element33: ItemType</li>
<li>element34: ItemType</li>
<li>element35: ItemType</li>
<li>element36: ItemType</li>
<li>element37: ItemType</li>
<li>element38: ItemType</li>
<li>element39: ItemType</li>
<li>element4: ItemType</li>
<li>element40: ItemType</li>
<li>element41: ItemType</li>
<li>element42: ItemType</li>
<li>element43: ItemType</li>
<li>element44: ItemType</li>
<li>element45: ItemType</li>
<li>element46: ItemType</li>
<li>element47: ItemType</li>
<li>element48: ItemType</li>
<li>element49: ItemType</li>
<li>element5: ItemType</li>
<li>element50: ItemType</li>
<li>element51: ItemType</li>
<li>element52: ItemType</li>
<li>element53: ItemType</li>
<li>element54: ItemType</li>
<li>element55: ItemType</li>
<li>element56: ItemType</li>
<li>element57: ItemType</li>
<li>element58: ItemType</li>
<li>element59: ItemType</li>
<li>element6: ItemType</li>
<li>element60: ItemType</li>
<li>element61: ItemType</li>
<li>element62: ItemType</li>
<li>element63: ItemType</li>
<li>element64: ItemType</li>
<li>element65: ItemType</li>
<li>element66: ItemType</li>
<li>element67: ItemType</li>
<li>element68: ItemType</li>
<li>element69: ItemType</li>
<li>element7: ItemType</li>
<li>element70: ItemType</li>
<li>element71: ItemType</li>
<li>element72: ItemType</li>
<li>element73: ItemType</li>
<li>element74: ItemType</li>
<li>element75: ItemType</li>
<li>element76: ItemType</li>
<li>element77: ItemType</li>
<li>element78: ItemType</li>
<li>element79: ItemType</li>
<li>element8: ItemType</li>
<li>element80: ItemType</li>
<li>element81: ItemType</li>
<li>element82: ItemType</li>
<li>element83: ItemType</li>
<li>element84: ItemType</li>
<li>element85: ItemType</li>
<li>element86: ItemType</li>
<li>element87: ItemType</li>
<li>element88: ItemType</li>
<li>element89: ItemType</li>
<li>element9: ItemType</li>
<li>element90: ItemType</li>
<li>element91: ItemType</li>
<li>element92: ItemType</li>
<li>element93: ItemType</li>
<li>element94: ItemType</li>
<li>element95: ItemType</li>
<li>element96: ItemType</li>
<li>element97: ItemType</li>
<li>element98: ItemType</li>
<li>element99: ItemType</li>
<li>elytra: ItemType</li>
<li>emerald: ItemType</li>
<li>emeraldBlock: ItemType</li>
<li>emeraldOre: ItemType</li>
<li>emptyMap: ItemType</li>
<li>enchantedBook: ItemType</li>
<li>enchantedGoldenApple: ItemType</li>
<li>enchantingTable: ItemType</li>
<li>endBricks: ItemType</li>
<li>endBrickStairs: ItemType</li>
<li>endCrystal: ItemType</li>
<li>enderChest: ItemType</li>
<li>enderEye: ItemType</li>
<li>endermanSpawnEgg: ItemType</li>
<li>endermiteSpawnEgg: ItemType</li>
<li>enderPearl: ItemType</li>
<li>endGateway: ItemType</li>
<li>endPortal: ItemType</li>
<li>endPortalFrame: ItemType</li>
<li>endRod: ItemType</li>
<li>endStone: ItemType</li>
<li>evokerSpawnEgg: ItemType</li>
<li>experienceBottle: ItemType</li>
<li>exposedCopper: ItemType</li>
<li>exposedCutCopper: ItemType</li>
<li>exposedCutCopperSlab: ItemType</li>
<li>exposedCutCopperStairs: ItemType</li>
<li>exposedDoubleCutCopperSlab: ItemType</li>
<li>farmland: ItemType</li>
<li>feather: ItemType</li>
<li>fence: ItemType</li>
<li>fenceGate: ItemType</li>
<li>fermentedSpiderEye: ItemType</li>
<li>fieldMasonedBannerPattern: ItemType</li>
<li>filledMap: ItemType</li>
<li>fire: ItemType</li>
<li>fireCharge: ItemType</li>
<li>fireworkRocket: ItemType</li>
<li>fireworkStar: ItemType</li>
<li>fishingRod: ItemType</li>
<li>fletchingTable: ItemType</li>
<li>flint: ItemType</li>
<li>flintAndSteel: ItemType</li>
<li>flowerBannerPattern: ItemType</li>
<li>floweringAzalea: ItemType</li>
<li>flowerPot: ItemType</li>
<li>flowingLava: ItemType</li>
<li>flowingWater: ItemType</li>
<li>foxSpawnEgg: ItemType</li>
<li>frame: ItemType</li>
<li>frostedIce: ItemType</li>
<li>furnace: ItemType</li>
<li>ghastSpawnEgg: ItemType</li>
<li>ghastTear: ItemType</li>
<li>gildedBlackstone: ItemType</li>
<li>glass: ItemType</li>
<li>glassBottle: ItemType</li>
<li>glassPane: ItemType</li>
<li>glisteringMelonSlice: ItemType</li>
<li>glowBerries: ItemType</li>
<li>glowFrame: ItemType</li>
<li>glowingobsidian: ItemType</li>
<li>glowInkSac: ItemType</li>
<li>glowLichen: ItemType</li>
<li>glowSquidSpawnEgg: ItemType</li>
<li>glowStick: ItemType</li>
<li>glowstone: ItemType</li>
<li>glowstoneDust: ItemType</li>
<li>goatHorn: ItemType</li>
<li>goatSpawnEgg: ItemType</li>
<li>goldBlock: ItemType</li>
<li>goldenApple: ItemType</li>
<li>goldenAxe: ItemType</li>
<li>goldenBoots: ItemType</li>
<li>goldenCarrot: ItemType</li>
<li>goldenChestplate: ItemType</li>
<li>goldenHelmet: ItemType</li>
<li>goldenHoe: ItemType</li>
<li>goldenHorseArmor: ItemType</li>
<li>goldenLeggings: ItemType</li>
<li>goldenPickaxe: ItemType</li>
<li>goldenRail: ItemType</li>
<li>goldenShovel: ItemType</li>
<li>goldenSword: ItemType</li>
<li>goldIngot: ItemType</li>
<li>goldNugget: ItemType</li>
<li>goldOre: ItemType</li>
<li>graniteStairs: ItemType</li>
<li>grass: ItemType</li>
<li>grassPath: ItemType</li>
<li>gravel: ItemType</li>
<li>grayCandle: ItemType</li>
<li>grayCandleCake: ItemType</li>
<li>grayDye: ItemType</li>
<li>grayGlazedTerracotta: ItemType</li>
<li>greenCandle: ItemType</li>
<li>greenCandleCake: ItemType</li>
<li>greenDye: ItemType</li>
<li>greenGlazedTerracotta: ItemType</li>
<li>grindstone: ItemType</li>
<li>guardianSpawnEgg: ItemType</li>
<li>gunpowder: ItemType</li>
<li>hangingRoots: ItemType</li>
<li>hardenedClay: ItemType</li>
<li>hardGlass: ItemType</li>
<li>hardGlassPane: ItemType</li>
<li>hardStainedGlass: ItemType</li>
<li>hardStainedGlassPane: ItemType</li>
<li>hayBlock: ItemType</li>
<li>heartOfTheSea: ItemType</li>
<li>heavyWeightedPressurePlate: ItemType</li>
<li>hoglinSpawnEgg: ItemType</li>
<li>honeyBlock: ItemType</li>
<li>honeyBottle: ItemType</li>
<li>honeycomb: ItemType</li>
<li>honeycombBlock: ItemType</li>
<li>hopper: ItemType</li>
<li>hopperMinecart: ItemType</li>
<li>horseSpawnEgg: ItemType</li>
<li>huskSpawnEgg: ItemType</li>
<li>ice: ItemType</li>
<li>iceBomb: ItemType</li>
<li>infestedDeepslate: ItemType</li>
<li>infoUpdate: ItemType</li>
<li>infoUpdate2: ItemType</li>
<li>inkSac: ItemType</li>
<li>invisiblebedrock: ItemType</li>
<li>ironAxe: ItemType</li>
<li>ironBars: ItemType</li>
<li>ironBlock: ItemType</li>
<li>ironBoots: ItemType</li>
<li>ironChestplate: ItemType</li>
<li>ironDoor: ItemType</li>
<li>ironHelmet: ItemType</li>
<li>ironHoe: ItemType</li>
<li>ironHorseArmor: ItemType</li>
<li>ironIngot: ItemType</li>
<li>ironLeggings: ItemType</li>
<li>ironNugget: ItemType</li>
<li>ironOre: ItemType</li>
<li>ironPickaxe: ItemType</li>
<li>ironShovel: ItemType</li>
<li>ironSword: ItemType</li>
<li>ironTrapdoor: ItemType</li>
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
<li>jigsaw: ItemType</li>
<li>jukebox: ItemType</li>
<li>jungleBoat: ItemType</li>
<li>jungleButton: ItemType</li>
<li>jungleDoor: ItemType</li>
<li>jungleFenceGate: ItemType</li>
<li>junglePressurePlate: ItemType</li>
<li>jungleSign: ItemType</li>
<li>jungleStairs: ItemType</li>
<li>jungleStandingSign: ItemType</li>
<li>jungleTrapdoor: ItemType</li>
<li>jungleWallSign: ItemType</li>
<li>kelp: ItemType</li>
<li>ladder: ItemType</li>
<li>lantern: ItemType</li>
<li>lapisBlock: ItemType</li>
<li>lapisLazuli: ItemType</li>
<li>lapisOre: ItemType</li>
<li>largeAmethystBud: ItemType</li>
<li>lava: ItemType</li>
<li>lavaBucket: ItemType</li>
<li>lavaCauldron: ItemType</li>
<li>lead: ItemType</li>
<li>leather: ItemType</li>
<li>leatherBoots: ItemType</li>
<li>leatherChestplate: ItemType</li>
<li>leatherHelmet: ItemType</li>
<li>leatherHorseArmor: ItemType</li>
<li>leatherLeggings: ItemType</li>
<li>leaves: ItemType</li>
<li>leaves2: ItemType</li>
<li>lectern: ItemType</li>
<li>lever: ItemType</li>
<li>lightBlock: ItemType</li>
<li>lightBlueCandle: ItemType</li>
<li>lightBlueCandleCake: ItemType</li>
<li>lightBlueDye: ItemType</li>
<li>lightBlueGlazedTerracotta: ItemType</li>
<li>lightGrayCandle: ItemType</li>
<li>lightGrayCandleCake: ItemType</li>
<li>lightGrayDye: ItemType</li>
<li>lightningRod: ItemType</li>
<li>lightWeightedPressurePlate: ItemType</li>
<li>limeCandle: ItemType</li>
<li>limeCandleCake: ItemType</li>
<li>limeDye: ItemType</li>
<li>limeGlazedTerracotta: ItemType</li>
<li>lingeringPotion: ItemType</li>
<li>litBlastFurnace: ItemType</li>
<li>litDeepslateRedstoneOre: ItemType</li>
<li>litFurnace: ItemType</li>
<li>litPumpkin: ItemType</li>
<li>litRedstoneLamp: ItemType</li>
<li>litRedstoneOre: ItemType</li>
<li>litSmoker: ItemType</li>
<li>llamaSpawnEgg: ItemType</li>
<li>lodestone: ItemType</li>
<li>lodestoneCompass: ItemType</li>
<li>log: ItemType</li>
<li>log2: ItemType</li>
<li>loom: ItemType</li>
<li>magentaCandle: ItemType</li>
<li>magentaCandleCake: ItemType</li>
<li>magentaDye: ItemType</li>
<li>magentaGlazedTerracotta: ItemType</li>
<li>magma: ItemType</li>
<li>magmaCream: ItemType</li>
<li>magmaCubeSpawnEgg: ItemType</li>
<li>medicine: ItemType</li>
<li>mediumAmethystBud: ItemType</li>
<li>melonBlock: ItemType</li>
<li>melonSeeds: ItemType</li>
<li>melonSlice: ItemType</li>
<li>melonStem: ItemType</li>
<li>milkBucket: ItemType</li>
<li>minecart: ItemType</li>
<li>minecraft:acacia_boat: ItemType</li>
<li>minecraft:acacia_button: ItemType</li>
<li>minecraft:acacia_door: ItemType</li>
<li>minecraft:acacia_fence_gate: ItemType</li>
<li>minecraft:acacia_pressure_plate: ItemType</li>
<li>minecraft:acacia_sign: ItemType</li>
<li>minecraft:acacia_stairs: ItemType</li>
<li>minecraft:acacia_standing_sign: ItemType</li>
<li>minecraft:acacia_trapdoor: ItemType</li>
<li>minecraft:acacia_wall_sign: ItemType</li>
<li>minecraft:activator_rail: ItemType</li>
<li>minecraft:agent_spawn_egg: ItemType</li>
<li>minecraft:air: ItemType</li>
<li>minecraft:allow: ItemType</li>
<li>minecraft:amethyst_block: ItemType</li>
<li>minecraft:amethyst_cluster: ItemType</li>
<li>minecraft:amethyst_shard: ItemType</li>
<li>minecraft:ancient_debris: ItemType</li>
<li>minecraft:andesite_stairs: ItemType</li>
<li>minecraft:anvil: ItemType</li>
<li>minecraft:apple: ItemType</li>
<li>minecraft:armor_stand: ItemType</li>
<li>minecraft:arrow: ItemType</li>
<li>minecraft:axolotl_bucket: ItemType</li>
<li>minecraft:axolotl_spawn_egg: ItemType</li>
<li>minecraft:azalea: ItemType</li>
<li>minecraft:azalea_leaves: ItemType</li>
<li>minecraft:azalea_leaves_flowered: ItemType</li>
<li>minecraft:baked_potato: ItemType</li>
<li>minecraft:balloon: ItemType</li>
<li>minecraft:bamboo: ItemType</li>
<li>minecraft:bamboo_sapling: ItemType</li>
<li>minecraft:banner: ItemType</li>
<li>minecraft:banner_pattern: ItemType</li>
<li>minecraft:barrel: ItemType</li>
<li>minecraft:barrier: ItemType</li>
<li>minecraft:basalt: ItemType</li>
<li>minecraft:bat_spawn_egg: ItemType</li>
<li>minecraft:beacon: ItemType</li>
<li>minecraft:bed: ItemType</li>
<li>minecraft:bedrock: ItemType</li>
<li>minecraft:bee_nest: ItemType</li>
<li>minecraft:bee_spawn_egg: ItemType</li>
<li>minecraft:beef: ItemType</li>
<li>minecraft:beehive: ItemType</li>
<li>minecraft:beetroot: ItemType</li>
<li>minecraft:beetroot_seeds: ItemType</li>
<li>minecraft:beetroot_soup: ItemType</li>
<li>minecraft:bell: ItemType</li>
<li>minecraft:big_dripleaf: ItemType</li>
<li>minecraft:birch_boat: ItemType</li>
<li>minecraft:birch_button: ItemType</li>
<li>minecraft:birch_door: ItemType</li>
<li>minecraft:birch_fence_gate: ItemType</li>
<li>minecraft:birch_pressure_plate: ItemType</li>
<li>minecraft:birch_sign: ItemType</li>
<li>minecraft:birch_stairs: ItemType</li>
<li>minecraft:birch_standing_sign: ItemType</li>
<li>minecraft:birch_trapdoor: ItemType</li>
<li>minecraft:birch_wall_sign: ItemType</li>
<li>minecraft:black_candle: ItemType</li>
<li>minecraft:black_candle_cake: ItemType</li>
<li>minecraft:black_dye: ItemType</li>
<li>minecraft:black_glazed_terracotta: ItemType</li>
<li>minecraft:blackstone: ItemType</li>
<li>minecraft:blackstone_double_slab: ItemType</li>
<li>minecraft:blackstone_slab: ItemType</li>
<li>minecraft:blackstone_stairs: ItemType</li>
<li>minecraft:blackstone_wall: ItemType</li>
<li>minecraft:blast_furnace: ItemType</li>
<li>minecraft:blaze_powder: ItemType</li>
<li>minecraft:blaze_rod: ItemType</li>
<li>minecraft:blaze_spawn_egg: ItemType</li>
<li>minecraft:bleach: ItemType</li>
<li>minecraft:blue_candle: ItemType</li>
<li>minecraft:blue_candle_cake: ItemType</li>
<li>minecraft:blue_dye: ItemType</li>
<li>minecraft:blue_glazed_terracotta: ItemType</li>
<li>minecraft:blue_ice: ItemType</li>
<li>minecraft:boat: ItemType</li>
<li>minecraft:bone: ItemType</li>
<li>minecraft:bone_block: ItemType</li>
<li>minecraft:bone_meal: ItemType</li>
<li>minecraft:book: ItemType</li>
<li>minecraft:bookshelf: ItemType</li>
<li>minecraft:border_block: ItemType</li>
<li>minecraft:bordure_indented_banner_pattern: ItemType</li>
<li>minecraft:bow: ItemType</li>
<li>minecraft:bowl: ItemType</li>
<li>minecraft:bread: ItemType</li>
<li>minecraft:brewing_stand: ItemType</li>
<li>minecraft:brewingstandblock: ItemType</li>
<li>minecraft:brick: ItemType</li>
<li>minecraft:brick_block: ItemType</li>
<li>minecraft:brick_stairs: ItemType</li>
<li>minecraft:brown_candle: ItemType</li>
<li>minecraft:brown_candle_cake: ItemType</li>
<li>minecraft:brown_dye: ItemType</li>
<li>minecraft:brown_glazed_terracotta: ItemType</li>
<li>minecraft:brown_mushroom: ItemType</li>
<li>minecraft:brown_mushroom_block: ItemType</li>
<li>minecraft:bubble_column: ItemType</li>
<li>minecraft:bucket: ItemType</li>
<li>minecraft:budding_amethyst: ItemType</li>
<li>minecraft:cactus: ItemType</li>
<li>minecraft:cake: ItemType</li>
<li>minecraft:calcite: ItemType</li>
<li>minecraft:camera: ItemType</li>
<li>minecraft:campfire: ItemType</li>
<li>minecraft:candle: ItemType</li>
<li>minecraft:candle_cake: ItemType</li>
<li>minecraft:carpet: ItemType</li>
<li>minecraft:carrot: ItemType</li>
<li>minecraft:carrot_on_a_stick: ItemType</li>
<li>minecraft:carrots: ItemType</li>
<li>minecraft:cartography_table: ItemType</li>
<li>minecraft:carved_pumpkin: ItemType</li>
<li>minecraft:cat_spawn_egg: ItemType</li>
<li>minecraft:cauldron: ItemType</li>
<li>minecraft:cave_spider_spawn_egg: ItemType</li>
<li>minecraft:cave_vines: ItemType</li>
<li>minecraft:cave_vines_body_with_berries: ItemType</li>
<li>minecraft:cave_vines_head_with_berries: ItemType</li>
<li>minecraft:chain: ItemType</li>
<li>minecraft:chain_command_block: ItemType</li>
<li>minecraft:chainmail_boots: ItemType</li>
<li>minecraft:chainmail_chestplate: ItemType</li>
<li>minecraft:chainmail_helmet: ItemType</li>
<li>minecraft:chainmail_leggings: ItemType</li>
<li>minecraft:charcoal: ItemType</li>
<li>minecraft:chemical_heat: ItemType</li>
<li>minecraft:chemistry_table: ItemType</li>
<li>minecraft:chest: ItemType</li>
<li>minecraft:chest_minecart: ItemType</li>
<li>minecraft:chicken: ItemType</li>
<li>minecraft:chicken_spawn_egg: ItemType</li>
<li>minecraft:chiseled_deepslate: ItemType</li>
<li>minecraft:chiseled_nether_bricks: ItemType</li>
<li>minecraft:chiseled_polished_blackstone: ItemType</li>
<li>minecraft:chorus_flower: ItemType</li>
<li>minecraft:chorus_fruit: ItemType</li>
<li>minecraft:chorus_plant: ItemType</li>
<li>minecraft:clay: ItemType</li>
<li>minecraft:clay_ball: ItemType</li>
<li>minecraft:clock: ItemType</li>
<li>minecraft:coal: ItemType</li>
<li>minecraft:coal_block: ItemType</li>
<li>minecraft:coal_ore: ItemType</li>
<li>minecraft:cobbled_deepslate: ItemType</li>
<li>minecraft:cobbled_deepslate_double_slab: ItemType</li>
<li>minecraft:cobbled_deepslate_slab: ItemType</li>
<li>minecraft:cobbled_deepslate_stairs: ItemType</li>
<li>minecraft:cobbled_deepslate_wall: ItemType</li>
<li>minecraft:cobblestone: ItemType</li>
<li>minecraft:cobblestone_wall: ItemType</li>
<li>minecraft:cocoa: ItemType</li>
<li>minecraft:cocoa_beans: ItemType</li>
<li>minecraft:cod: ItemType</li>
<li>minecraft:cod_bucket: ItemType</li>
<li>minecraft:cod_spawn_egg: ItemType</li>
<li>minecraft:colored_torch_bp: ItemType</li>
<li>minecraft:colored_torch_rg: ItemType</li>
<li>minecraft:command_block: ItemType</li>
<li>minecraft:command_block_minecart: ItemType</li>
<li>minecraft:comparator: ItemType</li>
<li>minecraft:compass: ItemType</li>
<li>minecraft:composter: ItemType</li>
<li>minecraft:compound: ItemType</li>
<li>minecraft:concrete: ItemType</li>
<li>minecraft:concrete_powder: ItemType</li>
<li>minecraft:conduit: ItemType</li>
<li>minecraft:cooked_beef: ItemType</li>
<li>minecraft:cooked_chicken: ItemType</li>
<li>minecraft:cooked_cod: ItemType</li>
<li>minecraft:cooked_mutton: ItemType</li>
<li>minecraft:cooked_porkchop: ItemType</li>
<li>minecraft:cooked_rabbit: ItemType</li>
<li>minecraft:cooked_salmon: ItemType</li>
<li>minecraft:cookie: ItemType</li>
<li>minecraft:copper_block: ItemType</li>
<li>minecraft:copper_ingot: ItemType</li>
<li>minecraft:copper_ore: ItemType</li>
<li>minecraft:coral: ItemType</li>
<li>minecraft:coral_block: ItemType</li>
<li>minecraft:coral_fan: ItemType</li>
<li>minecraft:coral_fan_dead: ItemType</li>
<li>minecraft:coral_fan_hang: ItemType</li>
<li>minecraft:coral_fan_hang2: ItemType</li>
<li>minecraft:coral_fan_hang3: ItemType</li>
<li>minecraft:cow_spawn_egg: ItemType</li>
<li>minecraft:cracked_deepslate_bricks: ItemType</li>
<li>minecraft:cracked_deepslate_tiles: ItemType</li>
<li>minecraft:cracked_nether_bricks: ItemType</li>
<li>minecraft:cracked_polished_blackstone_bricks: ItemType</li>
<li>minecraft:crafting_table: ItemType</li>
<li>minecraft:creeper_banner_pattern: ItemType</li>
<li>minecraft:creeper_spawn_egg: ItemType</li>
<li>minecraft:crimson_button: ItemType</li>
<li>minecraft:crimson_door: ItemType</li>
<li>minecraft:crimson_double_slab: ItemType</li>
<li>minecraft:crimson_fence: ItemType</li>
<li>minecraft:crimson_fence_gate: ItemType</li>
<li>minecraft:crimson_fungus: ItemType</li>
<li>minecraft:crimson_hyphae: ItemType</li>
<li>minecraft:crimson_nylium: ItemType</li>
<li>minecraft:crimson_planks: ItemType</li>
<li>minecraft:crimson_pressure_plate: ItemType</li>
<li>minecraft:crimson_roots: ItemType</li>
<li>minecraft:crimson_sign: ItemType</li>
<li>minecraft:crimson_slab: ItemType</li>
<li>minecraft:crimson_stairs: ItemType</li>
<li>minecraft:crimson_standing_sign: ItemType</li>
<li>minecraft:crimson_stem: ItemType</li>
<li>minecraft:crimson_trapdoor: ItemType</li>
<li>minecraft:crimson_wall_sign: ItemType</li>
<li>minecraft:crossbow: ItemType</li>
<li>minecraft:crying_obsidian: ItemType</li>
<li>minecraft:cut_copper: ItemType</li>
<li>minecraft:cut_copper_slab: ItemType</li>
<li>minecraft:cut_copper_stairs: ItemType</li>
<li>minecraft:cyan_candle: ItemType</li>
<li>minecraft:cyan_candle_cake: ItemType</li>
<li>minecraft:cyan_dye: ItemType</li>
<li>minecraft:cyan_glazed_terracotta: ItemType</li>
<li>minecraft:dark_oak_boat: ItemType</li>
<li>minecraft:dark_oak_button: ItemType</li>
<li>minecraft:dark_oak_door: ItemType</li>
<li>minecraft:dark_oak_fence_gate: ItemType</li>
<li>minecraft:dark_oak_pressure_plate: ItemType</li>
<li>minecraft:dark_oak_sign: ItemType</li>
<li>minecraft:dark_oak_stairs: ItemType</li>
<li>minecraft:dark_oak_trapdoor: ItemType</li>
<li>minecraft:dark_prismarine_stairs: ItemType</li>
<li>minecraft:darkoak_standing_sign: ItemType</li>
<li>minecraft:darkoak_wall_sign: ItemType</li>
<li>minecraft:daylight_detector: ItemType</li>
<li>minecraft:daylight_detector_inverted: ItemType</li>
<li>minecraft:deadbush: ItemType</li>
<li>minecraft:debug_stick: ItemType</li>
<li>minecraft:deepslate: ItemType</li>
<li>minecraft:deepslate_brick_double_slab: ItemType</li>
<li>minecraft:deepslate_brick_slab: ItemType</li>
<li>minecraft:deepslate_brick_stairs: ItemType</li>
<li>minecraft:deepslate_brick_wall: ItemType</li>
<li>minecraft:deepslate_bricks: ItemType</li>
<li>minecraft:deepslate_coal_ore: ItemType</li>
<li>minecraft:deepslate_copper_ore: ItemType</li>
<li>minecraft:deepslate_diamond_ore: ItemType</li>
<li>minecraft:deepslate_emerald_ore: ItemType</li>
<li>minecraft:deepslate_gold_ore: ItemType</li>
<li>minecraft:deepslate_iron_ore: ItemType</li>
<li>minecraft:deepslate_lapis_ore: ItemType</li>
<li>minecraft:deepslate_redstone_ore: ItemType</li>
<li>minecraft:deepslate_tile_double_slab: ItemType</li>
<li>minecraft:deepslate_tile_slab: ItemType</li>
<li>minecraft:deepslate_tile_stairs: ItemType</li>
<li>minecraft:deepslate_tile_wall: ItemType</li>
<li>minecraft:deepslate_tiles: ItemType</li>
<li>minecraft:deny: ItemType</li>
<li>minecraft:detector_rail: ItemType</li>
<li>minecraft:diamond: ItemType</li>
<li>minecraft:diamond_axe: ItemType</li>
<li>minecraft:diamond_block: ItemType</li>
<li>minecraft:diamond_boots: ItemType</li>
<li>minecraft:diamond_chestplate: ItemType</li>
<li>minecraft:diamond_helmet: ItemType</li>
<li>minecraft:diamond_hoe: ItemType</li>
<li>minecraft:diamond_horse_armor: ItemType</li>
<li>minecraft:diamond_leggings: ItemType</li>
<li>minecraft:diamond_ore: ItemType</li>
<li>minecraft:diamond_pickaxe: ItemType</li>
<li>minecraft:diamond_shovel: ItemType</li>
<li>minecraft:diamond_sword: ItemType</li>
<li>minecraft:diorite_stairs: ItemType</li>
<li>minecraft:dirt: ItemType</li>
<li>minecraft:dirt_with_roots: ItemType</li>
<li>minecraft:dispenser: ItemType</li>
<li>minecraft:dolphin_spawn_egg: ItemType</li>
<li>minecraft:donkey_spawn_egg: ItemType</li>
<li>minecraft:double_cut_copper_slab: ItemType</li>
<li>minecraft:double_plant: ItemType</li>
<li>minecraft:double_stone_slab: ItemType</li>
<li>minecraft:double_stone_slab2: ItemType</li>
<li>minecraft:double_stone_slab3: ItemType</li>
<li>minecraft:double_stone_slab4: ItemType</li>
<li>minecraft:double_wooden_slab: ItemType</li>
<li>minecraft:dragon_breath: ItemType</li>
<li>minecraft:dragon_egg: ItemType</li>
<li>minecraft:dried_kelp: ItemType</li>
<li>minecraft:dried_kelp_block: ItemType</li>
<li>minecraft:dripstone_block: ItemType</li>
<li>minecraft:dropper: ItemType</li>
<li>minecraft:drowned_spawn_egg: ItemType</li>
<li>minecraft:dye: ItemType</li>
<li>minecraft:egg: ItemType</li>
<li>minecraft:elder_guardian_spawn_egg: ItemType</li>
<li>minecraft:element_0: ItemType</li>
<li>minecraft:element_1: ItemType</li>
<li>minecraft:element_10: ItemType</li>
<li>minecraft:element_100: ItemType</li>
<li>minecraft:element_101: ItemType</li>
<li>minecraft:element_102: ItemType</li>
<li>minecraft:element_103: ItemType</li>
<li>minecraft:element_104: ItemType</li>
<li>minecraft:element_105: ItemType</li>
<li>minecraft:element_106: ItemType</li>
<li>minecraft:element_107: ItemType</li>
<li>minecraft:element_108: ItemType</li>
<li>minecraft:element_109: ItemType</li>
<li>minecraft:element_11: ItemType</li>
<li>minecraft:element_110: ItemType</li>
<li>minecraft:element_111: ItemType</li>
<li>minecraft:element_112: ItemType</li>
<li>minecraft:element_113: ItemType</li>
<li>minecraft:element_114: ItemType</li>
<li>minecraft:element_115: ItemType</li>
<li>minecraft:element_116: ItemType</li>
<li>minecraft:element_117: ItemType</li>
<li>minecraft:element_118: ItemType</li>
<li>minecraft:element_12: ItemType</li>
<li>minecraft:element_13: ItemType</li>
<li>minecraft:element_14: ItemType</li>
<li>minecraft:element_15: ItemType</li>
<li>minecraft:element_16: ItemType</li>
<li>minecraft:element_17: ItemType</li>
<li>minecraft:element_18: ItemType</li>
<li>minecraft:element_19: ItemType</li>
<li>minecraft:element_2: ItemType</li>
<li>minecraft:element_20: ItemType</li>
<li>minecraft:element_21: ItemType</li>
<li>minecraft:element_22: ItemType</li>
<li>minecraft:element_23: ItemType</li>
<li>minecraft:element_24: ItemType</li>
<li>minecraft:element_25: ItemType</li>
<li>minecraft:element_26: ItemType</li>
<li>minecraft:element_27: ItemType</li>
<li>minecraft:element_28: ItemType</li>
<li>minecraft:element_29: ItemType</li>
<li>minecraft:element_3: ItemType</li>
<li>minecraft:element_30: ItemType</li>
<li>minecraft:element_31: ItemType</li>
<li>minecraft:element_32: ItemType</li>
<li>minecraft:element_33: ItemType</li>
<li>minecraft:element_34: ItemType</li>
<li>minecraft:element_35: ItemType</li>
<li>minecraft:element_36: ItemType</li>
<li>minecraft:element_37: ItemType</li>
<li>minecraft:element_38: ItemType</li>
<li>minecraft:element_39: ItemType</li>
<li>minecraft:element_4: ItemType</li>
<li>minecraft:element_40: ItemType</li>
<li>minecraft:element_41: ItemType</li>
<li>minecraft:element_42: ItemType</li>
<li>minecraft:element_43: ItemType</li>
<li>minecraft:element_44: ItemType</li>
<li>minecraft:element_45: ItemType</li>
<li>minecraft:element_46: ItemType</li>
<li>minecraft:element_47: ItemType</li>
<li>minecraft:element_48: ItemType</li>
<li>minecraft:element_49: ItemType</li>
<li>minecraft:element_5: ItemType</li>
<li>minecraft:element_50: ItemType</li>
<li>minecraft:element_51: ItemType</li>
<li>minecraft:element_52: ItemType</li>
<li>minecraft:element_53: ItemType</li>
<li>minecraft:element_54: ItemType</li>
<li>minecraft:element_55: ItemType</li>
<li>minecraft:element_56: ItemType</li>
<li>minecraft:element_57: ItemType</li>
<li>minecraft:element_58: ItemType</li>
<li>minecraft:element_59: ItemType</li>
<li>minecraft:element_6: ItemType</li>
<li>minecraft:element_60: ItemType</li>
<li>minecraft:element_61: ItemType</li>
<li>minecraft:element_62: ItemType</li>
<li>minecraft:element_63: ItemType</li>
<li>minecraft:element_64: ItemType</li>
<li>minecraft:element_65: ItemType</li>
<li>minecraft:element_66: ItemType</li>
<li>minecraft:element_67: ItemType</li>
<li>minecraft:element_68: ItemType</li>
<li>minecraft:element_69: ItemType</li>
<li>minecraft:element_7: ItemType</li>
<li>minecraft:element_70: ItemType</li>
<li>minecraft:element_71: ItemType</li>
<li>minecraft:element_72: ItemType</li>
<li>minecraft:element_73: ItemType</li>
<li>minecraft:element_74: ItemType</li>
<li>minecraft:element_75: ItemType</li>
<li>minecraft:element_76: ItemType</li>
<li>minecraft:element_77: ItemType</li>
<li>minecraft:element_78: ItemType</li>
<li>minecraft:element_79: ItemType</li>
<li>minecraft:element_8: ItemType</li>
<li>minecraft:element_80: ItemType</li>
<li>minecraft:element_81: ItemType</li>
<li>minecraft:element_82: ItemType</li>
<li>minecraft:element_83: ItemType</li>
<li>minecraft:element_84: ItemType</li>
<li>minecraft:element_85: ItemType</li>
<li>minecraft:element_86: ItemType</li>
<li>minecraft:element_87: ItemType</li>
<li>minecraft:element_88: ItemType</li>
<li>minecraft:element_89: ItemType</li>
<li>minecraft:element_9: ItemType</li>
<li>minecraft:element_90: ItemType</li>
<li>minecraft:element_91: ItemType</li>
<li>minecraft:element_92: ItemType</li>
<li>minecraft:element_93: ItemType</li>
<li>minecraft:element_94: ItemType</li>
<li>minecraft:element_95: ItemType</li>
<li>minecraft:element_96: ItemType</li>
<li>minecraft:element_97: ItemType</li>
<li>minecraft:element_98: ItemType</li>
<li>minecraft:element_99: ItemType</li>
<li>minecraft:elytra: ItemType</li>
<li>minecraft:emerald: ItemType</li>
<li>minecraft:emerald_block: ItemType</li>
<li>minecraft:emerald_ore: ItemType</li>
<li>minecraft:empty_map: ItemType</li>
<li>minecraft:enchanted_book: ItemType</li>
<li>minecraft:enchanted_golden_apple: ItemType</li>
<li>minecraft:enchanting_table: ItemType</li>
<li>minecraft:end_brick_stairs: ItemType</li>
<li>minecraft:end_bricks: ItemType</li>
<li>minecraft:end_crystal: ItemType</li>
<li>minecraft:end_gateway: ItemType</li>
<li>minecraft:end_portal: ItemType</li>
<li>minecraft:end_portal_frame: ItemType</li>
<li>minecraft:end_rod: ItemType</li>
<li>minecraft:end_stone: ItemType</li>
<li>minecraft:ender_chest: ItemType</li>
<li>minecraft:ender_eye: ItemType</li>
<li>minecraft:ender_pearl: ItemType</li>
<li>minecraft:enderman_spawn_egg: ItemType</li>
<li>minecraft:endermite_spawn_egg: ItemType</li>
<li>minecraft:evoker_spawn_egg: ItemType</li>
<li>minecraft:experience_bottle: ItemType</li>
<li>minecraft:exposed_copper: ItemType</li>
<li>minecraft:exposed_cut_copper: ItemType</li>
<li>minecraft:exposed_cut_copper_slab: ItemType</li>
<li>minecraft:exposed_cut_copper_stairs: ItemType</li>
<li>minecraft:exposed_double_cut_copper_slab: ItemType</li>
<li>minecraft:farmland: ItemType</li>
<li>minecraft:feather: ItemType</li>
<li>minecraft:fence: ItemType</li>
<li>minecraft:fence_gate: ItemType</li>
<li>minecraft:fermented_spider_eye: ItemType</li>
<li>minecraft:field_masoned_banner_pattern: ItemType</li>
<li>minecraft:filled_map: ItemType</li>
<li>minecraft:fire: ItemType</li>
<li>minecraft:fire_charge: ItemType</li>
<li>minecraft:firework_rocket: ItemType</li>
<li>minecraft:firework_star: ItemType</li>
<li>minecraft:fishing_rod: ItemType</li>
<li>minecraft:fletching_table: ItemType</li>
<li>minecraft:flint: ItemType</li>
<li>minecraft:flint_and_steel: ItemType</li>
<li>minecraft:flower_banner_pattern: ItemType</li>
<li>minecraft:flower_pot: ItemType</li>
<li>minecraft:flowering_azalea: ItemType</li>
<li>minecraft:flowing_lava: ItemType</li>
<li>minecraft:flowing_water: ItemType</li>
<li>minecraft:fox_spawn_egg: ItemType</li>
<li>minecraft:frame: ItemType</li>
<li>minecraft:frosted_ice: ItemType</li>
<li>minecraft:furnace: ItemType</li>
<li>minecraft:ghast_spawn_egg: ItemType</li>
<li>minecraft:ghast_tear: ItemType</li>
<li>minecraft:gilded_blackstone: ItemType</li>
<li>minecraft:glass: ItemType</li>
<li>minecraft:glass_bottle: ItemType</li>
<li>minecraft:glass_pane: ItemType</li>
<li>minecraft:glistering_melon_slice: ItemType</li>
<li>minecraft:glow_berries: ItemType</li>
<li>minecraft:glow_frame: ItemType</li>
<li>minecraft:glow_ink_sac: ItemType</li>
<li>minecraft:glow_lichen: ItemType</li>
<li>minecraft:glow_squid_spawn_egg: ItemType</li>
<li>minecraft:glow_stick: ItemType</li>
<li>minecraft:glowingobsidian: ItemType</li>
<li>minecraft:glowstone: ItemType</li>
<li>minecraft:glowstone_dust: ItemType</li>
<li>minecraft:goat_horn: ItemType</li>
<li>minecraft:goat_spawn_egg: ItemType</li>
<li>minecraft:gold_block: ItemType</li>
<li>minecraft:gold_ingot: ItemType</li>
<li>minecraft:gold_nugget: ItemType</li>
<li>minecraft:gold_ore: ItemType</li>
<li>minecraft:golden_apple: ItemType</li>
<li>minecraft:golden_axe: ItemType</li>
<li>minecraft:golden_boots: ItemType</li>
<li>minecraft:golden_carrot: ItemType</li>
<li>minecraft:golden_chestplate: ItemType</li>
<li>minecraft:golden_helmet: ItemType</li>
<li>minecraft:golden_hoe: ItemType</li>
<li>minecraft:golden_horse_armor: ItemType</li>
<li>minecraft:golden_leggings: ItemType</li>
<li>minecraft:golden_pickaxe: ItemType</li>
<li>minecraft:golden_rail: ItemType</li>
<li>minecraft:golden_shovel: ItemType</li>
<li>minecraft:golden_sword: ItemType</li>
<li>minecraft:granite_stairs: ItemType</li>
<li>minecraft:grass: ItemType</li>
<li>minecraft:grass_path: ItemType</li>
<li>minecraft:gravel: ItemType</li>
<li>minecraft:gray_candle: ItemType</li>
<li>minecraft:gray_candle_cake: ItemType</li>
<li>minecraft:gray_dye: ItemType</li>
<li>minecraft:gray_glazed_terracotta: ItemType</li>
<li>minecraft:green_candle: ItemType</li>
<li>minecraft:green_candle_cake: ItemType</li>
<li>minecraft:green_dye: ItemType</li>
<li>minecraft:green_glazed_terracotta: ItemType</li>
<li>minecraft:grindstone: ItemType</li>
<li>minecraft:guardian_spawn_egg: ItemType</li>
<li>minecraft:gunpowder: ItemType</li>
<li>minecraft:hanging_roots: ItemType</li>
<li>minecraft:hard_glass: ItemType</li>
<li>minecraft:hard_glass_pane: ItemType</li>
<li>minecraft:hard_stained_glass: ItemType</li>
<li>minecraft:hard_stained_glass_pane: ItemType</li>
<li>minecraft:hardened_clay: ItemType</li>
<li>minecraft:hay_block: ItemType</li>
<li>minecraft:heart_of_the_sea: ItemType</li>
<li>minecraft:heavy_weighted_pressure_plate: ItemType</li>
<li>minecraft:hoglin_spawn_egg: ItemType</li>
<li>minecraft:honey_block: ItemType</li>
<li>minecraft:honey_bottle: ItemType</li>
<li>minecraft:honeycomb: ItemType</li>
<li>minecraft:honeycomb_block: ItemType</li>
<li>minecraft:hopper: ItemType</li>
<li>minecraft:hopper_minecart: ItemType</li>
<li>minecraft:horse_spawn_egg: ItemType</li>
<li>minecraft:husk_spawn_egg: ItemType</li>
<li>minecraft:ice: ItemType</li>
<li>minecraft:ice_bomb: ItemType</li>
<li>minecraft:infested_deepslate: ItemType</li>
<li>minecraft:info_update: ItemType</li>
<li>minecraft:info_update2: ItemType</li>
<li>minecraft:ink_sac: ItemType</li>
<li>minecraft:invisiblebedrock: ItemType</li>
<li>minecraft:iron_axe: ItemType</li>
<li>minecraft:iron_bars: ItemType</li>
<li>minecraft:iron_block: ItemType</li>
<li>minecraft:iron_boots: ItemType</li>
<li>minecraft:iron_chestplate: ItemType</li>
<li>minecraft:iron_door: ItemType</li>
<li>minecraft:iron_helmet: ItemType</li>
<li>minecraft:iron_hoe: ItemType</li>
<li>minecraft:iron_horse_armor: ItemType</li>
<li>minecraft:iron_ingot: ItemType</li>
<li>minecraft:iron_leggings: ItemType</li>
<li>minecraft:iron_nugget: ItemType</li>
<li>minecraft:iron_ore: ItemType</li>
<li>minecraft:iron_pickaxe: ItemType</li>
<li>minecraft:iron_shovel: ItemType</li>
<li>minecraft:iron_sword: ItemType</li>
<li>minecraft:iron_trapdoor: ItemType</li>
<li>minecraft:item.acacia_door: ItemType</li>
<li>minecraft:item.bed: ItemType</li>
<li>minecraft:item.beetroot: ItemType</li>
<li>minecraft:item.birch_door: ItemType</li>
<li>minecraft:item.cake: ItemType</li>
<li>minecraft:item.camera: ItemType</li>
<li>minecraft:item.campfire: ItemType</li>
<li>minecraft:item.cauldron: ItemType</li>
<li>minecraft:item.chain: ItemType</li>
<li>minecraft:item.crimson_door: ItemType</li>
<li>minecraft:item.dark_oak_door: ItemType</li>
<li>minecraft:item.flower_pot: ItemType</li>
<li>minecraft:item.frame: ItemType</li>
<li>minecraft:item.glow_frame: ItemType</li>
<li>minecraft:item.hopper: ItemType</li>
<li>minecraft:item.iron_door: ItemType</li>
<li>minecraft:item.jungle_door: ItemType</li>
<li>minecraft:item.kelp: ItemType</li>
<li>minecraft:item.nether_sprouts: ItemType</li>
<li>minecraft:item.nether_wart: ItemType</li>
<li>minecraft:item.reeds: ItemType</li>
<li>minecraft:item.skull: ItemType</li>
<li>minecraft:item.soul_campfire: ItemType</li>
<li>minecraft:item.spruce_door: ItemType</li>
<li>minecraft:item.warped_door: ItemType</li>
<li>minecraft:item.wheat: ItemType</li>
<li>minecraft:item.wooden_door: ItemType</li>
<li>minecraft:jigsaw: ItemType</li>
<li>minecraft:jukebox: ItemType</li>
<li>minecraft:jungle_boat: ItemType</li>
<li>minecraft:jungle_button: ItemType</li>
<li>minecraft:jungle_door: ItemType</li>
<li>minecraft:jungle_fence_gate: ItemType</li>
<li>minecraft:jungle_pressure_plate: ItemType</li>
<li>minecraft:jungle_sign: ItemType</li>
<li>minecraft:jungle_stairs: ItemType</li>
<li>minecraft:jungle_standing_sign: ItemType</li>
<li>minecraft:jungle_trapdoor: ItemType</li>
<li>minecraft:jungle_wall_sign: ItemType</li>
<li>minecraft:kelp: ItemType</li>
<li>minecraft:ladder: ItemType</li>
<li>minecraft:lantern: ItemType</li>
<li>minecraft:lapis_block: ItemType</li>
<li>minecraft:lapis_lazuli: ItemType</li>
<li>minecraft:lapis_ore: ItemType</li>
<li>minecraft:large_amethyst_bud: ItemType</li>
<li>minecraft:lava: ItemType</li>
<li>minecraft:lava_bucket: ItemType</li>
<li>minecraft:lava_cauldron: ItemType</li>
<li>minecraft:lead: ItemType</li>
<li>minecraft:leather: ItemType</li>
<li>minecraft:leather_boots: ItemType</li>
<li>minecraft:leather_chestplate: ItemType</li>
<li>minecraft:leather_helmet: ItemType</li>
<li>minecraft:leather_horse_armor: ItemType</li>
<li>minecraft:leather_leggings: ItemType</li>
<li>minecraft:leaves: ItemType</li>
<li>minecraft:leaves2: ItemType</li>
<li>minecraft:lectern: ItemType</li>
<li>minecraft:lever: ItemType</li>
<li>minecraft:light_block: ItemType</li>
<li>minecraft:light_blue_candle: ItemType</li>
<li>minecraft:light_blue_candle_cake: ItemType</li>
<li>minecraft:light_blue_dye: ItemType</li>
<li>minecraft:light_blue_glazed_terracotta: ItemType</li>
<li>minecraft:light_gray_candle: ItemType</li>
<li>minecraft:light_gray_candle_cake: ItemType</li>
<li>minecraft:light_gray_dye: ItemType</li>
<li>minecraft:light_weighted_pressure_plate: ItemType</li>
<li>minecraft:lightning_rod: ItemType</li>
<li>minecraft:lime_candle: ItemType</li>
<li>minecraft:lime_candle_cake: ItemType</li>
<li>minecraft:lime_dye: ItemType</li>
<li>minecraft:lime_glazed_terracotta: ItemType</li>
<li>minecraft:lingering_potion: ItemType</li>
<li>minecraft:lit_blast_furnace: ItemType</li>
<li>minecraft:lit_deepslate_redstone_ore: ItemType</li>
<li>minecraft:lit_furnace: ItemType</li>
<li>minecraft:lit_pumpkin: ItemType</li>
<li>minecraft:lit_redstone_lamp: ItemType</li>
<li>minecraft:lit_redstone_ore: ItemType</li>
<li>minecraft:lit_smoker: ItemType</li>
<li>minecraft:llama_spawn_egg: ItemType</li>
<li>minecraft:lodestone: ItemType</li>
<li>minecraft:lodestone_compass: ItemType</li>
<li>minecraft:log: ItemType</li>
<li>minecraft:log2: ItemType</li>
<li>minecraft:loom: ItemType</li>
<li>minecraft:magenta_candle: ItemType</li>
<li>minecraft:magenta_candle_cake: ItemType</li>
<li>minecraft:magenta_dye: ItemType</li>
<li>minecraft:magenta_glazed_terracotta: ItemType</li>
<li>minecraft:magma: ItemType</li>
<li>minecraft:magma_cream: ItemType</li>
<li>minecraft:magma_cube_spawn_egg: ItemType</li>
<li>minecraft:medicine: ItemType</li>
<li>minecraft:medium_amethyst_bud: ItemType</li>
<li>minecraft:melon_block: ItemType</li>
<li>minecraft:melon_seeds: ItemType</li>
<li>minecraft:melon_slice: ItemType</li>
<li>minecraft:melon_stem: ItemType</li>
<li>minecraft:milk_bucket: ItemType</li>
<li>minecraft:minecart: ItemType</li>
<li>minecraft:mob_spawner: ItemType</li>
<li>minecraft:mojang_banner_pattern: ItemType</li>
<li>minecraft:monster_egg: ItemType</li>
<li>minecraft:mooshroom_spawn_egg: ItemType</li>
<li>minecraft:moss_block: ItemType</li>
<li>minecraft:moss_carpet: ItemType</li>
<li>minecraft:mossy_cobblestone: ItemType</li>
<li>minecraft:mossy_cobblestone_stairs: ItemType</li>
<li>minecraft:mossy_stone_brick_stairs: ItemType</li>
<li>minecraft:movingblock: ItemType</li>
<li>minecraft:mule_spawn_egg: ItemType</li>
<li>minecraft:mushroom_stew: ItemType</li>
<li>minecraft:music_disc_11: ItemType</li>
<li>minecraft:music_disc_13: ItemType</li>
<li>minecraft:music_disc_blocks: ItemType</li>
<li>minecraft:music_disc_cat: ItemType</li>
<li>minecraft:music_disc_chirp: ItemType</li>
<li>minecraft:music_disc_far: ItemType</li>
<li>minecraft:music_disc_mall: ItemType</li>
<li>minecraft:music_disc_mellohi: ItemType</li>
<li>minecraft:music_disc_pigstep: ItemType</li>
<li>minecraft:music_disc_stal: ItemType</li>
<li>minecraft:music_disc_strad: ItemType</li>
<li>minecraft:music_disc_wait: ItemType</li>
<li>minecraft:music_disc_ward: ItemType</li>
<li>minecraft:mutton: ItemType</li>
<li>minecraft:mycelium: ItemType</li>
<li>minecraft:name_tag: ItemType</li>
<li>minecraft:nautilus_shell: ItemType</li>
<li>minecraft:nether_brick: ItemType</li>
<li>minecraft:nether_brick_fence: ItemType</li>
<li>minecraft:nether_brick_stairs: ItemType</li>
<li>minecraft:nether_gold_ore: ItemType</li>
<li>minecraft:nether_sprouts: ItemType</li>
<li>minecraft:nether_star: ItemType</li>
<li>minecraft:nether_wart: ItemType</li>
<li>minecraft:nether_wart_block: ItemType</li>
<li>minecraft:netherbrick: ItemType</li>
<li>minecraft:netherite_axe: ItemType</li>
<li>minecraft:netherite_block: ItemType</li>
<li>minecraft:netherite_boots: ItemType</li>
<li>minecraft:netherite_chestplate: ItemType</li>
<li>minecraft:netherite_helmet: ItemType</li>
<li>minecraft:netherite_hoe: ItemType</li>
<li>minecraft:netherite_ingot: ItemType</li>
<li>minecraft:netherite_leggings: ItemType</li>
<li>minecraft:netherite_pickaxe: ItemType</li>
<li>minecraft:netherite_scrap: ItemType</li>
<li>minecraft:netherite_shovel: ItemType</li>
<li>minecraft:netherite_sword: ItemType</li>
<li>minecraft:netherrack: ItemType</li>
<li>minecraft:netherreactor: ItemType</li>
<li>minecraft:normal_stone_stairs: ItemType</li>
<li>minecraft:noteblock: ItemType</li>
<li>minecraft:npc_spawn_egg: ItemType</li>
<li>minecraft:oak_boat: ItemType</li>
<li>minecraft:oak_sign: ItemType</li>
<li>minecraft:oak_stairs: ItemType</li>
<li>minecraft:observer: ItemType</li>
<li>minecraft:obsidian: ItemType</li>
<li>minecraft:ocelot_spawn_egg: ItemType</li>
<li>minecraft:orange_candle: ItemType</li>
<li>minecraft:orange_candle_cake: ItemType</li>
<li>minecraft:orange_dye: ItemType</li>
<li>minecraft:orange_glazed_terracotta: ItemType</li>
<li>minecraft:oxidized_copper: ItemType</li>
<li>minecraft:oxidized_cut_copper: ItemType</li>
<li>minecraft:oxidized_cut_copper_slab: ItemType</li>
<li>minecraft:oxidized_cut_copper_stairs: ItemType</li>
<li>minecraft:oxidized_double_cut_copper_slab: ItemType</li>
<li>minecraft:packed_ice: ItemType</li>
<li>minecraft:painting: ItemType</li>
<li>minecraft:panda_spawn_egg: ItemType</li>
<li>minecraft:paper: ItemType</li>
<li>minecraft:parrot_spawn_egg: ItemType</li>
<li>minecraft:phantom_membrane: ItemType</li>
<li>minecraft:phantom_spawn_egg: ItemType</li>
<li>minecraft:pig_spawn_egg: ItemType</li>
<li>minecraft:piglin_banner_pattern: ItemType</li>
<li>minecraft:piglin_brute_spawn_egg: ItemType</li>
<li>minecraft:piglin_spawn_egg: ItemType</li>
<li>minecraft:pillager_spawn_egg: ItemType</li>
<li>minecraft:pink_candle: ItemType</li>
<li>minecraft:pink_candle_cake: ItemType</li>
<li>minecraft:pink_dye: ItemType</li>
<li>minecraft:pink_glazed_terracotta: ItemType</li>
<li>minecraft:piston: ItemType</li>
<li>minecraft:pistonarmcollision: ItemType</li>
<li>minecraft:planks: ItemType</li>
<li>minecraft:podzol: ItemType</li>
<li>minecraft:pointed_dripstone: ItemType</li>
<li>minecraft:poisonous_potato: ItemType</li>
<li>minecraft:polar_bear_spawn_egg: ItemType</li>
<li>minecraft:polished_andesite_stairs: ItemType</li>
<li>minecraft:polished_basalt: ItemType</li>
<li>minecraft:polished_blackstone: ItemType</li>
<li>minecraft:polished_blackstone_brick_double_slab: ItemType</li>
<li>minecraft:polished_blackstone_brick_slab: ItemType</li>
<li>minecraft:polished_blackstone_brick_stairs: ItemType</li>
<li>minecraft:polished_blackstone_brick_wall: ItemType</li>
<li>minecraft:polished_blackstone_bricks: ItemType</li>
<li>minecraft:polished_blackstone_button: ItemType</li>
<li>minecraft:polished_blackstone_double_slab: ItemType</li>
<li>minecraft:polished_blackstone_pressure_plate: ItemType</li>
<li>minecraft:polished_blackstone_slab: ItemType</li>
<li>minecraft:polished_blackstone_stairs: ItemType</li>
<li>minecraft:polished_blackstone_wall: ItemType</li>
<li>minecraft:polished_deepslate: ItemType</li>
<li>minecraft:polished_deepslate_double_slab: ItemType</li>
<li>minecraft:polished_deepslate_slab: ItemType</li>
<li>minecraft:polished_deepslate_stairs: ItemType</li>
<li>minecraft:polished_deepslate_wall: ItemType</li>
<li>minecraft:polished_diorite_stairs: ItemType</li>
<li>minecraft:polished_granite_stairs: ItemType</li>
<li>minecraft:popped_chorus_fruit: ItemType</li>
<li>minecraft:porkchop: ItemType</li>
<li>minecraft:portal: ItemType</li>
<li>minecraft:potato: ItemType</li>
<li>minecraft:potatoes: ItemType</li>
<li>minecraft:potion: ItemType</li>
<li>minecraft:powder_snow: ItemType</li>
<li>minecraft:powder_snow_bucket: ItemType</li>
<li>minecraft:powered_comparator: ItemType</li>
<li>minecraft:powered_repeater: ItemType</li>
<li>minecraft:prismarine: ItemType</li>
<li>minecraft:prismarine_bricks_stairs: ItemType</li>
<li>minecraft:prismarine_crystals: ItemType</li>
<li>minecraft:prismarine_shard: ItemType</li>
<li>minecraft:prismarine_stairs: ItemType</li>
<li>minecraft:pufferfish: ItemType</li>
<li>minecraft:pufferfish_bucket: ItemType</li>
<li>minecraft:pufferfish_spawn_egg: ItemType</li>
<li>minecraft:pumpkin: ItemType</li>
<li>minecraft:pumpkin_pie: ItemType</li>
<li>minecraft:pumpkin_seeds: ItemType</li>
<li>minecraft:pumpkin_stem: ItemType</li>
<li>minecraft:purple_candle: ItemType</li>
<li>minecraft:purple_candle_cake: ItemType</li>
<li>minecraft:purple_dye: ItemType</li>
<li>minecraft:purple_glazed_terracotta: ItemType</li>
<li>minecraft:purpur_block: ItemType</li>
<li>minecraft:purpur_stairs: ItemType</li>
<li>minecraft:quartz: ItemType</li>
<li>minecraft:quartz_block: ItemType</li>
<li>minecraft:quartz_bricks: ItemType</li>
<li>minecraft:quartz_ore: ItemType</li>
<li>minecraft:quartz_stairs: ItemType</li>
<li>minecraft:rabbit: ItemType</li>
<li>minecraft:rabbit_foot: ItemType</li>
<li>minecraft:rabbit_hide: ItemType</li>
<li>minecraft:rabbit_spawn_egg: ItemType</li>
<li>minecraft:rabbit_stew: ItemType</li>
<li>minecraft:rail: ItemType</li>
<li>minecraft:rapid_fertilizer: ItemType</li>
<li>minecraft:ravager_spawn_egg: ItemType</li>
<li>minecraft:raw_copper: ItemType</li>
<li>minecraft:raw_copper_block: ItemType</li>
<li>minecraft:raw_gold: ItemType</li>
<li>minecraft:raw_gold_block: ItemType</li>
<li>minecraft:raw_iron: ItemType</li>
<li>minecraft:raw_iron_block: ItemType</li>
<li>minecraft:real_double_stone_slab: ItemType</li>
<li>minecraft:real_double_stone_slab2: ItemType</li>
<li>minecraft:real_double_stone_slab3: ItemType</li>
<li>minecraft:real_double_stone_slab4: ItemType</li>
<li>minecraft:red_candle: ItemType</li>
<li>minecraft:red_candle_cake: ItemType</li>
<li>minecraft:red_dye: ItemType</li>
<li>minecraft:red_flower: ItemType</li>
<li>minecraft:red_glazed_terracotta: ItemType</li>
<li>minecraft:red_mushroom: ItemType</li>
<li>minecraft:red_mushroom_block: ItemType</li>
<li>minecraft:red_nether_brick: ItemType</li>
<li>minecraft:red_nether_brick_stairs: ItemType</li>
<li>minecraft:red_sandstone: ItemType</li>
<li>minecraft:red_sandstone_stairs: ItemType</li>
<li>minecraft:redstone: ItemType</li>
<li>minecraft:redstone_block: ItemType</li>
<li>minecraft:redstone_lamp: ItemType</li>
<li>minecraft:redstone_ore: ItemType</li>
<li>minecraft:redstone_torch: ItemType</li>
<li>minecraft:redstone_wire: ItemType</li>
<li>minecraft:repeater: ItemType</li>
<li>minecraft:repeating_command_block: ItemType</li>
<li>minecraft:reserved6: ItemType</li>
<li>minecraft:respawn_anchor: ItemType</li>
<li>minecraft:rotten_flesh: ItemType</li>
<li>minecraft:saddle: ItemType</li>
<li>minecraft:salmon: ItemType</li>
<li>minecraft:salmon_bucket: ItemType</li>
<li>minecraft:salmon_spawn_egg: ItemType</li>
<li>minecraft:sand: ItemType</li>
<li>minecraft:sandstone: ItemType</li>
<li>minecraft:sandstone_stairs: ItemType</li>
<li>minecraft:sapling: ItemType</li>
<li>minecraft:scaffolding: ItemType</li>
<li>minecraft:sculk_sensor: ItemType</li>
<li>minecraft:scute: ItemType</li>
<li>minecraft:sea_pickle: ItemType</li>
<li>minecraft:seagrass: ItemType</li>
<li>minecraft:sealantern: ItemType</li>
<li>minecraft:shears: ItemType</li>
<li>minecraft:sheep_spawn_egg: ItemType</li>
<li>minecraft:shield: ItemType</li>
<li>minecraft:shroomlight: ItemType</li>
<li>minecraft:shulker_box: ItemType</li>
<li>minecraft:shulker_shell: ItemType</li>
<li>minecraft:shulker_spawn_egg: ItemType</li>
<li>minecraft:silver_glazed_terracotta: ItemType</li>
<li>minecraft:silverfish_spawn_egg: ItemType</li>
<li>minecraft:skeleton_horse_spawn_egg: ItemType</li>
<li>minecraft:skeleton_spawn_egg: ItemType</li>
<li>minecraft:skull: ItemType</li>
<li>minecraft:skull_banner_pattern: ItemType</li>
<li>minecraft:slime: ItemType</li>
<li>minecraft:slime_ball: ItemType</li>
<li>minecraft:slime_spawn_egg: ItemType</li>
<li>minecraft:small_amethyst_bud: ItemType</li>
<li>minecraft:small_dripleaf_block: ItemType</li>
<li>minecraft:smithing_table: ItemType</li>
<li>minecraft:smoker: ItemType</li>
<li>minecraft:smooth_basalt: ItemType</li>
<li>minecraft:smooth_quartz_stairs: ItemType</li>
<li>minecraft:smooth_red_sandstone_stairs: ItemType</li>
<li>minecraft:smooth_sandstone_stairs: ItemType</li>
<li>minecraft:smooth_stone: ItemType</li>
<li>minecraft:snow: ItemType</li>
<li>minecraft:snow_layer: ItemType</li>
<li>minecraft:snowball: ItemType</li>
<li>minecraft:soul_campfire: ItemType</li>
<li>minecraft:soul_fire: ItemType</li>
<li>minecraft:soul_lantern: ItemType</li>
<li>minecraft:soul_sand: ItemType</li>
<li>minecraft:soul_soil: ItemType</li>
<li>minecraft:soul_torch: ItemType</li>
<li>minecraft:sparkler: ItemType</li>
<li>minecraft:spawn_egg: ItemType</li>
<li>minecraft:spider_eye: ItemType</li>
<li>minecraft:spider_spawn_egg: ItemType</li>
<li>minecraft:splash_potion: ItemType</li>
<li>minecraft:sponge: ItemType</li>
<li>minecraft:spore_blossom: ItemType</li>
<li>minecraft:spruce_boat: ItemType</li>
<li>minecraft:spruce_button: ItemType</li>
<li>minecraft:spruce_door: ItemType</li>
<li>minecraft:spruce_fence_gate: ItemType</li>
<li>minecraft:spruce_pressure_plate: ItemType</li>
<li>minecraft:spruce_sign: ItemType</li>
<li>minecraft:spruce_stairs: ItemType</li>
<li>minecraft:spruce_standing_sign: ItemType</li>
<li>minecraft:spruce_trapdoor: ItemType</li>
<li>minecraft:spruce_wall_sign: ItemType</li>
<li>minecraft:spyglass: ItemType</li>
<li>minecraft:squid_spawn_egg: ItemType</li>
<li>minecraft:stained_glass: ItemType</li>
<li>minecraft:stained_glass_pane: ItemType</li>
<li>minecraft:stained_hardened_clay: ItemType</li>
<li>minecraft:standing_banner: ItemType</li>
<li>minecraft:standing_sign: ItemType</li>
<li>minecraft:stick: ItemType</li>
<li>minecraft:sticky_piston: ItemType</li>
<li>minecraft:stickypistonarmcollision: ItemType</li>
<li>minecraft:stone: ItemType</li>
<li>minecraft:stone_axe: ItemType</li>
<li>minecraft:stone_brick_stairs: ItemType</li>
<li>minecraft:stone_button: ItemType</li>
<li>minecraft:stone_hoe: ItemType</li>
<li>minecraft:stone_pickaxe: ItemType</li>
<li>minecraft:stone_pressure_plate: ItemType</li>
<li>minecraft:stone_shovel: ItemType</li>
<li>minecraft:stone_stairs: ItemType</li>
<li>minecraft:stone_sword: ItemType</li>
<li>minecraft:stonebrick: ItemType</li>
<li>minecraft:stonecutter: ItemType</li>
<li>minecraft:stonecutter_block: ItemType</li>
<li>minecraft:stray_spawn_egg: ItemType</li>
<li>minecraft:strider_spawn_egg: ItemType</li>
<li>minecraft:string: ItemType</li>
<li>minecraft:stripped_acacia_log: ItemType</li>
<li>minecraft:stripped_birch_log: ItemType</li>
<li>minecraft:stripped_crimson_hyphae: ItemType</li>
<li>minecraft:stripped_crimson_stem: ItemType</li>
<li>minecraft:stripped_dark_oak_log: ItemType</li>
<li>minecraft:stripped_jungle_log: ItemType</li>
<li>minecraft:stripped_oak_log: ItemType</li>
<li>minecraft:stripped_spruce_log: ItemType</li>
<li>minecraft:stripped_warped_hyphae: ItemType</li>
<li>minecraft:stripped_warped_stem: ItemType</li>
<li>minecraft:structure_block: ItemType</li>
<li>minecraft:structure_void: ItemType</li>
<li>minecraft:sugar: ItemType</li>
<li>minecraft:sugar_cane: ItemType</li>
<li>minecraft:suspicious_stew: ItemType</li>
<li>minecraft:sweet_berries: ItemType</li>
<li>minecraft:sweet_berry_bush: ItemType</li>
<li>minecraft:tallgrass: ItemType</li>
<li>minecraft:target: ItemType</li>
<li>minecraft:tinted_glass: ItemType</li>
<li>minecraft:tnt: ItemType</li>
<li>minecraft:tnt_minecart: ItemType</li>
<li>minecraft:torch: ItemType</li>
<li>minecraft:totem_of_undying: ItemType</li>
<li>minecraft:trapdoor: ItemType</li>
<li>minecraft:trapped_chest: ItemType</li>
<li>minecraft:trident: ItemType</li>
<li>minecraft:tripwire: ItemType</li>
<li>minecraft:tripwire_hook: ItemType</li>
<li>minecraft:tropical_fish: ItemType</li>
<li>minecraft:tropical_fish_bucket: ItemType</li>
<li>minecraft:tropical_fish_spawn_egg: ItemType</li>
<li>minecraft:tuff: ItemType</li>
<li>minecraft:turtle_egg: ItemType</li>
<li>minecraft:turtle_helmet: ItemType</li>
<li>minecraft:turtle_spawn_egg: ItemType</li>
<li>minecraft:twisting_vines: ItemType</li>
<li>minecraft:underwater_torch: ItemType</li>
<li>minecraft:undyed_shulker_box: ItemType</li>
<li>minecraft:unknown: ItemType</li>
<li>minecraft:unlit_redstone_torch: ItemType</li>
<li>minecraft:unpowered_comparator: ItemType</li>
<li>minecraft:unpowered_repeater: ItemType</li>
<li>minecraft:vex_spawn_egg: ItemType</li>
<li>minecraft:villager_spawn_egg: ItemType</li>
<li>minecraft:vindicator_spawn_egg: ItemType</li>
<li>minecraft:vine: ItemType</li>
<li>minecraft:wall_banner: ItemType</li>
<li>minecraft:wall_sign: ItemType</li>
<li>minecraft:wandering_trader_spawn_egg: ItemType</li>
<li>minecraft:warped_button: ItemType</li>
<li>minecraft:warped_door: ItemType</li>
<li>minecraft:warped_double_slab: ItemType</li>
<li>minecraft:warped_fence: ItemType</li>
<li>minecraft:warped_fence_gate: ItemType</li>
<li>minecraft:warped_fungus: ItemType</li>
<li>minecraft:warped_fungus_on_a_stick: ItemType</li>
<li>minecraft:warped_hyphae: ItemType</li>
<li>minecraft:warped_nylium: ItemType</li>
<li>minecraft:warped_planks: ItemType</li>
<li>minecraft:warped_pressure_plate: ItemType</li>
<li>minecraft:warped_roots: ItemType</li>
<li>minecraft:warped_sign: ItemType</li>
<li>minecraft:warped_slab: ItemType</li>
<li>minecraft:warped_stairs: ItemType</li>
<li>minecraft:warped_standing_sign: ItemType</li>
<li>minecraft:warped_stem: ItemType</li>
<li>minecraft:warped_trapdoor: ItemType</li>
<li>minecraft:warped_wall_sign: ItemType</li>
<li>minecraft:warped_wart_block: ItemType</li>
<li>minecraft:water: ItemType</li>
<li>minecraft:water_bucket: ItemType</li>
<li>minecraft:waterlily: ItemType</li>
<li>minecraft:waxed_copper: ItemType</li>
<li>minecraft:waxed_cut_copper: ItemType</li>
<li>minecraft:waxed_cut_copper_slab: ItemType</li>
<li>minecraft:waxed_cut_copper_stairs: ItemType</li>
<li>minecraft:waxed_double_cut_copper_slab: ItemType</li>
<li>minecraft:waxed_exposed_copper: ItemType</li>
<li>minecraft:waxed_exposed_cut_copper: ItemType</li>
<li>minecraft:waxed_exposed_cut_copper_slab: ItemType</li>
<li>minecraft:waxed_exposed_cut_copper_stairs: ItemType</li>
<li>minecraft:waxed_exposed_double_cut_copper_slab: ItemType</li>
<li>minecraft:waxed_oxidized_copper: ItemType</li>
<li>minecraft:waxed_oxidized_cut_copper: ItemType</li>
<li>minecraft:waxed_oxidized_cut_copper_slab: ItemType</li>
<li>minecraft:waxed_oxidized_cut_copper_stairs: ItemType</li>
<li>minecraft:waxed_oxidized_double_cut_copper_slab: ItemType</li>
<li>minecraft:waxed_weathered_copper: ItemType</li>
<li>minecraft:waxed_weathered_cut_copper: ItemType</li>
<li>minecraft:waxed_weathered_cut_copper_slab: ItemType</li>
<li>minecraft:waxed_weathered_cut_copper_stairs: ItemType</li>
<li>minecraft:waxed_weathered_double_cut_copper_slab: ItemType</li>
<li>minecraft:weathered_copper: ItemType</li>
<li>minecraft:weathered_cut_copper: ItemType</li>
<li>minecraft:weathered_cut_copper_slab: ItemType</li>
<li>minecraft:weathered_cut_copper_stairs: ItemType</li>
<li>minecraft:weathered_double_cut_copper_slab: ItemType</li>
<li>minecraft:web: ItemType</li>
<li>minecraft:weeping_vines: ItemType</li>
<li>minecraft:wheat: ItemType</li>
<li>minecraft:wheat_seeds: ItemType</li>
<li>minecraft:white_candle: ItemType</li>
<li>minecraft:white_candle_cake: ItemType</li>
<li>minecraft:white_dye: ItemType</li>
<li>minecraft:white_glazed_terracotta: ItemType</li>
<li>minecraft:witch_spawn_egg: ItemType</li>
<li>minecraft:wither_rose: ItemType</li>
<li>minecraft:wither_skeleton_spawn_egg: ItemType</li>
<li>minecraft:wolf_spawn_egg: ItemType</li>
<li>minecraft:wood: ItemType</li>
<li>minecraft:wooden_axe: ItemType</li>
<li>minecraft:wooden_button: ItemType</li>
<li>minecraft:wooden_door: ItemType</li>
<li>minecraft:wooden_hoe: ItemType</li>
<li>minecraft:wooden_pickaxe: ItemType</li>
<li>minecraft:wooden_pressure_plate: ItemType</li>
<li>minecraft:wooden_shovel: ItemType</li>
<li>minecraft:wooden_slab: ItemType</li>
<li>minecraft:wooden_sword: ItemType</li>
<li>minecraft:wool: ItemType</li>
<li>minecraft:writable_book: ItemType</li>
<li>minecraft:written_book: ItemType</li>
<li>minecraft:yellow_candle: ItemType</li>
<li>minecraft:yellow_candle_cake: ItemType</li>
<li>minecraft:yellow_dye: ItemType</li>
<li>minecraft:yellow_flower: ItemType</li>
<li>minecraft:yellow_glazed_terracotta: ItemType</li>
<li>minecraft:zoglin_spawn_egg: ItemType</li>
<li>minecraft:zombie_horse_spawn_egg: ItemType</li>
<li>minecraft:zombie_pigman_spawn_egg: ItemType</li>
<li>minecraft:zombie_spawn_egg: ItemType</li>
<li>minecraft:zombie_villager_spawn_egg: ItemType</li>
<li>mobSpawner: ItemType</li>
<li>mojangBannerPattern: ItemType</li>
<li>monsterEgg: ItemType</li>
<li>mooshroomSpawnEgg: ItemType</li>
<li>mossBlock: ItemType</li>
<li>mossCarpet: ItemType</li>
<li>mossyCobblestone: ItemType</li>
<li>mossyCobblestoneStairs: ItemType</li>
<li>mossyStoneBrickStairs: ItemType</li>
<li>movingblock: ItemType</li>
<li>muleSpawnEgg: ItemType</li>
<li>mushroomStew: ItemType</li>
<li>musicDisc11: ItemType</li>
<li>musicDisc13: ItemType</li>
<li>musicDiscBlocks: ItemType</li>
<li>musicDiscCat: ItemType</li>
<li>musicDiscChirp: ItemType</li>
<li>musicDiscFar: ItemType</li>
<li>musicDiscMall: ItemType</li>
<li>musicDiscMellohi: ItemType</li>
<li>musicDiscPigstep: ItemType</li>
<li>musicDiscStal: ItemType</li>
<li>musicDiscStrad: ItemType</li>
<li>musicDiscWait: ItemType</li>
<li>musicDiscWard: ItemType</li>
<li>mutton: ItemType</li>
<li>mycelium: ItemType</li>
<li>nameTag: ItemType</li>
<li>nautilusShell: ItemType</li>
<li>netherbrick: ItemType</li>
<li>netherBrick: ItemType</li>
<li>netherBrickFence: ItemType</li>
<li>netherBrickStairs: ItemType</li>
<li>netherGoldOre: ItemType</li>
<li>netheriteAxe: ItemType</li>
<li>netheriteBlock: ItemType</li>
<li>netheriteBoots: ItemType</li>
<li>netheriteChestplate: ItemType</li>
<li>netheriteHelmet: ItemType</li>
<li>netheriteHoe: ItemType</li>
<li>netheriteIngot: ItemType</li>
<li>netheriteLeggings: ItemType</li>
<li>netheritePickaxe: ItemType</li>
<li>netheriteScrap: ItemType</li>
<li>netheriteShovel: ItemType</li>
<li>netheriteSword: ItemType</li>
<li>netherrack: ItemType</li>
<li>netherreactor: ItemType</li>
<li>netherSprouts: ItemType</li>
<li>netherStar: ItemType</li>
<li>netherWart: ItemType</li>
<li>netherWartBlock: ItemType</li>
<li>normalStoneStairs: ItemType</li>
<li>noteblock: ItemType</li>
<li>npcSpawnEgg: ItemType</li>
<li>oakBoat: ItemType</li>
<li>oakSign: ItemType</li>
<li>oakStairs: ItemType</li>
<li>observer: ItemType</li>
<li>obsidian: ItemType</li>
<li>ocelotSpawnEgg: ItemType</li>
<li>orangeCandle: ItemType</li>
<li>orangeCandleCake: ItemType</li>
<li>orangeDye: ItemType</li>
<li>orangeGlazedTerracotta: ItemType</li>
<li>oxidizedCopper: ItemType</li>
<li>oxidizedCutCopper: ItemType</li>
<li>oxidizedCutCopperSlab: ItemType</li>
<li>oxidizedCutCopperStairs: ItemType</li>
<li>oxidizedDoubleCutCopperSlab: ItemType</li>
<li>packedIce: ItemType</li>
<li>painting: ItemType</li>
<li>pandaSpawnEgg: ItemType</li>
<li>paper: ItemType</li>
<li>parrotSpawnEgg: ItemType</li>
<li>phantomMembrane: ItemType</li>
<li>phantomSpawnEgg: ItemType</li>
<li>piglinBannerPattern: ItemType</li>
<li>piglinBruteSpawnEgg: ItemType</li>
<li>piglinSpawnEgg: ItemType</li>
<li>pigSpawnEgg: ItemType</li>
<li>pillagerSpawnEgg: ItemType</li>
<li>pinkCandle: ItemType</li>
<li>pinkCandleCake: ItemType</li>
<li>pinkDye: ItemType</li>
<li>pinkGlazedTerracotta: ItemType</li>
<li>piston: ItemType</li>
<li>pistonarmcollision: ItemType</li>
<li>planks: ItemType</li>
<li>podzol: ItemType</li>
<li>pointedDripstone: ItemType</li>
<li>poisonousPotato: ItemType</li>
<li>polarBearSpawnEgg: ItemType</li>
<li>polishedAndesiteStairs: ItemType</li>
<li>polishedBasalt: ItemType</li>
<li>polishedBlackstone: ItemType</li>
<li>polishedBlackstoneBrickDoubleSlab: ItemType</li>
<li>polishedBlackstoneBricks: ItemType</li>
<li>polishedBlackstoneBrickSlab: ItemType</li>
<li>polishedBlackstoneBrickStairs: ItemType</li>
<li>polishedBlackstoneBrickWall: ItemType</li>
<li>polishedBlackstoneButton: ItemType</li>
<li>polishedBlackstoneDoubleSlab: ItemType</li>
<li>polishedBlackstonePressurePlate: ItemType</li>
<li>polishedBlackstoneSlab: ItemType</li>
<li>polishedBlackstoneStairs: ItemType</li>
<li>polishedBlackstoneWall: ItemType</li>
<li>polishedDeepslate: ItemType</li>
<li>polishedDeepslateDoubleSlab: ItemType</li>
<li>polishedDeepslateSlab: ItemType</li>
<li>polishedDeepslateStairs: ItemType</li>
<li>polishedDeepslateWall: ItemType</li>
<li>polishedDioriteStairs: ItemType</li>
<li>polishedGraniteStairs: ItemType</li>
<li>poppedChorusFruit: ItemType</li>
<li>porkchop: ItemType</li>
<li>portal: ItemType</li>
<li>potato: ItemType</li>
<li>potatoes: ItemType</li>
<li>potion: ItemType</li>
<li>powderSnow: ItemType</li>
<li>powderSnowBucket: ItemType</li>
<li>poweredComparator: ItemType</li>
<li>poweredRepeater: ItemType</li>
<li>prismarine: ItemType</li>
<li>prismarineBricksStairs: ItemType</li>
<li>prismarineCrystals: ItemType</li>
<li>prismarineShard: ItemType</li>
<li>prismarineStairs: ItemType</li>
<li>pufferfish: ItemType</li>
<li>pufferfishBucket: ItemType</li>
<li>pufferfishSpawnEgg: ItemType</li>
<li>pumpkin: ItemType</li>
<li>pumpkinPie: ItemType</li>
<li>pumpkinSeeds: ItemType</li>
<li>pumpkinStem: ItemType</li>
<li>purpleCandle: ItemType</li>
<li>purpleCandleCake: ItemType</li>
<li>purpleDye: ItemType</li>
<li>purpleGlazedTerracotta: ItemType</li>
<li>purpurBlock: ItemType</li>
<li>purpurStairs: ItemType</li>
<li>quartz: ItemType</li>
<li>quartzBlock: ItemType</li>
<li>quartzBricks: ItemType</li>
<li>quartzOre: ItemType</li>
<li>quartzStairs: ItemType</li>
<li>rabbit: ItemType</li>
<li>rabbitFoot: ItemType</li>
<li>rabbitHide: ItemType</li>
<li>rabbitSpawnEgg: ItemType</li>
<li>rabbitStew: ItemType</li>
<li>rail: ItemType</li>
<li>rapidFertilizer: ItemType</li>
<li>ravagerSpawnEgg: ItemType</li>
<li>rawCopper: ItemType</li>
<li>rawCopperBlock: ItemType</li>
<li>rawGold: ItemType</li>
<li>rawGoldBlock: ItemType</li>
<li>rawIron: ItemType</li>
<li>rawIronBlock: ItemType</li>
<li>realDoubleStoneSlab: ItemType</li>
<li>realDoubleStoneSlab2: ItemType</li>
<li>realDoubleStoneSlab3: ItemType</li>
<li>realDoubleStoneSlab4: ItemType</li>
<li>redCandle: ItemType</li>
<li>redCandleCake: ItemType</li>
<li>redDye: ItemType</li>
<li>redFlower: ItemType</li>
<li>redGlazedTerracotta: ItemType</li>
<li>redMushroom: ItemType</li>
<li>redMushroomBlock: ItemType</li>
<li>redNetherBrick: ItemType</li>
<li>redNetherBrickStairs: ItemType</li>
<li>redSandstone: ItemType</li>
<li>redSandstoneStairs: ItemType</li>
<li>redstone: ItemType</li>
<li>redstoneBlock: ItemType</li>
<li>redstoneLamp: ItemType</li>
<li>redstoneOre: ItemType</li>
<li>redstoneTorch: ItemType</li>
<li>redstoneWire: ItemType</li>
<li>repeater: ItemType</li>
<li>repeatingCommandBlock: ItemType</li>
<li>reserved6: ItemType</li>
<li>respawnAnchor: ItemType</li>
<li>rottenFlesh: ItemType</li>
<li>saddle: ItemType</li>
<li>salmon: ItemType</li>
<li>salmonBucket: ItemType</li>
<li>salmonSpawnEgg: ItemType</li>
<li>sand: ItemType</li>
<li>sandstone: ItemType</li>
<li>sandstoneStairs: ItemType</li>
<li>sapling: ItemType</li>
<li>scaffolding: ItemType</li>
<li>sculkSensor: ItemType</li>
<li>scute: ItemType</li>
<li>seagrass: ItemType</li>
<li>sealantern: ItemType</li>
<li>seaPickle: ItemType</li>
<li>shears: ItemType</li>
<li>sheepSpawnEgg: ItemType</li>
<li>shield: ItemType</li>
<li>shroomlight: ItemType</li>
<li>shulkerBox: ItemType</li>
<li>shulkerShell: ItemType</li>
<li>shulkerSpawnEgg: ItemType</li>
<li>silverfishSpawnEgg: ItemType</li>
<li>silverGlazedTerracotta: ItemType</li>
<li>skeletonHorseSpawnEgg: ItemType</li>
<li>skeletonSpawnEgg: ItemType</li>
<li>skull: ItemType</li>
<li>skullBannerPattern: ItemType</li>
<li>slime: ItemType</li>
<li>slimeBall: ItemType</li>
<li>slimeSpawnEgg: ItemType</li>
<li>smallAmethystBud: ItemType</li>
<li>smallDripleafBlock: ItemType</li>
<li>smithingTable: ItemType</li>
<li>smoker: ItemType</li>
<li>smoothBasalt: ItemType</li>
<li>smoothQuartzStairs: ItemType</li>
<li>smoothRedSandstoneStairs: ItemType</li>
<li>smoothSandstoneStairs: ItemType</li>
<li>smoothStone: ItemType</li>
<li>snow: ItemType</li>
<li>snowball: ItemType</li>
<li>snowLayer: ItemType</li>
<li>soulCampfire: ItemType</li>
<li>soulFire: ItemType</li>
<li>soulLantern: ItemType</li>
<li>soulSand: ItemType</li>
<li>soulSoil: ItemType</li>
<li>soulTorch: ItemType</li>
<li>sparkler: ItemType</li>
<li>spawnEgg: ItemType</li>
<li>spiderEye: ItemType</li>
<li>spiderSpawnEgg: ItemType</li>
<li>splashPotion: ItemType</li>
<li>sponge: ItemType</li>
<li>sporeBlossom: ItemType</li>
<li>spruceBoat: ItemType</li>
<li>spruceButton: ItemType</li>
<li>spruceDoor: ItemType</li>
<li>spruceFenceGate: ItemType</li>
<li>sprucePressurePlate: ItemType</li>
<li>spruceSign: ItemType</li>
<li>spruceStairs: ItemType</li>
<li>spruceStandingSign: ItemType</li>
<li>spruceTrapdoor: ItemType</li>
<li>spruceWallSign: ItemType</li>
<li>spyglass: ItemType</li>
<li>squidSpawnEgg: ItemType</li>
<li>stainedGlass: ItemType</li>
<li>stainedGlassPane: ItemType</li>
<li>stainedHardenedClay: ItemType</li>
<li>standingBanner: ItemType</li>
<li>standingSign: ItemType</li>
<li>stick: ItemType</li>
<li>stickyPiston: ItemType</li>
<li>stickypistonarmcollision: ItemType</li>
<li>stone: ItemType</li>
<li>stoneAxe: ItemType</li>
<li>stonebrick: ItemType</li>
<li>stoneBrickStairs: ItemType</li>
<li>stoneButton: ItemType</li>
<li>stonecutter: ItemType</li>
<li>stonecutterBlock: ItemType</li>
<li>stoneHoe: ItemType</li>
<li>stonePickaxe: ItemType</li>
<li>stonePressurePlate: ItemType</li>
<li>stoneShovel: ItemType</li>
<li>stoneStairs: ItemType</li>
<li>stoneSword: ItemType</li>
<li>straySpawnEgg: ItemType</li>
<li>striderSpawnEgg: ItemType</li>
<li>string: ItemType</li>
<li>strippedAcaciaLog: ItemType</li>
<li>strippedBirchLog: ItemType</li>
<li>strippedCrimsonHyphae: ItemType</li>
<li>strippedCrimsonStem: ItemType</li>
<li>strippedDarkOakLog: ItemType</li>
<li>strippedJungleLog: ItemType</li>
<li>strippedOakLog: ItemType</li>
<li>strippedSpruceLog: ItemType</li>
<li>strippedWarpedHyphae: ItemType</li>
<li>strippedWarpedStem: ItemType</li>
<li>structureBlock: ItemType</li>
<li>structureVoid: ItemType</li>
<li>sugar: ItemType</li>
<li>sugarCane: ItemType</li>
<li>suspiciousStew: ItemType</li>
<li>sweetBerries: ItemType</li>
<li>sweetBerryBush: ItemType</li>
<li>tallgrass: ItemType</li>
<li>target: ItemType</li>
<li>tintedGlass: ItemType</li>
<li>tnt: ItemType</li>
<li>tntMinecart: ItemType</li>
<li>torch: ItemType</li>
<li>totemOfUndying: ItemType</li>
<li>trapdoor: ItemType</li>
<li>trappedChest: ItemType</li>
<li>trident: ItemType</li>
<li>tripwire: ItemType</li>
<li>tripwireHook: ItemType</li>
<li>tropicalFish: ItemType</li>
<li>tropicalFishBucket: ItemType</li>
<li>tropicalFishSpawnEgg: ItemType</li>
<li>tuff: ItemType</li>
<li>turtleEgg: ItemType</li>
<li>turtleHelmet: ItemType</li>
<li>turtleSpawnEgg: ItemType</li>
<li>twistingVines: ItemType</li>
<li>underwaterTorch: ItemType</li>
<li>undyedShulkerBox: ItemType</li>
<li>unknown: ItemType</li>
<li>unlitRedstoneTorch: ItemType</li>
<li>unpoweredComparator: ItemType</li>
<li>unpoweredRepeater: ItemType</li>
<li>vexSpawnEgg: ItemType</li>
<li>villagerSpawnEgg: ItemType</li>
<li>vindicatorSpawnEgg: ItemType</li>
<li>vine: ItemType</li>
<li>wallBanner: ItemType</li>
<li>wallSign: ItemType</li>
<li>wanderingTraderSpawnEgg: ItemType</li>
<li>warpedButton: ItemType</li>
<li>warpedDoor: ItemType</li>
<li>warpedDoubleSlab: ItemType</li>
<li>warpedFence: ItemType</li>
<li>warpedFenceGate: ItemType</li>
<li>warpedFungus: ItemType</li>
<li>warpedFungusOnAStick: ItemType</li>
<li>warpedHyphae: ItemType</li>
<li>warpedNylium: ItemType</li>
<li>warpedPlanks: ItemType</li>
<li>warpedPressurePlate: ItemType</li>
<li>warpedRoots: ItemType</li>
<li>warpedSign: ItemType</li>
<li>warpedSlab: ItemType</li>
<li>warpedStairs: ItemType</li>
<li>warpedStandingSign: ItemType</li>
<li>warpedStem: ItemType</li>
<li>warpedTrapdoor: ItemType</li>
<li>warpedWallSign: ItemType</li>
<li>warpedWartBlock: ItemType</li>
<li>water: ItemType</li>
<li>waterBucket: ItemType</li>
<li>waterlily: ItemType</li>
<li>waxedCopper: ItemType</li>
<li>waxedCutCopper: ItemType</li>
<li>waxedCutCopperSlab: ItemType</li>
<li>waxedCutCopperStairs: ItemType</li>
<li>waxedDoubleCutCopperSlab: ItemType</li>
<li>waxedExposedCopper: ItemType</li>
<li>waxedExposedCutCopper: ItemType</li>
<li>waxedExposedCutCopperSlab: ItemType</li>
<li>waxedExposedCutCopperStairs: ItemType</li>
<li>waxedExposedDoubleCutCopperSlab: ItemType</li>
<li>waxedOxidizedCopper: ItemType</li>
<li>waxedOxidizedCutCopper: ItemType</li>
<li>waxedOxidizedCutCopperSlab: ItemType</li>
<li>waxedOxidizedCutCopperStairs: ItemType</li>
<li>waxedOxidizedDoubleCutCopperSlab: ItemType</li>
<li>waxedWeatheredCopper: ItemType</li>
<li>waxedWeatheredCutCopper: ItemType</li>
<li>waxedWeatheredCutCopperSlab: ItemType</li>
<li>waxedWeatheredCutCopperStairs: ItemType</li>
<li>waxedWeatheredDoubleCutCopperSlab: ItemType</li>
<li>weatheredCopper: ItemType</li>
<li>weatheredCutCopper: ItemType</li>
<li>weatheredCutCopperSlab: ItemType</li>
<li>weatheredCutCopperStairs: ItemType</li>
<li>weatheredDoubleCutCopperSlab: ItemType</li>
<li>web: ItemType</li>
<li>weepingVines: ItemType</li>
<li>wheat: ItemType</li>
<li>wheatSeeds: ItemType</li>
<li>whiteCandle: ItemType</li>
<li>whiteCandleCake: ItemType</li>
<li>whiteDye: ItemType</li>
<li>whiteGlazedTerracotta: ItemType</li>
<li>witchSpawnEgg: ItemType</li>
<li>witherRose: ItemType</li>
<li>witherSkeletonSpawnEgg: ItemType</li>
<li>wolfSpawnEgg: ItemType</li>
<li>wood: ItemType</li>
<li>woodenAxe: ItemType</li>
<li>woodenButton: ItemType</li>
<li>woodenDoor: ItemType</li>
<li>woodenHoe: ItemType</li>
<li>woodenPickaxe: ItemType</li>
<li>woodenPressurePlate: ItemType</li>
<li>woodenShovel: ItemType</li>
<li>woodenSlab: ItemType</li>
<li>woodenSword: ItemType</li>
<li>wool: ItemType</li>
<li>writableBook: ItemType</li>
<li>writtenBook: ItemType</li>
<li>yellowCandle: ItemType</li>
<li>yellowCandleCake: ItemType</li>
<li>yellowDye: ItemType</li>
<li>yellowFlower: ItemType</li>
<li>yellowGlazedTerracotta: ItemType</li>
<li>zoglinSpawnEgg: ItemType</li>
<li>zombieHorseSpawnEgg: ItemType</li>
<li>zombiePigmanSpawnEgg: ItemType</li>
<li>zombieSpawnEgg: ItemType</li>
<li>zombieVillagerSpawnEgg: ItemType</li>
</ul>
</details>

<details>
<summary>ItemStack</summary>
<ul> 
<li>amount: number</li>
<li>data: number</li>
<li>id: string</li>
<li>constructor(itemType: ItemType, amount: number, data: number)</li>
</ul>
</details>

<details>
<summary>ItemType</summary>
<ul> 
<li>getName(): string</li>
</ul>
</details>

<details>
<summary>LavaMovement</summary>
<ul> 
<li>current: number</li>
<li>id: string</li>
<li>value: number</li>
<li>resetToDefaultValue(): void</li>
<li>resetToMaxValue(): void</li>
<li>resetToMinValue(): void</li>
<li>setCurrent(): void</li>
</ul>
</details>

<details>
<summary>Leashable</summary>
<ul> 
<li>id: string</li>
<li>softDistance: number</li>
<li>leash(leashHolder: Entity): void</li>
<li>unleash(): void</li>
</ul>
</details>

<details>
<summary>Location</summary>
<ul> 
<li>x: number</li>
<li>y: number</li>
<li>z: number</li>
<li>constructor(x: number, y: number, z: number)</li>
<li>equals(other: Location): boolean</li>
<li>isNear(other: Location, epsilon: number): boolean</li>
</ul>
</details>

<details>
<summary>MountTaming</summary>
<ul> 
<li>id: string</li>
<li>setTamed(showParticles: boolean): void</li>
</ul>
</details>

<details>
<summary>Movement</summary>
<ul> 
<li>current: number</li>
<li>id: string</li>
<li>value: number</li>
<li>resetToDefaultValue(): void</li>
<li>resetToMaxValue(): void</li>
<li>resetToMinValue(): void</li>
<li>setCurrent(): void</li>
</ul>
</details>

<details>
<summary>MovementAmphibious</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
</ul>
</details>

<details>
<summary>MovementBasic</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
</ul>
</details>

<details>
<summary>MovementFly</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
</ul>
</details>

<details>
<summary>MovementGeneric</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
</ul>
</details>

<details>
<summary>MovementGlide</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
<li>speedWhenTurning: number</li>
<li>startSpeed: number</li>
</ul>
</details>

<details>
<summary>MovementHover</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
</ul>
</details>

<details>
<summary>MovementJump</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
</ul>
</details>

<details>
<summary>MovementSkip</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
</ul>
</details>

<details>
<summary>MovementSway</summary>
<ul> 
<li>id: string</li>
<li>maxTurn: number</li>
<li>swayAmplitude: number</li>
<li>swayFrequency: number</li>
</ul>
</details>

<details>
<summary>NavigationClimb</summary>
<ul> 
<li>avoidDamageBlocks: boolean</li>
<li>avoidPortals: boolean</li>
<li>avoidSun: boolean</li>
<li>avoidWater: boolean</li>
<li>canBreach: boolean</li>
<li>canBreakDoors: boolean</li>
<li>canFloat: boolean</li>
<li>canJump: boolean</li>
<li>canOpenDoors: boolean</li>
<li>canOpenIronDoors: boolean</li>
<li>canPassDoors: boolean</li>
<li>canPathFromAir: boolean</li>
<li>canPathOverLava: boolean</li>
<li>canPathOverWater: boolean</li>
<li>canSink: boolean</li>
<li>canSwim: boolean</li>
<li>canWalk: boolean</li>
<li>canWalkInLava: boolean</li>
<li>id: string</li>
<li>isAmphibious: boolean</li>
</ul>
</details>

<details>
<summary>NavigationFloat</summary>
<ul> 
<li>avoidDamageBlocks: boolean</li>
<li>avoidPortals: boolean</li>
<li>avoidSun: boolean</li>
<li>avoidWater: boolean</li>
<li>canBreach: boolean</li>
<li>canBreakDoors: boolean</li>
<li>canFloat: boolean</li>
<li>canJump: boolean</li>
<li>canOpenDoors: boolean</li>
<li>canOpenIronDoors: boolean</li>
<li>canPassDoors: boolean</li>
<li>canPathFromAir: boolean</li>
<li>canPathOverLava: boolean</li>
<li>canPathOverWater: boolean</li>
<li>canSink: boolean</li>
<li>canSwim: boolean</li>
<li>canWalk: boolean</li>
<li>canWalkInLava: boolean</li>
<li>id: string</li>
<li>isAmphibious: boolean</li>
</ul>
</details>

<details>
<summary>NavigationFly</summary>
<ul> 
<li>avoidDamageBlocks: boolean</li>
<li>avoidPortals: boolean</li>
<li>avoidSun: boolean</li>
<li>avoidWater: boolean</li>
<li>canBreach: boolean</li>
<li>canBreakDoors: boolean</li>
<li>canFloat: boolean</li>
<li>canJump: boolean</li>
<li>canOpenDoors: boolean</li>
<li>canOpenIronDoors: boolean</li>
<li>canPassDoors: boolean</li>
<li>canPathFromAir: boolean</li>
<li>canPathOverLava: boolean</li>
<li>canPathOverWater: boolean</li>
<li>canSink: boolean</li>
<li>canSwim: boolean</li>
<li>canWalk: boolean</li>
<li>canWalkInLava: boolean</li>
<li>id: string</li>
<li>isAmphibious: boolean</li>
</ul>
</details>

<details>
<summary>NavigationGeneric</summary>
<ul> 
<li>avoidDamageBlocks: boolean</li>
<li>avoidPortals: boolean</li>
<li>avoidSun: boolean</li>
<li>avoidWater: boolean</li>
<li>canBreach: boolean</li>
<li>canBreakDoors: boolean</li>
<li>canFloat: boolean</li>
<li>canJump: boolean</li>
<li>canOpenDoors: boolean</li>
<li>canOpenIronDoors: boolean</li>
<li>canPassDoors: boolean</li>
<li>canPathFromAir: boolean</li>
<li>canPathOverLava: boolean</li>
<li>canPathOverWater: boolean</li>
<li>canSink: boolean</li>
<li>canSwim: boolean</li>
<li>canWalk: boolean</li>
<li>canWalkInLava: boolean</li>
<li>id: string</li>
<li>isAmphibious: boolean</li>
</ul>
</details>

<details>
<summary>NavigationHover</summary>
<ul> 
<li>avoidDamageBlocks: boolean</li>
<li>avoidPortals: boolean</li>
<li>avoidSun: boolean</li>
<li>avoidWater: boolean</li>
<li>canBreach: boolean</li>
<li>canBreakDoors: boolean</li>
<li>canFloat: boolean</li>
<li>canJump: boolean</li>
<li>canOpenDoors: boolean</li>
<li>canOpenIronDoors: boolean</li>
<li>canPassDoors: boolean</li>
<li>canPathFromAir: boolean</li>
<li>canPathOverLava: boolean</li>
<li>canPathOverWater: boolean</li>
<li>canSink: boolean</li>
<li>canSwim: boolean</li>
<li>canWalk: boolean</li>
<li>canWalkInLava: boolean</li>
<li>id: string</li>
<li>isAmphibious: boolean</li>
</ul>
</details>

<details>
<summary>NavigationWalk</summary>
<ul> 
<li>avoidDamageBlocks: boolean</li>
<li>avoidPortals: boolean</li>
<li>avoidSun: boolean</li>
<li>avoidWater: boolean</li>
<li>canBreach: boolean</li>
<li>canBreakDoors: boolean</li>
<li>canFloat: boolean</li>
<li>canJump: boolean</li>
<li>canOpenDoors: boolean</li>
<li>canOpenIronDoors: boolean</li>
<li>canPassDoors: boolean</li>
<li>canPathFromAir: boolean</li>
<li>canPathOverLava: boolean</li>
<li>canPathOverWater: boolean</li>
<li>canSink: boolean</li>
<li>canSwim: boolean</li>
<li>canWalk: boolean</li>
<li>canWalkInLava: boolean</li>
<li>id: string</li>
<li>isAmphibious: boolean</li>
</ul>
</details>

<details>
<summary>Player</summary>
<ul> 
<li>id: string</li>
<li>isSneaking: boolean</li>
<li>location: Location</li>
<li>name: string</li>
<li>nameTag: string</li>
<li>velocity: Location</li>
<li>addEffect(effectType: EffectType, duration: number, amplifier: number): void</li>
<li>getComponent(componentId: string): any</li>
<li>getComponents(): Array<any></li>
<li>getEffect(effectType: EffectType): Effect</li>
<li>hasComponent(componentId: string): boolean</li>
<li>kill(): void</li>
<li>triggerEvent(eventName: string): void</li>
</ul>
</details>

<details>
<summary>Rideable</summary>
<ul> 
<li>controllingSeat: number</li>
<li>crouchingSkipInteract: boolean</li>
<li>familyTypes: Array<any></li>
<li>id: string</li>
<li>interactText: string</li>
<li>pullInEntities: boolean</li>
<li>riderCanInteract: boolean</li>
<li>seatCount: number</li>
<li>seats: Array<Seat></li>
<li>addRider(rider: Entity): boolean</li>
<li>ejectRider(rider: Entity): void</li>
<li>ejectRiders(): void</li>
</ul>
</details>

<details>
<summary>Seat</summary>
<ul> 
<li>lockRiderRotation: number</li>
<li>maxRiderCount: number</li>
<li>minRiderCount: number</li>
<li>position: Location</li>
</ul>
</details>

<details>
<summary>Strength</summary>
<ul> 
<li>id: string</li>
<li>max: number</li>
<li>value: number</li>
</ul>
</details>

<details>
<summary>StringBlockProperty</summary>
<ul> 
<li>name: string</li>
<li>validValues: Array<any></li>
<li>value: string</li>
</ul>
</details>

<details>
<summary>Tameable</summary>
<ul> 
<li>id: string</li>
<li>probability: number</li>
<li>tameEvent: Trigger</li>
<li>tameItems: Array<any></li>
<li>tame(): boolean</li>
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
<li>current: number</li>
<li>id: string</li>
<li>value: number</li>
<li>resetToDefaultValue(): void</li>
<li>resetToMaxValue(): void</li>
<li>resetToMinValue(): void</li>
<li>setCurrent(): void</li>
</ul>
</details>

<details>
<summary>WeatherChangedEvent</summary>
<ul> 
<li>dimension: string</li>
<li>lightning: boolean</li>
<li>raining: boolean</li>
</ul>
</details>

<details>
<summary>World</summary>
<ul> 
<li>events: Events</li>
<li>getDimension(dimensionName: ('overworld'|'nether'|'the end')): Dimension</li>
<li>getPlayers(): Array<Player></li>
</ul>
</details>


