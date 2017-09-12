import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9373Component } from './my-comp-9373.component';

describe('MyComp9373Component', () => {
  let component: MyComp9373Component;
  let fixture: ComponentFixture<MyComp9373Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9373Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9373Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
