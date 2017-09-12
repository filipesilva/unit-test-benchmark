import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1501Component } from './my-comp-1501.component';

describe('MyComp1501Component', () => {
  let component: MyComp1501Component;
  let fixture: ComponentFixture<MyComp1501Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1501Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1501Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
