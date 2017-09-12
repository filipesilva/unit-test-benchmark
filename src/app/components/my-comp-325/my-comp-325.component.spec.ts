import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp325Component } from './my-comp-325.component';

describe('MyComp325Component', () => {
  let component: MyComp325Component;
  let fixture: ComponentFixture<MyComp325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
