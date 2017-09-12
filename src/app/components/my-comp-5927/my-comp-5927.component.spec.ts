import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp5927Component } from './my-comp-5927.component';

describe('MyComp5927Component', () => {
  let component: MyComp5927Component;
  let fixture: ComponentFixture<MyComp5927Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp5927Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp5927Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
