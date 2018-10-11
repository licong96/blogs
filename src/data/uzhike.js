export default {
  title: '优知客',
  titleDesc: '',
  subTitle: '房管家优知客小程序',
  subTitleDesc: '',
  text: 'web端的系统稳健运行半年之后，公司准备把这个已经成型的产品，做成一个平台，专门给小B端使用。多方讨论之后，最终决定开发成小程序，在原有系统的基础上再次扩展出多个功能模块。我参与了产品和需求的讨论，主导前端开发，配置相关文件，已完成了楼盘、客户、跟进、报备、接待这几大核心模块，页面结构精简清晰、样式用了BEM做模块化管理，充分利用缓存机制，录音绘图等功能到达目的，封装公用模块，灵活的管理数据接口。',
  headerVideo: {
    type: 'img',
    url: require('../assets/image/gallery/uzhike/follow.gif')
  },
  sideTable: [
    {
      title: '客户管理',
      desc: '新增客户、查看客户详细、添加关联人、跟进客户、报备客户、约访客户'
    }, {
      title: '提醒到访',
      desc: '新建到访、疑似到访、约访、发送到访通知、查看到访记录'
    }, {
      title: '消息系统',
      desc: '报备通知、到访通知、约访通知、考勤打开通知'
    }
  ],
  children: [
    [
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/inquiry-list.gif'),
        title: '客户列表',
        desc: '根据个人权限获取对应的客户数据，有搜索和筛选，还有下一页功能。展示客户基本信息和购房需求，下面一排就是功能操作的快捷入口，业务人员可以快速查看明细或最新跟进，了解这个客户的当前状态，考虑下一步自己应该怎么去和这个客户沟通，是直接拨号呢，还是继续跟进呢。',
      }, {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/follow-list.gif'),
        title: '查看全部跟进',
        desc: '跟进客户是对这个客户的一种管理手段，通过和这个客户的交流或者其他渠道，记录他的喜好，年龄，婚姻状况，有无子女，什么职业，收入多少，什么时候有空...，还有自己的感受，已经用什么方法，得到了什么反馈，接下来准备怎么做，这些信息都可以进行跟进，有文字、图片、语音三种形式载体。主管、经理、Boss或有权限的人，都能看的你对这个客户的跟进，了解当前发展到哪一步，可以给你提供一些建议和技巧，帮助你签单。',
      }, 
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/follow.gif'),
        title: '跟进',
        desc: '跟进可以选择类型，可以上传文字、图片、语音三种类型，三种形式必须选择一种才能发送，还有一些可以选的附加功能，发送位置，提醒时间。需要处理的是下面的功能操作栏，是浮动到底部的，当输入文字，键盘弹起的时候，要浮动到键盘上面。我用的是监听输入框的事件，获取键盘的高度，修改操作栏距离底部的高度。',
      },
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/inquiry.gif'),
        title: '批量操作',
        desc: '点击批量操作按钮，会出现已被选中的标记，再点就会取消，我会先把选中的客户ID存储起来，到批量操作页面，再获取出来，这个页面可以做多种操作，同时处理多条客户，已节省时间，成功之后会有一个面板，用来展示对这条客户的操作是否成功，操作成功之后，清空之前选中的客户，这里也可以继续添加客户进来做操作。',
      },
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/inquiry-list.png'),
        title: '已报备的列表',
        desc: '个人报备的客户都会出现在这个列表中，主要的功能是查看和续报，也有搜索，筛选，上滑加载下一页功能。搜索和筛选功能使用的频率很高，我已经封装成了组件。',
      },
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/reception-msg.png'),
        title: '通知到访',
        desc: '案场人员会新建接待，找到来看房的客户，选择约访还是带访，可以发送通知，也可以选择跳过，进入接待页面去做一些操作。这里的切换主要是管理数据的一个状态，单选全选功能也不难。',
      },
    ],
    [
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/WeChat-city.gif'),
        title: '选择城市',
        desc: '这是我封装的一个组件，有好多个地方用到它，通过接口获取数据，然后缓存到本地，下次再进入先获取城市缓存，如果没有城市缓存，才会再次发送请求；可以定位当前位置，拿到经纬度，放入腾讯地图中，获得城市信息；也可以搜索关键字查找城市。',
      },
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/check-statis.gif'),
        title: '考勤统计',
        desc: '有日考勤，月考勤，个人考勤，可以选择具体时间，选择具体部门进行筛选。可以精确到每一个人，统计一个月出勤天数，休息天数，是否迟到过，平均工作多少个小数。个人考勤还使用图表进行排行的展示，可以看到谁靠前，谁垫底。',
      },
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/check-punch.png'),
        title: '考勤打卡',
        desc: '分为内勤和外勤，上班打卡和下班打卡，先要设置一个坐标点，打卡的时候需要开启定位，当自己的位置处于坐标点的一个范围之内，就可以打卡，这里可以选择日期，查看之前打卡情况。下面有一排跳转按钮，去对应的功能页面。',
      },
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/message-list.png'),
        title: '消息列表',
        desc: '所有的消息都会集中到这里，有系统的通知消息，报备和接待提醒消息，还有一些聊天消息，这个页面只有一个搜索功能，列表是一个快捷入口导航，根据消息的类型，跳到对应的页面去处理。',
      },
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/message-sys.png'),
        title: '系统消息',
        desc: '里面主要是推送考勤统计，日志、请假等消息，里面用到了图表统计，可以点击跳转到相关的详细页面，查看更多具体的内容。',
      },
      {
        type: 'img',
        url: require('../assets/image/gallery/uzhike/crowd.png'),
        title: '众筹模块',
        desc: '这不是系统的核心模块，是后加的功能，这里并不涉及金额支付；有人发起众筹，其他人进行预约，只需触发一个操作就表示投了，其他的事情他们自己线下商量，只是会把众筹信息同步发送到对方的消息系统中。',
      },
    ],
  ]
}