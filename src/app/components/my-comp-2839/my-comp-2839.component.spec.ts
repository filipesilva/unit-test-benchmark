import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2839Component } from './my-comp-2839.component';

describe('MyComp2839Component', () => {
  let component: MyComp2839Component;
  let fixture: ComponentFixture<MyComp2839Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2839Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2839Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
