import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2380Component } from './my-comp-2380.component';

describe('MyComp2380Component', () => {
  let component: MyComp2380Component;
  let fixture: ComponentFixture<MyComp2380Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2380Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2380Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
