import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4876Component } from './my-comp-4876.component';

describe('MyComp4876Component', () => {
  let component: MyComp4876Component;
  let fixture: ComponentFixture<MyComp4876Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4876Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4876Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
