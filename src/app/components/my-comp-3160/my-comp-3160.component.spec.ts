import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3160Component } from './my-comp-3160.component';

describe('MyComp3160Component', () => {
  let component: MyComp3160Component;
  let fixture: ComponentFixture<MyComp3160Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3160Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3160Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
