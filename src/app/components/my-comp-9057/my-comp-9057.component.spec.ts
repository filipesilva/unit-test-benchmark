import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9057Component } from './my-comp-9057.component';

describe('MyComp9057Component', () => {
  let component: MyComp9057Component;
  let fixture: ComponentFixture<MyComp9057Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9057Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9057Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
