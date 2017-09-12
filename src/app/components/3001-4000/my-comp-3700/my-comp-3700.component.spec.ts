import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3700Component } from './my-comp-3700.component';

describe('MyComp3700Component', () => {
  let component: MyComp3700Component;
  let fixture: ComponentFixture<MyComp3700Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3700Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3700Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
