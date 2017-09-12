import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7031Component } from './my-comp-7031.component';

describe('MyComp7031Component', () => {
  let component: MyComp7031Component;
  let fixture: ComponentFixture<MyComp7031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
