import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7796Component } from './my-comp-7796.component';

describe('MyComp7796Component', () => {
  let component: MyComp7796Component;
  let fixture: ComponentFixture<MyComp7796Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7796Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7796Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
