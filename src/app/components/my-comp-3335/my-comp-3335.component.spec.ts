import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3335Component } from './my-comp-3335.component';

describe('MyComp3335Component', () => {
  let component: MyComp3335Component;
  let fixture: ComponentFixture<MyComp3335Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3335Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3335Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
