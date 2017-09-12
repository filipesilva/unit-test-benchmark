import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5907Component } from './my-comp-5907.component';

describe('MyComp5907Component', () => {
  let component: MyComp5907Component;
  let fixture: ComponentFixture<MyComp5907Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5907Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5907Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
