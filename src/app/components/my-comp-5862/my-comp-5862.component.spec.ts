import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5862Component } from './my-comp-5862.component';

describe('MyComp5862Component', () => {
  let component: MyComp5862Component;
  let fixture: ComponentFixture<MyComp5862Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5862Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5862Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
