import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1648Component } from './my-comp-1648.component';

describe('MyComp1648Component', () => {
  let component: MyComp1648Component;
  let fixture: ComponentFixture<MyComp1648Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1648Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1648Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
