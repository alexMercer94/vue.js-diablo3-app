<template>
    <div>
        <BaseLoadng v-if="isLoading" />
        <template v-if="profileData">
            <MainBlock :profile-data="profileData" />
        </template>
    </div>
</template>

<script>
import { getApiAccount } from '@/api/search';
import setError from '@/mixins/setError';
import BaseLoadng from '@/components/BaseLoading';
import MainBlock from './MainBlock/Index';

export default {
    name: 'ProfileView',
    mixins: [setError],
    components: {
        BaseLoadng,
        MainBlock
    },
    data() {
        return {
            profileData: null,
            isLoading: false
        };
    },
    created() {
        this.isLoading = true;
        const { region, battleTag: account } = this.$route.params;
        this.fetchDataAccount(region, account);
    },
    methods: {
        /**
         * Get account's data from API
         */
        fetchDataAccount(region, account) {
            getApiAccount({ region, account })
                .then(({ data }) => {
                    this.profileData = data;
                })
                .catch(err => {
                    this.profileData = null;
                    const errObj = {
                        routeParams: this.$route.params,
                        message: err.message
                    };

                    if (err.response) {
                        errObj.data = err.response.data;
                        errObj.status = err.response.status;
                    }

                    this.setApiErr(errObj);
                    this.$router.push({ name: 'Error' });
                })
                .finally(() => {
                    this.isLoading = false;
                });
        }
    }
};
</script>
