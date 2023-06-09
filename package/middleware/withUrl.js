export const withUrl = (req, env, ctx) => {
  const { origin, hostname, pathname, search } = new URL(req.url)
  const [tld, sld, ...subdomains] = hostname.split('.').reverse()
  const [subdomain] = subdomains.reverse()
  req.origin = origin
  req.hostname = hostname
  req.tld = tld
  req.sld = sld
  req.subdomain = subdomain
  req.pathname = pathname
  req.search = search
}