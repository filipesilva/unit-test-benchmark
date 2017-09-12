import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3052Component } from './my-comp-3052.component';

describe('MyComp3052Component', () => {
  let component: MyComp3052Component;
  let fixture: ComponentFixture<MyComp3052Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3052Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3052Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
