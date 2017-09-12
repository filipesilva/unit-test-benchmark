import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp274Component } from './my-comp-274.component';

describe('MyComp274Component', () => {
  let component: MyComp274Component;
  let fixture: ComponentFixture<MyComp274Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp274Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp274Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
