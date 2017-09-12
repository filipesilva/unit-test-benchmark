import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5658Component } from './my-comp-5658.component';

describe('MyComp5658Component', () => {
  let component: MyComp5658Component;
  let fixture: ComponentFixture<MyComp5658Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5658Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5658Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
