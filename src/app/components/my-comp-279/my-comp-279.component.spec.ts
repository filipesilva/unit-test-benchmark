import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp279Component } from './my-comp-279.component';

describe('MyComp279Component', () => {
  let component: MyComp279Component;
  let fixture: ComponentFixture<MyComp279Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp279Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp279Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
