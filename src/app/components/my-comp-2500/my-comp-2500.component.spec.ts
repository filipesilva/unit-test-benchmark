import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2500Component } from './my-comp-2500.component';

describe('MyComp2500Component', () => {
  let component: MyComp2500Component;
  let fixture: ComponentFixture<MyComp2500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
