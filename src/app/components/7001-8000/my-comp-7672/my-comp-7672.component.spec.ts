import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7672Component } from './my-comp-7672.component';

describe('MyComp7672Component', () => {
  let component: MyComp7672Component;
  let fixture: ComponentFixture<MyComp7672Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7672Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7672Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
