import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3452Component } from './my-comp-3452.component';

describe('MyComp3452Component', () => {
  let component: MyComp3452Component;
  let fixture: ComponentFixture<MyComp3452Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3452Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3452Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
