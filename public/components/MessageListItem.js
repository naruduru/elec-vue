import lifecycleLogger from '../mixins/lifecycle-logger.mixin.js'

export default {
    name: 'MessageListItem',
    mixins: [lifecycleLogger],
    template: '<li>{{ item.text}} - {{item.createdAt | datetime}} <button @click="deleteClicked">X</button></li>',
    props: {
        item: {
            type: Object,
            require: true
        }
    },
    methods: {
        deleteClicked() {
            this.$emit('delete');
        }
    }
};