import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp364Component } from './my-comp-364.component';

describe('MyComp364Component', () => {
  let component: MyComp364Component;
  let fixture: ComponentFixture<MyComp364Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp364Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp364Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
