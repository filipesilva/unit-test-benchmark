import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1043Component } from './my-comp-1043.component';

describe('MyComp1043Component', () => {
  let component: MyComp1043Component;
  let fixture: ComponentFixture<MyComp1043Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1043Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1043Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
