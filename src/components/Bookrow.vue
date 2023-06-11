<template>
<div class="container">
    <div class="rowcontainer">
    <div class="rowimage">
        <img class="img" :src="require('../assets/Images/SMPTE_Color_Bars.svg.png')" alt="bc">
    </div>
    <div class="rowcontent">
        <h3>this is title</h3>
        <p>this is article content at least 150 character</p>
        <br>
        <b>article tags</b>
        <div class="tagscontainer">
            <div class="tag">
                <b>programing</b>
            </div>            
        </div>
        <div class="statisticcontainer">
        </div>
    </div>
    <div class="rowstatistics">
            <b>statistics</b>
            <div class="substatistics">
                <FontAwesomeIcon class="icon" icon="heart" />
                <br>
                65165
            </div>
            <div class="substatistics">
                <FontAwesomeIcon class="icon" icon="eye" />
                <br>
                65165
            </div>
        </div>
    <div class="rowaction">
        
        <FontAwesomeIcon class="icon" icon="bookmark" />
        <br>
        <FontAwesomeIcon class="icon" icon="heart" />
        <br>
        <FontAwesomeIcon class="icon" icon="share" />
        <br>
        <FontAwesomeIcon class="icon" icon="circle-chevron-down" />



    </div>
    </div>  
</div>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBookmark, faCircleChevronDown, faEye, faHeart, faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faBookmark)
library.add(faHeart)
library.add(faShare)
library.add(faCircleChevronDown)
library.add(faEye)




export default {
    components: {
        FontAwesomeIcon
    },
    props:['item']
}
</script>

<style scoped>
.rowcontainer{
    background: #ffffff;
    width: 100%;
    height: 250px;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    display: flex;
    flex-wrap:wrap;
    box-shadow: 0px 0px 20px 2px #dddddd;
    margin: 15px;
}
.rowimage{
    background: #dadada;
    width: 15%;
    height: 70%;
    margin: 10px ;
    border-radius: 20px;
    align-items: center;
    text-align: center;
}   
.rowcontent{
    width: 50%;
    margin: 10px ;
    border-radius: 20px;
    padding: 15px;
    text-align: center;

}
.rowaction{
    width: 12%;
    margin: 10px ;
    border-radius: 20px;
    text-align: center;
    align-items: center;
    padding-top: 10px ;
}
.img{
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 20px;
}
.tagscontainer{
    display: flex;
    flex-wrap:wrap;
    text-align: center;
    align-items: center;
}
.tag{
    border-style: solid;
    color: white;
    border-width: 1px;
    font-size: 0.8rem;
    background: #0a2153;
    border-radius: 10px;
    padding: 5px 10px 5px 10px;
    margin: 2px;
    text-align: center;
}
.icon{
    width: 20px;
    height: 20px;
    margin: 5px;
}
.rowstatistics{
    background: white ;
    width: 15%;
    margin: 10px ;
    border-radius: 20px;
    text-align: center;
    align-items: center;
}
.substatistics{
margin-top: 20px;
border-style: solid;
border-color: #797777;
border-width: 1px;
border-radius: 10px;
}
</style>