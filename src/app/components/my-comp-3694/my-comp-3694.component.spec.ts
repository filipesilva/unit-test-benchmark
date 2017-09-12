import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3694Component } from './my-comp-3694.component';

describe('MyComp3694Component', () => {
  let component: MyComp3694Component;
  let fixture: ComponentFixture<MyComp3694Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3694Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3694Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
