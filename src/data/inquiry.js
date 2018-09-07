export default {
  title: '房管家后台管理系统',
  titleDesc: '项目介绍',
  subTitle: '房管家后台管理系统',
  subTitleDesc: '是房管家提供给合作公司、中介、个人使用的客户管理和楼盘报备等功能的管理系统',
  text: '身为公司唯一的前端，我很荣幸，负责前端还要兼设计，开发这个项目是既痛苦，又快乐。底层框架使用vue，使用了大量es6语法和api，为了兼容低版本设备添加了polyfill，选了element-ui，配置了按需引入。客户列表，楼盘列表，抢客列表等都使用了移动端的滑动插件better-scroll。图表使用了echarts，数据请求用了axios，添加了拦截器。因为是移动端，所以弹性布局用的比较多，CSS预处理器用的是SCSS，统一管理颜色和工具方法。里面也用到了百度地图和微信API。',
  sideTable: [
    {
      title: '报备',
      desc: '渠道公司获得客户后，将客户电话（必须），姓名等信息，录入到系统并报备相应的到访楼盘。'
    }, {
      title: '到访',
      desc: '到访类型分为：带访、约访、疑似到访（疑访），客户到访楼盘案场辩客根据客户提供的资料和是否渠道亲自带访来对你报备的客户发送相对应的到访类型。'
    }, {
      title: '成交认定',
      desc: '客户认购后，判单人员在系统中查询是否有多家撞单，如果没有，根据当天约访或带访的公司数据，发送成交喜报。出现撞单的单子，系统将在三天后或客户办完手续后发送成交喜报。'
    }
  ],
  children: [
    [
      {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/inquiry-v-1.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/inquiry-i-1.png'),
        title: '报备客户',
        desc: '这个是本页面的核心功能。首先用户要有对应的有权限，才能点击报备按钮，这个按钮是可以拖拽的。然后选择要报备的楼盘，这里的客户不能重复报备，所以会进行第一步验证，根据后台返回的数据，来判断哪条可以报备，用不同的颜色区分开来。支持多选，每次选中都会对这条数据进行二次验证是否可以报备，确定报备之后，结果会同步显示在弹框中。操作按钮都做了开关限制，防止连续点击发出多余请求。',
      }, {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/inquiry-v-2.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/inquiry-i-1.png'),
        title: '客户多条件筛选',
        desc: '筛选功能，可以选择公司、部门、团队、人员，数据结构按照组织架构。这里有一个小优化，当这个页面加载进来的时候，其实我只发送了获取客户列表这一条请求，当需要用到部门筛选项的时候，再去请求部门数据。还有更多筛选，也是一个道理。只因为我录了好几遍才满意，请求到的筛选数据已经缓存了，所以你可能看不出来。',
      }, {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/inquiry-v-3.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/inquiry-i-1.png'),
        title: '客户列表下拉加载',
        desc: '每次请求20条，每次滑动到底，page加1，再加载20条，并且阻止了重复加载。每次搜索都有一个等待图标动画，如果没有找到匹配的结果，会有信息提示。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/inquiry-i-2.png'),
        title: '更多筛选',
        desc: '我设计的时候参考了手机天猫的筛选，每个筛选项都按照类型分开管理，可以展开收起，上下滑动。还有一些页面也会用到它，所以我已经把它封装成了一个公共组件，根据不同的参数，渲染对应的筛选项，它只负责接收筛选数据，并展示出来，并且返回用户选中的结果，给父组件。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/inquiry-i-3.png'),
        title: '客户跟进',
        desc: '随时更新客户的动态，记录客户的需求。一共有三种形式：上传文字跟进，上图片跟进，发送语音跟进。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/inquiry-i-4.png'),
        title: '报备大厅',
        desc: '记录所有人的报备情况，可以根据条件筛选对应的信息，详细查看是谁报备的哪个客户，报备的具体情况。',
      }
    ],
    [
      {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/inquiry-v-4.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/inquiry-i-1.png'),
        title: '抢客',
        desc: '有些客户因为各种原因，而不属于个人，就放到一个公共的地方，允许大家来抢。根据权限得知这个用户每天可以抢多少条，已经抢了多少条，还能不能再抢。',
      }, {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/estate-v-1.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/estate-i-1.png'),
        title: '楼盘列表',
        desc: '楼盘列表下拉加载更多，阻止了重复加载，并且有回到顶部按钮，图片使用了懒加载。点击筛选，顶部滑出筛选项，类别之间可以互相切换，选项多了可以上下滑动，点击筛选之后，立马获取数据。',
      }, {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/estate-v-2.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/estate-i-1.png'),
        title: '楼盘详细',
        desc: '展示楼盘的全部信息，还可以做一些操作，顶部轮播图，户型图，楼盘信息，特色标签，标签的颜色是根据个数自动分配的。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/estate-i-2.png'),
        title: '楼盘地图位置',
        desc: '楼盘都有精确的经纬度，我使用了百度地图进行定位，在移动的显示效果还不错。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/estate-i-3.png'),
        title: '全屏查看地图位置',
        desc: '打开了一个vue子路由，用来全屏展示地图位置，可以更好的查看楼盘周边的配套设施。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/reception-i-1.png'),
        title: '接待列表',
        desc: '根据当前的步骤，用进度条的形式来展示，不能跳级，必须一步一步来，带访和接待都有可能是多次，有很多隐藏小功能，左右两侧可以滑动，查看更多操作。',
      }
    ],
    [
      {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/mail-v-1.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/mail-i-1.png'),
        title: '查看并回复消息',
        desc: '各种消息的汇总，有已读和未读的状态变更，消息详细页是列表页的子路由，在里面可以回复文字和图片',
      }, {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/echarts-v-1.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/echarts-i-1.png'),
        title: '图表统计',
        desc: '使用了echarts，一共有10种要统计的类型，每一个模块对应一个路由，使用了懒加载，只有点击对应的统计才会加载。比较有意思的是头部的导航，我根据当前选中项的位置，把它移动到中间。',
      }, {
        type: 'video',
        isPlay: false,
        url: require('../assets/image/gallery/fgj-sys/contract-v-1.mp4'),
        poster: require('../assets/image/gallery/fgj-sys/contract-i-1.png'),
        title: '合同列表',
        desc: '有没有发现好多地方很类似？对的，客户列表、楼盘列表、合同列表都有相似甚至一样的地方，很好，这些我都已经封装成公共的组件了。后期添加新模块新功能的时候，我就可以复用之前的组件，大大的提升开发效率。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/contract-i-2.png'),
        title: '合同详细',
        desc: '合同详细是合同列表的子路由，里面的操作一大堆，看着就很low，我设计的时候，以实用为主啦。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/contract-i-3.png'),
        title: '业绩分成',
        desc: '这条合同现在还没有业绩，可以添加业绩分成，添加成功之后，可以打开这个弹层，里面同步显示能拿分成的人，发送喜报会推送到消息列表和微信公众。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/fgj-sys/control-i-1.png'),
        title: '销控管理',
        desc: '弹出选择楼盘，这也是我封装的公共组件，里面隐藏了不少操作。右下角选择楼栋，平时是摞起来的，点击后再蹦出来，这里比较麻烦的是数据联动，楼盘和楼栋还有状态相互关联，动一个而改全部。',
      }
    ]
  ]
}