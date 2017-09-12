import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4325Component } from './my-comp-4325.component';

describe('MyComp4325Component', () => {
  let component: MyComp4325Component;
  let fixture: ComponentFixture<MyComp4325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
