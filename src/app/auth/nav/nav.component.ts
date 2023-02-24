import { Location } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  NavigationEnd,
  NavigationStart,
  Router,
  RoutesRecognized,
} from '@angular/router';
import { filter, pairwise, Subscription } from 'rxjs';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit, OnDestroy {
  public subscription: Subscription = new Subscription();
  num1: number = 4;
  constructor(
    public router: Router,
    public route: ActivatedRoute,
    private location: Location
  ) {
    // this.subscription = this.router.events
    //   .pipe(filter((e) => e instanceof RoutesRecognized))
    //   .subscribe((res) => {
    //     console.log(res);
    //   });
    console.log(router.config,"test")
    // console.log(document.referrer,"test")
    // console.log(this.location.getState().previousUrl)
  }

  ngOnInit() {
    // this.subscription = this.router.events
    //   .subscribe((res) => {
    //     if(res instanceof NavigationStart){
    //       console.log(res);
    //     }
    //   });
    // let obj = {
    //   name: 'ravi',
    //   place: 'loc',
    // };
    // let ary = ['chandra', 'reddy'];
    // let { name: fullname, place } = obj;
    // let [name, surname] = ary;
    // let aryObj = { nameobj: [{ test: '123' }, { test: 456 }] };
    // let {nameobj:[t1]} = aryObj
    // console.log(t1);
    // console.log(name, surname);
    // console.log(fullname, place);
    // const courseCatalogMetadata = [
    //   {
    //     title: 'Linear Algebra II',
    //     description: 'Advanced linear algebra.',
    //     texts: [
    //       {
    //         author: 'James Smith',
    //         price: 120,
    //         ISBN: '912-6-44-578441-0',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'Linear Algebra II',
    //     description: 'Advanced linear algebra.',
    //     texts: [
    //       {
    //         author: 'James Smith',
    //         price: 120,
    //         ISBN: '912-6-44-578441-0',
    //       },
    //     ],
    //   },
    //   {
    //     title: 'Linear Algebra II',
    //     description: 'Advanced linear algebra.',
    //     texts: [
    //       {
    //         author: 'James Smith',
    //         price: 120,
    //         ISBN: '912-6-44-578441-0',
    //       },
    //     ],
    //   },
    // ];
    // const [course] = courseCatalogMetadata;
    // const [{ texts: textbooks }] = courseCatalogMetadata;
    // const [
    //   {
    //     texts: [textbook],
    //   },
    // ] = courseCatalogMetadata;
    // const [
    //   {
    //     texts: [{ ISBN }],
    //   },
    // ] = courseCatalogMetadata;
    // console.log(course);
    // console.log(textbooks);
    // console.log(textbook);
    // console.log(ISBN);

    let ar1 = [1, 2, 4, 5, 6, 6, 8, 8, 9, 5, 2, 3, 51];
    let ar2 = [...new Set(ar1)];
    // console.log(ar2)
    this.dest(...(ar2 as [number, String, number, number]));
  }

  dest(a: any, b: any, c: any, d: any, ...args: any) {
    console.log(a, b, c, d, args);
  }
  ngOnDestroy() {
    this.subscription && this.subscription.unsubscribe();
  }
  changeValue(){
    this.num1++
  }
}