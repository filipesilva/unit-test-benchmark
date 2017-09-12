import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2151Component } from './my-comp-2151.component';

describe('MyComp2151Component', () => {
  let component: MyComp2151Component;
  let fixture: ComponentFixture<MyComp2151Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2151Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2151Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
