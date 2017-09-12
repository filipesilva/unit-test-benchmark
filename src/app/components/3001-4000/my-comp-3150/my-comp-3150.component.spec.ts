import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3150Component } from './my-comp-3150.component';

describe('MyComp3150Component', () => {
  let component: MyComp3150Component;
  let fixture: ComponentFixture<MyComp3150Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3150Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3150Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
