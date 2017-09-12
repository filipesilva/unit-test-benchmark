import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4060Component } from './my-comp-4060.component';

describe('MyComp4060Component', () => {
  let component: MyComp4060Component;
  let fixture: ComponentFixture<MyComp4060Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4060Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4060Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
