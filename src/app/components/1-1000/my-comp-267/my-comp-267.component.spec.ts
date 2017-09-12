import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp267Component } from './my-comp-267.component';

describe('MyComp267Component', () => {
  let component: MyComp267Component;
  let fixture: ComponentFixture<MyComp267Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp267Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp267Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
