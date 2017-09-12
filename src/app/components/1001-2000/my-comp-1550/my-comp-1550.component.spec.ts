import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1550Component } from './my-comp-1550.component';

describe('MyComp1550Component', () => {
  let component: MyComp1550Component;
  let fixture: ComponentFixture<MyComp1550Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1550Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1550Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
