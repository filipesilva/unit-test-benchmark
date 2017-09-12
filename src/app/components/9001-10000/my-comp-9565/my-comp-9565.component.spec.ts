import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9565Component } from './my-comp-9565.component';

describe('MyComp9565Component', () => {
  let component: MyComp9565Component;
  let fixture: ComponentFixture<MyComp9565Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9565Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9565Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
