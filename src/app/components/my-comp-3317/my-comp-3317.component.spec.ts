import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3317Component } from './my-comp-3317.component';

describe('MyComp3317Component', () => {
  let component: MyComp3317Component;
  let fixture: ComponentFixture<MyComp3317Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3317Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3317Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
