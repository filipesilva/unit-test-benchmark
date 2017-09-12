import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5626Component } from './my-comp-5626.component';

describe('MyComp5626Component', () => {
  let component: MyComp5626Component;
  let fixture: ComponentFixture<MyComp5626Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5626Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5626Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
