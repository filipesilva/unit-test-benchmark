import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3634Component } from './my-comp-3634.component';

describe('MyComp3634Component', () => {
  let component: MyComp3634Component;
  let fixture: ComponentFixture<MyComp3634Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3634Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3634Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
