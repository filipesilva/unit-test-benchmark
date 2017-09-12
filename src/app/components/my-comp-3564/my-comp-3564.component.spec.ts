import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3564Component } from './my-comp-3564.component';

describe('MyComp3564Component', () => {
  let component: MyComp3564Component;
  let fixture: ComponentFixture<MyComp3564Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3564Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3564Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
