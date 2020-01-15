<template>
    <div class="Collect">
        <div class="Collect_header">
            我的收藏
        </div>
        <div class="Collect_sp">
            <div class="Collect_spxx">
                <dl v-for="(p,i) in list" :key="i">
                    <dt><img :src="p.productId.imgUrl" alt=""></dt>
                    <dd class="rate">{{p.productId.OriginPrice}}</dd>
                    <dd class="intr">{{p.productId.title}}</dd>
                </dl>
            </div>
         
        </div>
    </div>
</template>


<style scoped>
@import '../../style/Collect.css'; 
</style>

<script>
import axios from 'axios'
export default {
    data(){
        return {
            list:[]
        }
    },
    created(){
        const data={
            userId:localStorage.getItem('token')
        }
        axios.get('http://192.168.11.132:1314/api/fav/pro',{params:data})
        .then(res=>{
            console.log(res.data)
            this.list=res.data
        })
    }
}
</script>