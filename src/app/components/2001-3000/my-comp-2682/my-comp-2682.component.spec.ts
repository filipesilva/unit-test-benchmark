import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2682Component } from './my-comp-2682.component';

describe('MyComp2682Component', () => {
  let component: MyComp2682Component;
  let fixture: ComponentFixture<MyComp2682Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2682Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2682Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
