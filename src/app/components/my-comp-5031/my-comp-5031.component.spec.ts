import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5031Component } from './my-comp-5031.component';

describe('MyComp5031Component', () => {
  let component: MyComp5031Component;
  let fixture: ComponentFixture<MyComp5031Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5031Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5031Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
