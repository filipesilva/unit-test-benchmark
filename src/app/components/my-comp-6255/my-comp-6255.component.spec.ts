import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6255Component } from './my-comp-6255.component';

describe('MyComp6255Component', () => {
  let component: MyComp6255Component;
  let fixture: ComponentFixture<MyComp6255Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6255Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6255Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
