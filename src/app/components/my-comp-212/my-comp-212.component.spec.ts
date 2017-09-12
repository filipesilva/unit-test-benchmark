import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp212Component } from './my-comp-212.component';

describe('MyComp212Component', () => {
  let component: MyComp212Component;
  let fixture: ComponentFixture<MyComp212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
