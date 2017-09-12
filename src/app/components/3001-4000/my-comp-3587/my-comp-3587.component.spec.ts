import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3587Component } from './my-comp-3587.component';

describe('MyComp3587Component', () => {
  let component: MyComp3587Component;
  let fixture: ComponentFixture<MyComp3587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
