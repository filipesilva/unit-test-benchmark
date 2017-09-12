import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp575Component } from './my-comp-575.component';

describe('MyComp575Component', () => {
  let component: MyComp575Component;
  let fixture: ComponentFixture<MyComp575Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp575Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp575Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
