import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7854Component } from './my-comp-7854.component';

describe('MyComp7854Component', () => {
  let component: MyComp7854Component;
  let fixture: ComponentFixture<MyComp7854Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7854Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7854Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
