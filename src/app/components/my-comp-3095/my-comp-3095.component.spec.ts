import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3095Component } from './my-comp-3095.component';

describe('MyComp3095Component', () => {
  let component: MyComp3095Component;
  let fixture: ComponentFixture<MyComp3095Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3095Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3095Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
