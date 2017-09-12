import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6467Component } from './my-comp-6467.component';

describe('MyComp6467Component', () => {
  let component: MyComp6467Component;
  let fixture: ComponentFixture<MyComp6467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
