Component({
	properties: {
		bgcolor: {
			type: String,
			value: '#ffffff'
		},
		selector: {
			type: String,
			value: 'skeleton'
		},
		loading: {
			type: String,
			value: 'spin'
		}
	},
	data: {
		loadingAni: ['spin', 'chiaroscuro'],
		systemInfo: {},
		skeletonRectLists: [],
		skeletonCircleLists: []
	},
	attached: function () {
		//默认的首屏宽高，防止内容闪现
		const systemInfo = wx.getSystemInfoSync();
		this.setData({
			systemInfo: {
				width: systemInfo.windowWidth,
				height: systemInfo.windowHeight
			},
			loading: this.data.loadingAni.includes(this.data.loading) ? this.data.loading : 'spin'
		})
	},
	ready: function () {
		//绘制背景
		wx.createSelectorQuery().selectAll(`.${this.data.selector}`).boundingClientRect().exec( (res) => {
			this.setData({
				'systemInfo.height': res[0][0].height + res[0][0].top
			})
		});

		//绘制矩形
		this.rectHandle();

		//绘制圆形
		this.radiusHandle();

	},
	methods: {
		rectHandle: function () {
			//绘制不带样式的节点
			wx.createSelectorQuery().selectAll(`.${this.data.selector}-rect`).boundingClientRect().exec( (res) => {
        this.setData({
					skeletonRectLists: res[0]
				})
			});

		},
		radiusHandle: function () {

			wx.createSelectorQuery().selectAll(`.${this.data.selector}-radius`).boundingClientRect().exec( (res) =>{
        this.setData({
					skeletonCircleLists: res[0]
				})
			});
		},

	}

})