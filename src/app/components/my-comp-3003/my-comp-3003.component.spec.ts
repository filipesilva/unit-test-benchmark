import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3003Component } from './my-comp-3003.component';

describe('MyComp3003Component', () => {
  let component: MyComp3003Component;
  let fixture: ComponentFixture<MyComp3003Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3003Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3003Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
