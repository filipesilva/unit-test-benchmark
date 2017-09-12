import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp119Component } from './my-comp-119.component';

describe('MyComp119Component', () => {
  let component: MyComp119Component;
  let fixture: ComponentFixture<MyComp119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
