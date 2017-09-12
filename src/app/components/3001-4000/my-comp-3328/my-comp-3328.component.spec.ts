import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3328Component } from './my-comp-3328.component';

describe('MyComp3328Component', () => {
  let component: MyComp3328Component;
  let fixture: ComponentFixture<MyComp3328Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3328Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3328Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
