import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3307Component } from './my-comp-3307.component';

describe('MyComp3307Component', () => {
  let component: MyComp3307Component;
  let fixture: ComponentFixture<MyComp3307Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3307Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
