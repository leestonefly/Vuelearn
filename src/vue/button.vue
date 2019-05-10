<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}">
        <svg v-if="icon" class="icon"><use :xlink:href="`#i-${icon}`"></use></svg>
        <slot></slot>
    </button>

</template>

<script>
    export default {
        props:['icon','iconPosition']
    }
</script>

<style lang="scss">
    .g-button{
        margin: 20px;
        font-style: var(--font-size);
        height: var(--button-height);
        padding:0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display: inline-flex;justify-content: center;align-content:center ;
        &:hover{
            border-color: var(--border-color-hover);
        }
        &:active{
            background-color:var(--button-active-bg) ;
        }
        &:focus{
            outline: none;
        }
        &.icon-right{
            > .icon{
                order:2;
            }
        }
    }
    .icon{
        width: 1em;height: 1em;

    }
</style>