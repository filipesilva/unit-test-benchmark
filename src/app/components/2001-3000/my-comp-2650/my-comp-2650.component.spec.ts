import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2650Component } from './my-comp-2650.component';

describe('MyComp2650Component', () => {
  let component: MyComp2650Component;
  let fixture: ComponentFixture<MyComp2650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
