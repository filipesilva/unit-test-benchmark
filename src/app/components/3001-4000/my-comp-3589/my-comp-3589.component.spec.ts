import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3589Component } from './my-comp-3589.component';

describe('MyComp3589Component', () => {
  let component: MyComp3589Component;
  let fixture: ComponentFixture<MyComp3589Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3589Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3589Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
