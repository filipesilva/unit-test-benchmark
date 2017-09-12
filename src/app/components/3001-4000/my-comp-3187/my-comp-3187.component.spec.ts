import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3187Component } from './my-comp-3187.component';

describe('MyComp3187Component', () => {
  let component: MyComp3187Component;
  let fixture: ComponentFixture<MyComp3187Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3187Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3187Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
