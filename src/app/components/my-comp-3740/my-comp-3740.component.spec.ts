import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3740Component } from './my-comp-3740.component';

describe('MyComp3740Component', () => {
  let component: MyComp3740Component;
  let fixture: ComponentFixture<MyComp3740Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3740Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3740Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
