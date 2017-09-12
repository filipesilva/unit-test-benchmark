import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9540Component } from './my-comp-9540.component';

describe('MyComp9540Component', () => {
  let component: MyComp9540Component;
  let fixture: ComponentFixture<MyComp9540Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9540Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9540Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
