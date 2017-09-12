import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2602Component } from './my-comp-2602.component';

describe('MyComp2602Component', () => {
  let component: MyComp2602Component;
  let fixture: ComponentFixture<MyComp2602Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2602Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2602Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
