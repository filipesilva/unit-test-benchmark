import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp254Component } from './my-comp-254.component';

describe('MyComp254Component', () => {
  let component: MyComp254Component;
  let fixture: ComponentFixture<MyComp254Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp254Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp254Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
