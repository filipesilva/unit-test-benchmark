import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1727Component } from './my-comp-1727.component';

describe('MyComp1727Component', () => {
  let component: MyComp1727Component;
  let fixture: ComponentFixture<MyComp1727Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1727Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1727Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
