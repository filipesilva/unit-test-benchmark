import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2938Component } from './my-comp-2938.component';

describe('MyComp2938Component', () => {
  let component: MyComp2938Component;
  let fixture: ComponentFixture<MyComp2938Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2938Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2938Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
