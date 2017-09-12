import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7605Component } from './my-comp-7605.component';

describe('MyComp7605Component', () => {
  let component: MyComp7605Component;
  let fixture: ComponentFixture<MyComp7605Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7605Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7605Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
