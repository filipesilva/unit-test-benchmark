import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1557Component } from './my-comp-1557.component';

describe('MyComp1557Component', () => {
  let component: MyComp1557Component;
  let fixture: ComponentFixture<MyComp1557Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1557Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1557Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
