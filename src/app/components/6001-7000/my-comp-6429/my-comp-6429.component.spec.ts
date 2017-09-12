import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp6429Component } from './my-comp-6429.component';

describe('MyComp6429Component', () => {
  let component: MyComp6429Component;
  let fixture: ComponentFixture<MyComp6429Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp6429Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp6429Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
