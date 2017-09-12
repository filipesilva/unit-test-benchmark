import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3015Component } from './my-comp-3015.component';

describe('MyComp3015Component', () => {
  let component: MyComp3015Component;
  let fixture: ComponentFixture<MyComp3015Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3015Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3015Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
