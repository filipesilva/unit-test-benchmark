import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3425Component } from './my-comp-3425.component';

describe('MyComp3425Component', () => {
  let component: MyComp3425Component;
  let fixture: ComponentFixture<MyComp3425Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3425Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3425Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
