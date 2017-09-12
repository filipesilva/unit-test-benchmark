import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3334Component } from './my-comp-3334.component';

describe('MyComp3334Component', () => {
  let component: MyComp3334Component;
  let fixture: ComponentFixture<MyComp3334Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3334Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3334Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
