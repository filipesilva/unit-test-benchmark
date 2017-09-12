import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp1215Component } from './my-comp-1215.component';

describe('MyComp1215Component', () => {
  let component: MyComp1215Component;
  let fixture: ComponentFixture<MyComp1215Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp1215Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp1215Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
