import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1516Component } from './my-comp-1516.component';

describe('MyComp1516Component', () => {
  let component: MyComp1516Component;
  let fixture: ComponentFixture<MyComp1516Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1516Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1516Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
