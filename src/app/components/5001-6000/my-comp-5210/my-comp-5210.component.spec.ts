import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5210Component } from './my-comp-5210.component';

describe('MyComp5210Component', () => {
  let component: MyComp5210Component;
  let fixture: ComponentFixture<MyComp5210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
