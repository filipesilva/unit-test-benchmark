import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2354Component } from './my-comp-2354.component';

describe('MyComp2354Component', () => {
  let component: MyComp2354Component;
  let fixture: ComponentFixture<MyComp2354Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2354Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2354Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
