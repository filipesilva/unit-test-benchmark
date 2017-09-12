import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3537Component } from './my-comp-3537.component';

describe('MyComp3537Component', () => {
  let component: MyComp3537Component;
  let fixture: ComponentFixture<MyComp3537Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3537Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3537Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
