import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7048Component } from './my-comp-7048.component';

describe('MyComp7048Component', () => {
  let component: MyComp7048Component;
  let fixture: ComponentFixture<MyComp7048Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7048Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7048Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
