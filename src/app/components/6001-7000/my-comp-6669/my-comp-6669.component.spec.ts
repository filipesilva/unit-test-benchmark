import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6669Component } from './my-comp-6669.component';

describe('MyComp6669Component', () => {
  let component: MyComp6669Component;
  let fixture: ComponentFixture<MyComp6669Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6669Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6669Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
