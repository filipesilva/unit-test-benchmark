import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3258Component } from './my-comp-3258.component';

describe('MyComp3258Component', () => {
  let component: MyComp3258Component;
  let fixture: ComponentFixture<MyComp3258Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3258Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3258Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
