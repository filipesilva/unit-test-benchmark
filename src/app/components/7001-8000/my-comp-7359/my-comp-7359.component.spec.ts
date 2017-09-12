import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7359Component } from './my-comp-7359.component';

describe('MyComp7359Component', () => {
  let component: MyComp7359Component;
  let fixture: ComponentFixture<MyComp7359Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7359Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7359Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
