import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7914Component } from './my-comp-7914.component';

describe('MyComp7914Component', () => {
  let component: MyComp7914Component;
  let fixture: ComponentFixture<MyComp7914Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7914Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7914Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
