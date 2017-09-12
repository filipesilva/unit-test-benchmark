import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5868Component } from './my-comp-5868.component';

describe('MyComp5868Component', () => {
  let component: MyComp5868Component;
  let fixture: ComponentFixture<MyComp5868Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5868Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5868Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
