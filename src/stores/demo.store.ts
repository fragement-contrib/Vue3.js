import { defineStore } from 'pinia'

export const useMenuStore = defineStore("DEMO", {
    state() {
        return {
            val: <Array<any>>[]
        }
    },
    getters: {
        fetchList(): Array<any> {
            return this.val
        }
    },
    actions: {
        updateList(val: Array<any>) {
            this.val = val
        }
    }
})