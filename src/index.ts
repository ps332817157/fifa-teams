export interface FifaTeam {
  team: string
  iso3: string
  icon: string
}

import fifaTeamsJson from './fifa-teams.json'

export const FIFA_TEAMS = fifaTeamsJson as FifaTeam[]
