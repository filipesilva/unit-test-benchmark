import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3476Component } from './my-comp-3476.component';

describe('MyComp3476Component', () => {
  let component: MyComp3476Component;
  let fixture: ComponentFixture<MyComp3476Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3476Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3476Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
