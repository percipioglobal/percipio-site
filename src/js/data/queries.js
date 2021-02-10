
// export const NAVIGATION_PRIMARY_QUERY = `
//     {
//         nodes (navHandle: "primaryNavigation") {
//             id,
//             title,
//             url,
//         }
//     }
// `

export const NAVIGATION_PRIMARY_QUERY = `
    query {
        entries(section: "navigation"){
            ...on navigation_navigation_Entry{
                navigationButton{
                    text,
                    target,
                    url
                }
            }
        }
    }
`

export const SOCIAL_MEDIA_QUERY = `
    query {
        globalSet(handle: "socialMedia") {
            ...on socialMedia_GlobalSet {
                socialMedia {
                    ...on socialMedia_BlockType {
                        id,
                        socialMediaType,
                        socialMediaUrl {
                            url,
                        }
                    }
                }
            }
        }
    }
`
