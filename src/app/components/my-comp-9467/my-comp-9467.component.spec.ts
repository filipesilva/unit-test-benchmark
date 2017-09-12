import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9467Component } from './my-comp-9467.component';

describe('MyComp9467Component', () => {
  let component: MyComp9467Component;
  let fixture: ComponentFixture<MyComp9467Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9467Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9467Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
