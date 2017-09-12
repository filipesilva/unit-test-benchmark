import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7787Component } from './my-comp-7787.component';

describe('MyComp7787Component', () => {
  let component: MyComp7787Component;
  let fixture: ComponentFixture<MyComp7787Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7787Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7787Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
