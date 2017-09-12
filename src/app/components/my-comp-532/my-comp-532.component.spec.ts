import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp532Component } from './my-comp-532.component';

describe('MyComp532Component', () => {
  let component: MyComp532Component;
  let fixture: ComponentFixture<MyComp532Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp532Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp532Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
