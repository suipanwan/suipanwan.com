<template>
    <v-container fluid class="pa-0 text-center">
        <v-card
            class="teal lighten-3"
            dark
            :elevation="0"
            :height="550"
        >
            <v-row class="pt-10">
                <v-col cols="12">
                    <v-img
                        :src="require('@/assets/img/avatar.png')"
                        contain
                        height="200"
                    />
                </v-col>
            </v-row>
            <v-row class="pt-10 text-center">
                <v-col cols="12">
                    <span class="display-2 font-weight-bold ">WAN SUI PAN</span>
                </v-col>
            </v-row>
            <hr class="mt-2" style="height:3px;width:200px;border:none;color:#FFF;background-color:#FFF;margin:auto;" />
            <v-row class="pt-10 text-center">
                <v-col cols="12">
                    <span class="title">Programmer - 2017 HK PolyU Graduate</span>
                </v-col>
            </v-row>
        </v-card>

        <!-- About Section-->
        <v-card
            id="about"
            :elevation="0"
        >
            <v-row class="pt-15 text-center">
                <v-col cols="12">
                    <span class="display-2 font-weight-bold ">ABOUT ME</span>
                </v-col>
            </v-row>
            <hr class="mt-2" style="height:3px;width:200px;border:none;color:#000;background-color:#000;margin:auto;" />
            <v-row class="pt-10 text-center">
                <v-col cols="12">
                    <!-- <span class="title">COMING SOON</span> -->
                    <!-- Timeline -->
                    <AboutMeTimeline />
                </v-col>
            </v-row>
        </v-card>

        <!-- Portfolio Section-->
        <v-card
            id="portfolio"
            class="teal lighten-3"
            dark
            :elevation="0"
            :height="400"
        >
                <v-row class="pt-15 text-center">
                    <v-col cols="12">
                        <span class="display-2 font-weight-bold ">PORTFOLIO</span>
                    </v-col>
                </v-row>
                <hr class="mt-2" style="height:3px;width:200px;border:none;color:#FFF;background-color:#FFF;margin:auto;" />
                <v-row class="pt-10 text-center">
                    <v-col cols="12">
                        <span class="title">COMING SOON</span>
                    </v-col>
                </v-row>
        </v-card>

    <!-- Scroll to Top Button (Only visible on small and extra-small screen sizes)-->
    <div class="scroll-to-top d-lg-none position-fixed">
        <a class="js-scroll-trigger d-block text-center text-white rounded" href="#page-top"><i class="fa fa-chevron-up"></i></a>
    </div>
  </v-container>
</template>

<script>
import AboutMeTimeline from '@/components/AboutMeTimeline.vue';
export default {
    name: 'Home',
    props: {
    },
    components: {
        AboutMeTimeline,
    },
}
</script>
