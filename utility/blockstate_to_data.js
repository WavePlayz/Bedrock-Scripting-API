// Block's blockstates by Data value order
// Bedrock v1.14
// by WavePlayz
let BlockData = {
	getData: function(blockstate) {
		let block_name = blockstate.__identifier__
		if (block_name in this) {
			let data_entries = Object.entries(this[block_name])
			
			for (let i = 0; i < data_entries.length; i++) {
				let matched = true
				Object.entries(data_entries[i][1]).forEach(([property, value]) => {
					if (blockstate.data[property] != value) matched = false;
				})
				
				if (matched) break
			}
		}
	},
	"minecraft:air": {},
	"minecraft:stone": {
		0 : {stone_type: "stone"},
		1 : {stone_type: "granite"},
		2 : {stone_type: "granite_smooth"},
		3 : {stone_type: "diorite"},
		4 : {stone_type: "diorite_smooth"},
		5 : {stone_type: "andesite"},
		6 : {stone_type: "andesite_smooth"}
	},
	"minecraft:grass": {},
	"minecraft:dirt": {
		0 : {dirt_type: "normal"},
		1 : {dirt_type: "coarse"}
	},
	"minecraft:cobblestone": {},
	"minecraft:planks": {
		0 : {wood_type: "oak"},
		1 : {wood_type: "spruce"},
		2 : {wood_type: "birch"},
		3 : {wood_type: "jungle"},
		4 : {wood_type: "acacia"},
		5 : {wood_type: "dark_Oak"}
	},
	"minecraft:sapling": {
		0 : {sapling_type: "oak", age_bit: false},
		1 : {sapling_type: "spruce", age_bit: false},
		2 : {sapling_type: "birch", age_bit: false},
		3 : {sapling_type: "jungle", age_bit: false},
		4 : {sapling_type: "acacia", age_bit: false},
		5 : {sapling_type: "dark_oak", age_bit: false},
		
		6 : {sapling_type: "oak", age_bit: false},
		7 : {sapling_type: "oak", age_bit: false},
		
		8 : {sapling_type: "oak", age_bit: true},
		9 : {sapling_type: "spruce", age_bit: true},
		10 : {sapling_type: "birch", age_bit: true},
		11 : {sapling_type: "jungle", age_bit: true},
		12 : {sapling_type: "acacia", age_bit: true},
		13 : {sapling_type: "dark_oak", age_bit: true},
		
		14 : {sapling_type: "oak", age_bit: true},
		15 : {sapling_type: "oak", age_bit: true}
	},
	"minecraft:bedrock": {},
	"minecraft:flowing_water": {
		0 : {liquid_depth: 0},
		1 : {liquid_depth: 1},
		2 : {liquid_depth: 2},
		3 : {liquid_depth: 3},
		4 : {liquid_depth: 4},
		5 : {liquid_depth: 5},
		6 : {liquid_depth: 6},
		7 : {liquid_depth: 7},
		8 : {liquid_depth: 8},
		9 : {liquid_depth: 9},
		10 : {liquid_depth: 10},
		11 : {liquid_depth: 11},
		12 : {liquid_depth: 12},
		13 : {liquid_depth: 13},
		14 : {liquid_depth: 14},
		15 : {liquid_depth: 15}
	},
	"minecraft:water": {
		0 : {liquid_depth: 0},
		1 : {liquid_depth: 1},
		2 : {liquid_depth: 2},
		3 : {liquid_depth: 3},
		4 : {liquid_depth: 4},
		5 : {liquid_depth: 5},
		6 : {liquid_depth: 6},
		7 : {liquid_depth: 7},
		8 : {liquid_depth: 8},
		9 : {liquid_depth: 9},
		10 : {liquid_depth: 10},
		11 : {liquid_depth: 11},
		12 : {liquid_depth: 12},
		13 : {liquid_depth: 13},
		14 : {liquid_depth: 14},
		15 : {liquid_depth: 15}
	},
	"minecraft:flowing_lava": {
		0 : {liquid_depth: 0},
		1 : {liquid_depth: 1},
		2 : {liquid_depth: 2},
		3 : {liquid_depth: 3},
		4 : {liquid_depth: 4},
		5 : {liquid_depth: 5},
		6 : {liquid_depth: 6},
		7 : {liquid_depth: 7},
		8 : {liquid_depth: 8},
		9 : {liquid_depth: 9},
		10 : {liquid_depth: 10},
		11 : {liquid_depth: 11},
		12 : {liquid_depth: 12},
		13 : {liquid_depth: 13},
		14 : {liquid_depth: 14},
		15 : {liquid_depth: 15}
	},
	"minecraft:lava": {
		0 : {liquid_depth: 0},
		1 : {liquid_depth: 1},
		2 : {liquid_depth: 2},
		3 : {liquid_depth: 3},
		4 : {liquid_depth: 4},
		5 : {liquid_depth: 5},
		6 : {liquid_depth: 6},
		7 : {liquid_depth: 7},
		8 : {liquid_depth: 8},
		9 : {liquid_depth: 9},
		10 : {liquid_depth: 10},
		11 : {liquid_depth: 11},
		12 : {liquid_depth: 12},
		13 : {liquid_depth: 13},
		14 : {liquid_depth: 14},
		15 : {liquid_depth: 15}
	},
	"minecraft:sand": {
		0 : {sand_type: "normal"},
		0 : {sand_type: "red"}
	},
	"minecraft:gravel": {},
	"minecraft:gold_ore": {},
	"minecraft:iron_ore": {},
	"minecraft:coal_ore": {},
	"minecraft:log": {
		0 : {old_log_type: "oak", piller_axis: "y"},
		1 : {old_log_type: "spruce", piller_axis: "y"},
		2 : {old_log_type: "birch", piller_axis: "y"},
		3 : {old_log_type: "jungle", piller_axis: "x"},
		
		4 : {old_log_type: "oak", piller_axis: "x"},
		5 : {old_log_type: "spruce", piller_axis: "x"},
		6 : {old_log_type: "birch", piller_axis: "x"},
		7 : {old_log_type: "jungle", piller_axis: "x"},
		
		8 : {old_log_type: "oak", piller_axis: "z"},
		9 : {old_log_type: "spruce", piller_axis: "z"},
		10 : {old_log_type: "birch", piller_axis: "z"},
		11 : {old_log_type: "jungle", piller_axis: "z"}
	},
	"minecraft:leaves": {
		0 : {old_leaf_type: "oak", update_bit: false, persistent_bit: false},
		1 : {old_leaf_type: "spruce", update_bit: false, persistent_bit: false},
		2 : {old_leaf_type: "birch", update_bit: false, persistent_bit: false},
		3 : {old_leaf_type: "jungle", update_bit: false, persistent_bit: false},
		
		4 : {old_leaf_type: "oak", update_bit: true, persistent_bit: false},
		5 : {old_leaf_type: "spruce", update_bit: true, persistent_bit: false},
		6 : {old_leaf_type: "birch", update_bit: true, persistent_bit: false},
		7 : {old_leaf_type: "jungle", update_bit: true, persistent_bit: false},
		
		8 : {old_leaf_type: "oak", update_bit: false, persistent_bit: true},
		9 : {old_leaf_type: "spruce", update_bit: false, persistent_bit: true},
		10 : {old_leaf_type: "birch", update_bit: false, persistent_bit: true},
		11 : {old_leaf_type: "jungle", update_bit: false, persistent_bit: true},
		
		12 : {old_leaf_type: "oak", update_bit: true, persistent_bit: true},
		13 : {old_leaf_type: "spruce", update_bit: true, persistent_bit: true},
		14 : {old_leaf_type: "birch", update_bit: true, persistent_bit: true},
		15 : {old_leaf_type: "jungle", update_bit: true, persistent_bit: true}
	},
	"minecraft:sponge": {
		0 : {sponge_type: "dry"},
		1 : {sponge_type: "wet"}
	},
	"minecraft:glass": {},
	"minecraft:lapis_ore": {},
	"minecraft:lapis_block": {},
	"minecraft:dispenser": {
		0 : {facing_direction: 0, triggered_bit: false},
		1 : {facing_direction: 1, triggered_bit: false},
		2 : {facing_direction: 2, triggered_bit: false},
		3 : {facing_direction: 3, triggered_bit: false},
		4 : {facing_direction: 4, triggered_bit: false},
		5 : {facing_direction: 5, triggered_bit: false},
		
		6 : {facing_direction: 0, triggered_bit: false},
		7 : {facing_direction: 0, triggered_bit: false},
		
		8 : {facing_direction: 0, triggered_bit: true},
		9 : {facing_direction: 1, triggered_bit: true},
		10 : {facing_direction: 2, triggered_bit: true},
		11 : {facing_direction: 3, triggered_bit: true},
		12 : {facing_direction: 4, triggered_bit: true},
		13 : {facing_direction: 5, triggered_bit: true},
		
		14 : {facing_direction: 0, triggered_bit: false},
		15 : {facing_direction: 0, triggered_bit: false}
	},
	"minecraft:sandstone": {
		0 : {sand_stone_type: "default"},
		1 : {sand_stone_type: "heiroglyphs"},
		2 : {sand_stone_type: "cut"},
		3 : {sand_stone_type: "smooth"}
	},
	"minecraft:noteblock": {},
	"minecraft:bed": {
		0 : {direction: 0},
		1 : {direction: 1},
		2 : {direction: 2},
		3 : {direction: 3}
	},
	"minecraft:golden_rail": {
		0 : {rail_direction: 0, rail_data_bit: false},
		1 : {rail_direction: 1, rail_data_bit: false},
		2 : {rail_direction: 2, rail_data_bit: false},
		3 : {rail_direction: 3, rail_data_bit: false},
		4 : {rail_direction: 4, rail_data_bit: false},
		5 : {rail_direction: 5, rail_data_bit: false},
		
		6 : {rail_direction: 0, rail_data_bit: false},
		7 : {rail_direction: 0, rail_data_bit: false},
		
		8 : {rail_direction: 0, rail_data_bit: true},
		9 : {rail_direction: 1, rail_data_bit: true},
		10 : {rail_direction: 2, rail_data_bit: true},
		11 : {rail_direction: 3, rail_data_bit: true},
		12 : {rail_direction: 4, rail_data_bit: true},
		13 : {rail_direction: 5, rail_data_bit: true},
		
		14 : {rail_direction: 0, rail_data_bit: true},
		15 : {rail_direction: 0, rail_data_bit: true}
	},
	"minecraft:detector_rail": {
		0 : {facing_direction: 0, triggered_bit: false},
		1 : {facing_direction: 1, triggered_bit: false},
		2 : {facing_direction: 2, triggered_bit: false},
		3 : {facing_direction: 3, triggered_bit: false},
		4 : {facing_direction: 4, triggered_bit: false},
		5 : {facing_direction: 5, triggered_bit: false},
		
		6 : {facing_direction: 0, triggered_bit: false},
		7 : {facing_direction: 0, triggered_bit: false},
		
		8 : {facing_direction: 0, triggered_bit: true},
		9 : {facing_direction: 1, triggered_bit: true},
		10 : {facing_direction: 2, triggered_bit: true},
		11 : {facing_direction: 3, triggered_bit: true},
		12 : {facing_direction: 4, triggered_bit: true},
		13 : {facing_direction: 5, triggered_bit: true},
		
		14 : {facing_direction: 0, triggered_bit: false},
		15 : {facing_direction: 0, triggered_bit: false}
	},
	"minecraft:sticky_piston": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:web": {},
	"minecraft:tallgrass": {
		0 : {tall_grass_type: "default"},
		1 : {tall_grass_type: "tall"},
		2 : {tall_grass_type: "fern"},
		3 : {tall_grass_type: "snow"}
	},
	"minecraft:deadbush": {},
	"minecraft:piston": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:pistonArmCollision": {},
	"minecraft:wool": {
		0 : {color: "white"},
		1 : {color: "orange"},
		2 : {color: "magenta"},
		3 : {color: "light_blue"},
		4 : {color: "yellow"},
		5 : {color: "lime"},
		6 : {color: "pink"},
		7 : {color: "gray"},
		8 : {color: "light_gray"},
		9 : {color: "cyan"},
		10 : {color: "purple"},
		11 : {color: "blue"},
		12 : {color: "brown"},
		13 : {color: "green"},
		14 : {color: "red"},
		15 : {color: "black"}
	},
	"minecraft:element_0": {},
	"minecraft:yellow_flower": {},
	"minecraft:red_flower": {
		0 : {flower_type: "poppy"},
		1 : {flower_type: "orchid"},
		2 : {flower_type: "allium"},
		3 : {flower_type: "houstonia"},
		4 : {flower_type: "tulip_red"},
		5 : {flower_type: "tulip_orange"},
		6 : {flower_type: "tulip_white"},
		7 : {flower_type: "tulip_pink"},
		8 : {flower_type: "oxeye"},
		9 : {flower_type: "cornflower"},
		10 : {flower_type: "lily_of_the_valley"}
	},
	"minecraft:brown_mushroom": {},
	"minecraft:red_mushroom": {},
	"minecraft:gold_block": {},
	"minecraft:iron_block": {},
	"minecraft:double_stone_slab": {
		0 : {stone_slab_type: "smooth_stone", top_slot_bit: false},
		1 : {stone_slab_type: "sandstone", top_slot_bit: false},
		2 : {stone_slab_type: "wood", top_slot_bit: false},
		3 : {stone_slab_type: "cobblestone", top_slot_bit: false},
		4 : {stone_slab_type: "brick", top_slot_bit: false},
		5 : {stone_slab_type: "stone_brick", top_slot_bit: false},
		6 : {stone_slab_type: "quartz", top_slot_bit: false},
		7 : {stone_slab_type: "nether_brick", top_slot_bit: false},
		
		8 : {stone_slab_type: "smooth_stone", top_slot_bit: true},
		9 : {stone_slab_type: "sandstone", top_slot_bit: true},
		10 : {stone_slab_type: "wood", top_slot_bit: true},
		11 : {stone_slab_type: "cobblestone", top_slot_bit: true},
		12 : {stone_slab_type: "brick", top_slot_bit: true},
		13 : {stone_slab_type: "stone_brick", top_slot_bit: true},
		14 : {stone_slab_type: "quartz", top_slot_bit: true},
		15 : {stone_slab_type: "nether_brick", top_slot_bit: true}
	},
	"minecraft:stone_slab": {
		0 : {stone_slab_type: "smooth_stone", top_slot_bit: false},
		1 : {stone_slab_type: "sandstone", top_slot_bit: false},
		2 : {stone_slab_type: "wood", top_slot_bit: false},
		3 : {stone_slab_type: "cobblestone", top_slot_bit: false},
		4 : {stone_slab_type: "brick", top_slot_bit: false},
		5 : {stone_slab_type: "stone_brick", top_slot_bit: false},
		6 : {stone_slab_type: "quartz", top_slot_bit: false},
		7 : {stone_slab_type: "nether_brick", top_slot_bit: false},
		
		8 : {stone_slab_type: "smooth_stone", top_slot_bit: true},
		9 : {stone_slab_type: "sandstone", top_slot_bit: true},
		10 : {stone_slab_type: "wood", top_slot_bit: true},
		11 : {stone_slab_type: "cobblestone", top_slot_bit: true},
		12 : {stone_slab_type: "brick", top_slot_bit: true},
		13 : {stone_slab_type: "stone_brick", top_slot_bit: true},
		14 : {stone_slab_type: "quartz", top_slot_bit: true},
		15 : {stone_slab_type: "nether_brick", top_slot_bit: true}
	},
	"minecraft:brick_block": {},
	"minecraft:tnt": {
		0 : {explode_bit: false, allow_underwater_bit: false},
		1 : {explode_bit: true, allow_underwater_bit: false},
		
		2 : {explode_bit: false, allow_underwater_bit: true},
		3 : {explode_bit: true, allow_underwater_bit: true}
	},
	"minecraft:bookshelf": {},
	"minecraft:mossy_cobblestone": {},
	"minecraft:obsidian": {},
	"minecraft:torch": {
		0 : {torch_facing_direction: "unknown"},
		1 : {torch_facing_direction: "west"},
		2 : {torch_facing_direction: "east"},
		3 : {torch_facing_direction: "north"},
		4 : {torch_facing_direction: "south"},
		5 : {torch_facing_direction: "top"}
	},
	"minecraft:fire": {
		0 : {age: 0},
		1 : {age: 1},
		2 : {age: 2},
		3 : {age: 3},
		4 : {age: 4},
		5 : {age: 5},
		6 : {age: 6},
		7 : {age: 7},
		8 : {age: 8},
		9 : {age: 9},
		10 : {age: 10},
		11 : {age: 11},
		12 : {age: 12},
		13 : {age: 13},
		14 : {age: 14},
		15 : {age: 15}
	},
	"minecraft:mob_spawner": {},
	"minecraft:oak_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:chest": {
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:redstone_wire": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1},
		2 : {redstone_signal: 2},
		3 : {redstone_signal: 3},
		4 : {redstone_signal: 4},
		5 : {redstone_signal: 5},
		6 : {redstone_signal: 6},
		7 : {redstone_signal: 7},
		8 : {redstone_signal: 8},
		9 : {redstone_signal: 9},
		10 : {redstone_signal: 10},
		11 : {redstone_signal: 11},
		12 : {redstone_signal: 12},
		13 : {redstone_signal: 13},
		14 : {redstone_signal: 14},
		15 : {redstone_signal: 15}
	},
	"minecraft:diamond_ore": {},
	"minecraft:diamond_block": {},
	"minecraft:crafting_table": {},
	"minecraft:wheat": {
		0 : {growth: 0},
		1 : {growth: 1},
		2 : {growth: 2},
		3 : {growth: 3},
		4 : {growth: 4},
		5 : {growth: 5},
		6 : {growth: 6},
		7 : {growth: 7}
	},
	"minecraft:farmland": {
		0 : {moisturized_amount: 0},
		1 : {moisturized_amount: 1},
		2 : {moisturized_amount: 2},
		3 : {moisturized_amount: 3},
		4 : {moisturized_amount: 4},
		5 : {moisturized_amount: 5},
		6 : {moisturized_amount: 6},
		7 : {moisturized_amount: 7}
	},
	"minecraft:furnace": {
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:lit_furnace": {
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:standing_sign": {
		0 : {ground_sign_direction: 0},
		1 : {ground_sign_direction: 1},
		2 : {ground_sign_direction: 2},
		3 : {ground_sign_direction: 3},
		4 : {ground_sign_direction: 4},
		5 : {ground_sign_direction: 5},
		6 : {ground_sign_direction: 6},
		7 : {ground_sign_direction: 7},
		8 : {ground_sign_direction: 8},
		9 : {ground_sign_direction: 9},
		10 : {ground_sign_direction: 10},
		11 : {ground_sign_direction: 11},
		12 : {ground_sign_direction: 12},
		13 : {ground_sign_direction: 13},
		14 : {ground_sign_direction: 14},
		15 : {ground_sign_direction: 15}
	},
	"minecraft:wooden_door": {
		0 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		1 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		2 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		3 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		
		4 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		5 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		6 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		7 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		
		8 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		9 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		10 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		11 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		
		12 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		13 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: true},
		14 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		15 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: true}
	},
	"minecraft:ladder": {
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:rail": {
		0 : {rail_direction: 0},
		1 : {rail_direction: 1},
		2 : {rail_direction: 2},
		3 : {rail_direction: 3},
		4 : {rail_direction: 4},
		5 : {rail_direction: 5},
		6 : {rail_direction: 6},
		7 : {rail_direction: 7},
		8 : {rail_direction: 8}
	},
	"minecraft:stone_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:wall_sign": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:lever": {
		0 : {lever_direction: "down_east_west", open_bit: false},
		1 : {lever_direction: "east", open_bit: false},
		2 : {lever_direction: "west", open_bit: false},
		3 : {lever_direction: "south", open_bit: false},
		4 : {lever_direction: "north", open_bit: false},
		5 : {lever_direction: "up_north_south", open_bit: false},
		6 : {lever_direction: "up_east_west", open_bit: false},
		7 : {lever_direction: "down_north_south", open_bit: false},
		
		8 : {lever_direction: "down_east_west", open_bit: true},
		9 : {lever_direction: "east", open_bit: true},
		10 : {lever_direction: "west", open_bit: true},
		11 : {lever_direction: "south", open_bit: true},
		12 : {lever_direction: "north", open_bit: true},
		13 : {lever_direction: "up_north_south", open_bit: true},
		14 : {lever_direction: "up_east_west", open_bit: true},
		15 : {lever_direction: "down_north_south", open_bit: true}
	},
	"minecraft:stone_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:iron_door": {
		0 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		1 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		2 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		3 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		
		4 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		5 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		6 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		7 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		
		8 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		9 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		10 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		11 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		
		12 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		13 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: true},
		14 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		15 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: true}
	},
	"minecraft:wooden_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:redstone_ore": {},
	"minecraft:lit_redstone_ore": {},
	"minecraft:unlit_redstone_torch": {
		0 : {torch_facing_direction: "unknown"},
		1 : {torch_facing_direction: "west"},
		2 : {torch_facing_direction: "east"},
		3 : {torch_facing_direction: "north"},
		4 : {torch_facing_direction: "south"},
		5 : {torch_facing_direction: "top"}
	},
	"minecraft:redstone_torch": {
		0 : {torch_facing_direction: "unknown"},
		1 : {torch_facing_direction: "west"},
		2 : {torch_facing_direction: "east"},
		3 : {torch_facing_direction: "north"},
		4 : {torch_facing_direction: "south"},
		5 : {torch_facing_direction: "top"}
	},
	"minecraft:stone_button": {
		0 : {facing_direction: 0, button_pressed_bit: false},
		1 : {facing_direction: 1, button_pressed_bit: false},
		2 : {facing_direction: 2, button_pressed_bit: false},
		3 : {facing_direction: 3, button_pressed_bit: false},
		4 : {facing_direction: 4, button_pressed_bit: false},
		5 : {facing_direction: 5, button_pressed_bit: false},
		
		6 : {facing_direction: 0, button_pressed_bit: false},
		7 : {facing_direction: 0, button_pressed_bit: false},
		
		8 : {facing_direction: 0, button_pressed_bit: true},
		9 : {facing_direction: 1, button_pressed_bit: true},
		10 : {facing_direction: 2, button_pressed_bit: true},
		11 : {facing_direction: 3, button_pressed_bit: true},
		12 : {facing_direction: 4, button_pressed_bit: true},
		13 : {facing_direction: 5, button_pressed_bit: true},
		
		14 : {facing_direction: 0, button_pressed_bit: true},
		15 : {facing_direction: 0, button_pressed_bit: true}
	},
	"minecraft:snow_layer": {
		0 : {height: 0, covered_bit: false},
		1 : {height: 1, covered_bit: false},
		2 : {height: 2, covered_bit: false},
		3 : {height: 3, covered_bit: false},
		4 : {height: 4, covered_bit: false},
		5 : {height: 5, covered_bit: false},
		6 : {height: 6, covered_bit: false},
		7 : {height: 7, covered_bit: false},
		
		8 : {height: 0, covered_bit: true},
		9 : {height: 1, covered_bit: true},
		10 : {height: 2, covered_bit: true},
		11 : {height: 3, covered_bit: true},
		12 : {height: 4, covered_bit: true},
		13 : {height: 5, covered_bit: true},
		14 : {height: 6, covered_bit: true},
		15 : {height: 7, covered_bit: true}
	},
	"minecraft:ice": {},
	"minecraft:snow": {},
	"minecraft:cactus": {
		0 : {age: 0},
		1 : {age: 1},
		2 : {age: 2},
		3 : {age: 3},
		4 : {age: 4},
		5 : {age: 5},
		6 : {age: 6},
		7 : {age: 7},
		8 : {age: 8},
		9 : {age: 9},
		10 : {age: 10},
		11 : {age: 11},
		12 : {age: 12},
		13 : {age: 13},
		14 : {age: 14},
		15 : {age: 15}
	},
	"minecraft:clay": {},
	"minecraft:reeds": {
		0 : {age: 0},
		1 : {age: 1},
		2 : {age: 2},
		3 : {age: 3},
		4 : {age: 4},
		5 : {age: 5},
		6 : {age: 6},
		7 : {age: 7},
		8 : {age: 8},
		9 : {age: 9},
		10 : {age: 10},
		11 : {age: 11},
		12 : {age: 12},
		13 : {age: 13},
		14 : {age: 14},
		15 : {age: 15}
	},
	"minecraft:jukebox": {},
	"minecraft:fence": {
		0 : {wood_type: "oak"},
		1 : {wood_type: "spruce"},
		2 : {wood_type: "birch"},
		3 : {wood_type: "jungle"},
		4 : {wood_type: "acacia"},
		5 : {wood_type: "dark_Oak"}
	},
	"minecraft:pumpkin": {
		0 : {direction: 0},
		1 : {direction: 1},
		2 : {direction: 2},
		3 : {direction: 3}
	},
	"minecraft:netherrack": {},
	"minecraft:soul_sand": {},
	"minecraft:glowstone": {},
	"minecraft:portal": {
		0 : {portal_axis: "unknown"},
		1 : {portal_axis: "x"},
		2 : {portal_axis: "z"}
	},
	"minecraft:lit_pumpkin": {
		0 : {direction: 0},
		1 : {direction: 1},
		2 : {direction: 2},
		3 : {direction: 3}
	},
	"minecraft:cake": {
		0 : {bite_counter: 0},
		1 : {bite_counter: 1},
		2 : {bite_counter: 2},
		3 : {bite_counter: 3},
		4 : {bite_counter: 4},
		5 : {bite_counter: 5},
		6 : {bite_counter: 6}
	},
	"minecraft:unpowered_repeater": {
		0 : {repeater_delay: 0, direction: 0},
		1 : {repeater_delay: 0, direction: 1},
		2 : {repeater_delay: 0, direction: 2},
		3 : {repeater_delay: 0, direction: 3},
		
		4 : {repeater_delay: 1, direction: 0},
		5 : {repeater_delay: 1, direction: 1},
		6 : {repeater_delay: 1, direction: 2},
		7 : {repeater_delay: 1, direction: 3},
		
		8 : {repeater_delay: 2, direction: 0},
		9 : {repeater_delay: 2, direction: 1},
		10 : {repeater_delay: 2, direction: 2},
		11 : {repeater_delay: 2, direction: 3},
		
		12 : {repeater_delay: 3, direction: 0},
		13 : {repeater_delay: 3, direction: 1},
		14 : {repeater_delay: 3, direction: 2},
		15 : {repeater_delay: 3, direction: 3}
	},
	"minecraft:powered_repeater": {
		0 : {repeater_delay: 0, direction: 0},
		1 : {repeater_delay: 0, direction: 1},
		2 : {repeater_delay: 0, direction: 2},
		3 : {repeater_delay: 0, direction: 3},
		
		4 : {repeater_delay: 1, direction: 0},
		5 : {repeater_delay: 1, direction: 1},
		6 : {repeater_delay: 1, direction: 2},
		7 : {repeater_delay: 1, direction: 3},
		
		8 : {repeater_delay: 2, direction: 0},
		9 : {repeater_delay: 2, direction: 1},
		10 : {repeater_delay: 2, direction: 2},
		11 : {repeater_delay: 2, direction: 3},
		
		12 : {repeater_delay: 3, direction: 0},
		13 : {repeater_delay: 3, direction: 1},
		14 : {repeater_delay: 3, direction: 2},
		15 : {repeater_delay: 3, direction: 3}
	},
	"minecraft:invisibleBedrock": {},
	"minecraft:trapdoor": {
		0 : {direction: 0, upside_down_bit: false, open_bit: false},
		1 : {direction: 1, upside_down_bit: false, open_bit: false},
		2 : {direction: 2, upside_down_bit: false, open_bit: false},
		3 : {direction: 3, upside_down_bit: false, open_bit: false},
		
		4 : {direction: 0, upside_down_bit: true, open_bit: false},
		5 : {direction: 1, upside_down_bit: true, open_bit: false},
		6 : {direction: 2, upside_down_bit: true, open_bit: false},
		7 : {direction: 3, upside_down_bit: true, open_bit: false},
		
		8 : {direction: 0, upside_down_bit: false, open_bit: true},
		9 : {direction: 1, upside_down_bit: false, open_bit: true},
		10 : {direction: 2, upside_down_bit: false, open_bit: true},
		11 : {direction: 3, upside_down_bit: false, open_bit: true},
		
		12 : {direction: 0, upside_down_bit: true, open_bit: true},
		13 : {direction: 1, upside_down_bit: true, open_bit: true},
		14 : {direction: 2, upside_down_bit: true, open_bit: true},
		15 : {direction: 3, upside_down_bit: true, open_bit: true}
	},
	"minecraft:monster_egg": {
		0 : {monster_egg_stone_type: "stone"},
		1 : {monster_egg_stone_type: "cobblestone"},
		2 : {monster_egg_stone_type: "stone_brick"},
		3 : {monster_egg_stone_type: "mossy_stone_brick"},
		4 : {monster_egg_stone_type: "cracked_stone_brick"},
		5 : {monster_egg_stone_type: "chiseled_stone_brick"}
	},
	"minecraft:stonebrick": {
		0 : {stone_brick_type: "default"},
		1 : {stone_brick_type: "mossy"},
		2 : {stone_brick_type: "cracked"},
		3 : {stone_brick_type: "chiseled"},
		4 : {stone_brick_type: "smooth"}
	},
	"minecraft:brown_mushroom_block": {},
	"minecraft:red_mushroom_block": {},
	"minecraft:iron_bars": {},
	"minecraft:glass_pane": {},
	"minecraft:melon_block": {},
	"minecraft:pumpkin_stem": {
		0 : {growth: 0},
		1 : {growth: 1},
		2 : {growth: 2},
		3 : {growth: 3},
		4 : {growth: 4},
		5 : {growth: 5},
		6 : {growth: 6},
		7 : {growth: 7}
	},
	"minecraft:melon_stem": {
		0 : {growth: 0},
		1 : {growth: 1},
		2 : {growth: 2},
		3 : {growth: 3},
		4 : {growth: 4},
		5 : {growth: 5},
		6 : {growth: 6},
		7 : {growth: 7}
	},
	"minecraft:vine": {
		0 : {vine_direction_bits: 0},
		1 : {vine_direction_bits: 1},
		2 : {vine_direction_bits: 2},
		3 : {vine_direction_bits: 3},
		4 : {vine_direction_bits: 4},
		5 : {vine_direction_bits: 5},
		6 : {vine_direction_bits: 6},
		7 : {vine_direction_bits: 7},
		8 : {vine_direction_bits: 8},
		9 : {vine_direction_bits: 9},
		10 : {vine_direction_bits: 10},
		11 : {vine_direction_bits: 11},
		12 : {vine_direction_bits: 12},
		13 : {vine_direction_bits: 13},
		14 : {vine_direction_bits: 14},
		15 : {vine_direction_bits: 15}
	},
	"minecraft:fence_gate": {
		0 : {direction: 0, open_bit: false},
		1 : {direction: 1, open_bit: false},
		2 : {direction: 2, open_bit: false},
		3 : {direction: 3, open_bit: false},
		
		4 : {direction: 0, open_bit: true},
		5 : {direction: 1, open_bit: true},
		6 : {direction: 2, open_bit: true},
		7 : {direction: 3, open_bit: true}
	},
	"minecraft:brick_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:stone_brick_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:mycelium": {},
	"minecraft:waterlily": {},
	"minecraft:nether_brick": {},
	"minecraft:nether_brick_fence": {},
	"minecraft:nether_brick_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:nether_wart": {
		0 : {age: 0},
		1 : {age: 1},
		2 : {age: 2},
		3 : {age: 3}
	},
	"minecraft:enchanting_table": {},
	"minecraft:brewing_stand": {},
	"minecraft:cauldron": {
		0 : {fill_level: 0},
		1 : {fill_level: 1},
		2 : {fill_level: 2},
		3 : {fill_level: 3},
		4 : {fill_level: 4},
		5 : {fill_level: 5},
		6 : {fill_level: 6}
	},
	"minecraft:end_portal": {},
	"minecraft:end_portal_frame": {
		0 : {direction: 0, end_portal_eye_bit: false},
		1 : {direction: 1, end_portal_eye_bit: false},
		2 : {direction: 2, end_portal_eye_bit: false},
		3 : {direction: 3, end_portal_eye_bit: false},
		
		4 : {direction: 0, end_portal_eye_bit: true},
		5 : {direction: 1, end_portal_eye_bit: true},
		6 : {direction: 2, end_portal_eye_bit: true},
		7 : {direction: 3, end_portal_eye_bit: true}
	},
	"minecraft:end_stone": {},
	"minecraft:dragon_egg": {},
	"minecraft:redstone_lamp": {},
	"minecraft:lit_redstone_lamp": {},
	"minecraft:dropper": {
		0 : {facing_direction: 0, triggered_bit: false},
		1 : {facing_direction: 1, triggered_bit: false},
		2 : {facing_direction: 2, triggered_bit: false},
		3 : {facing_direction: 3, triggered_bit: false},
		4 : {facing_direction: 4, triggered_bit: false},
		5 : {facing_direction: 5, triggered_bit: false},
		
		6 : {facing_direction: 0, triggered_bit: false},
		7 : {facing_direction: 0, triggered_bit: false},
		
		8 : {facing_direction: 0, triggered_bit: true},
		9 : {facing_direction: 1, triggered_bit: true},
		10 : {facing_direction: 2, triggered_bit: true},
		11 : {facing_direction: 3, triggered_bit: true},
		12 : {facing_direction: 4, triggered_bit: true},
		13 : {facing_direction: 5, triggered_bit: true},
		
		14 : {facing_direction: 0, triggered_bit: false},
		15 : {facing_direction: 0, triggered_bit: false}
	},
	"minecraft:activator_rail": {
		0 : {facing_direction: 0, triggered_bit: false},
		1 : {facing_direction: 1, triggered_bit: false},
		2 : {facing_direction: 2, triggered_bit: false},
		3 : {facing_direction: 3, triggered_bit: false},
		4 : {facing_direction: 4, triggered_bit: false},
		5 : {facing_direction: 5, triggered_bit: false},
		
		6 : {facing_direction: 0, triggered_bit: false},
		7 : {facing_direction: 0, triggered_bit: false},
		
		8 : {facing_direction: 0, triggered_bit: true},
		9 : {facing_direction: 1, triggered_bit: true},
		10 : {facing_direction: 2, triggered_bit: true},
		11 : {facing_direction: 3, triggered_bit: true},
		12 : {facing_direction: 4, triggered_bit: true},
		13 : {facing_direction: 5, triggered_bit: true},
		
		14 : {facing_direction: 0, triggered_bit: false},
		15 : {facing_direction: 0, triggered_bit: false}
	},
	"minecraft:cocoa": {
		0 : {direction: 0, age: 0},
		1 : {direction: 1, age: 0},
		2 : {direction: 2, age: 0},
		3 : {direction: 3, age: 0},
		
		4 : {direction: 0, age: 1},
		5 : {direction: 1, age: 1},
		6 : {direction: 2, age: 1},
		7 : {direction: 3, age: 1},
		
		8 : {direction: 0, age: 2},
		9 : {direction: 1, age: 2},
		10 : {direction: 2, age: 2},
		11 : {direction: 3, age: 2}
	},
	"minecraft:sandstone_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:emerald_ore": 129,
	"minecraft:ender_chest": {
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:tripwire_hook": {
		0 : {direction: 0, attached_bit: false, powered_bit: false},
		1 : {direction: 1, attached_bit: false, powered_bit: false},
		2 : {direction: 2, attached_bit: false, powered_bit: false},
		3 : {direction: 3, attached_bit: false, powered_bit: false},
		
		4 : {direction: 0, attached_bit: true, powered_bit: false},
		5 : {direction: 1, attached_bit: true, powered_bit: false},
		6 : {direction: 2, attached_bit: true, powered_bit: false},
		7 : {direction: 3, attached_bit: true, powered_bit: false},
		
		8 : {direction: 0, attached_bit: false, powered_bit: true},
		9 : {direction: 1, attached_bit: false, powered_bit: true},
		10 : {direction: 2, attached_bit: false, powered_bit: true},
		11 : {direction: 3, attached_bit: false, powered_bit: true},
		
		12 : {direction: 0, attached_bit: true, powered_bit: true},
		13 : {direction: 1, attached_bit: true, powered_bit: true},
		14 : {direction: 2, attached_bit: true, powered_bit: true},
		15 : {direction: 3, attached_bit: true, powered_bit: true}
	},
	"minecraft:tripWire": {
		0 : {powered_bit: false, attached_bit: false, disarmed_bit: false},
		1 : {powered_bit: true, attached_bit: false, disarmed_bit: false},
		
		4 : {powered_bit: false, attached_bit: true, disarmed_bit: false},
		5 : {powered_bit: true, attached_bit: true, disarmed_bit: false},
		
		8 : {powered_bit: false, attached_bit: false, disarmed_bit: true},
		9 : {powered_bit: true, attached_bit: false, disarmed_bit: true},
		
		12 : {powered_bit: false, attached_bit: true, disarmed_bit: true},
		13 : {powered_bit: true, attached_bit: true, disarmed_bit: true}
	},
	"minecraft:emerald_block": {},
	"minecraft:spruce_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:birch_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:jungle_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:command_block": {
		0 : {facing_direction: 0, conditional_bit: false},
		1 : {facing_direction: 1, conditional_bit: false},
		2 : {facing_direction: 2, conditional_bit: false},
		3 : {facing_direction: 3, conditional_bit: false},
		4 : {facing_direction: 4, conditional_bit: false},
		5 : {facing_direction: 5, conditional_bit: false},
		
		6 : {facing_direction: 0, conditional_bit: false},
		7 : {facing_direction: 0, conditional_bit: false},
		
		8 : {facing_direction: 0, conditional_bit: true},
		9 : {facing_direction: 1, conditional_bit: true},
		10 : {facing_direction: 2, conditional_bit: true},
		11 : {facing_direction: 3, conditional_bit: true},
		12 : {facing_direction: 4, conditional_bit: true},
		13 : {facing_direction: 5, conditional_bit: true},
		
		14 : {facing_direction: 0, conditional_bit: true},
		15 : {facing_direction: 0, conditional_bit: true}
	},
	"minecraft:beacon": {},
	"minecraft:cobblestone_wall": {
		0 : {wall_block_type: "cobblestone"},
		1 : {wall_block_type: "mossy_cobblestone"},
		2 : {wall_block_type: "granite"},
		3 : {wall_block_type: "diorite"},
		4 : {wall_block_type: "andesite"},
		5 : {wall_block_type: "sandstone"},
		6 : {wall_block_type: "brick"},
		7 : {wall_block_type: "stone_brick"},
		8 : {wall_block_type: "mossy_stone_brick"},
		9 : {wall_block_type: "nether_brick"},
		10 : {wall_block_type: "end_brick"},
		11 : {wall_block_type: "prismarine"},
		12 : {wall_block_type: "red_sandstone"},
		13 : {wall_block_type: "red_nether_brick"}
	},
	"minecraft:flower_pot": {},
	"minecraft:carrots": {
		0 : {growth: 0},
		1 : {growth: 1},
		2 : {growth: 2},
		3 : {growth: 3},
		4 : {growth: 4},
		5 : {growth: 5},
		6 : {growth: 6},
		7 : {growth: 7}
	},
	"minecraft:potatoes": {
		0 : {growth: 0},
		1 : {growth: 1},
		2 : {growth: 2},
		3 : {growth: 3},
		4 : {growth: 4},
		5 : {growth: 5},
		6 : {growth: 6},
		7 : {growth: 7}
	},
	"minecraft:wooden_button": {
		0 : {facing_direction: 0, button_pressed_bit: false},
		1 : {facing_direction: 1, button_pressed_bit: false},
		2 : {facing_direction: 2, button_pressed_bit: false},
		3 : {facing_direction: 3, button_pressed_bit: false},
		4 : {facing_direction: 4, button_pressed_bit: false},
		5 : {facing_direction: 5, button_pressed_bit: false},
		
		6 : {facing_direction: 0, button_pressed_bit: false},
		7 : {facing_direction: 0, button_pressed_bit: false},
		
		8 : {facing_direction: 0, button_pressed_bit: true},
		9 : {facing_direction: 1, button_pressed_bit: true},
		10 : {facing_direction: 2, button_pressed_bit: true},
		11 : {facing_direction: 3, button_pressed_bit: true},
		12 : {facing_direction: 4, button_pressed_bit: true},
		13 : {facing_direction: 5, button_pressed_bit: true},
		
		14 : {facing_direction: 0, button_pressed_bit: true},
		15 : {facing_direction: 0, button_pressed_bit: true}
	},
	"minecraft:skull": {
		0 : {facing_direction: 0, no_drop_bit: false},
		1 : {facing_direction: 1, no_drop_bit: false},
		2 : {facing_direction: 2, no_drop_bit: false},
		3 : {facing_direction: 3, no_drop_bit: false},
		4 : {facing_direction: 4, no_drop_bit: false},
		5 : {facing_direction: 5, no_drop_bit: false},
		
		6 : {facing_direction: 0, no_drop_bit: false},
		7 : {facing_direction: 0, no_drop_bit: false},
		
		8 : {facing_direction: 0, no_drop_bit: true},
		9 : {facing_direction: 1, no_drop_bit: true},
		10 : {facing_direction: 2, no_drop_bit: true},
		11 : {facing_direction: 3, no_drop_bit: true},
		12 : {facing_direction: 4, no_drop_bit: true},
		13 : {facing_direction: 5, no_drop_bit: true},
		
		14 : {facing_direction: 0, no_drop_bit: true},
		15 : {facing_direction: 0, no_drop_bit: true}
	},
	"minecraft:anvil": {
		0 : {direction: 0, damage: "undamaged"},
		1 : {direction: 1, damage: "undamaged"},
		2 : {direction: 2, damage: "undamaged"},
		3 : {direction: 3, damage: "undamaged"},
		
		4 : {direction: 0, damage: "slightly_damaged"},
		5 : {direction: 1, damage: "slightly_damaged"},
		6 : {direction: 2, damage: "slightly_damaged"},
		7 : {direction: 3, damage: "slightly_damaged"},
		
		8 : {direction: 0, damage: "very_damaged"},
		9 : {direction: 1, damage: "very_damaged"},
		10 : {direction: 2, damage: "very_damaged"},
		11 : {direction: 3, damage: "very_damaged"},
		
		12 : {direction: 0, damage: "broken"},
		13 : {direction: 1, damage: "broken"},
		14 : {direction: 2, damage: "broken"},
		15 : {direction: 3, damage: "broken"}
	},
	"minecraft:trapped_chest": {
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:light_weighted_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:heavy_weighted_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:unpowered_comparator": {
		0 : {direction: 0, output_subtract_bit: false, output_lit_bit: false},
		1 : {direction: 1, output_subtract_bit: false, output_lit_bit: false},
		2 : {direction: 2, output_subtract_bit: false, output_lit_bit: false},
		3 : {direction: 3, output_subtract_bit: false, output_lit_bit: false},
		
		4 : {direction: 0, output_subtract_bit: true, output_lit_bit: false},
		5 : {direction: 1, output_subtract_bit: true, output_lit_bit: false},
		6 : {direction: 2, output_subtract_bit: true, output_lit_bit: false},
		7 : {direction: 3, output_subtract_bit: true, output_lit_bit: false},
		
		8 : {direction: 0, output_subtract_bit: false, output_lit_bit: true},
		9 : {direction: 1, output_subtract_bit: false, output_lit_bit: true},
		10 : {direction: 2, output_subtract_bit: false, output_lit_bit: true},
		11 : {direction: 3, output_subtract_bit: false, output_lit_bit: true},
		
		12 : {direction: 0, output_subtract_bit: true, output_lit_bit: true},
		13 : {direction: 1, output_subtract_bit: true, output_lit_bit: true},
		14 : {direction: 2, output_subtract_bit: true, output_lit_bit: true},
		15 : {direction: 3, output_subtract_bit: true, output_lit_bit: true}
	},
	"minecraft:powered_comparator": {
		0 : {direction: 0, output_subtract_bit: false, output_lit_bit: false},
		1 : {direction: 1, output_subtract_bit: false, output_lit_bit: false},
		2 : {direction: 2, output_subtract_bit: false, output_lit_bit: false},
		3 : {direction: 3, output_subtract_bit: false, output_lit_bit: false},
		
		4 : {direction: 0, output_subtract_bit: true, output_lit_bit: false},
		5 : {direction: 1, output_subtract_bit: true, output_lit_bit: false},
		6 : {direction: 2, output_subtract_bit: true, output_lit_bit: false},
		7 : {direction: 3, output_subtract_bit: true, output_lit_bit: false},
		
		8 : {direction: 0, output_subtract_bit: false, output_lit_bit: true},
		9 : {direction: 1, output_subtract_bit: false, output_lit_bit: true},
		10 : {direction: 2, output_subtract_bit: false, output_lit_bit: true},
		11 : {direction: 3, output_subtract_bit: false, output_lit_bit: true},
		
		12 : {direction: 0, output_subtract_bit: true, output_lit_bit: true},
		13 : {direction: 1, output_subtract_bit: true, output_lit_bit: true},
		14 : {direction: 2, output_subtract_bit: true, output_lit_bit: true},
		15 : {direction: 3, output_subtract_bit: true, output_lit_bit: true}
	},
	"minecraft:daylight_detector": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1},
		2 : {redstone_signal: 2},
		3 : {redstone_signal: 3},
		4 : {redstone_signal: 4},
		5 : {redstone_signal: 5},
		6 : {redstone_signal: 6},
		7 : {redstone_signal: 7},
		8 : {redstone_signal: 8},
		9 : {redstone_signal: 9},
		10 : {redstone_signal: 10},
		11 : {redstone_signal: 11},
		12 : {redstone_signal: 12},
		13 : {redstone_signal: 13},
		14 : {redstone_signal: 14},
		15 : {redstone_signal: 15}
	},
	"minecraft:redstone_block": {},
	"minecraft:quartz_ore": {},
	"minecraft:hopper": {
		0 : {facing_direction: 0, toggle_bit: false},
		1 : {facing_direction: 1, toggle_bit: false},
		2 : {facing_direction: 2, toggle_bit: false},
		3 : {facing_direction: 3, toggle_bit: false},
		4 : {facing_direction: 4, toggle_bit: false},
		5 : {facing_direction: 5, toggle_bit: false},
		
		6 : {facing_direction: 0, toggle_bit: false},
		7 : {facing_direction: 0, toggle_bit: false},
		
		8 : {facing_direction: 0, toggle_bit: true},
		9 : {facing_direction: 1, toggle_bit: true},
		10 : {facing_direction: 2, toggle_bit: true},
		11 : {facing_direction: 3, toggle_bit: true},
		12 : {facing_direction: 4, toggle_bit: true},
		13 : {facing_direction: 5, toggle_bit: true},
		
		14 : {facing_direction: 0, toggle_bit: true},
		15 : {facing_direction: 0, toggle_bit: true}
	},
	"minecraft:quartz_block": {
		0 : {chisel_type: "default", piller_axis: "y"},
		1 : {chisel_type: "chiseled", piller_axis: "y"},
		2 : {chisel_type: "lines", piller_axis: "y"},
		3 : {chisel_type: "smooth", piller_axis: "y"},
		
		4 : {chisel_type: "default", piller_axis: "x"},
		5 : {chisel_type: "chiseled", piller_axis: "x"},
		6 : {chisel_type: "lines", piller_axis: "x"},
		7 : {chisel_type: "smooth", piller_axis: "x"},
		
		8 : {chisel_type: "default", piller_axis: "z"},
		9 : {chisel_type: "chiseled", piller_axis: "z"},
		10 : {chisel_type: "lines", piller_axis: "z"},
		11 : {chisel_type: "smooth", piller_axis: "z"}
	},
	"minecraft:quartz_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:double_wooden_slab": {
		0 : {wood_type: "oak", top_slot_bit: false},
		1 : {wood_type: "spruce", top_slot_bit: false},
		2 : {wood_type: "birch", top_slot_bit: false},
		3 : {wood_type: "jungle", top_slot_bit: false},
		4 : {wood_type: "acacia", top_slot_bit: false},
		5 : {wood_type: "dark_Oak", top_slot_bit: false},
		
		8 : {wood_type: "oak", top_slot_bit: true},
		9 : {wood_type: "spruce", top_slot_bit: true},
		10 : {wood_type: "birch", top_slot_bit: true},
		11 : {wood_type: "jungle", top_slot_bit: true},
		12 : {wood_type: "acacia", top_slot_bit: true},
		13 : {wood_type: "dark_Oak", top_slot_bit: true}
	},
	"minecraft:wooden_slab": {
		0 : {wood_type: "oak", top_slot_bit: false},
		1 : {wood_type: "spruce", top_slot_bit: false},
		2 : {wood_type: "birch", top_slot_bit: false},
		3 : {wood_type: "jungle", top_slot_bit: false},
		4 : {wood_type: "acacia", top_slot_bit: false},
		5 : {wood_type: "dark_Oak", top_slot_bit: false},
		
		8 : {wood_type: "oak", top_slot_bit: true},
		9 : {wood_type: "spruce", top_slot_bit: true},
		10 : {wood_type: "birch", top_slot_bit: true},
		11 : {wood_type: "jungle", top_slot_bit: true},
		12 : {wood_type: "acacia", top_slot_bit: true},
		13 : {wood_type: "dark_Oak", top_slot_bit: true}
	},
	"minecraft:stained_hardened_clay": {
		0 : {color: "white"},
		1 : {color: "orange"},
		2 : {color: "magenta"},
		3 : {color: "light_blue"},
		4 : {color: "yellow"},
		5 : {color: "lime"},
		6 : {color: "pink"},
		7 : {color: "gray"},
		8 : {color: "light_gray"},
		9 : {color: "cyan"},
		10 : {color: "purple"},
		11 : {color: "blue"},
		12 : {color: "brown"},
		13 : {color: "green"},
		14 : {color: "red"},
		15 : {color: "black"}
	},
	"minecraft:stained_glass_pane": {
		0 : {color: "white"},
		1 : {color: "orange"},
		2 : {color: "magenta"},
		3 : {color: "light_blue"},
		4 : {color: "yellow"},
		5 : {color: "lime"},
		6 : {color: "pink"},
		7 : {color: "gray"},
		8 : {color: "light_gray"},
		9 : {color: "cyan"},
		10 : {color: "purple"},
		11 : {color: "blue"},
		12 : {color: "brown"},
		13 : {color: "green"},
		14 : {color: "red"},
		15 : {color: "black"}
	},
	"minecraft:leaves2": {
		0 : {new_leaf_type: "acacia", update_bit: false, persistent_bit: false},
		1 : {new_leaf_type: "dark_oak", update_bit: false, persistent_bit: false},
		
		
		4 : {new_leaf_type: "acacia", update_bit: true, persistent_bit: false},
		5 : {new_leaf_type: "dark_oak", update_bit: true, persistent_bit: false},
		
		
		8 : {new_leaf_type: "acacia", update_bit: false, persistent_bit: true},
		9 : {new_leaf_type: "dark_oak", update_bit: false, persistent_bit: true},
		
		
		12 : {new_leaf_type: "acacia", update_bit: true, persistent_bit: true},
		13 : {new_leaf_type: "dark_oak", update_bit: true, persistent_bit: true}
		
	},
	"minecraft:log2": {
		0 : {new_log_type: "acacia", piller_axis: "y"},
		1 : {new_log_type: "dark_oak", piller_axis: "y"},
		
		4 : {new_log_type: "acacia", piller_axis: "x"},
		5 : {new_log_type: "dark_oak", piller_axis: "x"},
		
		8 : {new_log_type: "acacia", piller_axis: "z"},
		9 : {new_log_type: "dark_oak", piller_axis: "z"}
	},
	"minecraft:acacia_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:dark_oak_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:slime": {},
	"minecraft:iron_trapdoor": {
		0 : {direction: 0, upside_down_bit: false, open_bit: false},
		1 : {direction: 1, upside_down_bit: false, open_bit: false},
		2 : {direction: 2, upside_down_bit: false, open_bit: false},
		3 : {direction: 3, upside_down_bit: false, open_bit: false},
		
		4 : {direction: 0, upside_down_bit: true, open_bit: false},
		5 : {direction: 1, upside_down_bit: true, open_bit: false},
		6 : {direction: 2, upside_down_bit: true, open_bit: false},
		7 : {direction: 3, upside_down_bit: true, open_bit: false},
		
		8 : {direction: 0, upside_down_bit: false, open_bit: true},
		9 : {direction: 1, upside_down_bit: false, open_bit: true},
		10 : {direction: 2, upside_down_bit: false, open_bit: true},
		11 : {direction: 3, upside_down_bit: false, open_bit: true},
		
		12 : {direction: 0, upside_down_bit: true, open_bit: true},
		13 : {direction: 1, upside_down_bit: true, open_bit: true},
		14 : {direction: 2, upside_down_bit: true, open_bit: true},
		15 : {direction: 3, upside_down_bit: true, open_bit: true}
	},
	"minecraft:prismarine": {
		0 : {prismarine_block_type: "default"},
		1 : {prismarine_block_type: "dark"},
		2 : {prismarine_block_type: "bricks"}
	},
	"minecraft:seaLantern": {},
	"minecraft:hay_block": {
		0 : {deprecated: 0, pillar_axis: "y"},
		1 : {deprecated: 1, pillar_axis: "y"},
		2 : {deprecated: 2, pillar_axis: "y"},
		3 : {deprecated: 3, pillar_axis: "y"},
		
		4 : {deprecated: 0, pillar_axis: "x"},
		5 : {deprecated: 1, pillar_axis: "x"},
		6 : {deprecated: 2, pillar_axis: "x"},
		7 : {deprecated: 3, pillar_axis: "x"},
		
		8 : {deprecated: 0, pillar_axis: "z"},
		9 : {deprecated: 1, pillar_axis: "z"},
		10 : {deprecated: 2, pillar_axis: "z"},
		11 : {deprecated: 3, pillar_axis: "z"}
	},
	"minecraft:carpet": {
		0 : {color: "white"},
		1 : {color: "orange"},
		2 : {color: "magenta"},
		3 : {color: "light_blue"},
		4 : {color: "yellow"},
		5 : {color: "lime"},
		6 : {color: "pink"},
		7 : {color: "gray"},
		8 : {color: "light_gray"},
		9 : {color: "cyan"},
		10 : {color: "purple"},
		11 : {color: "blue"},
		12 : {color: "brown"},
		13 : {color: "green"},
		14 : {color: "red"},
		15 : {color: "black"}
	},
	"minecraft:hardened_clay": {},
	"minecraft:coal_block": {},
	"minecraft:packed_ice": {},
	"minecraft:double_plant": {
		0 : {double_plant_type: "sunflower", upper_block_bit: false},
		1 : {double_plant_type: "syringa", upper_block_bit: false},
		2 : {double_plant_type: "grass", upper_block_bit: false},
		3 : {double_plant_type: "fern", upper_block_bit: false},
		4 : {double_plant_type: "rose", upper_block_bit: false},
		5 : {double_plant_type: "paeonia", upper_block_bit: false},
		
		8 : {double_plant_type: "sunflower", upper_block_bit: true},
		9 : {double_plant_type: "syringa", upper_block_bit: true},
		10 : {double_plant_type: "grass", upper_block_bit: true},
		11 : {double_plant_type: "fern", upper_block_bit: true},
		12 : {double_plant_type: "rose", upper_block_bit: true},
		13 : {double_plant_type: "paeonia", upper_block_bit: true}
	},
	"minecraft:standing_banner": {
		0 : {ground_sign_direction: 0},
		1 : {ground_sign_direction: 1},
		2 : {ground_sign_direction: 2},
		3 : {ground_sign_direction: 3},
		4 : {ground_sign_direction: 4},
		5 : {ground_sign_direction: 5},
		6 : {ground_sign_direction: 6},
		7 : {ground_sign_direction: 7},
		8 : {ground_sign_direction: 8},
		9 : {ground_sign_direction: 9},
		10 : {ground_sign_direction: 10},
		11 : {ground_sign_direction: 11},
		12 : {ground_sign_direction: 12},
		13 : {ground_sign_direction: 13},
		14 : {ground_sign_direction: 14},
		15 : {ground_sign_direction: 15}
	},
	"minecraft:wall_banner": {
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:daylight_detector_inverted": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1},
		2 : {redstone_signal: 2},
		3 : {redstone_signal: 3},
		4 : {redstone_signal: 4},
		5 : {redstone_signal: 5},
		6 : {redstone_signal: 6},
		7 : {redstone_signal: 7},
		8 : {redstone_signal: 8},
		9 : {redstone_signal: 9},
		10 : {redstone_signal: 10},
		11 : {redstone_signal: 11},
		12 : {redstone_signal: 12},
		13 : {redstone_signal: 13},
		14 : {redstone_signal: 14},
		15 : {redstone_signal: 15}
	},
	"minecraft:red_sandstone": {
		0 : {sand_stone_type: "default"},
		1 : {sand_stone_type: "heiroglyphs"},
		2 : {sand_stone_type: "cut"},
		3 : {sand_stone_type: "smooth"}
	},
	"minecraft:red_sandstone_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:double_stone_slab2": {
		0 : {stone_slab_type_2: "red_sandstone", top_slot_bit: false},
		1 : {stone_slab_type_2: "purpur", top_slot_bit: false},
		2 : {stone_slab_type_2: "prismarine_rough", top_slot_bit: false},
		3 : {stone_slab_type_2: "prismarine_dark", top_slot_bit: false},
		4 : {stone_slab_type_2: "prismarine_brick", top_slot_bit: false},
		5 : {stone_slab_type_2: "mossy_cobblestone", top_slot_bit: false},
		6 : {stone_slab_type_2: "smooth_sandstone", top_slot_bit: false},
		7 : {stone_slab_type_2: "red_nether_brick", top_slot_bit: false},
		
		8 : {stone_slab_type_2: "red_sandstone", top_slot_bit: true},
		9 : {stone_slab_type_2: "purpur", top_slot_bit: true},
		10 : {stone_slab_type_2: "prismarine_rough", top_slot_bit: true},
		11 : {stone_slab_type_2: "prismarine_dark", top_slot_bit: true},
		12 : {stone_slab_type_2: "prismarine_brick", top_slot_bit: true},
		13 : {stone_slab_type_2: "mossy_cobblestone", top_slot_bit: true},
		14 : {stone_slab_type_2: "smooth_sandstone", top_slot_bit: true},
		15 : {stone_slab_type_2: "red_nether_brick", top_slot_bit: true}
	},
	"minecraft:stone_slab2": {
		0 : {stone_slab_type_2: "red_sandstone", top_slot_bit: false},
		1 : {stone_slab_type_2: "purpur", top_slot_bit: false},
		2 : {stone_slab_type_2: "prismarine_rough", top_slot_bit: false},
		3 : {stone_slab_type_2: "prismarine_dark", top_slot_bit: false},
		4 : {stone_slab_type_2: "prismarine_brick", top_slot_bit: false},
		5 : {stone_slab_type_2: "mossy_cobblestone", top_slot_bit: false},
		6 : {stone_slab_type_2: "smooth_sandstone", top_slot_bit: false},
		7 : {stone_slab_type_2: "red_nether_brick", top_slot_bit: false},
		
		8 : {stone_slab_type_2: "red_sandstone", top_slot_bit: true},
		9 : {stone_slab_type_2: "purpur", top_slot_bit: true},
		10 : {stone_slab_type_2: "prismarine_rough", top_slot_bit: true},
		11 : {stone_slab_type_2: "prismarine_dark", top_slot_bit: true},
		12 : {stone_slab_type_2: "prismarine_brick", top_slot_bit: true},
		13 : {stone_slab_type_2: "mossy_cobblestone", top_slot_bit: true},
		14 : {stone_slab_type_2: "smooth_sandstone", top_slot_bit: true},
		15 : {stone_slab_type_2: "red_nether_brick", top_slot_bit: true}
	},
	"minecraft:spruce_fence_gate": {
		0 : {direction: 0, open_bit: false},
		1 : {direction: 1, open_bit: false},
		2 : {direction: 2, open_bit: false},
		3 : {direction: 3, open_bit: false},
		
		4 : {direction: 0, open_bit: true},
		5 : {direction: 1, open_bit: true},
		6 : {direction: 2, open_bit: true},
		7 : {direction: 3, open_bit: true}
	},
	"minecraft:birch_fence_gate": {
		0 : {direction: 0, open_bit: false},
		1 : {direction: 1, open_bit: false},
		2 : {direction: 2, open_bit: false},
		3 : {direction: 3, open_bit: false},
		
		4 : {direction: 0, open_bit: true},
		5 : {direction: 1, open_bit: true},
		6 : {direction: 2, open_bit: true},
		7 : {direction: 3, open_bit: true}
	},
	"minecraft:jungle_fence_gate": {
		0 : {direction: 0, open_bit: false},
		1 : {direction: 1, open_bit: false},
		2 : {direction: 2, open_bit: false},
		3 : {direction: 3, open_bit: false},
		
		4 : {direction: 0, open_bit: true},
		5 : {direction: 1, open_bit: true},
		6 : {direction: 2, open_bit: true},
		7 : {direction: 3, open_bit: true}
	},
	"minecraft:dark_oak_fence_gate": {
		0 : {direction: 0, open_bit: false},
		1 : {direction: 1, open_bit: false},
		2 : {direction: 2, open_bit: false},
		3 : {direction: 3, open_bit: false},
		
		4 : {direction: 0, open_bit: true},
		5 : {direction: 1, open_bit: true},
		6 : {direction: 2, open_bit: true},
		7 : {direction: 3, open_bit: true}
	},
	"minecraft:acacia_fence_gate": {
		0 : {direction: 0, open_bit: false},
		1 : {direction: 1, open_bit: false},
		2 : {direction: 2, open_bit: false},
		3 : {direction: 3, open_bit: false},
		
		4 : {direction: 0, open_bit: true},
		5 : {direction: 1, open_bit: true},
		6 : {direction: 2, open_bit: true},
		7 : {direction: 3, open_bit: true}
	},
	"minecraft:repeating_command_block": {
		0 : {facing_direction: 0, conditional_bit: false},
		1 : {facing_direction: 1, conditional_bit: false},
		2 : {facing_direction: 2, conditional_bit: false},
		3 : {facing_direction: 3, conditional_bit: false},
		4 : {facing_direction: 4, conditional_bit: false},
		5 : {facing_direction: 5, conditional_bit: false},
		
		6 : {facing_direction: 0, conditional_bit: false},
		7 : {facing_direction: 0, conditional_bit: false},
		
		8 : {facing_direction: 0, conditional_bit: true},
		9 : {facing_direction: 1, conditional_bit: true},
		10 : {facing_direction: 2, conditional_bit: true},
		11 : {facing_direction: 3, conditional_bit: true},
		12 : {facing_direction: 4, conditional_bit: true},
		13 : {facing_direction: 5, conditional_bit: true},
		
		14 : {facing_direction: 0, conditional_bit: true},
		15 : {facing_direction: 0, conditional_bit: true}
	},
	"minecraft:chain_command_block": {
		0 : {facing_direction: 0, conditional_bit: false},
		1 : {facing_direction: 1, conditional_bit: false},
		2 : {facing_direction: 2, conditional_bit: false},
		3 : {facing_direction: 3, conditional_bit: false},
		4 : {facing_direction: 4, conditional_bit: false},
		5 : {facing_direction: 5, conditional_bit: false},
		
		6 : {facing_direction: 0, conditional_bit: false},
		7 : {facing_direction: 0, conditional_bit: false},
		
		8 : {facing_direction: 0, conditional_bit: true},
		9 : {facing_direction: 1, conditional_bit: true},
		10 : {facing_direction: 2, conditional_bit: true},
		11 : {facing_direction: 3, conditional_bit: true},
		12 : {facing_direction: 4, conditional_bit: true},
		13 : {facing_direction: 5, conditional_bit: true},
		
		14 : {facing_direction: 0, conditional_bit: true},
		15 : {facing_direction: 0, conditional_bit: true}
	},
	"minecraft:hard_glass_pane": {},
	"minecraft:hard_stained_glass_pane": {},
	"minecraft:chemical_heat": {},
	"minecraft:spruce_door": {
		0 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		1 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		2 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		3 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		
		4 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		5 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		6 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		7 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		
		8 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		9 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		10 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		11 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		
		12 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		13 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: true},
		14 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		15 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: true}
	},
	"minecraft:birch_door": {
		0 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		1 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		2 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		3 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		
		4 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		5 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		6 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		7 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		
		8 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		9 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		10 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		11 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		
		12 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		13 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: true},
		14 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		15 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: true}
	},
	"minecraft:jungle_door": {
		0 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		1 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		2 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		3 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		
		4 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		5 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		6 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		7 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		
		8 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		9 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		10 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		11 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		
		12 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		13 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: true},
		14 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		15 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: true}
	},
	"minecraft:acacia_door": {
		0 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		1 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		2 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		3 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		
		4 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		5 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		6 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		7 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		
		8 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		9 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		10 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		11 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		
		12 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		13 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: true},
		14 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		15 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: true}
	},
	"minecraft:dark_oak_door": {
		0 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		1 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		2 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: false},
		3 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: false},
		
		4 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		5 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		6 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: false},
		7 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: false},
		
		8 : {direction: 0, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		9 : {direction: 1, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		10 : {direction: 2, door_hinge_bit: false, open_bit: false, upper_block_bit: true},
		11 : {direction: 3, door_hinge_bit: true, open_bit: false, upper_block_bit: true},
		
		12 : {direction: 0, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		13 : {direction: 1, door_hinge_bit: true, open_bit: true, upper_block_bit: true},
		14 : {direction: 2, door_hinge_bit: false, open_bit: true, upper_block_bit: true},
		15 : {direction: 3, door_hinge_bit: true, open_bit: true, upper_block_bit: true}
	},
	"minecraft:grass_path": {},
	"minecraft:frame": {
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:chorus_flower": {
		0 : {age: 0},
		1 : {age: 1},
		2 : {age: 2},
		3 : {age: 3},
		4 : {age: 4},
		5 : {age: 5}
	},
	"minecraft:purpur_block": {
		0 : {chisel_type: "default", pillar_axis: "y"},
		1 : {chisel_type: "chiseled", pillar_axis: "y"},
		2 : {chisel_type: "lines", pillar_axis: "y"},
		3 : {chisel_type: "smooth", pillar_axis: "y"},
		
		4 : {chisel_type: "default", pillar_axis: "x"},
		5 : {chisel_type: "chiseled", pillar_axis: "x"},
		6 : {chisel_type: "lines", pillar_axis: "x"},
		7 : {chisel_type: "smooth", pillar_axis: "x"},
		
		8 : {chisel_type: "default", pillar_axis: "z"},
		9 : {chisel_type: "chiseled", pillar_axis: "z"},
		10 : {chisel_type: "lines", pillar_axis: "z"},
		11 : {chisel_type: "smooth", pillar_axis: "z"}
	},
	"minecraft:colored_torch_rg": {},
	"minecraft:purpur_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:colored_torch_bp": {},
	"minecraft:undyed_shulker_box": {},
	"minecraft:end_bricks": {},
	"minecraft:frosted_ice": {},
	"minecraft:end_rod": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:end_gateway": {},
	"minecraft:magma": {},
	"minecraft:nether_wart_block": {},
	"minecraft:red_nether_brick": {},
	"minecraft:bone_block": {
		0 : {deprecated: 0, pillar_axis: "y"},
		1 : {deprecated: 1, pillar_axis: "y"},
		2 : {deprecated: 2, pillar_axis: "y"},
		3 : {deprecated: 3, pillar_axis: "y"},
		
		4 : {deprecated: 0, pillar_axis: "x"},
		5 : {deprecated: 1, pillar_axis: "x"},
		6 : {deprecated: 2, pillar_axis: "x"},
		7 : {deprecated: 3, pillar_axis: "x"},
		
		8 : {deprecated: 0, pillar_axis: "z"},
		9 : {deprecated: 1, pillar_axis: "z"},
		10 : {deprecated: 2, pillar_axis: "z"},
		11 : {deprecated: 3, pillar_axis: "z"}
	},
	"minecraft:structure_void": {
		0 : {structure_void_type: "void"},
		1 : {structure_void_type: "air"}
	},
	"minecraft:shulker_box": {
		0 : {color: "white"},
		1 : {color: "orange"},
		2 : {color: "magenta"},
		3 : {color: "light_blue"},
		4 : {color: "yellow"},
		5 : {color: "lime"},
		6 : {color: "pink"},
		7 : {color: "gray"},
		8 : {color: "light_gray"},
		9 : {color: "cyan"},
		10 : {color: "purple"},
		11 : {color: "blue"},
		12 : {color: "brown"},
		13 : {color: "green"},
		14 : {color: "red"},
		15 : {color: "black"}
	},
	"minecraft:purple_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:white_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:orange_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:magenta_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:light_blue_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:yellow_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:lime_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:pink_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:gray_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:silver_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:cyan_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:blue_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:brown_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:green_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:red_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:black_glazed_terracotta": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:concrete": {
		0 : {color: "white"},
		1 : {color: "orange"},
		2 : {color: "magenta"},
		3 : {color: "light_blue"},
		4 : {color: "yellow"},
		5 : {color: "lime"},
		6 : {color: "pink"},
		7 : {color: "gray"},
		8 : {color: "light_gray"},
		9 : {color: "cyan"},
		10 : {color: "purple"},
		11 : {color: "blue"},
		12 : {color: "brown"},
		13 : {color: "green"},
		14 : {color: "red"},
		15 : {color: "black"}
	},
	"minecraft:concretePowder": {
		0 : {color: "white"},
		1 : {color: "orange"},
		2 : {color: "magenta"},
		3 : {color: "light_blue"},
		4 : {color: "yellow"},
		5 : {color: "lime"},
		6 : {color: "pink"},
		7 : {color: "gray"},
		8 : {color: "light_gray"},
		9 : {color: "cyan"},
		10 : {color: "purple"},
		11 : {color: "blue"},
		12 : {color: "brown"},
		13 : {color: "green"},
		14 : {color: "red"},
		15 : {color: "black"}
	},
	"minecraft:chemistry_table": {},
	"minecraft:underwater_torch": {},
	"minecraft:chorus_plant": {},
	"minecraft:stained_glass": {
		0 : {color: "white"},
		1 : {color: "orange"},
		2 : {color: "magenta"},
		3 : {color: "light_blue"},
		4 : {color: "yellow"},
		5 : {color: "lime"},
		6 : {color: "pink"},
		7 : {color: "gray"},
		8 : {color: "light_gray"},
		9 : {color: "cyan"},
		10 : {color: "purple"},
		11 : {color: "blue"},
		12 : {color: "brown"},
		13 : {color: "green"},
		14 : {color: "red"},
		15 : {color: "black"}
	},
	"minecraft:camera": {},
	"minecraft:podzol": {},
	"minecraft:beetroot": {
		0 : {growth: 0},
		1 : {growth: 1},
		2 : {growth: 2},
		3 : {growth: 3},
		4 : {growth: 4},
		5 : {growth: 5},
		6 : {growth: 6},
		7 : {growth: 7}
	},
	"minecraft:stonecutter": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:glowingobsidian": {},
	"minecraft:netherreactor": {},
	"minecraft:info_update": {},
	"minecraft:info_update2": {},
	"minecraft:movingBlock": {},
	"minecraft:observer": {
		0 : {facing_direction: 0, powered_bit: false},
		1 : {facing_direction: 1, powered_bit: false},
		2 : {facing_direction: 2, powered_bit: false},
		3 : {facing_direction: 3, powered_bit: false},
		4 : {facing_direction: 4, powered_bit: false},
		5 : {facing_direction: 5, powered_bit: false},
		
		8 : {facing_direction: 0, powered_bit: true},
		9 : {facing_direction: 1, powered_bit: true},
		10 : {facing_direction: 2, powered_bit: true},
		11 : {facing_direction: 3, powered_bit: true},
		12 : {facing_direction: 4, powered_bit: true},
		13 : {facing_direction: 5, powered_bit: true}
	},
	"minecraft:structure_block": {
		0 : {structure_block_type: "data"},
		1 : {structure_block_type: "save"},
		2 : {structure_block_type: "load"},
		3 : {structure_block_type: "corner"},
		4 : {structure_block_type: "invalid"},
		5 : {structure_block_type: "export"}
	},
	"minecraft:hard_glass": {},
	"minecraft:hard_stained_glass": {},
	"minecraft:reserved6": {},
	"minecraft:prismarine_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:dark_prismarine_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:prismarine_bricks_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:stripped_spruce_log": {
		0 : {pillar_axis: "y"},
		1 : {pillar_axis: "x"},
		2 : {pillar_axis: "z"}
	},
	"minecraft:stripped_birch_log": {
		0 : {pillar_axis: "y"},
		1 : {pillar_axis: "x"},
		2 : {pillar_axis: "z"}
	},
	"minecraft:stripped_jungle_log": {
		0 : {pillar_axis: "y"},
		1 : {pillar_axis: "x"},
		2 : {pillar_axis: "z"}
	},
	"minecraft:stripped_acacia_log": {
		0 : {pillar_axis: "y"},
		1 : {pillar_axis: "x"},
		2 : {pillar_axis: "z"}
	},
	"minecraft:stripped_dark_oak_log": {
		0 : {pillar_axis: "y"},
		1 : {pillar_axis: "x"},
		2 : {pillar_axis: "z"}
	},
	"minecraft:stripped_oak_log": {
		0 : {pillar_axis: "y"},
		1 : {pillar_axis: "x"},
		2 : {pillar_axis: "z"}
	},
	"minecraft:blue_ice": {},
	"minecraft:element_1": 267,
	"minecraft:element_2": 268,
	"minecraft:element_3": 269,
	"minecraft:element_4": 270,
	"minecraft:element_5": 271,
	"minecraft:element_6": 272,
	"minecraft:element_7": 273,
	"minecraft:element_8": 274,
	"minecraft:element_9": 275,
	"minecraft:element_10": 276,
	"minecraft:element_11": 277,
	"minecraft:element_12": 278,
	"minecraft:element_13": 279,
	"minecraft:element_14": 280,
	"minecraft:element_15": 281,
	"minecraft:element_16": 282,
	"minecraft:element_17": 283,
	"minecraft:element_18": 284,
	"minecraft:element_19": 285,
	"minecraft:element_20": 286,
	"minecraft:element_21": 287,
	"minecraft:element_22": 288,
	"minecraft:element_23": 289,
	"minecraft:element_24": 290,
	"minecraft:element_25": 291,
	"minecraft:element_26": 292,
	"minecraft:element_27": 293,
	"minecraft:element_28": 294,
	"minecraft:element_29": 295,
	"minecraft:element_30": 296,
	"minecraft:element_31": 297,
	"minecraft:element_32": 298,
	"minecraft:element_33": 299,
	"minecraft:element_34": 300,
	"minecraft:element_35": 301,
	"minecraft:element_36": 302,
	"minecraft:element_37": 303,
	"minecraft:element_38": 304,
	"minecraft:element_39": 305,
	"minecraft:element_40": 306,
	"minecraft:element_41": 307,
	"minecraft:element_42": 308,
	"minecraft:element_43": 309,
	"minecraft:element_44": 310,
	"minecraft:element_45": 311,
	"minecraft:element_46": 312,
	"minecraft:element_47": 313,
	"minecraft:element_48": 314,
	"minecraft:element_49": 315,
	"minecraft:element_50": 316,
	"minecraft:element_51": 317,
	"minecraft:element_52": 318,
	"minecraft:element_53": 319,
	"minecraft:element_54": 320,
	"minecraft:element_55": 321,
	"minecraft:element_56": 322,
	"minecraft:element_57": 323,
	"minecraft:element_58": 324,
	"minecraft:element_59": 325,
	"minecraft:element_60": 326,
	"minecraft:element_61": 327,
	"minecraft:element_62": 328,
	"minecraft:element_63": 329,
	"minecraft:element_64": 330,
	"minecraft:element_65": 331,
	"minecraft:element_66": 332,
	"minecraft:element_67": 333,
	"minecraft:element_68": 334,
	"minecraft:element_69": 335,
	"minecraft:element_70": 336,
	"minecraft:element_71": 337,
	"minecraft:element_72": 338,
	"minecraft:element_73": 339,
	"minecraft:element_74": 340,
	"minecraft:element_75": 341,
	"minecraft:element_76": 342,
	"minecraft:element_77": 343,
	"minecraft:element_78": 344,
	"minecraft:element_79": 345,
	"minecraft:element_80": 346,
	"minecraft:element_81": 347,
	"minecraft:element_82": 348,
	"minecraft:element_83": 349,
	"minecraft:element_84": 350,
	"minecraft:element_85": 351,
	"minecraft:element_86": 352,
	"minecraft:element_87": 353,
	"minecraft:element_88": 354,
	"minecraft:element_89": 355,
	"minecraft:element_90": 356,
	"minecraft:element_91": 357,
	"minecraft:element_92": 358,
	"minecraft:element_93": 359,
	"minecraft:element_94": 360,
	"minecraft:element_95": 361,
	"minecraft:element_96": 362,
	"minecraft:element_97": 363,
	"minecraft:element_98": 364,
	"minecraft:element_99": 365,
	"minecraft:element_100": 366,
	"minecraft:element_101": 367,
	"minecraft:element_102": 368,
	"minecraft:element_103": 369,
	"minecraft:element_104": 370,
	"minecraft:element_105": 371,
	"minecraft:element_106": 372,
	"minecraft:element_107": 373,
	"minecraft:element_108": 374,
	"minecraft:element_109": 375,
	"minecraft:element_110": 376,
	"minecraft:element_111": 377,
	"minecraft:element_112": 378,
	"minecraft:element_113": 379,
	"minecraft:element_114": 380,
	"minecraft:element_115": 381,
	"minecraft:element_116": 382,
	"minecraft:element_117": 383,
	"minecraft:element_118": 384,
	"minecraft:seagrass": 385,
	"minecraft:coral": {
		0 : {coral_color: "blue", dead_bit: false},
		1 : {coral_color: "pink", dead_bit: false},
		2 : {coral_color: "purple", dead_bit: false},
		3 : {coral_color: "red", dead_bit: false},
		4 : {coral_color: "yellow", dead_bit: false},
		
		8 : {coral_color: "blue", dead_bit: true},
		9 : {coral_color: "pink", dead_bit: true},
		10 : {coral_color: "purple", dead_bit: true},
		11 : {coral_color: "red", dead_bit: true},
		12 : {coral_color: "yellow", dead_bit: true}
	},
	"minecraft:coral_block": {
		0 : {coral_color: "blue", dead_bit: false},
		1 : {coral_color: "pink", dead_bit: false},
		2 : {coral_color: "purple", dead_bit: false},
		3 : {coral_color: "red", dead_bit: false},
		4 : {coral_color: "yellow", dead_bit: false},
		
		8 : {coral_color: "blue", dead_bit: true},
		9 : {coral_color: "pink", dead_bit: true},
		10 : {coral_color: "purple", dead_bit: true},
		11 : {coral_color: "red", dead_bit: true},
		12 : {coral_color: "yellow", dead_bit: true}
	},
	"minecraft:coral_fan": {
		0 : {coral_color: "blue", coral_fan_direction: 0},
		1 : {coral_color: "pink", coral_fan_direction: 0},
		2 : {coral_color: "purple", coral_fan_direction: 0},
		3 : {coral_color: "red", coral_fan_direction: 0},
		4 : {coral_color: "yellow", coral_fan_direction: 0}
	},
	"minecraft:coral_fan_dead": {
		0 : {coral_color: "blue", coral_fan_direction: 0},
		1 : {coral_color: "pink", coral_fan_direction: 0},
		2 : {coral_color: "purple", coral_fan_direction: 0},
		3 : {coral_color: "red", coral_fan_direction: 0},
		4 : {coral_color: "yellow", coral_fan_direction: 0}
	},
	"minecraft:coral_fan_hang": {},
	"minecraft:coral_fan_hang2": {},
	"minecraft:coral_fan_hang3": {},
	"minecraft:kelp": {
		0 : {kelp_age: 0},
		1 : {kelp_age: 1},
		2 : {kelp_age: 2},
		3 : {kelp_age: 3},
		4 : {kelp_age: 4},
		5 : {kelp_age: 5},
		6 : {kelp_age: 6},
		7 : {kelp_age: 7},
		8 : {kelp_age: 8},
		9 : {kelp_age: 9},
		10 : {kelp_age: 10},
		11 : {kelp_age: 11},
		12 : {kelp_age: 12},
		13 : {kelp_age: 13},
		14 : {kelp_age: 14},
		15 : {kelp_age: 15}
	},
	"minecraft:dried_kelp_block": {},
	"minecraft:acacia_button": {
		0 : {facing_direction: 0, button_pressed_bit: false},
		1 : {facing_direction: 1, button_pressed_bit: false},
		2 : {facing_direction: 2, button_pressed_bit: false},
		3 : {facing_direction: 3, button_pressed_bit: false},
		4 : {facing_direction: 4, button_pressed_bit: false},
		5 : {facing_direction: 5, button_pressed_bit: false},
		
		6 : {facing_direction: 0, button_pressed_bit: false},
		7 : {facing_direction: 0, button_pressed_bit: false},
		
		8 : {facing_direction: 0, button_pressed_bit: true},
		9 : {facing_direction: 1, button_pressed_bit: true},
		10 : {facing_direction: 2, button_pressed_bit: true},
		11 : {facing_direction: 3, button_pressed_bit: true},
		12 : {facing_direction: 4, button_pressed_bit: true},
		13 : {facing_direction: 5, button_pressed_bit: true},
		
		14 : {facing_direction: 0, button_pressed_bit: true},
		15 : {facing_direction: 0, button_pressed_bit: true}
	},
	"minecraft:birch_button": {
		0 : {facing_direction: 0, button_pressed_bit: false},
		1 : {facing_direction: 1, button_pressed_bit: false},
		2 : {facing_direction: 2, button_pressed_bit: false},
		3 : {facing_direction: 3, button_pressed_bit: false},
		4 : {facing_direction: 4, button_pressed_bit: false},
		5 : {facing_direction: 5, button_pressed_bit: false},
		
		6 : {facing_direction: 0, button_pressed_bit: false},
		7 : {facing_direction: 0, button_pressed_bit: false},
		
		8 : {facing_direction: 0, button_pressed_bit: true},
		9 : {facing_direction: 1, button_pressed_bit: true},
		10 : {facing_direction: 2, button_pressed_bit: true},
		11 : {facing_direction: 3, button_pressed_bit: true},
		12 : {facing_direction: 4, button_pressed_bit: true},
		13 : {facing_direction: 5, button_pressed_bit: true},
		
		14 : {facing_direction: 0, button_pressed_bit: true},
		15 : {facing_direction: 0, button_pressed_bit: true}
	},
	"minecraft:dark_oak_button": {
		0 : {facing_direction: 0, button_pressed_bit: false},
		1 : {facing_direction: 1, button_pressed_bit: false},
		2 : {facing_direction: 2, button_pressed_bit: false},
		3 : {facing_direction: 3, button_pressed_bit: false},
		4 : {facing_direction: 4, button_pressed_bit: false},
		5 : {facing_direction: 5, button_pressed_bit: false},
		
		6 : {facing_direction: 0, button_pressed_bit: false},
		7 : {facing_direction: 0, button_pressed_bit: false},
		
		8 : {facing_direction: 0, button_pressed_bit: true},
		9 : {facing_direction: 1, button_pressed_bit: true},
		10 : {facing_direction: 2, button_pressed_bit: true},
		11 : {facing_direction: 3, button_pressed_bit: true},
		12 : {facing_direction: 4, button_pressed_bit: true},
		13 : {facing_direction: 5, button_pressed_bit: true},
		
		14 : {facing_direction: 0, button_pressed_bit: true},
		15 : {facing_direction: 0, button_pressed_bit: true}
	},
	"minecraft:jungle_button": {
		0 : {facing_direction: 0, button_pressed_bit: false},
		1 : {facing_direction: 1, button_pressed_bit: false},
		2 : {facing_direction: 2, button_pressed_bit: false},
		3 : {facing_direction: 3, button_pressed_bit: false},
		4 : {facing_direction: 4, button_pressed_bit: false},
		5 : {facing_direction: 5, button_pressed_bit: false},
		
		6 : {facing_direction: 0, button_pressed_bit: false},
		7 : {facing_direction: 0, button_pressed_bit: false},
		
		8 : {facing_direction: 0, button_pressed_bit: true},
		9 : {facing_direction: 1, button_pressed_bit: true},
		10 : {facing_direction: 2, button_pressed_bit: true},
		11 : {facing_direction: 3, button_pressed_bit: true},
		12 : {facing_direction: 4, button_pressed_bit: true},
		13 : {facing_direction: 5, button_pressed_bit: true},
		
		14 : {facing_direction: 0, button_pressed_bit: true},
		15 : {facing_direction: 0, button_pressed_bit: true}
	},
	"minecraft:spruce_button": {
		0 : {facing_direction: 0, button_pressed_bit: false},
		1 : {facing_direction: 1, button_pressed_bit: false},
		2 : {facing_direction: 2, button_pressed_bit: false},
		3 : {facing_direction: 3, button_pressed_bit: false},
		4 : {facing_direction: 4, button_pressed_bit: false},
		5 : {facing_direction: 5, button_pressed_bit: false},
		
		6 : {facing_direction: 0, button_pressed_bit: false},
		7 : {facing_direction: 0, button_pressed_bit: false},
		
		8 : {facing_direction: 0, button_pressed_bit: true},
		9 : {facing_direction: 1, button_pressed_bit: true},
		10 : {facing_direction: 2, button_pressed_bit: true},
		11 : {facing_direction: 3, button_pressed_bit: true},
		12 : {facing_direction: 4, button_pressed_bit: true},
		13 : {facing_direction: 5, button_pressed_bit: true},
		
		14 : {facing_direction: 0, button_pressed_bit: true},
		15 : {facing_direction: 0, button_pressed_bit: true}
	},
	"minecraft:acacia_trapdoor": {
		0 : {direction: 0, upside_down_bit: false, open_bit: false},
		1 : {direction: 1, upside_down_bit: false, open_bit: false},
		2 : {direction: 2, upside_down_bit: false, open_bit: false},
		3 : {direction: 3, upside_down_bit: false, open_bit: false},
		
		4 : {direction: 0, upside_down_bit: true, open_bit: false},
		5 : {direction: 1, upside_down_bit: true, open_bit: false},
		6 : {direction: 2, upside_down_bit: true, open_bit: false},
		7 : {direction: 3, upside_down_bit: true, open_bit: false},
		
		8 : {direction: 0, upside_down_bit: false, open_bit: true},
		9 : {direction: 1, upside_down_bit: false, open_bit: true},
		10 : {direction: 2, upside_down_bit: false, open_bit: true},
		11 : {direction: 3, upside_down_bit: false, open_bit: true},
		
		12 : {direction: 0, upside_down_bit: true, open_bit: true},
		13 : {direction: 1, upside_down_bit: true, open_bit: true},
		14 : {direction: 2, upside_down_bit: true, open_bit: true},
		15 : {direction: 3, upside_down_bit: true, open_bit: true}
	},
	"minecraft:birch_trapdoor": {
		0 : {direction: 0, upside_down_bit: false, open_bit: false},
		1 : {direction: 1, upside_down_bit: false, open_bit: false},
		2 : {direction: 2, upside_down_bit: false, open_bit: false},
		3 : {direction: 3, upside_down_bit: false, open_bit: false},
		
		4 : {direction: 0, upside_down_bit: true, open_bit: false},
		5 : {direction: 1, upside_down_bit: true, open_bit: false},
		6 : {direction: 2, upside_down_bit: true, open_bit: false},
		7 : {direction: 3, upside_down_bit: true, open_bit: false},
		
		8 : {direction: 0, upside_down_bit: false, open_bit: true},
		9 : {direction: 1, upside_down_bit: false, open_bit: true},
		10 : {direction: 2, upside_down_bit: false, open_bit: true},
		11 : {direction: 3, upside_down_bit: false, open_bit: true},
		
		12 : {direction: 0, upside_down_bit: true, open_bit: true},
		13 : {direction: 1, upside_down_bit: true, open_bit: true},
		14 : {direction: 2, upside_down_bit: true, open_bit: true},
		15 : {direction: 3, upside_down_bit: true, open_bit: true}
	},
	"minecraft:dark_oak_trapdoor": {
		0 : {direction: 0, upside_down_bit: false, open_bit: false},
		1 : {direction: 1, upside_down_bit: false, open_bit: false},
		2 : {direction: 2, upside_down_bit: false, open_bit: false},
		3 : {direction: 3, upside_down_bit: false, open_bit: false},
		
		4 : {direction: 0, upside_down_bit: true, open_bit: false},
		5 : {direction: 1, upside_down_bit: true, open_bit: false},
		6 : {direction: 2, upside_down_bit: true, open_bit: false},
		7 : {direction: 3, upside_down_bit: true, open_bit: false},
		
		8 : {direction: 0, upside_down_bit: false, open_bit: true},
		9 : {direction: 1, upside_down_bit: false, open_bit: true},
		10 : {direction: 2, upside_down_bit: false, open_bit: true},
		11 : {direction: 3, upside_down_bit: false, open_bit: true},
		
		12 : {direction: 0, upside_down_bit: true, open_bit: true},
		13 : {direction: 1, upside_down_bit: true, open_bit: true},
		14 : {direction: 2, upside_down_bit: true, open_bit: true},
		15 : {direction: 3, upside_down_bit: true, open_bit: true}
	},
	"minecraft:jungle_trapdoor": {
		0 : {direction: 0, upside_down_bit: false, open_bit: false},
		1 : {direction: 1, upside_down_bit: false, open_bit: false},
		2 : {direction: 2, upside_down_bit: false, open_bit: false},
		3 : {direction: 3, upside_down_bit: false, open_bit: false},
		
		4 : {direction: 0, upside_down_bit: true, open_bit: false},
		5 : {direction: 1, upside_down_bit: true, open_bit: false},
		6 : {direction: 2, upside_down_bit: true, open_bit: false},
		7 : {direction: 3, upside_down_bit: true, open_bit: false},
		
		8 : {direction: 0, upside_down_bit: false, open_bit: true},
		9 : {direction: 1, upside_down_bit: false, open_bit: true},
		10 : {direction: 2, upside_down_bit: false, open_bit: true},
		11 : {direction: 3, upside_down_bit: false, open_bit: true},
		
		12 : {direction: 0, upside_down_bit: true, open_bit: true},
		13 : {direction: 1, upside_down_bit: true, open_bit: true},
		14 : {direction: 2, upside_down_bit: true, open_bit: true},
		15 : {direction: 3, upside_down_bit: true, open_bit: true}
	},
	"minecraft:spruce_trapdoor": {
		0 : {direction: 0, upside_down_bit: false, open_bit: false},
		1 : {direction: 1, upside_down_bit: false, open_bit: false},
		2 : {direction: 2, upside_down_bit: false, open_bit: false},
		3 : {direction: 3, upside_down_bit: false, open_bit: false},
		
		4 : {direction: 0, upside_down_bit: true, open_bit: false},
		5 : {direction: 1, upside_down_bit: true, open_bit: false},
		6 : {direction: 2, upside_down_bit: true, open_bit: false},
		7 : {direction: 3, upside_down_bit: true, open_bit: false},
		
		8 : {direction: 0, upside_down_bit: false, open_bit: true},
		9 : {direction: 1, upside_down_bit: false, open_bit: true},
		10 : {direction: 2, upside_down_bit: false, open_bit: true},
		11 : {direction: 3, upside_down_bit: false, open_bit: true},
		
		12 : {direction: 0, upside_down_bit: true, open_bit: true},
		13 : {direction: 1, upside_down_bit: true, open_bit: true},
		14 : {direction: 2, upside_down_bit: true, open_bit: true},
		15 : {direction: 3, upside_down_bit: true, open_bit: true}
	},
	"minecraft:acacia_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:birch_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:dark_oak_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:jungle_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:spruce_pressure_plate": {
		0 : {redstone_signal: 0},
		1 : {redstone_signal: 1}
	},
	"minecraft:carved_pumpkin": {
		0 : {direction: 0},
		1 : {direction: 1},
		2 : {direction: 2},
		3 : {direction: 3}
	},
	"minecraft:sea_pickle": {
		0 : {cluster_count: 0, dead_bit: false},
		1 : {cluster_count: 1, dead_bit: false},
		2 : {cluster_count: 2, dead_bit: false},
		3 : {cluster_count: 3, dead_bit: false},
		
		4 : {cluster_count: 0, dead_bit: true},
		5 : {cluster_count: 1, dead_bit: true},
		6 : {cluster_count: 2, dead_bit: true},
		7 : {cluster_count: 3, dead_bit: true}
	},
	"minecraft:conduit": {},
	"minecraft:turtle_egg": {
		0 : {turtle_egg_count: "one_egg", cracked_state: "no_cracks"},
		1 : {turtle_egg_count: "two_egg", cracked_state: "no_cracks"},
		2 : {turtle_egg_count: "three_egg", cracked_state: "no_cracks"},
		3 : {turtle_egg_count: "four_egg", cracked_state: "no_cracks"},
		
		4 : {turtle_egg_count: "one_egg", cracked_state: "cracked"},
		5 : {turtle_egg_count: "two_egg", cracked_state: "cracked"},
		6 : {turtle_egg_count: "three_egg", cracked_state: "cracked"},
		7 : {turtle_egg_count: "four_egg", cracked_state: "cracked"},
		
		8 : {turtle_egg_count: "one_egg", cracked_state: "max_cracked"},
		9 : {turtle_egg_count: "two_egg", cracked_state: "max_cracked"},
		10 : {turtle_egg_count: "three_egg", cracked_state: "max_cracked"},
		11 : {turtle_egg_count: "four_egg", cracked_state: "max_cracked"}
	},
	"minecraft:bubble_column": {},
	"minecraft:barrier": {},
	"minecraft:stone_slab3": {
		0 : {stone_slab_type_3: "end_stone_brick", top_slot_bit: false},
		1 : {stone_slab_type_3: "smooth_red_sandstone", top_slot_bit: false},
		2 : {stone_slab_type_3: "polishe_andesite", top_slot_bit: false},
		3 : {stone_slab_type_3: "andesite", top_slot_bit: false},
		4 : {stone_slab_type_3: "diorite", top_slot_bit: false},
		5 : {stone_slab_type_3: "polished_diorite", top_slot_bit: false},
		6 : {stone_slab_type_3: "granite", top_slot_bit: false},
		7 : {stone_slab_type_3: "polished_granite", top_slot_bit: false},
		
		8 : {stone_slab_type_3: "end_stone_brick", top_slot_bit: true},
		9 : {stone_slab_type_3: "smooth_red_sandstone", top_slot_bit: true},
		10 : {stone_slab_type_3: "polishe_andesite", top_slot_bit: true},
		11 : {stone_slab_type_3: "andesite", top_slot_bit: true},
		12 : {stone_slab_type_3: "diorite", top_slot_bit: true},
		13 : {stone_slab_type_3: "polished_diorite", top_slot_bit: true},
		14 : {stone_slab_type_3: "granite", top_slot_bit: true},
		15 : {stone_slab_type_3: "polished_granite", top_slot_bit: true}
	},
	"minecraft:bamboo": {
		0 : {bamboo_stalk_thickness: "thin", bamboo_leaf_size: "no_leaves"},
		1 : {bamboo_stalk_thickness: "thick", bamboo_leaf_size: "no_leaves"},
		
		2 : {bamboo_stalk_thickness: "thin", bamboo_leaf_size: "small_leaves"},
		3 : {bamboo_stalk_thickness: "thick", bamboo_leaf_size: "small_leaves"},
		
		4 : {bamboo_stalk_thickness: "thin", bamboo_leaf_size: "large_leaves"},
		5 : {bamboo_stalk_thickness: "thick", bamboo_leaf_size: "large_leaves"}
	},
	"minecraft:bamboo_sapling": {
		0 : {age_bit: false, sapling_type: "oak"},
		1 : {age_bit: true, sapling_type: "oak"}
	},
	"minecraft:scaffolding": {},
	"minecraft:stone_slab4": {
		0 : {stone_slab_type_4: "mossy_stone_brick", top_slot_bit: false},
		1 : {stone_slab_type_4: "smooth_quartz", top_slot_bit: false},
		2 : {stone_slab_type_4: "stone", top_slot_bit: false},
		3 : {stone_slab_type_4: "cut_sandstone", top_slot_bit: false},
		4 : {stone_slab_type_4: "cut_red_sandstone", top_slot_bit: false},
		
		8 : {stone_slab_type_4: "mossy_stone_brick", top_slot_bit: true},
		9 : {stone_slab_type_4: "smooth_quartz", top_slot_bit: true},
		10 : {stone_slab_type_4: "stone", top_slot_bit: true},
		11 : {stone_slab_type_4: "cut_sandstone", top_slot_bit: true},
		12 : {stone_slab_type_4: "cut_red_sandstone", top_slot_bit: true}
	},
	"minecraft:double_stone_slab3": {
		0 : {stone_slab_type_3: "end_stone_brick", top_slot_bit: false},
		1 : {stone_slab_type_3: "smooth_red_sandstone", top_slot_bit: false},
		2 : {stone_slab_type_3: "polishe_andesite", top_slot_bit: false},
		3 : {stone_slab_type_3: "andesite", top_slot_bit: false},
		4 : {stone_slab_type_3: "diorite", top_slot_bit: false},
		5 : {stone_slab_type_3: "polished_diorite", top_slot_bit: false},
		6 : {stone_slab_type_3: "granite", top_slot_bit: false},
		7 : {stone_slab_type_3: "polished_granite", top_slot_bit: false},
		
		8 : {stone_slab_type_3: "end_stone_brick", top_slot_bit: true},
		9 : {stone_slab_type_3: "smooth_red_sandstone", top_slot_bit: true},
		10 : {stone_slab_type_3: "polishe_andesite", top_slot_bit: true},
		11 : {stone_slab_type_3: "andesite", top_slot_bit: true},
		12 : {stone_slab_type_3: "diorite", top_slot_bit: true},
		13 : {stone_slab_type_3: "polished_diorite", top_slot_bit: true},
		14 : {stone_slab_type_3: "granite", top_slot_bit: true},
		15 : {stone_slab_type_3: "polished_granite", top_slot_bit: true}
	},
	"minecraft:double_stone_slab4": {
		0 : {stone_slab_type_4: "mossy_stone_brick", top_slot_bit: false},
		1 : {stone_slab_type_4: "smooth_quartz", top_slot_bit: false},
		2 : {stone_slab_type_4: "stone", top_slot_bit: false},
		3 : {stone_slab_type_4: "cut_sandstone", top_slot_bit: false},
		4 : {stone_slab_type_4: "cut_red_sandstone", top_slot_bit: false},
		
		8 : {stone_slab_type_4: "mossy_stone_brick", top_slot_bit: true},
		9 : {stone_slab_type_4: "smooth_quartz", top_slot_bit: true},
		10 : {stone_slab_type_4: "stone", top_slot_bit: true},
		11 : {stone_slab_type_4: "cut_sandstone", top_slot_bit: true},
		12 : {stone_slab_type_4: "cut_red_sandstone", top_slot_bit: true}
	},
	"minecraft:granite_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:diorite_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:andesite_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:polished_granite_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:polished_diorite_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:polished_andesite_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:mossy_stone_brick_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:smooth_red_sandstone_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:smooth_sandstone_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:end_brick_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:mossy_cobblestone_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:normal_stone_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:spruce_standing_sign": {
		0 : {ground_sign_direction: 0},
		1 : {ground_sign_direction: 1},
		2 : {ground_sign_direction: 2},
		3 : {ground_sign_direction: 3},
		4 : {ground_sign_direction: 4},
		5 : {ground_sign_direction: 5},
		6 : {ground_sign_direction: 6},
		7 : {ground_sign_direction: 7},
		8 : {ground_sign_direction: 8},
		9 : {ground_sign_direction: 9},
		10 : {ground_sign_direction: 10},
		11 : {ground_sign_direction: 11},
		12 : {ground_sign_direction: 12},
		13 : {ground_sign_direction: 13},
		14 : {ground_sign_direction: 14},
		15 : {ground_sign_direction: 15}
	},
	"minecraft:spruce_wall_sign": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:smooth_stone": {},
	"minecraft:red_nether_brick_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:smooth_quartz_stairs": {
		0 : {weirdo_direction: 0, upside_down_bit: false},
		1 : {weirdo_direction: 1, upside_down_bit: false},
		2 : {weirdo_direction: 2, upside_down_bit: false},
		3 : {weirdo_direction: 3, upside_down_bit: false},
		
		4 : {weirdo_direction: 0, upside_down_bit: true},
		5 : {weirdo_direction: 1, upside_down_bit: true},
		6 : {weirdo_direction: 2, upside_down_bit: true},
		7 : {weirdo_direction: 3, upside_down_bit: true}
	},
	"minecraft:birch_standing_sign": {
		0 : {ground_sign_direction: 0},
		1 : {ground_sign_direction: 1},
		2 : {ground_sign_direction: 2},
		3 : {ground_sign_direction: 3},
		4 : {ground_sign_direction: 4},
		5 : {ground_sign_direction: 5},
		6 : {ground_sign_direction: 6},
		7 : {ground_sign_direction: 7},
		8 : {ground_sign_direction: 8},
		9 : {ground_sign_direction: 9},
		10 : {ground_sign_direction: 10},
		11 : {ground_sign_direction: 11},
		12 : {ground_sign_direction: 12},
		13 : {ground_sign_direction: 13},
		14 : {ground_sign_direction: 14},
		15 : {ground_sign_direction: 15}
	},
	"minecraft:birch_wall_sign": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:jungle_standing_sign": {
		0 : {ground_sign_direction: 0},
		1 : {ground_sign_direction: 1},
		2 : {ground_sign_direction: 2},
		3 : {ground_sign_direction: 3},
		4 : {ground_sign_direction: 4},
		5 : {ground_sign_direction: 5},
		6 : {ground_sign_direction: 6},
		7 : {ground_sign_direction: 7},
		8 : {ground_sign_direction: 8},
		9 : {ground_sign_direction: 9},
		10 : {ground_sign_direction: 10},
		11 : {ground_sign_direction: 11},
		12 : {ground_sign_direction: 12},
		13 : {ground_sign_direction: 13},
		14 : {ground_sign_direction: 14},
		15 : {ground_sign_direction: 15}
	},
	"minecraft:jungle_wall_sign": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:acacia_standing_sign": {
		0 : {ground_sign_direction: 0},
		1 : {ground_sign_direction: 1},
		2 : {ground_sign_direction: 2},
		3 : {ground_sign_direction: 3},
		4 : {ground_sign_direction: 4},
		5 : {ground_sign_direction: 5},
		6 : {ground_sign_direction: 6},
		7 : {ground_sign_direction: 7},
		8 : {ground_sign_direction: 8},
		9 : {ground_sign_direction: 9},
		10 : {ground_sign_direction: 10},
		11 : {ground_sign_direction: 11},
		12 : {ground_sign_direction: 12},
		13 : {ground_sign_direction: 13},
		14 : {ground_sign_direction: 14},
		15 : {ground_sign_direction: 15}
	},
	"minecraft:acacia_wall_sign": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:darkoak_standing_sign": {
		0 : {ground_sign_direction: 0},
		1 : {ground_sign_direction: 1},
		2 : {ground_sign_direction: 2},
		3 : {ground_sign_direction: 3},
		4 : {ground_sign_direction: 4},
		5 : {ground_sign_direction: 5},
		6 : {ground_sign_direction: 6},
		7 : {ground_sign_direction: 7},
		8 : {ground_sign_direction: 8},
		9 : {ground_sign_direction: 9},
		10 : {ground_sign_direction: 10},
		11 : {ground_sign_direction: 11},
		12 : {ground_sign_direction: 12},
		13 : {ground_sign_direction: 13},
		14 : {ground_sign_direction: 14},
		15 : {ground_sign_direction: 15}
	},
	"minecraft:darkoak_wall_sign": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:lectern": {
		0 : {direction: 0, powered_bit: false},
		1 : {direction: 1, powered_bit: false},
		2 : {direction: 2, powered_bit: false},
		3 : {direction: 3, powered_bit: false},
		
		4 : {direction: 0, powered_bit: true},
		5 : {direction: 1, powered_bit: true},
		6 : {direction: 2, powered_bit: true},
		7 : {direction: 3, powered_bit: true}
	},
	"minecraft:grindstone": {
		0 : {direction: 0, attachment: "standing"},
		1 : {direction: 1, attachment: "standing"},
		2 : {direction: 2, attachment: "standing"},
		3 : {direction: 3, attachment: "standing"},
		
		4 : {direction: 0, attachment: "hanging"},
		5 : {direction: 1, attachment: "hanging"},
		6 : {direction: 2, attachment: "hanging"},
		7 : {direction: 3, attachment: "hanging"},
		
		8 : {direction: 0, attachment: "side"},
		9 : {direction: 1, attachment: "side"},
		10 : {direction: 2, attachment: "side"},
		11 : {direction: 3, attachment: "side"},
		
		12 : {direction: 0, attachment: "multiple"},
		13 : {direction: 1, attachment: "multiple"},
		14 : {direction: 2, attachment: "multiple"},
		15 : {direction: 3, attachment: "multiple"}
	},
	"minecraft:blast_furnace": {
		0 : {facing_direction: 0},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:stonecutter_block": {},
	"minecraft:smoker": {
		0 : {facing_direction: 0},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:lit_smoker": {
		0 : {facing_direction: 0},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:cartography_table": {},
	"minecraft:fletching_table": {},
	"minecraft:smithing_table": {},
	"minecraft:barrel": {
		0 : {facing_direction: 0},
		1 : {facing_direction: 1},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:loom": {
		0 : {direction: 0},
		1 : {direction: 1},
		2 : {direction: 2}
	},
	"minecraft:bell": {
		0 : {direction: 0, attachment: "standing"},
		1 : {direction: 1, attachment: "standing"},
		2 : {direction: 2, attachment: "standing"},
		3 : {direction: 3, attachment: "standing"},
		
		4 : {direction: 0, attachment: "hanging"},
		5 : {direction: 1, attachment: "hanging"},
		6 : {direction: 2, attachment: "hanging"},
		7 : {direction: 3, attachment: "hanging"},
		
		8 : {direction: 0, attachment: "side"},
		9 : {direction: 1, attachment: "side"},
		10 : {direction: 2, attachment: "side"},
		11 : {direction: 3, attachment: "side"},
		
		12 : {direction: 0, attachment: "multiple"},
		13 : {direction: 1, attachment: "multiple"},
		14 : {direction: 2, attachment: "multiple"},
		15 : {direction: 3, attachment: "multiple"}
	},
	"minecraft:sweet_berry_bush": {
		0 : {growth: 0},
		1 : {growth: 1},
		2 : {growth: 2},
		3 : {growth: 3},
		4 : {growth: 4},
		5 : {growth: 5},
		6 : {growth: 6},
		7 : {growth: 7}
	},
	"minecraft:lantern": {
		0 : {hanging: false},
		1 : {hanging: true}
	},
	"minecraft:campfire": {
		0 : {direction: 0, extinguished: false},
		1 : {direction: 1, extinguished: false},
		2 : {direction: 2, extinguished: false},
		3 : {direction: 3, extinguished: false},
		
		4 : {direction: 0, extinguished: true},
		5 : {direction: 1, extinguished: true},
		6 : {direction: 2, extinguished: true},
		7 : {direction: 3, extinguished: true}
	},
	"minecraft:lava_cauldron": {
		0 : {fill_level: 0},
		1 : {fill_level: 1},
		2 : {fill_level: 2},
		3 : {fill_level: 3},
		4 : {fill_level: 4},
		5 : {fill_level: 5},
		6 : {fill_level: 6}
	},
	"minecraft:jigsaw": {},
	"minecraft:wood": {
		0 : {wood_type: "oak", stripped_bit: false},
		1 : {wood_type: "spruce", stripped_bit: false},
		2 : {wood_type: "birch", stripped_bit: false},
		3 : {wood_type: "jungle", stripped_bit: false},
		4 : {wood_type: "acacia", stripped_bit: false},
		5 : {wood_type: "dark_Oak", stripped_bit: false},
		
		8 : {wood_type: "oak", stripped_bit: true},
		9 : {wood_type: "spruce", stripped_bit: true},
		10 : {wood_type: "birch", stripped_bit: true},
		11 : {wood_type: "jungle", stripped_bit: true},
		12 : {wood_type: "acacia", stripped_bit: true},
		13 : {wood_type: "dark_Oak", stripped_bit: true}
	},
	"minecraft:composter": {
		0 : {composter_fill_level: 0},
		1 : {composter_fill_level: 1},
		2 : {composter_fill_level: 2},
		3 : {composter_fill_level: 3},
		4 : {composter_fill_level: 4},
		5 : {composter_fill_level: 5},
		6 : {composter_fill_level: 6},
		7 : {composter_fill_level: 7},
		8 : {composter_fill_level: 8}
	},
	"minecraft:lit_blast_furnace": {
		0 : {facing_direction: 0},
		2 : {facing_direction: 2},
		3 : {facing_direction: 3},
		4 : {facing_direction: 4},
		5 : {facing_direction: 5}
	},
	"minecraft:light_block": {
		0 : {block_light_level: 0},
		1 : {block_light_level: 1},
		2 : {block_light_level: 2},
		3 : {block_light_level: 3},
		4 : {block_light_level: 4},
		5 : {block_light_level: 5},
		6 : {block_light_level: 6},
		7 : {block_light_level: 7},
		8 : {block_light_level: 8},
		9 : {block_light_level: 9},
		10 : {block_light_level: 10},
		11 : {block_light_level: 11},
		12 : {block_light_level: 12},
		13 : {block_light_level: 13},
		14 : {block_light_level: 14},
		15 : {block_light_level: 15}
	},
	"minecraft:wither_rose": {},
	"minecraft:stickyPistonArmCollision": {},
	"minecraft:bee_nest": {},
	"minecraft:beehive": {},
	"minecraft:honey_block": {},
	"minecraft:honeycomb_block": {}
}
