import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7393Component } from './my-comp-7393.component';

describe('MyComp7393Component', () => {
  let component: MyComp7393Component;
  let fixture: ComponentFixture<MyComp7393Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7393Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7393Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
