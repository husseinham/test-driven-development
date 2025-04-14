export function formatDuration(seconds: number): string {
  const rounded = Math.round(seconds);

  if (rounded < 0) {
    throw new Error('Seconds cannot be negative');
  }

  if (rounded === 0) {
    return '0s';
  }

  const hours = Math.floor(rounded / 3600);
  const minutes = Math.floor((rounded % 3600) / 60);
  const secs = rounded % 60;

  let result = '';
  if (hours > 0) {
    result += `${hours}h`;
  }
  if (minutes > 0) {
    result += `${minutes}m`;
  }
  if (secs > 0 || result === '') {
    result += `${secs}s`;
  }

  return result;
}
