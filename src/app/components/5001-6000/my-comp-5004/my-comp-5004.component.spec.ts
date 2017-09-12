import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5004Component } from './my-comp-5004.component';

describe('MyComp5004Component', () => {
  let component: MyComp5004Component;
  let fixture: ComponentFixture<MyComp5004Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5004Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5004Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
