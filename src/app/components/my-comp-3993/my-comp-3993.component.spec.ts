import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3993Component } from './my-comp-3993.component';

describe('MyComp3993Component', () => {
  let component: MyComp3993Component;
  let fixture: ComponentFixture<MyComp3993Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3993Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3993Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
