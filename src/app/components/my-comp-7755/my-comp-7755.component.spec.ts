import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7755Component } from './my-comp-7755.component';

describe('MyComp7755Component', () => {
  let component: MyComp7755Component;
  let fixture: ComponentFixture<MyComp7755Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7755Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7755Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
