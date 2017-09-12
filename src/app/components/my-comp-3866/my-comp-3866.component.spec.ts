import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3866Component } from './my-comp-3866.component';

describe('MyComp3866Component', () => {
  let component: MyComp3866Component;
  let fixture: ComponentFixture<MyComp3866Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3866Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3866Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
