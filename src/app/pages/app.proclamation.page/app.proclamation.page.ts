/**
 * @file app.proclamation.page.ts
 * @author zhouminghui
 * @description 公告页
*/

import {Component, OnInit} from '@angular/core';

declare let $: any;
@Component({
    selector: 'app-proclamation',
    templateUrl: './app.proclamation.page.html',
    styleUrls: ['./app.proclamation.page.css']
})



export class ProclamationPageComponent implements OnInit {
    public datalist: any[] = [];
    public itemData: any;
    public showModal = 'hide';
    public carouselData: any;
    public bodyScroll: any;
    public total: any;
    public paginateData: any;

    ngOnInit() {
        this.datalist = [
            {
                key: '0',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.01',
                content: '<p class="fs-30">这是标题</p><p class="fs-20">2019-01-01</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>' +
                        '<p>十大发腐蚀掉扣水电费缴费精神分裂开房记录说服力科技发生了就是分开了解放路冷风机缴费龙卷风了设计费垃圾分类</p>',
                carousel: '<img src="../../../assets/test/c.jpeg" width="100%" alt="图片1">',
                hot: true
            },
            {
                key: '1',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.02',
                content: '<p>这是标题</p><p>2019-01-02</p>',
                carousel: '<img src="../../../assets/test/b.jpeg" width="100%"   alt="图片2">',
                hot: true
            },
            {
                key: '2',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.03',
                content: '<p>这是标题</p><p>2019-01-03</p>',
                carousel: '<img src="../../../assets/test/a.jpeg" width="100%"   alt="图片3">',
                hot: true
            },
            {
                key: '3',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.04',
                content: '<p>这是标题</p><p>2019-01-04</p>',
                hot: false
            },
            {
                key: '4',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.05',
                content: '<p>这是标题</p><p>2019-01-05</p>',
                hot: false
            },
            {
                key: '5',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.06',
                content: '<p>这是标题</p><p>2019-01-06</p>',
                hot: false
            },
            {
                key: '6',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.06',
                content: '<p>这是标题</p><p>2019-01-06</p>',
                hot: false
            },
            {
                key: '7',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.06',
                content: '<p>这是标题</p><p>2019-01-06</p>',
                hot: false
            },
            {
                key: '8',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.06',
                content: '<p>这是标题</p><p>2019-01-06</p>',
                hot: false
            },
            {
                key: '9',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.06',
                content: '<p>这是标题</p><p>2019-01-06</p>',
                hot: false
            },
            {
                key: '10',
                title: '这是公告的题目，点击之后弹出浮动页面现实文本内容',
                date: '2019/01.06',
                content: '<p>这是标题</p><p>2019-01-06</p>',
                hot: false
            }
        ];

        this.paginateData = this.datalist.slice(0, 5);
        this.total = this.datalist.length;
        this.carouselData = this.datalist.filter(item => {
            return item.hot;
        });
    }

    getChildEvent(item: object) {
        this.itemData = item;
        this.showModal = 'show';
        $('body').css({'overflow': 'hidden'});
    }

    closeModal(isShow: boolean) {
        this.showModal = 'hide';
        $('body').css({'overflow': 'auto'});
    }

    paginate(e) {
        this.paginateData = this.datalist.slice(e.first, e.first + e.rows);
    }
}
