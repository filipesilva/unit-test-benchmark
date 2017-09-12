import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3494Component } from './my-comp-3494.component';

describe('MyComp3494Component', () => {
  let component: MyComp3494Component;
  let fixture: ComponentFixture<MyComp3494Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3494Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3494Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
