export type team = {
    teamId: number;
    teamName: string;
}

export type bowler = {
    bowlerId: number;
    bowlerFirstName: string;
    bowlerMiddleInit: string;
    bowlerLastName: string;
    teamId: number;
    bowlerAddress: string;
    bowlerCity: string;
    bowlerState: string;
    bowlerZip: string;
    bowlerPhoneNumber: string;
    team: team; // this refers back up to the team to get the team name
};
