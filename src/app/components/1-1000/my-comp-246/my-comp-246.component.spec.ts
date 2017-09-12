import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp246Component } from './my-comp-246.component';

describe('MyComp246Component', () => {
  let component: MyComp246Component;
  let fixture: ComponentFixture<MyComp246Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp246Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp246Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
