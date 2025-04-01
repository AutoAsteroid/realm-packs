import { world } from "@minecraft/server";
import { transferPlayer } from "@minecraft/server-admin";
import { serverIP, serverPort } from "./config.js";

/**
 * Utilitizes the bug allowing @minecraft/server-admin being
 * usable on realms (not intended and may not work in the future).
 */
world.afterEvents.playerSpawn.subscribe(({ player }) => 
    transferPlayer(player, serverIP, serverPort));