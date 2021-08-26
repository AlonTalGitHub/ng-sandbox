export function createId(): string {
  const s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  //return id of format 'aaaa'-'aaaa'-'aaaa'
  return s4() + '-' + s4() + '-' + s4();
}
