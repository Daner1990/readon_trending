<template>
  <div class="aside">
    <div class="aside-title">
      <h5 class="aside-title-txt">Curated Feeds</h5>
    </div>
    <div class="menu" :class="currentTrend=='News'?'actived':''" @click="trend('News')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.1773 14c-.5523 0-1-.4477-1-1V2h12v3.6h2V13c0 .5523-.4477 1-1 1h-12zm9.5-10.5h-9V12a.5.5 0 00.5.5h8.5v-9zm-3.5 5.5v1h-4V9h4zm2-2v1h-6V7h6zm0-2v1h-6V5h6z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">News</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Sports'?'actived':''" @click="trend('Sports')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg
            width="16px"
            height="12px"
            viewBox="0 0 12 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g
                transform="translate(-19.000000, -451.000000)"
                fill="currentColor"
              >
                <g transform="translate(-1.000000, 113.000000)">
                  <g transform="translate(18.000000, 248.000000)">
                    <g transform="translate(0.000000, 88.000000)">
                      <path
                        d="M4,3 L4,2 L12,2 L12,3 L14,3 L14,6 C14,8.76142375 11.7614237,11 9,11 L9,12 L10,12 C10.5522847,12 11,12.4477153 11,13 L11,14 L5,14 L5,13 C5,12.4477153 5.44771525,12 6,12 L7,12 L7,11 C4.23857625,11 2,8.76142375 2,6 L2,3 L4,3 Z M11.2841354,9.28413542 C12.3213022,8.56142789 13,7.35997313 13,6 L13,4 L12,4 L12,7 C12,7.84916587 11.7353933,8.63652953 11.2841354,9.28413542 Z M4,4 L3,4 L3,6 C3,7.35997313 3.67869781,8.56142789 4.71586458,9.28413542 C4.26460671,8.63652953 4,7.84916587 4,7 L4,4 Z"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <div class="menu-txt">Sports</div>
      </div>
    </div>

    <div class="menu"  :class="currentTrend=='Entertainment'?'actived':''" @click="trend('Entertainment')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.4273 10.1368c0 .062-.051.113-.113.113h-8.274a.1135.1135 0 01-.113-.113v-5.274c0-.062.051-.113.113-.113h8.274c.062 0 .113.051.113.113v5.274zm-.113-7.137h-8.274c-1.029 0-1.863.834-1.863 1.863v5.274c0 1.029.834 1.863 1.863 1.863h2.137v1h4v-1h2.137c1.029 0 1.863-.834 1.863-1.863v-5.274c0-1.029-.834-1.863-1.863-1.863z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Entertainment</div>
      </div>
    </div>
    <div class="menu"  :class="currentTrend=='Tech'?'actived':''" @click="trend('Tech')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="10" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.967 4.174C11.797 1.844 9.873 0 7.5 0 5.535 0 3.882 1.268 3.268 3.024 1.445 3.145 0 4.647 0 6.5 0 8.433 1.567 10 3.5 10h8l.5-.183c1.162-.414 2-1.512 2-2.817 0-1.316-.853-2.422-2.033-2.826z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Tech</div>
      </div>
    </div>

    <div class="menu" :class="currentTrend=='Business'?'actived':''" @click="trend('Business')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.1773 2c3.3137 0 6 2.6863 6 6s-2.6863 6-6 6-6-2.6863-6-6 2.6863-6 6-6zm.1052 2.001l-.307-.0003c-.2265.0066-.2647.048-.2711.2842-.0032.1058 0 .2115-.0016.319-.0016.3138-.0032.3089-.2934.418-.7015.2643-1.1352.76-1.1814 1.553-.0415.7023.3125 1.1765.869 1.5218.3427.2131.7222.3387 1.0857.5056.1419.0644.2774.1388.3954.2412.3492.299.2854.7964-.1291.9848-.2217.1008-.456.1255-.6968.0942-.3715-.048-.727-.1488-1.0619-.3288-.196-.1058-.2535-.0777-.3204.142-.0574.19-.1084.3817-.1595.5734-.0685.2577-.043.3189.1946.4395.3029.152.6265.2296.9566.2842.2583.043.2662.0545.2694.332.0016.1257.0016.2529.0032.3784.0016.1587.075.2512.2328.2545.1786.0033.3587.0033.5373-.0017.1467-.0033.2216-.0859.2216-.2395 0-.1719.008-.3454.0016-.5172-.008-.1751.0654-.2644.228-.3106.3747-.1058.6936-.314.9391-.6246.6824-.8592.4225-2.1165-.5437-2.67-.3029-.1735-.625-.3057-.9438-.4428-.185-.0794-.362-.1719-.5182-.3008-.3077-.2544-.2487-.6675.1116-.831.102-.0463.2089-.0612.3173-.0678.4177-.0231.8147.0562 1.1926.2445.1881.0942.2503.0645.314-.1387.067-.2148.1228-.433.185-.6494.0415-.1454-.0096-.2412-.1419-.3023-.2423-.1107-.491-.19-.7525-.233-.3412-.0545-.3412-.0562-.3428-.4114-.0015-.465-.0016-.4981-.3897-.5005z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Business</div>
      </div>
    </div>
    <div class="menu"  :class="currentTrend=='Video'?'actived':''" @click="trend('Video')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.1773 2c-3.3084 0-6 2.6916-6 6s2.6916 6 6 6 6-2.6916 6-6-2.6916-6-6-6zm2.4272 6.129l-3.6667 2.3438a.1749.1749 0 01-.1717.009c-.0546-.027-.0888-.08-.0888-.138V5.6561c0-.058.0342-.111.0888-.138a.1763.1763 0 01.1719.009l3.6666 2.3437A.154.154 0 0110.6773 8c0 .0517-.0273.1-.0728.129z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Video</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Fashion'?'actived':''"  @click="trend('Fashion')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.3995 3l.8888 2h1.889c.5523 0 1 .4477 1 1v6c0 .5523-.4477 1-1 1h-10c-.5523 0-1-.4477-1-1V6c0-.5523.4477-1 1-1h1.889l.8888-2h4.4444zM8.1773 7c-1.1046 0-2 .8954-2 2s.8954 2 2 2 2-.8954 2-2-.8954-2-2-2z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Fashion</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Science'?'actived':''" @click="trend('Science')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.1773 2l-.001 3.999 3.2774 6.5538c.247.494.0468 1.0946-.4472 1.3416a1 1 0 01-.4472.1056h-8.764c-.5522 0-1-.4477-1-1a1 1 0 01.1056-.4472L6.1763 6l.001-4h4z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Science</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Politics'?'actived':''" @click="trend('Politics')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7.1773 10h2V9h5v3c0 .5523-.4477 1-1 1h-10c-.5523 0-1-.4477-1-1V9h5v1zm4-7v2h2c.5523 0 1 .4477 1 1v2h-12V6c0-.5523.4477-1 1-1h2V3h6zm-1 1h-4v1h4V4z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Politics</div>
      </div>
    </div>
    <div class="menu"  :class="currentTrend=='Health'?'actived':''" @click="trend('Health')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.9793 3c-1.172 0-2.271.989-2.8 1.547C7.6503 3.989 6.5513 3 5.3793 3c-2.003 0-3.202 1.253-3.202 3.351 0 1.719 1.474 3.159 1.528 3.209 0 0 4.367 4.44 4.474 4.44.108 0 4.468-4.426 4.468-4.426.061-.064 1.534-1.504 1.534-3.223 0-2.098-1.199-3.351-3.202-3.351"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Health</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Marketing'?'actived':''" @click="trend('Marketing')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M13.1773 3l.0007 3.0856c.5822.2061.9993.7616.9993 1.4144s-.417 1.2083-.9993 1.4144L13.1773 12l-4.888-2h-2.112l2 4h-3l-2-4h-1V6c0-.5523.4477-1 1-1h5.11l4.89-2z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Marketing</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Finance'?'actived':''" @click="trend('Finance')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.9263 3.5l2.001 2-2.5 2.5-2-2-5 5 1.75 1.75 3.25-3.25 2 2 4.249-4.251 2 2.001V3.5z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Finance</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Bitcoin'?'actived':''" @click="trend('Bitcoin')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M4.1773 3h2V2h1v1h1V2h1v1h.4444c1.5181 0 2.4767.8658 2.551 2.3157l.0046.1843c0 1.5606-.9742 2.5-2.5556 2.5l.1869.0045c1.4709.0716 2.3687.9973 2.3687 2.4955 0 1.5606-.9742 2.5-2.5556 2.5h-.4444v1h-1v-1h-1v1h-1v-1h-2V3zm5.4444 7H6.1773v1h3.4444c.417 0 .5261-.0434.5498-.323l.0058-.177c0-.4394-.0628-.5-.5556-.5zm0-5H6.1773v1h3.4444c.417 0 .5261-.0434.5498-.323l.0058-.177c0-.4394-.0628-.5-.5556-.5z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Bitcoin</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Cryptocurrency'?'actived':''" @click="trend('Cryptocurrency')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M8.1773 2c.9665 0 1.75.7835 1.75 1.75 0 .3308-.0918.6402-.2513.9041l3.3025 4.404A1.7526 1.7526 0 0113.4273 9c.9665 0 1.75.7835 1.75 1.75s-.7835 1.75-1.75 1.75-1.75-.7835-1.75-1.75c0-.3308.0918-.6402.2513-.9041L8.6251 5.4422a1.7527 1.7527 0 01-.4478.0578 1.7444 1.7444 0 01-.6832-.1384L4.5389 8.3168c.0891.2099.1384.4408.1384.6832 0 .9665-.7835 1.75-1.75 1.75s-1.75-.7835-1.75-1.75.7835-1.75 1.75-1.75c.242 0 .4726.0491.6822.138l2.9562-2.9548a1.7444 1.7444 0 01-.1384-.6832c0-.9665.7835-1.75 1.75-1.75z"
              fill="#3F3F3F"
              fill-rule="evenodd"
              fill-opacity=".75"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Cryptocurrency</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Education'?'actived':''" @click="trend('Education')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg width="16px" height="16" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12.773 9.404V11l-4 2-4-2V9.405l4 1.715 4-1.716zM8.773 3l7 4-1 .429V11h-1V7.857l-5 2.143-7-3 7-4z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div class="menu-txt">Education</div>
      </div>
    </div>
    <div class="menu" :class="currentTrend=='Coronavirus'?'actived':''" @click="trend('Coronavirus')">
      <div class="menu-inner">
        <div class="menu-icon">
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
          >
            <g
              id="corona-1"
              stroke="none"
              stroke-width="1"
              fill="currentColor"
              fill-rule="evenodd"
            >
              <g id="corona" fill="currentColor">
                <circle id="corona-dot" cx="8" cy="8" r="6"></circle>
              </g>
            </g>
          </svg>
        </div>
        <div class="menu-txt">Coronavirus</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Asider",
  data() {
    return {
      currentTrend: ''
    };
  },
  created() {
    // watch 路由的参数，以便再次获取数据
    this.$watch(
      () => this.$route.params,
      () => {
        this.currentTrend =this.$route.params.trendId;
      },
      // 组件创建完后获取数据，
      // 此时 data 已经被 observed 了
      { immediate: true }
    )
  },
  watch: {
    $route(to, from) {},
  },

  methods: {
      trend(type){
        if(type != this.currentTrend){
          this.$router.push({ path: `/trending/${type}`  })
        }
          

      }
  },
};
</script>

<style scoped>
@import "./index.scss";
</style>
