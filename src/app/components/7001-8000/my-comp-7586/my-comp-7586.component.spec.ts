import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7586Component } from './my-comp-7586.component';

describe('MyComp7586Component', () => {
  let component: MyComp7586Component;
  let fixture: ComponentFixture<MyComp7586Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7586Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7586Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
