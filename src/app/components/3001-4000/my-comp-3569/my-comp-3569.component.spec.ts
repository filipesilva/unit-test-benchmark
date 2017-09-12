import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3569Component } from './my-comp-3569.component';

describe('MyComp3569Component', () => {
  let component: MyComp3569Component;
  let fixture: ComponentFixture<MyComp3569Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3569Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3569Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
