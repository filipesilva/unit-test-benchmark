import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3402Component } from './my-comp-3402.component';

describe('MyComp3402Component', () => {
  let component: MyComp3402Component;
  let fixture: ComponentFixture<MyComp3402Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3402Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3402Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
