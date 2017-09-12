import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7395Component } from './my-comp-7395.component';

describe('MyComp7395Component', () => {
  let component: MyComp7395Component;
  let fixture: ComponentFixture<MyComp7395Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7395Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7395Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
