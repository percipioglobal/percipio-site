export const NAVIGATION_PRIMARY_QUERY = `
    query {
        entries(section: "navigation"){
            ...on navigation_navigation_Entry{
                target {
                    id,
                    title,
                    url,
                    ...on pages_blogPage_Entry {
                        colourSwatch,
                    },
                    ...on pages_teamPage_Entry {
                        colourSwatch
                    },
                    ...on pages_contentPage_Entry {
                        colourSwatch
                    }
                    ...on pages_contactPage_Entry {
                        colourSwatch
                    }
                    ...on pages_landingsPage_Entry {
                        colourSwatch
                    }
                    ...on pages_projectsPage_Entry {
                        colourSwatch
                    }
                    ...on pages_servicesPage_Entry {
                        colourSwatch
                    }
                    ...on pages_vacanciesPage_Entry {
                        colourSwatch
                    }
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
