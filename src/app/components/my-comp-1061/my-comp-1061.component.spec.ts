import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1061Component } from './my-comp-1061.component';

describe('MyComp1061Component', () => {
  let component: MyComp1061Component;
  let fixture: ComponentFixture<MyComp1061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
