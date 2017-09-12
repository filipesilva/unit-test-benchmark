import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4201Component } from './my-comp-4201.component';

describe('MyComp4201Component', () => {
  let component: MyComp4201Component;
  let fixture: ComponentFixture<MyComp4201Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4201Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4201Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
