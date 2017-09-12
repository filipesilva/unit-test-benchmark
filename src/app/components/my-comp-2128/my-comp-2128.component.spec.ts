import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2128Component } from './my-comp-2128.component';

describe('MyComp2128Component', () => {
  let component: MyComp2128Component;
  let fixture: ComponentFixture<MyComp2128Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2128Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2128Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
