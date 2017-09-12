import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp2451Component } from './my-comp-2451.component';

describe('MyComp2451Component', () => {
  let component: MyComp2451Component;
  let fixture: ComponentFixture<MyComp2451Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp2451Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp2451Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
