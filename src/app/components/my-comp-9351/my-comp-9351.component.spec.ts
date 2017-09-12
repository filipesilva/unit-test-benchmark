import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9351Component } from './my-comp-9351.component';

describe('MyComp9351Component', () => {
  let component: MyComp9351Component;
  let fixture: ComponentFixture<MyComp9351Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9351Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9351Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
