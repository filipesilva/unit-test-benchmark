import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7212Component } from './my-comp-7212.component';

describe('MyComp7212Component', () => {
  let component: MyComp7212Component;
  let fixture: ComponentFixture<MyComp7212Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7212Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7212Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
