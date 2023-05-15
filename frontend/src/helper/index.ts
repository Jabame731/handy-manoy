export function trimStringToLength(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  }

  const trimmedString = str.slice(0, maxLength);
  const lastSpaceIndex = trimmedString.lastIndexOf(' ');

  if (lastSpaceIndex !== -1) {
    return trimmedString.slice(0, lastSpaceIndex) + '...';
  }

  return trimmedString + '...';
}

export const colorFunction = (status: string) => {
  let color = '';
  if (status === 'already payed') {
    color = '  !bg-emerald-600 ';
  } else if (status === 'not payed') {
    color = '!bg-rose-600';
  } else if (status === 'pending') {
    color = '!bg-amber-600';
  } else {
    color = '';
  }

  return color;
};
