import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2610Component } from './my-comp-2610.component';

describe('MyComp2610Component', () => {
  let component: MyComp2610Component;
  let fixture: ComponentFixture<MyComp2610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
