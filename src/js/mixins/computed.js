export const swatch = {
    computed: {
        
        swatch() {

            const colours = {
                redblue: {
                    primary: 'blue-600',
                    secondary: 'pink-600',
                },
                pink: {
                    primary: 'pink-600',
                    secondary: 'pink-800',
                }
                ,
                red: {
                    primary: 'red-600',
                    secondary: 'red-800',
                },
                orange: {
                    primary: 'orange-500',
                    secondary: 'orange-700',
                },
                yellow: {
                    primary: 'yellow-400',
                    secondary: 'yellow-500',
                },
                green: {
                    primary: 'green-400',
                    secondary: 'green-600',
                },
                teal: {
                    primary: 'teal-400',
                    secondary: 'teal-600',
                },
                blue: {
                    primary: 'blue-600',
                    secondary: 'blue-800',
                },
                darkblue: {
                    primary: 'orange-800',
                    secondary: 'orange-600',
                },
                purple: {
                    primary: 'purple-600',
                    secondary: 'purple-800',
                }
            }
            
            return colours[this.item.target[0].colourSwatch].primary;

        }
    }
}