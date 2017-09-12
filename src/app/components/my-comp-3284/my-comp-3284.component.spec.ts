import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3284Component } from './my-comp-3284.component';

describe('MyComp3284Component', () => {
  let component: MyComp3284Component;
  let fixture: ComponentFixture<MyComp3284Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3284Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3284Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
