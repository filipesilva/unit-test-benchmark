import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3833Component } from './my-comp-3833.component';

describe('MyComp3833Component', () => {
  let component: MyComp3833Component;
  let fixture: ComponentFixture<MyComp3833Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3833Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3833Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
