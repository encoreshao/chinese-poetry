function humanizeNumber(value: number): string {
  value = value || 0
  return value.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

function imageUrl(imgId: string): string {
  return `https://images.unsplash.com/photo-${imgId}?auto=format&fit=crop&w=400`
}

function remoteDataUrl(uri: string): string {
  // return `https://unpkg.com/chinese-poetry@1.4.1/chinese-poetry/${uri}`
  return `https://raw.githubusercontent.com/chinese-poetry/chinese-poetry/master/${uri}`
}

export { humanizeNumber, imageUrl, remoteDataUrl }