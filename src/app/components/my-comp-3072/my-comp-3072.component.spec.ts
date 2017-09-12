import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3072Component } from './my-comp-3072.component';

describe('MyComp3072Component', () => {
  let component: MyComp3072Component;
  let fixture: ComponentFixture<MyComp3072Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3072Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3072Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
