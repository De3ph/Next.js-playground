export const fetcher = async (...args: any[]) => {
  const res = fetch(...args)
  return (await res).json()
}
