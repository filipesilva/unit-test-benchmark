import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp210Component } from './my-comp-210.component';

describe('MyComp210Component', () => {
  let component: MyComp210Component;
  let fixture: ComponentFixture<MyComp210Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp210Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp210Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
