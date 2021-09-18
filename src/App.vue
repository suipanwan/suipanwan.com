<template>
    <v-app>
        <v-app-bar
            app
            color="blue-grey darken-3"
            dark
        >
            <v-toolbar-title>SUIPANWAN</v-toolbar-title>

            <v-spacer></v-spacer>
            <v-btn text @click="$vuetify.goTo('#about')">
                <span class="mr-2">About</span>
            </v-btn>
            <v-btn text @click="$vuetify.goTo('#portfolio')">
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
                        v-for="contact in contacts"
                        :key="contact.key"
                        class="mx-4"
                        dark
                        icon
                        :href="contact.url" target="_blank"
                    >
                    <v-icon size="24px">
                        {{ contact.icon }}
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
        contacts: {
            linkedin: { icon:'mdi-linkedin' , url: 'http://www.linkedin.com/in/suipanwan'},
            email: { icon:'mdi-email' , url: 'mailto:suipanwan@gmail.com'},
        }
    }),
};
</script>
