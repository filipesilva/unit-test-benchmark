import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp9092Component } from './my-comp-9092.component';

describe('MyComp9092Component', () => {
  let component: MyComp9092Component;
  let fixture: ComponentFixture<MyComp9092Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp9092Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp9092Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
