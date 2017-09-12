import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9325Component } from './my-comp-9325.component';

describe('MyComp9325Component', () => {
  let component: MyComp9325Component;
  let fixture: ComponentFixture<MyComp9325Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9325Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9325Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
