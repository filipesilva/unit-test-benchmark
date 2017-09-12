import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2203Component } from './my-comp-2203.component';

describe('MyComp2203Component', () => {
  let component: MyComp2203Component;
  let fixture: ComponentFixture<MyComp2203Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2203Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2203Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
