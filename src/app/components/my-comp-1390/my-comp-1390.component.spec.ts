import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1390Component } from './my-comp-1390.component';

describe('MyComp1390Component', () => {
  let component: MyComp1390Component;
  let fixture: ComponentFixture<MyComp1390Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1390Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1390Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
