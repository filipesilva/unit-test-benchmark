import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3240Component } from './my-comp-3240.component';

describe('MyComp3240Component', () => {
  let component: MyComp3240Component;
  let fixture: ComponentFixture<MyComp3240Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3240Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3240Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
