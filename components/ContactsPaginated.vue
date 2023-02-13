<template>
    <div class="container">
        <ul class="pagination">
            <li class="pagination-item">
                <button class="button button-prev" @click="onClickPreviousPage" :disabled="isFirstPage"></button>
            </li>

            <li class="pagination-item" v-for="(page, index) in pages" :key="index">
                <button
                    class="button button-item-page"
                    @click="onClickPage(page.number)"
                    :disabled="page.isDisabled"
                    :class="{ active: isPageActive(page.number) }"
                >
                    {{ page.number }}
                </button>
            </li>
            <li class="pagination-item">
                <button class="button button-next" @click="onClickNextPage" :disabled="isLastPage"></button>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'ContactsPaginated',

    data() {
        return {
            currentPage: 1,
            itemsPerPage: 10,
        };
    },

    computed: {
        contacts() {
            return this.$store.getters['contacts'];
        },

        totalPages() {
            return Math.ceil(this.contacts.length / this.itemsPerPage);
        },

        totalItems() {
            return this.contacts.length;
        },

        pages() {
            let range = [];
            for (let i = 1; i <= this.totalPages; i++) {
                range.push({
                    number: i,
                    isDisabled: i === this.currentPage,
                });
            }
            return range;
        },
        isFirstPage() {
            return this.currentPage === 1;
        },
        isLastPage() {
            return this.currentPage === this.totalPages;
        },
    },
    methods: {
        onClickPreviousPage() {
            this.currentPage = this.currentPage - 1;
            this.$emit('changePage', this.currentPage);
        },
        onClickPage(page) {
            this.currentPage = page;
            this.$emit('changePage', page);
        },
        onClickNextPage() {
            this.currentPage = this.currentPage + 1;
            this.$emit('changePage', this.currentPage);
        },

        isPageActive(page) {
            return this.currentPage === page;
        },
    },
};
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    justify-content: center;
    padding: 0;
    list-style-type: none;
    margin-bottom: 50px;
}

.button-item-page {
    background: none;
}

.button {
    min-width: 30px;

    &[disabled] {
        color: grey;
        cursor: default;
    }

    &.active {
        background: orange;
    }
}

.button-next::before {
    content: '🡆';
}

.button-prev::before {
    content: '🡄 ';
}
</style>
