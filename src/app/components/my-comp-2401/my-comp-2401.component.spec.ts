import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2401Component } from './my-comp-2401.component';

describe('MyComp2401Component', () => {
  let component: MyComp2401Component;
  let fixture: ComponentFixture<MyComp2401Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2401Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2401Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
