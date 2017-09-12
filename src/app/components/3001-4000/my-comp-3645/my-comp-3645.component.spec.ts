import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3645Component } from './my-comp-3645.component';

describe('MyComp3645Component', () => {
  let component: MyComp3645Component;
  let fixture: ComponentFixture<MyComp3645Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3645Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3645Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
