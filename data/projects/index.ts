import type { Project } from '~/types'
import { storyChat } from './storyChat'
import { rootin } from './rootin'
import { pawsomeDay } from './pawsomeDay'
import { duel } from './duel'
import { realmo } from './realmo'
import { vori } from './vori'
import { makeEat } from './makeEat'
import { hrm } from './hrm'
import { newsExplorer } from './newsExplorer'
import { devmon } from './devmon'
// ... import other projects

export const projects: Project[] = [
  storyChat,
  rootin,
  pawsomeDay,
  duel,
  realmo,
  vori,
  makeEat,
  hrm,
  newsExplorer,
  devmon
] as const

export { type Project } 