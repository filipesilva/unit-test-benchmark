import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7161Component } from './my-comp-7161.component';

describe('MyComp7161Component', () => {
  let component: MyComp7161Component;
  let fixture: ComponentFixture<MyComp7161Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7161Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7161Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
