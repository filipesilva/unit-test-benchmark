import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3939Component } from './my-comp-3939.component';

describe('MyComp3939Component', () => {
  let component: MyComp3939Component;
  let fixture: ComponentFixture<MyComp3939Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3939Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3939Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
