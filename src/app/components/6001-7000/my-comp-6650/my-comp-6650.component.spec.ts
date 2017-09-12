import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6650Component } from './my-comp-6650.component';

describe('MyComp6650Component', () => {
  let component: MyComp6650Component;
  let fixture: ComponentFixture<MyComp6650Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6650Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6650Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
