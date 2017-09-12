import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3542Component } from './my-comp-3542.component';

describe('MyComp3542Component', () => {
  let component: MyComp3542Component;
  let fixture: ComponentFixture<MyComp3542Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3542Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3542Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
