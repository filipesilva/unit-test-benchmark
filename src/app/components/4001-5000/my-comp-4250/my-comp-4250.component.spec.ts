import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4250Component } from './my-comp-4250.component';

describe('MyComp4250Component', () => {
  let component: MyComp4250Component;
  let fixture: ComponentFixture<MyComp4250Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4250Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4250Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
