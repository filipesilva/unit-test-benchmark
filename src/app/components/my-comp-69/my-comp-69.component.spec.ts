import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp69Component } from './my-comp-69.component';

describe('MyComp69Component', () => {
  let component: MyComp69Component;
  let fixture: ComponentFixture<MyComp69Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp69Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp69Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
