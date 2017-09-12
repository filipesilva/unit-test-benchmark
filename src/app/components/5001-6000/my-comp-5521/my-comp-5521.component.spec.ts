import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5521Component } from './my-comp-5521.component';

describe('MyComp5521Component', () => {
  let component: MyComp5521Component;
  let fixture: ComponentFixture<MyComp5521Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5521Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5521Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
