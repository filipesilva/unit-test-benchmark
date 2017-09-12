import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3708Component } from './my-comp-3708.component';

describe('MyComp3708Component', () => {
  let component: MyComp3708Component;
  let fixture: ComponentFixture<MyComp3708Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3708Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3708Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
