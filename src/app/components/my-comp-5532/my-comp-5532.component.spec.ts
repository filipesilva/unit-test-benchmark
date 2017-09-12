import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5532Component } from './my-comp-5532.component';

describe('MyComp5532Component', () => {
  let component: MyComp5532Component;
  let fixture: ComponentFixture<MyComp5532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
