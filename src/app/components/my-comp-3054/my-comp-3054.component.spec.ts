import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3054Component } from './my-comp-3054.component';

describe('MyComp3054Component', () => {
  let component: MyComp3054Component;
  let fixture: ComponentFixture<MyComp3054Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3054Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3054Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
