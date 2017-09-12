import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5105Component } from './my-comp-5105.component';

describe('MyComp5105Component', () => {
  let component: MyComp5105Component;
  let fixture: ComponentFixture<MyComp5105Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5105Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5105Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
