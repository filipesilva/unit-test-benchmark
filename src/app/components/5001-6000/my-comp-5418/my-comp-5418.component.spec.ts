import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5418Component } from './my-comp-5418.component';

describe('MyComp5418Component', () => {
  let component: MyComp5418Component;
  let fixture: ComponentFixture<MyComp5418Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5418Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5418Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
