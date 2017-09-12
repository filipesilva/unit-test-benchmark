import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6355Component } from './my-comp-6355.component';

describe('MyComp6355Component', () => {
  let component: MyComp6355Component;
  let fixture: ComponentFixture<MyComp6355Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6355Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6355Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
