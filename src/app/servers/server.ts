import { GameAuthentificationType } from './game-authentification-type.enum';

export class Server {
    id: string;
    name: string;
    description: string;
    version: string;
    maxPlayers: number;
    ping: number;
    maxPing: number;
    gameType: string;
    mapName: string;
    gameTime: number;
    mod: string;
    inLobby: boolean;
    authentificationType: GameAuthentificationType;
    players: Player[];

    public isFull(): boolean {
        return this.players.length >= this.maxPlayers;
    }

    public isJoinable(): boolean {
        return !this.isFull() && this.authentificationType === GameAuthentificationType.Open;
    }
}

export class Player {
    name: string;
    initials: string;

    constructor(name: string) {
        this.name = name;
        this.initials = Player.getInitials(name);
    }

    /**
     * Retrieve initials from name.
     * Removes {} and ** tags ({bac}, *gel*...) as well as special characters.
     * @returns string
     */
    static getInitials(name: string): string {
        let res;
        const upper = name.replace(/[^A-Z]/g, '');

        if (upper.length !== 2) {
            res = name.replace(/({.*})|(\*.*\*)|(\[.*])|\:|\~|\-|\_|\^/g, '')
                .split(/\s|\./)
                .map(n => n[0])
                .join('')
                .toUpperCase()
                .substring(0, 2);
        } else {
            res = upper;
        }

        return res;
    }
}
