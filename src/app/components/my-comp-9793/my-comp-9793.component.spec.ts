import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9793Component } from './my-comp-9793.component';

describe('MyComp9793Component', () => {
  let component: MyComp9793Component;
  let fixture: ComponentFixture<MyComp9793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
