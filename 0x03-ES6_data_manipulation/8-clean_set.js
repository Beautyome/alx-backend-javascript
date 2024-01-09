export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string' || !Array.from(set).every(el => typeof el === 'string')) return '';

  return [...set]
    .filter((el) => el.startsWith(startString))
    .map((el) => el.slice(startString.length))
    .join('-');
}
