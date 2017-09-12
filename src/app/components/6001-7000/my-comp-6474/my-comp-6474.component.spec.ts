import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6474Component } from './my-comp-6474.component';

describe('MyComp6474Component', () => {
  let component: MyComp6474Component;
  let fixture: ComponentFixture<MyComp6474Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6474Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6474Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
