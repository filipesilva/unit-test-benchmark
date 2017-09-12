import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3905Component } from './my-comp-3905.component';

describe('MyComp3905Component', () => {
  let component: MyComp3905Component;
  let fixture: ComponentFixture<MyComp3905Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3905Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3905Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
