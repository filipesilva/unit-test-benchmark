import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3566Component } from './my-comp-3566.component';

describe('MyComp3566Component', () => {
  let component: MyComp3566Component;
  let fixture: ComponentFixture<MyComp3566Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3566Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3566Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
