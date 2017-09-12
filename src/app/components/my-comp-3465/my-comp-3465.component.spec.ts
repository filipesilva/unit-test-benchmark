import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3465Component } from './my-comp-3465.component';

describe('MyComp3465Component', () => {
  let component: MyComp3465Component;
  let fixture: ComponentFixture<MyComp3465Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3465Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3465Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
