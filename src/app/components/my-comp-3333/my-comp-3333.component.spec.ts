import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyComp3333Component } from './my-comp-3333.component';

describe('MyComp3333Component', () => {
  let component: MyComp3333Component;
  let fixture: ComponentFixture<MyComp3333Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyComp3333Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyComp3333Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
