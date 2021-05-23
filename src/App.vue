<template>
    <v-app>
        <v-app-bar
            app
            color="blue-grey darken-3"
            dark
        >
            <v-toolbar-title>SUIPANWAN</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn text href="#about">
                <span class="mr-2">About</span>
            </v-btn>
            <v-btn text href="#portfolio">
                <span class="mr-2">Portfolio</span>
            </v-btn>
        </v-app-bar>

        <v-main>
            <router-view/>
        </v-main>

        <v-footer dark padless>
            <!-- Footer-->
            <v-card
                id="footer"
                class="flex"
                flat
                tile
            >
                <v-card-title class="blue-grey darken-3">
                    <strong class="subheading">Get connected with me!</strong>

                    <v-spacer></v-spacer>

                    <v-btn
                    v-for="icon in icons"
                    :key="icon"
                    class="mx-4"
                    dark
                    icon
                    >
                    <v-icon size="24px">
                        {{ icon }}
                    </v-icon>
                    </v-btn>
                </v-card-title>
                <v-card-text class="py-2 white--text text-center">
                    {{ new Date().getFullYear() }} — <strong>SUIPANWAN.COM</strong>
                </v-card-text>
            </v-card>
        </v-footer>
    </v-app>
</template>

<script>

export default {
    name: 'App',

    data: () => ({
        icons: [
            // 'mdi-facebook',
            // 'mdi-twitter',
            'mdi-linkedin',
            // 'mdi-instagram',
        ],
    }),
};
</script>
