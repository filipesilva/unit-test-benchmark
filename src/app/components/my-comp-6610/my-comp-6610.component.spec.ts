import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6610Component } from './my-comp-6610.component';

describe('MyComp6610Component', () => {
  let component: MyComp6610Component;
  let fixture: ComponentFixture<MyComp6610Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6610Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6610Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
