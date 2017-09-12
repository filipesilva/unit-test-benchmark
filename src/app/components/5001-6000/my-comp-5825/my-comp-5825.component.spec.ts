import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5825Component } from './my-comp-5825.component';

describe('MyComp5825Component', () => {
  let component: MyComp5825Component;
  let fixture: ComponentFixture<MyComp5825Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5825Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5825Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
