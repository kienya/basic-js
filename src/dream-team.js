import { NotImplementedError } from '../extensions/index.js';

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
export default function createDreamTeam(members) {
  let teamName = '';
  if (Array.isArray(members)) {
    members.forEach(member => {
      if (typeof member == 'string') {
        teamName += member.trim()[0];
      }
    })
    return teamName.split('').sort().join('').toUpperCase();
  }
  return false;
}
