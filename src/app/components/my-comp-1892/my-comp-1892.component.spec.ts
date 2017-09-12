import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1892Component } from './my-comp-1892.component';

describe('MyComp1892Component', () => {
  let component: MyComp1892Component;
  let fixture: ComponentFixture<MyComp1892Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1892Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1892Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
