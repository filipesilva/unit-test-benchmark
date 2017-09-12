import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp7587Component } from './my-comp-7587.component';

describe('MyComp7587Component', () => {
  let component: MyComp7587Component;
  let fixture: ComponentFixture<MyComp7587Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp7587Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp7587Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
