import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7992Component } from './my-comp-7992.component';

describe('MyComp7992Component', () => {
  let component: MyComp7992Component;
  let fixture: ComponentFixture<MyComp7992Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7992Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7992Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
