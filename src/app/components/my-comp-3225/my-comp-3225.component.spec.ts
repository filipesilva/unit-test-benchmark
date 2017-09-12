import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3225Component } from './my-comp-3225.component';

describe('MyComp3225Component', () => {
  let component: MyComp3225Component;
  let fixture: ComponentFixture<MyComp3225Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3225Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3225Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
