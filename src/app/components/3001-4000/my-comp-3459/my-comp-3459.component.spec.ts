import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3459Component } from './my-comp-3459.component';

describe('MyComp3459Component', () => {
  let component: MyComp3459Component;
  let fixture: ComponentFixture<MyComp3459Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3459Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3459Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
