import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3437Component } from './my-comp-3437.component';

describe('MyComp3437Component', () => {
  let component: MyComp3437Component;
  let fixture: ComponentFixture<MyComp3437Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3437Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3437Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
