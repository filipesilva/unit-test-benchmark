import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3793Component } from './my-comp-3793.component';

describe('MyComp3793Component', () => {
  let component: MyComp3793Component;
  let fixture: ComponentFixture<MyComp3793Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3793Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3793Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
