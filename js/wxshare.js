wx.ready(function () {
	
	    // ���������
/**    wx.updateAppMessageShareData({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('����ɹ�');
			swal("����ɹ�");
        },
        cancel: function () {
        }
    });

    // ����QQ
    wx.updateTimelineShareData({
        title: wstitle,
        desc: wsdesc,
        link: qqlink,
        imgUrl: wsimg,
        success: function () {
            //alert('����ɹ�');
			swal("����ɹ�");
        },
        cancel: function () {
        }
    });
	**/
    // ��������Ȧ
    wx.onMenuShareTimeline({
        title: wstitle,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('����ɹ�');
			swal("����ɹ�");
        },
        cancel: function () {
        }
    });
	
	

    // ���������
    wx.onMenuShareAppMessage({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('����ɹ�');
			swal("����ɹ�");
        },
        cancel: function () {
        }
    });

    // ����QQ
    wx.onMenuShareQQ({
        title: wstitle,
        desc: wsdesc,
        link: qqlink,
        imgUrl: wsimg,
        success: function () {
            //alert('����ɹ�');
			swal("����ɹ�");
        },
        cancel: function () {
        }
    });

    // ΢�ŵ���Ѷ΢��
    wx.onMenuShareWeibo({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('����ɹ�');
			swal("����ɹ�");
        },
        cancel: function () {
        }
    });

    // ����QQ�ռ�
    wx.onMenuShareQZone({
        title: wstitle,
        desc: wsdesc,
        link: wslink,
        imgUrl: wsimg,
        success: function () {
            //alert('����ɹ�');
			swal("����ɹ�");
        },
        cancel: function () {
        }
    });
	
	

});