import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3119Component } from './my-comp-3119.component';

describe('MyComp3119Component', () => {
  let component: MyComp3119Component;
  let fixture: ComponentFixture<MyComp3119Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3119Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3119Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
