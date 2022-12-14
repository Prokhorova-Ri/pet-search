<!--
EXAMPLE IN COMPONENT
import CirclePreloader from "../../components/Universal/Loading/CirclePreloader.vue";
components: { CirclePreloader },
<CirclePreloader size="16px" border-width="2px" border-color="#1B1918" border-active-color="white" />
-->

<script>
import { h } from 'vue'
export default {
  name: 'CirclePreloader',
  props: {
    size: {
      type: String,
      default: '3rem'
    },
    borderWidth: {
      type: String,
      default: '4px'
    },
    borderColor: {
      type: String,
      default: 'rgba(128,128,128,0.5)'
    },
    borderActiveColor: {
      type: String,
      default: 'rgba(128,128,128,1)'
    },
    margin: {
      type: String,
      default: ''
    }
  },
  setup (props) {
    return () => h(
      'div',
      {
        class: {
          loading: true
        },
        style: {
          width: props.size,
          height: props.size,
          border: `${props.borderWidth} solid ${props.borderColor}`,
          'border-top-color': props.borderActiveColor
        }
      }
    )
  }
}
</script>

<style>
.loading {
  display: inline-block;
  /*width: 5rem;*/
  /*height: 5rem;*/
  /*border: 4px solid rgba(9, 133, 81, 0.705);*/
  border-radius: 50%;
  /*border-top-color: #ffa822;*/
  animation: spin 1s ease-in-out infinite;
}
@keyframes spin {
  to {
    -webkit-transform: rotate(360deg);
  }
}
</style>
