import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4046Component } from './my-comp-4046.component';

describe('MyComp4046Component', () => {
  let component: MyComp4046Component;
  let fixture: ComponentFixture<MyComp4046Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4046Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4046Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
