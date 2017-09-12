import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3552Component } from './my-comp-3552.component';

describe('MyComp3552Component', () => {
  let component: MyComp3552Component;
  let fixture: ComponentFixture<MyComp3552Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3552Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3552Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
