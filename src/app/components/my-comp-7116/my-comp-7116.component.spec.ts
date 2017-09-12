import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7116Component } from './my-comp-7116.component';

describe('MyComp7116Component', () => {
  let component: MyComp7116Component;
  let fixture: ComponentFixture<MyComp7116Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7116Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7116Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
