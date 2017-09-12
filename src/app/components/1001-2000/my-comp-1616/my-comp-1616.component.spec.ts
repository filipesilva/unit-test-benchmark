import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1616Component } from './my-comp-1616.component';

describe('MyComp1616Component', () => {
  let component: MyComp1616Component;
  let fixture: ComponentFixture<MyComp1616Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1616Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1616Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
