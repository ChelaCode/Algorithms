function findEmailDomain(address) {
    const domain = address.split('@')
    return domain[domain.length -1]
}
