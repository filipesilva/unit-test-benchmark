import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2887Component } from './my-comp-2887.component';

describe('MyComp2887Component', () => {
  let component: MyComp2887Component;
  let fixture: ComponentFixture<MyComp2887Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2887Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2887Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
