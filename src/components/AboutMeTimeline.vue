<template>
    <v-container class="pa-0 text-center">
        <v-timeline
            :dense="$vuetify.breakpoint.smAndDown"
        >
            <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                fill-dot
                large
                right
                >
                <template v-slot:icon>
                    <v-avatar :color="item.color">
                        <a class="pt-1" :href="item.url" target="_blank">
                            <v-img
                                v-if="item.icon_img"
                                :src="item.icon_img"
                                :width="35"
                                contain
                            />
                        </a>
                    </v-avatar>
                </template>
                <span 
                    v-if="item.opposite_text" 
                    slot="opposite"
                    :class="`headline font-weight-bold ${item.opposite_text_color}`"
                    v-text="item.opposite_text">
                </span>
                <v-expansion-panels>
                    <v-expansion-panel>
                    <v-expansion-panel-header class="title">
                    {{item.title}}
                    </v-expansion-panel-header>
                    <v-expansion-panel-content v-if="item.content" class="white text--primary">
                    <p v-html="item.content"></p>
                    </v-expansion-panel-content>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>
export default {
    data: () => ({
      items: [
        {
            color: '#0073e0',
            icon_img: require('@/assets/img/cneccclogo.jpeg'),
            url: 'https://www.cneccc.edu.hk/',
            opposite_text: '2013',
            opposite_text_color: 'blue--text text--lighten-1',
            title: 'Graduated from Secondary School',
            content: 'CNEC Christian College'
        },
        {
            color: '#FFF',
            icon_img: require('@/assets/img/PolyU.png'),
            url: 'https://www.polyu.edu.hk/en/',
            opposite_text: '2017',
            opposite_text_color: 'red--text text--lighten-2',
            title: 'Graduated from University',
            content: 'The Hong Kong Polytechnic University<br>BSc (Hons) in Information Technology'
        },
        {
            color: '#FFF',
            icon_img: require('@/assets/img/mSol.png'),
            url: 'www.msolution.com.hk',
            opposite_text: '2017',
            opposite_text_color: 'blue--text text--darken-2',
            title: 'Worked at mSolution',
            content: ''
        },
        {
            color: '#FFF',
            icon_img: require('@/assets/img/ul.png'),
            url: 'https://www.ulifestyle.com.hk/',
            opposite_text: '2019',
            opposite_text_color: 'lime--text text--darken-2',
            title: 'Worked at U Lifestyle@HKET',
            content: ''
        },
      ],
    }),
}
</script>

<style>
</style>