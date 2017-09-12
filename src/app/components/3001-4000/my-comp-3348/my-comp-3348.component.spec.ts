import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3348Component } from './my-comp-3348.component';

describe('MyComp3348Component', () => {
  let component: MyComp3348Component;
  let fixture: ComponentFixture<MyComp3348Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3348Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3348Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
