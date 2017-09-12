import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7056Component } from './my-comp-7056.component';

describe('MyComp7056Component', () => {
  let component: MyComp7056Component;
  let fixture: ComponentFixture<MyComp7056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
