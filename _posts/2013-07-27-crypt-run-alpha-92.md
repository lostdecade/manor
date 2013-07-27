---
layout: article
title: "Crypt Run alpha 0.0.95"
author: matt
---
<div class="full-frame">
	<a href="http://www.cryptrun.com/">
		<img alt="Crypt Run" src="/media/images/posts/cryptRun/banner.jpg" width="500" height="375">
	</a>
</div>

We've been working hard! Here's the massive changelog since the last version of [Crypt Run](http://www.cryptrun.com/) you've played. These changes are now live on the [web-based demo](http://cryptrun.lostdecadegames.com/):

* Support enter/return keys anywhere space is supported
* boomBarrel, boomSpear tweaks
* Tutorial flow tweaks; introduce resurrection object
* zombieGraveRobbers are role=monster by default
* Cleanup dungeon seeding so the player isn't stuck in a specific challenge
* Art for shattering ice block; fix a step script bug
* Don't start music from beginning on unpause
* Play sound effects when counting up numbers on results screens
* Add shovel sounds
* Fix white border bug when fading out after death
* Make player face direction of dungeon room when exiting a room
* improve step enraged behavior with a few more properties
* probably fixes: (zombie)GraveRobbers get stuck on solids
* Polish ResultsScene & ProgressScene
* Polish plants shooting fireballs
* give humanoids blood 'n guts; set groundwork for plant polish
* Art/polish for blinking shopKeeper
* Determine loot drops at generation; loot tables are now zone specific
* New challenge UI
* Add zombieGraveRobber to zombieRoom and graveHeist
* zombieGraveRobber; direBat health nerf
* don't piss off the new graveRobber
* intl tweak; Add required scenario rooms; clean up scenario data; add tombstoneRoom requored scen
* Private PRNG for dungeon generation
* Triple Dagger intl
* ?killerBees=1 to start with killerBees
* Get killer bee's buzz sound to work
* Container lootTables are attached at generation time
* looping ogg files
* Reduce chance of mimic traps; give mimics a proper loot table
* Increase healthPotion cost (HP = 100 per point healed)
* Fix shopKeeper torchTurret activation
* Use marbleBlue for HoT
* graves spawn 10 zombies max
* goldenAxe spawns treasureNugget
* Multiple room trial zones
* Guard against detatched entities in utils/Entity.updateHealth
* Scale zombieRoom with room difficulty
* Fix debug container data
* blueSoulOrb collectible (awards blueSouls), dark monsters drop blueSoulOrbs (often)
* Refactor containers; include pots; fix boomBarrel and bigBoomBarrel debris
* graveRobbers drop shovels rarely
* Humanoids sometimes drop treasureNuggets
* First pass at lootTables; torches drop treasureNuggets
* Add arrows to tutorial; buff spikeTraps in tut death room to get past leather; type
* treasureNugget prefab
* Mimics are traps, not monsters
* Add boom barrels to zombie rooms; randomize zombieRoom entity quantities
* Art for freeze state, code too
* killer BEEEEEEEEEEES
* In tutorial, change lantern reward to something with a more obvious benefit
* Art for keys/doors with keyholes
* Art for gold nuggets
* art for armor (placeholder)
* MEAT
* food.png
* Damage reducing armor items
* Display item names when collected
* Fix error when dropping gold
* Polish spawning of dropped items
* Refactor view/ui/Inventory; add boots2; boots are equipment
* Refactor inventory dropping into sim/systems/shared/inventory; drop equipment when player dies
* Fix Room.spawnEntityByTile centering
* nerf greatOwl
* Nerf werewolf
* Mini-map fixes from geoff-post-alpha
* Preload core env graphics

You'll be getting weekly builds of Crypt Run for Windows or Mac **in your inbox** if you [back Crypt Run](http://www.kickstarter.com/projects/richtaur/crypt-run-death-is-just-the-beginning) for at least $25. Thanks for your support! More soon.
