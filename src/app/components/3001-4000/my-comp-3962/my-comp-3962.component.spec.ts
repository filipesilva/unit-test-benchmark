import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3962Component } from './my-comp-3962.component';

describe('MyComp3962Component', () => {
  let component: MyComp3962Component;
  let fixture: ComponentFixture<MyComp3962Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3962Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3962Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
