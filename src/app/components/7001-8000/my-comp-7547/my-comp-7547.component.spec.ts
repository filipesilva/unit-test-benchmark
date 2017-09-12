import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7547Component } from './my-comp-7547.component';

describe('MyComp7547Component', () => {
  let component: MyComp7547Component;
  let fixture: ComponentFixture<MyComp7547Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7547Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7547Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
