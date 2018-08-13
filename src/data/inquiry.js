export const inquiryData = [
  {
    type: 'video',
    isPlay: false,
    url: require('../assets/image/gallery/fgj-sys/inquiry/inquiry (1).mp4'),
    poster: require('../assets/image/gallery/fgj-sys/inquiry/poster.png'),
    title: '客户管理列表',
    desc: '每次请求20条，每次滑动到底，page加1，再加载20条，并且阻止了重复加载。每次搜索都有一个等待图标动画，如果没有找到匹配的结果，会有信息提示。',
  }, {
    type: 'video',
    isPlay: false,
    url: require('../assets/image/gallery/fgj-sys/inquiry/inquiry (2).mp4'),
    poster: require('../assets/image/gallery/fgj-sys/inquiry/poster.png'),
    title: '客户列表多种筛选',
    desc: '筛选功能，可以选择公司、部门、团队、人员，数据结构按照组织架构。这里有一个小优化，当这个页面加载进来的时候，其实我只发送了获取客户列表这一条请求，当需要用到部门筛选项的时候，再去请求部门数据。还有更多筛选，也是一个道理。只因为我录了好几遍才满意，请求到的筛选数据已经缓存了，所以你可能看不出来。',
  }, {
    type: 'video',
    isPlay: false,
    url: require('../assets/image/gallery/fgj-sys/inquiry/inquiry (3).mp4'),
    poster: require('../assets/image/gallery/fgj-sys/inquiry/poster.png'),
    title: '报备客户',
    desc: '这个是本页面的核心功能。首先用户要有对应的有权限，才能点击报备按钮，这个按钮是可以拖拽的。然后选择要报备的楼盘，这里的客户不能重复报备，所以会进行第一步验证，根据后台返回的数据，来判断哪条可以报备，用不同的颜色区分开来。支持多选，每次选中都会对这条数据进行二次验证是否可以报备，确定报备之后，结果会同步显示在弹框中。操作按钮都做了开关限制，防止连续点击发出多余请求。',
  }, {
    type: 'img',
    url: require('../assets/image/gallery/fgj-sys/inquiry/inquiry (4).png'),
    title: '更多筛选',
    desc: '我设计的时候参考了手机天猫的筛选，每个筛选项都按照类型分开管理，可以展开收起，上下滑动。还有一些页面也会用到它，所以我已经把它封装成了一个公共组件，根据不同的参数，渲染对应的筛选项，它只负责接收筛选数据，并展示出来，并且返回用户选中的结果，给父组件。',
  }, {
    type: 'img',
    url: require('../assets/image/gallery/fgj-sys/inquiry/inquiry (5).png'),
    title: '客户跟进',
    desc: '随时更新客户的动态，记录客户的需求。一共有三种形式：上传文字跟进，上图片跟进，发送语音跟进。',
  }  
];

export const inquiryData2 = [
  {
    type: 'img',
    url: require('../assets/image/gallery/fgj-sys/inquiry/inquiry (4).png'),
    title: '更多筛选',
    desc: '我设计的时候参考了手机天猫的筛选，每个筛选项都按照类型分开管理，可以展开收起，上下滑动。还有一些页面也会用到它，所以我已经把它封装成了一个公共组件，根据不同的参数，渲染对应的筛选项，它只负责接收筛选数据，并展示出来，并且返回用户选中的结果，给父组件。',
  }, {
    type: 'img',
    url: require('../assets/image/gallery/fgj-sys/inquiry/inquiry (5).png'),
    title: '客户跟进',
    desc: '随时更新客户的动态，记录客户的需求。一共有三种形式：上传文字跟进，上图片跟进，发送语音跟进。',
  }, {
    type: 'img',
    url: require('../assets/image/gallery/fgj-sys/inquiry/inquiry (5).png'),
    title: '客户跟进',
    desc: '随时更新客户的动态，记录客户的需求。一共有三种形式：上传文字跟进，上图片跟进，发送语音跟进。',
  }  
];