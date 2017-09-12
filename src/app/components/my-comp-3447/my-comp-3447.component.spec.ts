import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3447Component } from './my-comp-3447.component';

describe('MyComp3447Component', () => {
  let component: MyComp3447Component;
  let fixture: ComponentFixture<MyComp3447Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3447Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3447Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
