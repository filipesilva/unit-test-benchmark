import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7719Component } from './my-comp-7719.component';

describe('MyComp7719Component', () => {
  let component: MyComp7719Component;
  let fixture: ComponentFixture<MyComp7719Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7719Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7719Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
