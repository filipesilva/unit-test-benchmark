import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2518Component } from './my-comp-2518.component';

describe('MyComp2518Component', () => {
  let component: MyComp2518Component;
  let fixture: ComponentFixture<MyComp2518Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2518Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2518Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
