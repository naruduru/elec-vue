export default {
    name: 'MessageListItem',
    template: '<li>{{ item.text}} - {{item.createdAt}} <button @click="deleteClicked">X</button></li>',
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