import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2011Component } from './my-comp-2011.component';

describe('MyComp2011Component', () => {
  let component: MyComp2011Component;
  let fixture: ComponentFixture<MyComp2011Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2011Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2011Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
