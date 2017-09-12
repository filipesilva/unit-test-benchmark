import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6060Component } from './my-comp-6060.component';

describe('MyComp6060Component', () => {
  let component: MyComp6060Component;
  let fixture: ComponentFixture<MyComp6060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
