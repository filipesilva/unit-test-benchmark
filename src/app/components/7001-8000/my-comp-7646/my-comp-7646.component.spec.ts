import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7646Component } from './my-comp-7646.component';

describe('MyComp7646Component', () => {
  let component: MyComp7646Component;
  let fixture: ComponentFixture<MyComp7646Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7646Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7646Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
