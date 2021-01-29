
export const NAVIGATION_PRIMARY_QUERY = `
    {
        nodes (navHandle: "primaryNavigation") {
            id,
            title,
            url,
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