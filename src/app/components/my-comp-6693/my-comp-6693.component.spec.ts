import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6693Component } from './my-comp-6693.component';

describe('MyComp6693Component', () => {
  let component: MyComp6693Component;
  let fixture: ComponentFixture<MyComp6693Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6693Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6693Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
