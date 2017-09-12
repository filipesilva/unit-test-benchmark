import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3786Component } from './my-comp-3786.component';

describe('MyComp3786Component', () => {
  let component: MyComp3786Component;
  let fixture: ComponentFixture<MyComp3786Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3786Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3786Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
