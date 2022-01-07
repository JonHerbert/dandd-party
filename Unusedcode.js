    // Define recursive function to print nested values
    // const printValues = (obj) => {
    //   for (var k in obj) {
    //     if (obj[k] instanceof String) {
    //       printValues(obj[k])
    //     } else {
    //       entries.value.push(obj[k])
    //     }
    //   }
    // }
    // printValues(db)
    // console.log(entries.value)

    const objFilter = (obj, filter, nonstrict) => {
        const r = {}
        if (!filter) return {}
        if (typeof filter === 'string') return { [filter]: obj[filter] }
        for (const p in obj) {
          if (typeof filter === 'object' && nonstrict && obj[p] === filter[p]) {
            r[p] = obj[p]
          } else if (
            typeof filter === 'object' &&
            !nonstrict &&
            obj[p] === filter[p]
          ) {
            r[p] = obj[p]
          } else if (typeof filter === 'function') {
            if (filter(obj[p], p, obj)) r[p] = obj[p]
          } else if (filter.length && filter.includes(p)) r[p] = obj[p]
        }
        return r
      }