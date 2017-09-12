import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3910Component } from './my-comp-3910.component';

describe('MyComp3910Component', () => {
  let component: MyComp3910Component;
  let fixture: ComponentFixture<MyComp3910Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3910Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3910Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
