import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3056Component } from './my-comp-3056.component';

describe('MyComp3056Component', () => {
  let component: MyComp3056Component;
  let fixture: ComponentFixture<MyComp3056Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3056Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3056Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
