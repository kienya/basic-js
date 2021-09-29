import { NotImplementedError } from '../extensions/index.js';

/**
 * Implement chainMaker object according to task description
 * 
 */
export default {
  result: [],
  getLength() {
    this.result.length;
  },
  addLink(value) {
    if (value === undefined) {
      this.result.push(`( )`);
    } else {
      this.result.push(`( ${value} )`);
    }
    return this;
  },
  removeLink(position) {
    if (this.result[position - 1] === undefined || !Number.isInteger(position) || typeof position != 'number') {
      this.result = [];
      throw new Error("You can't remove incorrect link!");
    }
    this.result = this.result.filter((item, i) => i != position - 1);
    return this;
  },
  reverseChain() {
    this.result = this.result.reverse();
    return this;
  },
  finishChain() {
    let str = this.result.join('~~');
    this.result = [];
    return str;
  }
};
