<template>
    <div class="Basics">
        <div class="Basics_header">
            基本资料
        </div>
        <div class="Basics_count">
            <div class="sctx">
            <img src="" alt="">
            </div>
            <div class="jbxx">
                <div>
                </div>
                <p>用户名：{{list.name}}</p>
                <p>地址：{{list.address}}
                    
                </p>
                <p>手机：{{list.tel}}
                </p>
                <button class="tjiao" type="button">确定</button>
            </div>
        
            
        </div>
    </div>
</template>

<style scoped>
@import '../../style/Basics.css'; 
</style>
<script>
import axios from 'axios'
export default {
    data(){
        return {
            list:[],
        }
    },
    created(){
        const data = {
            _id:localStorage.getItem('token')
        };
        axios.get('http://192.168.11.132:1314/api/customer',{params:data})
        .then(res=>{
            console.log(res.data)
            this.list=res.data;
        })
    }
}
</script>