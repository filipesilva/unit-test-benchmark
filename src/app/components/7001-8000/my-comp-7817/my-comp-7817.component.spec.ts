import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7817Component } from './my-comp-7817.component';

describe('MyComp7817Component', () => {
  let component: MyComp7817Component;
  let fixture: ComponentFixture<MyComp7817Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7817Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7817Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
