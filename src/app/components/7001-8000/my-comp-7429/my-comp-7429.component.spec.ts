import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7429Component } from './my-comp-7429.component';

describe('MyComp7429Component', () => {
  let component: MyComp7429Component;
  let fixture: ComponentFixture<MyComp7429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
