import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7710Component } from './my-comp-7710.component';

describe('MyComp7710Component', () => {
  let component: MyComp7710Component;
  let fixture: ComponentFixture<MyComp7710Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7710Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7710Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
