import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9546Component } from './my-comp-9546.component';

describe('MyComp9546Component', () => {
  let component: MyComp9546Component;
  let fixture: ComponentFixture<MyComp9546Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9546Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9546Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
