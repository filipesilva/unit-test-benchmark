import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp406Component } from './my-comp-406.component';

describe('MyComp406Component', () => {
  let component: MyComp406Component;
  let fixture: ComponentFixture<MyComp406Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp406Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp406Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
