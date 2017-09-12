import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5905Component } from './my-comp-5905.component';

describe('MyComp5905Component', () => {
  let component: MyComp5905Component;
  let fixture: ComponentFixture<MyComp5905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
