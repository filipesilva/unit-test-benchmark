import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4467Component } from './my-comp-4467.component';

describe('MyComp4467Component', () => {
  let component: MyComp4467Component;
  let fixture: ComponentFixture<MyComp4467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
