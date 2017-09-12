import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9966Component } from './my-comp-9966.component';

describe('MyComp9966Component', () => {
  let component: MyComp9966Component;
  let fixture: ComponentFixture<MyComp9966Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9966Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9966Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
