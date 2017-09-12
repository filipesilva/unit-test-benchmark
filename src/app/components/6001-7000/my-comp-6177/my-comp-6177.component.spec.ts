import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6177Component } from './my-comp-6177.component';

describe('MyComp6177Component', () => {
  let component: MyComp6177Component;
  let fixture: ComponentFixture<MyComp6177Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6177Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6177Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
