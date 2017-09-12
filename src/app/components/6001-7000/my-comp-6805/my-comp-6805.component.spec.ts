import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6805Component } from './my-comp-6805.component';

describe('MyComp6805Component', () => {
  let component: MyComp6805Component;
  let fixture: ComponentFixture<MyComp6805Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6805Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6805Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
