<template>
    <v-container fluid class="pa-0 text-center">
        <v-timeline
            align-top
            :dense="$vuetify.breakpoint.smAndDown"
        >
            <v-timeline-item
                v-for="(item, i) in items"
                :key="i"
                :color="item.color"
                :icon="item.icon"
                fill-dot
                >
                <span v-if="item.opposite_text" slot="opposite">{{item.opposite_text}}</span>
                <v-card
                    :color="item.color"
                    dark
                >
                    <v-card-title class="title">
                    {{item.title}}
                    </v-card-title>
                    <v-card-text v-if="item.content" class="white text--primary">
                    <p>Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae.</p>
                    </v-card-text>
                </v-card>
            </v-timeline-item>
        </v-timeline>
    </v-container>
</template>

<script>
export default {
    data: () => ({
      items: [
        {
          color: 'indigo lighten-2',
          icon: 'mdi-book-open-variant',
          opposite_text: '2013',
          title: 'Graduated from Secondary School',
          content: ''
        },
        {
          color: 'purple lighten-2',
          icon: 'mdi-book-open-variant',
          opposite_text: '2017',
          title: 'Graduated from University',
          content: ''
        },
        {
          color: 'green lighten-1',
          icon: 'mdi-tie',
          opposite_text: '2017',
          title: 'Work at mSolution',
          content: ''
        },
        {
          color: 'indigo',
          icon: 'mdi-tie',
          opposite_text: '2019',
          title: 'Work at HKET',
          content: ''
        },
      ],
    }),
}
</script>