import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp4124Component } from './my-comp-4124.component';

describe('MyComp4124Component', () => {
  let component: MyComp4124Component;
  let fixture: ComponentFixture<MyComp4124Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp4124Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp4124Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
