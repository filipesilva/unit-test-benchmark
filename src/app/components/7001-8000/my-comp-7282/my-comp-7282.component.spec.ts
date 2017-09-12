import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7282Component } from './my-comp-7282.component';

describe('MyComp7282Component', () => {
  let component: MyComp7282Component;
  let fixture: ComponentFixture<MyComp7282Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7282Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7282Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
