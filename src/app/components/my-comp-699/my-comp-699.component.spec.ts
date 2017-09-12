import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp699Component } from './my-comp-699.component';

describe('MyComp699Component', () => {
  let component: MyComp699Component;
  let fixture: ComponentFixture<MyComp699Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp699Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp699Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
