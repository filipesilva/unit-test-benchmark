import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7731Component } from './my-comp-7731.component';

describe('MyComp7731Component', () => {
  let component: MyComp7731Component;
  let fixture: ComponentFixture<MyComp7731Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7731Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7731Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
