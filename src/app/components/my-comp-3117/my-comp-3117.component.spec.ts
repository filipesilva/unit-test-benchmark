import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3117Component } from './my-comp-3117.component';

describe('MyComp3117Component', () => {
  let component: MyComp3117Component;
  let fixture: ComponentFixture<MyComp3117Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3117Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3117Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
