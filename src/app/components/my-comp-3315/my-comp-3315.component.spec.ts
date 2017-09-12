import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3315Component } from './my-comp-3315.component';

describe('MyComp3315Component', () => {
  let component: MyComp3315Component;
  let fixture: ComponentFixture<MyComp3315Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3315Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3315Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
