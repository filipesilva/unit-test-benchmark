import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5646Component } from './my-comp-5646.component';

describe('MyComp5646Component', () => {
  let component: MyComp5646Component;
  let fixture: ComponentFixture<MyComp5646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
