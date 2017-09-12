import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9750Component } from './my-comp-9750.component';

describe('MyComp9750Component', () => {
  let component: MyComp9750Component;
  let fixture: ComponentFixture<MyComp9750Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9750Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9750Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
