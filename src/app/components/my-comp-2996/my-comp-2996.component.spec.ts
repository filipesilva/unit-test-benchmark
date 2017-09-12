import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2996Component } from './my-comp-2996.component';

describe('MyComp2996Component', () => {
  let component: MyComp2996Component;
  let fixture: ComponentFixture<MyComp2996Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2996Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2996Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
