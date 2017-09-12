import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp391Component } from './my-comp-391.component';

describe('MyComp391Component', () => {
  let component: MyComp391Component;
  let fixture: ComponentFixture<MyComp391Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp391Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp391Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
