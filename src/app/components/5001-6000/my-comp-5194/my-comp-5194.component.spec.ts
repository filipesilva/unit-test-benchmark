import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5194Component } from './my-comp-5194.component';

describe('MyComp5194Component', () => {
  let component: MyComp5194Component;
  let fixture: ComponentFixture<MyComp5194Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5194Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5194Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
